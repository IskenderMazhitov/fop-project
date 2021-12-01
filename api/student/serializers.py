from rest_framework import serializers
from .models import Student
from .models import NewStudent


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'name', 'slug', 'leave', 'come', 'status')


class NewStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewStudent
        fields = ('id', 'name', 'slug', 'leave', 'come', 'status')
