//array revert
const array = [5, 2, 100, 6, 10, 70];

const arrayRev = [];

for (let i = array.length; i > 0; i--) {
     arrayRev.push(array[i-1]);
}

// console.log(arrayRev)

//когда последний раз вызывалась функция
function closing() {
    let time = 0;
    
    return function counter() {
        alert(time)
        time = Date.now();
    }
}

let cl = closing();

cl();
cl();
