"use strict";
let sum = 0;
for (let i = 1; i < 50; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum);
function carpim_tablosu(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num}x${i}=${num * i}`);
    }
}
carpim_tablosu(7);
