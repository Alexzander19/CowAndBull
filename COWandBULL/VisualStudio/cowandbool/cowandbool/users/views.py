from django.shortcuts import redirect, render

from users.models import User, Message
from users.forms import SignupForm

# Create your views here.

def signup(request):
  if request.method == 'POST':
    form = SignupForm(request.POST, request.FILES)

    if form.is_valid():
      user = form.save(commit=False)
      user.set_password(form.cleaned_data['password'])  # Хэшируем пароль
      
      if form.cleaned_data['avatar_pic']:# Проверяем что картинка- картинка
        user.avatar_pic = form.cleaned_data['avatar_pic']

      user.save()
      return redirect('signin')
  else:
    form = SignupForm()
  return render(request, 'users/signup.html', {'form': form})


def userlist(request):
  users=User.objects.all()

  return render(request,'users/userslist.html',{'users': users})

def messages(request):
  messages = Message.objects.all()
  
