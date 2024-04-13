-- SQL CONSTRAINTS Oluşturma : Kısıtlamalar, tablo CREATE TABLE deyimiyle oluşturulduğunda veya tablo ALTER TABLE deyimiyle oluşturulduktan sonra belirtilebilir.
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    column3 datatype constraint,
    ....
);

--SQL Kısıtlamaları
-- SQL kısıtlamaları, bir tablodaki veriler için kurallar belirtmek için kullanılır. Kısıtlamalar, bir tabloya girebilecek veri türünü sınırlamak için kullanılır. Bu, tablodaki verilerin doğruluğunu ve güvenilirliğini sağlar. Kısıtlama ile veri eylemi arasında herhangi bir ihlal varsa, eylem iptal edilir.

-- Kısıtlamalar sütun düzeyinde veya tablo düzeyinde olabilir. Sütun düzeyindeki kısıtlamalar bir sütuna uygulanır ve tablo düzeyindeki kısıtlamalar tüm tabloya uygulanır.

-- Aşağıdaki kısıtlamalar SQL'de yaygın olarak kullanılır:

-- NOT NULL - Bir sütunun NULL değere sahip olamamasını sağlar
-- UNIQUE - Bir sütundaki tüm değerlerin farklı olmasını sağlar
-- PRIMARY KEY - NOT NULL ve UNIQUE kombinasyonudur. Bir tablodaki her satırı benzersiz olarak tanımlar
-- FOREIGN KEY - Tablolar arasındaki bağlantıları yok edecek eylemleri önler
-- CHECK - Bir sütundaki değerlerin belirli bir koşulu karşılamasını sağlar
-- DEFAULT - Herhangi bir değer belirtilmemişse sütun için varsayılan bir değer belirler
-- CREATE INDEX - Veritabanından çok hızlı bir şekilde veri oluşturmak ve almak için kullanılır.


-- NOT NULL: Varsayılan olarak, bir sütun NULL değerleri tutabilir. NOT NULL kısıtı, bir sütunun NULL değerleri kabul etmemesini zorunlu kılar. Bu, bir alanın her zaman bir değer içermesini zorunlu kılar; yani bu alana bir değer eklemeden yeni bir kayıt ekleyemez veya bir kaydı güncelleyemezsiniz.

-- CREATE TABLE
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    Age int
);

-- ALTER TABLE
ALTER TABLE team
ALTER COLUMN number SET NOT NULL;


-- UNIQUE : Kısıtı, bir sütundaki tüm değerlerin farklı olmasını sağlar. UNIQUE ve PRIMARY KEY kısıtlamalarının her ikisi de bir sütun veya sütun kümesi için benzersizlik garantisi sağlar. Bir PRIMARY KEY kısıtlaması otomatik olarak bir UNIQUE kısıtlamasına sahiptir. Ancak, tablo başına çok sayıda UNIQUE kısıtına sahip olabilirsiniz, ancak tablo başına yalnızca bir PRIMARY KEY kısıtına sahip olabilirsiniz.

-- CREATE TABLE
CREATE TABLE person (
  id SERIAL PRIMARY KEY, 
  first_name VARCHAR (50), 
  last_name VARCHAR (50), 
  email VARCHAR (50) UNIQUE
);

-- ALTER TABLE
ALTER TABLE Persons
ADD UNIQUE (ID);


-- PRIMARY KEY: PRIMARY KEY kısıtı, bir tablodaki her kaydı benzersiz bir şekilde tanımlar. Birincil anahtarlar UNIQUE değerler içermelidir ve NULL değerler içeremez. Bir tabloda yalnızca BİR birincil anahtar olabilir; ve tabloda bu birincil anahtar tek veya birden fazla sütundan (alandan) oluşabilir.

-- CREATE TABLE
CREATE TABLE table_name (
  column_1 data_type PRIMARY KEY, 
  column_2 data_type,
  …
);

-- ALTER TABLE
ALTER TABLE table_name 
ADD PRIMARY KEY (column_1);


-- CHECK: Kısıtlaması, bir sütuna yerleştirilebilecek değer aralığını sınırlamak için kullanılır. Bir sütun üzerinde CHECK kısıtlaması tanımlarsanız, bu sütun için yalnızca belirli değerlere izin verir. Bir tabloda CHECK kısıtlaması tanımlarsanız, satırdaki diğer sütunlardaki değerlere bağlı olarak belirli sütunlardaki değerleri sınırlayabilir.

-- CREATE TABLE
CREATE TABLE table_name(
   column1 datatype,
   column1 datatype CHECK(condition),
   ...,
);

-- ALTER TABLE 
ALTER TABLE tablo_adi
ADD CHECK (age>=18)