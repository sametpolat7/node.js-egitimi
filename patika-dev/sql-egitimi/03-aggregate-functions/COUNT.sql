-- COUNT() işlevi, belirtilen bir ölçütle eşleşen satır sayısını döndürür.

SELECT COUNT(*) FROM Products;

-- Syntax
SELECT COUNT(column_name) FROM table_name
WHERE condition;

-- Özel Sütun : Asteriks sembolü (*) yerine bir sütun adı belirtebilirsiniz. (*) yerine bir sütun adı belirtirseniz, NULL değerler sayılmayacaktır.
SELECT COUNT(ProductName) FROM Products;

-- Yinelemeleri Yoksay : COUNT() işlevinde DISTINCT anahtar sözcüğünü kullanarak yinelenenleri yok sayabilirsiniz. DISTINCT belirtilirse, belirtilen sütun için aynı değere sahip satırlar bir olarak sayılır.
SELECT COUNT(DISTINCT Price) FROM Products;