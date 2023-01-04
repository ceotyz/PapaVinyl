class Vinyl {
	constructor(art, tit) {
		this.artist = art;
		this.title = tit;
	}
	rename(tit) {
		this.title = tit;
	}

}
module.exports = Vinyl;