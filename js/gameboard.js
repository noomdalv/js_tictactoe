const gameBoard = (() => {

	let gameArr = new Array(9);

	const render = function (template, node) {
	  node.innerHTML = template;
	};

	const renderGameBoard = function () {

	  let template = ``;


	  for (let i = 0; i < 9; i++) {
	    gameArr.push(`<button id='bt-${i}>${i+1}</button>`)
	  };
	  render(template, document.querySelector('#game-board'));
	  console.log(template);
	};


}())
