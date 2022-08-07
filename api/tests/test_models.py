from django.test import TestCase
from api.models import Book, Borrower, Order

class BookTest(TestCase):
    def test_create_book(self):
        """
        Test creating Book.
        """
        self.assertEqual(Book.objects.count(), 0)
        Book.objects.create(
            title="The Cat in the Hat",
            authors="Dr. Seuss",
            year=2016,
            publisher="HarperCollins",
            category="Juvenile Fiction",
            isbn_10="0007347456",
            isbn_13="9780007347452",
            google_books_id="-6YERAAACAAJ"
        )
        self.assertEqual(Book.objects.count(), 1)

class BorrowerTest(TestCase):
    def test_create_borrower(self):
        """
        Test creating Borrower.
        """
        self.assertEqual(Borrower.objects.count(), 0)
        Borrower.objects.create(
            id="123456789",
            name="Mary Foggerty"
        )
        self.assertEqual(Borrower.objects.count(), 1)