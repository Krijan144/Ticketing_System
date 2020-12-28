from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import UserRegisterForm,QueryForm
from .models import UserModel
from django.contrib.auth.decorators import login_required
from django.views.generic import CreateView, ListView
# Create your views here.

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserRegisterForm()
    return render(request, 'register.html', {'form': form})

def query(request):
    if request.method == 'POST':
        form = QueryForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = QueryForm()
    return render(request, 'query.html', {'form': form})





