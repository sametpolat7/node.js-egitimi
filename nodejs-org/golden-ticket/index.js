// Burada geçen yazıları tam olarak anladığın gün Node.js'in kaputun altında tam olarak ne yaptığını anladın demektir!

// İlk olarak CPU ve RAM kavramlarına bakalım.

// CPU (Central Process Unit): CPU bir bilgisayarın "beyni" olarak kabul edilir. Talimatların yürütülmesinden ve programların çalıştırılması ve sistemin işletilmesi için gerekli hesaplamaların yapılmasından sorumludur. İşte CPU hakkında bazı önemli noktalar:

// Execution of Instructions: CPU, talimatları bellekten alır, kodlarını çözer ve ardından bunları yürütür. Bu talimatlar aritmetik hesaplamalar, mantıksal işlemler ve veri hareketi gibi temel işlemlerdir.

// Clock Speed: CPU performansı genellikle talimatları yürütme hızı olan ve genellikle gigahertz (GHz) cinsinden ölçülen saat hızı ile ölçülür. Daha yüksek bir saat hızı genellikle CPU'nun talimatları daha hızlı işleyebileceği anlamına gelir.

// Cores and Threads (Çekirdekler ve İş Parçacıkları): Modern CPU'lar genellikle çekirdek adı verilen ve aynı anda birden fazla görevi yerine getirmelerini sağlayan birden fazla işlem birimine sahiptir. Her çekirdek kendi talimat setini bağımsız olarak işleyebilir. Ayrıca, CPU'lar çoklu iş parçacığını destekleyerek her bir çekirdeğin aynı anda birden fazla yürütme iş parçacığını işlemesine olanak tanıyarak paralelliği daha da artırabilir.

// Cache Memory (Ön Bellek): CPU'lar, sık erişilen verileri ve talimatları saklamak için içlerinde küçük, hızlı bellek önbelleklerine sahiptir. Bu, verilere önbellekten erişmek ana bellekten getirmekten çok daha hızlı olduğu için verilere erişim süresini azaltmaya yardımcı olur.

// Komut Seti Mimarisi (ISA): CPU, talimatları anlayabileceği ve yürütebileceği talimat setini tanımlayan belirli bir talimat seti mimarisine göre yürütür. Yaygın örnekler arasında x86 (çoğu masaüstü ve dizüstü CPU tarafından kullanılır) ve ARM (mobil cihazlarda ve gömülü sistemlerde yaygındır) bulunur.

// Şimdi RAM'e bakalım:

// RAM (Random Access Memory): RAM, CPU'nun hızlı bir şekilde erişmesi gereken veriler ve talimatlar için geçici depolama sağlayan bir tür uçucu bellektir. İşte RAM'in bazı önemli yönleri:

// Depolama ve Erişilebilirlik: RAM, CPU tarafından aktif olarak kullanılan verileri ve talimatları depolar. Bir programı veya dosyayı açtığınızda, CPU'nun hızlı bir şekilde erişebilmesi ve değiştirebilmesi için verileri RAM'e yüklenir.

// Hız: RAM, sabit diskler veya SSD'ler gibi geleneksel depolama cihazlarından çok daha hızlıdır. Bu hız, aynı anda birden fazla program çalıştırırken veya büyük veri kümeleriyle çalışırken sorunsuz performans sağlamak için çok önemlidir.

// Kapasite: RAM kapasitesi, bilgisayarınızın daha yavaş depolama aygıtlarına ihtiyaç duymadan tek seferde ne kadar veri işleyebileceğini belirler. Daha fazla RAM, bilgisayarınızın yavaşlamadan daha büyük programları ve daha fazla görevi aynı anda idare etmesini sağlar.

// RAM Türleri: Her biri hız ve verimlilikte iyileştirmeler sunan DDR3, DDR4 ve DDR5 gibi çeşitli nesillerde gelen DDR (Çift Veri Hızı) RAM dahil olmak üzere farklı RAM türleri vardır. Diğer türler arasında SRAM (Statik Rastgele Erişimli Bellek) ve DRAM (Dinamik Rastgele Erişimli Bellek) bulunmaktadır.

// Uçucu Yapı: RAM uçucu bir bellektir, yani güç kapatıldığında içeriğini kaybeder. Bu nedenle verilerin uzun süreli depolama için sabit diskler veya SSD'ler gibi uçucu olmayan depolama cihazlarına kaydedilmesi gerekir.

// Birde birçok masaüstü, dizüstü bilgisayarda bulunan x86 bilgisayar mimarisini incelemeye ve CPU'nun talimatları nasıl yerine getirdiğine bakalım:

// Talimat Getirme: CPU, talimatları bilgisayarın belleğinden veya önbelleğinden alır. (RAM)
// Talimat Kod Çözme: CPU, hangi işlemin gerçekleştirilmesi gerektiğini ve hangi verilere ihtiyaç duyduğunu belirlemek için getirilen talimatların kodunu çözer.
// Yürütme: CPU, aritmetik, mantıksal veya veri aktarım işlemleri gibi gerekli işlemleri gerçekleştirerek kodu çözülen talimatları yürütür.
// Geri yazma: Gerekirse, CPU işlemin sonuçlarını belleğe veya bir çıkış aygıtına yazar.

// CPU ve RAM ilişkisini ve nasıl çalıştıklarını hakkında bir anlayış kazandık. Şimdi 'Sunucular nasıl çalışır?' ve 'CPU ile ilişkisi nasıldır?' sorularını açıklamaya çalışalım:

// Sunucu nedir?

// Sunucu, bir ağ üzerinden istemci olarak bilinen diğer bilgisayarlara kaynak, veri, hizmet veya işlevsellik sağlayan bir bilgisayar veya sistemdir. Sunucular web sitelerini barındırmak, e-postaları yönetmek, dosyaları depolamak, uygulamaları çalıştırmak veya veritabanlarına erişim sağlamak gibi çeşitli amaçlara hizmet edebilir. İşte sunucu ile ilgili bazı önemli maddeler:

// Donanım: Bir sunucu tipik olarak normal masaüstü bilgisayarlara kıyasla daha güçlü donanım bileşenlerinden oluşur. Bunun nedeni, sunucuların aynı anda birden fazla talebi ele alması ve genellikle yoğun kaynak gerektiren uygulamaları çalıştırması gerektiğidir.

// İşletim Sistemi: Sunucular, sunucu görevleri için optimize edilmiş özel işletim sistemlerini çalıştırır. Yaygın sunucu işletim sistemleri arasında Ubuntu Server, CentOS veya Red Hat Enterprise Linux gibi Linux dağıtımlarının yanı sıra Microsoft ortamları için Windows Server bulunur.

// Ağ Bağlantısı: Sunucular, internet veya yerel alan ağı (LAN) gibi bir ağa bağlanarak istemcilerin kendileriyle iletişim kurmasını sağlar. Bu iletişimi kolaylaştırmak için bir veya daha fazla ağ arayüzüne sahiptirler.

// Yazılım Hizmetleri: Sunucular, belirli işlevleri yerine getirmek için çeşitli yazılım uygulamaları veya hizmetleri çalıştırır. Örneğin:
// Web sunucuları (örn. Apache, Nginx) web sayfaları sunar ve istemcilerden gelen HTTP isteklerini işler.
// Posta sunucuları (örn. Postfix, Microsoft Exchange) e-posta iletişimini yönetir.
// Dosya sunucuları (örn. Samba, NFS) dosyaları bir ağ üzerinde depolar ve paylaşır.
// Veritabanı sunucuları (örn. MySQL, PostgreSQL, Microsoft SQL Server) veritabanlarını yönetir ve istemci uygulamalarından gelen sorguları işler.

// İstemci-Sunucu İletişimi: İstemciler, bu istekleri işleyen ve uygun yanıtı döndüren sunucuya istek gönderir. İstemci-sunucu iletişimi, sağlanan hizmete bağlı olarak belirli bir protokolü izler. Örneğin, web sunucuları HTTP protokolünü kullanır, posta sunucuları SMTP ve IMAP/POP3 protokollerini kullanır ve veritabanı sunucuları genellikle MySQL veya PostgreSQL gibi SQL tabanlı protokolleri kullanır.

// Bu iletişim sürecinde:

// Request: Bir istemci sunucudan bir şeye ihtiyaç duyduğunda bir istek gönderir. Bu bir web sayfası istemek, e-posta göndermek, bir dosyaya erişmek veya bir veritabanını sorgulamak olabilir.
// Processing: Sunucu isteği alır ve çalıştırdığı belirli hizmet veya uygulamaya göre işler. Bu, verilere erişmeyi, hesaplamaları çalıştırmayı veya komutları yürütmeyi içerebilir.
// Response: Sunucu isteği işledikten sonra istemciye bir yanıt gönderir. Bu yanıt, istenen bilgileri, tamamlanma onayını veya bir şeyler ters gittiyse bir hata mesajını içerir.
// Protokoller: Farklı sunucu türleri, istemcilerin ve sunucuların birbirlerinin isteklerini ve yanıtlarını anlayabilmelerini sağlamak için farklı iletişim protokolleri kullanır. Bu protokoller değiş tokuş edilen mesajların formatını, iletişim kurallarını ve hata işleme prosedürlerini tanımlar.

// Şimdi ikinci sorumuzu ele alalım, Sunucu ile CPU'nun ilişkisi nasıldır?

// Bir sunucu ile CPU (Merkezi İşlem Birimi) arasındaki ilişki, sunucunun performansı ve işlevselliği için temeldir. İşte birbirlerine nasıl bağlı oldukları:

// İşlem Gücü: CPU, bir sunucuda talimatların yürütülmesinden ve verilerin işlenmesinden sorumlu birincil bileşendir. Hız ve kapasite açısından sunucunun performansı, CPU'nun işlem gücünden büyük ölçüde etkilenir. Daha güçlü bir CPU'ya sahip bir sunucu, daha az güçlü bir CPU'ya sahip bir sunucuya göre daha fazla sayıda isteği işleyebilir ve verileri daha hızlı işleyebilir.

// Kaynak Tahsisi: Sunucular genellikle web sayfaları sunmak, veritabanı sorgularını işlemek ve ağ isteklerini ele almak gibi birden fazla görevi veya hizmeti aynı anda çalıştırır. CPU, işlem gücünü önceliklerine ve kaynak gereksinimlerine göre bu görevler arasında paylaştırır. CPU tarafından verimli kaynak tahsisi, sunucunun performans düşüşü yaşamadan birden fazla isteği yerine getirebilmesini sağlar.

// Paralel İşleme: Modern sunucular genellikle çok çekirdekli CPU'lara ve hatta birden fazla CPU'ya (çok soketli bir yapılandırmada) sahiptir. Bu, birden fazla görevin farklı CPU çekirdekleri veya CPU'lar üzerinde aynı anda yürütülebildiği paralel işlemeyi mümkün kılar. Paralel işleme, sunucunun eşzamanlı istekleri verimli bir şekilde işleme ve genel performansı artırma yeteneğini geliştirir.

// Sunucu İş Yükleri: Sunucu iş yükünün türü (örneğin, web barındırma, veritabanı yönetimi, hesaplama görevleri) CPU gereksinimlerini etkiler. Bazı iş yükleri yüksek tek iş parçacıklı performans gerektirirken, diğerleri çok iş parçacıklı veya paralel işleme yeteneklerinden yararlanabilir. Sunucular genellikle en iyi performans ve verimliliği elde etmek için belirli iş yükleri için optimize edilmiş CPU'larla yapılandırılır.

// Ölçeklenebilirlik: Sunucu iş yükleri zaman içinde büyüdükçe veya değiştikçe, CPU sunucunun ölçeklenebilirliğinde kritik bir rol oynar. CPU'yu yükseltmek veya ek CPU'lar eklemek, sunucunun işlem gücünü ve kapasitesini artırarak daha fazla sayıda isteği veya daha zorlu görevleri yerine getirmesini sağlayabilir.

// Özetle, bir sunucu ile CPU arasındaki ilişki, sunucunun performansı, kaynak yönetimi, ölçeklenebilirliği ve çeşitli iş yüklerini verimli bir şekilde ele alma becerisinin ayrılmaz bir parçasıdır. CPU'nun işlem gücü ve yetenekleri, sunucunun görevleri yerine getirme, verileri işleme ve istemcilerin isteklerini etkili bir şekilde sunma becerisini doğrudan etkiler.

// Şimdi geldik Node.js ile ayağa kaldırılan bir sunucunun kaput altına neler yaptığına:

// Bir Node.js sunucusu binlerce hatta milyonlarca istek aldığında, bunları verimli bir şekilde işlemek ve yanıtlamak için birkaç temel mekanizma kullanır. İşte tipik olarak kaputun altında gerçekleşen mantık ve süreçlere genel bir bakış:

// Olay Güdümlü Mimari: Node.js olay güdümlü, blokajsız bir I/O modeli üzerine inşa edilmiştir. Bu, her istek için yeni bir iş parçacığı oluşturmak yerine, birden fazla eşzamanlı bağlantıyı işlemek için tek iş parçacıklı bir olay döngüsü kullandığı anlamına gelir. İstekler geldikçe, bir olay döngüsünde kuyruğa alınır ve eşzamansız olarak işlenir, böylece sunucunun çok sayıda isteği bloklama olmadan aynı anda işlemesine olanak tanır.

// Asenkron I/O İşlemleri: Node.js büyük ölçüde dosyalardan okuma, veritabanlarını sorgulama ve HTTP istekleri yapma gibi asenkron G/Ç işlemlerine dayanır. Bir istek G/Ç işlemleri gerektirdiğinde, Node.js bu görevleri "altta yatan işletim sistemine devrederek" sunucunun G/Ç işlemlerinin tamamlanmasını beklerken diğer istekleri işlemeye devam etmesini sağlar.

// Engellemesiz Yürütme: Node.js, JavaScript kodunu engellemesiz bir şekilde yürütür, yani bir sonraki işleme geçmeden önce bir işlemin tamamlanmasını beklemez. Bunun yerine, kodu yürütmeye devam eder ve tamamlandıklarında eşzamansız işlemlerin sonuçlarını işlemek için geri aramaları, vaatleri veya async/await sözdizimini kullanır.

// Olay Döngüsü ile Eşzamanlılık: Node.js'deki olay döngüsü, yeni olaylar için olay kuyruğunu sürekli izleyerek ve olaylar tetiklendiğinde geri arama işlevlerini çalıştırarak birden fazla isteğin yürütülmesini verimli bir şekilde yönetir. Bu, Node.js'nin aşırı sistem kaynağı tüketmeden çok sayıda eşzamanlı bağlantıyı idare etmesini sağlar.

// Cluster Modülü ile Ölçeklenebilirlik: Node.js, uygulamanızın her biri CPU'nun ayrı bir core'unda çalışan birden fazla örneğini oluşturmanıza olanak tanıyan bir Cluster modülü sağlar. Gelen istekleri uygulamanızın birden fazla örneğine dağıtarak performansı ve ölçeklenebilirliği artırabilirsiniz.

// Deep Dive For Cluster Module:
// Node.js'de cluster modülü, sunucu bağlantı noktalarını paylaşan alt süreçler (işçiler) oluşturmanıza ve böylece çok çekirdekli (core) sistemlerden yararlanmanıza olanak tanıyan yerleşik bir modüldür. Mevcut CPU çekirdeklerinin (core) tüm potansiyelini kullanarak Node.js uygulamalarının ölçeklendirilmesine yardımcı olur. Cluster modülü, sunucu portlarını paylaşan alt süreçler oluşturmak için basit bir API sağlar. Bir küme oluşturduğunuzda, ana süreç bir bağlantı noktasını dinler ve ardından aynı bağlantı noktasını paylaşan alt süreçler oluşturur. İstekler bu işçi süreçler arasında dağıtılarak sistem kaynaklarının daha iyi kullanılması sağlanır. Cluster modülünü kullanarak Node.js uygulamaları daha fazla eşzamanlı bağlantıyı idare edebilir ve ağır yükler altında daha iyi performans gösterebilir. Bu, özellikle web sunucuları gibi birden fazla isteği aynı anda ele almanın performans açısından çok önemli olduğu uygulamalar için kullanışlıdır.

const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hello World\n");
    })
    .listen(8000);

  console.log(`Worker ${process.pid} started`);
}

// Peki, Core aslında nedir?

// Core, bir CPU içindeki bağımsız bir işlem birimini ifade eder. Modern CPU'lar tipik olarak, her biri talimatları yürütebilen ve aynı anda hesaplamalar yapabilen birden fazla core içerir. Birden fazla çekirdeğe sahip olmak, CPU'nun aynı anda birden fazla görevi veya iş parçacığını işlemesine olanak tanır, bu da özellikle paralelleştirilebilen görevlerde daha iyi performans ve verimlilik sağlayabilir.

// Örneğin, çift core'lu bir CPU'nun iki bağımsız işlem birimi, dört core'lu bir CPU'nun dört ve benzeri vardır. Bir CPU içindeki her core tipik olarak aritmetik mantık birimleri (ALU'lar), kayıtlar ve ön bellek gibi kendi yürütme kaynakları kümesine sahiptir ve bunların bağımsız ve paralel olarak çalışmasına izin verir.

// Bir CPU'daki core sayısı, işlem gücünü ve çoklu görev yeteneklerini belirlemede önemli bir faktördür. Birden fazla coreten yararlanmak üzere tasarlanan yazılımlar, görevleri bu coreler arasında dağıtarak özellikle video düzenleme, 3D işleme, oyun oynama ve çoklu görev gibi görevlerde tek coreli CPU'lara kıyasla daha hızlı performans elde edilmesini sağlar.

// Peki, Kernel nedir?

// Kernel, bir işletim sisteminin (OS) donanım ve yazılım katmanları arasında köprü görevi gören temel bir bileşenidir. CPU, bellek, giriş/çıkış aygıtları gibi sistem kaynaklarını yönetmekten ve uygulamaları çalıştırmak için bir platform sağlamak üzere bunların etkileşimlerini koordine etmekten sorumludur. Kernel, donanım kaynaklarına erişmesine ve kritik sistem işlevlerini yerine getirmesine olanak tanıyan ayrıcalıklı modda çalışır. Kullanıcı alanı uygulamalarıyla, programların kendi adlarına görevleri yerine getirmesi için çekirdeğe yaptıkları istekler olan "sistem çağrıları" aracılığıyla etkileşime girer.

// O zaman soralım, Bir nodejs sunucusuna istekte bulunduğumuzda kaputun altında aslında neler olur?

// V8 Motorlu Node.js Sunucusu: Bir Node.js sunucusuna istek gönderdiğinizde, Node.js çalışma zamanı (V8 JavaScript motorunu içerir) isteği alır. V8 motoru JavaScript kodunu derler ve yürütür.

// İstek İşleme: Node.js çalışma zamanı içinde JavaScript kodunuz (Node.js API'lerini kullanarak) isteği işler. Bu, HTTP isteklerini işleme, veritabanlarına erişme veya uygulama mantığını yürütme gibi çeşitli görevleri içerebilir.

// Sistem Çağrıları: JavaScript kodunuzun işletim sistemiyle etkileşime girmesi veya çekirdek düzeyinde erişim gerektiren görevleri yerine getirmesi gerekiyorsa (örneğin, dosyalardan okuma, ağ istekleri yapma), kernel'e "sistem çağrıları" yapar.

// Kernel İşleme: Kernel bu sistem çağrılarını alır ve süreçlerin dosyalar, ağ arayüzleri vb. gibi sistem kaynaklarıyla etkileşimlerini yönetir. Bellek kullanımlarını ve G/Ç işlemlerini yönetmek de dahil olmak üzere bu işlemleri planlar ve koordine eder.

// CPU Yürütme: Kernel, işlemleri yürütülmek üzere CPU çekirdeklerine (core) programlar. Her CPU çekirdeği (core), atandığı işlemlerden gelen talimatları yürütür. Dolayısıyla, uygulamanız ağır hesaplama içeriyorsa, bu talimatlar CPU çekirdeklerinde (core) yürütülecektir.

// İşte her ikisinin de Türkçesi 'çekirdek' anlamına gelen core ve kernel'in ne için kullanıldıkları. Şimdi V8 motorunun tamamlanması için Kernel'a haber saldığı bir işlemin geçirdiği serüveni inceleyelim:

// Asenkron İşlemin Başlatılması: Node.js kodunuz HTTP isteği yapmak gibi eşzamansız bir işlem başlattığında, yürütmeyi engellemez. Bunun yerine, işlem tamamlandığında yürütülecek bir callback işlevi kaydeder. Bu, Node.js'nin işlemin bitmesini beklerken diğer kodları çalıştırmaya devam etmesini sağlar.

// Kernel'a Sistem Çağrıları Gönderme: Node.js asenkron işlemi başlattığında (örneğin, bir HTTP isteği), ağ I/O'sunu gerçekleştirmek için Kernel'a sistem çağrıları yapar. Bu sistem çağrıları kernel'ı işlem hakkında bilgilendirir ve HTTP isteğinin hedef adresi gibi işlemi gerçekleştirmesi için gerekli bilgileri sağlar.

// Kernel İşleme: Kernel, bir ağ bağlantısı kurma, HTTP isteğini ağ üzerinden gönderme ve yanıtı bekleme gibi görevleri içerebilen ağ G/Ç işlemini yönetir. Bu süre zarfında Kernel, CPU çekirdeklerinde yürütülmesi için diğer işlemleri programlayabilir.

// Asenkron İşlemin Tamamlanması: Ağ I/O işlemi tamamlandığında (örneğin, HTTP yanıtı alındığında), "KERNEL" Node.js'ye işlemin tamamlandığını bildirir.

// Event Loop and Callback Execution: Event loop, tamamlanan eşzamansız işlemleri sürekli olarak kontrol eder. HTTP yanıtı almak gibi eşzamansız bir "işlemin bittiğini tespit ettiğinde", ilgili callback işlevini olay kuyruğuna yerleştirir.

// Geri Çağrının Yürütülmesi: Olay döngüsünün işlemesinin bir parçası olarak, callback işlevlerini olay kuyruğundan çıkarır ve yürütür. HTTP isteği söz konusu olduğunda, yanıtın işlenmesiyle ilişkili callback işlevi yürütülür. Bu callback işlevi genellikle yanıt verilerini işleme ve buna dayalı olarak gerekli eylemleri gerçekleştirme mantığını içerir.

// Fark ettiniz mi? Event loop callback fonksiyonunu işlem yürütülmeye devam ederken hemen queue'a yerleştirmez. İşlemin tamamlandığı Kernel tarafından V8 motoruna bildirildiğinde queue'a yerleştirilir. Peki bu süreçte ilgili callback fonksiyonu nerede tutulur?

// SORU: Callback işlevine sahip bir asenkron işlem başlatıldığında, V8 motoru call stacke bir frame olarak iletilir. Bloklamayı önlemek için, V8 bu işlemi kernel'a bir sistem çağrısı olarak iletir ve işlemi call stackten kaldırır. İlk sorum, işletim sistemi işlemi tamamlayana ve V8 motoruna işlemin tamamlandığını bildirene kadar geri arama işlevi nerede tutuluyor? İşlem hala yürütülürken kuyruğa kaldırılmaması gerektiğini düşünüyorum çünkü FIFO mantığı ile çalışan queue işlem yürütülürken geri çağırma fonksiyonunu saklarsa kendisinden sonra başlatılan ve daha kısa sürede yürütülen asenkron işlemleri engelleyebilir?

// CEVAP: Analiziniz oldukça aydınlatıcı! Eşzamansız işlemler sırasında Node.js'in geri arama işlevini ve olay kuyruğunu nasıl yönettiğini inceleyelim:

// Asenkron İşlem Başlatma: Node.js'de HTTP isteği yapmak gibi bir geri arama işlevine sahip eşzamansız bir işlem başlatıldığında, geri arama işlevi işlemle ilişkilendirilir.

// Kernel'a İletim: Bahsettiğiniz gibi, olay döngüsünün engellenmesini önlemek için V8 motoru eşzamansız işlemi genellikle bir sistem çağrısı aracılığıyla işletim sistemine (kernel) aktarır. Bu, Node.js'nin işlemin tamamlanmasını beklerken diğer görevleri yürütmeye devam etmesini sağlar.

// Call stackten Kaldırma: Eşzamansız işlem call stackten kaldırılarak olay döngüsünün işlemin bitmesini beklemeden diğer görevleri işlemeye devam etmesine izin verilir.

// Geri Çağırma İşlevinin Depolanması: Eşzamansız işlemle ilişkili geri arama işlevi "HEMEN olay kuyruğuna YERLEŞTİRİLMEZ". Bunun yerine, JavaScript çalışma zamanı bağlamında bellekte (HEAP) kalır. Node.js, işlem tamamlanana kadar bu geri arama işlevine bir "referans" tutar.

// Geri Çağırma Yürütmesi: Eşzamansız işlem tamamlandığında ve işletim sistemi Node.js'yi bilgilendirdiğinde, ilgili geri arama işlevi önceliğine bağlı olarak queue üzerinde sıraya alınır. Event loop daha sonra sırayı kaldırır ve call stacke iletilen geri arama işlevini yürütür.
