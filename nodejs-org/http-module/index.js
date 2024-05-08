// Create a Server
const http = require('node:http');

// Node.js'de http.createServer() yöntemi, bir EventEmitter olan http.Server sınıfının bir örneğini döndürür. createServer() yöntemine bir geri arama işlevi aktararak, aslında 'request' olayı için bir dinleyici kurmuş olursunuz. Böylece, sunucu tarafından bir HTTP isteği alındığında, sağladığınız geri arama işlevi yürütülecek, isteği işleyecek ve uygun yanıtı üretecektir. Bu, HTTP sunucuları oluşturmak için Node.js'de yaygın bir modeldir.

const server = http.createServer((request, response) => {
  // Node.js'de, gelen bir HTTP isteğini işlerken, 'request' nesnesi üzerindeki özellikler aracılığıyla HTTP yöntemi (GET, POST, vb.) veya isteğin URL'si gibi yararlı bilgilere erişebilirsiniz.

  // Request nesnesi IncomingMessage'ın bir örneğidir.

  const { method, url, headers, rawHeaders } = request;
  console.log(method);
  console.log(url);

  //   Node.js'de, istek nesnesinin headers özelliği istekle birlikte gönderilen tüm HTTP başlıklarını içerir. Küçük harfli adlarını kullanarak tek tek başlıklara erişebilirsiniz. Örneğin:

  const userAgent = headers['user-agent'];
  console.log(userAgent);
  console.log('Headers: ', headers);

  //  Client'ın gerçekte nasıl gönderdiğine bakılmaksızın tüm başlıklar küçük harfle temsil edilir. Bu, üstbilgileri ayrıştırma işlemini basitleştirir. Tanımlama bilgileri veya özel başlıklar gibi bir başlık, requestte birden çok kez görünüyorsa, değerleri genellikle virgülle ayrılmış tek bir dizede birleştirilir. Ancak, bu normalleştirme olmadan ham başlıklara erişmeniz gerekiyorsa, istekle birlikte gönderilen ham HTTP başlıklarını temsil eden bir dizi içeren "rawHeaders" özelliğini kullanabilirsiniz:

  console.log('RawHeaders: ', rawHeaders);

  // Bir POST veya PUT request'i alırken, istek gövdesi (request body) uygulamanız için önemli olabilir. Gövde verilerine ulaşmak, istek başlıklarına (request header) erişmekten biraz daha karmaşıktır. Bir işleyiciye aktarılan (req, res geri çağrısı) request nesnesi ReadableStream API uygular. Bu stream, diğer akışlar gibi dinlenebilir veya başka bir yere aktarılabilir. Akışın 'data' ve 'end' olaylarını dinleyerek verileri doğrudan akıştan alabiliriz.

  // GET istekleri için veriler genellikle URL'deki sorgu parametreleri aracılığıyla gönderilir. Bu parametrelere request URL'sinden erişebilirsiniz.
  // POST, PUT, PATCH ve DELETE gibi istekler için veriler genellikle request gövdesinde gönderilir. Bu verileri, istek nesnesindeki 'data' olaylarını dinleyerek ve tam istek gövdesini oluşturmak için parçaları birleştirerek işlersiniz.

  // Her 'data' olayında yayılan yığın bir buffer'dır. Yapılacak en iyi uygulama, verileri bir arrayde toplamak, ardından 'end' olayıyla birlikte concat etmek ve stringleştirmektir:

  const reqBodyBuffer = [];

  request.on('data', (chunk) => {
    reqBodyBuffer.push(chunk);
  });

  request.on('end', () => {
    const reqBodyStr = Buffer.concat(reqBodyBuffer).toString();
    console.log('Body (String Form): ', reqBodyStr);
  });

  // Request nesnesi bir ReadableStream olduğundan, aynı zamanda bir EventEmitter'dır ve bir hata oluştuğunda bir hata gibi davranır. Request akışındaki bir hata, akışta bir 'error' olayı yayarak kendini gösterir. Bu olay için bir dinleyiciniz yoksa, hata atılır ve bu da Node.js programınızı çökertebilir. Bu nedenle, sadece günlüğe kaydedip yolunuza devam etseniz bile, istek akışlarınıza bir 'error' dinleyicisi eklemelisiniz. (Yine de bir tür HTTP hata yanıtı göndermek muhtemelen en iyisidir.

  request.on('error', (err) => {
    console.error('An error occurred!', err);
  });

  // Bu örneği çalıştırırsak, istekleri alabileceğiz, ancak onlara yanıt veremeyeceğiz. Aslında, bu örneği bir web tarayıcısında çalıştırırsanız, istemciye hiçbir şey geri gönderilmediği için isteğiniz zaman aşımına uğrayacaktır. Şimdiye kadar, bir WritableStream olan ServerResponse'un bir örneği olan response nesnesine hiç değinmedik. Verileri istemciye geri göndermek için birçok yararlı yöntem içerir.

  // Bir response'daki HTTP durum kodu varsayılan olarak 200 olacaktır. Elbette, her HTTP yanıtı bunu gerektirmez ve bir noktada kesinlikle farklı bir durum kodu göndermek isteyeceksiniz. Bunu yapmak için statusCode özelliğini ayarlayabilirsiniz:

  response.statusCode = 200;

  // Başlıklar setHeader adı verilen kullanışlı bir yöntem aracılığıyla ayarlanır. Bir response'daki başlıkları ayarlarken, adlarında büyük/küçük harf duyarlılığı yoktur. Bir başlığı tekrar tekrar ayarlarsanız," ayarladığınız son değer" gönderilen değer olur. (Ya da tek tüm başlıklar için gönderilecek tek bir ifade olan writeHead ayarlayın!)

  response.setHeader('Content-Type', 'application/json');

  // Daha önce tartıştığımız başlıkları ve durum kodunu ayarlama yöntemleri, "örtük (implicit) başlıklar" kullandığınızı varsayar. Bu, siz gövde verilerini göndermeye başlamadan önce node'un sizin için doğru zamanda başlıkları göndereceğine güvendiğiniz anlamına gelir.

  // İsterseniz, başlıkları yanıt akışına açıkça (explicit) yazabilirsiniz. Bunu yapmak için, durum kodunu ve başlıkları akışa yazan writeHead adlı bir yöntem vardır.

  // response.writeHead(200, {
  //   'Content-Type': 'application/json',
  //   'X-Powered-By': 'bacon'
  // });

  // Response nesnesi bir WritableStream olduğundan, istemciye bir response body yazmak sadece olağan stream yöntemlerini kullanmaktan ibarettir.

  response.write('<html>');
  response.write('<body>');
  response.write('<h1>Hello Client!</h1>');
  response.write('<h2>This message send from a Node.js Server!</h2>');
  response.write('<body>');
  response.write('<html>');

  const responseBody = { headers, method, url, reqBodyBuffer };

  response.write(JSON.stringify(responseBody));

  response.end();

  // Akışlardaki end fonksiyonu, akıştaki son veri biti olarak gönderilmek üzere isteğe bağlı bazı verileri de alabilir, bu nedenle yukarıdaki örneği aşağıdaki gibi basitleştirebiliriz.

  // response.end('<html><body><h1>Hello, World!</h1></body></html>');

  // Not: Gövdeye veri parçalarını yazmaya başlamadan önce status ve headers özelliklerini ayarlamak önemlidir. HTTP yanıtlarında headers body'den önce geldiği için bu mantıklıdır!

  response.on('error', (err) => {
    console.error('An error occurred!', err);
  });
});

// Sunucuyu http.createServer() ile oluşturduktan sonra, gelen HTTP isteklerini dinlemeye başlamak için sunucu nesnesinde listen() yöntemini çağırmanız gerekir. Genellikle, sunucunun dinlemesini istediğiniz port numarasını listen() yöntemine argüman olarak belirtirsiniz.

const hostname = '127.0.0.1';
const PORT = 3000;

server.listen(PORT, hostname, () => {
  console.log(`Server listening on http://${hostname}:${PORT}`);
});
