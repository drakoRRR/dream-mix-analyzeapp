from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import views, status

from .services import GetScrapeDou, GetScrapeLinkedin, GetScrapeWorkUA

from .serializers import GetWorkUAInformationSerializer


class GetDouInformation(views.APIView):
    """
    Get Dou site information about news, based on news get analytics.
    """
    permission_classes = [AllowAny]

    def get(self, request):
        return Response(data=GetScrapeDou().popular_posts(), status=status.HTTP_200_OK)

    def post(self, request):
        return Response(data=GetScrapeDou().analyze_search(request.data['search']), status=status.HTTP_200_OK)


class GetDouVacancies(views.APIView):
    """
    Get DOU vacancies.
    """
    permission_classes = [AllowAny]

    def post(self, request):
        return Response(data=GetScrapeDou().get_vacancies(request.data['programing_language']),
                        status=status.HTTP_200_OK)

    def get(self, request):
        return Response(data=GetScrapeDou().get_dou_programing_languages(),
                        status=status.HTTP_200_OK)


class GetDouAnalyzeVacancies(views.APIView):
    """
    Get DOU vacancies.
    """
    permission_classes = [AllowAny]

    def post(self, request):
        return Response(data=GetScrapeDou().analyze_vacancies(request.data['search'], request.data['programing_language']),
                        status=status.HTTP_200_OK)


class GetLinkedinInformation(views.APIView):
    """
    Get Linkedin site information about jobs, based on tweets get analytics.
    """
    permission_classes = [AllowAny]

    def get(self, request):
        return Response(data=GetScrapeLinkedin().get_jobs(), status=status.HTTP_200_OK)

    def post(self, request):
        return Response(data=GetScrapeLinkedin().analyze_vacancies(request.data['search']), status=status.HTTP_200_OK)


class GetWorkUAInformation(views.APIView):
    """
    Get Work UA site information about jobs, based on tweets get analytics.
    """
    permission_classes = [AllowAny]

    def post(self, request):

        serializer = GetWorkUAInformationSerializer(data=request.data, context=dict(request=request))
        serializer.is_valid(raise_exception=True)
        result = GetScrapeWorkUA(**serializer.validated_data).get_jobs()

        return Response(data=result, status=status.HTTP_200_OK)


class GetWorkUAAnalyze(views.APIView):
    """
    Get Work UA site analyze
    """
    permission_classes = [AllowAny]

    def post(self, request):

        serializer = GetWorkUAInformationSerializer(data=request.data, context=dict(request=request))
        serializer.is_valid(raise_exception=True)
        result = GetScrapeWorkUA(**serializer.validated_data).analyze_vacancies(serializer.validated_data['search'])

        return Response(data=result, status=status.HTTP_200_OK)

