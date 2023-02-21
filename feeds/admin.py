from django.contrib import admin
from .models import Feed
# Register your models here.
@admin.register(Feed)
class PPTAdmin(admin.ModelAdmin):
    list_display = ("pk", "title","info",)
    search_fields = ("pk", "title","info",)
    