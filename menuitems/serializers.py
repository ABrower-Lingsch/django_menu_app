from rest_framework import serializers

from .models import Menuitem, Order


class MenuitemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menuitem
        fields = ('id', 'name', 'price', 'type')
        # fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
