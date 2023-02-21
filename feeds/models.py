from django.db import models

# Create your models here.
class Feed(models.Model):
    title = models.CharField(max_length=30)
    subtitle = models.CharField(max_length=30)
    contents = models.TextField(max_length=400)
    info = models.CharField(max_length=60)
    img = models.URLField(blank=True)
    
    def __str__(self) -> str:
        return str(self.pk)