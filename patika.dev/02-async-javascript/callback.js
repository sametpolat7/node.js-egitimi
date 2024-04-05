// Basit bir şekilde callback fonksiyonu simüle edelim.

// Ama öncelikle JavaScript'in senkron yapısını bir anlayalım.
console.log('1. gorev');
console.log('2. gorev');
console.log('3. gorev');

// Görüldüğü üzere çıktı sırayla 1, 2, 3 şeklinde gelecektir.

let x = 5;
console.log('1. gorev', x);

setTimeout(() => {
    x += 5;
}, 3000)
console.log('2. gorev', x);

x += 5
console.log('3. gorev', x);

// Görüldüğü üzere ikinci x konsolda 5 olarak (anında) gözükecektir. Bunun nedeni JavaScript'in değerinin güncellendiğini bilmemesidir! Peki nasıl bilecek. Bir callback fonksiyonu ile:

let y = 5;
console.log('1. gorev', y);

setTimeout(() => {
    y += 5;
    console.log('2. gorev', y);
}, 3000);

y += 5;
console.log('3. gorev', y); 

// Şimdi bunu daha gerçekci bi senaryo ile simüle edelim.

const books = [
    {yazar: 'Yazar1', kitap: 'Kitap1'},
    {yazar: 'Yazar2', kitap: 'Kitap2'},
    {yazar: 'Yazar3', kitap: 'Kitap3'}
]

const showBooks = () => {
    return books.map((book) => {
        console.log(book.kitap);
    })
}

// showBooks(); Bu haliyle JavaScript eklenen kitabı konsolda görüntüleyemez. Çünkü varlığından haberi yoktur! Listeleme başladığında kitap daha eklenmemiştir.

// const addBook = (newBook) => {
//     return books.push(newBook);
// }

// addBook({yazar: 'Yazar4', kitap: 'Kitap4'});

// İşte bu sorunu çözmek ve her ekleme işleminde listelemeyi de yapmak için 'callback' fonksiyonu kullanırız.

const addBook = (newBook, callback) => {
    books.push(newBook);
    callback();
}

addBook({yazar: 'Yazar4', kitap: 'Kitap4'}, showBooks)