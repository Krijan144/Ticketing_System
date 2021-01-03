from rest_framework import serializers
from .models import QueryModel,AnswerModel

class QuerySerializer(serializers.ModelSerializer):
    class Meta:
        model = QueryModel
        fields = '__all__'

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnswerModel
        fields = ['answered_by','answer','query']