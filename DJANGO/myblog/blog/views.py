from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

from .models import Post


def index(request):
    return HttpResponse("Привет! Это приложение blog.")
    #  context = {"latest_question_list": 0}
    #  return render(request, 'index.html', context)

def title(request, question_id):
    # return HttpResponse("Вы смотрите заголовки блогов %s." % question_id)
    latest_question_list = Post.objects.order_by("-published_date")[:5]
    context = {"latest_question_list": latest_question_list}
    return render(request, "index.html", context)


def results(request, question_id):
    response = "Высмотрите каждый блог по отдельности %s."
    return HttpResponse(response % question_id)


