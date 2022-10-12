from django.db import models

# Create your models here.


class Menuitem(models.Model):
    name = models.CharField(max_length=255)
    price = models.CharField(max_length=255)
    type = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.name


class Order(models.Model):
    name = models.TextField()
    phone = models.TextField()
    order = models.JSONField()

    def __str__(self):
        return self.name
