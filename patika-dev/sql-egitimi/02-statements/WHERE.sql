-- WHERE cümlesi kayıtları filtrelemek için kullanılır. Yalnızca belirli bir koşulu karşılayan kayıtları ayıklamak için kullanılır.

SELECT * FROM Customers
WHERE Country='Mexico';

-- Not: WHERE cümlesi yalnızca SELECT deyimlerinde değil, UPDATE, DELETE vb. deyimlerde de kullanılır!

-- Operators
--| = Eşit
--| > Büyüktür
--| < Küçüktür
--| >= Büyük veya eşit
--| <= Daha az veya eşit
--| <> Eşit değil. Not: SQL'in bazı sürümlerinde bu işleç != olarak yazılabilir
--| BETWEEN Belirli bir aralık arasında.
--| LIKE Bir pattern arayın. (~~)
--| ILIKE Case-sensetive olmayan bir pattern arayın. (~~*)
--| IN Bir sütun için birden fazla olası değer belirtmek için.

SELECT * FROM Customers
WHERE CountryID = 1;

SELECT * FROM Customers
WHERE CountryID > 1;

SELECT * FROM Customers
WHERE CountryID < 1;

SELECT * FROM Customers
WHERE CountryID >= 1;

SELECT * FROM Customers
WHERE CountryID <= 1;

SELECT * FROM Customers
WHERE CountryID <> 1;

SELECT * FROM Customers
WHERE CountryID BETWEEN 1 AND 4;

SELECT * FROM Customers
WHERE CountryID LIKE 's%';

SELECT * FROM Customers
WHERE CityName IN ('Berlin', 'London');

-- Not: 
-- Wildcard (%): herhangi bir karakter dizisiyle eşleşir.
-- Örneğin:
-- LIKE 'Jo%', "Jo" ile başlayan tüm dizelerle eşleşir.
-- LIKE '%son%', içinde herhangi bir yerinde "son" geçen tüm dizelerle eşleşir.
-- LIKE '%son', "son" ile biten herhangi bir dizeyle eşleşir.

-- Single-character wildcard (_): herhangi bir tek karakterle eşleşir.
-- Örneğin:
-- LIKE 'J_an', "Jean" veya "Joan" gibi ikinci ila dördüncü karakterlerin "J_an" olduğu dört karakterli herhangi bir dizeyle eşleşir.