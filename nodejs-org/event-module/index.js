// Node.js Event Module
// Node.js'de olaylar, asenkron, olay güdümlü mimarisinin önemli bir yönüdür. "Emitters" olarak adlandırılan belirli nesnelerin, "Listeners" olarak adlandırılan fonksiyonları çağırmasına neden olan, adlandırılmış "olayları" yaymasına izin verirler. Bu mekanizma, Node.js uygulamalarının çeşitli eylem türlerine veya olaylara yanıt vermesini sağlar.

// EventEmitter: Bu, Node.js'de olay güdümlü mimarinin bir uygulamasını sağlayan çekirdek bir modüldür. EventEmitter'dan miras alan nesneler olay yayabilir.

// Event: Olay, bir şeyin gerçekleştiğini gösteren bir sinyaldir. Örneğin, bir istek almak, bir dosyayı okumayı bitirmek veya bir hatayla karşılaşmak olayları tetikleyebilir.

// Listeners: Belirli bir olay yayıldığında çağrılan bir işlevdir. Dinleyiciler yayıcılara eklenir ve belirli olaylara yanıt verir.

// Emitters: Olayları yayan bir nesne. Bu, sunucu, akış veya özel bir nesne gibi EventEmitter'dan miras alan herhangi bir nesne olabilir.

// Olaylar, Node.js'de HTTP istekleri, dosya I/O, veritabanı işlemleri ve daha fazlası gibi eşzamansız işlemleri ele almak için yaygın olarak kullanılır. Eşzamansız kodu yapılandırmak ve yönetmek için güçlü bir yol sağlarlar. Olaylar, geliştiricilerin belirli olaylara yanıt olarak yürütülecek belirli eylemleri (olay dinleyicileri) tanımlamasına olanak tanıyarak eşzamansız işlemleri yönetmek için kullanılır.

// Node.js'deki olay mimarisi, olay güdümlü (event-driven) programlamayı uygulamak için temel görevi gören EventEmitter sınıfı etrafında döner. İşte Node.js'de olay mimarisinin nasıl çalıştığına ve onu nasıl kullanabileceğinize dair genel bir bakış:

// EventEmitter sınıfı, Node.js'de olayları yaymak ve bu olaylara dinleyiciler eklemek için yöntemler sağlayan temel bir modüldür. EventEmitter'ı kullanmak için öncelikle 'events' modülünü içe aktarmanız gerekecektir.
const EventEmitter = require('node:events');

// EventEmitter sınıfından bir instance Oluşturma: 'events' modülünü içe aktardıktan sonra, bir EventEmitter örneği oluşturabilirsiniz:
const myEmitter = new EventEmitter();

// Event Listeners: Olay dinleyicileri, belirli bir olaya yanıt olarak yürütülen işlevlerdir. Dinleyicileri on() yöntemini veya addListener() gibi diğer adlarından birini kullanarak olaylara ekleyebilirsiniz. Bu dinleyici işlevleri, ilgili olay yayınlandığında yürütülecektir:
const olayFunc = () => {
  console.log('Olay gerceklesti!');
};
myEmitter.on('olay', olayFunc);

// Event Emission: Bir EventEmitter nesnesinin emit() yöntemini kullanarak olayları yayabilirsiniz. Bir olay yayıldığında, o olay için eklenmiş tüm dinleyiciler eşzamanlı olarak çağrılır. Olayın adı ilk bağımsız değişken olarak geçirilir. Emit için sağlanan diğer tüm ek bağımsız değişkenler "dinleyici" işlevlerine aktarılacaktır:
myEmitter.emit('olay');

// Listeners Kaldırma: removeListener() yöntemini kullanarak belirli olay dinleyicilerini kaldırabilir veya removeAllListeners() yöntemini kullanarak belirli bir olay için tüm dinleyicileri kaldırabilirsiniz. Bellek sızıntılarını önlemek için gereksiz dinleyicileri kaldırmak önemlidir:
myEmitter.removeListener('olay', olayFunc);

// Not: Geri arama işlevi (örnekte olayFunc) burada çok önemlidir çünkü hangi dinleyicinin kaldırılacağını tanımlar. Bu olmadan, Node.js belirtilen olaydan hangi dinleyici işlevinin çıkarılacağını bilemez. Bu aslında olay gerçekleştiğinde belirli bir fonksiyonun çağrılmasını engellemenin bir yoludur.

// Error Handling: EventEmitter hata olayları için yerleşik desteğe sahiptir. Bir 'hata' olayı yayılırsa ve hiçbir dinleyici eklenmezse, hata atılır, bu nedenle hataları uygun şekilde yakalamak çok önemlidir. Aksi halde uygulamanız çökebilir.
myEmitter.on('error', (err) => {
  console.error('Bir hatayla karsilasildi', err);
});

// Not: EventEmitter örneği tarafından yayılan tüm hataların yakalanmasını ve zarif bir şekilde ele alınmasını sağlarsınız. Uygulamanın çökmesine neden olmak yerine, hata günlüğe kaydedilir ve tüm uygulamayı kesintiye uğratmadan sorunu araştırmanıza ve ele almanıza olanak tanır.

// Elbette, Node.js'de EventEmitter sınıfı tarafından sağlanan listeners yöntemini veya eventNames yöntemini kullanarak "belirli bir olay için kayıtlı dinleyicileri" incelemenize (aslında dinleyicilerin yürütmek istediği fonksiyonlara) veya "dinleyicileri olan tüm olay adlarının" (en az bir dinleyiciye sahip tüm olaylara) bir listesini almanıza olanak tanır.

const listeners = myEmitter.listeners('olay');
console.log("Listeners for 'olay' event:", listeners);

const eventNames = myEmitter.eventNames();
console.log('Events:', eventNames);

// Ayrıca, yalnızca bir kez yürütülecek bir olaya dinleyici ekleyen bir "once" yöntemi de vardır. Olay ilk kez yayınlandıktan sonra, dinleyici otomatik olarak "kaldırılır":
const myEmitter2 = new EventEmitter();

myEmitter2.once('olay2', () => {
  console.log('Hello Samet!');
});

myEmitter2.emit('olay2'); // Hello World! and eventNames none.

myEmitter2.emit('olay2'); // eventNames has error event! Think about it. Why?
