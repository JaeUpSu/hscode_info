from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=20)
    tel = models.CharField(max_length=20)
    email = models.EmailField()
    request = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name + " ({})".format(self.pk)