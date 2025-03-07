/* 
    Koşullar ve Döngüler (JavaScript)
	•	Bir sayı al ve bunun pozitif mi, negatif mi, yoksa sıfır mı olduğunu ekrana yazdır.
	•	for, while ve do-while döngülerini kullanarak 1’den 10’a kadar olan sayıları ekrana yazdır.
	•	Kullanıcıdan alınan bir sayının asal olup olmadığını kontrol eden bir fonksiyon yaz.
*/

// sayı pozitif mi negatif mi sıfır mı
let num1 = prompt("sayı giriniz");

if(num1 > 0) {
    alert("sayı sıfırdan büyük");
} 
else if(num1 > 0) {
    alert("sayı sıfırdan küçük");
} 
else {
    alert("sayı sıfıra eşit");
}

//for dögüsü
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// while döngüsü
let j = 1;
while(j <= 10) {
    console.log(i);
    j++;
}

//do while dögüsü
let k = 0;
do {
    k++
    console.log(i);
} while (k < 10)

//asal sayı fonksiyonu
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(4));
