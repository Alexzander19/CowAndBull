
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


