// Asynchoronous Flow Control
// JavaScript özünde "ana" iş parçacığında bloklama yapmayacak şekilde tasarlanmıştır, bu da görünümlerin oluşturulduğu yerdir. Bunun tarayıcıdaki önemini tahmin edebilirsiniz. Ana iş parçacığı bloke olduğunda, son kullanıcıların korktuğu kötü şöhretli "donma" ile sonuçlanır ve başka hiçbir olay gönderilemez, bu da örneğin veri toplama kaybına neden olur.

// Bu, yalnızca işlevsel programlama tarzının çözebileceği bazı benzersiz kısıtlamalar yaratır. İşte bu noktada geri aramalar devreye girer.

// Ancak, daha karmaşık prosedürlerde geri aramaları ele almak zorlaşabilir. Bu durum genellikle "geri arama cehennemi" ile sonuçlanır; geri aramalarla iç içe geçmiş birden fazla fonksiyon kodu okumayı, hata ayıklamayı, düzenlemeyi vb. zorlaştırır.

// İşte bu noktada fonksiyonlar çok işe yarar. Daha karmaşık işlemler birçok fonksiyondan oluşur:
// 1. initiator style / input
// 2. middleware
// 3. terminator

// initiator style / input
// Bu, eşzamansız bir işlemin başlangıç noktasını temsil eder. İlk girdi verilerini aldığınız veya işlemi başlatan eylemi tetiklediğiniz yerdir. Girdi, kullanıcı etkileşimleri, global ortamdaki değişkenler, fonksiyon argümanları veya dosya sistemleri ya da ağ istekleri gibi harici kaynaklardan alınan veriler gibi çeşitli kaynaklardan gelebilir.

//middleware
// Ara katman işlevleri ilk girdi alındıktan sonra ancak nihai sonuç üretilmeden veya işlem sonlandırılmadan önce devreye girer. Bu işlevler tipik olarak verilerde veya yürütme akışında ara işlemler veya değişiklikler gerçekleştirir. Ara katman işlevleri veri doğrulama, dönüştürme, kimlik doğrulama, yetkilendirme, günlüğe kaydetme veya hata işleme gibi görevleri içerebilir. Genellikle başka bir işlev döndürürler, bu da birden fazla ara katman işlevinin birlikte zincirlenmesine veya oluşturulmasına olanak tanır.

// terminator:
// Sonlandırıcı işlev, eşzamansız işlemi sonlandırmaktan ve nihai sonucu üretmekten veya sonucu işlemek için bir geri çağırma çağırmaktan sorumludur. Bu işlev tipik olarak eşzamansız işlem zincirinin sonunda gelir. Bir istemciye yanıt göndermek, kullanıcı arayüzünü güncellemek, verileri depolamak veya sonuca dayalı ek eylemleri tetiklemek gibi görevleri içerebilir. JavaScript'te geri arama tabanlı eşzamansız programlama söz konusu olduğunda, sonlandırıcı işlev genellikle nihai sonuçla birlikte bir geri arama çağırır.

const express = require("express");
const app = express();

// Gelen istekleri günlüğe kaydetmek için middleware
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next(); // Kontrolü bir sonraki middleware'ye veya router'a aktarın
});

// JSON request gövdelerini ayrıştırmak için middleware
app.use(express.json());

// Initiator style / Input: Root URL'ye GET isteklerini işleme
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Terminator: Server'ı başlatma
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Overview of Blocking vs Non-Blocking
// Engelleme yöntemleri eşzamanlı olarak, engelleme olmayan yöntemler ise eşzamansız olarak yürütülür. Dosya Sistemi modülünü örnek olarak kullanırsak, bu eşzamanlı bir dosya okumadır:
const fs = require("fs");

const myFile = fs.readFileSync("../01-getting-started/event-loop.js", "utf-8");
console.log(myFile);
otherWorks();

// Ve işte eşzamansız eşdeğer bir örnek:
const myFile1 = fs.readFile(
  "../01-getting-started/event-loop.js",
  "utf-8",
  (data, err) => {
    if (!err) {
      console.log(data);
    }
  }
);
otherWorks();

// Yukarıdaki ilk örnekte, moreWork() işlevinden önce console.log çağrılacaktır. İkinci örnekte fs.readFile() bloklama yapmaz, böylece JavaScript yürütmesi devam edebilir ve moreWork() ilk olarak çağrılır. moreWork() işlevinin dosya okuma işleminin tamamlanmasını beklemeden çalıştırılabilmesi, daha yüksek verim elde edilmesini sağlayan önemli bir tasarım tercihidir.

// Eşzamanlılık ve Verim
// Node.js'de JavaScript yürütme tek iş parçacıklıdır, bu nedenle eşzamanlılık, event loopnün diğer işleri tamamladıktan sonra JavaScript geri arama işlevlerini yürütme kapasitesini ifade eder. Eşzamanlı bir şekilde çalışması beklenen herhangi bir kod, I/O gibi JavaScript dışı işlemler gerçekleşirken event loopnün çalışmaya devam etmesine izin vermelidir.

// Örnek olarak, bir web sunucusuna yapılan her bir isteğin tamamlanmasının 50 ms sürdüğü ve bu 50 ms'nin 45 ms'sinin asenkron olarak yapılabilecek veritabanı I/O'si olduğu bir durumu ele alalım. Bloklamayan asenkron işlemleri seçmek, diğer istekleri işlemek için istek başına bu 45 ms'yi serbest bırakır. Bu, sadece bloklama yöntemleri yerine bloklama olmayan yöntemleri kullanmayı seçerek kapasitede önemli bir fark yaratır.

// event loop, eş zamanlı çalışmayı idare etmek için ek iş parçacıklarının oluşturulabildiği diğer birçok dildeki modellerden farklıdır.

// Dangers of Mixing Blocking and Non-Blocking Code
// I/O ile uğraşırken kaçınılması gereken bazı kalıplar vardır. Bir örneğe bakalım:
const fs = require("node:fs");
fs.readFile("/file.md", (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.unlinkSync("/file.md");

// Yukarıdaki örnekte, fs.unlinkSync() işlevinin fs.readFile() işlevinden önce çalıştırılması muhtemeldir, bu da file.md dosyasını gerçekten okunmadan önce silecektir. Bunu yazmanın daha iyi bir yolu, tamamen bloklamasız ve doğru sırada yürütülmesi garantilidir:

const fs = require("node:fs");
fs.readFile("/file.md", (data, err) => {
  if (err) throw err;
  console.log(data);
  fs.unlink("/file.md", (err) => {
    if (err) throw err;
  });
});

// Yukarıda, fs.readFile() geri çağrısının içine fs.unlink()'e blokajsız bir çağrı yerleştirilerek doğru işlem sırası garanti altına alınmıştır.

// JavaScript Asynchronous Programming and Callbacks

// Bilgisayarlar tasarımları gereği eşzamansızdır. Asenkron, işlerin ana program akışından bağımsız olarak gerçekleşebileceği anlamına gelir. Mevcut tüketici bilgisayarlarında her program belirli bir zaman aralığında çalışır ve ardından başka bir programın çalışmasına devam etmesi için çalışmasını durdurur. Bu şey o kadar hızlı bir döngü içinde çalışır ki fark etmek imkansızdır. Bilgisayarlarımızın birçok programı aynı anda çalıştırdığını düşünürüz, ancak bu bir yanılsamadır (çok işlemcili makineler hariç).

// Programlar dahili olarak, sistemin dikkatini çekmek için işlemciye yayılan bir sinyal olan 'interrupts' kullanır.

// Şimdi bunun iç yüzüne girmeyelim, ancak programların eşzamansız olmasının ve dikkat gerektirene kadar yürütmelerini durdurmasının normal olduğunu ve bilgisayarın bu arada başka şeyler yürütmesine izin verdiğini unutmayın. Bir program ağdan yanıt beklerken, istek bitene kadar işlemciyi durduramaz.

// Normalde, programlama dilleri eşzamanlıdır ve bazıları dilde veya kütüphaneler aracılığıyla eşzamansızlığı yönetmek için bir yol sağlar. C, Java, C#, PHP, Go, Ruby, Swift ve Python varsayılan olarak eşzamanlıdır. Bazıları asenkron işlemleri iş parçacıkları kullanarak ve yeni bir süreç oluşturarak gerçekleştirir.

// JavaScript varsayılan olarak eşzamanlıdır ve tek iş parçacıklıdır. Bu, kodun yeni iş parçacıkları oluşturamayacağı ve paralel olarak çalışamayacağı anlamına gelir. Kod satırları, örneğin birbiri ardına seri olarak yürütülür. Ancak JavaScript tarayıcının içinde doğdu, başlangıçta ana görevi onClick, onMouseOver, onChange, onSubmit ve benzeri kullanıcı eylemlerine yanıt vermekti. Bunu eşzamanlı bir programlama modeliyle nasıl yapabilirdi? Cevap kendi ortamındaydı. Tarayıcı, bu tür bir işlevi yerine getirebilecek bir dizi API sağlayarak bunu yapmanın bir yolunu sunar. Daha yakın zamanda, Node.js bu konsepti dosya erişimi, ağ çağrıları ve benzerlerine genişletmek için bloklamayan bir I/O ortamı sunmuştur.

// Callbacks
// Kullanıcının bir düğmeye ne zaman tıklayacağını bilemezsiniz. Bu yüzden, tıklama olayı için bir olay işleyici tanımlarsınız. Bu olay işleyici, olay tetiklendiğinde çağrılacak olan bir işlevi kabul eder:
document.getElementById("button").addEventListener("click", () => {
  // item clicked
});

// Buna 'callback' denir.

// 'Callback', başka bir fonksiyona değer olarak aktarılan ve yalnızca olay gerçekleştiğinde çalıştırılacak basit bir fonksiyondur. Bunu yapabilmemizin nedeni JavaScript'in değişkenlere atanabilen ve diğer fonksiyonlara (high-order function olarak adlandırılır) aktarılabilen birinci sınıf fonksiyonlara sahip olmasıdır.

// Handling errors in callbacks
// Geri aramalarla hataları nasıl ele alırsınız? Çok yaygın bir strateji, Node.js'nin benimsediği şeyi kullanmaktır: herhangi bir geri arama işlevindeki ilk parametre hata nesnesidir: error-first callbacks. Hata yoksa, nesne null olur. Bir hata varsa, hatanın bazı açıklamalarını ve diğer bilgileri içerir.

const fs = require("node:fs");
fs.readFile("/file.json", (err, data) => {
  if (err) {
    // handle error
    console.log(err);
    return; // Exit the execute
  }
  // no errors, process data
  console.log(data);
});

// Geri aramalara alternatifler
// ES6'dan başlayarak JavaScript, geri aramaları kullanmayı içermeyen asenkron kodlarda bize yardımcı olan çeşitli özellikler sundu: Promises (ES6) ve Async/Await (ES2017).

// The Node.js Event Loop
// Event loop, Node.js'in - JavaScript'in tek iş parçacıklı olmasına rağmen - işlemleri mümkün olduğunca sistem çekirdeğine yükleyerek tıkanmayan I/O işlemleri gerçekleştirmesini sağlayan şeydir. Modern çekirdeklerin çoğu çok iş parçacıklı olduğundan, arka planda yürütülen birden fazla işlemi idare edebilirler. Bu işlemlerden biri tamamlandığında, çekirdek Node.js'ye uygun geri aramanın sonunda yürütülmek üzere yoklama kuyruğuna eklenebileceğini söyler.
