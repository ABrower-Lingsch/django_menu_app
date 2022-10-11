from rest_framework import serializers

from .models import Menuitem


class MenuitemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menuitem
        fields = ('id', 'name', 'price')
        # fields = '__all__'
