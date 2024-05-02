// Run Node.js scripts from the command line

// Bir Node.js programını çalıştırmanın olağan yolu, global olarak kullanılabilen node komutunu çalıştırmak (Node.js'yi yükledikten sonra) ve çalıştırmak istediğiniz dosyanın adını iletmektir.

// Ana Node.js uygulama dosyanız app.js ise, bunu yazarak çağırabilirsiniz:
// node app.js

// Yukarıda, kabuğa betiğinizi node ile çalıştırmasını açıkça söylüyorsunuz. Bu bilgiyi JavaScript dosyanızın içine bir "shebang" satırı ile de yerleştirebilirsiniz. "shebang" dosyadaki ilk satırdır ve işletim sistemine betiği çalıştırmak için hangi yorumlayıcıyı kullanacağını söyler. Aşağıda JavaScript'in ilk satırı yer almaktadır:

// #!/user/bin/env/node

// 1. Pass string as argument to node instead of file path
// Bir dizeyi argüman olarak çalıştırmak için -e, --eval "script" kullanabilirsiniz. Aşağıdaki argümanı JavaScript olarak değerlendirin. REPL'de önceden tanımlanmış olan modüller de betikte kullanılabilir.

// Windows'ta cmd.exe kullanıldığında tek bir tırnak işareti doğru çalışmayacaktır çünkü tırnak işareti için yalnızca çift " tanır. Powershell veya Git bash'te hem ' hem de " kullanılabilir.

// node -e "console.log('Hello World!')

// 2. Restart the application automatically
// Nodejs V16'dan itibaren, bir dosya değiştiğinde uygulamayı otomatik olarak yeniden başlatmak için yerleşik bir seçenek vardır. Bu, geliştirme amaçları için kullanışlıdır. Bu özelliği kullanmak için nodejs'e `--watch' bayrağını geçirmeniz gerekir.

// node --watch

// 3. How to read environment variables from Node.js
// Node.js'de process.env kullanıcı ortamını temsil eden bir nesnedir. Node.js sürecinin çalıştığı ortamın bir parçası olan anahtar-değer çiftleri olan environment variables'a erişim sağlar.

// Environment variables, bir uygulamanın özelliklerini yapılandırmak veya API anahtarları veya veritabanı kimlik bilgileri gibi hassas bilgileri uygulama koduna sabit kodlamadan sağlamak için kullanışlıdır. Bunun yerine, doğrudan sistem ortamında veya yapılandırma dosyaları aracılığıyla harici olarak ayarlanabilir ve process.env kullanılarak Node.js uygulaması içinden erişilebilir.

// environment variablesne nokta gösterimini (process.env.VARIABLE_NAME) veya ayraç gösterimini (process.env['VARIABLE_NAME']) kullanarak erişebilirsiniz. Ancak, environment variables'ın her zaman "dizeler" olduğunu unutmamak önemlidir, bu nedenle gerekirse bunları uygun türe dönüştürmeniz gerekebilir.

// Environment variables çeşitli şekillerde ayarlanabilir:

// 1. Node.js uygulamasını çalıştırmadan önce doğrudan terminalde veya komut isteminde:
// Windows için: set PORT=3000 ve sonra çalıştırmak için node index.js
// Unix Sistemler için: PORT=3000 node index.js

// Bu yöntem, özellikle test veya hızlı kurulumlar için basit ve kullanışlıdır. Ancak, bu ortam değişkenlerinin yalnızca komut isteminin geçerli oturumu için ayarlandığını unutmayın. Komut istemini kapatırsanız, bunları yeniden ayarlamanız gerekecektir. Daha kalıcı çözümler için, sistem ayarlarında ortam değişkenlerini ayarlamak gibi yöntemleri kullanmayı veya projenizde bunları yönetmek için dotenv gibi bir paket kullanmayı düşünün.

// 2. Anahtar-değer çiftleri içeren bir .env dosyası ve dotenv package:
// Bu, ortam değişkenlerini bir .env dosyasından process.env dosyasına yüklemenizi sağlayan popüler bir npm paketidir. Node.js uygulamalarında, özellikle geliştirme ortamlarında yapılandırmayı yönetmeyi basitleştirir.

// Eğer dotenv kullanmak istemiyorsan;
// const fs = require('node:fs/promises');
// const path = require('node:path');

// const environmentVariables = async () => {
//   try {
//     const envPath = path.resolve(__dirname, '.env');
//     const readEnv = await fs.readFile(envPath, 'utf-8');
//     const lines = readEnv.split('\n');

//     lines.forEach((pair) => {
//       const [key, value] = pair.split('=');
//       process.env[key.trim()] = value.trim();
//       console.log('process.env updated!');
//     });
//     console.log(process.env);
//   } catch (err) {
//     throw Error(err);
//   }
// };

// environmentVariables();

// 3. (Node.js Alert! Stability: 1.1 - Active development), --env-file=config flag
// Ortam değişkenlerini geçerli dizine göre bir dosyadan yükler ve process.env üzerindeki uygulamalar için kullanılabilir hale getirir. NODE_OPTIONS gibi Node.js'yi yapılandıran ortam değişkenleri ayrıştırılır ve uygulanır. Ortamda ve dosyada aynı değişken tanımlanmışsa, ortamdaki değer önceliklidir.

// Birden fazla --env-file argümanı geçebilirsiniz. Sonraki dosyalar, önceki dosyalarda tanımlanan önceden var olan değişkenleri geçersiz kılar.

// REPL (Read Evaluate Print Loop)
// Node.js'de REPL, Oku-Değerlendir-Yazdır Döngüsü anlamına gelir. JavaScript kodunu girmenize, çalıştırmanıza ve sonuçları hemen görmenize olanak tanıyan etkileşimli bir programlama ortamıdır.

// Node.js'yi komut satırından herhangi bir argüman olmadan çalıştırdığınızda, varsayılan olarak REPL modunu başlatır. Bunu, ayrı bir komut dosyası oluşturmanıza gerek kalmadan JavaScript kodunu hızlı bir şekilde test edebileceğiniz, işlevleri deneyebileceğiniz ve API'leri keşfedebileceğiniz etkileşimli bir oyun alanı olarak düşünebilirsiniz.

// REPL, sözdizimi vurgulama, sekme tamamlama ve yukarı ve aşağı ok tuşlarını kullanarak daha önce girilen komutlara erişme gibi özellikler sağlar. Hata ayıklama, prototip oluşturma ve JavaScript öğrenme için kullanışlı bir araçtır.

// Node komutunu yürütülecek herhangi bir komut dosyası veya herhangi bir argüman olmadan çalıştırırsak, bir REPL oturumu başlatırız: node

// console.log("test")
// test
// undefined

// İlk değer olan test, konsola yazdırmasını söylediğimiz çıktıdır, ardından console.log() çalıştırmanın dönüş değeri olan undefined değerini alırız. Node bu kod satırını okudu, değerlendirdi, sonucu yazdırdı ve ardından daha fazla kod satırı beklemeye geri döndü. Node, oturumdan çıkana kadar REPL'de yürüttüğümüz her kod parçası için bu üç adımda döngüye girecektir. REPL'in adını aldığı yer burasıdır.

// 5 === '5'
// false

// Yukarıdaki iki satırın çıktılarındaki farka dikkat edin. Node REPL, console.log() çalıştırıldıktan sonra tanımlanmamış yazdırırken, diğer yandan sadece 5 === '5' sonucunu yazdırdı. İlkinin JavaScript'te sadece bir "deyim (statement)" olduğunu ve ikincisinin bir "ifade(expression)" olduğunu aklınızda bulundurmanız gerekir.

// Bazı durumlarda, test etmek istediğiniz kodun birden fazla satıra ihtiyacı olabilir. Örneğin, rastgele sayı üreten bir işlev tanımlamak istediğinizi varsayalım, REPL oturumunda aşağıdaki satırı yazın ve enter tuşuna basın:

// function generateNumber() {

// Dot commands
// REPL'in hepsi nokta ile başlayan bazı özel komutları vardır.

// .help: nokta komutlarını gösterir help
// .editor: çok satırlı JavaScript kodunu kolaylıkla yazmak için editör modunu etkinleştirir. Bu moda geçtiğinizde, yazdığınız kodu çalıştırmak için ctrl-D girin.
// .break: çok satırlı bir ifade girerken, .break komutunu girmek daha fazla girişi iptal edecektir. ctrl-C tuşuna basmakla aynıdır.
// .clear: REPL bağlamını boş bir nesneye sıfırlar ve girilmekte olan tüm çok satırlı ifadeleri temizler.
// .load: geçerli çalışma dizinine göre bir JavaScript dosyası yükler
// .save: REPL oturumunda girdiğiniz her şeyi bir dosyaya kaydeder (dosya adını belirtin)
// .exit: repl'den çıkar (ctrl-C'ye iki kez basmakla aynı)

// Output to the command line using Node.js
// Node.js, komut satırıyla etkileşim kurmak için tonlarca çok kullanışlı yol sağlayan bir console modülü sağlar. Temel olarak tarayıcıda bulduğunuz console nesnesi ile aynıdır. En temel ve en çok kullanılan yöntem, kendisine ilettiğiniz dizeyi konsola yazdıran console.log() yöntemidir.

// Not : Bir nesne iletirseniz, onu bir dize olarak işler.

// Aynı zamanda string substitution kullanarak log mesajlarımıza değişkenler ekleyebiliriz. String substitution, JavaScript gibi dillerde değişkenleri veya ifadeleri bir dizeye eklemek için kullanılan bir yöntemdir.

// JavaScript'te, bir mesaj dizesine dinamik olarak değişken değerler eklemek için genellikle console.log() yöntemiyle birlikte string substitution kullanılır. Bu, mesaj dizesi içinde %s, %d, %f, %o veya %j gibi biçim belirteçlerinin kullanılmasını ve ilgili değişkenlerin veya ifadelerin console.log() yöntemine argüman olarak aktarılmasını içerir.

// %s: Bir string değeri için yer tutucu.
// %d veya %i: Bir integer değeri için yer tutucu.
// %f: Kayan noktalı sayı (float) değeri için yer tutucu.
// %o: Bir nesne için yer tutucu.
// %j: JSON biçimli bir nesne için yer tutucu.

console.log(
  'Hello! My name is %s. Im %d years old. My cars are %o',
  'Samet',
  26,
  { suv: 'Coriuer', supersport: 'Black Eagle' }
);

// console.count()
// console.count(), JavaScript'te belirli bir etiketle kaç kez çağrıldığını saymak için kullanılan bir yöntemdir. Kodunuzdaki belirli olayların veya koşulların gerçekleşme sayısını izlemek için yararlı olabilir.

// console.count() işlevi belirli bir "etiketle" her çağrıldığında, bu etiketle ilişkili sayacı artırır. Etiket sağlanmamışsa, varsayılan etiketle ilişkili sayacı artırır. Her etiket için geçerli sayım, etiketle birlikte konsola yazdırılır.
console.count('A');
console.count('B');
console.count('A');
console.count('A');
console.count(); // Uses default label
console.count('B');
console.count('C');
console.count('A');

// veya

let x = 5;
let y = 10;

console.count(x);
console.count(x);
console.count(x);
console.count(y);

// console.countReset()
console.count('A');
console.count('B');
console.count('A');
console.count('A');
console.countReset('A');
console.count('A');

// console.trace()
// Node.js'de console.trace(), konsola bir yığın izi çıktısı veren bir yöntemdir. Yığın izi, programın yürütülmesinde geçerli noktaya yol açan işlev çağrıları dizisi hakkında bilgi içerir.

// console.trace() işlevini çağırdığınızda, Node.js konsola bir yığın izi yazdırır ve işlev çağrılarını en son işlev çağrısı en üstte olacak şekilde ters kronolojik sırada gösterir. Bu, her işlevin çağrıldığı dosya adları ve satır numaraları da dahil olmak üzere kod yürütmedeki mevcut noktaya giden yolu görmenize olanak tanıdığından hata ayıklama amacıyla yararlı olabilir.

function foo() {
  console.trace('Trace from foo()');
}

function bar() {
  foo();
}

function baz() {
  bar();
}

baz();

// console.time() and console.timeEnd()
// time() ve timeEnd() fonksiyonlarını kullanarak bir fonksiyonun ne kadar sürede çalıştığını kolayca hesaplayabilirsiniz.  Aynı zamanlayıcı için console.time() ve console.timeEnd() işlevlerine ilettiğiniz etiket eşleşmelidir.

const myfunction = () => {
  return Math.random();
};

const timerFunction = () => {
  console.time('myFunction(): ');
  myfunction();
  console.timeEnd('myFunction(): ');
};

timerFunction();

// stdout and stderr
// stdout (Standart Çıktı): Bu, bir programın normal çıktısını yazdığı standart çıktı akışıdır. Genellikle sonuçları, mesajları veya verileri konsola yazdırmak gibi normal program çıktısı için kullanılır. Node.js'de console.log() veya process.stdout.write() kullanarak stdout'a yazabilirsiniz.

// stderr (Standart Hata): Bu, bir programın hata mesajlarını veya tanılamalarını yazdığı standart hata akışıdır. Hata mesajlarını, uyarıları veya programın yürütülmesi sırasında beklenmedik veya hatalı bir şey olduğunu gösteren diğer bilgileri yazdırmak için kullanılır. Node.js'de console.error() veya process.stderr.write() kullanarak stderr'a yazabilirsiniz.

console.log('This is stdout message!');
console.error('This is stderr message!');

// Accept input from the command line in Node.js

// Node.js, sürüm 7'den beri tam olarak bunu gerçekleştirmek için readline modülünü sağlar: bir Node.js programının yürütülmesi sırasında terminal girişi olan process.stdin akışı gibi okunabilir bir akıştan her seferinde bir satır olmak üzere girdi almak.
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name?', (name) => {
  console.log('Welcome', name + '!');
  rl.close();
});

// Bu kod parçası kullanıcının adını sorar ve metin girildikten ve kullanıcı enter tuşuna bastıktan sonra bir selamlama mesajı göndeririz. question() yöntemi ilk parametreyi (bir soru) gösterir ve kullanıcı girişini bekler. Enter tuşuna basıldığında geri arama fonksiyonunu çağırır. Bu geri arama fonksiyonunda, readline arayüzünü kapatırız (rl.close()).
