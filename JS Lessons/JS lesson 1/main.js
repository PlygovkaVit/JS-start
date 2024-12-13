// ; let energy = 10 // начальный уровень энергии робота
// ; while (energy >=0) {
// ;     console.log('текущий уровень энергии: ' + energy)
// ;     //код внутри цикла
// ; }

// const INITIAL_ENERGY = 10
// const MIN_ENERGY = 0
// const LOW_ENERGY_THRESHOLD = 3 // THRESHOLD(англ.) - порог

// let energy = 10 // начальный уровень энергии робота
// while (energy >=0) {
//     console.log(`текущий уровень энергии:  ${energy}`) 
//     //код внутри цикла
//     if (energy ===0) {
//     console.log("Робот грустит... Нужно подзарядить!")
//     break // выходим из цикла, если энергия закончилась
// } else if (energy <=3) {
//     console.log("Робот начинает чувствовать усталость...")
// } else {
//     console.log("Робот счастлив и бодрствует!")
// }

// energy = energy - 1
// energy -= 1 // компактный тип записи
// energy--  // еще более компактный 
// }

// console.log('Программа завершена. Робот отдыхает.') 




const INITIAL_ENERGY = 10
const MIN_ENERGY = 0
const LOW_ENERGY_THRESHOLD = 3
 
let energy = INITIAL_ENERGY
while (energy >= MIN_ENERGY) {
  console.log(`Текущий уровень энергии: ${energy}`)
 
  if (energy === MIN_ENERGY) {
    console.log('Робот грустит... 😢 Нужно подзарядить!')
  } else if (energy <= LOW_ENERGY_THRESHOLD) {
    console.log('Робот начинает чувствовать усталость... 🥱')
  } else {
    console.log('Робот счастлив и бодрствует! 😊')
  }
 
  energy--
}
 
console.log('Программа завершена. Робот отдыхает.')
