// Example 1
const { createServer } = require('node:http');

const host = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    const headers = req.headers;
    const httpVersion = req.httpVersion;
    const socket = req.socket;
    
    console.log(`A ${method} request has been received http://localhost:3000${url}`);
    console.log(headers);
    req.pause();
    console.log(httpVersion);
    console.log(socket);
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
})

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
})

// http'nin createServer() yöntemi yeni bir HTTP sunucusu oluşturur ve bunu döndürür. Sunucu, belirtilen bağlantı noktası ve ana bilgisayar adını dinleyecek şekilde ayarlanır (Eğer host parametresi verilmezse!). Sunucu hazır olduğunda, bu durumda sunucunun çalıştığını bize bildiren geri arama işlevi çağrılır.

// Yeni bir request alındığında, request olayı çağrılır ve iki nesne sağlar: bir request (bir http.IncomingMessage nesnesi) ve bir response (bir http.ServerResponse nesnesi).

// http.IncomingMessage Object
// Node.js'deki IncomingMessage nesnesi, gelen bir HTTP istek mesajını temsil eder. Node.js sunucunuz bir istemciden (örneğin bir web tarayıcısı) HTTP isteği aldığında, bu isteği temsil etmek üzere bir IncomingMessage nesnesi oluşturulur. Bu nesne, gelen isteğin istek yöntemi, URL, başlıklar ve istek gövdesi (varsa) gibi çeşitli ayrıntılarına ve özelliklerine erişim sağlar.

// HTTP İsteği: IncomingMessage nesnesi, sunucu tarafından bir istemciden alınan HTTP isteğini temsil eder.

// Okunabilir Akış: Okunabilir bir akımdır, yani istemciden gelen verileri read(), on('data') ve on('end') gibi yöntemleri kullanarak tüketebilirsiniz.

// Özellikler: Yöntem, url, başlıklar, statusCode, statusMessage, httpVersion, istemci, soket, vb. gibi çeşitli özellikleri ortaya çıkararak istek hakkında ayrıntılar sağlar.

// Olay Yayıcı: EventEmitter sınıfından miras alır ve istek tarafından yayılan 'data', 'end' ve 'close' gibi olayları dinlemenize ve işlemenize olanak tanır.

// İstek Gövdesine Erişim: İsteğin bir gövdesi varsa (örneğin, form verileri veya JSON yükü içeren bir POST isteği durumunda), IncomingMessage nesnesi aracılığıyla istek gövdesine erişebilirsiniz.

// HTTP Modülünün bir parçasıdır: IncomingMessage nesnesi Node.js'deki HTTP modülünün bir parçasıdır ve sunucunuz bir HTTP isteği aldığında otomatik olarak oluşturulur.

// Özetle, IncomingMessage nesnesi Node.js sunucunuzda gelen HTTP isteklerine erişmek ve bunları işlemek için uygun bir arayüz sağlar. İstek ayrıntılarına, başlıklara ve gövdeye erişmenizi sağlayarak istemci isteklerini etkili bir şekilde işlemenize ve yanıtlamanıza olanak tanır.

// İşte Node.js'deki IncomingMessage nesnesinin bazı önemli özellikleri ve yöntemleri:

// 1. Properties

// req.method :  İstekte kullanılan HTTP yöntemini temsil eder (örneğin, GET, POST, PUT, DELETE).
// req.url : İsteğin URL'sini temsil eder.
// req.headers : İstekle birlikte gönderilen üstbilgileri içeren bir nesne.
// req.httpVersion : İsteğin HTTP sürümünü temsil eder.
// req.socket : Bağlantı ile ilişkili net.Socket nesnesini temsil eder.
// req.complete : İsteğin tamamen alınıp alınmadığını gösteren bir boolean.


// 2. Methods

// 


// http.ServerResponse Object
// Node.js'deki ServerResponse nesnesi, gelen bir HTTP isteğine yanıt olarak sunucunun istemciye geri gönderdiği HTTP yanıtını temsil eder. İstenen verileri, durum kodunu, başlıkları ve diğer gerekli bilgileri içeren HTTP yanıtını oluşturmak ve göndermek için kullanılır.

// ServerResponse nesnesi ile ilgili bazı önemli noktalar aşağıda verilmiştir:

// Yanıt Gönderme: ServerResponse nesnesinin birincil amacı yanıtları istemciye geri göndermektir. Bu, yanıt gövdesinin gönderilmesini, başlıkların ayarlanmasını ve durum kodunun belirtilmesini içerir.

// Yazılabilir Akış: ServerResponse nesnesi yazılabilir bir akımdır, yani write(), end() ve send() gibi yöntemleri kullanarak ona veri yazabilirsiniz. Bu, gerektiğinde yanıt gövdesini parçalar halinde göndermenize olanak tanır; bu da büyük dosyaların veya verilerin akışı için yararlı olabilir.

// Başlıkları Ayarlama: setHeader() veya writeHead() gibi yöntemleri kullanarak yanıt üstbilgilerini ayarlayabilirsiniz. Bu üstbilgiler, içerik türü, içerik uzunluğu, önbelleğe alma yönergeleri ve daha fazlası gibi yanıt hakkında meta veriler sağlar.

// Durum Kodunu Ayarlama: statusCode özelliğini kullanarak veya writeHead() yöntemine argüman olarak ileterek yanıtın durum kodunu ayarlayabilirsiniz. Durum kodu, isteğin başarılı veya başarısız olduğunu gösterir (örneğin, "OK" için 200, "Not Found" için 404, vb.)

// Yanıtı Sonlandırın: Yanıtı oluşturmayı bitirdiğinizde, yanıtın tamamlandığını ve istemciye gönderilmesi gerektiğini bildirmek için end() yöntemini çağırmalısınız.

// Olaylar: ServerResponse nesnesi, yanıt istemciye tamamen gönderildiğinde 'finish' ve temel bağlantı kapatıldığında 'close' gibi olaylar yayar.

// Özetle, Node.js'deki ServerResponse nesnesi sunucudan istemciye HTTP yanıtları oluşturmak ve göndermek için kullanılır. Başlıkları, durum kodlarını ayarlamak ve yanıt verilerini göndermek için yöntemler ve özellikler sağlar, bu da onu Node.js'de web sunucuları oluşturmanın çok önemli bir bileşeni haline getirir.


// Node.js sunucu yanıtınızda başlıkları veya durum kodunu açıkça ayarlamazsanız, sunucu yine de doğru şekilde çalışacak ve istemciye bir yanıt gönderecektir. Ancak, açıkça ayarlamadıysanız sunucu tarafından uygulanan varsayılan değerler vardır:

// Durum Kodu: response.statusCode veya response.writeHead() kullanarak açıkça bir durum kodu belirlemezseniz, Node.js varsayılan olarak 200 OK durum kodunu belirleyecektir. Bu, istemciye isteğin başarılı olduğunu gösterir.

// Başlıklar: response.setHeader() veya response.writeHead() kullanarak herhangi bir başlık ayarlamazsanız, Node.js yine de yanıtla birlikte bazı varsayılan başlıklar gönderecektir. Bunlar, belirtilmezse varsayılan olarak text/html olan Content-Type gibi başlıkları ve önbelleğe alma ve bağlantı işleme ile ilgili diğer başlıkları içerebilir.

// Sunucu bu varsayılan değerlerle doğru şekilde çalışabilse de, yanıtınızda durum kodunu ve ilgili tüm başlıkları açıkça ayarlamak genellikle iyi bir uygulamadır. Bu, istemcinin yanıt hakkında içerik türü ve isteğin durumu gibi doğru ve anlamlı bilgiler almasını sağlar.

// Tarayıcıda gözlemlediğiniz davranış, varsayılan davranışına ve sunucudan gelen yanıtı nasıl yorumladığına bağlı olarak değişebilir. Bazı tarayıcılar eksik üstbilgileri veya durum kodlarını incelikle ele alıp içeriği doğru şekilde görüntüleyebilirken, diğerleri daha katı yorumlama ve davranışa sahip olabilir. Bununla birlikte, farklı istemciler ve tarayıcılar arasında uyumluluk ve tutarlılık sağlamak için, sunucu yanıtlarınızda her zaman gerekli başlıkları ve durum kodlarını açıkça ayarlamanız önerilir.


// İşte Node.js'deki ServerResponse nesnesinin en önemli özelliklerinden ve yöntemlerinden bazıları:

// Properties 


// Methods

// writeHead(statusCode, [statusMessage], [headers]): Yanıt için durum kodunu, durum mesajını ve başlıkları ayarlar.
// setHeader(name, value): Yanıtta tek bir başlık ayarlar. Başlık zaten mevcutsa, değeri değiştirilecektir.
// write(chunk, [encoding], [callback]): Yanıt gövdesine veri yazar.
// end([data], [encoding], [callback]): Yanıtı sonlandırır ve kalan verileri gönderir. Yanıtı tamamlamak için bu yöntem çağrılmalıdır.


// ** NOT ** :  Node.js sunucunuzda "Content-Type" başlığını açıkça ayarlamadığınız halde HTML içeriği görüyorsanız, bunun nedeni muhtemelen HTTP sunucularından yanıt aldıklarında web tarayıcılarının varsayılan davranışıdır.

// Tarayıcı "Content-Type" başlığı olmayan bir yanıt aldığında, yanıt gövdesinin yapısı ve isteğin bağlamı gibi çeşitli faktörlere dayanarak içerik türünü çıkarmaya çalışır. Yanıt gövdesinde HTML benzeri içerik tespit ederse (örneğin, <html>, <head> veya <body> etiketleri bulursa), içeriğin HTML olduğunu varsayabilir ve buna göre işleyebilir.

// Bu davranış, sunucu içerik türünü açıkça belirtmese bile içeriği oluşturmaya çalışarak daha iyi bir kullanıcı deneyimi sağlamayı amaçlayan web tarayıcılarının bir özelliğidir. Ancak, bu davranışın tarayıcılar arasında farklılık gösterebileceğini ve özellikle yanıt içeriği aslında HTML değilse her zaman istenen sonuçları vermeyebileceğini unutmamak önemlidir.

// İçerik türlerinin düzgün bir şekilde işlenmesini sağlamak ve tarayıcı tarafından beklenmedik bir şekilde oluşturulmasını önlemek istiyorsanız, sunucu yanıtlarınızda her zaman uygun "Content-Type" başlığını ayarlamak iyi bir uygulamadır. HTML içeriği için, içerik türünü açıkça belirtmek üzere "Content-Type" başlığını genellikle "text/html" olarak ayarlarsınız.