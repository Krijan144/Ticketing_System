from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import QueryModel

class UserRegisterForm(UserCreationForm):
    
    email = forms.EmailField()
    phone = forms.IntegerField()
    
    class Meta:
        model = User
        fields = ['username', 'email','phone', 'password1', 'password2']

class QueryForm(forms.ModelForm):

    class Meta:
        model = QueryModel
        fields = ['username','query']
