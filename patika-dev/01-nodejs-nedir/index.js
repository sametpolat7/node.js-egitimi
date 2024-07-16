const arguments = process.argv.slice(2);

function PrimeNumbers(firstNum, secondNum) {
  const primeNum = [];
  if (firstNum < secondNum) {
    for (let i = secondNum; i >= firstNum; i--) {
      let isPrime = true;
      for (let j = i - 1; j > 1; j--) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primeNum.push(i);
      }
    }
  } else {
    console.log('Baslangic sayisi, bitiş sayisindan buyuk olamaz!');
  }
  return console.log(primeNum);
}

PrimeNumbers(arguments[0] * 1, arguments[1] * 1);

// REPL
/**
$ node
Welcome to Node.js v14.18.3.
Type ".help" for more information.
> 2 + 3
5
> const message = 'Hello, world!'
undefined
> message
'Hello, world!'
> const square = (x) => x * x
undefined
> square(5)
25
 */

// Node.js REPL'i node yazarak başlatıyoruz.
// 2+3, const message = 'Hello, world!' ve const square = (x) => x * x gibi çeşitli JavaScript ifadeleri ve deyimleri giriyoruz.
// REPL her girdiyi değerlendirir ve sonucu yazdırır veya sonuç üretmeyen ifadeler için tanımsız çıktısı verir.
// Ctrl + C tuşlarına iki kez basarak veya .exit yazarak REPL'den çıkana kadar REPL'de etkileşimli olarak kod çalıştırmaya devam edebiliriz.
