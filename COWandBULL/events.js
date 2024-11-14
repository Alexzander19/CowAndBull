

userInput.onkeydown = function(e){ // срабатывает на нажатие клавиши и пока держим
    //inputcontrolBefor()
/* здесь не дает стереть,  и жвигать курсор нельзя*/

    console.log(e)
/*
   
    e.preventDefault()

    console.log(e)


    if(e.key >= 0 && (String(userInput.value).length < /*computerNUN.length 4)  ){
        if(!String(userInput.value).includes(e.key)){
            userInput.value += e.key
        }
        

            
    }
    
        
}
    */


}
userInput.onkeyup = function(e){ // срабатывает после отпускания клавиши

   /* здесь никак не контролирует
    if(e.key >= 0 && String(userInput.value).length < /*computerNUN.length 4){
        if(!String(userInput.value).includes(e.key)){
            userInput.value += e.key
        }
    }
    else 
         e.preventDefault()

    */

   // inputcontrolAfter()
}


userInput.onkeypress = function(e){ // срабатывает только для символьных клавиш прм нажатии, пока держим

    let indexOfCopy;
    
    let indexOfInputChar = e.target.selectionStart; // индекс введенного символа
    
    let newString = userInput.value.slice(0,indexOfInputChar) + e.key +  userInput.value.slice( (indexOfInputChar)); // запоминаем введенную строку добавляя новый символ на свое место

    e.preventDefault() // возвращаем строку в состояние до нажатия клавиши

    let res = ''; 
    
    console.log('Индекс введенного числа: '+ indexOfInputChar)
    console.log('было до нажатия: ' + userInput.value)
    console.log('стало после нажатия: ' + newString)

    //console.log(e)


    if(e.key >= 0 && e.key != ' '){ // если цифра

        indexOfCopy = userInput.value.indexOf(e.key)
        console.log('indexOfCopy = ' + indexOfCopy)


        if(indexOfCopy > -1 ){ // если цифра повторяется создаем переменную res

            //НЕ СТАЛ УБИРАТЬ КОД НИЖЕ. Я РАБОТАЛ, ИСКАЛ ОШИБКУ. ГДЕ-ТО ОНА В ЛОГИКЕ
            // ПОСТРОИЛ ДРУГОЙ ОБРАБОТЧИК
                                                    //чило с индексом "до" не входит в результат
            //userInput.value = userInput.value.slice(0,indexOfCopy) + userInput.value.slice( (indexOfCopy+1), computerNUM.length ) // исключаем первоначальную, где бы она не находилась
            // что облегчит ввод нужного числа
/*
            console.log('computerNUM.length: '+ computerNUM.length )
            for(let i = 0 ; i < userInput.value.length; i++){
                
                

                if( i == indexOfCopy){
                    if(indexOfCopy == indexOfInputChar)
                        i = -1; // повторим цикл, но indexOfCopy уже = -1
                    else{
                        indexOfInputChar -= 1 // сдвигаем влево на удаленный символ. проверка идет первой, поэтому если удаляемый символ до вводимого,
                                            // вводимый сдвинется, а если удаляемый после, то значит он уже поставлен на место и i (ндекс) туда не вернется
                        i -= 1
                    }                    
                    indexOfCopy = -1 // больше не нужен
                    console.log('ничего не записываем. индекс первоначальной повторяющейся: ' + i)
                    console.log('Итерация ' + i + ' res ' +res)
                    //continue // ничего не записываем (удаляем первый повторяющийся символ ( цифру)) i ++
                }
                else if(i == indexOfInputChar){
                    
                    res = res + e.key
                    console.log('res = res + e.key ' + res)
                    indexOfInputChar = -1; // он нам больше не нужен
                    i -= 1; //чтобы записать число, котрое было с индексом нововведенного


                }
                else
                    res = res + userInput.value[i]
            }
                                                                                                                                
            console.log('Цифра повторяется и мы удалили первоначальную')
            console.log(res)

           userInput.value = res;
           */


           if((indexOfCopy == indexOfInputChar) || (indexOfInputChar - indexOfCopy == 1))
                res = userInput.value // попытка ввести одинаковую цифру слева или справа от копии - ничего не вводим
            else if(indexOfCopy < indexOfInputChar)
                res = userInput.value.slice(0,indexOfCopy) + userInput.value.slice(indexOfCopy+1, indexOfInputChar) + e.key + userInput.value.slice(indexOfInputChar)
            else 
                res = userInput.value.slice(0,indexOfInputChar) + e.key + userInput.value.slice(indexOfInputChar, indexOfCopy)  + userInput.value.slice(indexOfCopy+1)

            newString = res // далее проверим ее длинну
        }
        
        
        
        if(newString.length > computerNUM.length ){ // /Если цифра не повторяется, еще если длина больше нужной, 
            
            if (indexOfInputChar != computerNUM.length)//то удаляем крайнюю правую цифру
                userInput.value = newString.slice(0,computerNUM.length) // так удобней, если хочешь переделать ввод, не нужно ходить удалять крайнюю правую
            else
                userInput.value = newString.slice(1) // но если вводится крайняя правая, то удаляем первую!

            }
        else 
            userInput.value = newString // если введено не число

            
    }
   // else
       // e.preventDefault()


    
        
}


