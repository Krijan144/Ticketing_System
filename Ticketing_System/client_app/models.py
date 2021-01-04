from django.db import models


# Create your models here.


class QueryModel(models.Model):
    query = models.CharField(max_length=200)
    ellaborate = models.TextField(max_length=200)
    timestamp = models.DateTimeField(auto_now_add= True)
    updated= models.DateTimeField(auto_now= True)


    def __str__(self):
        return (self.query)

class AnswerModel(models.Model):
    answered_by = models.CharField(max_length=200)
    answer = models.TextField(max_length=200)
    query = models.ForeignKey(QueryModel,on_delete=models.CASCADE)

    def __str__(self):
        return (self.query)