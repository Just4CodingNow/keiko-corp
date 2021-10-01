import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

const files = await imagemin(['img/*.{jpg,png}'], {
	destination: 'build/images',
	plugins: [
		imageminJpegtran(),
		imageminPngquant({
			quality: [0.3, 0.3]
		})
	]
});

console.log(files);