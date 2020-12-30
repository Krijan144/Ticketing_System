from rest_framework import serializers
from .models import QueryModel,AnswerModel

class QuerySerializer(serializers.ModelSerializer):
    class Meta:
        model = QueryModel
        fields = ['username','query','timestamp','updated']

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnswerModel
        fields = ['answered_by','answer','query']