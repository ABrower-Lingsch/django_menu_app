from django.shortcuts import render

# Create your views here.

from rest_framework import generics

from .models import Menuitem
from .serializers import MenuitemSerializer

# Create your views here.


class MenuitemListAPIView(generics.ListAPIView):
    queryset = Menuitem.objects.all()
    serializer_class = MenuitemSerializer
