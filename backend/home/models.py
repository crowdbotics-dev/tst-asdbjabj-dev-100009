from django.conf import settings
from django.db import models
class Payment(models.Model):
    'Generated Model'
    email = models.EmailField(max_length=254,)
    name = models.CharField(max_length=200,)
    address = models.CharField(max_length=200,)
    city = models.CharField(max_length=200,)
    state = models.CharField(max_length=200,)
    zip = models.CharField(max_length=200,)
    country = models.CharField(max_length=200,)
