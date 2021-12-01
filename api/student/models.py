from django.db import models

# Create your models here.


class Student(models.Model):
    name = models.CharField(max_length=250,
                            default='',
                            blank=True)
    slug = models.CharField(max_length=250,
                            default='',
                            blank=True)
    leave = models.CharField(max_length=250,
                             default='',
                             blank=True)
    come = models.CharField(max_length=250,
                            default='',
                            blank=True)
    status = models.CharField(max_length=250,
                              default='',
                              blank=True)


class NewStudent(models.Model):
    name = models.CharField(max_length=250,
                            default='',
                            blank=True)
    slug = models.CharField(max_length=250,
                            default='',
                            blank=True)
    leave = models.CharField(max_length=250,
                             default='',
                             blank=True)
    come = models.CharField(max_length=250,
                            default='',
                            blank=True)
    status = models.CharField(max_length=250,
                              default='',
                              blank=True)
