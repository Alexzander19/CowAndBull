
/*****************************************************************
                    ДОМАШНЕЕ ЗАДАНИЕ  № 1

«Язык сценариев JavaScript и библиотека jQuery»»
Модуль 1
ТЕМА: ВВЕДЕНИЕ В JAVASCRIPT
Задание:

Запрашивать данные у пользователя необходимо с помощью
prompt(), а выводить результат с помощью alert().


******************************************************************/ 









let userInputString = 0;
let userNum;
let message;



userInputString = prompt('ЧТОБЫ ОДНАЖДЫ ВЫЙТИ НАЖМИТЕ КЛАВИШУ Й(Q)')


while (userInputString != 'q' && userInputString != 'Q' && userInputString != 'й' && userInputString != 'Й'){ 

    

    // 1. Запросите у пользователя его имя и выведите в ответ:
    // «Привет, его имя!

    userInputString = prompt('Как тебя зовут?'); // Надеемся, что не Китаец с именем Й или Q, как записать Esc не знаю пока.

    if (userInputString == 'q' || userInputString == 'Q' || userInputString == 'й' || userInputString == "Й"){break}

    message = 'Пррривет, '+ userInputString + '!';

    alert(message);

    // 2. Запросите у пользователя год его рождения, посчитайте,
    // сколько ему лет и выведите результат. Текущий год укажите
    // в коде как константу
    const YEAR = 2024;
     
    userInputString = prompt('А в каком году ты такой умный родился?');

    if (userInputString == 'q' || userInputString == 'Q' || userInputString == 'й' || userInputString == "Й"){break}

    userNum = Number(userInputString)
    message = 'Так тебе уже ' + (YEAR - userNum) + ' Примерно'; /* Без скобок не работает */

    alert(message);

    // 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

    userInputString = prompt('А  назови длину стороны квадрата!')
    if (userInputString == 'q' || userInputString == 'Q' || userInputString == 'й' || userInputString == "Й"){break}
    userNum = Number(userInputString);

    message = 'Периметр квадрата моментально: '+ (userNum*4) + ' усдовных единиц';

    alert(message);

    // 4. Запросите у пользователя радиус окружности и выведите
    // площадь такой окружности.

    userInputString = prompt('А радиус окружности?!')
    if (userInputString == 'q' || userInputString == 'Q' || userInputString == 'й' || userInputString == "Й"){break}
    
    userNum = Number(userInputString)

    message = 'Площадь окружности равна: ' + ( Math.PI * Math.pow(userNum,2));

    alert(message);

    // 5. Запросите у пользователя расстояние в км между двумя
    // городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы
    // успеть вовремя.

    let distanse
    let time

    userInputString = prompt('Сколько тебе километров ехать до города N?')
    if (userInputString == 'q' || userInputString == 'Q' || userInputString == 'й' || userInputString == "Й"){break}
    
    distanse = Number(userInputString)
    userInputString = prompt('И за сколько часов собираешься добраться до города N?')
    if (userInputString == 'q' || userInputString == 'Q' || userInputString == 'й' || userInputString == "Й"){break}
    time = Number(userInputString)

    userNum = distanse / time

    message = 'Вперед! Тебе ехать со скоростью: ' + ( userNum) + 'км/час';

    alert(message);

    distanse = undefined;
    time = undefined;
    userNum = undefined;
    message = undefined;
    userInputString = undefined;


    // 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в
    // константе.

    const oneUSD = 0.9223 // один доллар не стоит целого евро

    userInputString = prompt('Сколько у тебя есть долларов на дорогу?')
    if (userInputString == 'q' || userInputString == 'Q' || userInputString == 'й' || userInputString == "Й"){break}
    
    userNum = Number(userInputString);
    
    userNum = userNum * oneUSD; //  Переменную в долларах делаем переменной в Евро

    message = 'Это всего  ' + ( userNum) + ' Евро';

    alert(message);


    // 7. Пользователь указывает объем флешки в Гб. Программа
    // должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

    const sizeOfFile = 820;

    userInputString = prompt('Флешка для музыки в дорогу есть? Объем?')
    if (userInputString == 'q' || userInputString == 'Q' || userInputString == 'й' || userInputString == "Й"){break}
    
    userNum = Number(userInputString);
    
    userNum = Math.floor(userNum / sizeOfFile); //  округление вниз. Округляет аргумент до ближайшего меньшего целого.

    if (userNum > 0 ){
        message = 'Можно записать  ' + ( userNum) + ' Компакт дисков';
    }
    else{
        message = 'Походу радио будем слушать.'
    }

    alert(message);


    // 8. Пользователь вводит сумму денег в кошельке и цену одной
    // шоколадки. Программа выводит сколько шоколадок может
    // купить пользователь и сколько сдачи у него останется.

    let cash
    let cost

    userInputString = prompt('А сколько у тебя рублей на снеки?')
    if (userInputString == 'q' || userInputString == 'Q' || userInputString == 'й' || userInputString == "Й"){break}
    
    cash = Number(userInputString)
    userInputString = prompt('С колько стоит шоколадка?')
    if (userInputString == 'q' || userInputString == 'Q' || userInputString == 'й' || userInputString == "Й"){break}
    cost = Number(userInputString)

    userNum = Math.floor(cash / cost)

    if (userNum > 0 ){
        message = 'Ммммм, ты можешь купить  ' + ( userNum) + ' шоколадок! Кушай, не обляпайся.'
    }
    else{
        message = 'Придется обойтись без сладкого.'
    }

    alert(message);
        

    // 9. Запросите у пользователя трехзначное число и выведите
    // его задом наперед. Для решения задачи вам понадобится
    // оператор % (остаток от деления).

    let backwards
    let num1
    let num2
    let nam3

    
    

    userInputString = prompt('Назови трехзначное число')
    
    while (userInputString != '0'){
    
    
        if (userInputString == 'q' || userInputString == 'Q' || userInputString == 'й' || userInputString == "Й"){break}
        
        userNum = Number(userInputString) // Со строкой было бы проще
        
        if (userNum / 1000 >= 1 || userNum /100 <= 1 || isNaN(userNum)){
            userInputString = prompt('Попробуй еще раз трехзначное число! Выход из Цикла: 0')
        }
        else{

            // Порядок цифр во введенном числе
            num3 = userNum % 10 // остаток от деления - последняя цифра
            num2 = (userNum - num3)/10
            num2 = num2 % 10
            num1 = (userNum - num2*10 - num3)/100

            backwards = num3 * 100 + num2 * 10 + num1

            if(num3 == 0){
                message = 'Твое число в обратную сторону: 0' + backwards ;
                if(num2==0){
                    message = 'Твое число в обратную сторону: 00' + backwards ;
                }
            }
            else{
                message = 'Твое число в обратную сторону: ' + backwards ;
            }
            alert(message);
            userInputString = prompt('Попробуй еще раз трехзначное число! Выход из Цикла: 0')

        }

    } 

    

    // 10. Запросите у пользователя целое число и выведите в ответ,
    // четное число или нет. В задании используйте логические
    // операторы. В задании не надо использовать if или switch.

    while (userInputString != 'w'){


        userInputString = prompt('Введите целое число. Выход из цикла: w')
        if (userInputString == 'q' || userInputString == 'Q' || userInputString == 'й' || userInputString == "Й"){break}
        
        userNum = Number(userInputString);
    

        // Кажется все-равно не так решил и этот оператор по сути похож на if else.
        // Не соображу как сделать без них. Подскажите, пожалуйста.

        message = (userNum % 2) == 0 ? "Число четное" : "Число нечетное";

    
        alert(message);  // Если хотим выйти, скажет, что w нечетное



    }




}














