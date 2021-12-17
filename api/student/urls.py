from rest_framework import routers
from .views import NewStudentViewset, StudentViewset, NewStudentSerializer, home
from django.urls import path

router = routers.DefaultRouter()
router.register('student', StudentViewset)
router.register('newstudents', NewStudentViewset)
urlpatterns = [
    path('', home, name='home'),
]
