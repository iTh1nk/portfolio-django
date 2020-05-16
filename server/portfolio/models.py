from django.db import models
from django.contrib.auth import get_user_model


class Posts(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    author = models.CharField(max_length=255)
    created_on = models.DateTimeField(auto_now_add=True)


class Messages(models.Model):
    username = models.CharField(max_length=255)
    message = models.TextField()
    is_like = models.BooleanField()
    created_on = models.DateTimeField(auto_now_add=True)
