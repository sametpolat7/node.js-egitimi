const myPromise = new Promise((resolve, reject) => {
    resolve('Veriler alindi');
    reject('Veriler alinamadi!');
})

myPromise
    .then((value) => console.log(value))
    .catch((err) => console.log(err))



const books = [
    { yazar: 'Yazar1', kitap: 'Kitap1' },
    { yazar: 'Yazar2', kitap: 'Kitap2' },
    { yazar: 'Yazar3', kitap: 'Kitap3' }
];

const showBooks = () => {
    books.map((book) => {
        return console.log(book.kitap);
    })
}

// showBooks();

// Evet, gözlemlediğiniz yürütme sırası gerçekten de JavaScript'teki event loop tarafından sıralandırılmıştır.

// JavaScript kodu yürütüldüğünde, tek iş parçacıklı bir ortamda çalışır. Bu, herhangi bir zamanda yalnızca bir kod parçasının yürütüldüğü anlamına gelir. Ancak JavaScript, belirli işlemlerin ertelenmesine ve daha sonra yürütülmesine olanak tanıyan Sözler gibi eşzamansız özelliklere sahiptir.

// Kodunda:

// Promise oluşturulur ve hemen 'Veriler alindi' mesajıyla çözümlenir. Ancak, ona bağlı olan .then() bloğu asenkrondur. Bu nedenle, Promise hemen çözümlenmiş olsa da, .then() bloğu geçerli çağrı yığını boşalana kadar yürütülmez.

// Ardından, showBooks() işlevi eşzamanlı olarak çağrılır. Books dizisi içinde yineleme yapar ve kitapların adlarını kaydeder. Bu işlem senkronize olduğu için hızlı bir şekilde tamamlanır.

// Geçerli çağrı yığını boşaldıktan sonra (showBooks() yürütmeyi bitirdikten sonra), Promise'in .then() bloğu olay döngüsü tarafından alınır ve yürütülür. Bu, 'Veriler alindi' ifadesinin konsola kaydedildiği zamandır.

// Bu nedenle olay döngüsü, belirli eşzamansız işlemlerin (Söz çözümleme gibi) hemen gerçekleşmesine rağmen, geri arama işlevlerinin daha sonra, mevcut eşzamanlı kodun yürütülmesi bittikten sonra yürütülmek üzere sıraya alınmasını sağlar.

const addBook = (newBook) => {
    const promise = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
        reject('Bir hata olustu!')
    })
    return promise;
}

addBook({yazar: 'Yazar4', kitap: 'Kitap4'})
    .then(() => {
        console.log('Yeni Liste');
        showBooks();
    }).catch((err) => console.log(err))