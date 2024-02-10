const vacanciesDatas = [
    {
        "category": "Python",
        "qty_vacancies": "182 вакансії  в категорії Python",
        "vacancies_list": [
            {
                "vacancy_title": "Senior Python Machine Learning Engineer",
                "company_name": "EPAM",
                "vacancy_link": "https://jobs.dou.ua/companies/epam-systems/vacancies/257516/?from=list_hot",
                "vacancy_description": "We are seeking a highly skilled and motivated Python Machine Learning Engineer with extensive experience designing, developing and deploying Machine Learning models and NLP applications.",
                "vacancy_city": "Київ, Харків, Львів, Дніпро, Одеса, Вінниця, Івано-Франківськ, Хмельницький, Полтава, Житомир, Кременчук, Рівне, Тернопіль, Ужгород, Черкаси, Чернівці, віддалено"
            },
            {
                "vacancy_title": "Senior Blockchain Backend Engineer (Python & JavaScript/Typescript)",
                "company_name": "Artkai",
                "vacancy_link": "https://jobs.dou.ua/companies/artkai/vacancies/258220/",
                "vacancy_description": "Project Description: A client is an R&D firm specializing in incentive optimization research for DeFi protocols. With notable clients including Lido, Aave, Sui, Moonbeam, and Uniswap, we provide data-driven incentives to enhance growth in the DeFi ecosystem.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Computer Vision Engineer",
                "company_name": "Everstar",
                "vacancy_link": "https://jobs.dou.ua/companies/everstar/vacancies/258191/",
                "vacancy_description": "Ми — Everstar. Перше рекрутингове агентство, що допомагає miltech компаніям знаходити талановитих людей та спільно наближати перемогу.\n\nЗараз ми у пошуках Embedded in Test Engineer для нашого клієнта — це один з найбільших розробників та виробників БпЛА для потреб оборони України.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Python Developer/Part-time Mentor",
                "company_name": "Mate academy",
                "vacancy_link": "https://jobs.dou.ua/companies/mate-academy/vacancies/229356/",
                "vacancy_description": "Ми — Mate academy, EdTech стартап з технологічною, гейміфікованою, AI friendly LMS платформою, де люди вивчають спеціальності в галузі IT. Зареєструйся, спробуй!\n\n🌎 Наша місія — допомогти мільйону людей по всьому світу побудувати свою кар’єру в галузі IT.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Sr/Midle Full stack developer (React+Python)",
                "company_name": "Luxe Quality",
                "vacancy_link": "https://jobs.dou.ua/companies/luxe-quality/vacancies/258161/",
                "vacancy_description": "We are looking for a Full Stack Developer in one of our partner’s team. \n\nResponsibilities:\n\n\n\nDesign, develop, and maintain high-quality web applications using React and Python technologies.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Python Full Stack Engineer",
                "company_name": "Railsware",
                "vacancy_link": "https://jobs.dou.ua/companies/railsware/vacancies/258156/",
                "vacancy_description": "🔶 Excellent general programming skills, ability to work with complex codebases\n🔶 Solid knowledge of Python\n🔶 Practical experience with different DBs (e.g.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Python Engineer",
                "company_name": "Reenbit",
                "vacancy_link": "https://jobs.dou.ua/companies/reenbit/vacancies/258143/",
                "vacancy_description": "Are you passionate about coding and love to work with Python? We are seeking a talented Python Engineer to join our dynamic team.",
                "vacancy_city": "Львів, віддалено"
            },
            {
                "vacancy_title": "Middle Odoo Developer",
                "company_name": "ELEKS",
                "vacancy_link": "https://jobs.dou.ua/companies/eleks/vacancies/258139/",
                "vacancy_description": "ELEKS Enterprise Applications Practice Office is looking for a Middle Odoo Developer in our offices in Ukraine, Poland and Croatia, or remotely.\n\nABOUT PROJECT\nOur client is a printing company from Germany. The project is from scratch.",
                "vacancy_city": "Київ, Львів, Івано-Франківськ, Тернопіль, Ужгород, Краків (Польща), Спліт (Хорватія)"
            },
            {
                "vacancy_title": "Python developer",
                "company_name": "Yalantis",
                "vacancy_link": "https://jobs.dou.ua/companies/yalantis/vacancies/247746/",
                "vacancy_description": "We’re looking for an experienced Python developer to join our team.",
                "vacancy_city": "Київ, Львів, Дніпро, Ларнака (Кіпр), Варшава (Польща), віддалено"
            },
            {
                "vacancy_title": "Senior Python Engineer",
                "company_name": "1648 Factory",
                "vacancy_link": "https://jobs.dou.ua/companies/1648-factory/vacancies/258100/",
                "vacancy_description": "The client is a leading Consulting company from Germany. They are now looking to expand the portfolio of products for existing and new clients. You’ll be working on a project which is data-driven.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior Python Developer",
                "company_name": "Radency",
                "vacancy_link": "https://jobs.dou.ua/companies/radency/vacancies/234236/",
                "vacancy_description": "Radency у пошуках Senior Python Developer для роботи над платформою для менеджменту операційних процесів (Operations Management System) для виробництв.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Middle+ FullStack (Vue/Python/Go)",
                "company_name": "3asoft",
                "vacancy_link": "https://jobs.dou.ua/companies/3asoft/vacancies/258090/",
                "vacancy_description": "The project is a telemedicine and primary care application. It’s a web application project (mobile app is already done). Important: the customers are from Japan.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Middle/Senior Python Developer",
                "company_name": "WizardsDev",
                "vacancy_link": "https://jobs.dou.ua/companies/wizardsdev/vacancies/258081/",
                "vacancy_description": "— 3+ years of experience with Python3;\n— Proficiency in FastAPI, aiohttp for building REST APIs;\n— Knowledge of GraphQL and experience with its implementation using Graphene or Strawberry for creating GraphQL APIs;\n— Experience with WebSockets for developing interactive applications;...",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Full Stack Python Developer",
                "company_name": "Atto Trading Technologies",
                "vacancy_link": "https://jobs.dou.ua/companies/atto-trading-technologies-llc/vacancies/254463/",
                "vacancy_description": "About Us:\n\nAtto Trading is a quantitative trading firm operating a portfolio of signal-driven, high-frequency strategies in cash equities and futures.\n\nWe are building a global, diverse team of experts in trading, statistics, engineering, and technology to trade in global markets.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior Python(Django) Developer",
                "company_name": "Digis",
                "vacancy_link": "https://jobs.dou.ua/companies/digis/vacancies/257944/",
                "vacancy_description": "We are seeking a Senior Django Developer to join our wonderful team!\n\nThe project: PBM Source provides legal services in the pharmaceutical sector for US companies, facilitating tracking and implementing regulatory changes within organizations.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "LLM Specialist with Python Knowledge",
                "company_name": "Chatmasters AI",
                "vacancy_link": "https://jobs.dou.ua/companies/chatmasters-ai/vacancies/257931/",
                "vacancy_description": "Position Description:  We are looking for an experienced AI/ML developer specialized in LLMs (Large Language Models), such as GPT-3/4 and similar.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Python Developer/Data Engineer",
                "company_name": "Ajax Systems",
                "vacancy_link": "https://jobs.dou.ua/companies/ajax-systems/vacancies/254344/",
                "vacancy_description": "Ajax Systems — це міжнародна технологічна компанія, найбільший в Європі розробник і виробник систем безпеки Ajax із можливостями розумного дому. Це ціла екосистема зі 135 пристроїв, мобільних і десктопних застосунків, серверної інфраструктури.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Senior Back End Engineer [Python]",
                "company_name": "StartupSoft",
                "vacancy_link": "https://jobs.dou.ua/companies/startup-soft/vacancies/257882/",
                "vacancy_description": "Project \n\nTow4Tech is an early-stage startup, a groundbreaking project that connects stranded drivers with towing services through a centralized platform. Tow4Tech aims to redefine the towing experience, making it more efficient and convenient for all stakeholders.",
                "vacancy_city": "Львів, Тернопіль, віддалено"
            },
            {
                "vacancy_title": "Intern/trainee analytic programmer (DAX, M, VBA, SAS, R, Python)",
                "company_name": "York University",
                "vacancy_link": "https://jobs.dou.ua/companies/york-university/vacancies/257847/",
                "vacancy_description": "Потреба:\n\nНаймемо технічного помічника в науковому актуарно-статистичному проекті для програмування на DAX, M, VBA, SAS, R, Python та суміжних функцій. Бажано студента.\n\nОплата погодинна залежно від рівня. Пересилаємо через Вестерн Юніон.",
                "vacancy_city": "за кордоном, віддалено"
            },
            {
                "vacancy_title": "Senior DevOps Engineer (AWS/k8s/Terraform/Python/CI/CD)",
                "company_name": "Svitla Systems",
                "vacancy_link": "https://jobs.dou.ua/companies/svitla-systems-inc/vacancies/257826/",
                "vacancy_description": "Svitla Systems is a global trusted IT solutions company headquartered in California, with business and development offices throughout the US, Latin America, Europe, and Asia.",
                "vacancy_city": "Київ, Львів, віддалено"
            }
        ]
    }
]

export default vacanciesDatas;
