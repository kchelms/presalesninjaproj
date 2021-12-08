const showImage = function(num) {
	let idString = "img_" + num;

	let image = document.getElementById(idString);

	let imageDisplayAttr = image.style.dislpay;

	if (imageDisplayAttr === 'none') {
		image.style.display = 'initial';
	}

	else image.style.display = 'none';
}