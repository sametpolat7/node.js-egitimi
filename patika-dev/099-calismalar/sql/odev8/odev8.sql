-- 1. test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
CREATE TABLE employee (
	id integer PRIMARY KEY,
	name varchar(50) NOT NULL,
	birthday date,
	email varchar(100)
);

-- 2. Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
insert into employee (id, name, birthday, email) values (1, 'Spike', '1952-05-12', 'ssloegrave0@princeton.edu');
insert into employee (id, name, birthday, email) values (2, 'Marthena', '2003-04-06', 'mroyans1@princeton.edu');
insert into employee (id, name, birthday, email) values (3, 'Evin', '1980-09-01', 'ehardwich2@jugem.jp');
insert into employee (id, name, birthday, email) values (4, 'Baxy', '1959-10-18', 'bbarrell3@wufoo.com');
insert into employee (id, name, birthday, email) values (5, 'Rafe', '1967-10-31', 'rduncan4@globo.com');
insert into employee (id, name, birthday, email) values (6, 'Jakob', '1965-08-09', 'jmckeaney5@dailymotion.com');
insert into employee (id, name, birthday, email) values (7, 'Wayne', '1956-02-06', 'wtomalin6@vinaora.com');
insert into employee (id, name, birthday, email) values (8, 'Brigid', '1951-05-22', 'bsailor7@marketwatch.com');
insert into employee (id, name, birthday, email) values (9, 'Hale', '1977-08-19', 'hetchells8@prweb.com');
insert into employee (id, name, birthday, email) values (10, 'Georgeanna', '1976-02-17', 'gglanz9@huffingtonpost.com');
insert into employee (id, name, birthday, email) values (11, 'Rayshell', '2002-09-08', 'rspottiswooda@nytimes.com');
insert into employee (id, name, birthday, email) values (12, 'Julieta', '1997-12-04', 'jsailb@facebook.com');
insert into employee (id, name, birthday, email) values (13, 'Trumaine', '1962-12-10', 'tkienleinc@timesonline.co.uk');
insert into employee (id, name, birthday, email) values (14, 'Rene', '1967-11-08', 'rgerbd@technorati.com');
insert into employee (id, name, birthday, email) values (15, 'Delmore', '2001-06-18', 'dchittleburghe@example.com');
insert into employee (id, name, birthday, email) values (16, 'Candace', '1966-07-29', 'cmassonf@economist.com');
insert into employee (id, name, birthday, email) values (17, 'Bevan', '2003-10-07', 'bchamberlaineg@wix.com');
insert into employee (id, name, birthday, email) values (18, 'Rosamond', '1989-12-02', 'rrimmingtonh@icq.com');
insert into employee (id, name, birthday, email) values (19, 'Zelma', '1969-05-29', 'zbaxstari@newsvine.com');
insert into employee (id, name, birthday, email) values (20, 'Odette', '1957-10-22', 'obardeyj@lycos.com');
insert into employee (id, name, birthday, email) values (21, 'Constantine', '1951-02-13', 'ccorrok@fema.gov');
insert into employee (id, name, birthday, email) values (22, 'Gail', '1961-04-25', 'gvintonl@people.com.cn');
insert into employee (id, name, birthday, email) values (23, 'Angele', '1969-06-19', 'acallm@slideshare.net');
insert into employee (id, name, birthday, email) values (24, 'Cross', '2000-12-23', 'cpagelsenn@sun.com');
insert into employee (id, name, birthday, email) values (25, 'Salomi', '1972-08-23', 'sleggingo@dedecms.com');
insert into employee (id, name, birthday, email) values (26, 'Vania', '1952-09-15', 'vtookp@usda.gov');
insert into employee (id, name, birthday, email) values (27, 'Stacy', '1967-10-30', 'sjordanq@jigsy.com');
insert into employee (id, name, birthday, email) values (28, 'Aggy', '1963-10-03', 'ageekinr@zimbio.com');
insert into employee (id, name, birthday, email) values (29, 'Clark', '2001-04-16', 'cecless@uiuc.edu');
insert into employee (id, name, birthday, email) values (30, 'Xymenes', '2004-02-24', 'xsandersont@bigcartel.com');
insert into employee (id, name, birthday, email) values (31, 'Heida', '1972-10-23', 'hpechaceku@buzzfeed.com');
insert into employee (id, name, birthday, email) values (32, 'Prentiss', '1991-12-02', 'podoneganv@domainmarket.com');
insert into employee (id, name, birthday, email) values (33, 'Garland', '1967-12-18', 'gwilshaww@bandcamp.com');
insert into employee (id, name, birthday, email) values (34, 'Filmer', '1975-02-17', 'fhurringx@youtu.be');
insert into employee (id, name, birthday, email) values (35, 'Husain', '1982-07-04', 'hlythgoey@is.gd');
insert into employee (id, name, birthday, email) values (36, 'Amalie', '1950-12-16', 'atrobeyz@chicagotribune.com');
insert into employee (id, name, birthday, email) values (37, 'Marge', '1954-08-28', 'mburhouse10@odnoklassniki.ru');
insert into employee (id, name, birthday, email) values (38, 'Berta', '1958-12-29', 'bbindin11@goodreads.com');
insert into employee (id, name, birthday, email) values (39, 'Farr', '1989-08-10', 'ftownrow12@1688.com');
insert into employee (id, name, birthday, email) values (40, 'Laurie', '2003-12-31', 'lmelly13@state.tx.us');
insert into employee (id, name, birthday, email) values (41, 'Ingeberg', '1993-02-05', 'ipaike14@ezinearticles.com');
insert into employee (id, name, birthday, email) values (42, 'Trueman', '1982-11-26', 'trowena15@forbes.com');
insert into employee (id, name, birthday, email) values (43, 'Carlen', '1987-04-08', 'cwebbbowen16@sphinn.com');
insert into employee (id, name, birthday, email) values (44, 'Forster', '1966-03-08', 'fguihen17@baidu.com');
insert into employee (id, name, birthday, email) values (45, 'Melody', '1976-03-05', 'mdeehan18@ebay.com');
insert into employee (id, name, birthday, email) values (46, 'Nari', '1953-10-30', 'nitzkowicz19@jiathis.com');
insert into employee (id, name, birthday, email) values (47, 'Willem', '1962-12-13', 'wbuck1a@hubpages.com');
insert into employee (id, name, birthday, email) values (48, 'Jen', '1976-02-12', 'jderges1b@163.com');
insert into employee (id, name, birthday, email) values (49, 'Gianni', '1985-05-14', 'gboate1c@go.com');
insert into employee (id, name, birthday, email) values (50, 'Stoddard', '1977-09-17', 'skennagh1d@mapy.cz');

-- 3. Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
UPDATE employee
SET name = 'Spiker'
WHERE name = 'Spike';

-- 4. Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
DELETE FROM employee
WHERE name = 'Spiker';