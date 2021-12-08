let shownImage;

const showImage = function(num) {
	shownImage = num;

	let idString = "img_" + num;

	let image = document.getElementById(idString);

	if (image.style.display === '' || image.style.display === 'none'){
			image.parentElement.style.display = 'inline-block';
			image.style.display = 'inline-block';
	}
}

const hideImage = function() {
	let div = document.getElementById('full_size_images');

	let img = document.getElementById('img_' +  shownImage);

	img.style.display = 'none';
	div.style.display = 'none';
}