from django.urls import path
from . import views

urlpatterns = [
    path("", views.PPTs.as_view()),
    path("<int:ppt_id>", views.Modify_PPT.as_view()),
]
