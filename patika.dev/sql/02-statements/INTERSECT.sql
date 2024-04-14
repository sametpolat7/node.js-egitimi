-- INTERSECT operatörü sayesinde farklı SELECT sorgularıyla oluşan sonuçların kesişen verilerini tek bir sonuç kümesi haline getiririz.

-- INTERSECT Kullanımı : bookstore veritabanında iki adet sorgu yapıyoruz. İlk sorgumuzda sayfa sayısı en fazla olan 5 kitabı, ikinci sorgumuzda ise isme göre 5 kitabı sıralıyoruz. INTERSECT anahtar kelimesi sayesinde bu iki sorgu sonucunda oluşan veri kümelerinden kesişen verileri tek bir sonuçta birleştiririz.

( SELECT * FROM book)
INTERSECT
(SELECT * FROM book);

-- INTERSECT operatörü kullanılacağı sorguların, sütun sayıları eşit olmalıdır ve sütunlardaki veri tipleri eşleşmelidir.

-- INTERSECT Söz Dizimi
SELECT <sütun_adi>, <sütun_adi>... FROM <table1>
INTERSECT
SELECT <sütun_adi>, <sütun_adi>...
FROM <table2>