// Node.js'de Modül Kavramı
// Node.js'de modüller, ilgili işlevleri kapsülleyen yeniden kullanılabilir kod parçalarıdır. Kodun mantıksal birimler halinde düzenlenmesine yardımcı olarak daha büyük uygulamaların yönetilmesini ve bakımının yapılmasını kolaylaştırırlar. Node.js, farklı dosyalar arasında işlevselliği içe ve dışa aktarmanıza olanak tanıyan CommonJS modüllerine dayalı modüler bir sistem sağlar

// Modüller 2 şekilde import ve export edilebilir.

// 1. CommonJS
// Export
function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

module.exports = {
    add, minus
}

// Import
const importedFile = require('./notes.js')

console.log(importedFile.add(5, 3));


// 2. ES Modules
// Export
function multiple(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

export {multiple, divide}

// Import
import {multiple, divide} from './notes.js'


// Peki, CommonJS Nedir?
// CommonJS, JavaScript modülleri ve bağımlılıkları için bir dizi standarttır. Başlangıçta Node.js gibi sunucu tarafı JavaScript ortamları için JavaScript'te bir modül sisteminin eksikliğini gidermek amacıyla geliştirilmiştir. CommonJS bir modül formatı, bir paketleme formatı ve modülleri tanımlayıcılarına göre bulmak için bir kayıt defteri belirtir.

// Modül Tanımı: CommonJS modülleri, kodu bir modül kapsamı içinde kapsülleyerek genel ad alanının kirlenmesini önler. Her modül, diğer modülleri etkilemeden kendi değişkenlerini ve işlevlerini tanımlayabilir.

// Exports ve Require: CommonJS'deki modüller, modülden değerleri dışa aktarmak için module.exports ve diğer modüllerden bağımlılıkları içe aktarmak için require() kullanır. Bu sistem kolay bağımlılık yönetimi ve kodun yeniden kullanımını sağlar.

// Eşzamanlı Yükleme: CommonJS'de modüller eşzamanlı olarak yüklenir, yani kod yürütme, modülün kodunu yürütmeden önce tüm bağımlılıkların yüklenmesini bekler. Bu eşzamanlı davranış, sunucu tarafı ortamları gibi dosya I/O işlemlerinin tipik olarak eşzamanlı olduğu ortamlarda geliştirmeyi kolaylaştırır.

// CommonJS modülleri Node.js gibi sunucu tarafı JavaScript ortamlarında yaygın olarak benimsenmiştir. Ancak, istemci tarafı geliştirme söz konusu olduğunda, özellikle de performans nedenleriyle kaynakların eşzamansız yüklenmesinin tercih edildiği web tarayıcılarında sınırlamaları vardır. Sonuç olarak, AMD (Asenkron Modül Tanımı) ve ES modülleri (ECMAScript modülleri) gibi diğer modül sistemleri istemci tarafı geliştirme için popülerlik kazanmıştır.

// CommonJS vs ES Modules

// Sözdizimi: CommonJS, modülleri içe aktarmak için require() ve değerleri dışa aktarmak için module.exports veya exports kullanır. ES Modülleri, modülleri içe ve dışa aktarmak için sırasıyla import ve export deyimlerini kullanır.

// Statik ve Dinamik: CommonJS modülleri dinamik olarak yüklenir, yani bağımlılıklar çalışma zamanında çözümlenir ve yüklenir ES Modülleri ayrıştırma aşamasında statik olarak analiz edilir ve kullanılmayan dışa aktarımların son paketten çıkarıldığı ağaç sallama gibi optimizasyonlara izin verir.

// Eşzamansız ve Eşzamanlı: CommonJS modülleri senkronize olarak yüklenir, bu da özellikle sunucular gibi I/O işlemlerinin senkronize olduğu ortamlarda potansiyel olarak bloklama davranışına yol açabilir. ES Modülleri varsayılan olarak eşzamansız yüklenir ve kaynakların paralel yüklenmesine izin vererek web uygulamalarının performansını artırır.

// Tarayıcı Desteği: CommonJS öncelikle Node.js gibi sunucu tarafı ortamları için tasarlanmıştır. Browserify ve webpack gibi araçlar CommonJS modüllerini tarayıcı kullanımı için paketleyebilse de, ek derleme adımları gerektirir. ES Modülleri modern web tarayıcılarında yerel olarak desteklenir ve geliştiricilerin bunları çoğu durumda transpilasyon veya paketlemeye gerek kalmadan doğrudan kullanmasına olanak tanır. Bununla birlikte, tüm tarayıcılarda tam destek için Babel ve webpack gibi araçların kullanılması gerekebilir.

// Kapsam: CommonJS'de her modülün kendi kapsamı vardır ve modüller yalnızca bir kez değerlendirilir, yani dışa aktarılan değerler ilk içe aktarmadan sonra önbelleğe alınır. ES Modüllerinde, her içe aktarma deyimi dışa aktarılan değere canlı bir bağ oluşturur ve dışa aktarılan değerlerde yapılan değişikliklerin tüm içe aktarıcılara yansıtılmasını sağlar.

// Genel olarak, CommonJS sunucu tarafı JavaScript ortamlarında yaygın olarak kullanılırken, ES Modülleri özellikle istemci tarafı web geliştirme için modülerleştirmeye yönelik daha modern ve standartlaştırılmış bir yaklaşım sunmaktadır. Bununla birlikte, her iki sistemin de güçlü yönleri vardır ve farklı bağlamlarda hala geçerlidir.


// Node.js File System (fs)
// Node.js'de "dosya sistemi" (genellikle fs olarak adlandırılır) modülü, bilgisayarınızdaki dosya sistemiyle çalışmak için işlevler sağlar. Bu modül, dosyalardan okuma ve dosyalara yazma, dosya ve dizin oluşturma ve silme, dosya izinlerini değiştirme ve daha fazlası gibi çeşitli işlemleri gerçekleştirmenize olanak tanır.

// Okuma Dosyaları:
// fs.readFile(): Bir dosyanın içeriğini eşzamansız olarak okur.
// fs.readFileSync(): Bir dosyanın içeriğini eşzamanlı olarak okur.

    // Node.js'de readFile fonksiyonu bir dosyanın içeriğini eşzamansız olarak okumak için kullanılır. Parametre olarak dosyanın yolunu, isteğe bağlı 'encoding' ve bir geri arama işlevini alır. Dosya okunduğunda, geri arama işlevi iki parametre ile çağrılır: bir hata (okuma sırasında oluşmuşsa) ve dosyadan okunan veriler.

    // fs.readFile('example.txt', 'utf8', (err, data) => { ...

    // İsteğe bağlı encoding parametresi, dosya okunurken kullanılacak karakter kodlamasını belirtir. Sağlanmadığı takdirde, varsayılan kod 'utf8' olur; bu da dosya içeriğinin bir dize olarak döndürüleceği anlamına gelir.

    // fs.readFileSync(path[, options]): Bu fonksiyon bir dosyanın tüm içeriğini eşzamanlı olarak okur. Dosya içeriğini döndürür veya okuma sırasında herhangi bir hata oluşursa bir hata atar. Options parametresi isteğe bağlıdır ve eşzamansız versiyona benzer şekilde kodlama, bayrak ve mod içerebilir.

// Dosyalara Yazma:
// fs.writeFile(): Verileri bir dosyaya eşzamansız olarak yazar, dosya zaten varsa değiştirir.
// fs.writeFileSync(): Verileri bir dosyaya eşzamanlı olarak yazar, zaten varsa dosyayı değiştirir.

    // Node.js'de writeFile fonksiyonu bir dosyaya asenkron olarak veri yazmak için kullanılır. Parametre olarak dosyanın yolunu, yazılacak veriyi ve isteğe bağlı bir dizi seçeneği alır. Dosya başarıyla yazıldığında veya yazma işlemi sırasında bir hata oluştuğunda, bir geri arama işlevi çağrılır.

    // fs.writeFile(file, data, [options], callback);

    // file: Bu, verilerin yazılacağı dosyanın yolunu belirten bir dizedir.

    // data: Bu, dosyaya yazılacak verileri içeren bir dize, bir tampon ya da bir dizi olabilir.

    // options (isteğe bağlı): Bu, yazma için kullanılacak kodlama (varsayılan 'utf8'), dosya modu ve bayrak (varsayılan 'w') gibi isteğe bağlı parametreleri belirten bir nesnedir.

    // callback: Bu, veriler dosyaya yazıldıktan sonra çağrılan bir fonksiyondur. Yazma işlemi sırasında bir hata oluşmuşsa bir hata nesnesi olan bir parametre alır. Herhangi bir hata oluşmadıysa, parametre null olacaktır.

// Dizinlerle Çalışma:
// fs.mkdir(): Eşzamansız olarak bir dizin oluşturur.
// fs.mkdirSync(): Eşzamanlı olarak bir dizin oluşturur.

    // Node.js'de fs.mkdir() fonksiyonu eşzamansız olarak yeni bir dizin (klasör) oluşturmak için kullanılır. Dosya ve dizinlerle çalışmak için yöntemler sağlayan yerleşik fs (dosya sistemi) modülünün bir parçasıdır.

    // fs.mkdir(path[, options], callback);

    // Dikkat edilmesi gereken husus eğer path yolu halihazır mevcut bir dizine atıfta bulunuyorsa nested şekilde verilen path yeni klasörü ekler (Çünkü nereye eklendiğini bilir ve üst dizinler ile arasında kopukluk yoktur).

    // Ancak path yolu halihazırda mevcut değilse ve klasör yaratılmak isteniyor [options] içinde {recoursive: true} ayarlanmalıdır. Recursive true olarak ayarlanırsa, fonksiyon tüm eksik üst dizinleri tamamlar.

// fs.readdir(): Bir dizinin içeriğini eşzamansız olarak okur.
// fs.readdirSync(): Bir dizinin içeriğini eşzamanlı olarak okur.
// fs.rmdir(): Bir dizini eşzamansız olarak kaldırır.
// fs.rmdirSync(): Bir dizini eşzamanlı olarak kaldırır.

// Dosya İşlemleri:
// fs.rename(): Bir dosyayı eşzamansız olarak yeniden adlandırır.
// fs.renameSync(): Bir dosyayı eşzamanlı olarak yeniden adlandırır.
// fs.unlink(): Bir dosyayı eşzamansız olarak siler.
// fs.unlinkSync(): Bir dosyayı eşzamanlı olarak siler.
// fs.copyFile(): Bir dosyayı eşzamansız olarak kopyalar.
// fs.copyFileSync(): Bir dosyayı eşzamanlı olarak kopyalar.
// fs.stat(): Bir dosyanın durumunu eşzamansız olarak alır.
// fs.statSync(): Bir dosyanın durumunu eşzamanlı olarak alır.

// Diğer Operasyonlar:
// fs.chmod(): Bir dosyanın izinlerini eşzamansız olarak değiştirir.
// fs.chmodSync(): Bir dosyanın izinlerini eşzamanlı olarak değiştirir.
// fs.watchFile(): Bir dosyadaki değişiklikleri izler.
// fs.unwatchFile(): Bir dosyadaki değişiklikleri izlemeyi durdurur.
// fs.access(): Kullanıcının bir dosya veya dizin için izinlerini kontrol eder.
// fs.accessSync(): Kullanıcının bir dosya veya dizin için izinlerini eşzamanlı olarak kontrol eder.

// fs modülü Node.js'nin standart kütüphanesinin bir parçasıdır, bu nedenle onu kullanmak için herhangi bir ek paket yüklemenize gerek yoktur. Dosya sistemiyle etkileşim için çok çeşitli işlevler sağlar, bu da onu Node.js'de dosya tabanlı uygulamalar oluşturmak için güçlü bir araç haline getirir.


// **Not
// Node.js'de olay döngüsü, bloklamayan, asenkron G/Ç işlemlerine izin veren temel bir mekanizmadır. Dosyaları fs.writeFileSync() kullanarak senkronize bir şekilde yazmak gibi senkronize işlemler gerçekleştirdiğinizde, işlem tamamlanana kadar olay döngüsünü engeller. Bu süre zarfında Node.js diğer görevleri işleyemez, gelen istekleri ele alamaz veya diğer eşzamansız işlemleri gerçekleştiremez.

// Çok sayıda eşzamanlı işlemin veya isteğin olduğu yüksek eşzamanlılığa sahip uygulamalarda, olay döngüsünün engellenmesi performansı ve yanıt verme hızını ciddi şekilde düşürebilir. Bunun nedeni, her eşzamanlı işlemin olay döngüsünü bekleterek diğer görevlerin işlenmesinde gecikmelere neden olabilmesidir.

// Öte yandan, fs.writeFile() kullanılarak eşzamansız olarak dosya yazma gibi eşzamansız işlemler, dosya işlemi devam ederken Node.js'nin diğer görevleri işlemeye devam etmesini sağlar. Bu yaklaşım, olay döngüsünün duyarlı kalmasını ve gelen istekleri ele alabilmesini ve diğer görevleri eşzamanlı olarak gerçekleştirebilmesini sağlar.

// Bu nedenle, Node.js uygulamalarında, özellikle de yüksek eşzamanlılık gereksinimleri olanlarda genellikle asenkron dosya işlemlerinin (bu durumda fs.writeFile()) kullanılması önerilir. Bunu yaparak, Node.js'nin blokajsız I/O özelliklerinden yararlanarak uygulamanızın verimliliğini ve yanıt verebilirliğini en üst düzeye çıkarabilirsiniz.


// NPM
// npm, Node Paket Yöneticisi anlamına gelir. Node.js için varsayılan paket yöneticisi ve dünyanın en büyük yazılım kayıt defteridir. npm, geliştiricilerin kod paketlerini keşfetmesine, paylaşmasına ve yeniden kullanmasına ve proje bağımlılıklarını zahmetsizce yönetmesine olanak tanır.

// Module vs Package
// Modül, ilgili işlevleri içeren tek bir JavaScript dosyasıdır; paket ise bağımlılıkları ve meta verileriyle birlikte npm tarafından yönetilen bir modül koleksiyonudur.

// package.json vs package.lock.json
// package.json ve package-lock.json arasındaki temel fark, amaçları ve nasıl kullanıldıklarıdır.
// package.json proje meta verilerini ve bağımlılık bildirimlerini içerirken, package-lock.json projede yüklü olan tam bağımlılık ağacının ve sürümlerin ayrıntılı bir kaydıdır.
// package.json proje ayarlarını veya bağımlılıkları değiştirmek için geliştiriciler tarafından manuel olarak düzenlenebilirken, package-lock.json genellikle doğrudan düzenlenmez ve npm tarafından otomatik olarak yönetilir.
// package-lock.json, projenin bağımlılıklarının farklı kurulumlar veya ortamlar arasında tutarlı sürümlerle kurulmasını sağlayarak bağımlılık çözümlemesinde determinizm ve güvenilirlik sağlar.
// Özet olarak, package.json projenin meta verilerini ve bağımlılıklarını tanımlarken, package-lock.json tutarlı ve tekrarlanabilir derlemeler için bağımlılık sürümlerinin kilitlenmesini sağlar.