-- Aşağıdaki SQL deyimi, hem "Customers" hem de "Suppliers" tablosundan şehirleri (yalnızca farklı değerleri) döndürür:
SELECT City FROM Customers
UNION
SELECT City FROM Suppliers
ORDER BY City;

-- Not: Customers ve Suppliers aynı şehre sahipse, UNION yalnızca farklı değerleri seçtiği için her şehir yalnızca bir kez listelenecektir. Yinelenen değerleri de seçmek için UNION ALL kullanın!

