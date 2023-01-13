from django.contrib import admin
from django.utils.html import format_html
from .models import Feed

# Register your models here.
@admin.register(Feed)
class FeedAdmin(admin.ModelAdmin):
    list_display=("title", "manager", "image", "content", "url",)
    search_fields = ("title", "manager",)