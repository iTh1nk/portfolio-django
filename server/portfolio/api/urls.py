from django.urls import path
# from .views import PostsListAPIView
from .views import get_post, get_posts, post_posts, delete_post, put_post
from django.conf.urls import url
from . import views

urlpatterns = [
    # path('api/posts', PostsListAPIView.as_view()),
    url(r'^api/posts/(?P<pk>\d+)$', views.get_post, name='get_post'),
    url(r'^api/posts/$', views.get_posts, name='get_posts'),
    url(r'^api/posts/add/$', views.post_posts, name='post_posts'),
    url(r'^api/posts/del/(?P<pk>\d+)$', views.delete_post, name='delete_post'),
    url(r'^api/posts/put/(?P<pk>\d+)$', views.put_post, name='put_post')
]
