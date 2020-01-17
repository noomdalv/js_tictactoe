const gameBoard = (() => {

	//Game Setup

	let gameArr = [1,2,3,4,5,6,7,8,9];

	const render = function (template, node) {
	  node.innerHTML = template;
	};

	const renderGameBoard = function () {

    let template = `<div id='gameboard'>
                      <div>
                        <button id='0'>${gameArr[0]}</button>
                        <button id='1'>${gameArr[1]}</button>
                        <button id='2'>${gameArr[2]}</button>
                      </div>
                      <div>
                        <button id='3'>${gameArr[3]}</button>
                        <button id='4'>${gameArr[4]}</button>
                        <button id='5'>${gameArr[5]}</button>
                      </div>
                      <div>
                        <button id='6'>${gameArr[6]}</button>
                        <button id='7'>${gameArr[7]}</button>
                        <button id='8'>${gameArr[8]}</button>
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

	// playMove function


	// checkWin function


	// switchPlayer function
	let player1 = playerFactory(false, "X");
	let player2 = playerFactory(false, "O");
	let currentPlayer =

	const switchPlayer = () => {
		(currentPlayer == player1) ? currentPlayer = player2 : currentPlayer = player1
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
