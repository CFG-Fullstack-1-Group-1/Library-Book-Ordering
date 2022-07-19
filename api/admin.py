from django.contrib import admin
from .models import Order

# Register your models here.
class OrderAdmin(admin.ModelAdmin):
    list_display = ("id", "title")

admin.site.register(Order, OrderAdmin)