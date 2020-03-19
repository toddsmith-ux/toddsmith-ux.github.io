// Clicker for different portfolio cards
// Added to toggle function for show hide feature
document.querySelector('#showLess1').addEventListener('click', toggleContent);
document.querySelector('#showLess2').addEventListener('click', toggleContent);
document.querySelector('#showLess3').addEventListener('click', toggleContent);
document.querySelector('#showLess4').addEventListener('click', toggleContent);
document.querySelector('#showLess5').addEventListener('click', toggleContent);
document.querySelector('#showLess6').addEventListener('click', toggleContent);

// Identify the clicked element
// Details
function toggleContent() {
	var details;
	if (this.id == "showLess1")
		details = document.querySelector('#details1');
	if (this.id == "showLess2")
		details = document.querySelector('#details2');
	if (this.id == "showLess3")
		details = document.querySelector('#details3');
	if (this.id == "showLess4")
		details = document.querySelector('#details4');
	if (this.id == "showLess5")
		details = document.querySelector('#details5');
	if (this.id == "showLess6")
		details = document.querySelector('#details6');

	// Display details
	if (this.textContent == "See more") {
		details.style.display = 'block';
		this.textContent = "See less";
	}
	else {
		details.style.display = 'none';
		this.textContent = "See more";
	}
}