from rest_framework import serializers


class GetWorkUAInformationSerializer(serializers.Serializer):
    city = serializers.CharField(required=True)
    job = serializers.CharField(required=True)
    search = serializers.CharField(allow_null=True, required=False)