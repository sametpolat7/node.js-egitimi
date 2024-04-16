-- SQL CREATE DATABASE Deyimi: CREATE DATABASE deyimi yeni bir SQL veritabanı oluşturmak için kullanılır.
CREATE DATABASE databasename;

CREATE DATABASE football_clup;

-- SQL DROP DATABASE Deyimi: DROP DATABASE deyimi, mevcut bir SQL veritabanını silmek için kullanılır.
DROP DATABASE databasename;

-- Not: Bir veritabanını bırakmadan önce dikkatli olun. Bir veritabanının silinmesi, veritabanında depolanan tüm bilgilerin kaybolmasına neden olur!

-- SQL BACKUP DATABASE Deyimi : BACKUP DATABASE deyimi SQL Server'da mevcut bir SQL veritabanının tam yedeğini oluşturmak için kullanılır.
BACKUP DATABASE databasename
TO DISK = 'filepath';

-- Tam Veritabanı Yedeklemesi: Bu, tüm veritabanının ilk yedeğidir. Yedeğin alındığı andaki tüm verileri ve şema nesnelerini (tablolar, dizinler, vb.) içerir.

-- Diferansiyel Yedekleme: Tam yedeklemeden sonra, diferansiyel yedeklemeler alabilirsiniz. Bu yedekler yalnızca son tam yedeklemeden bu yana değişen verileri içerir. Bu, son tam yedeklemeden bu yana veritabanında yapılan tüm değişiklikleri yakaladığı, ancak veritabanının tamamını yakalamadığı anlamına gelir.

-- Örneğin, Pazartesi günü veritabanınızın tam yedeğini aldıysanız ve ardından Çarşamba günü bir diferansiyel yedek aldıysanız, diferansiyel yedek Pazartesi ve Çarşamba günleri arasında veritabanında yapılan tüm değişiklikleri içerecektir.