from django.db import models
from django.contrib.auth.models import AbstractUser

from mastermind.models import Game

# Create your models here.

class User(AbstractUser):

  # firstname = models.CharField(max_length=100) # не используем. Вместо него встроенный first_name
  age_now = models.PositiveSmallIntegerField(null=True) # Null=True примерный Возраст далее высчитываем относительно даты регистрауии
  # date_of_register = models.DateField(auto_now_add=True) не используем. Вместо него встроенный Date_joined
  # rating_in_game = models.PositiveSmallIntegerField(default=1)
  # rating_active = models.PositiveSmallIntegerField(default=1)
  avatar_pic = models.ImageField(upload_to='static/img',default='static/img/none.bmp')
  little_about = models.TextField(max_length=500)
  status = models.CharField(max_length=20)

  def __str__(self):
    return self.username + ' ' + str(self.age_now) + 'лет'
  
class Rating(models.Model):
  time_speed = models.PositiveIntegerField() # Потраченное время на каждую игру
  step_count = models.PositiveIntegerField() # Количесвто шагов в игре
  some_one = models.IntegerField() # Какой-то еще параметр, может для какой-то игры понадобится

  # вместо всего всего что вверху сама игра возвращает количесвто заработанных очков в игре,
  # мы их суммируем.
  number_of_points = models.PositiveIntegerField(default=0) # Количество очков в игру
  played_games = models.PositiveIntegerField() # Сколько раз играл в игру
  username = models.ForeignKey(User,on_delete=models.CASCADE) # Пользователь для которого рассчитан этот рейтинг
  game = models.ForeignKey(Game,on_delete=models.CASCADE) # Сама игра на которую составлен рейтинг

  def __str__(self):
    return str(self.number_of_points)
  

class Message(models.Model):
  message = models.CharField(max_length=250)
  from_user = models.ForeignKey(User, related_name='from_user', on_delete=models.CASCADE)
  to_user = models.ForeignKey(User, related_name='to_user', on_delete=models.CASCADE,null=True,blank=True)
  picture = models.ImageField(upload_to='static/img',null=True,blank=True)

  # null=True — разрешает хранить NULL в базе данных.
  # blank=True — позволяет оставлять поле пустым в формах и админке.
  time_send = models.DateTimeField(auto_now=True)
  
  is_anonim = models.BooleanField(default=False)
  

  def __str__(self):
    return self.message

