// Node.js Nedir?
// Node.js, açık kaynaklı ve platformlar arası bir JavaScript çalışma zamanı ortamıdır. Hemen hemen her tür proje için popüler bir araçtır! Node.js, Google Chrome'un çekirdeği olan V8 JavaScript motorunu tarayıcının dışında çalıştırır. Bu, Node.js'nin çok performanslı olmasını sağlar.

// Bir Node.js uygulaması, her istek için yeni bir iş parçacığı oluşturmadan tek bir işlemde çalışır. Node.js, standart kütüphanesinde JavaScript kodunun bloklanmasını önleyen bir dizi asenkron I/O ilkeli sağlar ve genel olarak Node.js'deki kütüphaneler bloklanmayan paradigmalar kullanılarak yazılır, bu da bloklama davranışını normdan ziyade istisna haline getirir.

// Node.js ağdan okuma, bir veritabanına veya dosya sistemine erişme gibi bir I/O işlemi gerçekleştirdiğinde, iş parçacığını engellemek ve CPU döngülerini bekleyerek boşa harcamak yerine, yanıt geri geldiğinde işlemlere devam edecektir.

// Bu, Node.js'nin önemli bir hata kaynağı olabilecek iş parçacığı eşzamanlılığını yönetme yükü getirmeden tek bir sunucuyla binlerce eşzamanlı bağlantıyı işlemesine olanak tanır.

// Node.js benzersiz bir avantaja sahiptir çünkü tarayıcı için JavaScript yazan milyonlarca ön uç geliştiricisi artık tamamen farklı bir dil öğrenmeye gerek kalmadan istemci tarafı koduna ek olarak sunucu tarafı kodunu da yazabilmektedir.

// Node.js'de yeni ECMAScript standartları sorunsuz bir şekilde kullanılabilir, çünkü tüm kullanıcılarınızın tarayıcılarını güncellemelerini beklemek zorunda değilsiniz - Node.js sürümünü değiştirerek hangi ECMAScript sürümünün kullanılacağına karar vermekten siz sorumlusunuz ve Node.js'yi bayraklarla çalıştırarak belirli deneysel özellikleri de etkinleştirebilirsiniz.


// HTTP Nedir?
// HTTP, (HyperText Transfer Protocol). World Wide Web'de bir istemci (web tarayıcısı gibi) ile bir sunucu arasındaki iletişimi yöneten bir protokoldür. HTTP, web üzerindeki veri iletişiminin temelidir ve metin, resim, video ve diğer multimedya kaynakları dahil olmak üzere çeşitli içerik türlerinin alışverişini sağlar.

// İstemci-Sunucu Modeli: HTTP, bir istemcinin (örneğin bir web tarayıcısı) bir sunucuya istek gönderdiği ve sunucunun bu isteklere istenen kaynaklarla yanıt verdiği bir istemci-sunucu modelini izler.

// Durumsuz Protokol: HTTP durumsuzdur, yani bir istemciden bir sunucuya yapılan her istek bağımsızdır ve önceki istekler hakkında herhangi bir bilgi tutmaz. Ancak web uygulamaları, istekler arasında durumu korumak için genellikle çerezler ve oturum yönetimi gibi teknikler kullanır.

// İstek-Yanıt Döngüsü: Bir istemci ve sunucu arasındaki etkileşim tipik olarak bir istek-yanıt döngüsünü takip eder. İstemci, sunucuya istenen eylemi (örneğin, bir web sayfasını alma) belirten bir HTTP isteği gönderir ve sunucu, isteğin sonucunu belirten bir HTTP durum koduyla birlikte istenen kaynakla yanıt verir.

// Metin Tabanlı Protokol: HTTP metin tabanlı bir protokoldür, yani istekler ve yanıtlar genellikle düz metin olarak iletilir. Ancak, mesajların içeriği Base64 gibi çeşitli şemalar kullanılarak kodlanmış ikili veriler (örneğin, resimler veya videolar) içerebilir.

// Son Durum: HTTP, performans, güvenlik ve verimlilikte yeni özellikler ve iyileştirmeler sunan farklı sürümlerle (HTTP/1.0, HTTP/1.1, HTTP/2, HTTP/3) zaman içinde gelişmiştir.

// Genel olarak HTTP, World Wide Web'in omurgasını oluşturarak istemciler ve sunucular arasında bilgi alışverişini kolaylaştırır ve web içeriğinin dünya çapındaki kullanıcılara ulaştırılmasını sağlar.

// HTTP Methodları Nelerdir?
// HTTP (Hypertext Transfer Protocol) yöntemleri, istemcilerin ve sunucuların web üzerinden nasıl iletişim kuracağını tanımlayan fiiller veya eylemlerdir. İstemci tarafından yapılan isteğin türünü ve sunucunun bu isteğe yanıt olarak gerçekleştirmesi gereken eylemi belirtirler. Bazı yaygın HTTP yöntemleri şunlardır:

// GET: Sunucudan veri alır. Belirtilen bir kaynaktan veri istemek için kullanılır.

// POST: İşlenecek verileri belirtilen bir kaynağa gönderir. Genellikle işlenmek veya depolanmak üzere sunucuya veri göndermek için kullanılır.

// PUT: Mevcut bir kaynağı yeni verilerle günceller. Hedef kaynağın tüm mevcut temsillerini istek yükü ile değiştirir.

// DELETE: Belirtilen kaynağı kaldırır.

// PATCH: Bir kaynağa kısmi değişiklikler uygular. Kaynağın tamamını değiştirmek zorunda kalmadan bir kaynağa değişiklikler uygulamak için kullanılır.

// HEAD: GET'e benzer, ancak gerçek verileri değil, yalnızca yanıtın başlıklarını ister.

// OPTIONS: Hedef kaynak için iletişim seçeneklerini açıklar. Sunucu tarafından desteklenen HTTP yöntemlerini belirlemek için kullanılır.

// TRACE: İstemcinin ara sunucular tarafından hangi değişikliklerin veya eklemelerin yapıldığını (varsa) görebilmesi için alınan isteği geri yankılar.


// HTTP ile TCP'nin bağlantısı nedir?
// TCP (Transmission Control Protocol), internet protokol paketi (TCP/IP) içinde HTTP'den "*daha düşük bir seviyede" çalışan temel bir protokoldür. HTTP istemciler ve sunucular arasındaki iletişimden sorumluyken, TCP internet üzerindeki cihazlar arasında veri iletimini yönetir.

// Temel Aktarım Protokolü: TCP, veri iletimi için güvenilir, bağlantı odaklı bir aktarım katmanı sağlar. Bir cihazdan diğerine gönderilen verilerin doğru bir şekilde ve doğru sırada alınmasını sağlar. HTTP tipik olarak TCP/IP üzerinden çalışır, yani HTTP mesajları temel aktarım protokolü olarak TCP kullanılarak iletilir.

// Bağlantı Yönetimi: TCP, cihazlar arasındaki bağlantıların kurulmasını, sürdürülmesini ve sonlandırılmasını yönetir. Bir istemci HTTP kullanarak bir sunucuyla iletişim kurmak istediğinde, TCP bir bağlantı kurma, verileri güvenilir bir şekilde gönderme ve iletişim tamamlandığında bağlantıyı kesme sürecini yönetir.

// Paketleştirme: TCP, verileri segment adı verilen daha küçük birimlere ayırır ve güvenilir teslimatı sağlamak için her segmente sıra numaraları ve sağlama toplamları gibi gerekli bilgileri ekler. Bu segmentler daha sonra ağ üzerinden iletilir ve alıcı uçta TCP tarafından yeniden birleştirilir.

// Akış Kontrolü ve Tıkanıklık Kontrolü: TCP, veri iletim hızını yönetmek ve ağ tıkanıklığını önlemek için akış kontrolü ve tıkanıklık kontrolü mekanizmaları içerir. Bu mekanizmalar, verilerin verimli bir şekilde ve ağ kaynaklarını zorlamadan iletilmesini sağlamaya yardımcı olur.

// Özetle, TCP internette güvenilir veri iletimi için temel altyapıyı sağlarken, HTTP istemciler ve sunucular arasındaki iletişim için kuralları ve sözleşmeleri tanımlamak için daha yüksek bir seviyede çalışır. TCP ve HTTP, web içeriğinin ve hizmetlerinin internet üzerinden aktarılmasını sağlamak için birlikte çalışır.TCP, TCP/IP protokol yığınının "transport" katmanında çalışır ve cihazlar arasındaki iletişim için güvenilir, bağlantı odaklı bir hizmet sağlar. HTTP ise daha yüksek bir katmanda (uygulama katmanı) çalışır ve güvenilir veri iletimi için TCP'ye dayanır.

// * TCP'nin HTTP'den "daha düşük bir seviyede" çalıştığından bahsettiğimde, ağ yığını veya protokol paketi içindeki konumlarına atıfta bulunuyordum.

// "Alt düzey" terimi, TCP'nin ağ üzerinden fiziksel veri iletimine daha yakın olduğunu, HTTP'nin ise daha yüksek bir soyutlama düzeyinde çalıştığını ve istemciler ile sunucular arasındaki uygulama düzeyinde iletişime odaklandığını gösterir.

// Ağ oluşturmada protokoller, her biri belirli görevlerden sorumlu olan katmanlar halinde düzenlenir. Bu organizasyon genellikle OSI (Open Systems Interconnection) modeli veya TCP/IP modeli olarak adlandırılır.

// TCP, bu modellerde taşıma katmanının bir parçasıdır. Güvenilir veri iletimi, akış kontrolü ve hata algılama ve düzeltme gibi görevleri yerine getirir.

// HTTP ise uygulama katmanının bir parçasıdır. URL'ler, başlıklar ve içerik türleri gibi üst düzey kavramlara odaklanarak mesajların web tarayıcıları ve web sunucuları arasında nasıl biçimlendirildiğini ve iletildiğini tanımlar.

// Bu nedenle, TCP'nin HTTP'den "daha düşük bir seviyede" çalıştığı söylendiğinde, TCP'nin ağ üzerinden güvenilir bir şekilde veri iletmenin teknik ayrıntılarıyla daha fazla ilgilendiği, HTTP'nin ise web iletişiminin özellikleriyle ilgilenen daha yüksek bir seviyede çalıştığı anlamına gelir.


// OSI Modeli Nedir?
// OSI (Open Systems Interconnection) modeli, bir telekomünikasyon veya bilgi işlem sisteminin işlevlerini yedi ayrı katman halinde standartlaştıran ve farklı sistemler ve ağlar arasında birlikte çalışabilirliği kolaylaştıran kavramsal bir çerçevedir.

// 1. Application Layer
// Uygulama Katmanı, OSI modelinin en üst katmanıdır. Ağ hizmetlerini doğrudan son kullanıcılara veya uygulamalara sağlar.Bu katman üst düzey protokoller, kullanıcı arayüzleri ve uygulama düzeyindeki verilerle ilgilenir. Bu katmandaki protokollere örnek olarak HTTP (Hypertext Transfer Protocol), SMTP (Simple Mail Transfer Protocol), FTP (File Transfer Protocol) ve DNS (Domain Name System) verilebilir.

// Örnek: Bir web sitesine (örneğin www.example.com) erişmek için bir web tarayıcısı (Google Chrome gibi) kullanma örneğini ele alalım. Bu senaryoda, tarayıcı uygulamadır ve web sayfalarını istemek ve almak üzere web sunucusuyla iletişim kurmak için HTTP protokolünü kullanır. HTTP protokolü Uygulama Katmanında çalışır.

// 2. Presentation Layer
// Sunum Katmanı veri biçimlendirme, şifreleme ve şifre çözme işlemlerinden sorumludur. Uygulamalar arasında değiş tokuş edilen verilerin alıcı uygulamanın anlayabileceği bir formatta olmasını sağlar. Ayrıca veri sıkıştırma ve açma gibi görevleri de yerine getirir. Bu katmandaki protokollere örnek olarak SSL/TLS (Secure Sockets Layer/Transport Layer Security) verilebilir.

// Örnek: Güvenli bir web sitesini ziyaret ettiğinizde (HTTPS kullanarak), tarayıcınız ile web sunucusu arasında değiş tokuş edilen veriler SSL/TLS protokolleri kullanılarak şifrelenir. Sunum Katmanı, iletilen verilerin düzgün bir şekilde şifrelenmesini ve şifresinin çözülmesini sağlar.

// 3. Session Layer
// Oturum Katmanı, uygulamalar arasındaki bağlantıları kurar, yönetir ve sonlandırır. Ayrıca veri alışverişini senkronize eder ve diyalog kontrolünü yönetir. Oturum kurma, sürdürme ve sonlandırma gibi görevleri yerine getirir. Bu katmandaki protokollere örnek olarak NetBIOS (Network Basic Input/Output System) ve SSH (Secure Shell) verilebilir.

// Örnek: SSH kullanarak uzak bir sunucuda oturum açtığınızda, Oturum Katmanı bilgisayarınız ile sunucu arasındaki güvenli bağlantının kurulmasını yönetir. Ayrıca siz sunucuyla etkileşim halindeyken bu bağlantıyı korur.

// 4. Transport Layer
// Taşıma Katmanı, ana bilgisayarlar arasında güvenilir uçtan uca iletişim sağlar. Üst katmanlardan gelen verileri daha küçük paketlere bölmekten, veri akış kontrolünü yönetmekten ve hata kontrolünden sorumludur. Bu katmanda çalışan protokoller arasında TCP (İletim Kontrol Protokolü) ve UDP (Kullanıcı Datagram Protokolü) bulunur.

// Örnek: Bir e-posta gönderdiğinizde, Aktarım Katmanı e-posta mesajınızın daha küçük paketlere ayrılmasını, alıcının e-posta sunucusuna güvenilir bir şekilde iletilmesini ve doğru sırada yeniden birleştirilmesini sağlar.

// 5. Network Layer
// Ağ Katmanı, paketleri birden fazla ağ arasında yönlendirmeye odaklanır. Veri iletimi için en iyi yolu belirler, mantıksal adreslemeyi ele alır ve tıkanıklık kontrolünü yönetir. İnternet Protokolü (IP) bu katmandaki birincil protokoldür.

// Örnek: İnternette gezinirken Ağ Katmanı, veri paketlerinizin cihazınızdan hedef sunucuya en verimli yolu dikkate alarak internetteki yönlendiriciler aracılığıyla yönlendirilmesini sağlar.

// 6. Data Link Layer
// Veri Bağlantısı Katmanı, bir ağ üzerindeki iki bitişik düğüm arasında güvenilir bir bağlantı kurar ve sürdürür. Veri bağlantısı düzeyinde çerçeveleme, hata algılama ve düzeltme işlemlerini gerçekleştirir. Ethernet ve Wi-Fi bu katmanda çalışan yaygın teknolojilerdir.

// Örnek: Bir Wi-Fi ağına bağlandığınızda, Veri Bağlantı Katmanı verilerinizi paketler halinde çerçevelemekten, kablosuz ortama erişimi yönetmekten ve verilerin yerel ağ içinde hatasız olarak iletilmesini sağlamaktan sorumludur.

// 7. Physical Layer
// Fiziksel Katman, verilerin ağ ortamı üzerinden fiziksel iletimi ile ilgilenir. Kablolar, konektörler ve sinyal mekanizmaları gibi donanım özelliklerini tanımlar. Fiziksel katman teknolojilerine örnek olarak Ethernet kabloları, fiber optikler ve kablosuz radyo frekansları verilebilir.

// Örnek: Bir ağa bağlanmak için bilgisayarınıza bir Ethernet kablosu taktığınızda, Fiziksel Katman kablo üzerinden veri iletmek için gereken elektrik sinyallerini ve voltaj seviyelerini yönetir.


// ** NOT **
// localhost (127.0.0.1): localhost, genellikle 127.0.0.1 IP adresine çözümlenen bir ana bilgisayar adıdır. Bu IP adresi her zaman kendi makinenizin geri döngü arayüzünü ifade eder. localhost veya 127.0.0.1 adresine eriştiğinizde, kendi bilgisayarınıza bağlanıyorsunuz demektir.

// Yerel IP Adresi (192.168.2.48): Bu, yerel ağınız içinde bilgisayarınıza atanan IP adresidir. Her zaman kendi bilgisayarınıza atıfta bulunan localhost'un aksine, yerel IP adresiniz ağınızdaki diğer cihazların bilgisayarınızla iletişim kurmasını sağlar.

// Aradaki fark, localhost her zaman kendi bilgisayarınızı ifade ederken, yerel IP adresiniz ağınızdaki diğer cihazların bilgisayarınızla iletişim kurmasını sağlar. Her ikisi de makinenizde çalışan hizmetlere erişmek için kullanılabilir, ancak localhost'a yalnızca kendi makinenizden erişilebilirken, yerel IP adresinize ağınızdaki diğer cihazlardan erişilebilir.