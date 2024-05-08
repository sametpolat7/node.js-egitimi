-- GROUP BY deyimi, sonuç kümesini bir veya daha fazla sütuna göre gruplamak için genellikle toplama işlevleriyle (COUNT(), MAX(), MIN(), SUM(), AVG()) birlikte kullanılır.

-- Syntax
SELECT column_name(s) FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);

-- GROUP BY, DISTINCT ile benzeyebilir.
SELECT DISTINCT rental_rate FROM film

SELECT rental_rate FROM film
GROUP BY rental_rate;

-- Aynı sonucu verecektir. Veya bu
SELECT DISTINCT rental_rate, length FROM film

SELECT rental_rate, length FROM film
GROUP BY rental_rate, length;

-- Ancak aggregate function kullanma ihtiyacımız varsa, DISTINCT işe yaramayacaktır.
SELECT DISTINCT rental_rate, AVG(length) FROM film -- HATA VERİR!

-- GROUP BY kullanmamız gerekecektir.
SELECT rental_rate, AVG(length) FROM film
GROUP BY rental_rate;
