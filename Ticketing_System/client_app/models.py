from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserModel(models.Model):
 username = models.CharField(max_length=20)
 email = models.EmailField(max_length=200)
 password = models.CharField(max_length=20)
 query = models.CharField(max_length=200)
  
def __str__(self):
    return (self.username)
