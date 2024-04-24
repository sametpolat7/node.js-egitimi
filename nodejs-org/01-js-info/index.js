// Asynchronous JavaScript
// Bu modülde, asenkron JavaScript'e, neden önemli olduğuna ve bir sunucudan veri alma gibi potansiyel bloklama işlemlerini etkili bir şekilde ele almak için nasıl kullanılabileceğine bir göz atacağız.

// Introducing asynchronous JavaScript
// Eşzamansız programlama, programınızın potansiyel olarak uzun süren bir görevi başlatmasını ve bu görev bitene kadar beklemek yerine, bu görev çalışırken diğer olaylara yanıt verebilmesini sağlayan bir tekniktir. Görev tamamlandığında, programınıza sonuç sunulur.

// Tarayıcılar tarafından sağlanan birçok işlev, özellikle de en ilginç olanlar, potansiyel olarak uzun zaman alabilir ve bu nedenle eşzamansızdır. Örneğin:

// fetch() kullanarak HTTP istekleri yapma
// getUserMedia() işlevini kullanarak kullanıcının kamerasına veya mikrofonuna erişme
// showOpenFilePicker() kullanarak kullanıcıdan dosya seçmesini isteme

// Dolayısıyla, kendi asenkron fonksiyonlarınızı çok sık uygulamanız gerekmese de, bunları doğru şekilde kullanmanız gerekebilir. Bu makalede, asenkron programlamayı bir gereklilik haline getiren uzun süreli senkron işlevlerle ilgili soruna bakarak başlayacağız.

// Bu kod:

const firstName = "Miriam";
const greeting = `Hello, my name is ${firstName}!`;
console.log(greeting); // "Hello, my name is Miriam!"

// firstName adında bir string ifade bildirir.
// firstName öğesini kullanan greeting adlı başka bir string ifade bildirir.
// greteting JavaScript konsoluna çıktı olarak verir.

// Burada, tarayıcının programı yazdığımız sırayla her seferinde bir satırdan geçtiğini belirtmeliyiz. Her noktada, tarayıcı bir sonraki satıra geçmeden önce satırın işini bitirmesini bekler. Bunu yapmak zorundadır çünkü her satır önceki satırlarda yapılan işe bağlıdır.

// A long-running synchronous function
// Senkronize işlev uzun sürerse ne olur? Aşağıdaki program, kullanıcı "Asal sayı üret" düğmesine tıkladığında birden fazla büyük asal sayı üretmek için çok verimsiz bir algoritma kullanmaktadır. Kullanıcı ne kadar çok asal sayı belirtirse, işlem o kadar uzun sürecektir. "Asal sayıları oluştur" seçeneğine tıklayın ve hemen ardından metin kutusuna yazmayı deneyin.

// generatePrimes() fonksiyonumuz çalışırken programımızın tamamen tepkisiz olduğunu göreceksiniz: hiçbir şey yazamaz, hiçbir şeye tıklayamaz veya başka bir şey yapamazsınız.

// Bunun nedeni, bu JavaScript programının tek iş parçacıklı olmasıdır. İş parçacığı, bir programın takip ettiği bir dizi talimattır. Program tek bir iş parçacığından oluştuğu için, aynı anda yalnızca bir şey yapabilir: bu nedenle, uzun süredir devam eden senkron çağrımızın geri dönmesini bekliyorsa, başka bir şey yapamaz.

// İhtiyacımız olan şey:

// Bir fonksiyonu çağırarak uzun süren bir işlemi başlatın.
// Bu fonksiyonun işlemi başlatmasını ve hemen geri dönmesini sağlayın, böylece programımız diğer olaylara yanıt vermeye devam edebilir.
// Fonksiyonun işlemi ana iş parçacığını engellemeyecek şekilde, örneğin yeni bir iş parçacığı başlatarak yürütmesini sağlayın.
// Sonunda tamamlandığında işlemin sonucunu bize bildirin.

// İşte asenkron fonksiyonlar tam olarak bunu yapmamızı sağlar. Bu modülün geri kalanında JavaScript'te nasıl uygulandıkları açıklanmaktadır.

// Event Handlers
// Az önce gördüğümüz eşzamansız fonksiyonların tanımı size olay işleyicileri hatırlatabilir ve eğer hatırlatıyorsa, haklısınız. Olay işleyiciler aslında bir tür eşzamansız programlamadır: hemen değil ama olay gerçekleştiğinde çağrılacak bir işlev (olay işleyici) sağlarsınız. Eğer "olay" "eşzamansız işlem tamamlandı" ise, o zaman bu olay eşzamansız bir fonksiyon çağrısının sonucunu çağırana bildirmek için kullanılabilir.

// Bazı ilk asenkron API'ler olayları bu şekilde kullanmıştır. XMLHttpRequest API, JavaScript kullanarak uzak bir sunucuya HTTP istekleri yapmanızı sağlar. Bu işlem uzun sürebileceğinden, eşzamansız bir API'dir ve XMLHttpRequest nesnesine olay dinleyicileri ekleyerek bir isteğin ilerleyişi ve nihai olarak tamamlanması hakkında bildirim alırsınız.

// Aşağıdaki örnekte bu işlem gösterilmektedir. Bir istek göndermek için "Click to start request" düğmesine basın. Yeni bir XMLHttpRequest oluştururuz ve loadend olayını dinleriz. İşleyici, durum koduyla birlikte bir "Bitti!" mesajı kaydeder.

// Olay dinleyicisini ekledikten sonra isteği gönderiyoruz. Bundan sonra, "Started XHR request" (XHR isteği başlatıldı) günlüğünü kaydedebileceğimizi unutmayın: yani, istek devam ederken programımız çalışmaya devam edebilir ve istek tamamlandığında olay işleyicimiz çağrılacaktır.

// HTML
{
  (<button id="xhr">Click to start request</button>),
    (<pre readonly class="event-log"></pre>);
}

// JS
const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

// Bu, önceki modülde karşılaştığımız olay işleyicileri gibidir, ancak olay kullanıcının bir düğmeye tıklaması gibi bir kullanıcı eylemi yerine, bir nesnenin durumundaki bir değişikliktir (loadend).

// Callbacks
//Olay işleyici, belirli bir geri arama türüdür. Geri arama, geri aramanın uygun zamanda çağrılması beklentisiyle başka bir fonksiyona aktarılan bir fonksiyondur. Az önce gördüğümüz gibi, geri aramalar eskiden JavaScript'te asenkron fonksiyonların uygulanmasının ana yoluydu.

//Ancak, geri arama tabanlı kod, geri aramanın kendisi geri arama kabul eden işlevleri çağırmak zorunda kaldığında anlaşılması zorlaşabilir. Bir dizi eşzamansız fonksiyona bölünen bir işlem gerçekleştirmeniz gerekiyorsa bu yaygın bir durumdur. Örneğin, aşağıdakileri düşünün:

function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();

// Geri aramaları geri aramaların içinde çağırmamız gerektiğinden, okunması ve hata ayıklaması çok daha zor olan derinlemesine iç içe geçmiş bir doOperation() işlevi elde ederiz. Buna bazen "callback cehennemi" veya "kıyamet piramidi" denir (çünkü girinti yan taraftaki bir piramit gibi görünür).

// Geri aramaları bu şekilde iç içe yerleştirdiğimizde, hataları ele almak da çok zorlaşabilir: genellikle hataları yalnızca en üst düzeyde bir kez ele almak yerine, "piramidin" her düzeyinde ele almanız gerekir.

// Bu nedenlerden dolayı, modern asenkron API'lerin çoğu callback kullanmaz. Bunun yerine, JavaScript'te asenkron programlamanın temeli Promise'dir ve bu bir sonraki makalenin konusudur.

// Promise
// Sözler, modern JavaScript'te eşzamansız programlamanın temelini oluşturur. Söz, eşzamansız bir işlev tarafından döndürülen ve işlemin mevcut durumunu temsil eden bir nesnedir. Söz, çağırana geri döndürüldüğünde, işlem genellikle tamamlanmamıştır, ancak söz nesnesi, işlemin nihai başarısını veya başarısızlığını ele almak için yöntemler sağlar.

// Bir önceki makalede, asenkron fonksiyonları uygulamak için geri aramaların kullanımından bahsetmiştik. Bu tasarımla, geri arama fonksiyonunuzu ileterek asenkron fonksiyonu çağırırsınız. İşlev hemen geri döner ve işlem bittiğinde geri aramanızı çağırır.

// Promise tabanlı bir API ile, asenkron fonksiyon işlemi başlatır ve bir Promise nesnesi döndürür. Daha sonra bu promise nesnesine işleyiciler ekleyebilirsiniz ve bu işleyiciler işlem başarılı veya başarısız olduğunda yürütülür.

// Şimdi bunu simüle edelim.  Bunu yapmak için sunucuya bir HTTP isteği göndereceğiz. Bir HTTP isteğinde, uzak bir sunucuya bir istek mesajı göndeririz ve sunucu bize bir yanıt gönderir. Bu durumda, sunucudan bir JSON dosyası almak için bir istek göndereceğiz. XMLHttpRequest API'sini kullanarak HTTP istekleri yaptığımız son makaleyi hatırlıyor musunuz? Bu makalede, XMLHttpRequest için modern, vaat tabanlı bir alternatif olan fetch() API'sini kullanacağız.

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

// Output:
// Promise { <state>: "pending" }
// Started request…
// Received response: 200

// Started request... ifadesinin biz yanıtı almadan önce kaydedildiğine dikkat edin. Eşzamanlı bir fonksiyondan farklı olarak fetch(), istek devam ederken geri döner ve programımızın duyarlı kalmasını sağlar. Yanıt 200 (OK) durum kodunu gösterir, bu da isteğimizin başarılı olduğu anlamına gelir.

// Bu muhtemelen XMLHttpRequest nesnesine olay işleyicileri eklediğimiz son makaledeki örneğe çok benziyor. Bunun yerine, döndürülen sözün then() yöntemine bir işleyici aktarıyoruz.

// Promise Zinciri
// fetch() API'si ile bir Response nesnesi aldığınızda, yanıt verilerini almak için başka bir fonksiyon çağırmanız gerekir. Bu durumda, yanıt verilerini JSON olarak almak istiyoruz, bu nedenle Response nesnesinin json() yöntemini çağıracağız. json() metodunun da asenkron olduğu ortaya çıktı. Yani bu, art arda iki asenkron fonksiyon çağırmamız gereken bir durumdur.

const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromise1.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});

// Bu örnekte, daha önce olduğu gibi, fetch() tarafından döndürülen söze bir then() işleyicisi ekliyoruz. Ancak bu kez, işleyicimiz response.json() öğesini çağırır ve ardından response.json() tarafından döndürülen söze yeni bir then() işleyicisi geçirir.

// Ama bekleyin! Bir callback'i başka bir callback'in içinde çağırarak, iç içe geçmiş daha fazla kod seviyesine sahip olduğumuzu söylediğimiz son makaleyi hatırlıyor musunuz? Ve bu "callback cehenneminin" kodumuzun anlaşılmasını zorlaştırdığını söylemiştik? Bu da aynı şey değil mi, sadece then() çağrıları ile?

// Elbette öyle. Ancak promise'lerin zarif özelliği, then() fonksiyonunun kendisine aktarılan fonksiyonun sonucuyla tamamlanacak bir promise döndürmesidir. Bu, yukarıdaki kodu şu şekilde yeniden yazabileceğimiz (ve kesinlikle yazmamız gerektiği) anlamına gelir:

const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromise2
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });

// İkinci then() işlevini ilk then() işlevinin işleyicisi içinde çağırmak yerine, json() tarafından döndürülen vaadi döndürebilir ve ikinci then() işlevini bu dönüş değeri üzerinde çağırabiliriz. Buna promise chaining denir ve ardışık asenkron fonksiyon çağrıları yapmamız gerektiğinde sürekli artan girinti seviyelerinden kaçınabileceğimiz anlamına gelir.

// Bir sonraki adıma geçmeden önce eklememiz gereken bir parça daha var. Okumaya çalışmadan önce sunucunun isteği kabul edip etmediğini kontrol etmemiz gerekiyor. Bunu, yanıttaki durum kodunu kontrol ederek ve "OK" değilse bir hata atarak yapacağız.

// Hataları Yakalama
// Bu bizi son parçaya getiriyor: hataları nasıl ele alacağız? fetch() API'si birçok nedenden dolayı hata verebilir (örneğin, ağ bağlantısı olmadığından veya URL bir şekilde hatalı biçimlendirildiğinden) ve sunucu bir hata döndürürse kendimiz bir hata veririz.

// Son makalede, hata işlemenin iç içe geçmiş geri aramalarla çok zorlaşabileceğini ve her iç içe geçme seviyesinde hataları ele almamızı gerektirdiğini gördük.

// Hata işlemeyi desteklemek için, Promise nesneleri bir catch() yöntemi sağlar. Bu, then() metoduna çok benzer: metodu çağırır ve bir işleyici fonksiyonu aktarırsınız. Ancak then() metoduna aktarılan işleyici asenkron işlem başarılı olduğunda çağrılırken, catch() metoduna aktarılan işleyici asenkron işlem başarısız olduğunda çağrılır.

// Bir söz zincirinin sonuna catch() eklerseniz, eşzamansız işlev çağrılarından herhangi biri başarısız olduğunda çağrılacaktır. Böylece bir işlemi birkaç ardışık eşzamansız işlev çağrısı olarak uygulayabilir ve tüm hataları ele almak için tek bir yere sahip olabilirsiniz.

// fetch() kodumuzun bu sürümünü deneyin. catch() kullanarak bir hata işleyici ekledik ve ayrıca URL'yi istek başarısız olacak şekilde değiştirdik.

const fetchPromise3 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromise3
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

// Promise Terminolojisi
// Sözler, açıklığa kavuşturmaya değer oldukça spesifik bazı terminolojilerle birlikte gelir.

// İlk olarak, bir vaat üç durumdan birinde olabilir:

// pending: promise oluşturulmuştur ve ilişkili olduğu asenkron fonksiyon henüz başarılı ya da başarısız olmamıştır. Bu, bir fetch() çağrısından döndürüldüğünde ve istek hala yapılırken sözünüzün içinde bulunduğu durumdur.

// fulfilled: asenkron fonksiyon başarılı olmuştur. Bir söz yerine getirildiğinde, then() işleyicisi çağrılır.

// rejected: asenkron fonksiyon başarısız olmuştur. Bir söz reddedildiğinde, catch() işleyicisi çağrılır.

// Burada "başarılı" veya "başarısız" ifadelerinin ne anlama geldiğinin söz konusu API'ye bağlı olduğunu unutmayın. Örneğin, fetch() işlevi (diğer nedenlerin yanı sıra) bir ağ hatası isteğin gönderilmesini engellemişse döndürülen sözü reddeder, ancak sunucu bir yanıt göndermişse, yanıt 404 Not Found gibi bir hata olsa bile sözü yerine getirir.

// Bazen yerleşmiş terimini hem yerine getirilmiş hem de reddedilmiş terimlerini kapsayacak şekilde kullanırız.

// Bir vaat yerine getirilmişse veya başka bir vaadin durumunu takip etmek üzere "kilitlenmişse" çözülmüştür.

// Multi Promises
// Söz zinciri, işleminiz birkaç eşzamansız işlevden oluştuğunda ve bir sonrakine başlamadan önce her birinin tamamlanmasına ihtiyaç duyduğunuzda ihtiyacınız olan şeydir. Ancak eşzamansız işlev çağrılarını birleştirmeniz gerekebilecek başka yollar da vardır ve Promise API bunlar için bazı yardımcılar sağlar.

// Bazen tüm vaatlerin yerine getirilmesine ihtiyaç duyarsınız, ancak bunlar birbirlerine bağlı değildir. Böyle bir durumda, hepsini birlikte başlatmak ve ardından hepsi yerine getirildiğinde bildirim almak çok daha etkilidir. Burada ihtiyacınız olan şey Promise.all() yöntemidir. Bir dizi vaat alır ve tek bir vaat döndürür.

const fetchPromise4 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise5 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise6 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.all([fetchPromise4, fetchPromise5, fetchPromise6])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });

// Bazen, bir dizi vaatten herhangi birinin yerine getirilmesine ihtiyaç duyabilir ve hangisinin yerine getirileceğini önemsemeyebilirsiniz. Bu durumda, Promise.any() işlevini istersiniz. Bu, Promise.all() gibidir, ancak vaatler dizisinden herhangi biri yerine getirilir getirilmez yerine getirilir veya hepsi reddedilirse reddedilir:

const fetchPromise7 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise8 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise9 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.any([fetchPromise7, fetchPromise8, fetchPromise9])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });

// async ve await
// async anahtar sözcüğü, eşzamansız söz tabanlı kodla çalışmak için size daha basit bir yol sunar. Bir fonksiyonun başına async eklenmesi onu async fonksiyonu yapar:

// Bir asenkron fonksiyonun içinde, vaat döndüren bir fonksiyon çağrısından önce await anahtar sözcüğünü kullanabilirsiniz. Bu, kodun o noktada vaat yerine getirilene kadar beklemesini sağlar; bu noktada vaadin yerine getirilen değeri bir dönüş değeri olarak ele alınır veya reddedilen değer atılır.

// Bu, eşzamansız işlevler kullanan ancak eşzamanlı kod gibi görünen kod yazmanıza olanak tanır. Örneğin, fetch örneğimizi yeniden yazmak için kullanabiliriz:

async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();

// Burada, await fetch() işlevini çağırıyoruz ve bir Promise almak yerine, çağıranımız tıpkı fetch() işlevi senkron bir işlevmiş gibi tam bir Response nesnesi geri alıyor!

// Hata işleme için try...catch bloğu bile kullanabiliriz, tıpkı kod senkronize olsaydı yapacağımız gibi.

// Ancak async fonksiyonlarının her zaman bir promise döndürdüğünü unutmayın, bu nedenle şöyle bir şey yapamazsınız:

async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
console.log(promise[0].name); // "promise" is a Promise object, so this will not work

// Bunun yerine, şöyle bir şey yapmanız gerekir:
async function fetchProducts() {
  try {
    const yanıt = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP hatası: ${response.status}`);
    }
    const veri = await yanıt.json();
    return data;
  } catch (hata) {
    console.error(`Ürünler alınamadı: ${error}`);
  }
}

const promise1 = fetchProducts();
promise1.then((veri) => console.log(veri[0].isim));
