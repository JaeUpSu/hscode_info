from rest_framework.serializers import ModelSerializer
from .models import PPT

class PPTSerializer(ModelSerializer):
    class Meta:
        model = PPT
        fields = ("title","subtitle","contents","info","img",)
        