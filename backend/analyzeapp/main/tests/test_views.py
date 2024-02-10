from django.test import TestCase
from django.urls import reverse
from rest_framework import status

from rest_framework.test import APIClient

class TestViews(TestCase):
    def setUp(self) -> None:
        self.client = APIClient()

    def test_get_dou_news_200(self):
        """Test the GET dou news page 200 response"""

        url = reverse('main:get-dou-news')
        res = self.client.get(url)

        self.assertEquals(res.status_code, status.HTTP_200_OK)

    def test_post_get_dou_news_200(self):
        """Test the POST dou news page 200 response"""
        payload = {
            'search': 'test'
        }

        url = reverse('main:get-dou-news')
        res = self.client.post(url, payload)

        self.assertEquals(res.status_code, status.HTTP_200_OK)

    def test_post_get_dou_news_400(self):
        """Test the POST dou news page 400 response"""
        payload = {
            'search21s': 'test'
        }

        url = reverse('main:get-dou-news')
        res = self.client.post(url, payload)

        self.assertEquals(res.status_code, status.HTTP_400_BAD_REQUEST)

    def test_get_dou_vacancies_200(self):
        """Test the GET dou vacancies 200 response"""

        url = reverse('main:get-dou-vacancies')
        res = self.client.get(url)

        self.assertEquals(res.status_code, status.HTTP_200_OK)

    def test_post_dou_vacancies_analyze_200(self):
        """Test the POST dou vacancies analyze"""

        payload = {
            "search": "Я новачок джуніор, є вакансії для мене ?",
            "programing_language": "Python"
        }

        url = reverse('main:get-dou-vacancies-analyze')
        res = self.client.post(url, payload)

        self.assertEquals(res.status_code, status.HTTP_200_OK)

    def test_get_linkedin_200(self):
        """Test the POST linkedin vacancies"""

        url = reverse('main:get-linkedin')
        res = self.client.get(url)

        self.assertEquals(res.status_code, status.HTTP_200_OK)

    def test_post_linkedin_200(self):
        """Test the POST linkedin vacancies analyze"""

        payload = {
            "search": "Я новачок джуніор, є вакансії для мене ?",
        }

        url = reverse('main:get-linkedin')
        res = self.client.post(url, payload)

        self.assertEquals(res.status_code, status.HTTP_200_OK)

    def test_post_workua_200(self):
        """Test the POST work ua analyze with 200 response"""

        payload = {
            "city": "kyiv",
            "job": "python"
        }

        url = reverse('main:get-workua')
        res = self.client.get(url, payload)

        self.assertEquals(res.status_code, status.HTTP_200_OK)

    def test_post_workua_analyze_200(self):
        """Test the POST work ua analyze with 200 response"""

        payload = {
            "city": "kyiv",
            "job": "python",
            "search": "Я новачок джуніор, є вакансії для мене ?",
        }

        url = reverse('main:get-workua-analyze')
        res = self.client.post(url, payload)

        self.assertEquals(res.status_code, status.HTTP_200_OK)