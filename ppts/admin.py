from django.contrib import admin
from .models import PPT
# Register your models here.
@admin.register(PPT)
class PPTAdmin(admin.ModelAdmin):
    list_display = ("feed","pk", "img","contents",)
    search_fields = ("feed","pk", "img","contents",)