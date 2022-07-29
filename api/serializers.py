from rest_framework import serializers
from .models import Order, Borrower, Book

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'borrower_id',
                  'book_id', 'status', 'created', 'modified']


class BorrowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Borrower
        fields = ['id', 'name']


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'authors', 'year', 'publisher',
                  'category', 'isbn_10', 'isbn_13', 'google_books_id']