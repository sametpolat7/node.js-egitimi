// Asenkron JavaScript
// Öncelikle senkron ve asenkron programlama nedir bunlara bakalım.

// Senkron (Synchronous)
// Senkron programlama en basit tanımıyla işlemlerin sırasıyla yapılmasıdır. Önce bir dosya okuyalım, sonra bir veritabanı işlemi yapalım ve sonrasında da bir http isteği gönderelim şeklinde basit bir şekilde çalışır. Beklemekten sıkılmaz, başka işlerin aciliyetiyle ilgilenmez. Bir işlem yapılırken diğer işlemler bloklanır.

// Asenkron (Asynchronous)
// Asenkron programlama ise uzun süren bir işlemi beklemeden diğer işlemlere devam edebilmektir, işlemlerin sırasıyla devam etme zorunluluğu yoktur. Örneğin bir veri çekme işlemi yapacaksak, verilerin tamamiyle gelmesini beklememize gerek yoktur. İşlemi başlatıp diğer işleme geçebiliriz. Yani bir işlem yapılırken diğer işlemler bloklanmaz.

// Peki işlemleri tamam bir şekilde bitmelerini beklemeden hızlıca başlattık, peki bu işlemler bittiğinde bunun sıralaması nasıl yapılıyor? İşte burada devreye event-loop girer.

// Node.js'de eşzamansız süreçler öncelikle olay döngüsü mekanizması aracılığıyla yönetilir ve sıralanır. Node.js, diğer kodların yürütülmesini engellemeden birçok eşzamanlı bağlantıyı verimli bir şekilde ele almasına olanak tanıyan olay odaklı, engellemesiz bir G / Ç modelini izler.

// 1. Event Loop (Olay döngüsü):
// Node.js, asenkron işlemleri verimli bir şekilde yönetmek için bir olay döngüsü kullanır.
// Olay döngüsü, bir kuyruktaki olayları sürekli olarak kontrol eder ve bunları tek tek işler.
// Olaylar G/Ç işlemlerini (bir dosyadan okuma veya ağdan veri alma gibi), zamanlayıcıları, geri aramaları ve diğer olay türlerini içerebilir.

// 2. Non-blocking I/O (Engellemeyen G/Ç):
// Node.js G/Ç işlemlerini eşzamansız olarak gerçekleştirir, yani işlemi başlatır ve işlemin tamamlanmasını beklerken diğer kodu çalıştırmaya devam eder.
// G/Ç işlemi tamamlandığında, Node.js sonucu işlemek için bir geri arama işlevini tetikler.
// Bu bloklanmayan yapı, Node.js'nin birçok eşzamanlı bağlantıyı bloklanmadan verimli bir şekilde işlemesine olanak tanır.

// 3. Callbacks (Geri aramalar):
// Geri arama işlevleri, Node.js'de eşzamansız işlemleri işlemek için yaygın olarak kullanılır.
// Eşzamansız bir işlem tamamlandığında, Node.js ilgili geri arama işlevini çağırır ve ilgili verileri veya hataları iletir.
// Node.js, geri aramalar sağlayarak geliştiricilerin eşzamansız bir işlem tamamlandıktan sonra ne olması gerektiğini belirlemelerine olanak tanır ve böylece bloklama yapmayan, olay güdümlü kod yazmalarını sağlar.


// Ufak bir Node.js bilgilendirmesinden sonra gelelim asıl konumuza:

// JavaScript doğası gereği eşzamanlıdır: Varsayılan olarak JavaScript kodu eşzamanlı olarak yürütülür, yani deyimler kodda göründükleri sırayla birbiri ardına yürütülür.

// JavaScript eşzamansız olarak da çalışabilir: JavaScript, geri aramalar, promise'ler ve async/await gibi asenkron programlama mekanizmaları sağlar. Bu mekanizmalar, kodu eşzamansız olarak çalıştırmanıza olanak tanır, yani belirli işlemler ana program akışından bağımsız olarak gerçekleşebilir.

// Gelelim single thread (tek iş parçacıklı) kavramına:
// JavaScript bir dil olarak doğası gereği tek iş parçacıklı veya çok iş parçacıklı değildir. İş parçacığı modelini belirleyen JavaScript'in "çalıştığı ortamdır".

// Geleneksel olarak, JavaScript öncelikle tek iş parçacıklı bir ortamda çalıştığı web tarayıcılarında kullanılıyordu. Bu, JavaScript kodunun tarayıcının ana iş parçacığında yürütüldüğü ve olay işleyicileri ve AJAX istekleri gibi eşzamansız işlemler de dahil olmak üzere tüm JavaScript kodunun bu tek iş parçacığında sırayla işlendiği anlamına gelir. Bu genellikle "ana iş parçacığı" veya "UI iş parçacığı" olarak adlandırılır.

// Node.js'nin kendisi varsayılan olarak "tek iş parçacıklıdır", ancak diğer kodların yürütülmesini engellemeden birçok eşzamanlı bağlantıyı verimli bir şekilde işlemesine olanak tanıyan olay güdümlü, engellemesiz bir G/Ç modeli kullanır. Node.js eşzamanlılığı olay döngüleri ve işçi iş parçacıkları aracılığıyla gerçekleştirir.

// Yani özetle:
// Web tarayıcılarında çalışan JavaScript geleneksel olarak tek iş parçacıklı bir ortamda çalışır ve kodu ana iş parçacığında sırayla yürütür.
// Node.js'de çalışan JavaScript varsayılan olarak tek iş parçacıklı bir olay döngüsünde çalışır, ancak CPU yoğun görevleri eşzamansız olarak gerçekleştirmek için alt iş parçacıklarından da yararlanabilir.
// Her iki ortamda da JavaScript kodu, ortam tarafından sağlanan API'ler aracılığıyla çok iş parçacıklı işlemlerle etkileşime girebilir (örneğin, tarayıcılardaki Web Workers veya Node.js'deki iş parçacıkları).
// Dolayısıyla, JavaScript'in kendisi doğası gereği tek iş parçacıklı olmasa da, iş parçacığı modeli çalıştığı ortama bağlıdır.


// Event Loop Nedir?
// Olay döngüsü, JavaScript'te, özellikle web tarayıcıları ve Node.js gibi ortamlarda JavaScript çalışma zamanı ortamındaki yürütme akışını yöneten çok önemli bir kavramdır. Eşzamansız işlemlerin gerçekleştirilmesinden ve JavaScript'in tek iş parçacıklı ve blokajsız kalmasını sağlamaktan sorumludur.

// İşte olay döngüsünün nasıl çalıştığına dair üst düzey bir genel bakış:

// Çağrı Yığını: JavaScript kodu yürütüldüğünde, bir çağrı yığını içinde işlenir. Her fonksiyon çağrısı bir yığın çerçevesi oluşturur ve fonksiyonlar Son Giren İlk Çıkar (LIFO) sırasına göre yürütülür. Bu, en son çağrılan fonksiyonun ilk çalıştırılan fonksiyon olduğu anlamına gelir.

// Asenkron İşlemler: JavaScript ayrıca setTimeout, XMLHttpRequest, Promises gibi asenkron işlemleri de destekler. Bir asenkron işlemle karşılaşıldığında, bu işlem tarayıcı API'lerine veya Node.js çalışma zamanına yüklenir ve geri arama işlevi daha sonra yürütülmek üzere kaydedilir.

// Olay Kuyruğu: Eşzamansız bir işlem tamamlandığında (örneğin, bir zamanlayıcı sona erdiğinde, bir ağ isteği bittiğinde), geri arama işlevi olay kuyruğuna yerleştirilir.

// Olay Döngüsü: Olay döngüsü çağrı yığınını ve olay kuyruğunu sürekli olarak izler. Çağrı yığını boş olduğunda, olay döngüsü olay kuyruğunda herhangi bir işlev olup olmadığını kontrol eder. Varsa, bunları sıradan çıkarır ve çalıştırılabilecekleri çağrı yığınına iter.

// Yürütme: Olay kuyruğundan çıkarılan işlevler, aynı LIFO ilkesini izleyerek teker teker yürütülür. Yürütme sırasında daha fazla eşzamansız işlemle karşılaşılırsa, işlem tekrarlanır ve geri arama işlevleri sıraya alınır ve sonunda yürütülür.