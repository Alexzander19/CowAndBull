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

// Функция генерирует массив - число, с заданными числами на своих позициях (Массив withNum, но не предлагает числа из массива but
// x - на это место или любое другое, где в массиве withNum не число от 0 до 9

function generateWithBut( withNum,but /* повтор да или нет*/ ){

    // исклюяаем повтор чисел, которые есть в withNum
    for(let i = 0; i < withNum.length; i++)
        if(withNum[i] >= 0 && withNum[i] <= 9)
            but.push(withNum[i]) // если числа в but будут дублироватьс - это допустимо
    


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
    
    cowBull = countCowBull(userNUM.value,computerNUM)
    
    step +=1;
    addRow('myTable',userNUM.value, cowBull);
    
    }



function addRow(id,userNUM, cowBull){



    let tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
    let row = document.createElement("tr")
    
    let td1 = document.createElement("td")
    td1.appendChild(document.createTextNode(userNUM))
    
    let td2 = document.createElement("td")
    td2.appendChild (document.createTextNode(cowBull[0] + ' коров ' + cowBull[1] + ' быков '))
    
    let td3 = document.createElement('td')
    td3.appendChild(document.createTextNode(step))
   
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    tbody.appendChild(row);


    let timeSpend = document.getElementById('time')

    console.log(timeStart)
    timeSpend.innerHTML = Math.round(((performance.now() - timeStart) / 1000 / 60 )) + ' мин. ' + Math.round(((performance.now() - timeStart) / 1000 )) + ' cек.';

    
}