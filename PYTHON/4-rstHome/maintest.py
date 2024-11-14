import re
import string

userStr="My cell phone numbers: Vodafone +38(095)1234567; Cellcom +38(067)9875612"

match1 = re.findall('[(38)(095)]', userStr)
print(match1)
myList = [123,'asdf','gjhd',4,'adgdsag']

genStr = [ i * 3 for i in 'qbcdefg']
print(genStr)
genList = [ [i,i+1] for i in range(0,10)]
print(genList)