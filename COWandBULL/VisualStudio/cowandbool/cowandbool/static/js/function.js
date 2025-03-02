// Функция считает коров и быков
//NUM1 число загаданное
//NUM2  число проверяемое на соответствие загаданному
// хотя нет разницы какое из них какое число


function countCowBull(NUM1,NUM2){

let cow = 0;
let bull = 0;


for(let i = 0; i < NUM1.length; i++ ){
    for(let j = 0; j < NUM2.length; j++){
        if(NUM1[i] == NUM2[j]){
            if(i != j)
                cow ++;
            else
                bull ++;
        }

    }
    
}

return [cow,bull]
}

// Функция генерирует массив - число, с заданными цифрами на своих позициях (Массив withNum, но не предлагает числа из массива but
// x - на это место или любое другое, где в массиве withNum не число от 0 до 9

function generateWithBut( withNum,but /* повтор да или нет*/ ){

    // исклюяаем повтор чисел, которые есть в withNum
    for(let i = 0; i < withNum.length; i++)
        if(withNum[i] >= 0 && withNum[i] <= 9)
            but.push(withNum[i]) // если числа в but будут дублироваться- это допустимо
    

    for(let iii = 0 ; iii < withNum.length; iii++){

        // генерируем число от 0 до 9
        let randNum;
        
        let i = 0;
        let repeatFind = false;
        
        while( i < 100){// если более 100 раз прошоли цикл - значит подберем 'вручную' (наверное массив but состоит из 9 цифр из 10)
            
            repeatFind = false; 
            randNum = Math.round(Math.random()*9)
            
            // проверяем не совпадает ли случайное число с запрещенными (массив but)
        
            for(let j = 0; j < but.length; j++){
                if(randNum == but[j])
                    repeatFind = true;

            }


            // если совпадает - снова генерируем
            if(!repeatFind){
                but.push(randNum) // исключаем повтор сгенерированных цифр
                break; // если прошли цикл и ненашли совпадения, то значит нашли нужную цифру 
            }


            // если более 100 раз прошоли цикл - значит подберем 'вручную' (наверное массив but состоит из 9 цифр из 10)
            i += 1; 

        }


        if(i >= 100){

            for(randNum = 0; randNum < 10; randNum++){
                repeatFind = false;
                for(let k = 0; k < but.length; k ++){
                    if(randNum == but[k]){
                        repeatFind = true;
                        break; // переходим к следующему (randNum += 1)
                    }
                    
                }

                if(!repeatFind){ // если repeatFind == false, то значит мы нашли randNum
                    console.log('Внимание! Случайное чило : '+ randNum + ' не случайное! Подобрали по возрастанию от 0')
                    break;
                }


            }

            if(randNum >= 10){
                alert('ВНИМАНИЕ! ОГАРНИЧЕНИЕ В ВЫБОРЕ ЧИСЕЛ НЕ ДАЕТ ПОДОБРАТЬ ЧИСЛО')
                randNum = 0;

            }



        }




        // ставим сгенерированное число в массив, где не число от 0 до 9
        console.log(randNum)
        if(withNum[iii] < 0 || withNum[iii] > 9){ // если не число от 9 дл 9
            withNum[iii] = randNum;
            console.log('withNum['+ iii +'] = ' + withNum[iii] )
            // поставили сгенерированное число в итоговый массив и переходим к генерации следующего

        }
    }

    return withNum; 
// Нужно исключить совпадение с числами из массива withNum

}

function cowBullUserTry(){

    let userNUM = document.getElementById('userInput')
        console.log(userNUM.value)

    if(userNUM.value.length != computerNUM.length)
        return false;
    
    cowBull = countCowBull(userNUM.value,computerNUM)
    
    step +=1;
   
    addRow('myTable',userNUM.value, cowBull);
    
    let inputText = document.getElementById('userInput')
    console.log(inputText.value)
    inputText.value = ''

    }



function addRow(id,userNUM, cowBull){



    let tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
    let row = document.createElement("tr")
    

    // Создаем элемент <img> для замены "коровы"
    let cowImage = document.createElement("img");
    cowImage.src = '/static/img/cow.png'; 
    cowImage.alt = "К";
    cowImage.style.width = "20px"; 
    cowImage.style.height = "20px";
    
    // Создаем элемент <img> для замены "бы" (если нужно)
    let bullImage = document.createElement("img");
    bullImage.src = '/static/img/bull.png'; 
    bullImage.alt = "Б";
    bullImage.style.width = "20px"; 
    bullImage.style.height = "20px";


    let td1 = document.createElement("td")
    let pre1 = document.createElement("pre")
    pre1.className = "pre-in-table"
    // pre1.appendChild(document.createTextNode(userNUM + ' ' + cowBull[0] + ' ко ' + cowBull[1] + ' бы ' + ' ' + step))
    pre1.appendChild(document.createTextNode(userNUM + ' ' + cowBull[0] + ' '));
    pre1.appendChild(cowImage);
    pre1.appendChild(document.createTextNode(' ' + cowBull[1] + ' '));
    pre1.appendChild(bullImage);
    pre1.appendChild(document.createTextNode(' |' + step))
    
    
    td1.appendChild(pre1)
    
    // let td1 = document.createElement("td")
    // td1.appendChild(document.createTextNode(userNUM))
    
    // let td2 = document.createElement("td")
    // td2.appendChild (document.createTextNode(cowBull[0] + ' коров ' + cowBull[1] + ' быков '))
    
    // let td3 = document.createElement('td')
    // td3.appendChild(document.createTextNode(step))
   
    row.appendChild(td1);
    // row.appendChild(td2);
    // row.appendChild(td3);
    tbody.appendChild(row);


    let timeSpend = document.getElementById('time')

    //console.log(timeStart)
    timeSpend.innerHTML = Math.floor(((performance.now() - timeStart) / 1000 / 60 )) + ' м. ' + Math.round((((performance.now() - timeStart) / 1000) % 60)) + ' c.';

    
}





let tempInput;

let userInput = document.getElementById('userInput')


// не используется
function inputcontrolBefor()
{

    userInput = document.getElementById('userInput')
    tempInput = userInput.value;


    /* НЕПОНЯТНО КАКИМ ОБРАЗОМ, НО ЕСЛИ БЫСТРО НАЖИМАТЬ КЛАВИШИ,
    БЕЗ НИЖЕ ОПИСАННОЙ ПРОВЕРКИ 
    ТО УДАЕТСЯ ЗАНЕСТИ ЛЮБЫЕ ЗНАКИ И СКОЛЬКО УГОДНО
    Есть подозрение, что успевает сохраниться некорректное из-за алгоритма с повторами
*/
    let resStr = ''
    let isRepeat = false;

    for(let i = 0; i < tempInput.length; i++){
        if(tempInput[i] >= '0' && tempInput[i] <= '9'){ // Если цифра
          //  console.log('tempInput onkeydown: ' + tempInput)
            for(let j = 0; j < tempInput.length; j++){
              //  console.log('Сравниваем ' + tempInput[i] +' и ' + tempInput[j])
                if((tempInput[i] == tempInput[j]) && ( i != j) ){// Если есть такое число, кроме самого себя
                 //   console.log('они равны, но i не равно j')
                    isRepeat = true;
                    break;
                } 

            }          

            if(!isRepeat){ // Если не повторяется чило. 
                resStr += tempInput[i];
               // console.log('resStr: ' + resStr)
            }
            // если повторяется, то к следующей итерации и не записывем i тое
            
                
        }
       


    }


    userInput.value = resStr.slice(0,computerNUM.length); // допускается длинна отличная от 4
    tempInput = userInput.value // ПЕРЕД АНАЛИЗОМ ВВЕДЕННОЙ КЛАВИШИ (КСТАТИ БУДЕМ АНАЛИЗИРОВАТЬ НЕ КЛАВИШУ, А ВСЮ СТРОКУ)
                            // СОХРАНЯЕМ ПРЕДУДУЩЕЕ (ДО ВВОДА) ЗНАЧЕНИЕ. ПРОВЕРИВ ЕГО НА ОШИБКИ
   
}
// не используется
    function inputcontrolAfter(){


    userInput = document.getElementById('userInput')


    let resStr = ''
    let isRepeat = false;

    for(let i = 0; i < userInput.value.length; i++){
        if(userInput.value[i] >= '0' && userInput.value[i] <= '9'){ // Если цифра
           // console.log(userInput.value[i])
            for(let j = 0; j < userInput.value.length; j++)
                if((userInput.value[i] == userInput.value[j]) && ( i != j) ){// Если есть такое число, кроме самого себя
                    isRepeat = true;
                    break;
                } 
                    

            if(!isRepeat){ // Если не повторяется чило. 
            resStr += userInput.value[i];
            //console.log('resStr: ' + resStr)
            }
            else
                break // если есть повтор
                
        }
        else {// если не цифра
            isRepeat = true; // тоже должны вернуться к предыдущему значению tempInput
            break
        }

    }

    
    
    if(isRepeat) // если был повтор или введено не число,то оставляем число без изменений 
        userInput.value = tempInput // переменная получена методом onKeyDown 
        
    else{
        // при вводе лишнего числа в любое место крайния справа цифра удаляется 
        userInput.value = resStr.slice(0,computerNUM.length); // допускается длинна отличная от 4

    }
       
    
}