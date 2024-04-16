-- JOIN cümlesi, aralarındaki ilgili bir sütuna dayalı (FOREIGN KEY ancak şart değildir!) olarak iki veya daha fazla tablodaki satırları birleştirmek için kullanılır. Daha sonra her iki tabloda da eşleşen değerlere sahip kayıtları seçen aşağıdaki SQL deyimini (INNER JOIN içeren) oluşturabiliriz:

SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;

-- Tips: FROM Orders ifadesi ile INNER JOIN Customers ifadesindeki tablo adları birleştirilmesi istenen tabloların herhangi biri olabilirdi. Yani FROM Customers ve INNER JOIN Orders gibi. ikisi aynı sonucu verecektir.


-- INNER JOIN : Her iki tabloda da eşleşen değerlere sahip kayıtları seçer.
SELECT Products.ProductName, Products.Unit, Categories.CategoryName, Categories.Description FROM Products
INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;

-- SQL deyiminde sütunları belirtirken tablo adını dahil etmek iyi bir uygulamadır.

-- JOIN ve INNER JOIN aynı sonucu döndürecektir. INNER, JOIN için varsayılan birleştirme türüdür, bu nedenle JOIN yazdığınızda ayrıştırıcı aslında INNER JOIN yazar.

-- Not: INNER JOIN anahtar sözcüğü yalnızca her iki tabloda da eşleşen satırları döndürür. Bu da, CategoryID'si olmayan veya Categories tablosunda bulunmayan bir CategoryID'ye sahip bir ürününüz varsa, bu kaydın sonuçta döndürülmeyeceği anlamına gelir.


