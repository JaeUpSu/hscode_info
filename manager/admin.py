from django.contrib import admin
from .models import Manager

# Register your models here.
@admin.register(Manager)
class ManagerAdmin(admin.ModelAdmin):
    list_display = ("id", "password", "name", "info", "email",)