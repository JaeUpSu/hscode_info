from django.contrib import admin
from .models import User

# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("pk", "name", "tel", "email", "request",)
    search_fields = ("pk", "name", "request", )
    