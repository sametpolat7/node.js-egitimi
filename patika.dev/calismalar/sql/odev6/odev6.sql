-- 1. film tablosunda bulunan rental_rate sütunundaki değerlerin ortalaması nedir?
SELECT ROUND(AVG(rental_rate), 2) AS rental_rate_avg FROM film;

-- 2. film tablosunda bulunan filmlerden kaç tanesi 'C' karakteri ile başlar?
SELECT COUNT(title) FROM film
WHERE title LIKE 'C%';

-- 3. film tablosunda bulunan filmlerden rental_rate değeri 0.99 a eşit olan en uzun (length) film kaç dakikadır?
SELECT MAX(length) AS "max_longest_of_0.99" FROM film
WHERE rental_rate = 0.99;

-- 4. film tablosunda bulunan filmlerin uzunluğu 150 dakikadan büyük olanlarına ait kaç farklı replacement_cost değeri vardır?
SELECT COUNT(DISTINCT replacement_cost) AS "number_of_different_replacement_cost_values" FROM film
WHERE length > 150;