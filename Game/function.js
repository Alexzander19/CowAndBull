
let mainDiv        = document.querySelector('#main')
let trees          = document.querySelectorAll('.main div div')
let numbers        = document.querySelectorAll('.number')

//let numbers = document.querySelectorAll('.number')

let buttonGenerate = document.querySelector('#buttonGenerate')
let buttonStart    = document.querySelector('#buttonStart')

let count = 0;
let goodAnswers = [];
let mistakes = 0;

let size = 9;

console.log(trees)

for(let i = 0 ; i < size; i++)
    goodAnswers[i] = false; // если карточка верная, то будет true и не даст ее закрыть



///console.log(numbers)
//let massivOfNumbers =generatemassiv(size)

/*
for(let i = 0; i < numbers.length; i++)
    numbers[i].innerHTML = massivOfNumbers[i]
*/

//console.log(trees[0]);


// onclick
function shownumberunderthetree(thisis){

    let thisindex

    console.log('thisis.id ' + thisis.id)
    console.log('thisis.id ' + thisis.className)


    let element  = document.querySelector('#' + thisis.id + ' img')


    let pixelWidth = element.clientWidth = '200px';

    //let sizeimg = thisis.firstChild.className // а вот до стиля еикак не добраться
    console.log(element)
    console.log(pixelWidth)
           
  // sizeimg.style.width = (e.style.width*0.9)

    


    if (thisis.innerHTML.includes('tree')){
        
        for(let i = 0; i < trees.length; i ++) // закрываем предыдущее открытое дерево
            if(trees[i].innerHTML.includes('empty') && !goodAnswers[i] ) { // если верные цифры(попорядку), то не закрываем
                trees[i].innerHTML = '<img class = "treejpg" src="images/tree.jpg">'

            }

        thisis.innerHTML = '<img src="images/empty.png">'
       // console.log(parseInt(thisis.className))
        //console.log('numbers[parseInt(thisis.className)]'  + numbers[parseInt(thisis.className)].innerHTML)
        thisindex = parseInt(thisis.id[1])
        console.log(thisindex)

        if(numbers[thisindex].innerHTML == (count + 1)){
            goodAnswers[parseInt(thisindex)] = true
            count++;
        }
        else
            console.log('Допущена ' + (mistakes += 1) + '-я ошибка');

    }
        
    else if (!goodAnswers[thisindex]) // не даем закрываться правильным
        thisis.innerHTML = '<img class = "treejpg" src="images/tree.jpg">'
    
}




function generatemassiv(size){

     let randNum = 1;
        let massivofnumbers = [];
        
        let iterasions = 0;
        let repeatFind = false;

    for(let i = 0 ; i < size; i++){ // индекс начинается с 0 , а числа с 1

        // генерируем число от 1 до size
       
        
        while( iterasions < 1000){// если более 1000 раз прошоли цикл - значит подберем 'вручную' 
            
            repeatFind = false; 
            randNum = Math.round((Math.random()* (size-1)) ) + 1 // числа от 1 до size включительно
           
            // проверяем не совпадает ли случайное число с уже записанными
        
            for(let j = 0; j < massivofnumbers.length; j++){
                if(randNum == massivofnumbers[j]) // искоючаем повтор
                    repeatFind = true;

            }


            // если повторов небыло
            if(!repeatFind){ //
                massivofnumbers.push(randNum) // записываем число в массив
                break; // если прошли цикл и не нашли совпадения, то значит нашли нужную цифру 
            }


            // если более 100 раз прошоли цикл - значит подберем 'вручную' (наверное массив but состоит из 9 цифр из 10)
            iterasions += 1; 

        }


        if(iterasions >= 1000){

            for(randNum = 1; randNum <= size ; randNum++){
                repeatFind = false;
                for(let k = 0; k < massivofnumbers.length; k ++){
                    if(randNum == massivofnumbers[k]){
                        repeatFind = true;
                        break; // переходим к следующему (randNum += 1)
                    }
                    
                }

                if(!repeatFind){ // если repeatFind == false, то значит мы нашли randNum
                    massivofnumbers.push(randNum)

                    console.log('Внимание! Случайное чило : '+ randNum + ' не случайное! Подобрали по возрастанию от 1')
                    break;
                }


            }

            if(randNum > size){
                alert('ВНИМАНИЕ! ОГАРНИЧЕНИЕ В ВЫБОРЕ ЧИСЕЛ НЕ ДАЕТ ПОДОБРАТЬ ЧИСЛО')
                randNum = 0;

            }



        }




    }

    return massivofnumbers; 


}