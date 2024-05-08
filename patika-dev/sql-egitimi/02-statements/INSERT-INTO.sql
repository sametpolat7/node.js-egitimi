-- INSERT INTO Deyimi : INSERT INTO deyimi bir tabloya yeni kayıtlar eklemek için kullanılır.

-- INSERT INTO deyimini iki şekilde yazmak mümkündür:

-- 1. Hem sütun adlarını hem de eklenecek değerleri belirtin:
INSERT INTO table_name (id, column1, column2 ...)
VALUES 
    (1, 'value1', 'value2' ...);

-- 2. Tablonun tüm sütunları için değer ekliyorsanız, SQL sorgusunda sütun adlarını belirtmenize gerek yoktur. Ancak, değerlerin sırasının tablodaki sütunlarla aynı sırada olduğundan emin olun. Burada, INSERT INTO sözdizimi aşağıdaki gibi olacaktır
INSERT INTO table_name
VALUES 
    (id, 'value1', 'value2');

-- Columns of author table: id, first_name, last_name, email, birthday

INSERT INTO author (first_name, last_name, email, birthday)
VALUES ('Maxim', 'Gorki', 'maxim@gorki.com', '1899-01-05');

-- Not: id sütunu 'serial' veri tipinde olduğunda girilmesine gerek yoktur!

-- Boş bırakma: Dilerseniz 'bazı' sütunları boş bırakabilirsiniz. Bu sütunlar 'null' olacaktır.
INSERT INTO author (first_name, last_name)
VALUES ('Evan', 'Ferguson');

-- Birden fazla satır ekleme: VALUES anahtar kelimesinden sonra (data), (data), (data); şeklinde çoklu veri ekleme işlemi uygulabilirsiniz.
INSERT INTO author (first_name, last_name, email, birthday)
VALUES
	('Carry', 'Boom', 'carry@boom.com', '1965-02-06'),
	('Addion', 'Bear', 'addie@bear.com', null),
	('Leroy', 'Cane', 'cane@lerry.com', '1998-09-01'),
	('Kelaynaque', 'Man', 'man@of.com', null);

-- NULL Değer Nedir? : NULL değeri olan bir alan, değeri olmayan bir alandır.
-- Bir tablodaki bir alan isteğe bağlıysa, bu alana bir değer eklemeden yeni bir kayıt eklemek veya bir kaydı güncellemek mümkündür. Bu durumda, alan NULL değeriyle kaydedilir.

-- NULL Değerler Nasıl Test Edilir? NULL değerleri =, < veya <> gibi karşılaştırma operatörleriyle test etmek mümkün değildir.

-- Bunun yerine IS NULL ve IS NOT NULL operatörlerini kullanmamız gerekecektir.
SELECT * FROM author
WHERE birthday IS NULL;