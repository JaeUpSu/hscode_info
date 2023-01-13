from django.urls import path
from . import views

urlpatterns = [
    path("", views.Feeds.as_view()),
    path("<str:feed_id>", views.Modify_Feeds.as_view()),
]
