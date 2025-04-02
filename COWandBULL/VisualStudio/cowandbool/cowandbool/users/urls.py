from django.contrib import admin
from django.urls import include, path

from . import views

urlpatterns = [

    path('signup/', views.signup, name='signup'),
    path('userlist/',views.userlist,name='userlist'),
    path('send_message/',views.send_message,name='send_message')
]