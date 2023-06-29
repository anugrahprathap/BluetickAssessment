from django.shortcuts import render
from rest_framework.views import APIView 
from rest_framework.response import Response 
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import ensure_csrf_cookie
from .models import *

class Login(APIView):
    def post(self, request):
        data = request.data
        username = data['username']
        password = data['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response('Success', 203)  # Redirect to the desired page after successful login
        else:
            return Response('error', 201)

class Bookview(APIView):
    def get(self, request):
        # Retrieve all books and create a list of dictionaries with book information
        output = [{'Book': book.bname,
                   'Author': book.author} 
                  for book in Books.objects.all()]
        return Response(output)
