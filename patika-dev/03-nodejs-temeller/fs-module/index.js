const fs = require('fs');
const path = require('path');

// Dosya Okuma

fs.readFile('./demo.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Dosya okunamadi!');
    }
    else {
        console.log('./demo.txt dosyasi okunuyor...', data);
    }
})

// const data = fs.readFileSync('./demo.txt', 'utf8');
// console.log('Ben senkron bir islemim.', data);

// Dosyaya Yazma
fs.writeFile('password.txt', 'index.jsden selamlar.', 'utf8', (err) => {
    if (err) {
        console.log('Dosyaya yazilamadi');
        return;
    }
    console.log('Dosyaya yazma basarili. Path: ./password.txt');
})

// Eğer password.txt dosyanız yoksa writeFile ilk çalıştığında önce dosyayı oluşturacak sonra üzerine yazacaktır.

// Farklı bir dizindeki dosyaya yazmak için:
const context = 'Lorem ipsum dolor sit!';
const directory = '../../../../';
const filePath = path.join(directory, 'node.js-example.txt')
fs.writeFile(filePath, context, 'utf8', (err) => {
    if (err) {
        console.log('Dosya yazilamadi!', err);
        return;
    }
    console.log('Uzak dosyaya yazma basarili. Path: ../Desktop');
})

// Veri Ekleme
// fs.appendFile('./demo.txt', '\n index.jsden veri ekleme islemi yapildi.', 'utf8', (err) => {
//     if (err) {
//         console.log('Veri ekleme basarisiz!');
//         return;
//     }
//     console.log('Veri ekleme basarili. Path: ./demo.txt');
// })

// Dosya Silme
fs.unlink(filePath, (err) => {
    if (err) {
        console.log('Dosya silinemedi!');
        return;
    }
    console.log('Dosya silme basarili. Path: ../Desktop');
})

// Klasör oluşturma
// fs.mkdir('deneme/assets', { recursive: true }, (err) => {
//     if (err) {
//         console.log('Dosya olusturulamadi!', err);
//         return;
//     }
//     console.log('Dosya basari ile olusturuldu.');
// })

// Klasör silme
// fs.rmdir('./deneme', {recursive: true}, (err) => {
//     if (err) {
//         console.log('Dosya silinemedi!', err);
//         return;
//     }
//     console.log('Dosya basari ile silindi.');
// })