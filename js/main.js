const gameBoard = (() => {
	//Game Setup
  let gamePositions;
  let btnClick;
  let movesCounter;
	let player1, player2;
	let currentPlayer;
  const winningCombos = [
    ['one', 'two', 'three'],
    ['four','five', 'six'],
    ['seven','eight','nine'],
    ['one','four','seven'],
    ['two','five','eight'],
    ['three','six','nine'],
    ['one','five','nine'],
    ['three','five','seven']
  ];
	const render = function (template, node) {
	  node.innerHTML = template;
	};
	//Player functions
	const playerFactory = (name,mark) => {
	  return { name, mark }
	}
	// createPlayer function
	const playerCreation = () => {
		let p1Name = document.getElementById('player1_name').value
		let p2Name = document.getElementById('player2_name').value
		player1.name = p1Name
		player2.name = p2Name
		renderGameBoard();
	}
	//Game Logic functions
	const makeMove = (buttonId) => {
		if (player1.name === "" || player2.name === "") {
			let errorMessage = `<div class='error'>
														<h3>You need to submit your name to start the game!</h3>
													</div>`
			renderGameBoard(errorMessage);
		}
		btnClick[buttonId] = '';
		gamePositions[buttonId] = currentPlayer.mark;
		movesCounter++;
    if (checkWin()) {
      displayResults('won', currentPlayer);
    } else if (movesCounter === 9) {
			displayResults('draw');
		} else {
        switchPlayer();
		    renderGameBoard();

    }
	}
	const renderGameBoard = (resultsTemplate = "") => {
    let playerForm = `<div class="players-info">
												<label for="player1_name">Player X: </label>
												<input type="text" id="player1_name"></input>
												<label for="player2_name">Player O: </label>
												<input type="text" id="player2_name"></input>
												<button onclick="gameBoard.playerCreation()">Start</button>
											</div>`
    let gameBoard = `<div id='gameboard'>
                      <div>
                        <button onclick=${btnClick.one} id='one'>${gamePositions.one}</button>
                        <button onclick=${btnClick.two}  id='two'>${gamePositions.two}</button>
                        <button onclick=${btnClick.three}  id='three'>${gamePositions.three}</button>
                      </div>
                      <div>
                        <button onclick=${btnClick.four}  id='four'>${gamePositions.four}</button>
                        <button onclick=${btnClick.five}  id='five'>${gamePositions.five}</button>
                        <button onclick=${btnClick.six}  id='six'>${gamePositions.six}</button>
                      </div>
                      <div>
                        <button onclick=${btnClick.seven}  id='seven'>${gamePositions.seven}</button>
                        <button onclick=${btnClick.eight}  id='eight'>${gamePositions.eight}</button>
                        <button onclick=${btnClick.nine}  id='nine'>${gamePositions.nine}</button>
                      </div>
                    </div>`;
    if (player1.name && player2.name) {
      renderTemplate = gameBoard + resultsTemplate;
    } else {
      renderTemplate = playerForm + gameBoard + resultsTemplate;
    }
	  render(renderTemplate, document.querySelector('#container'));
  };
  // checkWin function
  const checkWin = () => {
    for (let i = 0; i < winningCombos.length; i++) {
      if (gamePositions[winningCombos[i][0]] === currentPlayer.mark &&
          gamePositions[winningCombos[i][1]] === currentPlayer.mark &&
          gamePositions[winningCombos[i][2]] === currentPlayer.mark) {
              return true;
          };
      }
  }
	// switchPlayer function
	const switchPlayer = () => { (currentPlayer === player1) ? currentPlayer = player2 : currentPlayer = player1 }
  
  // displayResult function
	const displayResults = (result, player) => {
		if (result === "draw") {
			let drawTemplate = `<div class="result-draw">
                            <h3>It's a draw!</h3>
                            <button onclick="gameBoard.startGame()">Play Again?</button>
													</div>`;
			renderGameBoard(drawTemplate);
		} else if (result === "won") {
			let winTemplate = `<div class="result-win">
														<h3>${player.name} wins!</h3>
														<button onclick="gameBoard.startGame()">Play Again?</button>
													</div>`;
			renderGameBoard(winTemplate);
    };
	}
	const startGame = () => {
		gamePositions = {
			one: '',
			two: '',
			three: '',
			four: '',
			five: '',
			six: '',
			seven: '',
			eight: '',
			nine: ''
		};
		btnClick = {
			one: "gameBoard.makeMove('one')",
			two: "gameBoard.makeMove('two')",
			three: "gameBoard.makeMove('three')",
			four: "gameBoard.makeMove('four')",
			five: "gameBoard.makeMove('five')",
			six: "gameBoard.makeMove('six')",
			seven: "gameBoard.makeMove('seven')",
			eight: "gameBoard.makeMove('eight')",
			nine: "gameBoard.makeMove('nine')",
		};
		movesCounter = 0
		player1 = playerFactory("", "X");
		player2 = playerFactory("", "O");
		currentPlayer = player1;
		renderGameBoard();
	}
	return {
		startGame,
		playerCreation,
		makeMove
	}
})();
gameBoard.startGame();