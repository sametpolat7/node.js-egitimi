// Buffers
// Node.js'de Buffer, "ikili verilerle" doğrudan çalışmak için bir yol sağlayan global bir nesnedir. Ham ikili veriler için geçici bir depolama alanı görevi görür ve ikili biçimi temsilen hexadecimal (16lık) formatta görüntülenir. V8 heap'inin dışında tahsis edilebilen ve sabit boyutlu bir bellek yığınını temsil eder.

// Bufferlar ikili verileri depolar, ancak bunları görüntülediğinizde genellikle onaltılık biçimde görüntülenirler. Bunun nedeni, özellikle büyük miktarlarda veri ile uğraşırken onaltılık sayının ikili verileri temsil etmek için daha kompakt ve kullanışlı bir yol olmasıdır.

// Dolayısıyla, <Buffer 41 42 43> şeklinde görüntülenen bir buffer gördüğünüzde, her onaltılık basamak çifti bir bayt ikili veriyi temsil eder. Bu onaltılık gösterim, bufferda depolanan ikili verileri kolayca görselleştirmenize ve değiştirmenize olanak tanır.

// Bufferlar özellikle dosya G/Ç işlemleri, ağ iletişimi, kriptografik işlemler ve veri bütünlüğü ile performansın çok önemli olduğu veri işleme görevleri gibi ikili verilerle çalışmak için kullanışlıdır.

// Ham İkili Veri: Bufferlar, verileri sıralı bir byte bütünü olarak depolar ve her byte tek bir öğenin ikili veri biçimini temsil eder. Bu, Bufferları görüntüler, ses, video ve ikili dosya biçimleri gibi metin dışı veriler de dahil olmak üzere ham ikili biçimindeki verileri işlemek için uygun hale getirir.

// Sabit Boyutlu Tahsis: Bufferlar oluşturulduğunda sabit bir boyuta sahiptir, yani bufferın boyutu bir kez tahsis edildikten sonra değiştirilemez. Bu, Bufferların devamlı değişebilen bellek tahsisine gerek kalmadan ikili veriler için belleği verimli bir şekilde yönetmesini sağlar.

// Hızlı ve Verimli: Bufferlar performans için optimize edilmiştir, bu da onları hız ve verimliliğin önemli olduğu yüksek performanslı uygulamalar için uygun hale getirir. Bufferlar üzerindeki okuma, yazma ve manipülasyon gibi işlemler genellikle JavaScript dizileri veya dizeleri üzerindeki eşdeğer işlemlerden daha hızlıdır.

// Buffer Havuzu: Node.js'de yeni bir Buffer nesnesi oluşturduğunuzda, V8 motoru (Node.js'ye güç veren) genellikle Buffer tarafından temsil edilen ikili verileri depolamak için sistemin RAM'inden bellek ayırır. Node.js, bellek tahsisini verimli bir şekilde yönetmek için "Buffer havuzu" olarak bilinen bir teknik kullanır. Buffer havuzu, Node.js içinde bellek ayırma ve çıkarma işlemlerinin ek yükünü azaltmaya yardımcı olan dahili bir mekanizmadır. Node.js, her biri sabit boyutta olan önceden ayrılmış bellek parçalarından oluşan bir havuz tutar. Bu parçalar özellikle Buffer nesneleri oluşturmak için ayrılmıştır. Yeni bir Buffer nesnesi oluşturduğunuzda, Node.js Buffer'ın boyutunu kontrol eder. İstenen boyut, havuzdaki önceden ayrılmış bellek parçalarından birine sığacak kadar küçükse, Node.js bu parçadan Buffer için bellek ayırır. Bu, her yeni Buffer oluşturulduğunda sistemin RAM'inden bellek talep etme ek yükünden kaçınmaya yardımcı olur. İstenen boyut havuzdaki önceden ayrılmış bellek parçalarına sığmayacak kadar büyükse, Node.js diğer bellek ayırma işlemlerinde olduğu gibi doğrudan sistemin RAM'inden bellek talep etmeye geri döner. Bir Buffer'a artık ihtiyaç duyulmadığında, bellek parçası yeniden kullanılmak üzere Buffer havuzuna geri gönderilir. Bu havuz V8 motoru içindeki 'heap'te bulunduğundan bundan böyle bellek yönetimi garbage collectorun görevidir. Bu, sistemden sürekli yeni bellek talep etmek yerine bellek parçalarını geri dönüştürerek bellek ayırma ve ayırma işlemlerinin ek yükünü azaltmaya yardımcı olur.

// Kodlama ve Kod Çözme: Bufferlar verileri UTF-8, ASCII ve ikili gibi çeşitli karakter kodlamalarında temsil edebilir. Belirli karakter kodlamalarını kullanarak Bufferlara ve Bufferlardan dizeleri kodlayabilir ve kodlarını çözebilirsiniz, böylece ikili verilerin yanı sıra metinsel verilerle de çalışabilirsiniz.

// C/C++ ile arayüz oluşturma: Node.js'nin kendisi C/C++ dilinde yazılmıştır ve Node.js ile kullanılan birçok modül ve kütüphane de bu dillerde yazılmıştır. Bufferlar, bu tür modüllerle arayüz oluşturmak ve ikili verileri verimli bir şekilde işlemek için uygun bir yol sağlar.

// Veri Dönüşümü: Bufferlar genellikle verileri Base64, UTF-8 veya onaltılık gibi çeşitli biçimlere kodlamak ve kodlarını çözmek için kullanılır.

// Genel olarak, bufferlar Node.js uygulamalarında, özellikle de ağ programlama veya dosya I/O gibi performansın ve düşük seviyeli veri manipülasyonunun önemli olduğu senaryolarda ikili verilerin verimli bir şekilde işlenmesi için çok önemlidir.

// Node.js'deki bufferlar, V8 JavaScript motorunun heap'i dışında tahsis edilebilen sabit boyutlu bellek bloklarını temsil eder. Bu, bir buffer nesnesi oluşturduğunuzda, ikili verileri tutmak için sistemin RAM'inde belirli bir miktarda bellek ayırdığınız anlamına gelir.

// Ancak, bufferlarla çalışırken, özellikle de büyük miktarda veriyle uğraşıyorsanız, bellek kullanımına dikkat etmek çok önemlidir. bufferlar doğrudan sistemden bellek ayırdıkları için RAM tüketebilirler ve düzgün yönetilmezlerse aşırı bellek tüketimi ve hatta bellek dışı hatalar gibi bellek sorunlarına yol açabilirler.

// Peki kaputun altında neler oluyor?
// Node.js, buffer nesneleri için bellek ayırdığında, sistemin RAM'inden bellek tahsisi talep etmek için işletim sisteminin kernel'ı ile etkileşime girer.

// Node.js İsteği: Node.js uygulamanız bir buffer nesne oluşturduğunda, işletim sisteminden (RAM) bellek tahsisi talep eder.

// Çekirdek Etkileşimi: Node.js, bellek de dahil olmak üzere sistem kaynaklarının yönetiminden sorumlu temel bileşen olan işletim sistemi çekirdeği (KERNEL) ile etkileşime girer. Kernel, bellek bloklarını ayırma ve ayırma gibi düşük seviyeli bellek yönetimi işlemlerini gerçekleştirir.

// Bellek Tahsisi: Kernel daha sonra buffer nesne için sistemin RAM'inde istenen bellek alanını tahsis eder. Bu bellek genellikle kernel tarafından yönetilen heap'ten tahsis edilir. Bu heap V8 motorunda dinamik bellek tahsisi için ayrılan 'heap' değildir. Doğrudan RAM'de dinamik bellek tahsisi tarafından ayrılan bir yığındır.

// Buffer Kullanımı: Node.js uygulamanız artık ikili verileri buffer nesnesi içinde depolamak için tahsis edilen bellek alanını kullanabilir. Bu veriler uygulamanızın ihtiyaç duyduğu şekilde manipüle edilebilir, okunabilir veya yazılabilir.

// Ayırma: Buffer nesnesine artık ihtiyaç duyulmadığında veya uygulamanızın kapsamı dışına çıktığında, Node.js tahsis edilen belleği kernel ile etkileşim yoluyla işletim sistemine geri bırakır. Bu işlem, başka amaçlar için yeniden kullanılabilmesi için bellek bloğunun tahsisinin kaldırılmasını içerir.

// Dolayısıyla, Node.js'nin kendisi buffer nesnelerini yönetir ve bellek ayırma ve çıkarma için kernel ile etkileşime girerken, bellek yönetimiyle ilgili düşük seviyeli işlemleri nihai olarak gerçekleştiren kernel'ın kendisidir.

// Peki buffer nesneleri ne tür bir veri tutarlar?
// Node.js'deki bufferlar aslında nesnelerdir, ancak ham ikili verileri işlemek için optimize edilmiş özel bir nesne türüdür. Bir bufferdaki her byte (8bit) bir öğeyi temsil eder ve tek tek bytes erişebilir veya buffer'ı bir bütün olarak manipüle edebilirsiniz.

// Bufferlar, her bir elemanın bir veri byte'ını temsil ettiği tamsayı arrayleri olarak düşünülebilir. Bu tamsayılar genellikle bufferda saklanan ikili verileri temsil eden işaretsiz 8 bitlik tamsayılardır (0 ile 255 arasında değişen).

// Özetlemek gerekirse, bir bufferdaki her byte bir karakter olarak düşünülebilir.

// Bir bufferdaki bir dizi elemanına eriştiğinizde, doğrudan bellekte depolanan ham ikili verilerle çalışırsınız. Örneğin, 01010101 baytını (ondalık olarak 85) içeren bir bufferınız varsa, "85" veya "0x55" gibi metinsel veya 8lik 16lık gibi gösterimlerle değil, doğrudan bu byte tarafından temsil edilen "ikili verilerle" çalışırsınız.

// Ancak, bir bufferın içeriğini konsolda görüntülediğinizde veya bir string olarak çıktısını aldığınızda, onaltılık veya UTF-8 kodlu metin gibi çeşitli biçimlerde gösterilebilir. Yine de dahili olarak, bir buffer ham ikili verileri depolar ve aslında her karakter bu "ikili verilerin" tek bir byte'ını temsil eder.
