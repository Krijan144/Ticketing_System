from django.db import models


# Create your models here.


class UserModel(models.Model):
    username = models.CharField(max_length=200)
    query = models.TextField(max_length=200)
    timestamp = models.DateTimeField(auto_now_add= True)
    updated= models.DateTimeField(auto_now= True)


    def __str__(self):
        return (self.username)

class AnswerModel(models.Model):
    answered_by = models.CharField(max_length=200)
    answer = models.TextField(max_length=200)
    question = models.ForeignKey(UserModel,on_delete=models.CASCADE)