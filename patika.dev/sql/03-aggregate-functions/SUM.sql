-- SQL SUM() Fonksiyonu : SUM() fonksiyonu, sayısal bir sütunun toplamını döndürür.
SELECT SUM(Quantity) FROM OrderDetails;

-- Syntax
SELECT SUM(column_name)
FROM table_name
WHERE condition;

-- Virgülden sonra kaç basamak
SELECT ROUND(SUM(amount), 1) AS Toplam FROM payment;

-- Group By
SELECT staff_id, SUM(amount) FROM payment
GROUP BY staff_id;

-- Bir ifade ile SUM()
SELECT staff_id, SUM(amount * 0.05) AS Promototion_to_staff, SUM(amount) AS Total_Earn FROM payment
GROUP BY staff_id;