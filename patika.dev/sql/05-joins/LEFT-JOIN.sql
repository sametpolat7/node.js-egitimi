-- LEFT JOIN anahtar sözcüğü, sol tablodaki (tablo1) tüm kayıtları ve sağ tablodaki (tablo2) eşleşen kayıtları döndürür. Eşleşme yoksa, sonuç sağ taraftan 0 kayıttır.
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;

-- Not: LEFT JOIN anahtar sözcüğü, sağ tabloda (Orders) hiçbir eşleşme olmasa bile sol tablodaki (Customers) tüm kayıtları döndürür.
