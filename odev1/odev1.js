/*  
    Değişkenler ve Veri Tipleri (JavaScript)
	•	let, const, var arasındaki farkları araştır ve her biriyle birer örnek yaz.
	•	Şu veri türlerinde değişkenler oluştur ve her birini typeof ile ekrana yazdır:
	•	String, Number, Boolean, Undefined, Null, Object, Array, Function.
	•	Kullanıcıdan prompt ile iki sayı alıp, bunların toplamını alert ile göster.
 */ 

//let: es6 ile gelen modern değişken sadece tanımlandığı blok içinde kullanılabilir
let num1 = 15;
//const: programın hiç bir yerinde değiştirilemeyen sabit değişken
const num2 = 15;
//var: eski tip değişken. üst bloklar tarafındanda değiştirilebilir
var num3 = 15;

let meyve = "armut";
if (true) {
    let meyve = "elma"; // bu değişken sadece bu if bloğu içindir o yüzden if bloğunun dışına çıkınca değşkenimiz armut olmaya devam eder
    console.log(meyve);
}
console.log(meyve);

var meyve2 = "armut";
if (true) {
    var meyve2 = "elma"; // var ile tanımladığım için scope dışındaki meyve2 değişkenide değişti
    console.log(meyve2);
}
console.log(meyve2);

let _string = "string";
let _number = 0;
let _boolean = true;
let _undefined;
let _null = null;
let _object = {name: "Deniz", surname: "Özaltay"};
let _array = [];
let _function = () => {};

let veriTurleri = [_string, _number, _boolean, _undefined, _null, _object, _array, _function];

for (const variable of veriTurleri) {
    console.log(typeof(variable));
}
/* 
çıktı:
    string
    number
    boolean
    undefined
    object null obje olarak algılanır javascriptte 
    object
    object array de obje olarak algılanır
    function
*/

var sayi1 = prompt("1.sayı");
var sayi2 = prompt("2.sayı");

alert(`toplam=${parseInt(sayi1) + parseInt(sayi2)}`);