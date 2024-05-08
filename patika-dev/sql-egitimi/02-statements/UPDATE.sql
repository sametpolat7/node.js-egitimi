-- SQL UPDATE Deyimi: UPDATE deyimi, bir tablodaki mevcut kayıtları değiştirmek için kullanılır.
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

-- Not: Bir tablodaki kayıtları güncellerken dikkatli olun! UPDATE deyimindeki WHERE cümlesine dikkat edin. WHERE cümlesi hangi kayıt(lar)ın güncellenmesi gerektiğini belirtir. WHERE cümlesini atlarsanız, tablodaki tüm kayıtlar güncellenecektir!

UPDATE author
SET first_name = 'Gregory', last_name = 'Mendel', email = 'gregory@mendel.com', birthday = '1869-12-25'
WHERE id = 7;

-- PostgreSQL için güncellenen satır her zaman son satırda yer alır!

-- Çoklu Güncelleme: Kaç kaydın güncelleneceğini belirleyen WHERE cümlesidir.
UPDATE author
SET email = NULL
WHERE email IS NOT NULL;

-- Hatta WHERE anahtar kelimesini kullanmamaıza gerek bile yok. Eğer tüm sütunun değerinin değişmesini istiyorsanız koşul yazmak zorunda değilsiniz.