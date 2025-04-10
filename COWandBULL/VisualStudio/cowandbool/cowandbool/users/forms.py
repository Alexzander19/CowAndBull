from django import forms
from users.models import User, Message

class SignupForm(forms.ModelForm):
  confirm_password = forms.CharField(widget=forms.PasswordInput(attrs={
    'class': 'form-control',
    'id': 'floatingPasswordConfirm',
    'placeholder': 'Подтверждение пароля',
    'autocomplete': 'off',
    'required': True
  }))

  class Meta:
    model = User
    fields = ['first_name', 'username', 'age_now','avatar_pic','password']
    widgets = {
      'first_name': forms.TextInput(attrs={
        'class': 'form-control',
        'id': 'floatingFirstname',
        'aria-label': 'Ваше имя',
        'placeholder': 'placeholder зачем он',
        'required': True,
      }),
      
      'username': forms.TextInput(attrs={
        'class': 'form-control',
        'id': 'floatingUsername',
        'placeholder': 'placeholder Логин пользователя',
        'aria-label': 'Логин пользователя',
        'required': True,
      }),

      'age_now': forms.NumberInput (attrs={
        'class': 'form-control',
        'id': 'floatingUserage',
        'placeholder': 'placeholder возраст',
        'required': True
      }),

      'avatar_pic': forms.FileInput(attrs={
        'class': 'form-control',
        'id': 'image_field',
        'placeholder': 'placeholder картинка',
        'required': False

      }),
      'password': forms.PasswordInput(attrs={
        'class': 'form-control',
        'id': 'floatingPassword',
        'placeholder': 'placeholder Пароль',
        'required': True,
        
      }),
    }

  def clean(self):
    cleaned_data = super().clean()
    password = cleaned_data.get('password')
    confirm_password = cleaned_data.get('confirm_password')
    if password != confirm_password:
      raise forms.ValidationError('Пароли не совпадают!')
    return cleaned_data
  

  # class Meta:
  #   model = Message
  #   fields = ['is_anonim']
  #   widgets = {
  #     'is_anonim': forms.CheckboxInput(attrs={
       
  #       'aria-label': 'Остаться инкогнито',
  #     }),
  #   }
      
