// const nama = 'refi'
// const cetakNama = (nama) => `Hi, nama saya ${nama}`
// console.log(cetakNama('refi'))
// const fs = require('fs') //core module
// const cetakNama = require('./coba') //local module
// const moment = require('moment'); //third party module / npm module / node_modules


// console.log(cetakNama('refi'));

// const cetakNama = require('./coba')
// const PI = require('./coba')
const coba = require('./coba');

console.log(coba.cetakNama('refi'), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang())
