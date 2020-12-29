from rest_framework import serializers
from .models import UserModel,AnswerModel

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['username','query','timestamp','updated']

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnswerModel
        fields = ['answered_by','answer','question']