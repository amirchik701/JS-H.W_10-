let table = document.querySelector('.table');

let amountBoxes = 621;


for (let i = 0; i < amountBoxes; i++) {
    let box = document.createElement('div')
    box.classList.add('box');

    table.append(box)

    box.addEventListener('mouseenter', () => setColor(box))
    box.addEventListener('mouseleave', () => removeColor(box))

}

let arr = ['pink', 'green', 'purple', 'yellow', 'red', 'blue']


function setColor(item) {
    item.style = `background: rgb(${randColor()}, ${randColor()}, ${randColor()});`
    // item.style = `background: green;`
}


function removeColor(item) {
    item.style = `background: '';`
}


function randColor() {
  // Получаю красный, зеленый и синий компоненты из координат мыши
  let randomNumber = Math.floor(Math.random() * 255 + 1) ;
  return randomNumber
}

/* innerWidth возвращает внутреннюю ширину окна в пикселях. Это включает в себя ширину вертикальной полосы прокрутки, если она присутствует. */
/* Math.floor() метод всегда округляет в меньшую сторону и возвращает наибольшее целое число, меньшее или равное заданному числу. */