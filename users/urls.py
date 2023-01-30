from django.urls import path
from . import views

urlpatterns = [
    path("", views.Users.as_view()),
    path("<int:user_id>", views.Modify_User.as_view()),
]
