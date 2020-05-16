from django.urls import path, include
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^messages/$', views.get_messages, name='get_messages'),
    url(r'^messages/del/(?P<pk>\d+)$', views.delete_message, name='del_messages'),
    url(r'^messages/add/$', views.post_messages, name='post_message'),
]
