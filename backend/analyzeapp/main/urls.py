from django.urls import path
from main.views import GetDouInformation


app_name = 'main'

urlpatterns = [
    path('get-dou/', GetDouInformation.as_view(), name='get-dou'),
]
