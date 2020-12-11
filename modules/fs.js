const fs = require('fs');
const path = require('path');

// Membuat folder
	// fs.mkdir(path.join(__dirname, '/Test'), {}, 
	// 	(err)=>{

	// 	if(err) throw err;
	// 	console.log('Folder telah dibuat');

	// })

// Membuat dan Menulis File
	// fs.writeFile(path.join(__dirname, '/Test', 'hello.txt'), 'selamat datang Alm',

	// 		(err)=>{
	// 			if(err) throw err;
	// 			console.log('Membuat file sukses');
	// 		}
	// 	)

// Menambahkan penulisan pada file

// fs.appendFile(path.join(__dirname, '/Test', 'hello.txt'), ' obigado',

// 			(err)=>{
// 				if(err) throw err;
// 				console.log('Membuat file sukses');
// 			}
// 		)

// Membaca File 

// fs.readFile(path.join(__dirname, '/Test', 'Hello.txt'), 'utf8', 

// 	(err, data) => {
// 		if(err) throw err;
// 		console.log('data berhasil dibaca', data);
// 	}

//  )

// Rename File 

 fs.rename(path.join(__dirname, '/Test', 'Hello.txt'), path.join(__dirname, '/Test', 'new.txt'),

 		(err) =>{
 			if(err) throw err;
 			console.log('file berhasil di rename')
 		}
 	)