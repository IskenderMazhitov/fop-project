from rest_framework import serializers, viewsets
from .models import Student, NewStudent
from .serializers import StudentSerializer, NewStudentSerializer


class StudentViewset(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class NewStudentViewset(viewsets.ModelViewSet):
    queryset = NewStudent.objects.all()
    serializer_class = NewStudentSerializer
    