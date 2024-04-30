// Manipulating Files

// Node.js'de fs modülü "dosya sistemi" anlamına gelir. Dosya sistemiyle çalışmak için işlevler sağlayarak dosyalardan okuma ve dosyalara yazma, dosya ve dizin oluşturma ve silme ve dosya izinlerini değiştirme gibi görevleri gerçekleştirmenize olanak tanır. Node.js'de, fs modülünü kullanarak dosyaları manipüle edebilirsiniz. Bu modül, standart POSIX işlevlerine benzer bir şekilde dosya sistemiyle etkileşim için işlevler sağlar.

// Her dosya, Node.js kullanarak inceleyebileceğimiz bir dizi ayrıntıyla birlikte gelir. Özellikle, fs modülü tarafından sağlanan stat() yöntemini kullanarak:

// fs.stat():
// Node.js'deki fs.stat() fonksiyonu bir dosya veya dizin hakkında bilgi almak için kullanılır. Dosya veya dizin hakkında boyut, izinler, zaman damgaları ve diğer meta veriler gibi bilgileri içeren fs.Stats sınıfının bir örneğini döndürür.

const fs = require("node:fs");

fs.stat("../../../../../example.txt", (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Async Operations", stats);
});

// Node.js ayrıca dosya istatistikleri hazır olana kadar iş parçacığını bloke eden bir senkronizasyon yöntemi de sağlar:
try {
  const stats = fs.statSync("../../../../../example.txt");
  console.log("Sync Operations", stats);
} catch (err) {
  console.error(err);
}

// Dosya bilgileri stats değişkenine dahil edilmiştir. İstatistikleri kullanarak ne tür bilgiler elde edebiliriz? İşte bunlardan bir kaçı:

// stats.isFile() ve stats.isDirectory() işlevlerini kullanarak dosyanın bir dizin mi yoksa bir dosya mı olduğunu
// stats.isSymbolicLink() işlevini kullanarak dosyanın sembolik bir bağlantı olup olmadığını
// stats.size kullanarak bayt cinsinden dosya boyutu.

// İsterseniz fs/promises modülü tarafından sunulan vaat tabanlı fsPromises.stat() yöntemini de kullanabilirsiniz:
const promiseFs = require("node:fs/promises");

async function FileInfo() {
  try {
    const file = await promiseFs.stat("../../../../../example.txt");
    console.log("Promise-based Operation", file);
    console.log(`Q: Is this file? A: ${file.isFile()}`);
    console.log(`Q: Is this directory? A: ${file.isDirectory()}`);
    console.log(`Q: How many bytes is this file? A: ${file.size} byte`);
  } catch (err) {
    console.log(err);
  }
}
FileInfo();

// Node.js File Paths
// Node.js'de path modülü, dosya ve dizin yolları ile çalışmak için yardımcı programlar sağlayan yerleşik bir modüldür. Özellikle yolların birleştirilmesi ve çözümlenmesi, yolların belirli kısımlarının çıkarılması ve dosya uzantılarının değiştirilmesi gibi görevler için kullanışlıdır. Path modülü tarafından sağlanan bazı yaygın işlevler aşağıda verilmiştir.

// Sistemdeki her dosyanın bir yolu vardır. Linux ve macOS'ta bir yol şöyle görünebilir: /users/joe/file.txt şeklindeyken, Windows bilgisayarlar farklıdır ve aşağıdaki gibi bir yapıya sahiptir: C:\users\joe\file.txt

// Bu farkın dikkate alınması gerektiğinden, uygulamalarınızda yolları kullanırken dikkat etmeniz gerekir.
const path = require("node:path");

// Bir yol verildiğinde, bu yöntemleri kullanarak o yoldan bilgi çıkarabilirsiniz:

const filePath = "user/demo/deneme.txt";

const dirname = path.dirname(filePath);
const basename = path.basename(filePath);
const extname = path.extname(filePath);

console.log("dirname: ", dirname); // user/demo
console.log("basename: ", basename); // deneme.txt
console.log("extname: ", extname); // txt

// dirname: bir dosyanın üst klasörünü alır
// basename: dosya adı kısmını alır
// extname: dosya uzantısını alır

// basename'e ikinci bir bağımsız değişken belirterek dosya adını uzantısı olmadan alabilirsiniz:
const basenameWithoutExt = path.basename(filePath, extname);
console.log("Basename without extension: ", basenameWithoutExt);

// path.join() işlevini kullanarak bir yolun iki veya daha fazla parçasını birleştirebilirsiniz:
const domain = "localhost:3000/";
const targetPath = "products";

const url = path.join("/", domain, targetPath);
console.log("url:", url);

// Göreceli bir yolun mutlak yol hesaplamasını path.resolve() kullanarak elde edebilirsiniz:

// Current Path: C:\Users\samet_000\Desktop\Çalışmalarım\Kurslarım\nodejs-egitimi\nodejs-org\04-manipulating-files

const resolve = path.resolve("deneme\\demo.js");
console.log("resolve: ", resolve);

const resolve1 = path.resolve("..", "try", "try.js");
console.log(resolve1);

const resolve2 = path.resolve("C:/", "Program Files", "DefineX");
console.log(resolve2);

// path.resolve() işlevi, 'C:\\Program Files' dosyasını bir kök öğeyle (C:) başladığı için mutlak bir yol olarak ele alır, bu nedenle sonraki segmentleri çözümlemek için doğrudan bu yolu temel olarak kullanır. Bu mutlak yolu çözümlerken geçerli çalışma dizinini dikkate almaz.

// path.normalize(), . veya .. gibi göreli belirteçler veya çift bölü çizgileri içerdiğinde gerçek yolu hesaplamaya çalışan başka bir yararlı işlevdir:

const cwd = "nodejs-org\\04-manipulating-files\\index.js\\..\\..\\deneme";
const normalize = path.normalize(cwd);
console.log("normalize: ", normalize);

// Not: Ne resolve ne de normalize yolun var olup olmadığını kontrol etmez. Sadece aldıkları bilgilere dayanarak bir yol hesaplarlar.

// path.parse(): path.parse() yöntemi, özellikleri yolun önemli öğelerini temsil eden bir nesne döndürür.
const allPath =
  "C:\\Users\\samet_000\\Desktop\\Çalışmalarım\\Kurslarım\\nodejs-egitimi\\nodejs-org\\04-manipulating-files";

const parsePath = path.parse(allPath);
console.log("parse: ", parsePath);

// path.format(): path.format() yöntemi bir nesneden bir yol dizesi döndürür. Bu, path.parse() yönteminin tersidir.
const formatPath = path.format(parsePath);
console.log("format: ", formatPath);

// Working with file descriptors in Node.js
// fs.open(), bir dosyayı açmak için Node.js'deki fs modülü tarafından sağlanan bir işlevdir. Bir dosya yolu ve dosyayı açmak istediğiniz modu (örn. okuma, yazma, ekleme, vb.) belirten bir bayrak belirtmenize olanak tanır. Bu fonksiyon, açılan dosyayı temsil eden "benzersiz bir tanımlayıcı" olan bir "dosya tanımlayıcısı (fd)" döndürür. Daha sonra, açılan dosya üzerinde işlemler gerçekleştirmek için bu dosya tanımlayıcısını diğer dosya sistemi işlevleriyle birlikte kullanabilirsiniz.

// Flags
// r+ Bu bayrak dosyayı okuma ve yazma için açar. Dosya mevcut değilse, yeni dosya oluşturmaz.
// w+ Bu bayrak dosyayı okuma ve yazma için açar ve ayrıca akışı dosyanın başına konumlandırır. Mevcut değilse yeni dosya oluşturur.
// a Bu bayrak dosyayı yazmak için açar ve aynı zamanda akışı dosyanın sonuna konumlandırır. Mevcut değilse yeni dosya oluşturur.
// a+ Bu bayrak dosyayı okuma ve yazma için açar ve ayrıca akışı dosyanın sonuna konumlandırır. Mevcut değilse yeni dosya oluşturur.

const examplePath = "C:\\Users\\samet_000\\Desktop\\example.txt";
const flag = "r";

fs.open(examplePath, flag, (err, fd) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File opened successfully. File descriptor: ", fd);
  fs.readFile(fd, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("example.txt: ", data);
    fs.close(fd, (closeErr) => {
      if (closeErr) {
        console.error("Error closing file:", closeErr);
        return;
      }
      console.log("File closed successfully.");
    });
  });
});

// Dosyayı kullanmayı bitirdikten sonra kapatmazsanız, özellikle programınız çok sayıda dosya açıyorsa veya diğer işlemlerin bu dosyalara erişmesi gerekiyorsa, kaynak sızıntılarına veya beklenmedik davranışlara neden olabilir. Dosyaları açık bırakmak, sınırlı ve değerli bir kaynak olan dosya tanımlayıcıları gibi sistem kaynaklarını tüketir. Sonunda, programınız dosyaları kapatmadan açmaya devam ederse, işletim sistemi tarafından izin verilen açık dosya tanımlayıcılarının sayısı sınırına ulaşabilir ve "çok fazla açık dosya" gibi hatalara yol açabilir.

// Ayrıca, dosyaların düzgün bir şekilde kapatılmaması, programınız sonlandırılana kadar diğer işlemlerin veya programların bu dosyalara erişmesini veya bunları değiştirmesini engelleyebilir, bu da parazit veya veri bozulması sorunlarına neden olabilir.

// Bu nedenle, kaynakları boşaltmak ve düzgün sistem davranışı sağlamak için dosyaları kullanmayı bitirdiğinizde her zaman kapatmak iyi bir uygulamadır.

// Tıpkı bir dosya yolunun (path) dosya sistemindeki bir dosyanın konumuna referans olarak hizmet etmesi gibi, dosya tanımlayıcısı (fd) da programınızın bellek alanında açılan dosyaya referans olarak hizmet eder. Dosya tanımlayıcısına sahip olduğunuzda, bir dosya üzerinde işlem yapmak için bir dosya yolunu kullandığınıza benzer şekilde, dosya üzerinde okuma, yazma, arama ve diğer işlemleri gerçekleştirmek için kullanabilirsiniz. Yani, bir bakıma, dosya tanımlayıcısını (fd), programınızın farklı dosya sistemi işlevlerini kullanarak dosyayı manipüle etmesine olanak tanıyan, açılan dosyaya bir tanıtıcı veya işaretçi olarak düşünebilirsiniz.

// Dolayısıyla, bir dosya yolu (path) sabit ve kalıcı kalırken, bir dosya tanımlayıcısı (fd) geçicidir ve yalnızca dosya programınız tarafından açılıp aktif olarak kullanılırken geçici olarak vardır.

// Reading files with Node.js
// Node.js'de bir dosyayı okumanın en basit yolu, fs.readFile() yöntemini kullanmak ve dosya yolunu, kodlamayı ve dosya verileriyle (ve hatayla) çağrılacak bir geri arama işlevini iletmektir:

fs.readFile(examplePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Read file successfully. example.txt: ", data);
});

// Not: fs.readFile(), fs.readFileSync() ve fsPromises.readFile() işlevlerinin üçü de verileri döndürmeden önce bellekteki dosyanın tüm içeriğini okur. Bu, büyük dosyaların bellek tüketiminiz ve programın yürütülme hızı üzerinde büyük bir etkiye sahip olacağı anlamına gelir. Bu durumda, dosya içeriğini akışları (stream) kullanarak okumak daha iyi bir seçenektir.

// Büyük bir dosyanın tüm içeriğini bir kerede belleğe okumak aşırı bellek tüketimine yol açabilir ve özellikle birden fazla büyük dosya aynı anda işleniyorsa programınızı potansiyel olarak yavaşlatabilir. Dosyaları okumak için streami kullanmak bellek açısından daha verimli bir yaklaşımdır, çünkü tüm içeriği bir kerede belleğe yüklemek yerine dosyayı daha küçük parçalar halinde okumanıza ve işlemenize olanak tanır. Stream, verileri işlemek için olay odaklı ve eşzamansız bir yol sağlar, bu da onları büyük dosyaları işlemek veya belleğe rahatça sığmayacak kadar büyük verileri işlemek için çok uygun hale getirir.

// Node.js, readable stream, writeable stream, dublex stream ve transform stream dahil olmak üzere çeşitli stream türleri sağlar. Bir dosyadan veri okumak üzere bir readable akış oluşturmak için fs.createReadStream() işlevini kullanabilir ve ardından akışı diğer streama aktarabilir veya verileri gerektiği gibi işleyebilirsiniz:

const readStream = fs.createReadStream(
  "C:\\Users\\samet_000\\Desktop\\bigdata.txt",
  { highWaterMark: 65536 } // Default: 64 KB, Means 65536 bytes.
);

// 'data' event: Bir veri yığını mevcut olduğunda yayılır.
readStream.on("data", (chunk) => {
  console.log("Received a chunk of data:", chunk.length, "bytes");
});

// 'end' event: Dosyanın sonuna ulaşıldığında yayılır
readStream.on("end", () => {
  console.log("Finished reading the file.");
});

readStream.on("error", (err) => {
  console.error("Error reading the file:", err);
});

readStream.on("close", () => {
  console.log("Stream closed.");
});

// Writing files with Node.js

// Node.js'te dosyalara yazmanın iki yolu vardır:

// fs.writeFile(): fs.writeFile() işlevinde belirtilen dosya mevcut değilse, verilen adla yeni bir dosya oluşturulur ve veriler bu dosyaya yazılır. Aynı isimde bir dosya zaten mevcutsa, yeni verilerle değiştirilecektir.

// fs.appendFile(): fs.appendFile() içinde belirtilen dosya mevcut değilse, verilen isimde yeni bir dosya oluşturulur ve veriler bu dosyaya eklenir. Aynı isimde bir dosya zaten mevcutsa, veriler mevcut dosyanın sonuna eklenir.

// Özetle, her iki yöntem de mevcut değilse yeni bir dosya oluşturur. Ancak, fs.writeFile() zaten mevcutsa "dosyayı değiştirir", fs.appendFile() ise mevcutsa "dosyaya ekleme yapar".

const myPath = "C:\\Users\\samet_000\\Desktop\\example.txt";
const content = "Lorem ipsum dolor sit!";

fs.writeFile(myPath, content, (err) => {
  if (err) throw err;
  console.log("Write operation is done!");
  fs.appendFile(myPath, "Requast en pace.", (err) => {
    if (err) throw err;
    console.log("Append operations is done!");
  });
  fs.readFile(myPath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Read operation is done! example.txt: ", data);
  });
});

// Working with folders in Node.js

// Bir klasörün var olup olmadığını kontrol edin: fs.access()
// path ile belirtilen dosya veya dizin için kullanıcının izinlerini test eder. mode bağımsız değişkeni, gerçekleştirilecek erişilebilirlik denetimlerini belirten isteğe bağlı bir tamsayıdır. mode, ya fs.constants.F_OK değeri ya da fs.constants.R_OK, fs.constants.W_OK ve fs.constants.X_OK değerlerinden herhangi birinin bitsel OR değerinden oluşan bir maske olmalıdır (örn. fs.constants.W_OK | fs.constants.R_OK). Modun olası değerleri için fs.constants'ı kontrol edin.

const { access, constants } = require("node:fs");

access(myPath, constants.F_OK, (err) => {
  console.log(`File ${err ? "does not exist." : "exist!"}`);
});

access(myPath, constants.R_OK, (err) => {
  console.log(`File ${err ? "does not readable." : "readable!"}`);
});

access(myPath, constants.W_OK, (err) => {
  console.log(`File ${err ? "does not writeable" : "writeable!"}`);
});

access(myPath, constants.R_OK | constants.W_OK, (err) => {
  console.log(
    `File ${err ? "does not readable or writeable." : "readable or writeable!"}`
  );
});

// Create a new folder
// Yeni bir klasör oluşturmak için fs.mkdir() veya fs.mkdirSync() veya fsPromises.mkdir() kullanın.
const desktopPath = "C:\\Users\\samet_000\\Desktop\\new";

fs.mkdir(desktopPath, { recursive: true }, (err) => {
  if (err) throw err;
  console.log("Directory create successfully!");
  fs.writeFile(
    path.join(desktopPath, "first.txt"),
    "Hello, Im New!",
    "utf-8",
    (err) => {
      if (err) {
        console.log("Write on file failed!");
      }
    }
  );
});

// Read the content of a directory
// Bir dizinin içeriğini okumak için fs.readdir() veya fs.readdirSync() veya fsPromises.readdir() kullanın. Bu kod parçası, hem dosyalar hem de alt klasörler olmak üzere bir klasörün içeriğini okur ve göreli yollarını döndürür:

fs.readdir(desktopPath, "utf-8", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Files: ", files);
});

console.log("new", process.platform);
