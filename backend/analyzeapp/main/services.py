import requests

from bs4 import BeautifulSoup
from .scrapper import ScrapperBase

class GetScrapeDou(ScrapperBase):
    """
    Get scrape information from DOU
    """

    def __init__(self):
        super().__init__()
        self.url = 'https://dou.ua/lenta/'

    def get_news_urls(self):
        response = requests.get(self.url, headers=self.headers).text

        soup = BeautifulSoup(response, 'lxml')
        news_carts = soup.find_all(class_='b-postcard')
        news_urls = []

        for news in news_carts:
            h2_tag = news.find('h2', class_='title')
            news_urls.append(h2_tag.a['href'])

        return news_urls

    def get_quantity_of_posts(self):
        return len(self.get_news_urls())



