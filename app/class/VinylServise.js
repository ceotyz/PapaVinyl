const Vinyl = require("./Vinyl");

class VinylServise {
	constructor() {
		
	}
	
	add(artist, title) {
		let v1 = new Vinyl(artist, title);
		console.log(v1);
	}

}
module.exports = VinylServise;



