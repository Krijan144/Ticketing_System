from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import UserRegisterForm,QueryForm
from .models import UserModel,AnswerModel
from django.contrib.auth.decorators import login_required
from django.views.generic import CreateView, ListView
from .serializers import AnswerSerializer
from rest_framework import status
from rest_framework.decorators import api_view,permission_classes
from django.http import JsonResponse
from rest_framework import permissions
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
            return HttpResponse('Your Query Has Been Submitted!!')
    else:
        form = QueryForm()
    return render(request, 'query.html', {'form': form})

@api_view(["GET"])
@permission_classes((permissions.AllowAny,))
def get_answer(request):
    answer = AnswerModel.objects.all()
    serializer = AnswerSerializer(answer,many=True)
    return JsonResponse({'answer': serializer.data}, safe=False, status=status.HTTP_200_OK)



