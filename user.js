class User {
	constructor(nama, umur){
		this.nama = nama;
		this.umur = umur;
	}

	Title(){
		console.log(`This is my personality ${this.nama} berumur ${this.umur}`)
	}
}

module.exports = User;