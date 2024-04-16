-- EXCEPT Kullanımı : bookstore veritabanında iki adet sorgu yapıyoruz. İlk sorgumuzda sayfa sayısı en fazla olan 5 kitabı, ikinci sorgumuzda ise isme göre 5 kitabı sıralıyoruz. EXCEPT anahtar kelimesi sayesinde ilk sorguda olup ancak ikinci sorguda olmayan verileri gösterir.

-- EXCEPT operatörü kullanılacağı sorguların, sütun sayıları eşit olmalıdır ve sütunlardaki veri tipleri eşleşmelidir.

-- EXCEPT Söz Dizimi
SELECT <sütun_adi>, <sütun_adi>... FROM <table1>
EXCEPT
SELECT <sütun_adi>, <sütun_adi>...
FROM <table2>

-- EXCEPT ALL : EXCEPT operatörü bize ilk sorguda olan ancak ikinci sorguda olmayan veriler içerisindeki tekrar edenleri göstermez. Tekrar edenleri görmek için EXCEPT ALL kullanırız.