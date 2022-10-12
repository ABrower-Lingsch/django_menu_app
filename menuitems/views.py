from django.shortcuts import render

# Create your views here.

from rest_framework import generics

from .models import Menuitem, Order
from .serializers import MenuitemSerializer, OrderSerializer

# Create your views here.


class MenuitemListAPIView(generics.ListAPIView):
    queryset = Menuitem.objects.all()
    serializer_class = MenuitemSerializer


class OrderListAPIView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
