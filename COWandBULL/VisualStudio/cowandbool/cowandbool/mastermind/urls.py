from django.contrib import admin
from django.urls import include, path

from . import views

urlpatterns = [
    path('', views.index,name='index'),
    path('t/', views.test_show,name='test'),
    path('deep/',views.test_deepseek,name='deep'),
    path('fire/',views.fireworks,name='fire'),
    path('select/',views.select,name='select')
    
]