// Diğer terminalde client.js dosyasını çalıştırın:

const net = require('node:net');

const client = new net.Socket();

const port = 3000;
const hostname = '127.0.0.1';

client.connect(port, hostname, () => {
  console.log('Client connected to localhost:3000');
});

process.stdin.on('data', (data) => {
  client.write(data);
});

client.on('data', (data) => {
  console.log('Received data from server: ' + data.toString());
});

client.on('error', (err) => {
  console.error(err);
});

// Basit bir TCP istemcisi oluşturduk. Ve bu istemciyi farklı bir pencereden çalıştırırsak, server'a mesajlar gönderebiliriz. Ancak dikkat edilmesi gerek ufak anekdotlar var:

// 1. ECONNRESET hatası: "Bağlantı eş tarafından sıfırlandı" anlamına gelir. Bu hata, TCP bağlantısının diğer ucu (bu durumda istemci) bağlantıyı TCP protokolü aracılığıyla "düzgün bir şekilde kapatmadan aniden kapattığında" ortaya çıkar.

// İstemci aniden bağlantıyı kestiğinde, sunucu beklenmedik bir iletim sonu alır ve bu da ECONNRESET hatasını tetikler. Bu hata TCP iletişiminde, özellikle istemci uygulamasının beklenmedik bir şekilde sonlandığı, ağ bağlantısının kesildiği veya istemci tarafı kodunda sorunlar olduğu senaryolarda oldukça yaygındır.

// İstemci tarafı terminalinde Ctrl + C tuşlarına bastığınızda, istemci sürecine sonlandırması için bir sinyal gönderir. Bu sinyal işlemi kesintiye uğratır ve TCP bağlantısını "zarif bir şekilde kapatmadan hemen çıkmasına" neden olur.

// TCP bağlantısını istemci tarafından düzgün bir şekilde kapatmak için, istemci kodunuzda SIGINT (CTRL + C ile sinyalin kesilmesi) ve SIGTERM (Kill the terminal sinyali) olaylarını işlemeli ve işlemden çıkmadan önce soketi açıkça kapatmalısınız. İstemci kodunuzu bunu işleyecek şekilde nasıl değiştirebileceğiniz aşağıda açıklanmıştır:

const handleShutdown = () => {
  console.log('Client disconnecting...');
  client.end(() => {
    console.log('Client disconnected.');
  });
};

process.on('SIGINT', handleShutdown); // Ctrl+C
process.on('SIGTERM', handleShutdown); // Kill
