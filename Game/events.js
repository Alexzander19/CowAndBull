





// строит таблицу с прозрачными картинками и сгенерированными числами (для запоминания пользователем)
buttonGenerate.onclick = function(){
    
    size = parseInt(document.querySelector('#checksize').value)
    //console.log('выбран размер ' + size)

   /* размер картинки 236*177 + 10 между ними */
    //console.log(mainDiv)

    mainDiv.innerHTML = '';

    mainDiv.style.width = (236 + 10) * Math.sqrt(size) + 'px';  /* на 10 px больше минимально необходимого*/
    mainDiv.style.height = (177+10) * Math.sqrt(size) + 'px';

    for(let i = 0; i < size; i++){
    
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        

        div1.innerHTML = '<H1 class = "number">  </H1>'

        div2.innerHTML = '<img src="images/empty.png" alt = "здесь ожидалось дерево"></img>'


       
        div2.id = 'd' + i;

        div1.appendChild(div2)
        mainDiv.appendChild(div1)
   
        //console.log(div2.innerHTML)
    

    }


       // гененирует массив чисел и присваивает их элементам H1

    let massivOfNumbers =generatemassiv(size)
    numbers = document.querySelectorAll('.number')

    for(let i = 0; i < numbers.length; i++)
        numbers[i].innerHTML = massivOfNumbers[i]


    // при новой генерации обнуляем все флаги
    mistakes = 0
    count = 0
    for(let i = 0 ; i < size; i++)
        goodAnswers[i] = false; // если карточка верная, то будет true и не даст ее закрыть
}



buttonStart.onclick = function(){

    trees = document.querySelectorAll('#main div div')

    console.log(trees)


    for(let tree of trees){

       

        tree.innerHTML = '<img class = "treejpg" src="images/tree.jpg">'

        tree.onclick = function (e) {
            
           shownumberunderthetree(this) // Если не передать , то не работает 


         
           
        }
       
    }




}
  
