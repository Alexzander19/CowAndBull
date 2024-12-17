from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),

     # ex: /blog/5/
    path("<int:question_id>/", views.title, name="title"),
    # ex: /blog/5/results/
    path("<int:question_id>/results/", views.results, name="results"),
   
]
