/*const wrapper1BlockNodes = document.querySelectorAll('.wrapper_1 .block1');
const wrapper2BlockNodes = document.querySelectorAll('.wrapper_2 .block');
const wrapper2Node = document.querySelector('.wrapper_2');
const wrapper3BlockNodes = document.querySelectorAll('.wrapper_3 .block3');
const wrapper3Node = document.querySelector('.wrapper_3');

for (let i = 0; i < wrapper1BlockNodes.length; i++) {
	wrapper1BlockNodes[i].addEventListener('click', (event) => {
		eventClickHandler(event, i, wrapper1BlockNodes, wrapper2BlockNodes, wrapper2Node, wrapper3BlockNodes, wrapper3Node);
	});
}

function eventClickHandler(event ,i, wrapper1BlockNodes, wrapper2BlockNodes, wrapper2Node, wrapper3BlockNodes, wrapper3Node) {
	if (eventClickHandler.lastIndex === undefined) {
		eventClickHandler.lastIndex = i;
		wrapper1BlockNodes[i].classList.add('block_active');
		wrapper2BlockNodes[i].classList.add('block_active');
		wrapper3BlockNodes[i].classList.add('block_active');
	} else if (i !== eventClickHandler.lastIndex) {
		const lastIndex = eventClickHandler.lastIndex;
		wrapper1BlockNodes[lastIndex].classList.remove('block_active');
		wrapper2BlockNodes[lastIndex].classList.remove('block_active');
		wrapper3BlockNodes[lastIndex].classList.remove('block_active');

		wrapper1BlockNodes[i].classList.add('block_active');
		wrapper2BlockNodes[i].classList.add('block_active');
		wrapper3BlockNodes[i].classList.add('block_active');
		eventClickHandler.lastIndex = i;
	}
	wrapper2Node.style.setProperty('--currentIndex', i);
	wrapper3Node.style.setProperty('--currentIndex', i);

	// console.log(wrapper2BlockNodes[i]);
}*/