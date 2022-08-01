from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from .serializers import OrderSerializer, Order


# Welcome message at /api
def main(request):
    return HttpResponse('Welcome! Try /api/books /api/book or /api/orders')

# Sends book details to /api/book/google_books_id
def book(request):
    return JsonResponse({
  "result": {
    "title": "The Cat in the Hat",
    "authors": ["Dr. Seuss"],
    "year": "2009",
    "thumbnail": "https://books.google.com/books/content?id=-6YERAAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE719SuOq9TF1Hi0VcTAGqUOgQuWHvBJtRc4pn0PPgW2Xoj0jQQ8xKmz6tNC53yA2pONlCIsM0Ns07hIXtZTG-aPuZtE-52kQzoeN7sOiW9YbAt0CYdxj3RfSZkSDGSzakmU4P-Df&source=gbs_api",
    "isbn_10": "0007347456",
    "isbn_13": "9780007347452",
    "google_books_id": "-6YERAAACAAJ",
    "publisher": "HarperCollins Children's",
    "category": "Juvenile Fiction / Imagination & Play",
    "description": "This classic book in a fantastic new format will make the perfect gift for Dr Seuss fans! When the Cat in the Hat steps in on the mat, Sally and her brother are in for a roller-coaster ride of havoc and mayhem! The Cat in the Hat is now available for the first time in picture book format. When Sally and her brother are left alone, they think they're in for a dull day - until the Cat in the Hat steps in on the mat, bringing with him mayhem and madness! This is the classic book that every child should have the joy of reading."
  }
})

# Sends book search data to /api/books?q=searchterms
def books(request):
    return JsonResponse({
  "results": [
    {
      "title": "The Cat in the Hat [Green Back Book Edition]",
      "authors": ["Seuss"],
      "year": "2016",
      "small_thumbnail": "https://books.google.com/books/content?id=pi0WDAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "isbn_10": "000820151X",
      "isbn_13": "9780008201517",
      "google_books_id": "pi0WDAEACAAJ"
    },
    {
      "title": "Dr. Seuss - the Cat in the Hat [60th Anniversary Edition]",
      "authors": ["Seuss"],
      "year": "2017",
      "small_thumbnail": "https://books.google.com/books/content?id=DV0RvgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "isbn_10": "0008219613",
      "isbn_13": "9780008219611",
      "google_books_id": "DV0RvgAACAAJ"
    },
    {
      "title": "The Cat in the Hat's Great Big Flap Book",
      "authors": ["Dr. Seuss"],
      "year": "1999",
      "small_thumbnail": "https://books.google.com/books/content?id=SVxg6qygZa4C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "isbn_10": "0679893601",
      "isbn_13": "9780679893608",
      "google_books_id": "SVxg6qygZa4C"
    },
    {
      "title": "The Cat in the Hat Song Book",
      "authors": ["Dr. Seuss"],
      "year": "1967",
      "small_thumbnail": "https://books.google.com/books/content?id=4IOIDQAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "isbn_10": "0394816951",
      "isbn_13": "9780394816951",
      "google_books_id": "4IOIDQAAQBAJ"
    },
    {
      "title": "CAT IN THE HAT'S LEARNING LIBRARY.",
      "authors": ["Dr. Seuss"],
      "year": "2017",
      "small_thumbnail": "https://books.google.com/books/content?id=Z_G-zQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "isbn_10": "000794716X",
      "isbn_13": "9780007947164",
      "google_books_id": "Z_G-zQEACAAJ"
    },
    {
      "title": "The Cat in the Hat Comes Back",
      "authors": ["Dr. Seuss"],
      "year": "2018",
      "small_thumbnail": "https://books.google.com/books/content?id=_E5BDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "isbn_10": "0008202516",
      "isbn_13": "9780008202514",
      "google_books_id": "_E5BDwAAQBAJ"
    },
    {
      "title": "Dr. Seuss's Beginner Book Collection",
      "authors": ["Dr. Seuss"],
      "year": "2009",
      "small_thumbnail": "https://books.google.com/books/content?id=R9BXXwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "isbn_10": "0375851569",
      "isbn_13": "9780375851568",
      "google_books_id": "R9BXXwAACAAJ"
    },
    {
      "title": "The Cat in the Hat",
      "authors": ["Dr. Seuss"],
      "year": "2009",
      "small_thumbnail": "https://books.google.com/books/content?id=-6YERAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "isbn_10": "0007347456",
      "isbn_13": "9780007347452",
      "google_books_id": "-6YERAAACAAJ"
    },
    {
      "title": "Dr. Seuss’s Sleep Book",
      "authors": ["Dr. Seuss"],
      "year": "2019",
      "small_thumbnail": "https://books.google.com/books/content?id=9t2BDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "isbn_10": "0008342814",
      "isbn_13": "9780008342814",
      "google_books_id": "9t2BDwAAQBAJ"
    },
    {
      "title": "Cat in the Hat English and French",
      "authors": ["Dr. Seuss"],
      "year": "1967",
      "small_thumbnail": "https://books.google.com/books/content?id=PSnE1KAG4ZkC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "isbn_10": "0394801717",
      "isbn_13": "9780394801711",
      "google_books_id": "PSnE1KAG4ZkC"
    }
  ]
})

class OrderDetail():
  pass

# Provides access to Order table at /api/orders
class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
