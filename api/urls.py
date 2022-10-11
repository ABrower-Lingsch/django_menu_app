from django.urls import path, include

urlpatterns = [
    path('', include('menuitems.urls')),
]
