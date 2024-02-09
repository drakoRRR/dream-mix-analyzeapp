import requests
import re
from collections import Counter

from bs4 import BeautifulSoup

class ScrapperBase:
    def __init__(self):
        self.headers = {
            'Accept': '*/*',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
        }

        self.url = ''

    def get_main_colors(self):
        response = requests.get(self.url, headers=self.headers).text

        soup = BeautifulSoup(response, 'html.parser')

        styles = soup.find_all('style')
        colors = []
        for style in styles:
            colors.extend(re.findall(r'#[0-9a-fA-F]{3,6}', style.text))

        for tag in soup.find_all(style=True):
            inline_styles = tag['style'].split(';')
            for style in inline_styles:
                if 'color' in style:
                    colors.extend(re.findall(r'#[0-9a-fA-F]{3,6}', style))

        color_counts = Counter(colors)

        colors_dict = [{'color': color, 'count': count} for color, count in color_counts.most_common()]
        return colors_dict

    def find_most_common_word(self):
        response = requests.get(self.url, headers=self.headers)
        html_content = response.text

        soup = BeautifulSoup(html_content, 'html.parser')

        text = " ".join([tag.get_text() for tag in soup.find_all(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li'])])
        words = re.findall(r'\b\w{5,}\b', text.lower())

        word_counts = Counter(words)

        most_common_word, count = word_counts.most_common(1)[0]

        return {
            'most_common_word': most_common_word,
            'count': count
        }

    def get_quantity_of_posts(self):
        pass
