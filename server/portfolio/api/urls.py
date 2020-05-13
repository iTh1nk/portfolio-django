from django.urls import path, include
# from .views import PostsListAPIView
from .views import get_post, get_posts, post_posts, delete_post, put_post, login, token_test
from django.conf.urls import url
from . import views

urlpatterns = [
    # path('api/posts', PostsListAPIView.as_view()),
    url(r'^posts/(?P<pk>\d+)$', views.get_post, name='get_post'),
    url(r'^posts/$', views.get_posts, name='get_posts'),
    url(r'^posts/add/$', views.post_posts, name='post_posts'),
    url(r'^posts/del/(?P<pk>\d+)$', views.delete_post, name='delete_post'),
    url(r'^posts/put/(?P<pk>\d+)$', views.put_post, name='put_post'),
    # path('rest-auth/', include('rest_auth.urls')),
    url(r'^login/$', login, name='user_login'),
    url(r'^test/$', token_test)
]
