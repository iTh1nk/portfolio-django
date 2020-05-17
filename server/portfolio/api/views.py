from portfolio.models import Posts
from .serializers import PostsSerializer
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import status

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import authenticate
from django.contrib.auth.models import User, Group
from rest_framework.authtoken.models import Token

import datetime
from django.utils import timezone

# from django.shortcuts import render

# def index(request):
#     return render(request, "build/index.html")


@api_view(['POST'])
@permission_classes((AllowAny,))
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    if username is None or password is None:
        return Response({'error': 'Username and Password are required!'}, status=status.HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_404_NOT_FOUND)

    if Token.objects.get_or_create(user=user):
        new_key = Token.objects.filter(user=user)[0].generate_key()
        Token.objects.filter(user=user).update(key=new_key)

    token, _ = Token.objects.get_or_create(user=user)
    token.created = timezone.now()
    token.save()

    return Response({'token': "Token " + token.key}, status=status.HTTP_200_OK)


@api_view(['POST'])
def signup(request):
    data = {
        'username': request.data.get('username'),
        'email': request.data.get('email'),
        'password': request.data.get('password')
    }
    if data['username'] and data['email'] and data['password']:
        user = User.objects.create_user(
            username=data['username'], email=data['email'], password=data['password'])
        default_group = Group.objects.get(name='test')
        default_group.user_set.add(user)
        return Response({'message': 'User created; assigned to group <de_group>'}, status=status.HTTP_201_CREATED)
    return Response({"message": 'Error Occurred!'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def logout(request):
    token = request.data.get('token')
    Token.objects.filter(key=token[6:]).delete()
    return Response({"message": 'ok'},
                    status=status.HTTP_200_OK)


@api_view(['POST'])
def isTokenValid(request):
    token = request.data.get('token')
    return Response({'message': True})


@api_view(['GET', 'DELETE', 'PUT'])
def get_delete_update_post(request, pk):
    try:
        posts = Posts.objects.get(pk=pk)
    except Posts.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        return Response({})
    elif request.method == 'DELETE':
        return Response({})
    elif request.method == 'PUT':
        return Response({})


@api_view(['GET'])
@permission_classes((AllowAny,))
def get_post(request, pk):
    try:
        post = Posts.objects.get(pk=pk)
    except Posts.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = PostsSerializer(post)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes((AllowAny,))
def get_posts(request):
    posts = Posts.objects.all()
    serializer = PostsSerializer(posts, many=True)
    return Response(serializer.data[::-1])


@api_view(['POST'])
def post_posts(request):
    data = {
        'title': request.data.get('title'),
        'content': request.data.get('content'),
        'author': request.data.get('author')
    }
    serializer = PostsSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'ok'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_post(request, pk):
    try:
        post = Posts.objects.get(pk=pk)
    except Posts.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    post.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['PUT'])
def put_post(request, pk):
    try:
        post = Posts.objects.get(pk=pk)
    except Posts.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = PostsSerializer(post, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
