// Bu kurulumu test etmek için iki terminal penceresi açın. Bir terminalde server.js dosyasını çalıştırın:

const net = require('node:net');

const server = net.createServer((socket) => {
  console.log('New connection available!');

  socket.on('data', (data) => {
    console.log('Received data from client: ', data.toString());
    socket.write('Echo: ' + data);
  });

  socket.on('end', () => {
    console.log('Connection ended!');
  });

  socket.on('error', (err) => {
    console.error(err);
  });
});

const port = 3000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () => {
  console.log('Server listening on localhost:3000');
});

// Basit bir TCP sunucusu oluşturduk. Ve bu sunucuyu farklı bir pencereden çalıştırırsak, clien'ı dinleyip geri veriler gönderebiliriz. Ancak dikkat edilmesi gerek ufak anekdotlar var:

// 1. Veriler bir TCP soketi üzerinden gönderildiğinde, "byte stream" olarak gönderilir. Node.js'de, net modülünü kullanarak server tarafında veri aldığınızda, varsayılan olarak bir Buffer nesnesi olarak alınır.

// Bir Buffer nesnesi, ham ikili verileri depolayabilen sabit boyutlu bir bellek yığınını temsil eder. Bu, Node.js'nin TCP gibi ağ protokolleriyle çalışırken yaygın olan ikili verileri verimli bir şekilde işlemesini sağlar.

// Alınan Buffer nesnesini tekrar bir stringe dönüştürmek istiyorsanız toString() yöntemini kullanabilirsiniz. Örneğin, server kodunuzda, alınan verileri bir dizeye dönüştürmek için socket.on('data', ...) olay işleyicisini değiştirebilirsiniz.

//

// 2. Node.js'de bir string'den buffer oluşturduğunuzda, ortaya çıkan buffer'ın orijinal stringin uzunluğundan daha fazla bayta sahip olduğunu fark edebilirsiniz. Bunun nedeni stringlerin ve bufferların kodlanma biçimidir.

// Node.js'de, varsayılan olarak, stringler değişken uzunluklu bir kodlama şeması olan UTF-8 kullanılarak kodlanır. Bu, karakterlerin Unicode kod noktalarına bağlı olarak farklı sayıda bayt alabileceği anlamına gelir.

// Bir stringi buffer'a dönüştürdüğünüzde, stringdeki her karakter UTF-8 kodlamasında birden fazla baytla temsil edilebilir. Ek olarak, Node.js'deki bufferlar defter tutma amacıyla bazı ek yükler içerir ve bu da ek baytları açıklayabilir.

// Örneğin, 10 karakterli bir string düşünelim. Bir buffer'a dönüştürüldüğünde, bazı karakterlerin UTF-8'de gösterilmesi için birden fazla bayt gerekiyorsa, buffer 10 bayttan daha büyük olacaktır. Ek olarak, bazı dahili buffer meta veri ek yükleri olabilir.

//

// 3. ECONNRESET hatası: "Bağlantı eş tarafından sıfırlandı" anlamına gelir. Bu hata, TCP bağlantısının diğer ucu (bu durumda server) bağlantıyı TCP protokolü aracılığıyla "düzgün bir şekilde kapatmadan aniden kapattığında" ortaya çıkar.

// Server aniden bağlantıyı kestiğinde, client beklenmedik bir iletim sonu alır ve bu da ECONNRESET hatasını tetikler. Bu hata TCP iletişiminde, özellikle server uygulamasının beklenmedik bir şekilde sonlandığı, ağ bağlantısının kesildiği veya server tarafı kodunda sorunlar olduğu senaryolarda oldukça yaygındır.

// Server tarafı terminalinde Ctrl + C tuşlarına bastığınızda, server istemci sürecine sonlandırması için bir sinyal gönderir. Bu sinyal işlemi kesintiye uğratır ve TCP bağlantısını "zarif bir şekilde kapatmadan hemen çıkmasına" neden olur.

// TCP bağlantısını server tarafından düzgün bir şekilde kapatmak için, server kodunuzda SIGINT (CTRL + C ile sinyalin kesilmesi) ve SIGTERM (Kill the terminal sinyali) olaylarını işlemeli ve işlemden çıkmadan önce soketi açıkça kapatmalısınız. Server kodunuzu bunu işleyecek şekilde nasıl değiştirebileceğiniz aşağıda açıklanmıştır:

const handleShutdown = () => {
  console.log('Server closing...');
  server.close(() => {
    console.log('Server closed!');
  });
};

process.on('SIGINT', handleShutdown); // Ctrl+C
process.on('SIGTERM', handleShutdown); // Kill
