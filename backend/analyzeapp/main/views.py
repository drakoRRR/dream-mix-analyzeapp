from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import views, status

from .services import GetScrapeDou


class GetDouInformation(views.APIView):
    """
    Get Dou site information about news, based on news get analytics.
    """
    permission_classes = [AllowAny]

    def get(self, request):
        return Response(data=GetScrapeDou().popular_posts(), status=status.HTTP_200_OK)

