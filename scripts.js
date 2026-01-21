const boxes = document.querySelectorAll('.left-column .box');
const contents = document.querySelectorAll('.right .content');

boxes.forEach(box => {

	function showContent() {
        // Hide all contents
        contents.forEach(content => {
            content.classList.remove('active'); // Remove active class for fade out
            content.style.display = 'none'; // Hide immediately to reset for fade in
        });

		// Show the corresponding content
		const contentClass = box.id + '-content';
		const activeContent = document.querySelector(`.${contentClass}`);
		if (activeContent) {
			activeContent.style.display = 'block';
			setTimeout(() => {
				activeContent.classList.add('active'); // Fade in
			}, 10); // Small timeout to allow for display
		}
	}

	// Mouse hover listener for computers
	box.addEventListener('mouseenter', () => {
		showContent();
	});

	// Touch listener for large touch screens, small screens have a separate menu
	box.addEventListener('touchstart', () => {
		event.preventDefault();
		showContent();
	});

});

// Toggle light mode on thoughts page
function lightMode() {
	var element = document.body;
	element.classList.toggle("light-mode");
}
