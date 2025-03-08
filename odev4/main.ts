/*
TypeScript Temelleri
	•	TypeScript kurulumu yap (npm install -g typescript).
	•	number, string, boolean, array, tuple, enum, any, void gibi veri türlerine örnekler yaz.
	•	Bir interface ve bir obje oluştur, ardından bu interface’i kullanarak TypeScript’in nasıl güvenli tip kontrolü yaptığını göster.
*/

let _number: number = 0;

let _string: string = "string";

let _bool: boolean = true;

let _array1: number[] = [1, 2, 3, 4, 5];
let _array2: Array<string> = ["string1", "string2", "string3"];

let _tuple: [string, number] = ["string", 10];

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let move: Direction = Direction.Left;

let _any: any = "Merhaba";
_any = 42;
_any = true;

function greet(): void {
  console.log("hello world");
}

//interface örneği

interface Person {
    name: string;
    surname: string;
    age: number;
}

const person: Person = {
  name: "Deniz",
  surname: "Özaltay",
  age: 21
};
