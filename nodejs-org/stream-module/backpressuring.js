// Backpressuring in Streams
// İlk olarak şu iki kavramı bir açıklayalım derim: pipe() and pipeline()...

// pipe() : Node.js akışlarındaki pipe() yöntemi, bir akışın çıktısını diğerinin girişine bağlamak için kullanılır. Verileri akışlar arasında kolayca aktarmanıza olanak tanıyarak veri işlemenin bir "pipeline (boru hattı)" kolaylaştırır:

/**
const fs = require('node:fs');
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);
*/

//

// pipeline() : Pipeline() yöntemi Node.js'de 10.x sürümünden itibaren mevcuttur ve hataları ve temizlemeyi otomatik olarak ele alırken birden fazla akışı birbirine bağlamak için daha uygun bir yol sağlar. Argüman olarak bir akış listesi alır ve boru zincirini kurar, geri basıncı ele alır ve akışları düzgün bir şekilde kapatır.

/**
const { pipeline } = require('node:stream/promises');
const zlib = require('zlib');

async function run() {
  await pipeline(
    fs.createReadStream('input.txt'),
    zlib.createGzip(),
    fs.createWriteStream('output.txt.gz'),
    (error) => {
      if (error) {
        console.error('Pipeline failed:', error);
      } else {
        console.log('Pipeline succeeded');
      }
    }
  );
}

run();
 */

// Özetle, pipe(), Node.js'de okunabilir akışlarda bulunan ve verilerin yazılabilir akışlara aktarılmasını kolaylaştıran bir yöntemdir.
// pipeline(), Node.js sürüm 10.x ve sonraki sürümlerinde bulunan, bir boru hattında birden fazla akışı işlemek için tasarlanmış, hata işleme ve otomatik olarak temizleme sağlayan bir yardımcı program işlevidir. Manuel hata işleme ihtiyacını pipe() ile değiştirir ve akış boru hatlarını oluşturmanın daha modern ve kullanışlı bir yolu olarak kabul edilir.

//

// Ön bilgilendirmeyi aldığımıza göre şimdi konumuza geçelim, "Backpressuring in Stream" ne anlama geliyor?

// Akışlardaki geri baskı, bir veri üreticisinin, tüketicinin işleyebileceğinden daha hızlı veri ürettiği durumları ele almak için kullanılan bir mekanizmadır. Başka bir deyişle, yazılabilir akışın boğulmasını önlemek için okunabilir bir akıştan gelen veri akışını yavaşlatmanın bir yoludur.

// Veri işleme sırasında ortaya çıkan ve geri basınç olarak adlandırılan bu sorun veri aktarımı sırasında bir buffer'ın arkasında veri birikmesini tanımlar. Aktarımın alıcı ucunda karmaşık işlemler olduğunda veya herhangi bir nedenle daha yavaş olduğunda (yazma işlemi okuma işleminden yavaştır!), üretici kaynaktan gelen verilerin bir tıkanma gibi birikme eğilimi olur.

// Bu sorunu çözmek için, bir kaynaktan diğerine sorunsuz veri akışını sağlayacak bir "temsilci sistemi" olmalıdır. Farklı topluluklar bu sorunu kendi programlarına özgü olarak çözmüşlerdir, Unix boruları ve TCP soketleri bunun iyi örnekleridir ve genellikle akış kontrolü olarak adlandırılırlar. Node.js'de akışlar yani streams benimsenen çözüm olmuştur.

//

// Bir bilgisayar sisteminde veriler bir süreçten diğerine borular, soketler ve sinyaller aracılığıyla aktarılır. Node.js'de Stream adı verilen benzer bir mekanizma bulunur. Stream'ler harikadır! Node.js için çok şey yaparlar ve dahili kod tabanının neredeyse her parçası bu modülü kullanır. Bir geliştirici olarak, siz de bunları kullanmak için fazlasıyla teşvik ediliyorsunuz!

const readline = require('node:readline');

const FormCLI = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

FormCLI.question('Why you are using Node.js?', (answer) => {
  console.log(`Thanks for your feedback! Your answer is: "${answer}"`);
  FormCLI.close();
});

// Okunabilir Akış (process.stdin): Bu standart girdi akışıdır. Programınızın harici bir kaynaktan, tipik olarak bu durumda terminal aracılığıyla kullanıcıdan veri almasını sağlar. Okunabilecek veri olduğunda 'data' olaylarını yayar. Kodunuzda, CLI arayüzünüz için girdi olarak kullanılır, bu nedenle kullanıcı tarafından girilen verileri okur.

// Yazılabilir Akış (process.stdout): Bu standart çıktı akışıdır. Programınızın harici bir hedefe, tipik olarak konsola veri göndermesini sağlar. Kodunuzda, komut istemini ve daha sonra kullanıcının yanıtını görüntülemek için kullanılır. write() veya console.log() gibi yöntemler kullanılarak yazılabilir.

//

// Şimdi bir senaryoyu ele alalım:
// Bir senaryoda, büyük bir dosyayı (yaklaşık ~9 GB) alacağız ve bilinen zip(1) aracını kullanarak sıkıştıracağız.

// zip The.Matrix.1080p.mkv

// Bunun tamamlanması birkaç dakika sürecek olsa da, başka bir kabukta Node.js'nin zlib modülünü alan ve başka bir sıkıştırma aracı olan gzip(1)'in etrafını saran bir betik çalıştırabiliriz.

/**
const gzip = require('node:zlib').createGzip();
const fs = require('node:fs');

const inp = fs.createReadStream('The.Matrix.1080p.mkv');
const out = fs.createWriteStream('The.Matrix.1080p.mkv.gz');
inp.pipe(gzip).pipe(out);
*/

// Sonuçları test etmek için her bir sıkıştırılmış dosyayı açmayı deneyin. Zip(1) aracı tarafından sıkıştırılan dosya size dosyanın bozuk olduğunu bildirirken, Stream tarafından tamamlanan sıkıştırma hatasız olarak açılacaktır.

// pipe ile kurgulanmış verilen örnekte, uygun hata işleme eksiktir ve bu da akış işleme sırasında bir veri yığınının düzgün şekilde alınamaması durumunda potansiyel sorunlara yol açabilir.

// Node.js'nin önceki sürümlerinde (10.x sürümünden önce), "pump" yardımcı programı genellikle hataları işlemek ve bir boru hattındaki akışların uygun şekilde temizlenmesini sağlamak için kullanılırdı. pump, boru hattındaki bir akış başarısız olursa veya beklenmedik bir şekilde kapanırsa, kaynak sızıntılarını veya diğer sorunları önlemek için boru hattındaki tüm akışları düzgün bir şekilde yok ederdi.

// Bununla birlikte, Node.js sürüm 10.x'ten başlayarak, "pipeline" yöntemi pump'a daha modern ve kullanışlı bir alternatif olarak tanıtıldı. pipeline yöntemi, hata yayma ve temizleme işlemlerini otomatik olarak gerçekleştirerek ek hata işleme koduna gerek kalmadan akış boru hatlarının oluşturulmasını kolaylaştırır.

//

// Okunabilir bir akışın Yazılabilir'e çok hızlı veri verebileceği durumlar vardır - tüketicinin kaldırabileceğinden çok daha fazla! Bu gerçekleştiğinde, tüketici tüm veri parçalarını daha sonra tüketmek üzere sıraya koymaya başlayacaktır. Yazma kuyruğu gittikçe uzayacak ve bu nedenle tüm işlem tamamlanana kadar daha fazla verinin bellekte tutulması gerekecektir.

// Bir diske yazmak, diskten okumaktan çok daha yavaştır, bu nedenle bir dosyayı sıkıştırmaya ve sabit diskimize yazmaya çalıştığımızda, yazma diski okumadan gelen hıza yetişemeyeceği için geri basınç (backpressuring) oluşacaktır.

// Geri basınç mekanizması bu yüzden önemlidir. Eğer bir geri basınç sistemi mevcut olmasaydı, süreç sisteminizin belleğini kullanacak, diğer süreçleri etkili bir şekilde yavaşlatacak ve tamamlanana kadar sisteminizin büyük bir bölümünü tekeline alacaktı.

// Bu da birkaç şeye yol açar:

// Diğer tüm mevcut süreçlerin yavaşlatılması
// Çok fazla çalışan bir garbage collector nam-ı diğer "çöp toplayıcı".
// Hafıza yorgunluğu

//

// Sırada labımız var! Aşağıdaki örneklerde, .write() fonksiyonunun geri dönüş değerini çıkarıp true olarak değiştireceğiz, bu da "Node.js çekirdeğindeki geri basınç desteğini" etkin bir şekilde devre dışı bırakacak.

// Çöp Toplamada Aşırı Sürüklenme
// Hızlı bir kıyaslamaya göz atalım. Yukarıdaki aynı örneği kullanarak, her iki ikili için medyan süreyi elde etmek için birkaç zaman denemesi yaptık.

/**
trial (#)  | `node` binary (ms) | modified `node` binary (ms)
=================================================================
      1       |      56924         |           55011
      2       |      52686         |           55869
      3       |      59479         |           54043
      4       |      54473         |           55229
      5       |      52933         |           59723
=================================================================
average time: |      55299         |           55975
 */

// Her ikisinin de çalışması yaklaşık bir dakika sürüyor, yani arada pek bir fark yok, ancak şüphelerimizin doğru olup olmadığını teyit etmek için daha yakından bakalım. V8 çöp toplayıcısında neler olduğunu değerlendirmek için Linux aracı dtrace'i kullanıyoruz.

// GC (çöp toplayıcı) ölçülen zamanı, çöp toplayıcı tarafından yapılan tek bir taramanın tam bir döngüsünün "aralıklarını" gösterir:

/**
approx. time (ms) | GC (ms) | modified GC (ms)
=================================================
          0       |    0    |      0
          1       |    0    |      0
         40       |    0    |      2
        170       |    3    |      1
        300       |    3    |      1
         *             *           *
         *             *           *
         *             *           *
      39000       |    6    |     26
      42000       |    6    |     21
      47000       |    5    |     32
      50000       |    8    |     28
      54000       |    6    |     35
 */

// Her iki süreç de aynı şekilde başlayıp GC'yi aynı hızda çalıştırıyor gibi görünse de, düzgün çalışan bir geri basınç sistemiyle birkaç saniye sonra GC yükünü veri aktarımının sonuna kadar 4-8 milisaniyelik tutarlı aralıklara yaydığı ortaya çıkar.

// Bununla birlikte, bir geri basınç sistemi mevcut olmadığında, V8 çöp toplama işlemi daha az çalışacaktır!. GC olarak adlandırılan normal ikili bir dakika içinde yaklaşık 75 kez ateşlenirken, değiştirilmiş ikili yalnızca 36 kez ateşlenir.

// Bu, artan bellek kullanımından kaynaklanan yavaş ve kademeli borç birikimidir. Veriler aktarıldıkça, bir geri basınç sistemi olmadan, her yığın aktarımı için daha fazla bellek kullanılır. Tahsis edilen bellek ne kadar fazlaysa, GC'nin bir taramada ilgilenmesi gereken bellek miktarı da o kadar fazla olur. Tarama ne kadar büyük olursa, GC'nin neyin serbest bırakılabileceğine o kadar fazla karar vermesi gerekir ve daha büyük bir bellek alanında ayrılmış işaretçiler için tarama yapmak daha fazla hesaplama gücü tüketecektir.

// Daha fazla veri işlendikçe ve bellek tahsis edildikçe, sistem bellek baskısı kritik hale gelene kadar çöp toplamayı erteleyebilir. Bu, düzensiz aralıklarla daha büyük GC taramalarına yol açarak genel GC sıklığının düşmesine neden olabilir.

//

// Her bir ikili dosyanın bellek tüketimini belirlemek için, her bir süreci /usr/bin/time -lp sudo ./node ./backpressure-example/zlib.js ile ayrı ayrı saatlendirdik.

// Bu, normal ikili sistemdeki çıktıdır:

/**
Respecting the return value of .write()
=============================================
real        58.88
user        56.79
sys          8.79
  87810048  maximum resident set size
         0  average shared memory size
         0  average unshared data size
         0  average unshared stack size
     19427  page reclaims
      3134  page faults
         0  swaps
         5  block input operations
       194  block output operations
         0  messages sent
         0  messages received
         1  signals received
        12  voluntary context switches
    666037  involuntary context switches
 */

// Sanal bellek (RAM) tarafından işgal edilen maksimum bayt boyutu yaklaşık 87,81 mb olarak ortaya çıkmaktadır.

// Ve şimdi .write() fonksiyonunun dönüş değerini değiştirerek şunu elde ediyoruz:

/**
Without respecting the return value of .write():
==================================================
real        54.48
user        53.15
sys          7.43
1524965376  maximum resident set size
         0  average shared memory size
         0  average unshared data size
         0  average unshared stack size
    373617  page reclaims
      3139  page faults
         0  swaps
        18  block input operations
       199  block output operations
         0  messages sent
         0  messages received
         1  signals received
        25  voluntary context switches
    629566  involuntary context switches
 */

// Sanal bellek (RAM) tarafından işgal edilen maksimum bayt boyutu yaklaşık 1,52 gb olarak ortaya çıkmaktadır.

// Geri baskıyı devredecek akışlar olmadan, tahsis edilen bellek alanı büyüklük sırasına göre daha fazladır - aynı süreç arasında büyük bir fark marjı!

// Bu deney, Node.js'in geri basınç mekanizmasının bilgisayar sisteminiz için ne kadar optimize edilmiş ve uygun maliyetli olduğunu göstermektedir. Şimdi, nasıl çalıştığının bir dökümünü yapalım:

// Node.js'de backpressure, hızlı bir üreticinin yavaş bir tüketiciyi ezmesini önlemek için akışlarda kullanılan bir akış kontrol mekanizmasıdır. İşte nasıl çalıştığı:

// Üretici-Tüketici İlişkisi: Bir akışta veriler bir kaynak (üretici) tarafından üretilir ve bir hedef (tüketici) tarafından tüketilir.

// Arabellekleme (Buffering): Akışlar, üreticiden tüketiciye akarken verileri geçici olarak depolayan dahili bir buffer'a sahiptir. Buffer dolduğunda, tüketici yetişene kadar üretici duraklatılır.

// Geri Basınç Sinyali: Buffer kapasitesine ulaştığında, tüketici üreticiye "geri basınç sinyali" göndererek şu anda daha fazla veri işleyemeyeceğini belirtebilir.

// Duraklatma ve Devam Etme: Geri basınç sinyalini alan üretici, tüketici daha fazla veri almaya hazır olana kadar veri göndermeyi durdurur. Tüketici hazır olduğunu belirttiğinde, üretici veri göndermeye devam eder.

// Verimli Kaynak Kullanımı: Gerektiğinde üreticiyi duraklatarak, backpressure sistem kaynaklarının verimli kullanılmasını sağlar ve bellek tükenmesini veya kaynakla ilgili diğer sorunları önler.
