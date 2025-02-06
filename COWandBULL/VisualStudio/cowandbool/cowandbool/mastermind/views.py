from django.shortcuts import render

from users.models import User

# Create your views here.

def index(request):

    users=User.objects.all()
    return render(request,'mastermind/index.html',{'users': users})

def test_show(request):

    users=User.objects.all()
    return render(request,'mastermind/testcol.html',{'users': users})