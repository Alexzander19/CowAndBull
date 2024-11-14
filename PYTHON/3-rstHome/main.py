
# Создаем всего два треугольника.
# Большой и маленький.
# Вывод нужного изображения на экран осуществляется за счет
# работы с циклом вывода символов (слева на право, с права на лево, сверху аниз, с низу вверх или же их комбинации)


# list_of_star_triangle = [ ['0'] * 11 ] * 11 Видимо, из-за того, что каждая строка это ссылка, то при изменении этого массива сохряняются только одинаковые символы


list_of_star_triangle = []
list_of_star_small_triangle = []

for i in range(0,11):
    list_of_star_triangle.append([])
    list_of_star_small_triangle.append([])
    for j in range(0,11):
        list_of_star_triangle[i].append([])
        list_of_star_small_triangle[i].append([])
    

# О УЧИТЕЛЬ! ДВАНИИЛ. КАКОЙ ЕСТЬ ПРОСТОЙ (ПРАВИЛЬНЫЙ) СПОСОБ ЗАДАВАТЬ ПУСТОЙ  МАССИВ НУЖНОГО РАЗМЕРА?

# Создаем большой треугольник 


for i in range(0,11):
    
   
    for j in range(0,11):
        # print(i,j)
        if j - i >= 0:
            list_of_star_triangle[i][j] = '*'
        else:
            list_of_star_triangle[i][j] = ' '

# print(list_of_star_triangle)       

# Создаем маленький треугольник

for i in range(0,6):
    
    for j in range(0,6):
        
        # print(i,j)
        if j <= 5:
            if j - i >= 0:
                list_of_star_small_triangle[i][j] = '*'
                list_of_star_small_triangle[i][10 - j] = '*' # j пятый один раз перезаписывается
            else:
                list_of_star_small_triangle[i][j] = ' '
                list_of_star_small_triangle[i][10 - j] = ' '

    
    for i in range(6,11):
        for j in range(0,11):
            list_of_star_small_triangle[i][j] = ' '




def print_any_triangle(triangle,type: str):
    
    print(' ' + '___' * 11)

    for i in range(0,11):
        print('|',end = '')
        for j in range(0,11):
            if type == 'а' or type == 'в':
                k = i
                l = j
            elif type == 'б' or type == 'г':
                k = 10 - i
                l = 10 - j
            elif type == 'и' or type == 'ж':
                k =  j
                l = 10 - i 
            elif type == 'к' or type == 'з':
                k = 10 - j
                l = i
            elif type == 'д':
                if i <= 5:
                    k = i
                    l = j
                else:
                    k = 10 - i
                    l = 10 - j
            elif type == 'е':
                if j <= 5:
                    k =  j
                    l = 10 - i 
                else:
                    k = 10 - j
                    l = i
            else:
                k = i
                l = j
        
            print(triangle[k][l],' ', end = '')
        print('|')
        
    print(' ' + '---' * 11)
    print(' ' * 16 + type )
 


for i in 'абвгдежзик':
    if i == 'а' or i == 'б' or i =='и' or i== 'к':
        print_any_triangle(list_of_star_triangle,i)
    else:
        print_any_triangle(list_of_star_small_triangle,i)












