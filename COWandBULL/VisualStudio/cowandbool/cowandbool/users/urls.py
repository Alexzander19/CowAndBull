from django.contrib import admin
from django.urls import include, path

from . import views

urlpatterns = [

    path('signup/', views.signup, name='signup'),
    path('userlist/',views.userlist,name='userlist'),
    path('send_message/',views.send_message,name='send_message'),
    path('delete-message/<int:message_id>/', views.delete_message, name='delete_message'),
    path('get-messages-html/', views.get_messages_html, name='get_messages_html'),
]