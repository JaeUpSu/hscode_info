from django.shortcuts import render
from .models import User
from .serializers import UserSerializer

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from .utils.discord_bot import send_message

class Users(APIView):
    def get(self, request):
        model = User.objects.all()
        serializer = UserSerializer(model, many=True)
        return Response(serializer.data)
    
    
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            send_message(serializer.data)
            return Response(serializer.data)
        return Response(serializer.errors)

class Modify_User(APIView):
    def get_object(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            raise NotFound

    def get(self, request, user_id):
        model = self.get_object(user_id)
        serializer = UserSerializer(model)
        return Response(serializer.data)
    
     # user 갱신
    def put(self,request,user_id):
        user = User.objects.get(pk=user_id)
        serializer = UserSerializer(user, data=request.data)
        
        if serializer.is_valid():
            user = serializer.save()
            serializer = UserSerializer(user)
            return Response(serializer.data)
        else:
            return Response("invalid request")
            
        
    # email 로 user 삭제
    def delete(self, request, user_id):
        user = User.objects.get(pk=user_id)
        user.delete()
        return Response({"result":"success"})
    
