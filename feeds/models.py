import os
from django.db import models
from manager.models import Manager


# Create your models here.
class Feed(models.Model):
    manager = models.ForeignKey(Manager, on_delete=models.CASCADE, null=True)
    url = models.URLField()
    image = models.ImageField(blank=True, upload_to="my_webs")
    title = models.CharField(max_length=80)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
    