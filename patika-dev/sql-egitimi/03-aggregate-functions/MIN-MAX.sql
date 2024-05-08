-- MIN() fonksiyonu, seçilen sütunun en küçük değerini döndürür.
-- MAX() fonksiyonu, seçilen sütunun en büyük değerini döndürür.

SELECT MIN(Price)
FROM Products;

SELECT MAX(Price)
FROM Products;

-- Syntax
SELECT MIN(column_name)
FROM table_name
WHERE condition;

SELECT MAX(column_name)
FROM table_name
WHERE condition;

--Sütun Adını Ayarla (ALIAS) : MIN() veya MAX() kullandığınızda, döndürülen sütunun açıklayıcı bir adı olmayacaktır. Sütuna açıklayıcı bir ad vermek için AS anahtar sözcüğünü kullanın:
SELECT MIN(CustomerAge) AS SmallestAge FROM Customers;

-- GROUP BY ile MIN() kullanın : Burada, Products tablosundaki her kategori için en küçük fiyatı döndürmek üzere MIN() fonksiyonunu ve GROUP BY cümlesini kullanıyoruz:
SELECT rental_rate, MIN(length) FROM film
GROUP BY rental_rate;