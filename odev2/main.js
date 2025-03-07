/* 
    Fonksiyonlar ve Diziler (JavaScript)
	•	İki sayıyı toplayan bir fonksiyon yaz. (Hem normal fonksiyon hem de arrow function olarak yaz)
	•	Bir dizinin en büyük elemanını bulan fonksiyon yaz.
	•	Bir dizide belirli bir elemanın olup olmadığını bulan fonksiyon yaz.
*/

function toplama(num1, num2) {
    return num1 + num2;
}

let toplama2 = (num1, num2) => {
    return num1 + num2;
    };

console.log(toplama(10, 20));
console.log(toplama2(10, 20));

let arrayim = [14, 73, 28, 41, 67, 85, 32, 19, 51, 46, 96];

function enBuyukEleman(array) {
    let result = array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i] > result) {
            result = array[i];
        }
    }
    return result;
}

console.log(enBuyukEleman(arrayim));

function findTargetNumber(array, target) {
    for (const num of array) {
        if(num === target) {
            return true;
        }
    }
    return false;
}

console.log(findTargetNumber(arrayim, 51));
console.log(findTargetNumber(arrayim, 6));