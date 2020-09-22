from django.db import models

# Create your models here.


class Student(models.Model):
    name = models.CharField(max_length=100)
    adm_no = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name