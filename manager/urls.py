from django.urls import path
from . import views

urlpatterns = [
    path("", views.Managers.as_view()),
    path("<str:manager_id>", views.Modify_Managers.as_view()),
]
