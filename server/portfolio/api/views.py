from rest_framework.generics import ListAPIView
from portfolio.models import Posts
from .serializers import PostsSerializer


class BaseListAPIView(ListAPIView):

    def get_queryset(self):
        return self.model.objects.all()


class PostsListAPIView(BaseListAPIView):

    serializer_class = PostsSerializer
    model = Posts
