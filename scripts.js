const boxes = document.querySelectorAll('.left-column .box');
const contents = document.querySelectorAll('.right .content');

boxes.forEach(box => {
	
	function showContent() {
		// Hide all contents
		contents.forEach(content => content.style.display = 'none');
		// Show the corresponding content
		const contentClass = box.id + '-content';
		const activeContent = document.querySelector(`.${contentClass}`);
		if (activeContent) {
			activeContent.style.display = 'block';
		}
	}
	
	// Mouse hover listener for computers
	box.addEventListener('mouseenter', () => {
		showContent();
	});
	
	// Touch listener for large touch screens, small screens have a separate menu
	box.addEventListener('touchstart', () => {
		showContent();
	});

	/* This isn't necessary, the content needs to be clickable
	box.addEventListener('mouseleave', () => {
		// Hide all contents when mouse leaves
		contents.forEach(content => content.style.display = 'none');
	});
	*/
});

// Toggle light mode on thoughts page
function lightMode() {
	var element = document.body;
	element.classList.toggle("light-mode");
}