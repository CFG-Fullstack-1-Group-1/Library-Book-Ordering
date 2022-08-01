from django.contrib import admin
from .models import Order, Borrower, Book

# Register your models here.
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'borrower_id', 'book_id')

admin.site.register(Order, OrderAdmin)

@admin.register(Borrower)
class BorrowerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

# admin.site.register(Borrower, BorrowerAdmin)

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'authors')

# admin.site.register(Book, BookAdmin)