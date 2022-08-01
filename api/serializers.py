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
        borrower_data = request.pop('borrower')
        book_data = request.pop('book')
        order = Order.objects.create(**request) # Must be configured to 
        Borrower.objects.create(**borrower_data)
        Book.objects.create(**book_data)
        return order


    class Meta:
        model = Order
        fields = ['id', 'borrower',
                  'book', 'status', 'created', 'modified']
