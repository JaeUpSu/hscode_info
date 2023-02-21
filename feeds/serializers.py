from rest_framework.serializers import ModelSerializer
from .models import Feed

class FeedSerializer(ModelSerializer):
    class Meta:
        model = Feed
        fields = ("title","subtitle","contents","info","img",)
        