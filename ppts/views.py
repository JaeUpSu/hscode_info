from django.shortcuts import render
from .models import PPT
from .serializers import PPTSerializer

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound

class PPTs(APIView):
    def get(self, request):
        model = PPT.objects.all()
        serializer = PPTSerializer(model, many=True)
        return Response(serializer.data)
    
    
    def post(self, request):
        serializer = PPTSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class Modify_PPT(APIView):
    def get_object(self, ppt_id):
        try:
            return PPT.objects.get(pk=ppt_id)
        except PPT.DoesNotExist:
            raise NotFound

    def get(self, request, ppt_id):
        model = self.get_object(ppt_id)
        serializer = PPTSerializer(model)
        return Response(serializer.data)
    
    def put(self,request,ppt_id):
        ppt = PPT.objects.get(pk=ppt_id)
        serializer = PPTSerializer(ppt, data=request.data)
        
        if serializer.is_valid():
            ppt = serializer.save()
            serializer = PPTSerializer(ppt)
            return Response(serializer.data)
        else:
            return Response("invalid request")
            
        