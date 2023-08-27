// This service will help crop the images to smaller sizes to make the page load faster and save data. Luckily the api itself supports cropping images.

import noImage from '../assets/no-image-placeholder-6f3882e0.webp'

const getCroppedImageUrl = (url: string) => {
	if (!url) return noImage;

	//The targeted word where we want to modify the url
	const target = "media/";

	// The position of the target in the url + the number of the letters. Basically, we'll end up behind media/
	const index = url.indexOf(target) + target.length;

	// Modify the url after getting the right position (the modifier crops the image. It comes with the api)
	return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
