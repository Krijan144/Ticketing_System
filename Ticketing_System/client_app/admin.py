from django.contrib import admin
from .models import UserModel,AnswerModel

# Register your models here.
admin.site.register(UserModel)
admin.site.register(AnswerModel)

