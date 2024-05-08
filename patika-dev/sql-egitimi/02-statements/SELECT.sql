-- SELECT deyimi, bir veritabanından veri seçmek için kullanılır.

SELECT CustomerName, City FROM Customers;

-- Syntax
SELECT column1, column2, ...
FROM table_name;

-- Burada, sütun1, sütun2, ... içinden veri seçmek istediğiniz tablonun alan adlarıdır (field names). table_name, içinden veri seçmek istediğiniz tablonun adını temsil eder.

-- Her sütun adını belirtmeden tüm sütunları döndürmek istiyorsanız SELECT * sözdizimini kullanabilirsiniz:
SELECT * FROM Customers;

-- Bir tablo içinde, bir sütun genellikle birçok yinelenen değer içerir; ve bazen yalnızca farklı (distinct) değerleri listelemek istersiniz. SELECT DISTINCT deyimi yalnızca farklı (distinct) değerleri döndürmek için kullanılır.
SELECT DISTINCT Country FROM Customers;

-- COUNT adlı bir fonksiyonda DISTINCT anahtar sözcüğünü kullanarak, farklı ülkelerin sayısını döndürebiliriz.
SELECT COUNT(DISTINCT Country) FROM Customers;
