from django.shortcuts import render

from users.models import User

# Create your views here.

def index(request):

    users=User.objects.all()
    return render(request,'mastermind/index.html',{'users': users})

def test_show(request):

    users=User.objects.all()
    return render(request,'mastermind/testcol.html',{'users': users})

def test_deepseek(request):

    users=User.objects.all()
    return render(request,'mastermind/DeepSeek2.html',{'users': users})

def fireworks(request):

    return render(request,'mastermind/deepSeekFireworks.html')

def select(request):

    return render(request,'mastermind/select3to6.html')

