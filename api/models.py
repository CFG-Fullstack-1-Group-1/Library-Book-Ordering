from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Order(models.Model):
    # Primary key order_id added by default
    user = models.ForeignKey(
        'User', null=True, on_delete=models.SET_NULL, related_name="orders")  # Many orders to one user ID
    borrower = models.ForeignKey(
        'Borrower', null=True, on_delete=models.SET_NULL, related_name="orders")  # Many orders to one borrower ID
    book = models.ForeignKey(
        'Book', null=True, on_delete=models.SET_NULL, related_name="orders")  # Many orders to one book ID
    StatusChoice = models.TextChoices('StatusChoice', 'Pending Ordered Declined')
    status = models.CharField(max_length=40, choices=StatusChoice.choices)
    created = models.DateTimeField(auto_now_add=True)   # Django's built-in
    modified = models.DateTimeField(auto_now=True)      # DateTime feature

    def __str__(self):
        return f"{self.id}: {self.book}"


class Borrower(models.Model):
    membership_number = models.CharField(max_length=20)
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.membership_number}: {self.name}"


class Book(models.Model):
    # Primary key book_id added by default
    title = models.CharField(max_length=100, null=False)
    authors = models.CharField(max_length=100)
    year = models.IntegerField()
    publisher = models.CharField(max_length=50)
    category = models.CharField(max_length=100)
    isbn_10 = models.CharField(max_length=10)  # Should never be longer than 10
    isbn_13 = models.CharField(max_length=13)  # or 13 digits
    google_books_id = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.title}: {self.authors}"


class User(AbstractUser):
    pass