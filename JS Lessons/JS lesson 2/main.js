

// let userChoice
// let computerChoice
// let isWinner = false


// while (!isWinner) {
//     userChoice = prompt("Выбери камень, ножницы или бумага:")
// userChoice = userChoice.toLowerCase()
// console.log(userChoice)


// let randomNum = Math.floor(Math.random() * 3)

// if (randomNum === 0) {
//     computerChoice = "камень"
// } else if (randomNum === 1) {
//     computerChoice = "ножницы"
// } else {
//     computerChoice = "бумага"
// }

// if (userChoice === "камень" || userChoice === "ножницы" || userChoice === "бумага") {
//     alert (`Компьютер выбрал: ${computerChoice}`)
//     if(userChoice === computerChoice) {
//         alert("Ничья, играем еще раз")
//     } else if ( (userChoice === "камень" && computerChoice === "ножницы") || 
//                 (userChoice === "ножницы" && computerChoice === "бумага") ||
//                 (userChoice === "бумага" && computerChoice === "камень" ) ) {
//         alert("Ты выиграл")
//         isWinner = true
//     } else {
//         alert("Компьютер выиграл")
//         isWinner = true
//     }
// } else {
//     alert ("Введи корректный ввод, камень, ножницы или бумага")
// }

// }





let userChoice
let computerChoice
let isWinner = false


while (!isWinner) {
    userChoice = prompt("Выбери камень, ножницы или бумага:")
    userChoice = userChoice.toLowerCase()
    console.log(userChoice)


let randomNum = Math.floor(Math.random() * 3)
switch (randomNum) {
    case 0: 
        computerChoice = "камень"
        break
    case 1:
        computerChoice = "ножницы"
        break
    case 2: 
        computerChoice = "бумага"
        break
}



if (userChoice === "камень" || userChoice === "ножницы" || userChoice === "бумага") {
    alert (`Компьютер выбрал: ${computerChoice}`)
    if(userChoice === computerChoice) {
        alert("Ничья, играем еще раз")
    } else {
        const isUserWinner = 
            (userChoice === "камень" && computerChoice === "ножницы") ||
            (userChoice === "ножницы" && computerChoice === "бумага") ||
            (userChoice === "бумага" && computerChoice === "камень")

        const message = isUserWinner ? "ты победил" : "ты проиграл"
        alert (message)

        isWinner = true
    } 
} 
   
    else {
        alert ("Введи корректный ввод, камень, ножницы или бумага")
    }
}
    






















