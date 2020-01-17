const gameBoard = (() => {

	//Game Setup

  let gamePositions;
  let onclick;
  let movesCounter;
  let player1;
  let player2;
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

    onclick = {
      one: 'makeMove(one)',
      two: 'makeMove(two)',
      three: 'makeMove(three)',
      four: 'makeMove(four)',
      five: 'makeMove(five)',
      six: 'makeMove(six)',
      seven: 'makeMove(seven)',
      eight: 'makeMove(eight)',
      nine: 'makeMove(nine)',
    };

    movesCounter = 0;

    player1 = playerFactory(false, "X");
    player2 = playerFactory(false, "O");
    currentPlayer = player1;

    renderGameBoard();
  }


	const render = function (template, node) {
	  node.innerHTML = template;
	};

	const renderGameBoard = (resultsTemplate = "") => {

    let playerForm = `<div class="players-info">
												<label for="player1_name">Player X: </label>
												<input type="text" id="player1_name"></input>

												<label for="player2_name">Player O: </label>
												<input type="text" id="player2_name"></input>

												<button onclick="playerCreation()">Start</button>
											</div>`

    let gameBoard = `<div id='gameboard'>
                      <div>
                        <button onclick=${onclick.one} id='one'>${gamePositions.one}</button>
                        <button onclick=${onclick.two}  id='two'>${gamePositions.two}</button>
                        <button onclick=${onclick.three}  id='three'>${gamePositions.three}</button>
                      </div>
                      <div>
                        <button onclick=${onclick.four}  id='four'>${gamePositions.four}</button>
                        <button onclick=${onclick.five}  id='five'>${gamePositions.five}</button>
                        <button onclick=${onclick.six}  id='six'>${gamePositions.six}</button>
                      </div>
                      <div>
                        <button onclick=${onclick.seven}  id='seven'>${gamePositions.seven}</button>
                        <button onclick=${onclick.eight}  id='eight'>${gamePositions.eight}</button>
                        <button onclick=${onclick.nine}  id='nine'>${gamePositions.nine}</button>
                      </div>
                    </div>`;
										
    if (player1.name !== false && player2.name !== false) {
      renderTemplate = gameBoard + resultsTemplate;
    } else {
      renderTemplate = playerForm + gameBoard + resultsTemplate;
    }
	  render(renderTemplate, document.querySelector('#container'));
	  console.log(template);
  };


	//Player functions

	const playerFactory = (name,mark) => {
	  return { name, mark }
	}


	//Game Logic functions

  const makeMove = (buttonId) => {
    if (player1.name === false || player2.name === false) {
      let errorMessage = `<div class='error'>
                            <h3>You need to submit your name to start the game!</h3>
                          </div>`
      renderGameBoard(errorMessage);
    }

    onclick[buttonId] = '';
    gamePositions[buttonId] = currentPlayer.mark;
    movesCounter++;
    checkWin()
    if (movesCounter === 9) {
      displayResults('draw');
    }
    switchPlayer();
    renderGameBoard();
  }

  // checkWin function

  const checkWin = () => {
    let currMark = currentPlayer.mark
    for (let i = 0; i < winningCombos.length; i++) {
      if (gamePositions[winningCombos[i][0]] === currMark &&
          gamePositions[winningCombos[i][1]] === currMark &&
          gamePositions[winningCombos[i][2]] === currMark) {
            displayResults('won',currentPlayer);
          };
      }
  }


	// switchPlayer function

	const switchPlayer = () => {
		(currentPlayer === player1) ? currentPlayer = player2 : currentPlayer = player1
	}

	// displayResult function
	const displayResults = (result, player) => {
		if (result === "draw") {
			let drawTemplate = `<div class="result-draw">
                            <h3>It's a draw!</h3>
                            <button onclick="startGame()">Play Again?</button>
													</div>`;
			renderGameBoard(drawTemplate);
		} else if (result === "won") {
			let winTemplate = `<div class="result-win">
														<h3>${player.name} wins!</h3>
														<button onclick="startGame()">Play Again?</button>
													</div>`;
			renderGameBoard(winTemplate);
    };
	}

	// createPlayer function

	const playerCreation = () => {
		let p1Name = document.getElementById('player1_name').value
		let p2Name = document.getElementById('player2_name').value

		player1.name = p1Name
		player2.name = p2Name
	}

	startGame();
})();
