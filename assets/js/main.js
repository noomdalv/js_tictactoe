const gameBoard = (() => {
  // Game Setup
  let gamePositions;
  let btnClick;
  let movesCounter;
  let player1; let
    player2;
  let currentPlayer;
  const winningCombos = [
    ['one', 'two', 'three'],
    ['four', 'five', 'six'],
    ['seven', 'eight', 'nine'],
    ['one', 'four', 'seven'],
    ['two', 'five', 'eight'],
    ['three', 'six', 'nine'],
    ['one', 'five', 'nine'],
    ['three', 'five', 'seven'],
  ];
  const render = (template, node) => {
    node.innerHTML = template;
  };

  const renderGameBoard = (resultsTemplate = '') => {
    let renderTemplate;
    const playerForm = `<form>
                        <div class="form-group">
                          <label for="player1_name">Player X:</label>
                          <input type="text" class="form-control" id="player1_name">
                        </div>
                        <div class="form-group">
                          <label for="player2_name">Player O:</label>
													<input type="text" class="form-control" id="player2_name">
													<small id="playerHelp" class="form-text text-muted">Submit player names to be able to play.</small>
                        </div>
                        <button onclick="gameBoard.playerCreation()" class="btn-lg btn btn-primary start-button">Start</button>
                      </form>`;
    const gameBoard = `<div id='gameboard' class='col gameboard '>
                      <div class='row'>
                        <button onclick=${btnClick.one} id='one' class='cell'>${gamePositions.one}</button>
                        <button onclick=${btnClick.two}  id='two' class='cell'>${gamePositions.two}</button>
                        <button onclick=${btnClick.three}  id='three' class='cell'>${gamePositions.three}</button>
                      </div>
                      <div class='row'>
                        <button onclick=${btnClick.four}  id='four' class='cell'>${gamePositions.four}</button>
                        <button onclick=${btnClick.five}  id='five' class='cell'>${gamePositions.five}</button>
                        <button onclick=${btnClick.six}  id='six' class='cell'>${gamePositions.six}</button>
                      </div>
                      <div class='row'>
                        <button onclick=${btnClick.seven}  id='seven' class='cell'>${gamePositions.seven}</button>
                        <button onclick=${btnClick.eight}  id='eight' class='cell'>${gamePositions.eight}</button>
                        <button onclick=${btnClick.nine}  id='nine' class='cell'>${gamePositions.nine}</button>
                      </div>
                    </div>`;
    if (player1.name && player2.name) {
      renderTemplate = gameBoard + resultsTemplate;
    } else {
      renderTemplate = playerForm;
    }
    render(renderTemplate, document.querySelector('#container'));
  };

  // Player functions
  const playerFactory = (name, mark) => ({ name, mark });
  // createPlayer function
  const playerCreation = () => {
    const p1Name = document.getElementById('player1_name').value;
    const p2Name = document.getElementById('player2_name').value;
    player1.name = p1Name;
    player2.name = p2Name;
    renderGameBoard();
  };
  // checkWin function
  const checkWin = () => {
    let win = false;
    for (let i = 0; i < winningCombos.length; i++) {
      if (gamePositions[winningCombos[i][0]] === currentPlayer.mark
          && gamePositions[winningCombos[i][1]] === currentPlayer.mark
          && gamePositions[winningCombos[i][2]] === currentPlayer.mark) {
        win = true;
      }
    }
    return win;
  };
  // switchPlayer function
  const switchPlayer = () => {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  };

  // displayResult function
  const displayResults = (result, player) => {
    if (result === 'draw') {
      const drawTemplate = `<div class="result-box mx-auto">
	                            <h3 class="text-center">It's a draw!</h3>
	                            <button onclick="gameBoard.startGame()" class="btn btn-lg btn-success btn-block">Play Again?</button>
														</div>`;
      renderGameBoard(drawTemplate);
    } else if (result === 'won') {
      const winTemplate = `<div class="result-box">
														<h3 class="text-center">${player.name} wins!</h3>
														<button onclick="gameBoard.startGame()" class="btn btn-lg btn-success btn-block">Play Again?</button>
													</div>`;
      renderGameBoard(winTemplate);
    }
  };
  // Game Logic functions
  const makeMove = (buttonId) => {
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
  };
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
      nine: '',
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
    movesCounter = 0;
    player1 = playerFactory('', 'X');
    player2 = playerFactory('', 'O');
    currentPlayer = player1;
    renderGameBoard();
  };
  return {
    startGame,
    playerCreation,
    makeMove,
  };
})();
gameBoard.startGame();
