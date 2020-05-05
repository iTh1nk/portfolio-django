from django_filters import rest_framework as rfilters
from portfolio.models import Sales
from django.db.models import Sum, F, ExpressionWrapper, DecimalField
from datetime import date


class SalesFilter(rfilters.FilterSet):
    class Meta:
        model = Sales
        fields = ['id', 'region', 'country', 'ptype', 'channel',
                  'date', 'quantity', 'price', 'cost', 'revenue', 'profit']

    for field in ['quantity', 'price', 'cost', 'revenue', 'profit', 'profit_percentage']:
        exec(f'min_{field} = rfilters.NumberFilter(field, lookup_expr="gte")')
        exec(f'min_{field} = rfilters.NumberFilter(field, lookup_expr="lte")')

    date_to = rfilters.CharFilter(method='m_date_to', label='date_to')

    date_from = rfilters.CharFilter(method='m_date_from', label='date_from')

    date = rfilters.CharFilter(method='date_exact', label='date')

    def date_exact(self, queryset, name, value):
        day, month, year = self.date_split(value)
        cdate = date(year, month, day)
        print(queryset)
        return queryset.filter(date=cdate)

    def m_date_to(self, queryset, name, value):
        day, month, year = self.date_split(value)
        cdate = date(year, month, day)
        return queryset.filter(date__lte=cdate)

    def m_date_from(self, queryset, name, value):
        day, month, year = self.date_split(value)
        cdate = date(year, month, day)
        return queryset.filter(date__gte=cdate)

    def date_split(self, value):
        return [int(x) for x in value.split('.')]

    def groupby_filter(self, queryset, name, value):
        return queryset.values(*self.request.query_params.getlist('groupby')).annotate(
            quantity=Sum('quantity'),
            price=Sum('price'),
            cost=Sum('cost'),
            revenue=Sum('revenue'),
            profit=Sum('profit'),
            profit_percentage=ExpressionWrapper(
                (F('profit')/F('revenue'))*100, output_field=DecimalField()
            )
        )
