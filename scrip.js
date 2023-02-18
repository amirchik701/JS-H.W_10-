// let table = document.querySelector('.table');

// let amountBoxes = 621;


// for (let i = 0; i < amountBoxes; i++) {
//     let box = document.createElement('div')
//     box.classList.add('box');

//     table.append(box)

//     box.addEventListener('mouseenter', () => setColor(box))
//     box.addEventListener('mouseleave', () => removeColor(box))

// }

// let arr = ['pink', 'green', 'purple', 'yellow', 'red', 'blue']


// function setColor(item) {
//     item.style = `background: rgb(${randColor()}, ${randColor()}, ${randColor()});`
//     // item.style = `background: green;`
// }


// function removeColor(item) {
//     item.style = `background: '';`
// }


// function randColor() {
//   // Получаю красный, зеленый и синий компоненты из координат мыши
//   let randomNumber = Math.floor(Math.random() * 255 + 1) ;
//   return randomNumber
// }

/* innerWidth возвращает внутреннюю ширину окна в пикселях. Это включает в себя ширину вертикальной полосы прокрутки, если она присутствует. */
/* Math.floor() метод всегда округляет в меньшую сторону и возвращает наибольшее целое число, меньшее или равное заданному числу. */











/* Для решения задач данного блока вам понадобятся следующие методы: concat. */

// let a = ['1', '2', '3'] ,
//     b = ['4', '5', '6']

//     let c = a.concat(b);
//     console.log(c);




/* Для решения задач данного блока вам понадобятся следующие методы: reverse. */
// let a = ['1', '2', '3'];
//  a.reverse();
// console.log(a);




/* Для решения задач данного блока вам понадобятся следующие методы: push, unshift. */
// let a = ['1', '2', '3']

// a.push('4', '5', '6')
// console.log(a);


//  let a = ['4', '5', '6']
//  a.unshift('1', '2', '3')
//  console.log(a);



/* Для решения задач данного блока вам понадобятся следующие методы: shift, pop. */
// let a = ['js', 'css', 'jq']
// let b = a.shift()
// console.log(b);

// let a = ['js', 'css', 'jq']
// let b = a.pop()
// console.log(b);

/* Для решения задач данного блока вам понадобятся следующие методы: slice. */

// let a = [1, 2, 3, 4, 5]
// let b = a.slice(0, 3)
// console.log(b);


// let a = [1, 2, 3, 4, 5]
// let b = a.slice(3, 6)
// console.log(b);



/* Для решения задач данного блока вам понадобятся следующие методы: splice. */

// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 2)
// console.log(arr);


// let arr = [1, 2, 3, 4, 5]
// let del = arr.splice(1, 3)
// console.log(del);


// let arr = [1, 2, 3, 4, 5];

// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);


let arr = [1, 2, 3, 4, 5]
let del = arr.splice(0, 'a',)
console.log(del);



