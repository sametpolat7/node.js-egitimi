// Node.JS Nedir?
// Node.js®, geliştiricilerin sunucular, web uygulamaları, komut satırı araçları ve komut dosyaları oluşturmasına olanak tanıyan ücretsiz, açık kaynaklı, platformlar arası bir "JavaScript çalışma zamanı ortamıdır". Chrome'un V8 JavaScript motoru üzerinde inşa edilmiştir. 2009 yılında Ryan Dahl tarafından duyurulmuştur.

// Genel Özellikler
// JavaScript Çalışma Zamanı: Node.js, Chrome'un hızı ve performansı ile bilinen V8 JavaScript motoru üzerine inşa edilmiştir. Bu, JavaScript'i yalnızca tarayıcıda değil, sunucuda da kullanmanıza olanak tanır.

// Asenkron ve Olay Güdümlü: Node.js'in en önemli özelliklerinden biri asenkron ve olay güdümlü mimarisidir. Bu, Node.js'nin bloklama yapmayan I/O işlemleri kullanarak çok sayıda eş zamanlı bağlantıyı verimli bir şekilde işleyebileceği anlamına gelir.

// NPM Node Package Manager (NPM), Node.js ile birlikte gelen güçlü bir araçtır. Bağımlılıkları kolayca yönetmenize, paketleri yüklemenize ve kendi paketlerinizi başkalarıyla paylaşmanıza olanak tanır.

// Modüller: Node.js, kodunuzu yeniden kullanılabilir modüller halinde düzenlemenize olanak tanıyan yerleşik bir modül sistemine sahiptir. Uygulamalarınızın işlevselliğini genişletmek için NPM aracılığıyla sunulan üçüncü taraf modülleri de kullanabilirsiniz.

// HTTP Sunucusu: Node.js, web sunucuları oluşturmanıza ve HTTP isteklerini ve yanıtlarını işlemenize olanak tanıyan yerleşik bir HTTP modülü içerir. Bu, Node.js kullanarak web uygulamaları ve API'ler oluşturmayı kolaylaştırır.

// Çapraz platform: Node.js çapraz platformdur, yani Windows, macOS ve Linux üzerinde çalışır. Bu, onu farklı işletim sistemlerinde çalışması gereken uygulamalar oluşturmak için çok yönlü bir seçim haline getirir.

// Popüler Çerçeveler: Node.js'nin sadece temel özelliklerini kullanarak uygulamalar oluşturabilseniz de, geliştirmeyi kolaylaştırmanıza yardımcı olacak birçok popüler çerçeve ve kütüphane de mevcuttur. Popüler olanlardan bazıları web uygulamaları oluşturmak için Express.js, gerçek zamanlı iletişim için Socket.io ve veritabanı entegrasyonu için Sequelize'dir.

// Topluluk ve Kaynaklar: Node.js geniş ve aktif bir topluluğa sahiptir, bu da öğrenmenize ve sorunları gidermenize yardımcı olacak çok sayıda kaynak olduğu anlamına gelir. Bu kaynaklara dokümantasyon, eğitimler, forumlar ve çevrimiçi topluluklar dahildir.

// Ölçeklenebilirlik: Node.js, yüksek düzeyde eşzamanlılığı idare edebilme yeteneğiyle bilinir, bu da onu özellikle gerçek zamanlı iletişim gerektiren veya çok sayıda eşzamanlı bağlantıyı idare etmesi gereken ölçeklenebilir uygulamalar oluşturmak için çok uygun hale getirir.

// Buradaki bazı terimleri açıklayalım: 

// Asynchronous: (Eşzamansız)
// Programlamada eşzamanlı, "diğerine başlamadan önce bir şeyin bitmesini beklemek" anlamına gelir. Asenkron "beklememek" anlamına gelir - bir programın bir işlemin tamamlanmasını beklerken başka şeyler yapmasına izin verir. Daha basit bir ifadeyle, bir şeyin bitmesini beklemek yerine, diğer görevlere geçebilir ve bittiğinde daha sonra geri gelebiliriz. Bu özellikle dosya okuma, internetten veri alma veya kullanıcı etkileşimlerini işleme gibi bekleme süresinin programımızı yavaşlatabileceği görevler için kullanışlıdır.

// Single Thread: (Tek iş parçacıklı)
// Bir iş parçacığını, bir bilgisayarın bir programı yürütmek için izlediği bir dizi talimat olarak düşünün. Node.js gibi tek iş parçacıklı bir ortamda, bu türden yalnızca bir dizi vardır. Bu, programın bir seferde yalnızca bir dizi talimat yürütebileceği anlamına gelir. Bu kulağa sınırlayıcı gelse de, aslında programlamayı basitleştirir çünkü birden fazla iş parçacığını yönetme ve yarış koşulları veya kilitlenme gibi sorunlarla uğraşma konusunda endişelenmemiz gerekmez. Bununla birlikte, Node.js'nin bu tek iş parçacığından en iyi şekilde yararlanmak için asenkron işlemleri kapsamlı bir şekilde kullandığını ve bloklama olmadan aynı anda birçok görevi yerine getirmesine izin verdiğini belirtmek önemlidir.

// Event-Driven: (Olay güdümlü)
// Olay güdümlü programlama modelinde, programın akışı eşzamansız olarak gerçekleşen olaylar tarafından belirlenir. Bu olaylar kullanıcı eylemleri (bir düğmeye tıklamak gibi), sistem bildirimleri (bir zamanlayıcının süresinin dolması gibi) veya ağ üzerinden alınan veriler olabilir. Program baştan sona doğrusal bir şekilde yürütülmek yerine, bu olaylara meydana geldikçe yanıt verir. Node.js'de bu olay odaklı mimari temeldir - dosya okuma veya ağ isteklerini işleme gibi birçok işlem eşzamansız olarak gerçekleştirilir ve tamamlandıklarında olayları tetikler. Bu, Node.js'nin I/O'ya bağlı görevleri verimli bir şekilde yönetmesine ve birçok eşzamanlı bağlantıyı engellenmeden idare etmesine olanak tanır.

// Anlamamızı kolaylaştırması açısından bir analoji türetelim:

// Thread: Bir iş parçacığını, bilgisayarın bir programı yürütmek için izlediği bir dizi talimat olarak düşünün. Bilgisayarın görevleri tamamlamak için yürüdüğü bir yol gibidir.

// Single Thread: Node.js gibi tek iş parçacıklı bir ortamda, bu türden yalnızca bir yol vardır. Bu, programın aynı anda yalnızca bir yol boyunca yürüyebileceği anlamına gelir. Bu, aynı anda yalnızca bir görev yapabilen tek bir işçiye sahip olmak gibidir.

// Bir mutfakta yemek yaptığınızı düşünün. Mutfaktaki tek kişi sizseniz, aynı anda yalnızca bir işe odaklanabilirsiniz. Sebzeleri doğrayabilir, sonra tencereye koyabilir, sonra da tencereyi karıştırabilirsiniz. Aynı anda hem tencereyi karıştırıp hem de sebze doğrayamazsınız çünkü sadece bir kişisiniz. Benzer şekilde, Node.js gibi tek iş parçacıklı bir ortamda, program aynı anda yalnızca bir göreve odaklanabilir. Ancak Node.js bu konuda akıllıdır. Eşzamansız işlemleri yaygın olarak kullanır, yani bir görevi başlatabilir, ardından ilkinin bitmesini beklerken başka bir göreve geçebilir. Bu, Node.js'nin tek iş parçacıklı olmasına rağmen engellenmeden aynı anda birçok görevi yerine getirmesine olanak tanır. Bu, mutfakta yemek pişirmeye benzer - sebzeleri pişirmek için ocağa koyabilir, ardından ilk parti pişerken daha fazla sebze doğramaya başlayabilirsiniz.

// Peki I/O'ya bağlı görevler aslında ne demek?
// "I/O'ya bağlı görevler" bir bilgisayar programında CPU'nun işlem hızından ziyade giriş/çıkış işlemlerinin hızıyla sınırlı olan görevleri ifade eder. Giriş/çıkış işlemleri diskten okuma veya diske yazma, ağ iletişimi, veritabanı erişimi ve kullanıcı giriş/çıkışını içerir. Bir görev I/O'ya bağlı olduğunda, hesaplama yapmak yerine giriş/çıkış işlemlerinin tamamlanmasını bekleyerek önemli miktarda zaman harcar. *Bu gibi durumlarda, görevin performansı CPU'nun talimatları ne kadar hızlı işleyebildiğinden ziyade harici kaynaklardan ne kadar hızlı okuyabildiği veya yazabildiği ile belirlenir.

// Örneğin, bir web sunucusu uygulamasında, gelen HTTP isteklerinin işlenmesi ve yanıtların gönderilmesi, ağdan veri okumayı ve ağa veri yazmayı içerir. Bu işlemler I/O'ya bağlıdır çünkü ağ iletişiminin hızına bağlıdırlar.

// Node.js, eşzamansız, engellemesiz I/O modeli nedeniyle I/O'ye bağlı görevleri işlemek için özellikle uygundur. Node.js, bir sonraki göreve geçmeden önce I/O işlemlerinin tamamlanmasını beklemek yerine, aynı anda birden fazla I/O işlemi başlatabilir ve I/O işlemlerinin bitmesini beklerken diğer görevleri yürütmeye devam edebilir. Bu, Node.js'nin yüksek düzeyde eşzamanlılığı verimli bir şekilde ele almasını ve çok sayıda giriş/çıkış işlemi içeren uygulamalar için iyi ölçeklendirilmesini sağlar.

// CPU Nedir?
// CPU, 'Central Processing Unit' (Merkezi İşlem Birimi) anlamına gelir. Hesaplamaların çoğunu gerçekleştirdiği ve yazılım programlarının çalışmasını sağlayan talimatları yürüttüğü için genellikle bilgisayarın "beyni" olarak adlandırılır. CPU, yazılım programlarından gelen talimatları yorumlar ve temel aritmetik, mantık ve kontrol işlemlerini gerçekleştirir.

// İşleme: CPU, yazılım programlarından alınan verileri ve talimatları işler. Aritmetik işlemler, mantıksal karşılaştırmalar ve veri manipülasyonu gibi görevleri yerine getirir.

// Kontrol Ünitesi: CPU'nun kontrol birimi CPU'nun işlemlerini koordine eder ve yönetir. Talimatları bellekten alır, kodlarını çözer ve uygun şekilde yürütür.

// Aritmetik Mantık Birimi (ALU): ALU, CPU'nun aritmetik ve mantıksal işlemleri gerçekleştirmekten sorumlu bir bileşenidir. Toplama, çıkarma, çarpma, bölme ve karşılaştırma gibi görevleri yerine getirebilir.

// Kayıtlar: CPU, işlem sırasında verileri geçici olarak tutan yazmaç adı verilen küçük, hızlı bellek birimleri içerir. Kayıtlar işlenenleri, ara sonuçları ve bellek adreslerini saklamak için kullanılır.

// Saat Hızı: CPU'nun gigahertz (GHz) cinsinden ölçülen saat hızı, talimatları ne kadar hızlı yürütebileceğini belirler. Daha yüksek saat hızları genellikle daha hızlı işlem süreleriyle sonuçlanır.

// Çekirdekler: Birçok modern CPU, aynı anda birden fazla görevi yürütmelerine olanak tanıyan birden fazla işlem çekirdeğine sahiptir. Her çekirdek talimatları bağımsız olarak yürütebilir ve CPU'nun genel işlem gücünü artırır.


// Node.JS Egitimi
// Process Object
// Node.js'de process nesnesi, geçerli Node.js süreci hakkında bilgi ve bu süreç üzerinde kontrol sağlayan global bir nesnedir. Çalışan Node.js uygulamasıyla etkileşime girmenize, ortam değişkenlerine erişmenize, yürütme akışını kontrol etmenize ve süreçle ilgili çeşitli olayları ele almanıza olanak tanır.

// Birkaç özelliği: 
// process.argv: Node.js işlemi başlatıldığında komut satırı üzerinden iletilebilen bağımsız değişkenlerini içeren bir dizi.
// process.env: Kullanıcı ortam değişkenlerini içeren bir nesne.
// process.cwd(): Node.js sürecinin geçerli çalışma dizinini döndürür.


// REPL Nedir?
// REPL (Read Eval Print Loop), Okuma-Değerlendirme-Yazdırma Döngüsü anlamına gelir. Node.js de dahil olmak üzere birçok programlama dilinde bulunan yerleşik bir etkileşimli programlama ortamıdır. Node.js REPL, bağımsız bir komut dosyası veya uygulama oluşturmaya gerek kalmadan JavaScript kodunu etkileşimli olarak çalıştırmak, ifadeleri değerlendirmek ve kod parçacıklarını test etmek için bir yol sağlar.

// Node.js REPL, kod parçacıklarını hızlı bir şekilde test etmek, JavaScript özelliklerini denemek ve hata ayıklamak için kullanışlı bir araçtır. Özellikle ayrı komut dosyaları oluşturma ve çalıştırma yükü olmadan fikirleri prototiplemek ve keşfetmek için kullanışlıdır.







