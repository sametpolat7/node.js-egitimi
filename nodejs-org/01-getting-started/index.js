// 1. Introduction to Node.js

// Node.js, açık kaynaklı ve platformlar arası bir JavaScript çalışma zamanı ortamıdır. Hemen hemen her tür proje için popüler bir araçtır! Node.js, Google Chrome'un çekirdeği olan V8 JavaScript motorunu tarayıcının dışında çalıştırır. Bu, Node.js'nin çok performanslı olmasını sağlar.

// JavaScript genellikle yorumlanan bir dil olarak kabul edilir, ancak modern JavaScript motorları artık JavaScript'i sadece yorumlamakla kalmıyor, derliyor. Bu, SpiderMonkey JavaScript derleyicisinin Firefox 3.5'e eklendiği ve herkesin bu fikri takip ettiği 2009'dan beri gerçekleşiyor. JavaScript, yürütmeyi hızlandırmak için V8 tarafından tam zamanında (JIT) derleme ile dahili olarak derlenir.

// Bu yeni dünyada, JavaScript'i derlemek çok mantıklı çünkü JavaScript'i hazır hale getirmek biraz daha fazla zaman alsa da, bir kez tamamlandığında tamamen yorumlanmış koddan çok daha performanslı olacaktır.

// Bir Node.js uygulaması, her istek için yeni bir iş parçacığı oluşturmadan tek bir işlemde çalışır. Node.js, standart kütüphanesinde JavaScript kodunun bloklanmasını önleyen bir dizi asenkron I/O ilkeli sağlar ve genel olarak Node.js'deki kütüphaneler bloklamayan paradigmalar kullanılarak yazılır, bu da bloklama davranışını normdan ziyade istisna haline getirir.

// Node.js ağdan okuma, bir veritabanına veya dosya sistemine erişme gibi bir G/Ç işlemi gerçekleştirdiğinde, iş parçacığını engellemek ve CPU döngülerini bekleyerek boşa harcamak yerine, yanıt geri geldiğinde işlemlere devam edecektir.

// Paket yükleme:
// npm, projenizin bağımlılıklarının indirilmesini yönetir: npm install packageName

// Ayrıca, npm 5'ten beri, bu komut package.json dosyası bağımlılıklarına <package-name> ekler. Sürüm 5'ten önce --save bayrağını eklemeniz gerekiyordu.

// Genellikle bu komuta daha fazla bayrak eklendiğini görürsünüz:

// --save-dev : İlgili paketi package.json dosyasına devDependencies olarak ekler.
// --no-save : İlgili paket yüklenir ancak package.json dosyası bağımlılıklarına girişi eklenmez.
// --save-optional : İlgili paketi yükler ve package.json dosyasına girdiyi optionalDependencies olarak ekler.

// Bayrakların kısaltmaları da kullanılabilir:
// -S: --save
// -D: --save-dev
// -O: --save-optional

// Paket Güncelleme:
// npm update ya da tek bir paket için npm update packageName

// Versiyonlama:
// Düz indirmelere ek olarak, npm sürümlemeyi de yönetir, böylece bir paketin belirli bir sürümünü belirtebilir veya ihtiyacınız olandan daha yüksek veya daha düşük bir sürüm isteyebilirsiniz. Çoğu zaman bir kütüphanenin yalnızca başka bir kütüphanenin ana sürümüyle uyumlu olduğunu görürsünüz. Ya da bir kütüphanenin en son sürümündeki hala düzeltilmemiş bir hata bir soruna neden oluyor.

// Bir kütüphanenin açık bir sürümünün belirtilmesi, herkesin bir paketin aynı tam sürümünde kalmasına da yardımcı olur, böylece package.json dosyası güncellenene kadar tüm ekip aynı sürümü çalıştırır:
// npm install packageName@version ya da npm install packageName@latest (Son sürüm)

// Run Tasks
// package.json dosyası, aşağıdakileri kullanarak çalıştırılabilecek komut satırı görevlerini belirtmek için bir biçimi destekler.
// npm run <task-name>

// {
//   "scripts": {
//     "start-dev": "node lib/server-development",
//     "start": "node lib/server-production"
//   }
// }

// {
//   "scripts": {
//     "watch": "webpack --watch --progress --colors --config webpack.conf.js",
//     "dev": "webpack --progress --colors --config webpack.conf.js",
//     "prod": "NODE_ENV=production webpack -p --config webpack.conf.js"
//   }
// }

// $ npm run watch
// $ npm run dev
// $ npm run prod

const { createServer } = require("http");

const server = createServer((req, res) => {
  console.log(`A ${req.method} request has been received from ${req.url}`);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html"); //Ya da res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello World!</h1>");
  res.end();
});

const port = 3000;
const host = "127.0.0.1";

server.listen(port, host, (err) => {
  if (!err) {
    console.log(`Listening to http://${host}:${port}`);
  }
});

// http'nin createServer() yöntemi yeni bir HTTP sunucusu oluşturur ve bunu döndürür. Sunucu, belirtilen port numarası ve ana bilgisayar adını dinleyecek şekilde ayarlanır. Sunucu hazır olduğunda, bu durumda sunucunun çalıştığını bize bildiren geri arama işlevi çağrılır.

// Yeni bir istek alındığında, 'request' eventi çağrılır ve iki nesne sağlar: bir request nesnesi (bir http.IncomingMessage nesnesi) ve birde response nesnesi (bir http.ServerResponse nesnesi). Bu 2 nesne HTTP çağrısını işlemek için gereklidir.

// İlki request ayrıntılarını sağlar. Bu basit örnekte, bu kullanılmamıştır, ancak istek başlıklarına ve istek verilerine erişebilirsiniz.

// İkincisi, istek atan kişiye veri döndürmek için kullanılır. Bu durumda:

// res.statusCode = 200; başarılı bir yanıtı belirtmek için statusCode özelliğini 200 olarak ayarlıyoruz.

// res.setHeader('Content-Type', 'text/plain'); Content-Type başlığını ayarlıyoruz.

// ** Deep Dive **: What is difference between writeHead and setHeader?

// 1. writeHead(statusCode[, statusMessage][, headers]):
// writeHead yöntemi, HTTP durum kodunu ve başlıklarını istemciye tek bir çağrıda göndermek için kullanılır.
// En az bir bağımsız değişken gerektirir: yanıtta gönderilecek HTTP durum kodu olan statusCode.
// İsteğe bağlı olarak, insan tarafından okunabilir bir durum mesajı olan statusMessage'ı da sağlayabilirsiniz (örneğin, "OK", "Not Found"), ancak sağlanmadığı takdirde varsayılan durum mesajı kullanıldığından genellikle gerekli değildir.
// Üçüncü bağımsız değişken olarak ek başlıklar içeren bir nesne de iletebilirsiniz.
// writeHead'i birden çok kez çağırırsanız, yalnızca ilk çağrıdaki başlıklar gönderilir; writeHead'e yapılan sonraki çağrılar yok sayılır.

// 2. setHeader(name, value):
// setHeader yöntemi, HTTP yanıtında tek bir başlık ayarlamak için kullanılır.
// İki bağımsız değişken alır: başlığın adı olan name ve başlığın değeri olan value.
// Aynı ada sahip bir başlık zaten mevcutsa, yeni değerle değiştirilecektir.
// writeHead'in aksine, setHeader birden fazla başlık ayarlamak için birden fazla kez çağrılabilir ve setHeader kullanılarak ayarlanan tüm başlıklar yanıta dahil edilir.

// Özetle, writeHead HTTP durum kodunu ve başlıklarını tek bir çağrıda ayarlamak için kullanılırken, setHeader başlıkları tek tek ayarlamak için kullanılır. Bunlar arasındaki seçim, tüm başlıkları bir kerede ayarlamak isteyip istemediğinize veya başlıkları belirli koşullara göre ayrı ayrı veya dinamik olarak ayarlamanız gerekip gerekmediğine bağlıdır.

// ** Deep Dive 2 ** Why we should use res.write() ? Shouldnt use only res.end().
// Kesinlikle haklısınız. Node.js'de, res.write() yanıt gövdesinin bir parçasını göndermek için kullanılır ve res.end() yanıtın sonunu belirtmek için kullanılır.

// İşte bu yüzden res.write() kullanabilirsiniz:

// Yanıtları Akıtma: Yanıt gövdesi olarak büyük miktarda veri gönderiyorsanız, res.write() kullanarak daha küçük parçalar halinde yayınlamak bellek açısından daha verimlidir. Bu, büyük dosyalar göndermek için ya da verinin tamamını oluşturmayı bitirmeden önce istemciye veri göndermeye başlamak istediğiniz uzun süreli işlemler için yararlı olabilir.

// Kısmi Yanıtlar: Yanıtı dinamik olarak oluşturuyorsanız ve yanıtın tamamı hazır olmadan önce kısmi veri göndermeniz gerekiyorsa, yanıtın parçalarını kullanılabilir hale geldikçe göndermek için res.write() işlevini kullanabilirsiniz.

// Ancak, res.write() işlevini kullanırsanız, yanıtın sonunu belirtmek için sonunda res.end() işlevini çağırmanız gerektiğini unutmamak önemlidir. Aksi takdirde, istemci yanıtın ne zaman tamamlandığını bilemez ve istek süresiz olarak askıda kalabilir.

// Örnek:
// response.writeHead(200, {'Content-Type': 'text/plain'});

// response.write('Chunk 1\n');
// response.write('Chunk 2\n');
// response.write('Chunk 3\n');

// response.end();

// Bu örnekte, res.write() kullanarak üç veri parçası gönderiyoruz ve ardından yanıtı bitirmek için res.end() işlevini çağırıyoruz. Bu yaklaşım, herhangi bir şey göndermeden önce tüm verilerin hazır olmasını beklemek yerine yanıtı aşamalı olarak göndermemizi sağlar.
