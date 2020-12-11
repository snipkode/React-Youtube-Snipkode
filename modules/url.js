const url = require('url');

const myUrl = new URL('https://myweb.com:8080/hello.html?id=10&status=Active');

// cek url
console.log(myUrl.href) // Mengembalikan nilai https://myweb.com:8080hello.html?id=10&status=Active
console.log(myUrl.toString()) // Mengembalikan nilai https://myweb.com:8080hello.html?id=10&status=Active

// cek home web atau host
console.log(myUrl.host) // Mengembalikan nilai https://myweb.com:8080 (root domain)
console.log(myUrl.hostname) // Mengembalikan nilai https://myweb.com (hostname)

// cek path
console.log(myUrl.pathname) // Mengembalikan nilai /hello.html

// cek serialize parameter
console.log(myUrl.search)

// cek object parameter url
console.log(myUrl.searchParams);

// Mengambil id didalam object searchParams
console.log(myUrl.searchParams.get('id'));
console.log(myUrl.searchParams.get('status'));

// Menambahkan Parameter Secara dinamis dengan metode append()
myUrl.searchParams.append('mode', 'seller')
console.log(myUrl.searchParams)

// Pengulangan pada params

myUrl.searchParams.forEach((value, key)=>{
	console.log(`${value} : ${key}`)
})