from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from .serializers import OrderSerializer, Order
from .util import get_book_details, get_books
from django.utils.datastructures import MultiValueDictKeyError


# Welcome message at /api
def main(request):
    return HttpResponse('Welcome! Try /api/books /api/book or /api/orders')

# Sends book details to /api/book/google_books_id
def book(request, google_books_id=""):
    return JsonResponse(get_book_details(google_books_id))

# Sends book search data to /api/books/?q=searchterms
def books(request):
    # If q isn't provided return an error message.
    try:
        q = request.GET["q"]
    except MultiValueDictKeyError as e:
        return JsonResponse({
  "error": {
    "code": 400,
    "message": "Required parameter: q",
    "errors": [
      {
        "message": "Required parameter: q",
        "domain": "global",
        "reason": "required"
      }
    ]
  }
})
    return JsonResponse(get_books(q))

class OrderDetail():
  pass

# Provides access to Order table at /api/orders
class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
