from rest_framework import serializers
from .models import *

class BookSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Books
        fields = ['bname', 'author']