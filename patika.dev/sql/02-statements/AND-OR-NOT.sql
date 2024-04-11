-- AND : WHERE cümlesi bir veya daha fazla AND operatörü içerebilir. AND operatörü, kayıtları birden fazla koşula göre filtrelemek için kullanılır; örneğin İspanya'dan 'G' harfiyle başlayan tüm müşterileri döndürmek istiyorsanız:
SELECT * FROM Customers
WHERE Country = 'SPAIN' AND CustomerName LIKE 'G%';

-- Aşağıdaki SQL deyimi, Ülke "Almanya" VE Şehir "Berlin" VE PostaKodu 12000'den büyük olan Müşteriler'den tüm alanları seçer:
SELECT * FROM Customers
WHERE Country = 'GERMANY' AND City = 'Berlin' AND PostalCode > 12000

-- VE ve VEYA'nın birleştirilmesi
-- AND ve OR operatörlerini birleştirebilirsiniz. Aşağıdaki SQL deyimi İspanya'dan "G" veya "R" ile başlayan tüm müşterileri seçer. Doğru sonucu elde etmek için parantez kullandığınızdan emin olun:
SELECT * FROM Customers
WHERE Country = 'Spain' AND (CustomerName LIKE 'G%' OR CustomerName LIKE 'R%');

-- Not: Parantez olmadan select deyimi, ülke değerine bakılmaksızın İspanya'dan "G" ile başlayan tüm müşterileri ve "R" ile başlayan tüm müşterileri döndürür: "AND başında ve sonundaki iki koşulu bağlarken, OR yeni bir query başlatır" bu alıntının ne demek istediğini hatırla!


-- OR 
-- WHERE cümlesi bir veya daha fazla OR operatörü içerebilir. OR operatörü, kayıtları birden fazla koşula göre filtrelemek için kullanılır; örneğin Almanya'daki tüm müşterilerin yanı sıra İspanya'dakileri de döndürmek istiyorsanız:
SELECT * FROM Customers
WHERE Country = 'Spain' OR Country = 'Germany';

-- En Az Bir Koşul Doğru Olmalıdır. Aşağıdaki SQL deyimi, Şehir "Berlin", MüşteriAdı "G" harfiyle başlayan veya Ülke "Norveç" olan Müşteriler'deki tüm alanları seçer:
SELECT * FROM Customers
WHERE City = 'Berlin' OR CustomerName LIKE 'G%' OR Country = 'Norway';

-- VE ve VEYA'nın birleştirilmesi
-- AND ve OR operatörlerini birleştirebilirsiniz. Aşağıdaki SQL deyimi İspanya'dan "G" veya "R" ile başlayan tüm müşterileri seçer. Doğru sonucu elde etmek için parantez kullandığınızdan emin olun.
SELECT * FROM Customers
WHERE Country = 'Spain' AND (CustomerName LIKE 'G%' OR CustomerName LIKE 'R%')

-- NOT
-- NOT operatörü, negatif sonuç olarak da adlandırılan ters sonucu vermek için diğer operatörlerle birlikte kullanılırAşağıdaki select deyiminde İspanya'dan OLMAYAN tüm müşterileri döndürmek istiyoruz:
SELECT * FROM Customers
WHERE NOT Country = 'Spain';