from django.contrib import admin
from .models import Order

# Register your models here.
class OrderAdmin(admin.ModelAdmin):
    list_display = ('order_id', 'borrower_id', 'book_id')

admin.site.register(Order, OrderAdmin)