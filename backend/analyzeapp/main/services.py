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

    def popular_posts(self):
        response = requests.get(self.url, headers=self.headers).text

        soup = BeautifulSoup(response, 'lxml')
        news_carts = soup.find_all(class_='b-postcard')
        result = []

        for news in news_carts:
            h2_tag = news.find('h2', class_='title')
            post_link = h2_tag.a['href']
            title_post = h2_tag.text.strip()

            post_image = h2_tag.find('img')['src']

            author_element = news.find('a', class_='author')
            author = author_element.text.strip()

            watch_quantity_element = news.find('span', class_='pageviews')
            watch_quantity = watch_quantity_element.text.strip()

            most_popular_colors = self.get_main_colors(post_link)
            most_popular_word = self.find_most_common_word(post_link)

            result.append({
                'post_link': post_link,
                'post_image': post_image,
                'author': author,
                'watch_quantity': watch_quantity,
                'most_popular_colors': most_popular_colors,
                'most_popular_word': most_popular_word
            })

        return result






