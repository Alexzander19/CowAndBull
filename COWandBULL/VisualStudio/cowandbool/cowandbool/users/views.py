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


def send_message(request):
  if request.method == 'POST':

    if request.user.is_authenticated:
      user = request.user
      message = request.POST['message']
      to_user_input = request.POST['message_to'] # на страничке INPUT не виден, но значение берем не из span, а из INPUT
      is_anonim_check = request.POST.get('is_anonim','false') # если чекбокс не отмечен, то он в запросе POST не передается.
                                                      # получает значение чекбокса или 'false', если чекбокс не был отмечен.

      

      if to_user_input != "" and to_user_input != 'Инкогнито':
        to_user = User.objects.get(username=to_user_input)
      else:
        to_user = None

      # if is_anonim_check == 'true':
      #   is_anonim = True
      # else:
      #   is_anonim = False
      # тоже самое:
      is_anonim = is_anonim_check == 'true'

      # description = request.POST['description']
      new_message = Message.objects.create(message=message, from_user=user,is_anonim=is_anonim,to_user=to_user)
      return redirect('deep')
    
  return render(request, 'deep')
  
