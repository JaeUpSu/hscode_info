from django.db import models
from feeds.models import Feed
# Create your models here.
class PPT(models.Model):
    feed = models.ForeignKey(Feed, on_delete=models.CASCADE)
    contents = models.TextField(max_length=400)
    img = models.URLField(blank=True)