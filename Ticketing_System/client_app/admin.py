from django.contrib import admin
from .models import QueryModel,AnswerModel

# Register your models here.
admin.site.register(QueryModel)
admin.site.register(AnswerModel)

