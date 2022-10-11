from django.urls import path
from .views import MenuitemListAPIView

urlpatterns = [
    path('menuitems/', MenuitemListAPIView.as_view()),
]
