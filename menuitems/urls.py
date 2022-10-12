from django.urls import path
from .views import MenuitemListAPIView, OrderListAPIView

urlpatterns = [
    path('menuitems/', MenuitemListAPIView.as_view()),
    path('orders/', OrderListAPIView.as_view())
]
