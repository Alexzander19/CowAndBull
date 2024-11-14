

print('-----------------------------------------------------------------------------------------')
# Аннотация нужна программисту для упрожения работы.
# ai: int = 1
# af: float = 1.3

# b: str = 'asdf'
# c: list = [1,2,3] # массив
# d: tuple = (1,2,3) # массив константа с круглыми скобками!
# f: bool = False
# e = None
# g: dict = {
#     'a': 1,
#     'b': 2
# }


# c[0] = 0
# d[0]  = 0 # ошибка. менять нельзя




# print('Nothing')
# print('Will work')
# print('unless you do')

# print('-----------------------------------------------------------------------------------------')

# print('')
# print('')
# print('\t"Anyone who')
# print('\t   stops')
# print('\t      learning is old,')
# print('\t \t whether at twenty or eighty".')
# print('\t \t \t \t \t Henry Ford')

# print('-----------------------------------------------------------------------------------------')

# a = int(input('Введите число a: '))
# b = int(input('Введите число b: '))

# print('Сумма a и b: ', a + b)

# print('Разница a и b: ', a - b)

# print('Произведение a и b: ', a * b)

# print('-----------------------------------------------------------------------------------------')


# a = int(input('Введите число a (значение): '))
# b = int(input('Введите число b (процент): '))

# c = ( a / 100 ) * b

# print(b , ' процентов от ', a ,' это: ', c )

# print('-----------------------------------------------------------------------------------------')



# a = int(input('Введите число a (сторона a): '))
# b = int(input('Введите число b (сторона b): '))

# s =  a * b

# print(' Площадь прямоугольника: ' , s)

# print('-----------------------------------------------------------------------------------------')

# def myfirstfoo():
#     a = input('Введите число : ')

#     sum: int = 0 
#     j = 1

#     for i in a:
#         sum += int(i)
#         print(j , ' разряд: ', i)
#         j += 1
 
#     print( int(a) )

#     if int(a) > 10:
#         print(' больше 10')
#     elif int(a) == 10:
#         print(' равно 10')
#     else:
#         print(' меньше 10')

    
#     print('Сумма цифр числа: ' , sum)
        

# myfirstfoo()


# def mysecondfoo():
#     a = input('Введите число a: ')
#     b = input('Введите число b: ')
#     str = a + b
#     print(str)

# mysecondfoo()

# def cinf():
#     c = int(input('Температура по Цельсию: '))
#     f = c * 9/5 + 32
#     print(c, ' Градусов цельсия, это: ', f , 'Градусов по Фаренгейту')

# cinf()



# print('______________________________________________________________________________________')

# a :int = int(input('введите число, я скажу четное или нет: '))

# if a % 2 == 0:
#     print(a, ' Even number.')
# else:
#     print(a,' Odd number')    


# print('______________________________________________________________________________________')

# b: int = int(input('введите число, я скажу кратно 7 или нет: '))

# if b % 7 == 0:
#     print(b, ' Number is multiple 7.')
# else:
#     print(b,' Number is not multiple 7.')    

print('______________________________________________________________________________________')

arrStr: str = input('введите числа через запятую, я найду максималшьное: ')

arr: int = arrStr.split(',')

max(arr)
print(arr)

max: int = int(arr[0])
for i in range(1, len(arr), 1):

    if max < int(arr[i]):
        max = int(arr[i])


print('Наибольшее число это: ', max )

print('____________________________________________________________________________________________')

arrStr: str = input('введите числа через запятую, я найду минимальное: ')

arr = arrStr.split(',')

# max(arr)
print(arr)

min: int = int(arr[0])
for i in range(1, len(arr), 1):

    if min > int(arr[i]):
        min = int(arr[i])

print('Минимальное число это: ', min )

print('____________________________________________________________________________________________')

# время до полуночи


# second: int = int(input('Сколько прошло секунд от начала дня? '))
# format: int = int(input('В каких единицах вывести оставшегося времени до полуночи?: (1 - секунд, 2- минут, 3 (или любой символ) - часов)'))
# wait_time: int = 0

# if format == 1:
#     wait_time = 24 * 60 * 60 - second
# elif format == 2:
#     wait_time = 24 * 60 - second / 60
# else:
#     wait_time = 24 - second / 60 / 60

# print('До полуночи осталось: ', wait_time)

# print('____________________________________________________________________________________')

# # Площадь или Периметр

# d: int = int(input('Введите диаметр окружности: '))

# choose: str = input('Вы хотите посчитать: s(S) - площадь, l(L) - периметр: ')

# if choose == 's' or choose == 'S':
#     print('Площадь равна: ', 3.14 * (d / 2) * (d / 2))
# elif choose == 'l' or choose == 'L':
#     print('Периметр равен: ', 3.14 * d )

# print('______________________________________________________________________________________')

# cost: int = int(input('Стоимость приставки: '))
# quantity: int = int(input('Количество приставок: '))
# discount: int = int(input('Скидка процентов: '))
# total_cost: int = 0
# one_cost: int = 0

# choose: str = input('A - общая сумма покупки с учетом скидки; O - стоимость одной со скидкой: ')

# if choose == 'a' or choose == 'A' or choose == 'А' or  choose == 'а':
#     total_cost = cost * quantity * (100 - discount)/100
#     print(total_cost)
# else:
#     one_cost = cost * (100-discount)/100
#     print(one_cost)

# print('_________________________________________________________________________________________')

# size: int = int(input('РАзмер файла в гигабайтах: '))
# speed: int = int(input('Скорость интернет-соединения (бит/сек): '))

# time_to_get: int = ( size * 1024 * 1024 * 1024 * 8 ) / speed

# print( size * 1024 * 1024 * 1024 * 8 )

# choose: str = input(' Скачает за H - часов. M - минут  S - секунд: ')

# if choose == 'S':
#     print('Скачаем за ', time_to_get, ' секунд')
# elif choose == 'M':
#     print('Скачаем за ', time_to_get / 60, ' минут')
# elif choose == 'H':
#     print('Скачаем за ', time_to_get / 60 / 60, ' часов')
# else:
#     print('Так что же вы хотите от меня? ')

    

# print('_________________________________________________________________________________________')

# time_hour: int = int(input('Сколько времени? (в часах): '))

# if time_hour >= 0 and time_hour < 6:
#     print('Good Night')
# elif time_hour >= 6 and time_hour < 13:
#     print('Good Morning')
# elif 13 <= time_hour < 17:
#      print('Good Day')
# elif 17 <= time_hour < 24:
#     print('Good Evening')
# else:
#     print('Введите от 0 до 24 часов')

