-- SQL CREATE TABLE Deyimi : CREATE TABLE deyimi, bir veritabanında yeni bir tablo oluşturmak için kullanılır.
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);

-- Not only this way. You will see later.

CREATE TABLE team (
	person_id serial,
	jersey_no smallint,
	first_name varchar(20),
	last_name varchar(25),
	position varchar(25),
	age int
);

-- İpucu: Boş "Persons" tablosu artık SQL INSERT INTO deyimiyle verilerle doldurulabilir.

INSERT INTO team (jersey_no, first_name, last_name, position, age)
VALUES
	(1, 'Fernando', 'Muslera', 'GK', 36),
	(3, 'Viktor', 'Nelsson', 'DF', 25),
	(5, 'Abdulkerim', 'Bardakci', 'DF', 29),
	(6, 'Lucas', 'Torreira', 'MD', 28),
	(8, 'Sergio', 'Oliviera', 'MD', 27),
	(11, 'Hakim', 'Ziyech', 'LF', 32),
	(9, 'Mauro', 'Icardi', 'CF', 30),
	(17, 'Kerem', 'Akturkoglu', 'RF', 26);


-- Başka Bir Tablo Kullanarak Tablo Oluşturma : CREATE TABLE kullanılarak mevcut bir tablonun kopyası da oluşturulabilir.
-- Yeni tablo aynı sütun tanımlarını alır. Tüm sütunlar veya belirli sütunlar seçilebilir. Mevcut bir tabloyu kullanarak yeni bir tablo oluşturursanız, yeni tablo eski tablodaki mevcut değerlerle doldurulacaktır.
CREATE TABLE team2 AS
SELECT * FROM team;

-- Eğer yeni tabloda sadece sütun değerlerini (isimler ve veri tipleri) kullanmak istiyorsanız:
CREATE TABLE team3 AS
SELECT * FROM team2
WHERE false;

-- SQL DROP TABLE Deyimi : DROP TABLE deyimi, bir veritabanındaki mevcut bir tabloyu silmek için kullanılır.
DROP TABLE table_name;

-- Not: Bir tabloyu silmeden önce dikkatli olun. Bir tablonun silinmesi, tabloda depolanan tüm bilgilerin kaybolmasına neden olur!
DROP TABLE team3;

-- TRUNCATE TABLE deyimi bir tablonun içindeki verileri silmek için kullanılır, ancak tablonun kendisini silmez.
TRUNCATE TABLE team2;


-- SQL ALTER TABLE Deyimi : ALTER TABLE deyimi, mevcut bir tabloya sütun eklemek, silmek veya değiştirmek için kullanılır. ALTER TABLE deyimi, mevcut bir tabloya çeşitli kısıtlamalar eklemek ve kaldırmak için de kullanılır.

-- ALTER TABLE - ADD Column
ALTER TABLE table_name
ADD column_name datatype;

ALTER TABLE team
ADD lucky_number bigint;

-- ALTER TABLE - DROP COLUMN
ALTER TABLE table_name
DROP COLUMN column_name datatype;

ALTER TABLE team
DROP COLUMN lucky_number bigint;

-- ALTER TABLE - RENAME COLUMN
ALTER TABLE table_name
RENAME COLUMN old_name to new_name;

ALTER TABLE team
RENAME COLUMN jersey_no to number;

-- ALTER TABLE - ALTER COLUMN DATATYPE
ALTER TABLE table_name
ALTER COLUMN column_name TYPE datatype;

ALTER TABLE team
ALTER COLUMN age TYPE smallint;