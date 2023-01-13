from django.shortcuts import render
from .models import Feed
from .serializers import FeedSerializer

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound



# 조회 / 생성
class Feeds(APIView):
    def get(self, request):
        model = Feed.objects.all()
        serializer = FeedSerializer(model, many=True)
        return Response(serializer.data)
    
    
    def post(self, request):
        serializer = FeedSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


# Create your views here.
class Modify_Feeds(APIView):
    def get_object(self, feed_id):
        try:
            return Feed.objects.get(id=feed_id)
        except Feed.DoesNotExist:
            raise NotFound

    def get(self, request, feed_id):
        model = self.get_object(feed_id)
        serializer = FeedSerializer(model)
        return Response(serializer.data)
    
     # feed 갱신
    def put(self,request,feed_id):
        feed = Feed.objects.get(id=feed_id)
        serializer = FeedSerializer(feed, data=request.data)
        
        if serializer.is_valid():
            feed = serializer.save()
            serializer = FeedSerializer(feed)
            return Response(serializer.data)
        else:
            return Response("invalid request")
            
        
    # email 로 feed 삭제
    def delete(self, request, feed_id):
        feed = Feed.objects.get(pk=feed_id)
        feed.delete()
        return Response({"result":"success"})
    
