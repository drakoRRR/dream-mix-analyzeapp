import requests
import g4f

from bs4 import BeautifulSoup
from .scrapper import ScrapperBase

from analyzeapp.settings import LINKEDIN_KEY

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
        post_id = 0

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
                'id': post_id,
                'post_link': post_link,
                'post_image': post_image,
                'title': title_post,
                'author': author,
                'watch_quantity': watch_quantity,
                'most_popular_colors': most_popular_colors,
                'most_popular_word': most_popular_word
            })

            post_id += 1

        return result

    def analyze_search(self, search):
        prompt = f'By this search {search} answer the question based on this data {self.popular_posts()}' \
            'this is a data from website with IT news, and there we have news post with a small info about each posts' \
            'give me just SHORT answer, in OFFICIAL style, without Hello, this is Bing. I can try' \
            'if you write it i will jump through the window. very please, and don"t explain your answer'

        while True:
            try:
                response_gpt = g4f.ChatCompletion.create(
                    model=g4f.models.gpt_4,
                    messages=[{'role': 'user', 'content': prompt}],
                )

                return response_gpt
            except RuntimeError as e:
                continue

    def get_vacancies(self, programing_language):
        url = f'https://jobs.dou.ua/vacancies/?category={programing_language.lower().strip()}'

        response = requests.get(url, headers=self.headers).text

        soup = BeautifulSoup(response, 'lxml')
        qty_vacancies = soup.find('div', class_='b-inner-page-header').find('h1').text.strip()
        vacancies = soup.find_all('li', class_='l-vacancy')

        vacancies_list = []
        for vacancy in vacancies:
            vacancy_title = vacancy.find('a', class_='vt').text.strip()
            company_name = vacancy.find('a', class_='company').text.strip()
            vacancy_link = vacancy.find('div', class_='title').find('a', class_='vt')['href']
            vacancy_description = vacancy.find('div', class_='sh-info').text.strip()
            vacancy_city = vacancy.find('span', class_='cities bi bi-geo-alt-fill').text.strip()

            vacancies_list.append(dict(
                vacancy_title=vacancy_title,
                company_name=company_name,
                vacancy_link=vacancy_link,
                vacancy_description=vacancy_description,
                vacancy_city=vacancy_city
            ))

        return {
            'category': programing_language.capitalize(),
            'qty_vacancies': qty_vacancies,
            'vacancies_list': vacancies_list
        }

    def get_dou_programing_languages(self):
        url = f'https://jobs.dou.ua/'

        response = requests.get(url, headers=self.headers).text

        soup = BeautifulSoup(response, 'lxml')
        programing_languages_element = soup.find_all('ul', class_='cats')
        programing_languages = []
        for pl in programing_languages_element:
            programing_languages += pl.find_all('li', class_='cat')

        pl_names_list = []
        for pl in programing_languages:
            pl_names_list.append(pl.find('a', class_='cat-link').text.strip())

        return pl_names_list

    def analyze_vacancies(self, search, programing_language):
        vacancy = self.get_vacancies(programing_language)
        prompt = f'Imagine that you are very cool IT specialist and you will by this search {search} answer the question ' \
            f'based on this data {vacancy}' \
            f'this is a data from website with IT vacancies, and there we have vacancies with a small info about each vacancy' \
            f'give me just answer, in official style, without Hello, this is Bing. I can try' \
            f'if you write it i will jump through the window, don"t answer that you don"t know the answer'

        while True:
            try:
                response_gpt = g4f.ChatCompletion.create(
                    model=g4f.models.gpt_4,
                    messages=[{'role': 'user', 'content': prompt}],
                )

                return response_gpt
            except RuntimeError as e:
                continue


class GetScrapeLinkedin:
    """
    Scrape linkedin and get vacancies
    """

    def __init__(self):
        self.target_url = f'https://api.scrapingdog.com/linkedinjobs?api_key={LINKEDIN_KEY}&field=Python%20(Programming%20Language)&geoid=100293800&page=1'

    def get_jobs(self):
        resp = requests.get(self.target_url).json()
        return resp

    def analyze_vacancies(self, search):
        prompt = f'Imagine that you are very cool IT specialist and you will by this search {search} answer the question ' \
            f'based on this data {self.get_jobs()}' \
            f'this is a data from website with IT vacancies, and there we have vacancies with a small info about each vacancy' \
            f'give me just answer, in official style, without Hello, this is Bing. I can try' \
            f'if you write it i will jump through the window, don"t answer that you don"t know the answer'

        while True:
            try:
                response_gpt = g4f.ChatCompletion.create(
                    model=g4f.models.gpt_4,
                    messages=[{'role': 'user', 'content': prompt}],
                )

                return response_gpt
            except RuntimeError as e:
                continue


class GetScrapeWorkUA(ScrapperBase):
    """
    Get Work.ua data vacancies
    """

    def __init__(self, city=None, job=None, *args):
        super().__init__()
        self.city = city.strip() + '-' if city is not None else None
        self.job = job.strip().replace(' ', '+')
        self.url_to_scrape = f'https://www.work.ua/en/jobs-{self.job}'
        if self.city:
            self.url_to_scrape = f'https://www.work.ua/en/jobs-{self.city}-{self.job}'

    def get_jobs(self):
        response = requests.get(self.url_to_scrape, headers=self.headers).text

        soup = BeautifulSoup(response, 'lxml')
        jobs_qty = soup.find('span', class_='text-default')
        jobs_qty = jobs_qty.get_text(strip=True) if jobs_qty else None

        jobs_elements = soup.find_all('div', class_='card card-hover card-search card-visited wordwrap job-link js-job-link-blank add-top')
        jobs_elements += soup.find_all('div', class_='card card-hover card-search card-visited wordwrap job-link js-job-link-blank')
        vacancies = []

        for job in jobs_elements:
            job_photo_element = job.find('img', class_='preview-img-logo')
            job_photo_url = job_photo_element['src'] if job_photo_element else None

            job_title_element = job.find('h2', class_='cut-top')
            job_title = job_title_element.a['title'] if job_title_element else None

            job_salary_element = job.find_all('span', class_='strong-600')
            job_salary = job_salary_element[0].text.strip() if len(job_salary_element) > 1 else None

            job_description_element = job.find('p', class_='ellipsis-line')
            job_description = job_description_element.text.strip() if job_description_element else None

            job_location_element = job.find('span', class_='')
            job_location = job_location_element.text.strip() if job_location_element else None

            company_name_element = job.find_all('span', class_='strong-600')[-1]
            company_name = company_name_element.text.strip() if company_name_element else None

            vacancies.append(dict(
                job_photo_url=job_photo_url,
                job_title=job_title,
                job_salary=job_salary,
                job_description=job_description,
                job_location=job_location,
                company_name=company_name
            ))

        return {
            'category': self.job,
            'vacancies_qty': jobs_qty,
            'vacancies': vacancies
        }

    def analyze_vacancies(self, search):
        prompt = f'Imagine that you are very cool IT specialist and you will by this search {search} answer the question ' \
            f'based on this data {self.get_jobs()}' \
            f'this is a data from website with IT vacancies, and there we have vacancies with a small info about each vacancy' \
            f'give me just answer, in official style, without Hello, this is Bing. I can try' \
            f'if you write it i will jump through the window, don"t answer that you don"t know the answer'

        while True:
            try:
                response_gpt = g4f.ChatCompletion.create(
                    model=g4f.models.gpt_4,
                    messages=[{'role': 'user', 'content': prompt}],
                )

                return response_gpt
            except RuntimeError as e:
                continue


