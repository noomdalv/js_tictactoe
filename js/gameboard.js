const gameBoard = (() => {

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
  
  return { renderGameBoard, gameArr }
})();


export {gameboard};