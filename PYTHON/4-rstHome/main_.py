from string import Formatter
formatter = Formatter()
print(formatter.format('{userLog}',
 userLog = 'Admin')) #Admin
print(formatter.format('{} {userLog}', 'Welcome, ',
 userLog = 'Admin')) #Welcome, Admin
print('{} {userLog}'.format('Welcome, ',
 userLog = 'Admin')) #Welcome, Admin