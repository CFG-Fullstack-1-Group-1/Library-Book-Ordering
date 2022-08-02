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



# # ATTEMPT 1 
# class OrderSerializer(serializers.ModelSerializer):
#     book = BookSerializer()
#     borrower = BorrowerSerializer()

#     def create(self, request):
#         # Populates Borrower table with borrower data provided in request
#         borrower_data = request.pop('borrower')
#         Borrower.objects.create(**borrower_data)

#         # Populates Book table with book data provided in request
#         book_data = request.pop('book')
#         Book.objects.create(**book_data)
        
#         # Populates Order table with Order data (status, created, modified) from the request, then obtains and populates Foreign key fields book_id and borrower_id from respective tables
#         order_data = Order.objects.create(**request)
#         return order_data

#     class Meta:
#         model = Order
#         fields = ['id', 'borrower',
#                   'book', 'status', 'created', 'modified']



# ATTEMPT 2 - The error message says that the .save() object I'm pointing to on line 57 is a Nonetype
class OrderSerializer(serializers.ModelSerializer):
    book = BookSerializer()
    borrower = BorrowerSerializer()

    def create(self, request):
        # Populates Borrower table with borrower data provided in request
        borrower_data = request.pop('borrower')
        b1 = Borrower(**borrower_data)
        borrower_save = b1.save(force_insert=True)

        # Populates Book table with book data provided in request
        book_data = request.pop('book')      
        b2 = Book(**book_data)
        book_save = b2.save(force_insert=True)
        
        # Populates Order table with Order data (status, created, modified) from the request, then obtains and populates Foreign key fields book_id and borrower_id from respective tables
        order_data = Order.objects.create(borrower = borrower_save.id, book = book_save.id, **request)        
        return order_data

    class Meta:
        model = Order
        fields = ['id', 'borrower',
                  'book', 'status', 'created', 'modified']



# # ATTEMPT 3 - Using Django .filter()
# class OrderSerializer(serializers.ModelSerializer):
#     book = BookSerializer()
#     borrower = BorrowerSerializer()

#     def create(self, request):
#         # Populates Borrower table with borrower data provided in request
#         borrower_data = request.pop('borrower')
#         Borrower.objects.create(**borrower_data)
#         borrower_id_filtered = Borrower.objects.filter(borrower=object.id).values_list('id', flat=True)

#         # Populates Book table with book data provided in request
#         book_data = request.pop('book')
#         Book.objects.create(**book_data)
#         book_id_filtered = Book.objects.filter(book=object.id).values_list('id', flat=True)
        
#         # Populates Order table with Order data (status, created, modified) from the request, then obtains and populates Foreign key fields book_id and borrower_id from respective tables
         
#         order_data = Order.objects.create(borrower = borrower_id_filtered, book = book_id_filtered, **request)        
#         return order_data
    # class Meta:
    #     model = Order
    #     fields = ['id', 'borrower',
    #               'book', 'status', 'created', 'modified']
