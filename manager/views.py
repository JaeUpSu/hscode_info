from django.shortcuts import render
from .models import Manager
from .serializers import ManagerSerializer

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound


# Create your views here.

# 조회 / 생성
class Managers(APIView):
    def get(self, request):
        model = Manager.objects.all()
        serializer = ManagerSerializer(model, many=True)
        return Response(serializer.data)
    
    
    def post(self, request):
        serializer = ManagerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


# Create your views here.
class Modify_Managers(APIView):
    def get_object(self, manager_id):
        try:
            return Manager.objects.get(id=manager_id)
        except Manager.DoesNotExist:
            raise NotFound

    def get(self, request, manager_id):
        model = self.get_object(manager_id)
        serializer = ManagerSerializer(model)
        return Response(serializer.data)
    
     # manager 갱신
    def put(self,request,manager_id):
        manager = Manager.objects.get(id=manager_id)
        serializer = ManagerSerializer(manager, data=request.data)
        
        if serializer.is_valid():
            manager = serializer.save()
            serializer = ManagerSerializer(manager)
            return Response(serializer.data)
        else:
            return Response("invalid request")
            
        
    # email 로 manager 삭제
    def delete(self, request, manager_id):
        manager = Manager.objects.get(pk=manager_id)
        manager.delete()
        return Response({"result":"success"})
    
