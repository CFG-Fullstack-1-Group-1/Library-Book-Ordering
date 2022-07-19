from django.db import models

# Create your models here.
class Order(models.Model):
    title = models.CharField(max_length=100, null=False)