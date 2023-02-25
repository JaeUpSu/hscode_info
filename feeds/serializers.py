from rest_framework.serializers import ModelSerializer
from ppts.serializers import PPTSerializer
from .models import Feed

class FeedSerializer(ModelSerializer):
    ppts = PPTSerializer(many=True, read_only=True)
    class Meta:
        model = Feed
        fields = ("title","subtitle","contents","info","img","ppts",)
        