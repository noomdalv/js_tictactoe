const gameBoard = (() => {

	//Game Setup

	let gamePositions = {
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

	const render = function (template, node) {
	  node.innerHTML = template;
	};

	const renderGameBoard = function () {

    let template = `<div id='gameboard'>
                      <div>
                        <button onclick='makeMove(one)' id='one'>${gamePositions.one}</button>
                        <button onclick='makeMove(two)' id='two'>${gamePositions.two}</button>
                        <button onclick='makeMove(three)' id='three'>${gamePositions.three}</button>
                      </div>
                      <div>
                        <button onclick='makeMove(four)' id='four'>${gamePositions.four}</button>
                        <button onclick='makeMove(five)' id='five'>${gamePositions.five}</button>
                        <button onclick='makeMove(six)' id='six'>${gamePositions.six}</button>
                      </div>
                      <div>
                        <button onclick='makeMove(seven)' id='seven'>${gamePositions.seven}</button>
                        <button onclick='makeMove(eight)' id='eight'>${gamePositions.eight}</button>
                        <button onclick='makeMove(nine)' id='nine'>${gamePositions.nine}</button>
                      </div>
                    </div>`;

	  render(template, document.querySelector('#container'));
	  console.log(template);
  };


	//Player functions

	const playerFactory = (name,mark) => {
	  return { name, mark }
	}


	//Game Logic functions

  let movesCounter = 0;

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

  const makeMove = (buttonId) => {
    let button = document.getElementById(buttonId);
    button.setAttribute('onclick','');
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
          gamePositions[winningCombos[i][1] === currMark &&
          gamePositions[winningCombos[i][2] === currMark) {
            displayResults('won',currentPlayer);
          };
      }
  }


	// switchPlayer function
	let player1 = playerFactory(false, "X");
	let player2 = playerFactory(false, "O");
	let currentPlayer = player1;

	const switchPlayer = () => {
		(currentPlayer === player1) ? currentPlayer = player2 : currentPlayer = player1
	}

	// displayResult function


	// createPlayer function

	const playerCreation = () => {
		let p1Name = document.getElementById('player1_name').value
		let p2Name = document.getElementById('player2_name').value

		player1.name = p1Name
		player2.name = p2Name
	}


	// playAgain function


  renderGameBoard();
})();
