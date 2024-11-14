
import random

# Задание 1
# Пользователь вводит число. Определить количество
# цифр в этом числе, посчитать их сумму и среднее ариф-
# метическое. Определить количество нулей в этом числе.
# Общение с пользователем организовать через меню.

def zeros(num: int):
    if num == 0:
        return 'нет нулей'
    elif num == 1:
        return 'один ноль'
    elif num <= 4:
        return str(num) + ' нуля'
    elif num > 10:
        return 'много нулей'
    else:
        return str(num) + ' нулей'
    

while True:

    user_input = input('Выход - Q. Введите число: ')

    if user_input == 'Q' or user_input == 'q' or user_input == 'й' or user_input == 'Й':
        break
    
    count :int = 0
    sum :int = 0
    arithmetic_mean :float = 0
    zero_count :int = 0

    

    for i in user_input:
        if '0' <= i <= '9':
            if i == '0':
                zero_count += 1
        count += 1
        sum += int(i)

    arithmetic_mean = sum / count

    print('В этой строке: ' , count , ' цифр, ', ' их сумма: ',
           sum, ', Среднее арифметическое: ', arithmetic_mean , ' и здесь ', zeros(zero_count) )


# Задание 2
# Написать программу, которая выводит на экран
# шахматную доску с заданным размером клеточки. На-
# пример, три


def print_black(i: int):

    l = ['* * * * *',
         '* * * * *',
         '* * * * *']

    print(l[i] , end ='')

def print_white(i: int):
    l = ['          ',
         '          ',
         '          ']
    print(l[i], end ='')

print('-' * 86)
print('|'+ ' ' * 84 + '|')
print('|    '+'-' * 76  + '    |')


for big_i in range(0,8):
    for small_i in range(0,3):
        if small_i == 1:
            print('|' ,str(8 - big_i),'|', end = '')
        else:
            print('|   |' , end = '')
        for j in range(0,4):
            if big_i % 2 == 0:
                print_white(small_i)      
                print_black(small_i)
            else:
                print_black(small_i)
                print_white(small_i) 

            
        print('|   |')
print('|    ' + '-' * 76 + '    |')


print('|','  ' * 3,'',end = '')

correct = 0
repeat = 9
for i in 'ABCDEFGH':
    if correct == 1 or correct == 3:
        repeat = 8
        correct = 1 # не понимаю почему, но приходится корректировать расстояние между буквами
    else:
        repeat = 9
    print(i + ' ' * repeat , end = '')
    correct += 1
print('|')
print('-' * 86)
print()

# Задание 3
# Написать программу, которая проверяет пользователя
# на знание таблицы умножения. Программа выводит на
# экран два числа, пользователь должен ввести их произ-
# ведение. Разработать несколько уровней сложности (от-
# 1
# личаются сложностью и количеством вопросов). Вывести
# пользователю оценку его знаний.

level: str = '1' # 1 самый простой, 2 сложнее, 3 самый сложный
mark: int = 1
num_1: int = 0
num_2: int = 0
unswer: int = 0 
mistakes: int = 0



print('--------------------- А ТЕПЕРЬ МАТЕМАТИКА -----------------------')
print('------------ ПРОВЕРКА НА ЗНАЕНИЕ ТАБЛИЦы УМНОЖЕНИЯ --------')

while True:

    mistakes = 0

    level = input('Выберите уровень сложности. 1 - легко (не более 6 баллов), 2 - средне (не более 8 баллов), тяжело (до 10 баллов из 10). Q - Выход: ')
    
    if level == 'Q' or level == 'q' or level == 'й' or level == 'Й':
        break

    for i in (range(0,6)):

        num_1 = random.randint(2,9)

        if level == '1':
            num_2 = random.randint(2,6)
        elif level == '2':
            num_2 = random.randint(3,7)
        elif level == '3':
            num_2 = random.randint(5,9)
            num_1 = random.randint(3,9)
        else:
            level = '0'
            print('Что Вы там нажимаете? Будьте внимательны! Но отвечайте уже скорее.')
            num_2 = random.randint(0,2)
            num_1 = random.randint(1,3)

        unswer = int(input( str(num_1) + ' умножить на ' + str(num_2) + ' Введите ответ: '))

        if unswer != num_1 * num_2:
            mistakes += 1


    # for mistakes in range(0,6):


    # Всего было 5 примеров для решения
    if mistakes < 3:
            mark = 10 - mistakes * int(level) - ( 3 - int(level) ) * 2
    elif mistakes == 3:
            mark = 3
    else:
        mark = 7 - mistakes

    print('Вы допустили ' + str(mistakes) + ' ошибок из 5 и получаете: ' + str(mark) + ' баллов')


    

# Задание 4
# Вывести на экран ромб из звездочек. 
    
size_str: str =''

for size in [3,4,5,6,7,8,20,21,70,71,100,101]:

    if size < 10 and size %2 == 1:
        size_str ='0' + str(size)
    else:
        size_str = str(size)


    for i in range(0,int(size/2)-1):
        print(' ' * (size - 2 - i * 2 ) + '*' + ' ' * (i * 4 - (1 - size % 2)), end = '') 
        
        if not(size % 2 == 0 and  i == 0):
            print('*', end = '')           
        print()



    print(' ' * (size % 2) + '*' , end = '')
    print(' ' * ( (size - 3) - int((len(size_str)+1)/2) - (size % 2) )  , size_str , ' ' * ((size - 3) - int(len(size_str)/2) - 1 ) , end = '' )
    print('*')


    for i in range(int(size/2)-2,-1,-1):
        print(' ' * (size - 2 - i * 2) + '*' + ' ' * (i * 4 - (1 - size % 2)) , end = '') 
        
        if not(size % 2 == 0 and  i == 0):
            print('*', end = '')
        print() 

