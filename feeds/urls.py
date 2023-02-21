from django.urls import path
from . import views

urlpatterns = [
    path("", views.Feeds.as_view()),
    path("<int:ppt_id>", views.Modify_Feed.as_view()),
]
