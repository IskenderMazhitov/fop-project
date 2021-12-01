from rest_framework import routers
from .views import NewStudentViewset, StudentViewset, NewStudentSerializer

router = routers.DefaultRouter()
router.register('student', StudentViewset)
router.register('newstudents', NewStudentViewset)
