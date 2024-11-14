
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
ФУНКЦИЯ ВОЗВРАЩАЕТ НАИБОЛЬШИЙ ОБЩИЙ ДЕЛИТЕЛЬ ДВУХ ЧИСЕЛ


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



function findNOD(x,y){


    if(x == 1 || x == -1 || y == 1 || y == -1)
        return 1;

    let arrSimpleMultiplerforX = findArrSimpleMultipler(x);
    let arrSimpleMultiplerforY = findArrSimpleMultipler(y);

    if(!arrSimpleMultiplerforX || !arrSimpleMultiplerforY)
        return NaN;

    let arrTheSame =[];
    let nod = 1;

    


    console.log('простые множители числа ' + x + ' это ' + arrSimpleMultiplerforX);
    console.log('простые множители числа ' + y + ' это ' + arrSimpleMultiplerforY);

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
    // Если одинаковых множителей нет, то умножаем числа друг на друга.
    // НОД = x* y
    if(arrTheSame.length <= 0)
        nod = 1; // Для чисел  1 и N вернет 1


    //находим НОД перемножая все одинаковые множители
    for(let i = 0; i < arrTheSame.length; i += 1)
        nod *= arrTheSame[i];

return nod;

}