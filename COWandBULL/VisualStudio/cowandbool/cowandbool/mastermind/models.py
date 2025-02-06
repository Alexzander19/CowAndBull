from django.db import models

# Create your models here.


class Game(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=1000)
    difficulty = models.PositiveSmallIntegerField(default=1) # Уровень сложности игры
    # еще при добавлении игр нужен будет адрес ее размещения или url
