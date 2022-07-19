from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from django.views.generic import TemplateView
from .serializers import OrderSerializer, Order

# Create your views here.
def main(request):
    return HttpResponse('Welcome! Try /books or /book')

def book(request):
    return JsonResponse({'result': 'Book 1'})

def books(request):
    return JsonResponse({'results': [{'result': 'Book 1'}, {'result': 'Book 2'}]})

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()