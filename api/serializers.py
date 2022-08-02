from rest_framework import serializers
from .models import Order, Borrower, Book

class BorrowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Borrower
        fields = ['id', 'name']


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'authors', 'year', 'publisher',
                  'category', 'isbn_10', 'isbn_13', 'google_books_id']


class OrderSerializer(serializers.ModelSerializer):
    book = BookSerializer()
    borrower = BorrowerSerializer()

    def create(self, request):
        # Populates Borrower table with borrower data provided in request
        borrower_data = request.pop('borrower')
        borrower_save = Borrower(**borrower_data)
        borrower_save.save(force_insert=True)

        # Populates Book table with book data provided in request
        book_data = request.pop('book')      
        book_save = Book(**book_data)
        book_save.save(force_insert=True)
        
        # Populates Order table with Order data (status, created, modified) and Foreign key fields book_id and borrower_id
        order_data = Order.objects.create(borrower = borrower_save, book = book_save, **request)        
        return order_data

    class Meta:
        model = Order
        fields = ['id', 'borrower',
                  'book', 'status', 'created', 'modified']
