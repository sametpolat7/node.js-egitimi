-- SQL AVG() Fonksiyonu : AVG() fonksiyonu, sayısal bir sütunun ortalama değerini döndürür.

SELECT AVG(Price) FROM Products;

-- Not: NULL değerler göz ardı edilir.

-- Syntax
SELECT AVG(column_name) FROM table_name
WHERE condition;

-- AVG()
SELECT ROUND(AVG(length), 0) FROM film;

-- Higher than average
SELECT * FROM film
WHERE length > (SELECT AVG(length) FROM film)

-- GROUP BY
SELECT rental_rate, AVG(length) FROM film
GROUP BY rental_rate;