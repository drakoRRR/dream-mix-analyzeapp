from django.urls import path
from main.views import (GetDouInformation,
                        GetDouVacancies,
                        GetDouAnalyzeVacancies,
                        GetLinkedinInformation,
                        GetWorkUAInformation,
                        GetWorkUAAnalyze
                        )


app_name = 'main'

urlpatterns = [
    path('get-dou-news/', GetDouInformation.as_view(), name='get-dou-news'),
    path('get-dou-vacancies/', GetDouVacancies.as_view(), name='get-dou-vacancies'),
    path('get-dou-vacancies-analyze/', GetDouAnalyzeVacancies.as_view(), name='get-dou-vacancies-analyze'),
    path('get-linkedin/', GetLinkedinInformation.as_view(), name='get-linkedin'),
    path('get-workua/', GetWorkUAInformation.as_view(), name='get-workua'),
    path('get-workua-analyze/', GetWorkUAAnalyze.as_view(), name='get-workua-analyze'),
]
