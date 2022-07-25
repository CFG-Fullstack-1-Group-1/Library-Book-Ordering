from django.db import models

# Create your models here.
class Order(models.Model):
    order_id = models.IntegerField(primary_key=True)  # Primary key
    user_id = models.ForeignKey(
        'User', null=True, on_delete=models.SET_NULL)  # Many orders to one user ID
    borrower_id = models.ForeignKey(
        'Borrower', null=True, on_delete=models.SET_NULL)  # Many orders to one borrower ID
    book_id = models.ForeignKey(
        'Book', null=True, on_delete=models.SET_NULL)  # Many orders to one book ID
    status = models.CharField(max_length=50)
    created = models.DateTimeField(auto_now_add=True)   # Django's built-in
    modified = models.DateTimeField(auto_now=True)      # DateTime feature


class Borrower(models.Model):
    borrower_id = models.IntegerField(primary_key=True)  # Primary key
    name = models.CharField(max_length=50)


class Book(models.Model):
    book_id = models.IntegerField(primary_key=True)  # Primary key
    title = models.CharField(max_length=100, null=False)
    authors = models.CharField(max_length=100)
    year = models.IntegerField()
    publisher = models.CharField(max_length=50)
    category = models.CharField(max_length=100)
    isbn_10 = models.CharField(max_length=10)  # Should never be longer than 10
    isbn_13 = models.CharField(max_length=13)  # or 13 digits
    google_books_id = models.CharField(max_length=50)


class User(models.Model):  # added temporarily to
    user_id = 'testuser'  # stop errors when running server
