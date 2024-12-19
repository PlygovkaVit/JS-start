
                                                // ДЕПОЗИТНЫЙ КАЛЬКУЛЯТОР

// // let sum = +prompt("Укажите стартовую сумму", 1000);
// //         const persent = 15;
// //         const result = 2000;

// //         let count = 0;

// //         const depositTerm = +prompt("Укажите срок депозита", 10);

// //         while (count < depositTerm) {
// //             sum = sum + sum * (persent / 100);
// //             count = count + 1;
// //             document.write(count + ":" + sum + "<br>");
// //         }





                                                    // МОРСКОЙ БОЙ

//позиция коробля
const location1 = 3
const location2 = 4
const location3 = 5 


//потоплен или нет
let isSunk = false
// выстрел
let guess;
// добавляем счетчик попаданий
let hits = 0

while (isSunk === false) {
    // не забываем, что строку надо превратить в число  "=+promt"
    guess = +prompt ("Fire! Enter a number 0-6")
    // логическое или "||"
    if(guess === location1 || guess === location2 || guess === location3) {
        alert("HIT!")
        // считаем попадания
        hits = hits + 1
        // если подбили
        if(hits === 3) {
            isSunk = true
            alert("You sank my battleship")
        }
    } else {
        alert("MISS!")
    }
}