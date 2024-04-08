// Example 1
const { createServer } = require('node:http');

const host = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!')
})

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
})

// http'nin createServer() yöntemi yeni bir HTTP sunucusu oluşturur ve bunu döndürür.

// Sunucu, belirtilen bağlantı noktası ve ana bilgisayar adını dinleyecek şekilde ayarlanır. Sunucu hazır olduğunda, bu durumda sunucunun çalıştığını bize bildiren geri arama işlevi çağrılır.

// Yeni bir istek alındığında, istek olayı çağrılır ve iki nesne sağlar: bir istek (bir http.IncomingMessage nesnesi) ve bir yanıt (bir http.ServerResponse nesnesi).

// Bu 2 nesne HTTP çağrısını işlemek için gereklidir.

// "Başarılı" bir yanıtı belirtmek için statusCode özelliğini 200 olarak ayarlıyoruz.



