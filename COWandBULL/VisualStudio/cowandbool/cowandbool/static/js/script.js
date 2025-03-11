


// Игра в Коров и Быков

// цифры в звгаданном числе не должны повторяться


//  number - это количество цифр в загаданном компьютере числе
// определяется в сплывающем окне при нажатии кнопки "начать новую игру"
const count_numbers = getQueryParam('count_numbers');



// let computerNUM = [-1,-10,-3,-10]

let computerNUM = []; // число, которое нужно найти, создается компьютером случайным(псевдо) образом
    
    for (let i = 0; i <= count_numbers; i++) {
        computerNUM.push(-10);
    }
    

let timeStart = performance.now();

let step = 0;
let cow = 0; // корова, если такая цифра есть, но стоит не на месте
let bull = 0; // бык, если цифра стоит на своем месте
let cowBull = [];
let bullInUserNUM = 0;
let cowInUserNUM = 0;
// Фейерверк
let fireworksActive = false;

function startGame() {

    
    // Очищаем таблицу точнее раздел tbody           
    let tbody = document.getElementById("myTable").getElementsByTagName("tbody")[0]
    tbody.innerHTML = ''; 
    
    // Обнуляем все глобальные переменные

    timeStart = performance.now();

    step = 0;
    cow = 0; // корова, если такая цифра есть, но стоит не на месте
    bull = 0; // бык, если цифра стоит на своем месте
    cowBull = [];
    bullInUserNUM = 0;
    cowInUserNUM = 0;
    
    computerNUM = [];
    // Длина computerNUM такая, как выбрал пользватель при нажатии клавиши начать новую игру
    // с указанием длины числа (number)

    for (let i = 0; i < count_numbers; i++) {
        computerNUM.push(-10);
    }

    // computerNUM - это массив чисел -10 (можно любые отрицательные), функция generateWithBut
    // сгенерирует стоолько цифр от 0 до 9 в  чиселе  (если не заданы исключения - массив But), 
    // сколько чисел в массиве computerNUM, то есть равной его длине.
    computerNUM = generateWithBut( computerNUM,[]) 

    console.log('Сгенерированное число: '+ computerNUM)

    let inputSize = document.getElementById("userInput")

        // Задаем длину поля ввода числа пользователем.
        // Имя класса, который отвечает за длинну поля ввода в зависимости от number - количества цифр
    inputSize.className += " user-input-naum-width-" + count_numbers
    
}

startGame()
