
// Уровень 2.1 задачника JavaScript
// №1

// Дана некоторая строка. Найдите позицию первого нуля в строке.********************************

let str = 'фопрзшфыгпрз94 зкп з--4 3 0234827 230287362 9п9н0уу '
let indexOfNull = undefined;

for(let i = 0; i < str.length; i ++)
    if(str[i] == '0'){  
        console.log('Индес первого нуля: '+ i);
        indexOfNull = i;
        break;
    }
        


//************************************************************************************************************** */
// №2

// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.

/****************   Выводит в консоль строки все числа от 000, 001,002 до 999
for(hundreds = 0; hundreds < 10; hundreds += 1) // Как видим в числе 1000 сумма 1 и 0 != 5, поэтому оно нам и  не надо
    for(dozens = 0; dozens < 10; dozens += 1)
        for(units= 0 ; units < 10; units +=1 )
            console.log('' + hundreds + dozens + units)

*/


for(hundreds = 0; hundreds < 10; hundreds += 1) // Как видим в числе 1000 сумма 1 и 0 != 5, поэтому оно нам и  не надо, хотя и выше 509 тоже не нужны...
    for(dozens = 0; dozens < 10; dozens += 1)
        for(units= 0 ; units < 10; units +=1 )
                if(hundreds <= 0){ // Если сотен еще нет     
                    if( dozens + units == 5) // сравниваем суммы единиц и десяток 005, 014, 023... //005  можно убрать, если units начать с 6
                        console.log( + hundreds*100 + dozens*10 + units) // числа
                }
                else if( hundreds + dozens == 5)
                    console.log('' + hundreds + dozens + units) // строки



//************************************************************************************************************************ */
// №3

// Дан массив. Удалите из него элементы с заданным значением.
// Усложняем себе задачу: РЕКУРСИЯ И МНОГОМЕРНЫЙ МАССИВ



function deleteAllTypesFromExcept(except,from){ // функция способна изменять внешние переменные, но не массивы (объекты)
     
    //let resultArray = from.filter((except,from) => typeof(from) == except ); //filter создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
    // Даже если это вдруг сработает, то как быть со вложенным масивом?.... Пока мне не ясна эта схема работы...
    
    let resultArray = []; // поэтому создаем возвращаемую переменную

    //console.log('except: '+except)

    // except - тип данных, который нужно оставить в массиве
    // Есл элемент - массив, то он остается, но также проверяется, как родительский

    for( let i = 0 ; i < from.length; i += 1){

        console.log('from is: ' + from)
        console.log(typeof(from[i]) + ' and i: ' + i )

        if (typeof(from[i]) == 'object') // Массив это Object, если массив
            resultArray.push(deleteAllTypesFromExcept(except,from[i])) // также удаляем все элементы, кроме типа 'except'
        else if(typeof(from[i]) == except)
            resultArray.push(from[i])
        else 
            continue; // вроде можно без этого else. Просто идем дальше I++
        
    }

    // если никакие условия не совпали (тип может быть указан некорректно), вернет пустой массив

    return resultArray;
   
} 


let arr = [12,false,'rt',435,'eryj',-250,57,'3446',567,-657, [1224,345,'rthg', [124,12,true,3,'464','fffg'] ] ,65,57,'ghjf',57,true,23,143,546];

//console.log(arr);

console.log(deleteAllTypesFromExcept(typeof(true) , arr ));

// заодно узнал что такое " RangeError: Maximum call stack size exceeded. "
// потому, что typeof(from[i] == 'object') - это boolean .... больше часа из-за одной скобки не в том месте


// №4

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.
// ДА ЧЕГО УЖ ТАМ...

let arrinarr = [100,200,300,[10,20,30,40,50,[61,62,63,64]],500,600,700,800]

//let arrinarr = [100,200,300,400,500,600]


function ArrInArrSumm(arr,fromi,toi){ // Если передаем аргумент arr, то функция не будет видеть arr объявленный выше

    let summ = 0;
    let fromiTemp = fromi;
    let toiTemp = toi;

      
    if(fromi == 'min' || fromi < 0) // про < ноль, наверное, не обязательно
        fromiTemp = 0;
    else if(fromi == 'lastHalf')
        fromiTemp = arr.length / 2 + arr.length/1 % 5; // при делении на 2 работает как округление вверх
                                                        // -1 не делаем, при четных не пересечется с firstHalf
                                                        // при нечетных округляем вверх

    if(toi == 'max' || toi >= arr.length) 
        toiTemp = arr.length - 1; // так как условие далее <=
    
    else if (toi == 'firstHalf') // половина массива. Если нечетное, то посчтатет на один элемент меньше
        toiTemp = arr.length / 2 - 1; // так как условие далее <=


    for(let i = fromiTemp; i <= toiTemp; i++) // выше от длины отняли 1
        if(typeof(arr[i]) == 'object' )
            summ = summ + ArrInArrSumm(arr[i],fromi,toi)
        else {
            console.log(' from: ' +  fromi + ', toi: ' + toi + ' arr: ' + arr + ' i: ' + i)
            console.log(summ + ' + ' + arr[i] + ' = ' + (summ + arr[i]))
            
            summ = summ + arr[i];
        

        }
            


    return summ;
    

}


//console.log(ArrInArrSumm(arrinarr,0,'firstHalf')) // парвая половина как в задании (от начала до середины) при нечетных меньше чем вторая

//console.log(ArrInArrSumm(arrinarr,'lastHalf','max')) // вторая половина (от середины до начала)


console.log(ArrInArrSumm(arrinarr,0,'max')) // СУММА ВСЕХ

//console.log(ArrInArrSumm(arrinarr,2,3))


//console.log(ArrInArrSumm(arrinarr,'lastHalf','firstHalf')) // будет ноль




// считает не правильно!
// После выхода из вложенного массива не продолжает подсчет элементов
// Если вложенный массив короче внешнего, то цикл становится бесконечным
// Не пойму что не так...
// LET I в цикле for(let i = fromiTemp; i <= toiTemp; i++) И ВСЕ ПРОБЛЕМЫ РЕШЕНЫ! 3 ЧАСА ПОИСКА РЕШЕНИЯ ПРОБЛЕМЫ  И ОДИН L E T...

