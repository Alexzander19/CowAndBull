


// Игра в Коров и Быков
// Хочу написать, но пока не могу придумать алгоритм поиска загаданного числа


// цифры в звгаданном числе не должны повторяться

let computerNUM = generateWithBut( [-1,-10,-3,-10],[]) // четырех значное число, с нулями

console.log('Сгенерированное число: '+ computerNUM)

let userMindNUM = '5678' // Это число должна найти программа

let timeStart = performance.now();

let step = 0;
let cow = 0; // корова, если такая цифра есть, но стоит не на месте
let bull = 0; // бык, если цифра стоит на своем месте
let cowBull = [];
let bullInUserNUM = 0;
let cowInUserNUM = 0;

/*
Двухмерный Массив результата поиска значений

для каждой цифры загаданного числа - есть массив всех чисел от 0 до 9
Индекс массива - это и есть число, которое нас интересует, а вот его значение:
     0  не знаем та цифра или нет
    -1  этой цифры здесь точно нет
     1 эта цифра на своем месте
     2 эта цифра пробовалась (называлась)  


*/ 



let massToFind = [];

for(let i = 0; i < userMindNUM.length ; i ++){
    massToFind[i] = [];
    for(let j = 0; j < 10 ; j ++)
        massToFind[i].push(0) // пока что про все цифры не знаем

}
        
console.log(massToFind)

/*
while(bull != userMindNUM.length){

    // генерируем число нужной длинны
    // с указанием диапазона чисел

    bull ++; // просто чтобы выйти из цикла пока что



}



*/




// Проверка на совпадения когда пользователь отгадывает число компьютера. ************************************************************


//while(bull != userMindNUM.length){
  
 //   let userNUM = document.getElementById('userInput')
  //  console.log(userMindNUM)
// // 
//     if(userNUM == 'Q' || userNUM == 'q')
//         break;

//     step ++;


   // cowBull = countCowBull(computerNUM,userNUM)

   // console.log(' '+userNUM+' Коров: ' + cowBull[0] + ' Быков: '+ cowBull[1] + ', Шаг: ' + step)

//} 





//******************************************************************************************

/*

let arr100 = ['x','x','x','x']

let arrMayBe = [0,1,2,3,4,5,6,7,8,9]

//let arrNotThis = ['x','x','x','x','x','x']

if(cow == 0 && bull == 0)
    for(let i =0; i < userNUM.length; i++)
        {
            
        }

*/





