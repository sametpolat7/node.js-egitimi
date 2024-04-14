-- RIGHT JOIN anahtar sözcüğü, sağ tablodaki (tablo2) tüm kayıtları ve sol tablodaki (tablo1) eşleşen kayıtları döndürür. Eşleşme yoksa sonuç sol taraftan 0 kayıt olur.
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;

-- Not: RIGHT JOIN anahtar sözcüğü, sol tabloda (Orders) hiçbir eşleşme olmasa bile sağ tablodaki (Employees) tüm kayıtları döndürür.