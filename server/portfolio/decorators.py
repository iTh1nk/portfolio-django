from rest_framework.response import Response


def admin_by_groups(function):
    def wrap(request, *args, **kwargs):
        print(request.user)
        if request.user.groups.filter(name='admin').exists():
            return function(request, *args, **kwargs)
        else:
            return Response({'message': 'nok'})
    return wrap
