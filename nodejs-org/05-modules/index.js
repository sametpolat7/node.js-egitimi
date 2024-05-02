// Node-API ve Non-Node-API

// Xbox ve PlayStation gibi farklı konsollarda oynamayı sevdiğiniz harika bir video oyununuz olduğunu hayal edin. Şimdi, Node-API'yi hiçbir şeyi değiştirmenize gerek kalmadan oyununuzun her iki konsolda da çalışmasını sağlayan sihirli bir büyü olarak düşünün! Oyununuzu sadece bir kez yazarsınız ve ister en yeni Xbox ister eski bir PlayStation olsun, her konsolda sorunsuz çalışır.

// Ancak bazen, oyun geliştiricileri oyunlarının sadece bir konsol için özel versiyonlarını yapmak isterler. Sanki sadece o konsolda çalışan bazı gizli seviyeler veya harika özellikler eklemek istiyorlarmış gibi. İşte Node-API olmayan sürüm böyle bir şeydir. Oyunun özel olarak tek bir konsol için tasarlanmış özel bir versiyonudur, tıpkı sadece en yeni Xbox için süper süper grafiklere sahip bir versiyon yapmak gibi.

// Yani, Node-API oyununuzun her yerde çalışmasını sağlayan evrensel bir dil gibidir, Node-API olmayan bir sürüm ise diğer konsollarda çalışmayabilecek ekstra zil ve ıslıklarla sadece bir konsol için yapılmış özel bir sürüm gibidir.

// How to publish a Node-API version of a package alongside a non-Node-API version

// Kodunuzu Hazırlayın: Öncelikle, paketinizi Node-API sürümünü Node-API olmayan sürümden ayıracak şekilde yazdığınızdan emin olun. Bunları projenizdeki farklı klasörlerde veya dallarda organize edin.

// package.json dosyasını güncelleyin: package.json dosyanızda, paketinizin her iki sürümünü de belirtmeniz gerekir. Bunu, "main" ve "exports" alanlarını kullanarak her sürüm için farklı giriş noktaları tanımlayarak yapabilirsiniz. Örneğin:

/*
{
    "name": "your-package",
    "version": "1.0.0",
    "main": "lib/main.js", // Entry point for non-Node-API version
    "exports": {
      ".": {
        "node": "./lib/main.node", // Entry point for Node-API version
        "default": "./lib/main.js" // Fallback for non-Node-API version
      }
    },
    // Other package details...
}
*/

// Node-API Sürümünüzü Oluşturun (gerekirse): Node-API sürümünüz derleme veya derleme gerektiriyorsa (örneğin TypeScript veya C++ kullanıyorsanız), yayınlamadan önce derlediğinizden emin olun. Gerekli dosyaları oluşturmak için bir derleme komut dosyası çalıştırmanız gerekebilir.

// Test etme: Yayınlamadan önce, beklendiği gibi çalıştıklarından emin olmak için paketinizin her iki sürümünü de kapsamlı bir şekilde test etmek çok önemlidir. Uyumluluğu doğrulamak için farklı Node.js sürümlerinde test ettiğinizden emin olun.

// Dokümantasyon: Paketinizin her iki sürümü için de anlaşılır belgeler yazın. Node-API ve Node-API olmayan sürümler arasındaki farkları açıklayın ve her biri için kullanım örnekleri sağlayın.

// Yayınlama: Yayınlamaya hazır olduğunuzda, paketinizi kayıt defterinde yayınlamak için npm veya tercih ettiğiniz paket yöneticisini kullanın. Yayınlanan pakete her iki sürümü de eklediğinizden emin olun.

// Sürüm Yönetimi: Paketinizi geliştirmeye devam ederken, her iki sürümdeki güncellemeleri ve değişiklikleri takip edin. Kullanıcıların yükseltme yaparken sorunsuz bir deneyim yaşamalarını sağlamak için Node-API ve Node-API olmayan sürümler arasında tutarlılığı koruyun.
