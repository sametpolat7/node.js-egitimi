-- SQL DELETE Deyimi : DELETE deyimi, bir tablodaki mevcut kayıtları silmek için kullanılır.
DELETE FROM table_name WHERE condition;

-- Not: Bir tablodaki kayıtları silerken dikkatli olun! DELETE deyimindeki WHERE cümlesine dikkat edin. WHERE cümlesi hangi kayıt(lar)ın silinmesi gerektiğini belirtir. WHERE cümlesini atlarsanız, tablodaki tüm kayıtlar silinecektir!

DELETE FROM author
WHERE birthday IS NULL;

-- Tüm verileri silmek: Bir tablodaki tüm satırları tabloyu silmeden silmek mümkündür. Bu, tablo yapısının, özniteliklerin ve dizinlerin bozulmayacağı anlamına gelir:
DELETE FROM author;

-- Tabloyu tamemen silmek için ise: 
DROP TABLE author;