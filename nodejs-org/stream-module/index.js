// Stream Module
// Node.js'deki Stream modülü, veri akışını işlemek için bir yol sağlar. Akışlar, tipik bir array veya buffer gibi bir kerede kullanılabilir olmak yerine, zaman içinde kullanıma sunulan veri dizileridir. Akışlar okunabilir, yazılabilir veya her ikisi de olabilir. Tüm akışlar EventEmitter'den miras alır.

// createReadStream -> ReadStream -> Readable -> Stream -> EventEmitter gibi..

// Node.js'deki akışlar, akış durumundaki değişiklikleri bildirmek için 'data', 'end' ve 'error' gibi olayları yayan EventEmitter modelini izler. Ayrıca veri akışını kontrol etmek için pause(), resume() ve pipe() gibi yöntemler de sunarlar.

// Akışları kullanmak, özellikle büyük miktarda veriyle çalışırken bellek açısından daha verimli ve daha hızlı programlara yol açabilir. Tüm veri kümesini bir kerede belleğe yüklemek yerine verileri parçalar halinde işlemenizi sağlarlar. Bu da onları özellikle dosya işleme, ağ iletişimi ve gerçek zamanlı veri akışı gibi görevler için kullanışlı hale getirir.

// Akışlar çeşitli nedenlerle kullanışlıdır:
// Bellek verimliliği: Akışlar, verilerle parçalar halinde çalışmanıza olanak tanır; bu da özellikle büyük dosyalar veya ağ verileriyle uğraşırken yararlı olabilir. Tüm veri kümesini belleğe (RAM) yüklemek yerine, daha küçük, daha yönetilebilir parçalar halinde işleyebilirsiniz.

// Performans: Akışlar verilerin eşzamansız olarak işlenmesine izin verdiğinden, özellikle büyük hacimli verilerle çalışırken eşzamanlı işlemlerden daha performanslı olabilirler.

// Esneklik: Akışlar, dosyalardan okuma veya dosyalara yazma, HTTP isteklerini ve yanıtlarını işleme ve ağ soketleri veya alt süreçler gibi diğer G/Ç kaynaklarıyla arayüz oluşturma gibi çeşitli senaryolarda kullanılabilen esnek bir API sağlar.

// Node.js'deki Stream modülü dört temel akış türü sağlar:
// Readable Streams: Bu akışlar, okuyabileceğiniz bir veri kaynağını temsil eder. Örnekler arasında dosyalardan okuma, HTTP istekleri ve hatta veri üretme yer alır.

// Writeable Streams: Bu akışlar, veri yazabileceğiniz bir hedefi temsil eder. Örnekler arasında dosyalara yazma, HTTP istekleri yapma veya ağ üzerinden veri gönderme yer alır.

// Duplex Streams: Bu akışlar hem okunabilir hem de yazılabilir bir kaynağı temsil eder. TCP soketinde olduğu gibi çift yönlü iletişime izin verirler.

// Transform Streams: Bu akışlar, verilerin okunabilir taraftan okunurken ve yazılabilir tarafa yazılırken dönüştürüldüğü özel bir çift yönlü akış türüdür. Sıkıştırma, şifreleme veya ayrıştırma gibi görevler için kullanışlıdırlar.

// Node.js'de akışları kullanmak için, genellikle uygun akış türünün örneklerini oluşturur ve bir veri hattı oluşturmak için bunları birbirine bağlarsınız. Örneğin, bir Readable stream kullanarak bir dosyadan veri okuyabilir, bir Transform stream kullanarak işleyebilir ve ardından Writable stream kullanarak sonucu başka bir dosyaya yazabilirsiniz.

// Genel olarak, Node.js'deki Stream modülü, akış verileriyle çalışmak için güçlü bir araçtır ve bellek verimliliği, performans veya esnekliğin önemli olduğu senaryolarda özellikle yararlı olabilir.

// 1. Readable Streams:
// Node.js'de createReadStream, yerleşik fs (Dosya Sistemi) modülü tarafından sağlanan bir yöntemdir. Bir dosyadan okunabilir bir akış oluşturmak için kullanılır. Bu yöntem özellikle büyük dosyaları okumak istediğinizde veya tüm dosyayı bir kerede belleğe yüklemek yerine bir dosyayı parçalar halinde işlemek istediğinizde kullanışlıdır.

const fs = require('node:fs');

const options = {
  highWaterMark: 1024,
  //   encoding: 'utf-8', // Boş bırakılırsa veri buffer tipinde okunur.
  autoClose: false // default: true
};
const readableStream = fs.createReadStream(
  '../golden-ticket/index.js',
  options
);

readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  // İkili formatta görüntülemek için, required: buffer data type
  //   for (let byte of chunk) {
  //     console.log(byte.toString(2).padStart(8, '0'));
  //   }
});

readableStream.on('end', () => {
  console.log('Finished reading data.');
  readableStream.close();
});

readableStream.on('error', (err) => {
  console.error(err);
});

readableStream.on('close', () => {
  console.log('Stream has been closed!');
});

// highWaterMark: Dahili buffer boyutunu (bayt cinsinden) ayarlar. Bu, belleğe bir kerede okunabilecek maksimum veri miktarını belirler.
// encoding: Dosyadan okunan verilerin kodlamasını belirtir. Varsayılan olarak, veri bir Buffer nesnesi olarak okunur, ancak 'utf8' gibi bir kodlama belirtmek verinin kodunu bir dizeye çözecektir.
// autoClose: true olarak ayarlanırsa, akış okuma işlemi tamamlandığında dosya tanımlayıcısı otomatik olarak kapatılır. Bu, kaynak sızıntılarını önlemeye yardımcı olur.

//

// 2. Writeable Stream
// Node.js'de createWriteStream, belirtilen bir dosya yoluna yazılabilir bir akış oluşturmak için kullanılan bir yöntemdir. Bu yöntem, Node.js ortamında dosya sistemiyle etkileşim için bir API sağlayan fs (dosya sistemi) modülünün bir parçasıdır. createWriteStream öğesini çağırdığınızda, veri yazmak istediğiniz dosyanın yolunu sağlarsınız. Bu dosyaya eşzamansız olarak veri yazmak için kullanabileceğiniz yazılabilir bir akış nesnesi döndürür. Daha sonra akışa veri yazmak için write veya end gibi yöntemleri kullanabilirsiniz.

const writeableStream = fs.createWriteStream('./example.txt', {
  highWaterMark: 2,
  encoding: 'utf-8'
});

const chunk =
  'Lorem ipsum dolor sit. Amet consectur via dole. Est vect kira juls.';

writeableStream.write(chunk, (err) => {
  if (err) {
    console.log('Something wrong!');
    return;
  }
  console.log('Write operation completed!');
});

writeableStream.end();

writeableStream.on('finish', () => {
  console.log('All data has been written to the file.');
});

writeableStream.on('error', (err) => {
  console.error(err);
});

// Akışa veri yazmak için write() yöntemini kullanırız. Verinin farklı kısımlarını sırayla yazmak için write() metodunu birden çok kez çağırabiliriz.

// Akışa veri yazmayı bitirdiğimizi belirtmek için end() metodunu çağırırız. Bu yöntem isteğe bağlıdır, ancak genellikle akışta kalan verileri temizlemek için kullanılır.

// Tüm verilerin dosyaya başarıyla aktarıldığını öğrenmek için 'finish' olayını dinleriz.

// Ayrıca, yazma işlemi sırasında oluşabilecek hataları ele almak için 'error' olayını da dinleriz.

// 'End' olayı, yazma işlemi akışın kendi perspektifinden tamamlandığında yazılabilir akış tarafından yayılır. Bu, akışa daha fazla veri yazılmayacağı anlamına gelir. Akışın bakış açısından yazma işlemi bittikten sonra herhangi bir temizleme veya ek eylem gerçekleştirmeniz gerekiyorsa genellikle bu olayı dinlersiniz.

// Öte yandan, 'finish' olayı, tüm veriler temel sisteme (örneğin bir dosya) başarıyla aktarıldığında yayınlanır. Sistemin verileri yazmayı tamamladığını ve işlemin tamamen bittiğini belirtir. Bu olay özellikle verilerin başarıyla yazıldığını ve daha fazla işlem için hazır olduğunu bilmeniz gerektiğinde veya akışla ilişkili kaynakları kapatmanız gerektiğinde kullanışlıdır.
