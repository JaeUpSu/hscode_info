from django.db import models

# Create your models here.
class Admin(models.Model):
    id = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    name = models.CharField(max_length=30)
    info = models.TextField()
    email = models.EmailField()
    
    def __str__(self):
        return self.name