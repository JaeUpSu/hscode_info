from rest_framework.serializers import ModelSerializer
from .models import Feed

class FeedSerializer(ModelSerializer):
    class Meta:
        model = Feed
        exclude = ("manager",)
        