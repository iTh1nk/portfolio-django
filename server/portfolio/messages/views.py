from portfolio.models import Messages
from .serializers import MessagesSerializer
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import status

from rest_framework.permissions import AllowAny

from portfolio.decorators import admin_by_groups


@api_view(['GET'])
@admin_by_groups
def get_messages(request):
    messages = Messages.objects.all()
    serializer = MessagesSerializer(messages, many=True)
    return Response(serializer.data[::-1])


@api_view(['POST'])
@permission_classes((AllowAny,))
def post_messages(request):
    data = {
        'username': request.data.get('username'),
        'message': request.data.get('message'),
        'is_like': request.data.get('isLike')
    }
    serializer = MessagesSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'ok'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@admin_by_groups
def delete_message(request, pk):
    try:
        message = Messages.objects.get(pk=pk)
    except Messages.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    message.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
