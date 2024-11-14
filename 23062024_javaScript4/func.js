
//************************************************************************************** */
// Функция возвращает массив  простых множителей целого числа tempX

//2,3,5,7,11, ..... 59.... 97... 131... 167.. 191...1987... - простые числа, то есть они делятся только на самого себя и на 1 
//Их много... очень много ... Этот  Мир открылся по-новому...
// НУЖНО ОБРАТИТЬ ВНИМАНИЕ, КОГДА ФУНКЦИЯ ФОЗВРАЩАЕТ NaN
/*
Наибольший общий делитель (НОД) двух данных чисел 1 и 245 — это наибольшее число, на которое оба числа 1 и 245 делятся без остатка.
НОД (1; 245) = 1 или для 59 и 97 тоже равен 1.

*/
         
function findArrSimpleMultipler(tempX){

// проверка. Только число и только целое и больше |1|
if(isNaN(tempX)) // если не число
    return false;
else if(tempX % 1 != 0) // если число не целое
    return false;
else if(tempX == 0 || tempX == 1 || tempX == -1) // у них нет простых множителей
    return false;

// модуль числа. Функция всегда возвращает только положительные числа
else if (tempX < -1 )
    tempX = -1 * tempX; 



let arr = [];
    
let isaSimple = 2; // первое простое число. число один нам замкнет цикл, к тому же 1 - это не простое число
let j = 2;
while( tempX > 1){

        // нам нужны только простые числа.
        
    for(j = 2; j < isaSimple; j++) // до тех пор, пока isaSimple не равно j, а само на себя число поделится обязательно
        if((isaSimple / j) === 0) // Если делится на число меньше себя без остатка - исключаем это число и увеличиваем isaSimple на один
            break; 
    
    if(j != isaSimple){
        isaSimple += 1;
        continue; // реализация увеличения isaSimple на 1, так как оно не простое число (ищем дальше)
    }
        
    // а если isaSimple делится только само на себя, то есть isaSimple == j, то идем дальше и считаем isaSimple простым числом


        if(  (tempX % isaSimple) === 0) { // Если число делится на простое без остатка
            tempX = tempX / isaSimple;
            //console.log(isaSimple);
            arr.push(isaSimple);
            isaSimple = 2; // снова от 2 ищем простой множитель, но уже числа x / isaSimple

        }
        else // если число не является просым множителем нашего
            isaSimple += 1; // ищем простой множитель дальше
           

}

return arr;

}

//****************************************************************************************************************************** /*
/*
ФУНКЦИЯ ВОЗВРАЩАЕТ НАИБОЛЬШИЙ ОБЩИЙ ДЕЛИТЕЛЬ МАССИВА ЧИСЕЛ


НЕМНОГО МАТЕМАТИКИ:
Чтобы найти наибольший общий делитель нескольких чисел необходимо:

разложить числа на простые множители;
определить множители, общие для обоих чисел;
найти произведение общих множителей.
Пример нахождения НОД:

Найдем НОД чисел 315 и 245.

1. Разложим числа на простые множители:

315 = 5 * 3 * 3 * 7;

245 = 5 * 7 * 7.

2. Выпишем множители, общие для обоих чисел:

5; 7.

3. Найдем произведение общих множителей:

НОД(315; 245) = 5 * 7 = 35.

Ответ: НОД(315; 245) = 35. 



 */ 



function findNOD(){ //Меня ем функцию для работы с массивом чисел // теперь  x это array[0] // y это array[1]

    let nod = 1;
   //console.log('Длинна массива моей функции: ' + arguments.length)

    let arg = arguments[0]; // так как принимаем массив чисел

    if(arg.length >= 2){
        let x = arg[0];
        let y = arg[1];

        if(x == 1 || x == -1 || y == 1 || y == -1)
            return 1;

        let arrSimpleMultiplerforX = findArrSimpleMultipler(x);
        let arrSimpleMultiplerforY = findArrSimpleMultipler(y);

        if(!arrSimpleMultiplerforX || !arrSimpleMultiplerforY)
            return NaN;

        let arrTheSame =[];
        

        


       // console.log('простые множители числа ' + x + ' это ' + arrSimpleMultiplerforX);
        //console.log('простые множители числа ' + y + ' это ' + arrSimpleMultiplerforY);

        // Ищем одинаковые множители в двух массивах
        for(let i = 0; i < arrSimpleMultiplerforX.length; i += 1 ){
            for(let j = 0; j < arrSimpleMultiplerforY.length; j += 1){
                if((arrSimpleMultiplerforX[i] == arrSimpleMultiplerforY[j] ) && arrSimpleMultiplerforX[i] != 1){
                    arrTheSame.push(arrSimpleMultiplerforY[j])
                    arrSimpleMultiplerforY[j] = 1; // исключаем повторную запись числа из массива arrSimpleMultiplerforY. Единиц в этих массивах быть не может
                    arrSimpleMultiplerforX[i] = 1; // исключаем повторную запись числа из массива arrSimpleMultiplerforX. Единиц в этих массивах быть не может

                    //console.log('arrSimpleMultiplerforY ' + arrSimpleMultiplerforY)
                    //console.log(arrTheSame);

                }

            }
        }
        nod = 1;
        // Если одинаковых множителей нет, то НОД это 1
        
        if(arrTheSame.length <= 0)
            nod = 1; // Для чисел  1 и N вернет 1


        //находим НОД перемножая все одинаковые множители
        for(let i = 0; i < arrTheSame.length; i += 1)
            nod *= arrTheSame[i];

        //return nod; мы нашли НОД для первых двух чисел
    }
    
    if(arg.length > 2){ // ЕСЛИ ЭЛЕМЕНТОВ  БОЛЬШЕ ДВУХ, ТО ИЩЕМ НОД ДЛЯ ТОЛЬКО ЧТО НАЙДЕННОГО НОД И ОСТАЛЬНЫХ ЧИСЕЛ

        for(let i = 2; i < arg.length; i++)
            nod = findNOD([nod,arg[i]]) // передаем массив! []

    }
    else if(arg.length < 2){
        console.log(' Необходимо не менее двух чисел')
        return NaN;
    }
        

    return nod;

}


/* У меня было решение школьника 5 го класса.
Вот ниже решение программиста с сайта mozilla.
ОЧчень круто. Почти ничего не делает, кроме вызова себя но результат находит
А я ведь думал сделать функцию вычисления НОД для любого количества аргументов.
Попробую сделать такую с использованием моего алгоритма в следующей домашней.
а после разобраться и повторить вот эту с сайта mozilla:

КОММЕНТАРИИ В ФУНКЦИИ И ВЫВОД В КОНСОЛЬ - МОИ
как было:
Math.gcd = function () { 
    if (arguments.length == 2) {  
      if (arguments[1] == 0) return arguments[0]; 
      else return Math.gcd(arguments[1], arguments[0] % arguments[1]);
    } else if (arguments.length > 2) {
      var result = Math.gcd(arguments[0], arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        result = Math.gcd(result, arguments[i]);
      return result;
    }
  };
*/

Math.gcd = function () { // добавлем свой метод объекту Math

    let arg = arguments[0]; // так как принимаем массив чисел
    //----------------------------------------------------------------
   // console.log(arguments)
   // iteration += 1;
    //console.log('Итерация: ' + iteration )
   // for(argument of arguments)
      //  console.log ('аргументы: ' + argument)

    //console.log('Длина сассива аргументов: ' + arguments.length)
    //-----------------------------------------------------------------
if (arg.length == 2) {  // если передано два аргумета
    
    // ----------------------------------------------------------------
   /// console.log('ПЕРЕДАНО ДВА АРГУМЕНТА')
    //-----------------------------------------------------------------

    // передано два аргумента  аргумент с индексом 1 равен  0 (или пустая строка) возвращаем аргумент с индексом 0
    if (arg[1] == 0){
        //console.log('Аргумент с  индексом 1 = '+ arguments[1] + ' (равен нулю)')
        //console.log('Возвращаем оргумент с индексом 0, это: ' + arguments[0])
    
    return arg[0];

    }

    // передано два аргумента  аргумент с индексом 1 НЕ равен  0 (или пустОЙ строкЕ)
    else {
        //console.log('передано два аргумента  аргумент с индексом 1 НЕ равен  0 (или пустОЙ строкЕ) ')
        //console.log('возвращаем результат вызова метода .gcd (Агументы: Индекс 0)')
        return Math.gcd([arg[1], arg[0] % arg[1]]); // возвращаем результат вызова метода .gcd (Агументы: Наименьший, Остаток от деления наибольшего на наименьший)
                                                                    
    }

} else if (arg.length > 2) {
  let result = Math.gcd([arg[0], arg[1]]);
  
  for (let i = 2; i < arg.length; i++){
   // console.log(arguments[i])
    result = Math.gcd([result, arg[i]]);
  }
  return result;
}
};






/// МОЯ ФУНКЦИЯ ОПРЕДЕЛЕНИЯ НОД С ИСПОЛЬЗОВАНИЕМ ОПЕРАТОРА ОСТАТКА ОТ ДЕЛЕНИЯ.
/// ПО ПАМЯТИ О ПРИНЦИПЕ РАБОТЫ НАЙДЕННОЙ
// ОКАЗЫВАЕТСЯ ЕЕ ЛЕГКО ПОВТОРИТЬ.



function mygcd(){
    
    let arg = arguments[0]; // так как принимаем массив чисел

    if(arg.length == 2){ // ЕСЛИ ПЕРЕДАНО ВСЕГО ДВА АРГУМЕНТА
        if(arg[1] == 0) // И остаток от деления был 0
            return (arg[0]) // (argements[0] всегда больше arguments[1]) он и есть НОД ПРИ ОСТАТКЕ ОТ ДЕЛЕНИЯ 0
        else
            return mygcd([arg[1], (arg[0] % arg[1])]) // остаток от деления меньшего НА большее - всегда меньшее
    }
    else if(arg.length > 2){
        let result = mygcd([arg[0],arg[1]]) // находим НОД первых двух чисел
        for(let i = 2; i < arg.length; i++){
            result = mygcd([result,arg[i]]) // а теперь НОД для НОД предыдущих
        }
        return result;
    }


}