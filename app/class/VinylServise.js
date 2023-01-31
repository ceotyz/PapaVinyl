const Vinyl = require("./Vinyl");
const NedbPromises = require('nedb-promises');

class VinylServise {
	constructor() {
		this.storage = NedbPromises.create({filename: './app/db/nedb/vinyls'});
	}
	add(artist, title) {
		let v1 = new Vinyl(artist, title);
		this.storage.insert(v1); 
		//console.log(this.storage);
	}
	async get() {
		return await this.storage.find({});
	}
}
module.exports = VinylServise;



