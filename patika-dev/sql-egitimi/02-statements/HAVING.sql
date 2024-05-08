-- HAVING,  WHERE anahtar sözcüğü gibi koşul bildirmek amacıyla SQL'e eklenmiştir. Ancak aralarında bazı farklar vardır:

-- WHERE aggregate fonksiyonlarını sonucuna göre koşullandırma yapamaz! Ne demek istiyorum:
SELECT rental_rate, AVG(length) FROM film
WHERE AVG(length) > 114
GROUP BY rental_rate
ORDER BY rental_rate; -- Bu sorgu hata verecektir.

-- Ancaaak: 
SELECT rental_rate, AVG(length) FROM film
GROUP BY rental_rate
HAVING AVG(length) > 114
ORDER BY rental_rate; -- Bu sorgu çalışır.

-- WHERE satır bazlı koşul uygularken, HAVING grup bazlı koşul uygular.