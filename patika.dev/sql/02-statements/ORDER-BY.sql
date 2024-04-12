-- ORDER BY anahtar sözcüğü, sonuç kümesini artan veya azalan sırada sıralamak için kullanılır.

SELECT * FROM Products
ORDER BY Price;

-- Syntax
SELECT sütun1, sütun2, ...
FROM tablo_adi
ORDER BY sütun1, sütun2, ... ASC|DESC;

-- DESC : ORDER BY anahtar sözcüğü, varsayılan olarak kayıtları ASC (artan) sırada sıralar. Kayıtları DESC (azalan) sırada sıralamak için DESC anahtar sözcüğünü kullanın.

SELECT * FROM Products
ORDER BY Price DESC;

-- ASC : Kayıtları ASC (artan) sırada sıralar.

-- Alfabetik Olarak Sırala
SELECT * FROM Products
ORDER BY ProductName;

-- Alfabetik olarak DESC : Alfabetik olarak ters sıralama
SELECT * FROM Products
ORDER BY ProductName DESC;

-- ORDER BY Birkaç Sütun
-- Aşağıdaki SQL deyimi "Customers" tablosundaki tüm müşterileri "Country" ve "CustomerName" sütununa göre sıralayarak seçer. Bu, Ülkeye göre sıraladığı anlamına gelir, ancak bazı satırlar aynı Ülkeye sahipse, bunları CustomerName'e göre alfabetik sıralar:
SELECT * FROM Customers
ORDER BY Country, CustomerName;

-- Hem ASC hem de DESC Kullanma
-- Aşağıdaki SQL deyimi, "Customers" tablosundaki tüm müşterileri, "Country" sütununa göre artan ve "CustomerName" sütununa göre azalan şekilde sıralayarak seçer:
SELECT * FROM Customers
ORDER BY Country ASC, CustomerName DESC;


-- LIMIT
-- Şöyle bir senaryo üzerine düşünelim. dvdrental veritabanında bulunan film tablosundan B ile başlayan filmleri uzunluklarına göre en uzun olan 10 filmi sıralayalım.

SELECT * FROM film
WHERE title LIKE 'B%'
ORDER BY length DESC
LIMIT 10;

-- Yukarıdaki sorgumuzda da görmüş olduğunuz gibi önce koşullamayı, sonra gruplamayı en son ise LIMIT kullanarak istediğimiz veri sayısını belirttik.

-- OFFSET
-- Bazı durumlarda sonuç olarak gördüğümüz veri grubu içerisinden bazılarını "pass" geçmek isteriz. Yukarıdaki senaryomuzu tekrar düşünelim, dvdrental veritabanında bulunan film tablosundan B ile başlayan filmleri uzunluklarına göre sıralayalım ancak en uzun 6 filmi "pass" geçelim ve sonrasındaki 4 filmi sıralayalım. Bu durumda LIMIT 4 ve OFFSET 6 olacak.

SELECT * FROM film
WHERE title LIKE 'B%'
ORDER BY length DESC
OFFSET 6
LIMIT 4;