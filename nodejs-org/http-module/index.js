// Create a Server
const http = require('node:http');

// Node.js'de http.createServer() yöntemi, bir EventEmitter olan http.Server sınıfının bir örneğini döndürür. createServer() yöntemine bir geri arama işlevi aktararak, aslında 'request' olayı için bir dinleyici kurmuş olursunuz. Böylece, sunucu tarafından bir HTTP isteği alındığında, sağladığınız geri arama işlevi yürütülecek, isteği işleyecek ve uygun yanıtı üretecektir. Bu, HTTP sunucuları oluşturmak için Node.js'de yaygın bir modeldir.

const server = http.createServer((req, res) => {
  // Node.js'de, gelen bir HTTP isteğini işlerken, 'request' nesnesi üzerindeki özellikler aracılığıyla HTTP yöntemi (GET, POST, vb.) veya isteğin URL'si gibi yararlı bilgilere erişebilirsiniz.

  // Request nesnesi IncomingMessage'ın bir örneğidir.

  const { method, url, headers, rawHeaders } = req;
  console.log(method);
  console.log(url);

  //   Node.js'de, istek nesnesinin headers özelliği istekle birlikte gönderilen tüm HTTP başlıklarını içerir. Küçük harfli adlarını kullanarak tek tek başlıklara erişebilirsiniz. Örneğin:

  const userAgent = headers['user-agent'];
  console.log(userAgent);
  console.log('Headers: ', headers);

  //  Client'ın gerçekte nasıl gönderdiğine bakılmaksızın tüm başlıklar küçük harfle temsil edilir. Bu, üstbilgileri ayrıştırma işlemini basitleştirir. Tanımlama bilgileri veya özel başlıklar gibi bir başlık, requestte birden çok kez görünüyorsa, değerleri genellikle virgülle ayrılmış tek bir dizede birleştirilir. Ancak, bu normalleştirme olmadan ham başlıklara erişmeniz gerekiyorsa, istekle birlikte gönderilen ham HTTP başlıklarını temsil eden bir dizi içeren "rawHeaders" özelliğini kullanabilirsiniz:

  console.log('RawHeaders: ', rawHeaders);

  // Bir POST veya PUT request'i alırken, istek gövdesi (request body) uygulamanız için önemli olabilir. Gövde verilerine ulaşmak, istek başlıklarına (request header) erişmekten biraz daha karmaşıktır. Bir işleyiciye aktarılan (req, res geri çağrısı) request nesnesi ReadableStream API uygular. Bu stream, diğer akışlar gibi dinlenebilir veya başka bir yere aktarılabilir. Akışın 'data' ve 'end' olaylarını dinleyerek verileri doğrudan akıştan alabiliriz.

  // Her 'data' olayında yayılan yığın bir buffer'dır. Yapılacak en iyi uygulama, verileri bir arrayde toplamak, ardından 'end' olayıyla birlikte concat etmek ve stringleştirmektir:

  const body = [];

  req.on('data', (chunk) => {
    console.log(chunk);
  });

  req.on('end', () => {
    console.log('Chunk its over!');
  });
});

// Evet, kesinlikle! Sunucuyu http.createServer() ile oluşturduktan sonra, gelen HTTP isteklerini dinlemeye başlamak için sunucu nesnesinde listen() yöntemini çağırmanız gerekir. Genellikle, sunucunun dinlemesini istediğiniz port numarasını listen() yöntemine argüman olarak belirtirsiniz.

const PORT = 3000;

server.listen(PORT, () => {
  console.log('Server is listening on PORT:3000');
});
