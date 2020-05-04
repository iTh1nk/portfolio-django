from rest_framework.generics import ListAPIView
from portfolio.models import Sales
from .serializers import SalesSerializer

class SalesListAPIView(ListAPIView):

    serializer_class = SalesSerializer
    queryset = Sales.objects.calculated_quantity()

    fields = ('id', 'region', 'country', 'ptype', 'channel', 'date', 'quantity',
              'price', 'cost', 'revenue', 'profit', 'profit_percentage')