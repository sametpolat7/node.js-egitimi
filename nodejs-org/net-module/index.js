// Net Module
// Node.js'de net modülü, TCP sunucuları ve istemcileri oluşturmak için bir yol sağlayan çekirdek bir modüldür. TCP (İletim Kontrol Protokolü) ağ iletişimi için yaygın olarak kullanılan bir iletişim protokolüdür. Net modülü, Node.js uygulamalarının TCP üzerinden iletişim kanalları kurmasını sağlayarak bir ağ üzerinden diğer uygulamalar veya cihazlarla veri alışverişi yapmalarına olanak tanır.

// İşte net modülü ve ana kullanımları hakkında kapsamlı bir genel bakış:

// 1. TCP Server Oluşturma:
// TCP sunucu örneklerini oluşturmak için net.createServer() yöntemi kullanılır. Bu sunucular istemcilerden gelen bağlantıları dinleyebilir.

// Bir sunucu oluşturulduktan sonra, server.listen() yöntemini kullanarak belirli bir bağlantı noktası ve adres kombinasyonunu dinleyebilirsiniz.

// İstemcilerden gelen bağlantıları ve veri akışlarını 'connection', 'data', 'close' gibi olayları dinleyerek işleyebilirsiniz.

//

// 2. TCP Client Oluşturma:
// net.connect() yöntemi, uzak sunuculara TCP istemci bağlantıları oluşturmak için kullanılır.

// Bu yöntemi kullanarak belirli bir sunucuya ve bağlantı noktasına bağlanabilirsiniz. İsteğe bağlı olarak, zaman aşımları, kodlama vb. gibi bağlantı seçeneklerini de belirtebilirsiniz.

// Bağlandıktan sonra, döndürülen "socket" nesnesini kullanarak sunucuya veri gönderebilir ve sunucudan veri alabilirsiniz.

//

// 3. Data Streams Kullanma:
// Hem sunucu hem de istemci tarafındaki socket'ler, veri gönderip almanıza olanak tanıyan stream'ler sağlar.

// Server tarafında, socket.on('data', ...) olayını kullanarak client'dan veri okuyabilirsiniz.

// Client tarafında, socket.write() yöntemini kullanarak server'a veri gönderebilirsiniz.

// Tabi bu işlemlerin tersi de mümkündür! Çünkü çift-yönlü iletişim (bidirectional communication) bunu gerektirir. Dolayısıyla, ister bir sunucu ister bir istemci oluşturuyor olun, kurulan bağlantı üzerinden hem veri gönderme hem de alma olanağına sahip olursunuz. Bu çift yönlü iletişim, birçok ağa bağlı uygulama için temeldir ve istemciler ile sunucular arasında etkileşimli ve gerçek zamanlı etkileşimlere olanak tanır.

// Veriler, nasıl kodladığınıza ve kodlarını nasıl çözdüğünüze bağlı olarak string, buffer veya JSON nesneleri gibi çeşitli biçimlerde olabilir.

//

// 4. Hata İşleme ve Olay Yönetimi:
// Net modülü, hata işleme ve bağlantıları yönetmek için çeşitli olaylar ve yöntemler sağlar.

// Yaygın olaylar arasında 'error', 'close', 'end' vb. bulunur ve bunlar bağlantı hataları, bağlantı kopmaları vb. gibi farklı senaryoları ele almanıza olanak tanır.

// Hata işleme, özellikle bağlantı zaman aşımları, ağ arızaları veya protokol hataları gibi sorunların ortaya çıkabileceği ağa bağlı uygulamalarda çok önemlidir.

//

// 5. Ölçeklenebilirlik ve Performans:
// Node.js ölçeklenebilir ağ uygulamaları oluşturmak için çok uygundur ve net modülü bunu başarmada önemli bir rol oynar.

// Bloklanmayan I/O modeli ve olay odaklı mimarisi sayesinde Node.js çok sayıda eş zamanlı bağlantıyı verimli bir şekilde idare edebilir.

// Bu da onu sohbet sunucuları, çok oyunculu oyunlar, IoT cihazları vb. gibi gerçek zamanlı uygulamalar oluşturmak için uygun hale getirir.

//

// 6. Özel Protokoller ve Uygulamalar:
// Net modülü, özel protokoller ve ağa bağlı uygulamalar oluşturmak için bir temel sağlar.

// Geliştiriciler, bu modül tarafından sağlanan düşük seviyeli TCP socket'lerini kullanarak TCP'nin üzerine kendi uygulama seviyesi protokollerini uygulayabilirler.

// Bu, belirli kullanım durumlarına göre uyarlanmış iletişim modellerinin ve mesaj formatlarının tasarlanmasında esneklik sağlar.

const net = require('node:net');

const server = net.createServer((socket) => {
  console.log('A client connected!');

  socket.on('data', (data) => {
    console.log(`Received: ${data}`);

    socket.write(`Echo: ${data}`);
  });
  socket.on('end', () => {
    console.log('A client disconnected!');
  });
});

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server listen on http://${hostname}:${port}`);
});

// Kodu bu şekilde çalıştırdığınız da hata alacaksınız! Çünkü;

// Bu durumda, uyguladığınız sunucu bir HTTP sunucusu değil, bir TCP sunucusudur. Bu nedenle, tarayıcınızda 127.0.0.1:3000 adresine erişmeye çalıştığınızda, tarayıcı server'a bir HTTP request'i gönderir ve HTTP response'u bekler. Ancak, server'ınız HTTP request'lerini işlemek için tasarlanmamıştır, bu nedenle geçerli bir HTTP response'u oluşturamaz.

// Tarayıcınızda 127.0.0.1:3000 adresine erişmek yerine, server'a bağlanmak için bir "TCP Client" kullanmalısınız. Bu şekilde, bir TCP bağlantısı kurabilir ve sunucuyla amaçlandığı gibi etkileşimde bulunabilirsiniz.

const client = new net.Socket();

client.connect(port, hostname, () => {
  console.log('Connected to server!');

  client.write('Hello, server! Im Client-1!');
});

client.on('data', (data) => {
  console.log(`Received data from server: ${data}`);
});

client.on('close', () => {
  console.log('Connection closed!');
});

client.on('error', (err) => {
  console.error(err);
});

//

// Peki HTTP modülü ile zaten sunucu oluşturabiliyorduk. Neden net modülü ile TCP sunucusuna ihtiyacımız olsun ki?

// HTTP Modülü: http modülü özellikle HTTP isteklerini ve yanıtlarını işlemek için tasarlanmıştır. TCP soketleri üzerinde daha üst düzey bir soyutlama sağlayarak HTTP yöntemleri, başlıkları ve HTTP'ye özgü diğer özelliklerle çalışmayı kolaylaştırır. Http modülünü kullanarak bir HTTP sunucusu oluşturduğunuzda, HTTP isteklerini dinleyen ve HTTP yanıtlarıyla yanıt veren bir sunucu oluşturmuş olursunuz. Bu modül, web sunucuları oluşturmak ve web trafiğini yönetmek için idealdir.

// Net Modülü: Diğer yandan net modülü, ham TCP soketleriyle çalışmak için daha düşük seviyeli bir API sağlar. HTTP ile sınırlı olmayan genel amaçlı ağ iletişimi için sunucular ve istemciler oluşturmanıza olanak tanır. HTTP sunucuları ve istemcileri oluşturmak için net modülünü kullanabilseniz de, HTTP istek ayrıştırma ve yanıt biçimlendirme işlemlerini manuel olarak yapmanız gerekir; bu da http modülünü kullanmaya kıyasla daha karmaşık olabilir. net modülü, özel ağ protokolleri oluşturmak veya HTTP dışı ağ iletişimini idare etmek için uygundur.

// Özetle, HTTP trafiğini işleyen bir web sunucusu oluşturuyorsanız, http modülü üst düzey soyutlamaları ve HTTP için yerleşik desteği nedeniyle genellikle tercih edilen seçimdir. Ancak, ham TCP soketleriyle çalışmanız veya özel ağ protokolleri oluşturmanız gerekiyorsa, net modülü daha düşük bir soyutlama düzeyinde gerekli işlevselliği sağlar.

// HTTP'de iletişim genellikle tek yönlüdür: istemci sunucuya bir istek gönderir ve sunucu bu isteğe yanıt verir. Bu bir istek-yanıt protokolüdür. Bu model, istemcilerin sunuculardan kaynak talep ettiği birçok web uygulaması için iyi çalışır.

// TCP (Transmission Control Protocol) ise çift yönlü iletişim sağlar. Hem istemci hem de sunucu kurulan bağlantı üzerinden birbirlerine veri gönderebilir. Bu çift yönlü yapı, istemci ve sunucu arasında daha etkileşimli ve gerçek zamanlı iletişime olanak tanır. Özellikle sohbet uygulamaları, çevrimiçi oyunlar, akış hizmetleri ve daha fazlası gibi sürekli veri alışverişinin veya gerçek zamanlı güncellemelerin gerekli olduğu uygulamalar için kullanışlıdır.

// Bu iletişim modelleri arasındaki farkı anlamak, istemciler ve sunucular arasında veri alışverişinin nasıl yapıldığını doğrudan etkilediği için ağa bağlı uygulamaları tasarlarken ve uygularken çok önemlidir.

//

// Şimdi neden TCP sunucusunun mantığının event-driven(olay-odaklı) üstüne kurulu olduğunu anladınız mı?

// Eventler, TCP ile ağ iletişimi gibi eşzamansız veya olay güdümlü programlamanın gerekli olduğu ortamlarda yaygın olarak kullanılır. TCP tabanlı iletişimde Eventler çok önemli bir rol oynar çünkü veri gelişi, bağlantı kurulması, bağlantının kesilmesi ve hatalar gibi olayların zamanlaması tahmin edilemez olabilir. Bu olayları dinleyerek, uygulamalar uygun şekilde tepki verebilir, verileri geldikçe işleyebilir, bağlantıları yönetebilir ve hatalarla zarif bir şekilde başa çıkabilir.

// HTTP ise tipik olarak eşzamanlı bir yapıya sahiptir ve istek-yanıt modelini takip eder. İstek-yanıt döngüsü net bir iletişim akışı sağladığı için TCP'nin yaptığı gibi olaylara dayanmaz. Bununla birlikte, HTTP tabanlı uygulamalarda bile, sunucu olaylarını (örneğin, sunucu başlatma veya kapatma) ele almak veya çift yönlü iletişimi destekleyen ve dolayısıyla event'lara büyük ölçüde dayanan WebSocket bağlantılarını uygulamak gibi belirli senaryolarda Events kullanılabilir.

//

// Peki ne bu socket nesnesi?
// Node.js'deki bir soket, bir ağ üzerinden bir istemci ve sunucu arasında çift yönlü veri akışına izin veren bir iletişim uç noktasıdır.

// Ağ bağlamında bir uç nokta, bir ağ içinde iletişimin başlayabileceği veya sona erebileceği, genellikle bir IP adresi ve bağlantı noktası(port) numarası kombinasyonu ile tanımlanan benzersiz bir adres veya konum anlamına gelir. Node.js'deki soketler söz konusu olduğunda, bir uç nokta, istemci ve sunucu uygulamaları arasında verilerin gönderilebileceği veya alınabileceği bağlantı noktasını temsil eder.

// Tipik bir istemci-sunucu iletişim senaryosunda, en az iki soket vardır: biri istemci tarafında ve diğeri sunucu tarafında. Bu soketler, istemci ve sunucu arasındaki çift yönlü iletişim için uç noktaları oluşturur. Her bir soket, istemci ve sunucu uygulamaları arasında veri alışverişini sağlayan benzersiz bir IP adresi ve port numarası kombinasyonuyla ilişkilendirilir.

// Tipik bir client-server mimarisinde:

// Gelen bağlantıları dinleyen server soketi sabit kalır ve belirli bir bağlantı noktasına (örneğin, 8080 bağlantı noktası) bağlıdır.

// Bir client server'a bağlandığında, server tarafında söz konusu client ile iletişimi yönetmek için yeni bir soket oluşturulur.

// Her client bağlantısı server tarafında kendi soketi tarafından yönetilir ve server'ın aynı anda birden fazla istemci bağlantısını idare etmesine olanak tanır.

// Bu kurulum, sunucunun birden fazla istemci bağlantısı arasında ayrım yapmasını ve her bir istemciyle iletişimi bağımsız olarak yönetmesini sağlar.

//

// Node.js'de, net.createServer() kullanarak bir sunucu oluşturduğunuzda, bir istemci sunucuya her bağlandığında createServer() işlevine aktardığınız geri arama işlevi çağrılır. Bu geri arama işlevinin içinde, istemci bağlantısını temsil eden bir soket nesnesi alırsınız.

// Bu geri çağırma işlevi içindeki soket nesnesine olay dinleyicileri eklediğinizde, bu dinleyiciler soket nesnesi tarafından temsil edilen belirli istemci bağlantısıyla ilişkilendirilir. Bu, eklediğiniz dinleyicilerin yalnızca söz konusu istemci bağlantısı tarafından yayılan olaylara yanıt vereceği anlamına gelir.

// Örneğin, sunucunun bağlantı geri arama işlevinin içine bir socket.on('data', ...) dinleyicisi eklediğinizde, bu dinleyici söz konusu soket nesnesiyle ilişkili istemci tarafından yayılan veri olaylarını dinler. Benzer şekilde, bir istemci bağlantısı geri arama işlevi içindeki soket nesnesine olay dinleyicileri eklerseniz (örneğin, net.connect() kullanarak bir istemci oluşturduğunuzda), bu dinleyiciler istemcinin bağlantısıyla ilişkilendirilir ve sunucu tarafından yayılan olaylara yanıt verir.

// Özetle, Node.js olay dinleyicilerini nereye eklediğinize bağlı olarak farklı soketler (istemci veya sunucu) arasında ayrım yapar. Dinleyicileri sunucunun bağlantı geri çağırma işlevinin içine eklerseniz, bunlar istemci bağlantılarıyla ilişkilendirilir. Dinleyicileri istemci bağlantısı geri arama işlevinin içine eklerseniz, bunlar sunucunun yanıtlarıyla ilişkilendirilir.
