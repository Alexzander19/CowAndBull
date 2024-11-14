

print('-----------------------------------------------------------------------------------------')



# Модуль 2. Операторы ветвлений
# Задание 1
# Пользователь вводит с клавиатуры число в диапа-
# зоне от 1 до 100. Если число кратно 3 (делится на 3 без
# остатка) нужно вывести слово Fizz. Если число кратно 5
# нужно вывести слово Buzz. Если число кратно 3 и 5 нужно
# вывести Fizz Buzz. Если число не кратно не 3 и 5 нужно
# вывести само число.
# Если пользователь ввел значение не в диапазоне от 1
# до 100 требуется вывести сообщение об ошибке.
print('Задание 1 _______________________________________________')

number_str: str = input('Введите число от 1 до 100: ')

number: int = -1


for i in number_str:
    if i < '0' or i > '9':
        print('Введите ЧИСЛО!')
        number = 0
        break


if number != 0:
    number = int(number_str)

print(number)

if number < 1 or number > 100:
    print('Число выходит за диапазон от 1 до 100!')

elif number % 3 == 0:
    if number % 5 == 0:
        print('Fizz Buzz')
    else:
        print('Fizz')

elif number % 5 == 0:
    print('Buzz')

else:
    print(number)


print('Задание 2___________________________')

# Задание 2
# Написать программу, которая по выбору пользова-
# теля возводит введенное им число в степень от нулевой
# до седьмой включительно.



syntax_str: str = 'возведи N в степень s пожалуйста'
syntax_error: bool = False
user_n_str: str = ''
user_s_str: str = ''
user_n: int
user_s: int

wait_for_space_or_number: bool = False

user_input_string: str = input('Формат ввода: "возведи N в степень s пожалуйста" ') # Пожалуйста, это не только проявление вежливости, но и исключение ошибки из-за конца строки после числа
                                                                                    # А что если "пожалуйста" считать закрывающей командой, вроде точки с запятой, надо предлдожить 1С 

if user_input_string:
    j: int  = 0 # для перемещения по шаблону синтаксиса
    for i in user_input_string:
        # print('j= ', j)
        # print('syntax_str.length = ', len(syntax_str) )
        # print('i = ', i)

        if  '0' <= i <= '9':  # Если число , 
            if syntax_str[j] == 'N': # и на своем месте
                user_n_str = user_n_str + i # то собираем его в строку
                wait_for_space_or_number = True
                # j не увеличиваеи
            elif syntax_str[j] == 's': # и на своем месте
                user_s_str = user_s_str + i # то собираем его в строку
                wait_for_space_or_number = True
                # j не увеличиваеи
            else:
                syntax_error = True
                break
        else: 
            if wait_for_space_or_number: # если не число и до этого было число
                j += 1
                wait_for_space_or_number = False
            if i == syntax_str[j]:
                j += 1
            else:
                syntax_error = True
                break
        

    if syntax_error:
        print('Нарушение синтаксиса это первый шаг к нарушению правил, не делайте этого')

    else: 
        user_n = int(user_n_str)
        user_s = int(user_s_str)
        
        if user_s > 7 or user_s < 0:
            print('По условиям задачи степень от 0 до 7 включительно ') 
        else:
            print(user_n, ' в степени ', user_s , ' = ', user_n ** user_s)



# Задание 3
# Написать программу подсчета стоимости разговора
# для разных мобильных операторов. Пользователь вводит
# стоимость разговора и выбирает с какого на какой опе-
# ратор он звонит. Вывести стоимость на экран.
   
print('Задание 3 _________________________________________________________________________')


# tariff: dict = {
#                'beeline': 1.0 , 1.2 , 1.3 , 1.6 },

#                 'tele2':  1.1 , 1.0 , 1.2 , 1.2 ,

#                 'mts':    1.3 , 1.3 , 1.0 , 1.3 ,

#                 'yota':   1.0 , 1.0 , 1.0 , 1.0 
#                 }


tariff_ratio: dict = {
               'beeline': { 'beeline': 1.0 , 'tele2': 1.2 , 'mts': 1.3 , 'yota': 1.6 },

                'tele2':  {'beeline': 1.1 , 'tele2': 1.0 , 'mts': 1.2 , 'yota': 1.2} ,

                'mts':    {'beeline': 1.3 , 'tele2': 1.3 , 'mts': 1.0 , 'yota': 1.0},

                'yota':   {'beeline': 1.0 , 'tele2': 1.0 , 'mts': 1.0, 'yota': 1.0}
                }




error: bool = False

call_from: str = input('С какого операторы вы звоните:  b - Билайн,  t  - Теле2,  m - МТС,  y  - YOTA ')
call_to: str   = input('На какого оператора вы звоните: b - Билайн,  t  - Теле2,  m - МТС,  y  - YOTA ')

match call_from:
    case 'b':
        call_from = 'beeline'
    case 't':
        call_from = 'tele2'
    case 'm':
        call_from = 'mts'
    case 'y':
        call_from = 'yota'
    case _:
        print('Обозначте оператора!')
        error = True

print(call_from)

match call_to:
    case 'b':
        call_to = 'beeline'
    case 't':
        call_to = 'tele2'
    case 'm':
        call_to = 'mts'
    case 'y':
        call_to = 'yota'
    case _:
        print('Обозначте оператора!')
        error = True
    


try: 
    tariff: int = int(input('Ваш действующий тариф (руб/минута): '))
except:
    error = True

if error:
    print('Ошибка с определением оператора или тарифом')
else:
    print('Вы заплатите ', tariff * tariff_ratio[call_from][call_to], 'рублей за минуту')


# Задание 4
# ВНИМАНИЕ! БАЗОВАЯ СТАВКА ЗП КАЖДОГО МЕНЕДЖЕРА  ПРИБЛИЖЕНА К РЕАЛЬНОСТИ

# Зарплата менеджера составляет 200$ + процент от про-
# даж, продажи до 500$—3%, от 500 до 1000—5%, свыше
# 1000 — 8%. Пользователь вводит с клавиатуры уровень
# продаж для трех менеджеров. Определить их зарплату,
# определить лучшего менеджера, начислить ему премию
# 200$, вывести итоги на экран.

print('Задание 4 ___________________________________________________________________')

# class manager: 
#     'id': int,
#     'name': str,
#     'sales': int, #объем продаж
#     'salary': int, #Зарплата, оклад
#     def add(name,sales,salary):
#         self.name = 
#         id = ...
#  Надо подразобраться.... (несколько недель спустя) прочитал, что классы уже не актуально - объекты рулят

manager: list =[]

def percentage_of_sales(sales: int):
    percentage: int = 0
    if sales < 500:
        percentage = sales / 100 * 3
    elif sales < 1000:
        percentage = sales / 100 * 5
    else:
        percentage = sales / 100 * 8
    return percentage


def find_best_manager(manager: list):
    max_sales: int = 0
    who_is_the_best: list = []
    
    for one in manager:
        if one['sales'] == max_sales:
            who_is_the_best.append(one['id'])

        elif one['sales'] > max_sales:
            who_is_the_best.clear()
            who_is_the_best.append(one['id'])
            max_sales = one['sales']

    return [max_sales, who_is_the_best]


manager.append(  {

    'id': 0,
    'name': 'Иванов',
    'sales': 0,
    'salary': 200

})


manager.append(  {

    'id': 1,
    'name': 'Петров',
    'sales': 0,
    'salary': 200

})

manager.append( {

    'id': 2,
    'name': 'Кац',
    'sales': 0,
    'salary': 300 # Пишем программы приближенные к реальности

})

for m in manager:
    m['sales'] = int(input('Какие продажи у менеджера ' + m['name'] + ': '))
   


the_best = find_best_manager(manager)

    
print(the_best) # [максимальная_сумма_продаж, список_лучших]


for m in manager:
    m['salary'] += percentage_of_sales(m['sales'])


prize = 200 / len(the_best[1])

for i in the_best[1]:
    for m in manager:
        if m['id'] == i:
            m['salary'] += prize



for m in manager:
     print('ИТОГО зарплата у менеджера ' , m['name'] , ': ', m['salary'])