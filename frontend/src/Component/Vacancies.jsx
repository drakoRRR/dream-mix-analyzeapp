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
    },
    {
        "category": "Java",
        "qty_vacancies": "106 вакансій  в категорії java",
        "vacancies_list": [
            {
                "vacancy_title": "Senior FullStack Developer (Java + Angular)",
                "company_name": "ПУМБ",
                "vacancy_link": "https://jobs.dou.ua/companies/fuib/vacancies/253518/?from=list_hot",
                "vacancy_description": "Development of a cutting-edge Identity Management System (IMS) that will integrate modern technologies and platforms to enhance the management of digital user identifiers.",
                "vacancy_city": "за кордоном, віддалено"
            },
            {
                "vacancy_title": "Senior QA Automation Engineer (Java)",
                "company_name": "Delasport",
                "vacancy_link": "https://jobs.dou.ua/companies/delasport/vacancies/251859/?from=list_hot",
                "vacancy_description": "Delasport is an iGaming Software company providing Sports Betting & Online Casino software, and turnkey B2B solutions.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Senior Java Developer",
                "company_name": "Delasport",
                "vacancy_link": "https://jobs.dou.ua/companies/delasport/vacancies/229640/?from=list_hot",
                "vacancy_description": "Delasport — Implementing Technological Solutions Here and Now.\n\n\n\nDelasport is an iGaming Software company providing Sports Betting & Online Casino software, and turnkey B2B solutions.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Backend Kotlin Developer (Start Date ASAP)",
                "company_name": "Sphere Partners",
                "vacancy_link": "https://jobs.dou.ua/companies/sphere-consulting/vacancies/257848/?from=list_hot",
                "vacancy_description": "At Sphere, we offer management consulting, end-to-end technology solutions, enterprise applications, software engineering, data analytics, and staff augmentation services, through onsite and remote world-class teams.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Backend Developer (Java)",
                "company_name": "Kyivstar.Tech",
                "vacancy_link": "https://jobs.dou.ua/companies/kyivstar-tech/vacancies/258155/",
                "vacancy_description": "Kyivstar.Tech is looking for a Backend Developer to join our Product Development Team.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Senior Java Developer",
                "company_name": "ELEKS",
                "vacancy_link": "https://jobs.dou.ua/companies/eleks/vacancies/258137/",
                "vacancy_description": "ELEKS Software Engineering and Development Office is looking for a Senior Java Developer in our Lviv, Kyiv, Ternopil, Ivano-Frankivsk offices, or remotely.",
                "vacancy_city": "Київ, Львів, Івано-Франківськ, Тернопіль, Ужгород"
            },
            {
                "vacancy_title": "Java Developer",
                "company_name": "IT SmartFlex",
                "vacancy_link": "https://jobs.dou.ua/companies/it-smartflex/vacancies/236727/",
                "vacancy_description": "IT SmartFlex — це продуктова українська компанія, заснована 2019 року як дочірня компанія провідного мобільного оператора Vodafone Ukraine з метою об’єднати експертів у сферах телекомунікацій і програмного забезпечення.  Наша ціль — розвивати та поглиблювати власну IT-експертизу.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Senior C++/Golang/Java Linux Networking Engineer",
                "company_name": "Delphi Software",
                "vacancy_link": "https://jobs.dou.ua/companies/delphi-llc/vacancies/238823/",
                "vacancy_description": "Perimeter 81 is expanding team for development cybersecurity and SaaS platform. All solutions allows companies manage networks and security from single cloud.",
                "vacancy_city": "Київ, Вінниця, віддалено"
            },
            {
                "vacancy_title": "Software Developer: Backend, Java, SOAP",
                "company_name": "ControlPay",
                "vacancy_link": "https://jobs.dou.ua/companies/controlpay/vacancies/258101/",
                "vacancy_description": "At Transporeon — A Trimble Company — we embrace transformation and change in total sync with one another. We rethink, reinvent and rework ideas from one moment to the next — as many times as is necessary to get the job done right.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Senior FullStack Java and (Angular or React)",
                "company_name": "iSolutions.IO",
                "vacancy_link": "https://jobs.dou.ua/companies/tt/vacancies/258080/",
                "vacancy_description": "iSolutions.IO is looking for full-stack Java and Angular or React Developer for a new project.\n\nWe are seeking a talented Senior Engineer to join our growing team in Eastern Europe. The ideal candidate will have 4+ years of experience in FinTech.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Middle Full Stack Developer",
                "company_name": "HYS Enterprise",
                "vacancy_link": "https://jobs.dou.ua/companies/hys-enterprise/vacancies/258053/",
                "vacancy_description": "We are looking for an experienced Full Stack Developer!",
                "vacancy_city": "Одеса, Бидгощ (Польща), віддалено"
            },
            {
                "vacancy_title": "Lead Backend Engineer",
                "company_name": "KITRUM",
                "vacancy_link": "https://jobs.dou.ua/companies/kitrum/vacancies/257951/",
                "vacancy_description": "We are looking for a Lead Engineer for a US-based language services project specializing in translation, interpreting, and related services for both public and private sector clients.",
                "vacancy_city": "Київ, Харків, Ужгород, Варшава (Польща), віддалено"
            },
            {
                "vacancy_title": "Java Developer",
                "company_name": "WorldTicket",
                "vacancy_link": "https://jobs.dou.ua/companies/worldticket/vacancies/226001/",
                "vacancy_description": "WorldTicket is currently looking for an experienced, innovative, and detail-oriented Java Developer to be based in our Kyiv office (you may work remotely).",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Senior Java Developer",
                "company_name": "Raiffeisen Bank",
                "vacancy_link": "https://jobs.dou.ua/companies/raiffeisen/vacancies/257860/",
                "vacancy_description": "We are Raiffeisen Bank Ukraine, the Ukrainian bank. For 30 years we have been creating and building the banking system of our country. We were and are one of the largest banks in Ukraine and a reliable partner for millions of Ukrainians.\n\nWe achieve high-speed digital products.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Senior Java developer",
                "company_name": "Yalantis",
                "vacancy_link": "https://jobs.dou.ua/companies/yalantis/vacancies/202617/",
                "vacancy_description": "Become a Senior Java developer on one of the global projects we’re currently developing!",
                "vacancy_city": "Київ, Львів, Дніпро, Ларнака (Кіпр), Варшава (Польща), віддалено"
            },
            {
                "vacancy_title": "Sr Java Developer",
                "company_name": "ПУМБ",
                "vacancy_link": "https://jobs.dou.ua/companies/fuib/vacancies/252162/",
                "vacancy_description": "We are looking for self-motivated IT-professional with 3+ years of experience in development large-scale projects, create proofs of concept, review a code, explore and improve new technologies.",
                "vacancy_city": "за кордоном, віддалено"
            },
            {
                "vacancy_title": "Senior Backend (Java) Developer/Team Lead (only Vinnytsia, Ukraine)",
                "company_name": "Gemicle",
                "vacancy_link": "https://jobs.dou.ua/companies/gemicle/vacancies/257728/",
                "vacancy_description": "It is a high-growth SaaS company selling IT Service Management, a space that is being propelled into high growth as businesses worldwide accelerate their digital transformation and start to adopt new workstyles for their employees.",
                "vacancy_city": "Вінниця"
            },
            {
                "vacancy_title": "Java trainer (part time)",
                "company_name": "DAN.IT education",
                "vacancy_link": "https://jobs.dou.ua/companies/dan-it-education/vacancies/247925/",
                "vacancy_description": "Привіт, майбутній викладач)\n\nDAN.IT Education — EdTech компанія, яка займається якісною підготовкою ІТ фахівців.  Ми шукаємо тренера на курс Java для наших студентів.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Java/Kotlin Engineer (Core)",
                "company_name": "Solidgate",
                "vacancy_link": "https://jobs.dou.ua/companies/solidgate/vacancies/231587/",
                "vacancy_description": "Solidgate — це В2В продукт у сфері онлайн-платежів. Ми будуємо фінтех-екосистему, щоб наші клієнти могли швидко, безпечно та вигідно приймати оплати по всьому світу: від Європи до ЛАТАМу, від США до Азії.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Middle Strong/Senior JavaScript developer",
                "company_name": "ПриватБанк",
                "vacancy_link": "https://jobs.dou.ua/companies/privatbank/vacancies/257705/",
                "vacancy_description": "ПриватБанк — є найбільшим банком України та одним з найбільш інноваційних банків світу. Займає лідируючі позиції за всіма фінансовими показниками в галузі та складає близько чверті всієї банківської системи країни.",
                "vacancy_city": "віддалено"
            }
        ]
    },
    {
        "category": "Php",
        "qty_vacancies": "149 вакансій  в категорії php",
        "vacancies_list": [
            {
                "vacancy_title": "PHP (Symfony) Developer",
                "company_name": "stfalcon.com",
                "vacancy_link": "https://jobs.dou.ua/companies/stfalcon-studio/vacancies/225514/?from=list_hot",
                "vacancy_description": "Шукаємо спеціалістів для розширення команди на remote на великий проект CRM, мікросервісна архітектура\n\nГоловним завданням буде Бек-енд розробка на Symfony. Шукаємо людину, яка не тільки писатиме якісний код, а й братиме участь у вирішенні складних бізнес завдань!",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "PHP Developer",
                "company_name": "SKELAR",
                "vacancy_link": "https://jobs.dou.ua/companies/skelar/vacancies/256951/?from=list_hot",
                "vacancy_description": "SKELAR — це venture builder, який будує міжнародні продуктові IT-компанії за правилами світу венчурних інвестицій. Разом із ко-фаундерами збираємо сильні команди, щоб запускати продуктові IT-бізнеси та перемагати на глобальних ринках.\n\nЗараз ми в пошуку Back-end Engineer (PHP).",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Backend Engineer (Mobile Team)",
                "company_name": "BetterMe",
                "vacancy_link": "https://jobs.dou.ua/companies/betterme/vacancies/131384/?from=list_hot",
                "vacancy_description": "ABOUT US:\n\nBetterMe is a health & wellness platform providing a tailored holistic approach to well-being. Since 2017, we have been on a mission to create a healthier world for everyone, regardless of age, sex, physical ability, or background.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Strong Junior Full Stack (PHP+Vue.js) Developer",
                "company_name": "INSART",
                "vacancy_link": "https://jobs.dou.ua/companies/insart/vacancies/254696/",
                "vacancy_description": "For our new fintech project for USA based client we’re looking for an experienced Full Stack (PHP+Vue.js) Developer with the strong communication skills who will participate in creating new project from scratch.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Middle Full-Stack Developer (React/Vue.js, PHP, Laravel)",
                "company_name": "Awesomic",
                "vacancy_link": "https://jobs.dou.ua/companies/awesomic/vacancies/258164/",
                "vacancy_description": "We are looking for a highly motivated and experienced Full-Stack Developer who is passionate about building great products and solving challenging technical problems.\n\nIf this sounds like you, we’d love to hear from you!",
                "vacancy_city": "Київ, за кордоном, віддалено"
            },
            {
                "vacancy_title": "PHP (Symfony) Developer",
                "company_name": "Digis",
                "vacancy_link": "https://jobs.dou.ua/companies/digis/vacancies/253586/",
                "vacancy_description": "Ми шукаємо PHP developer, який приєднається до динамічно розвиваючого міжнародного колективу. Вас очікують конкурентоспроможні умови праці та робоче середовище, в якому кожен працівник може розкрити свій потенціал.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Full Stack Engineer (WordPress, JS/PHP)",
                "company_name": "Innovecs",
                "vacancy_link": "https://jobs.dou.ua/companies/innovecs/vacancies/258133/",
                "vacancy_description": "We are looking for a Full Stack Engineer to our Design team.\n\nRequirements:\n\n* 2+ year of experience in web development. * Knowledge of HTML, CSS, PHP, and JS (Alpine.js is a plus). * Experience working with WordPress. * Understanding of layout aesthetics, UI/UX, and usability.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "WordPress+React.js Developer",
                "company_name": "White Label",
                "vacancy_link": "https://jobs.dou.ua/companies/ffflabel/vacancies/258120/",
                "vacancy_description": "White Label is actively looking for experienced WordPress+React.js Developer.\n\nClient writes a website in WP Gutenberg.",
                "vacancy_city": "за кордоном, віддалено"
            },
            {
                "vacancy_title": "Full-Stack (Symfony + React) Developer",
                "company_name": "ZFORT Group",
                "vacancy_link": "https://jobs.dou.ua/companies/zfort/vacancies/252945/",
                "vacancy_description": "ZFORT Group is looking for a professional Full-Stack (Symfony + React) developer.",
                "vacancy_city": "Харків, Кременчук, Хмельницький, за кордоном, віддалено"
            },
            {
                "vacancy_title": "PHP developer",
                "company_name": "908",
                "vacancy_link": "https://jobs.dou.ua/companies/908/vacancies/252450/",
                "vacancy_description": "🚀 Приєднуйся до Команди Опендатабот — Будуй Відкриту Державу! 🚀\n\nТи любиш кодування так само, як ми любимо відкриті дані? Проект Опендатабот — це твоя можливість стати частиною революції у використанні відкритих даних.",
                "vacancy_city": "Дніпро"
            },
            {
                "vacancy_title": "Junior PHP Developer",
                "company_name": "CLARYFI",
                "vacancy_link": "https://jobs.dou.ua/companies/claryfi/vacancies/245644/",
                "vacancy_description": "We are looking for an ambitious junior PHP developer who is ready to take on new challenges, contribute to our dynamic CLARYFI team and grow and develop with us!\n\nCompany Overview:\n\nWelcome to CLARIFY!",
                "vacancy_city": "Варна (Болгарія)"
            },
            {
                "vacancy_title": "PHP Symfony developer",
                "company_name": "Mirko",
                "vacancy_link": "https://jobs.dou.ua/companies/mirko/vacancies/254223/",
                "vacancy_description": "Mirko Solutions is a young team of charged people, ready to work for results. We continue growing rapidly, so now we are looking for a proactive and seasoned PHP Symfony developer.",
                "vacancy_city": "Луцьк, за кордоном, віддалено"
            },
            {
                "vacancy_title": "Laravel/Vue Developer (part-time support)",
                "company_name": "Code Art",
                "vacancy_link": "https://jobs.dou.ua/companies/code-art/vacancies/257907/",
                "vacancy_description": "Ищем опытного разработчика который мог бы присоединиться к проекту на поддержку. Позиция долгосрочная.\n\nО Сервисе\n\nСервис по доставке готовой еды, уже запущен и работает но есть бэклог задач, есть ошибки.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Fullstack Developer (PHP/Laravel + Vue.Js )",
                "company_name": "Tonti Laguna Group",
                "vacancy_link": "https://jobs.dou.ua/companies/tonti-laguna/vacancies/258066/",
                "vacancy_description": "Tonti Laguna — мультипродуктова компанія, що створює та просуває власні контент-проекти та продукти на західні ринки. У портфелі компанії 482 проекти у різних нішах: медіа-проекти про технології та ігрова індустрія.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior PHP Software Engineer (FastEx)",
                "company_name": "SoftConstruct Ukraine",
                "vacancy_link": "https://jobs.dou.ua/companies/softconstruct-ukraine/vacancies/248377/",
                "vacancy_description": "SoftConstruct Ukraine is a large product company with Armenian roots. We develop solutions in the fields of Big Data, Data Science and CryptoExchange.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "PHP Tech Lead",
                "company_name": "Alcor",
                "vacancy_link": "https://jobs.dou.ua/companies/alcor/vacancies/258050/",
                "vacancy_description": "Alcor is a full-cycle global service provider that builds software R&D offices for US product tech companies in Eastern Europe and Latin America.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Middle PHP Developer",
                "company_name": "SpaceWhale",
                "vacancy_link": "https://jobs.dou.ua/companies/spacewhale/vacancies/258010/",
                "vacancy_description": "Fast-growing product company SpaceWhale is looking for Middle PHP Developer to join our team:\n\nRequirements:  • 3+ years of hands-on development experience;  • Solid knowledge of PHP 8 and MySQL;  • Hands-on development experience with Symfony;  • Experience in integration...",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Strong Junior/Middle WordPress Developer",
                "company_name": "Softcery",
                "vacancy_link": "https://jobs.dou.ua/companies/softcery/vacancies/258013/",
                "vacancy_description": "Привіт 👋 Ми шукаємо досвідченого і талановитого WordPress Developer-а, який має глибоке розуміння WordPress і WooCommerce та пристрасть до дотримання найкращих практик веб-розробки під час роботи над клієнтськими проєктами.\n\nОбов’язки:\n\n1.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior PHP Developer",
                "company_name": "HOTLINE.FINANCE",
                "vacancy_link": "https://jobs.dou.ua/companies/hotline-finance/vacancies/258001/",
                "vacancy_description": "Привіт!\n\nМи — Hotline.Finance — українська продуктова ІТ-компанія, розробник відомого сервісу для порівняння та оформлення страхових продуктів.\n\nЗа 6 років існування ми стали платформою № 1 в Україні по об’єму продажів і швидкості росту в сфері онлайн страхування.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Middle+ PHP developer (Laravel)",
                "company_name": "EVOPLAY",
                "vacancy_link": "https://jobs.dou.ua/companies/evoplay/vacancies/250402/",
                "vacancy_description": "Наш проект — Affiliate Marketing Platform, масштабна високонавантажена система, що дозволяє створювати партнерські програми для компаній та їх продуктів from scratch. Проєкт вже обслуговує понад 50 мільйонів відвідувачів на місяць і продовжує зростати.",
                "vacancy_city": "Київ, віддалено"
            }
        ]
    },
    {
        "category": "Project manager",
        "qty_vacancies": "182 вакансії  в категорії project manager",
        "vacancies_list": [
            {
                "vacancy_title": "Product Manager (Responsible for Integrations)",
                "company_name": "Precoro",
                "vacancy_link": "https://jobs.dou.ua/companies/precoro/vacancies/257906/?from=list_hot",
                "vacancy_description": "We’re looking for an Integration Manager to manage the external integrations. Functional responsibility: Integrations via partner platform Hotglue with Microsoft Dynamics, Sage, Odoo, SFTP; Outsource development + in-house QA.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Program Manager with ecommerce experience",
                "company_name": "Valtech",
                "vacancy_link": "https://jobs.dou.ua/companies/valtech/vacancies/249168/",
                "vacancy_description": "The Opportunity\n\nWe are looking for a Program Manager with ecommerce experience to join our global team of 6,000 professionals in more than 60 offices worldwide.",
                "vacancy_city": "Київ, Дніпро, Вінниця, віддалено"
            },
            {
                "vacancy_title": "L&D Project Manager",
                "company_name": "Ukrsibbank",
                "vacancy_link": "https://jobs.dou.ua/companies/ukrsibbank/vacancies/250737/",
                "vacancy_description": "UKRSIBBANK BNP Paribas Group — один з найбільших універсальних банків України. Ми стабільний партнер, який пропонує сучасний та надійний банкінг за підтримки провідної європейської групи BNP Paribas Group.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Agile Delivery Manager",
                "company_name": "MEV",
                "vacancy_link": "https://jobs.dou.ua/companies/mev/vacancies/258202/",
                "vacancy_description": "We are in the stage of growing and looking for an Agile Delivery Manager to strengthen our Delivery Team. MEV’s Delivery Manager is a person who enables our development teams to deliver reliable service to our clients by following LEAN and Agile principles.",
                "vacancy_city": "Львів, Черкаси, за кордоном, віддалено"
            },
            {
                "vacancy_title": "Middle Project Manager (Only office)",
                "company_name": "Centum-D",
                "vacancy_link": "https://jobs.dou.ua/companies/centum-d/vacancies/251874/",
                "vacancy_description": "Requirements:   — 2+ years of experience as a Project Manager in outsourced IT projects; — Good understanding of development processes and pipelines; — Experience with scheduling and project tracking software (Jira, Confluence, Google services, etc.); — Well-organized, attention...",
                "vacancy_city": "Дніпро"
            },
            {
                "vacancy_title": "Technical Project Manager",
                "company_name": "Redwerk",
                "vacancy_link": "https://jobs.dou.ua/companies/redwerk/vacancies/254550/",
                "vacancy_description": "The Redwerk team is looking for an open, responsible, and customer-centric person with superb communication and diplomatic skills — someone who manages client expectations and builds friendly relations with teammates equally well.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Project Manager",
                "company_name": "Faria",
                "vacancy_link": "https://jobs.dou.ua/companies/faria-education-group/vacancies/258185/",
                "vacancy_description": "The ManageBac division of Faria Education Group is looking for a Project Manager to lead our team in building the leading IB learning management system.",
                "vacancy_city": "Івано-Франківськ, віддалено"
            },
            {
                "vacancy_title": "Project Coordinator",
                "company_name": "Playtech",
                "vacancy_link": "https://jobs.dou.ua/companies/playtech/vacancies/258175/",
                "vacancy_description": "Requirements:   1+ years of experience as IT Project Coordinator or Project Manager Knowledge of project planning, understanding of SDLC High level of responsibility and proactivity Strong written and verbal communication skills Good organisational, analytical and problem-solving...",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Project Manager",
                "company_name": "Nova Digital",
                "vacancy_link": "https://jobs.dou.ua/companies/nova-digital/vacancies/258157/",
                "vacancy_description": "Українська IT-компанія Nova Digital, що входить в групу компаній NOVA — це потужнийвиробник веб-додатків та програмного забезпечення для архітектур будь-якої складності танавантаженості на них.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Project Manager",
                "company_name": "WeSoftYou",
                "vacancy_link": "https://jobs.dou.ua/companies/wesoftyou/vacancies/235830/",
                "vacancy_description": "Join the team of innovative high-end mobile & web development leaders! WeSoftYou works with impact-first companies from all around the globe, using a data-driven approach and continuously increasing our operational effectiveness.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Technical Project Manager/Business Analyst",
                "company_name": "WizardsDev",
                "vacancy_link": "https://jobs.dou.ua/companies/wizardsdev/vacancies/258084/",
                "vacancy_description": "— Experience in the role of a business analyst for at least 3 years;\n— Deep understanding of business processes and user needs;\n— Ability to analyze data and identify business requirements;\n— Knowledge of Agile/Scrum methodologies and project management tools;\n— Excellent communication...",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Art Producer",
                "company_name": "VOLMI -  A Virtuos Studio",
                "vacancy_link": "https://jobs.dou.ua/companies/volmi-games/vacancies/258083/",
                "vacancy_description": "Volmi — A Virtuos Studio is a Ukrainian company, part of the global game development company Virtuos, specializing in creating art for games. We cooperate with the gaming industry’s leaders and participate in creating world-class projects.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Project Manager (Polish)",
                "company_name": "SMART business",
                "vacancy_link": "https://jobs.dou.ua/companies/smart-business/vacancies/258072/",
                "vacancy_description": "Project Manager\n\nSMART business specializes in the implementation, localization and development of ERP and CRM systems based on the Microsoft Dynamics 365 platform, development of solutions using data analytics and artificial intelligence technologies.",
                "vacancy_city": "Варшава (Польща), віддалено"
            },
            {
                "vacancy_title": "Game Project manager",
                "company_name": "Fgfactory",
                "vacancy_link": "https://jobs.dou.ua/companies/fgfactory/vacancies/252397/",
                "vacancy_description": "Шукаємо у нашу команду Project Manager, який вміє ефективно керувати командою, самостійно приймати рішення, має сильні лідерські якості та прагне працювати на результат.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "IT Project Manager",
                "company_name": "Gart Tech",
                "vacancy_link": "https://jobs.dou.ua/companies/gart-tech/vacancies/258055/",
                "vacancy_description": "About Us:  Gart Technology is a rapidly growing software development and engineering company that specializes in delivering high-quality projects for clients across various industries.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Project Manager",
                "company_name": "GroupBWT",
                "vacancy_link": "https://jobs.dou.ua/companies/groupbwt/vacancies/258041/",
                "vacancy_description": "About the company  GroupBWT is a consulting firm specializing in data management and the construction of data platforms. Our approach combines classical data warehousing with robust visualization tools, ETL processes, and business intelligence.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior Delivery Manager (240001AI)",
                "company_name": "Ciklum",
                "vacancy_link": "https://jobs.dou.ua/companies/ciklum/vacancies/258039/",
                "vacancy_description": "Ciklum is looking for a Senior Delivery Manager to join our team full-time in Ukraine.",
                "vacancy_city": "Київ, Львів, Дніпро, Вінниця"
            },
            {
                "vacancy_title": "Junior+/Middle Project Manager",
                "company_name": "The WhyKingz",
                "vacancy_link": "https://jobs.dou.ua/companies/thewhykingz/vacancies/258022/",
                "vacancy_description": "Hi guys! We are expanding our team and invite you to become part of it. We are active and successfully working, expanding our marketplace and range of services. Now we are looking for Project Manager who will join our team in Riga. The mandatory requirement is relocation.",
                "vacancy_city": "Рига (Латвія)"
            },
            {
                "vacancy_title": "Middle Project Manager",
                "company_name": "Group107",
                "vacancy_link": "https://jobs.dou.ua/companies/group107/vacancies/258019/",
                "vacancy_description": "We are looking for a Middle Project Manager to join our team of 5 PMs. In this role, you will manage projects spanning diverse domains within a fixed-price model. This position requires collaboration from our Lviv office.",
                "vacancy_city": "Львів"
            },
            {
                "vacancy_title": "IT Project Manager (IT PMO)",
                "company_name": "ПриватБанк",
                "vacancy_link": "https://jobs.dou.ua/companies/privatbank/vacancies/254122/",
                "vacancy_description": "ПриватБанк — є найбільшим банком України та одним з найбільш інноваційних банків світу. Займає лідуючі позиції за всіма фінансовими показниками в галузі та складає близько чверті всієї банківської системи країни.",
                "vacancy_city": "віддалено"
            }
        ]
    },
    {
        "category": "Product manager",
        "qty_vacancies": "121 вакансія  в категорії product manager",
        "vacancies_list": [
            {
                "vacancy_title": "Product Owner (Mobile)",
                "company_name": "BetterMe",
                "vacancy_link": "https://jobs.dou.ua/companies/betterme/vacancies/126466/?from=list_hot",
                "vacancy_description": "Про компанію:\n\nBetterMe — компанія, яка розробляє IT-продукти у категорії здоров’я та дозвілля для людей різного віку та фізичних можливостей.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Product Lead",
                "company_name": "Railsware",
                "vacancy_link": "https://jobs.dou.ua/companies/railsware/vacancies/119951/?from=list_hot",
                "vacancy_description": "🔹 5+ years of industry experience in Product Management\n🔹 Demonstrated success in defining, implementing and communicating the end-to-end vision of the product\n🔹 Experience in conducting market research and customer development, defining and implementing the go-to-market strategy...",
                "vacancy_city": "Київ, Краків (Польща), віддалено"
            },
            {
                "vacancy_title": "Product Manager (Responsible for Integrations)",
                "company_name": "Precoro",
                "vacancy_link": "https://jobs.dou.ua/companies/precoro/vacancies/257906/?from=list_hot",
                "vacancy_description": "We’re looking for an Integration Manager to manage the external integrations. Functional responsibility: Integrations via partner platform Hotglue with Microsoft Dynamics, Sage, Odoo, SFTP; Outsource development + in-house QA.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Publisher Google Play",
                "company_name": "BladeTech Agency",
                "vacancy_link": "https://jobs.dou.ua/companies/bladetech-agency/vacancies/257641/?from=list_hot",
                "vacancy_description": "BladeTech Agency — це агенція повного циклу обслуговування IT компаній. Маємо глибокі знання і досвід у контент-маркетингу, соціальних мережах, рекламі в Інтернеті і багатьох інших аспектах цифрового бізнесу.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Product Marketing (Retention) Manager",
                "company_name": "BetterMe",
                "vacancy_link": "https://jobs.dou.ua/companies/betterme/vacancies/255564/?from=list_hot",
                "vacancy_description": "ABOUT US:\n\nBetterMe is a health & wellness platform providing a tailored holistic approach to well-being. Since 2017, we have been on a mission to create a healthier world for everyone, regardless of age, sex, physical ability, or background.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Technical Product Manager",
                "company_name": "OpenVPN",
                "vacancy_link": "https://jobs.dou.ua/companies/openvpn/vacancies/233365/",
                "vacancy_description": "We are looking for a Technical Product Manager with deep knowledge of networking and cybersecurity to join our team, who will drive the entire SDLC through interfacing with various teams across our company (management, engineers, QA, etc.).",
                "vacancy_city": "Київ, Львів, за кордоном, віддалено"
            },
            {
                "vacancy_title": "Product Owner (Korean speaking)",
                "company_name": "Valtech",
                "vacancy_link": "https://jobs.dou.ua/companies/valtech/vacancies/258189/",
                "vacancy_description": "The Opportunity\n\n We are looking for a highly skilled and motivated Product Owner fluent in Korean to join our global team of 6,000 professionals in more than 60 offices worldwide.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Middle/Senior Product Manager (Marketing)",
                "company_name": "Galaktica",
                "vacancy_link": "https://jobs.dou.ua/companies/galaktica/vacancies/254542/",
                "vacancy_description": "Ми — українська продуктова IT-компанія Galaktica, яка створює і просуває свої власні онлайн проекти на найбільш платоспроможних ринках світу: США, Канада, Австралія, Великобританія, ЄС. Нашій компанії, як і основному продукту, вже 4 роки.",
                "vacancy_city": "Київ, Львів, Одеса, за кордоном, віддалено"
            },
            {
                "vacancy_title": "Casino Product Manager",
                "company_name": "Energame",
                "vacancy_link": "https://jobs.dou.ua/companies/energame/vacancies/258173/",
                "vacancy_description": "We are looking for a talented Casino Product Manager for one of our clients.\n\nAbout the team: At Risk.Inc, we are the mavericks of the gaming and wagering industry, where taking bold chances is our core philosophy.",
                "vacancy_city": "за кордоном, віддалено"
            },
            {
                "vacancy_title": "Product Manager",
                "company_name": "SKELAR",
                "vacancy_link": "https://jobs.dou.ua/companies/skelar/vacancies/258166/",
                "vacancy_description": "SKELAR — український венчур білдер, який будує міжнародні tech-бізнеси. Разом із ко-фаундерами збираємо сильні команди, щоб перемагати на глобальних ринках.\n\nСьогодні в SKELAR — десяток бізнесів у різних нішах від EdTech до SaaS.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Growth Product Manager",
                "company_name": "MOJAM",
                "vacancy_link": "https://jobs.dou.ua/companies/mojam/vacancies/251019/",
                "vacancy_description": "We’re looking for a product manager to establish & maintain new direction focused on acquisition & activation on product side. We’re agile, flexible and willing to dominate the market.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior Product Manager (Hily)",
                "company_name": "appflame",
                "vacancy_link": "https://jobs.dou.ua/companies/appflame/vacancies/225592/",
                "vacancy_description": "Ми — продуктова IT-компанія appflame. Ми створюємо продукти, що змінюють життя та ламають правила гри в категорії. Територіально знаходимося в Україні, реально — по всьому світу.\n\nМи шукаємо зухвалих та навіжених.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Product Owner",
                "company_name": "Solidgate",
                "vacancy_link": "https://jobs.dou.ua/companies/solidgate/vacancies/236710/",
                "vacancy_description": "Solidgate — це В2В продукт у сфері онлайн-платежів. Ми будуємо фінтех-екосистему, щоб наші клієнти могли швидко, безпечно та вигідно приймати оплати по всьому світу: від Європи до ЛАТАМу, від США до Азії.",
                "vacancy_city": "Київ, за кордоном, віддалено"
            },
            {
                "vacancy_title": "Product Manager",
                "company_name": "OBRIO",
                "vacancy_link": "https://jobs.dou.ua/companies/obrio/vacancies/251277/",
                "vacancy_description": "OBRIO is an IT company with Ukrainian roots inside Genesis business ecosystem. Our team consists of more than 120 talented professionals whose ambitions and striving for success help us build the best products on the market.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior Product Manager (Mobile)",
                "company_name": "WizardsDev",
                "vacancy_link": "https://jobs.dou.ua/companies/wizardsdev/vacancies/258082/",
                "vacancy_description": "— 5+ years of experience in product management in mobile product companies;\n— experience in managing a team;\n— excellent communication and analytical skills\n— deep knowledge of marketing and product metrics.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "PRODUCT MANAGER",
                "company_name": "Tonti Laguna Group",
                "vacancy_link": "https://jobs.dou.ua/companies/tonti-laguna/vacancies/258068/",
                "vacancy_description": "У команду Tonti Laguna Prime шукаємо цілеспрямованого та відповідального Product Manager`a для запуску нового веб продукту.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Game Producer",
                "company_name": "Bini Games",
                "vacancy_link": "https://jobs.dou.ua/companies/bini-games/vacancies/215908/",
                "vacancy_description": "Bini Games — це українська продуктова компанія, яка створила більше 20-ти дитячих розвиваючих додатків.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Lead Product Manager",
                "company_name": "ПриватБанк",
                "vacancy_link": "https://jobs.dou.ua/companies/privatbank/vacancies/258004/",
                "vacancy_description": "ПриватБанк — є найбільшим банком України та одним з найбільш інноваційних банків світу. Займає лідируючі позиції за всіма фінансовими показниками в галузі та складає близько чверті всієї банківської системи країни.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Product Owner",
                "company_name": "Apomedical (IL) Ltd",
                "vacancy_link": "https://jobs.dou.ua/companies/apomedical-ltd/vacancies/158377/",
                "vacancy_description": "We are an online pharmacy and prescription service portal. Our mission is to provide our clients with a simplified, fast and secure solution for purchasing prescription medications online, with the benefit of confidentiality.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Growth Marketing Manager (Impulse)",
                "company_name": "Genesis",
                "vacancy_link": "https://jobs.dou.ua/companies/genesis-technology-partners/vacancies/257954/",
                "vacancy_description": "Привіт!\n\nМи українська продуктова компанія Impulse, яка вже 5 років розвиває застосунок для тренування мозку Impulse — Brain Training.",
                "vacancy_city": "Київ, гібрид, віддалено"
            }
        ]
    },
    {
        "category": "Hr",
        "qty_vacancies": "145 вакансій  в категорії hr",
        "vacancies_list": [
            {
                "vacancy_title": "Junior IT Recruiter",
                "company_name": "DevsData",
                "vacancy_link": "https://jobs.dou.ua/companies/devsdata-llc/vacancies/256462/?from=list_hot",
                "vacancy_description": "Junior IT Recruiter needed!\n\n\n\n💰23 900 — 27 000 UAH a month (if you work full-time)\n\n🌎100% Remotely\n\n🕦 Flexible working hours as soon as you’re available during our core hours, which are 9 am — 5 pm (or during most of them) — min.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "L&D Project Manager",
                "company_name": "Ukrsibbank",
                "vacancy_link": "https://jobs.dou.ua/companies/ukrsibbank/vacancies/250737/",
                "vacancy_description": "UKRSIBBANK BNP Paribas Group — один з найбільших універсальних банків України. Ми стабільний партнер, який пропонує сучасний та надійний банкінг за підтримки провідної європейської групи BNP Paribas Group.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Head of Employer Brand",
                "company_name": "JatApp",
                "vacancy_link": "https://jobs.dou.ua/companies/jatapp/vacancies/258194/",
                "vacancy_description": "JatApp — продуктова IT компанія, яка створює масові, корисні та високотехнологічні продукти, якими щодня користуються мільйони юзерів зі всього світу. \n\nМи шукаємо Head of Employer Brand в нашу команду для роботи з розробкою, управлінням, реалізацією стратегії бренду роботодавця.",
                "vacancy_city": "Київ, за кордоном, віддалено"
            },
            {
                "vacancy_title": "Talent Acquisition Specialist",
                "company_name": "Railsware",
                "vacancy_link": "https://jobs.dou.ua/companies/railsware/vacancies/246310/",
                "vacancy_description": "🔸 Advanced level of English (both written and spoken)\n🔸 Experience in hiring for technical positions\n🔸 Outstanding communication skills (both written and spoken)\n🔸 Strong research and project management skills (prioritization, task tracking, etc.)\n🔸 Strong multitasking and...",
                "vacancy_city": "Київ, Краків (Польща), віддалено"
            },
            {
                "vacancy_title": "Talent Acquisition Specialist (AMO)",
                "company_name": "AMO",
                "vacancy_link": "https://jobs.dou.ua/companies/amo/vacancies/244236/",
                "vacancy_description": "AMO — міжнародна IT-компанія, яка створює продукти та історії для мільйонів користувачів. Маємо своє англомовне медіа, власний відеопродакшн та розробляємо додатки у сфері health & fitness. Ми вважаємо, що світ стане кращим, коли ми розкриємо свої суперсили.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Happiness Manager",
                "company_name": "SmartyAds",
                "vacancy_link": "https://jobs.dou.ua/companies/smartyads/vacancies/226776/",
                "vacancy_description": "SmartyAds is a passionate and ambitious team of professionals who redefine the standards of advertising and monetization worldwide by building robust and efficiency-driven programmatic platforms.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "HR People Partner",
                "company_name": "CLARYFI",
                "vacancy_link": "https://jobs.dou.ua/companies/claryfi/vacancies/251834/",
                "vacancy_description": "As an HR People Partner, you play a key role in supporting management teams to achieve HR effectiveness and implement strategic change within the organization.",
                "vacancy_city": "Варна (Болгарія)"
            },
            {
                "vacancy_title": "Executive Assistant",
                "company_name": "RBI Retail Innovation",
                "vacancy_link": "https://jobs.dou.ua/companies/retail-innovation-raiffeisen-bank-international/vacancies/249895/",
                "vacancy_description": "WHO WE ARE:\n\n RBI Retail Innovation is a product development company, a part of the global team of Raiffeisen Bank International (Vienna, Austria). We are fast-growing and working for the EU markets. Now we have Poland and Romania in our scope.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Recruiter (Gambling)",
                "company_name": "Leadsdoit",
                "vacancy_link": "https://jobs.dou.ua/companies/leadsdoit/vacancies/246401/",
                "vacancy_description": "Leadsdoit — успішна performance marketing компанія з українським корінням. Ми займаємося affiliate-monetized проєктами для закордонних та внутрішніх ринків. Створюємо власні мобільні додатки та проєкти, спрямовані на весь світ.",
                "vacancy_city": "за кордоном"
            },
            {
                "vacancy_title": "HR-менеджер",
                "company_name": "АЛЛО",
                "vacancy_link": "https://jobs.dou.ua/companies/allo/vacancies/258092/",
                "vacancy_description": "У зв’язку з розширенням нашої професійної та дружньої команди ми відкриваємо вакансію HR менеджера.",
                "vacancy_city": "Дніпро"
            },
            {
                "vacancy_title": "Middle IT Recruiter",
                "company_name": "Idenon",
                "vacancy_link": "https://jobs.dou.ua/companies/idenon/vacancies/258087/",
                "vacancy_description": "IDENON welcomes talented professionals to join our dynamic company as a Middle IT Recruiter!  We are seeking a driven and motivated individual to join our team.",
                "vacancy_city": "за кордоном, віддалено"
            },
            {
                "vacancy_title": "Searcher (Sourcer) / менеджер з пошуку",
                "company_name": "Lemon.School",
                "vacancy_link": "https://jobs.dou.ua/companies/lemon-school/vacancies/258086/",
                "vacancy_description": "Якщо тобі драйвити швидкість та динаміка, то ти легкий до ідей та ініціативний — Біжи до нас! Ми — група компаній Art Lemon.\n\nТОПи у розробці, освітніх продуктах та трафіку.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Employer Brand Manager",
                "company_name": "Ковальська",
                "vacancy_link": "https://jobs.dou.ua/companies/kovalska/vacancies/258085/",
                "vacancy_description": "Група «Ковальська» — це компанія з історією, що охоплює понад 60 років невпинного розвитку в будівельній галузі.\n\nМи — національний лідер з виробництва будівельних матеріалів та провідний девелопер.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Middle/Junior HR Generalist",
                "company_name": "Idenon",
                "vacancy_link": "https://jobs.dou.ua/companies/idenon/vacancies/253408/",
                "vacancy_description": "Idenon is a modern games development company. We are proud of designing and developing our games in-house. Our aim is to bring new quality into existing market. We deliver unique gaming experience with every new product. We develop games that people want to play non stop!",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Менеджер з набору викладачів",
                "company_name": "Kyiv School of Economics",
                "vacancy_link": "https://jobs.dou.ua/companies/kyiv-school-of-economics/vacancies/258067/",
                "vacancy_description": "Київська школа економіки (KSE) — це група компаній, заснована в 1996 році EERC та Фондом Євразія. Наша місія — закласти інтелектуальний фундамент для міцної та інноваційної економіки України.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Trainee IT Researcher",
                "company_name": "SKELAR",
                "vacancy_link": "https://jobs.dou.ua/companies/skelar/vacancies/258061/",
                "vacancy_description": "SKELAR — український venture builder, який будує міжнародні tech-бізнеси. Разом із ко-фаундерами збираємо сильні команди, щоб перемагати на глобальних ринках. Пишаємося сильною командою із 800+ фахівців, які мають круту експертизу й амбітні цілі.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "HR бізнес-партнер",
                "company_name": "Sense Bank",
                "vacancy_link": "https://jobs.dou.ua/companies/sensebank/vacancies/251173/",
                "vacancy_description": "Привіт!\n\nЗапрошуємо HR Business Partner 🚀 стати частиною нашої професійної команди.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Head of Business Training",
                "company_name": "PIN-UP.BUSINESS",
                "vacancy_link": "https://jobs.dou.ua/companies/pin-up-business/vacancies/254063/",
                "vacancy_description": "Requirements: • Higher education; • Proven experience in the development and delivery of business training programs for at least 3 years; • Advanced trainer skills, the experience of conducting various training courses, including Management and Train the Trainer topics; • Facilitation...",
                "vacancy_city": "Київ, Варшава (Польща), Лімасол (Кіпр), віддалено"
            },
            {
                "vacancy_title": "HR-People Partner",
                "company_name": "PIN-UP.BUSINESS",
                "vacancy_link": "https://jobs.dou.ua/companies/pin-up-business/vacancies/258029/",
                "vacancy_description": "Requirements:  • 3 plus year experience in HR IT (adaptation, employee engagement & retention, separation); • Working experience in a large international company; • English language, Upper-intermediate level (B2) preferably; • Great experience in organization and implementation...",
                "vacancy_city": "Варшава (Польща), Лімасол (Кіпр)"
            },
            {
                "vacancy_title": "Senior Rewards Specialist/Senior Rewards Partner",
                "company_name": "SPD Technology",
                "vacancy_link": "https://jobs.dou.ua/companies/spd-technology/vacancies/258024/",
                "vacancy_description": "At SPD Technology, we bring together a team of like-minded people who are driven by the desire to bring value through their work, united in their commitment to high performance and delivering custom, cutting-edge tech solutions that drive clients’ growth.",
                "vacancy_city": "Київ, віддалено"
            }
        ]
    },
    {
        "category": "Sales",
        "qty_vacancies": "337 вакансій  в категорії sales",
        "vacancies_list": [
            {
                "vacancy_title": "Sales Development Representative (Outbound or Inbound)",
                "company_name": "SE Ranking",
                "vacancy_link": "https://jobs.dou.ua/companies/se-ranking/vacancies/256897/?from=list_hot",
                "vacancy_description": "SE Ranking is a top-rated SaaS based toolset for SEO professionals, Small Businesses and Agencies. As a Sales Development, Outbound, you will play a central role in helping generate interest for our suite of SEO tools.",
                "vacancy_city": "Варшава, Вроцлав, Київ, віддалено"
            },
            {
                "vacancy_title": "Key Account Manager (Kyiv office based)",
                "company_name": "giftmall",
                "vacancy_link": "https://jobs.dou.ua/companies/gift-mall/vacancies/245687/?from=list_hot",
                "vacancy_description": "giftmall — українська компанія з офісами у Києві та Варшаві.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Lead Generation Specialist",
                "company_name": "Aimprosoft",
                "vacancy_link": "https://jobs.dou.ua/companies/aimprosoft/vacancies/258196/",
                "vacancy_description": "🚀AIMPROSOFT — Lead Generation Specialist Opportunity!\n\n Aimprosoft, a fast-growing outsourcing IT company with 18 years of market presence. is looking for a Lead Generation Specialist. Jump into IT, it’s your time to act!",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Business Development Manager",
                "company_name": "Romaniuk Consulting",
                "vacancy_link": "https://jobs.dou.ua/companies/hrstaff/vacancies/258145/",
                "vacancy_description": "WaardeX — міжнародна компанія, що працює в сфері Advertising Technologies.\n\nЗ 2015 року ми займаємось розробкою технічних інструментів та програмного забезпечення для рекламодавців та паблішерів.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Partnership/Growth Manager",
                "company_name": "WeSoftYou",
                "vacancy_link": "https://jobs.dou.ua/companies/wesoftyou/vacancies/258144/",
                "vacancy_description": "Join the team of innovative high-end mobile & web development leaders! WeSoftYou works with impact-first companies from all around the globe, using a data-driven approach and continuously increasing our operational effectiveness.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Account Manager",
                "company_name": "WeSoftYou",
                "vacancy_link": "https://jobs.dou.ua/companies/wesoftyou/vacancies/226134/",
                "vacancy_description": "Join the team of innovative high-end mobile & web development leaders! WeSoftYou works with impact-first companies from all around the globe, using a data-driven approach and continuously increasing our operational effectiveness.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Business Development Manager",
                "company_name": "Genesis",
                "vacancy_link": "https://jobs.dou.ua/companies/genesis-technology-partners/vacancies/215853/",
                "vacancy_description": "Привіт!\n\nGenesis — це українська кофаундингова ІТ-компанія та один з найбільших паблішерів неігрових застосунків. Разом з найкращими підприємцями Центральної та Східної Європи ми створюємо та розвиваємо глобальні технологічні бізнеси. Основні наші ринки — це США, Європа й Африка.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Trainee Lead Generation",
                "company_name": "SysGears",
                "vacancy_link": "https://jobs.dou.ua/companies/sysgears/vacancies/232215/",
                "vacancy_description": "We are looking for an aspiring Lead Generation Specialist!",
                "vacancy_city": "Львів, Дніпро, віддалено"
            },
            {
                "vacancy_title": "Account Manager",
                "company_name": "expla",
                "vacancy_link": "https://jobs.dou.ua/companies/expla/vacancies/258095/",
                "vacancy_description": "Привіт! Я Єгор, Head of Cpamatica Affiliate Network (powered by expla).\n\nCpamatica Affiliate Network вже 8 років є одним із лідерів affiliate індустрії. За цей час ми залучили тисячі партнерів та побудували одну з найкращих мереж для амбіційних афіліатів.",
                "vacancy_city": "Київ, Варшава (Польща)"
            },
            {
                "vacancy_title": "Junior/Middle Sales Development Representative",
                "company_name": "Altamira",
                "vacancy_link": "https://jobs.dou.ua/companies/altamira-ai/vacancies/258065/",
                "vacancy_description": "Altamira is a boutique IT company that delivers Digital and AI solutions to a wide range of international customers.",
                "vacancy_city": "Братислава (Словаччина), віддалено"
            },
            {
                "vacancy_title": "Business Development Manager (Lisbon office based )",
                "company_name": "Serverless Team",
                "vacancy_link": "https://jobs.dou.ua/companies/serverless-team/vacancies/258046/",
                "vacancy_description": "2+ years in sales, business development or similar position\n\n1+ year of experience working on Upwork & Linkedin Helper (understanding of the platform’s algorithms)\n\nExcellent negotiation and communication skills\n\nLeadership skills \n\n\nНам потрібна людина, яка вже мала...",
                "vacancy_city": "Лісабон (Португалія), віддалено"
            },
            {
                "vacancy_title": "Business Development Manager, В2В (Estonia)",
                "company_name": "MK:translations",
                "vacancy_link": "https://jobs.dou.ua/companies/mktranslations/vacancies/258033/",
                "vacancy_description": "Hello!\n\nMy name is Julia, HR of Localica.io.\n\nWe are seeking an experienced Business Development Manager to lead our new subsidiary company in the Estonian market — Localica.",
                "vacancy_city": "за кордоном, віддалено"
            },
            {
                "vacancy_title": "Business Development Manager (Pre-Sale)",
                "company_name": "Eventyr",
                "vacancy_link": "https://jobs.dou.ua/companies/eventyr/vacancies/258026/",
                "vacancy_description": "📄 Requirements:\n\n📍Minimum 3 years of experience in business development, sales, or a similar role within the software development industry, with specific experience in mobile, web, and game development.",
                "vacancy_city": "Ukraine, віддалено"
            },
            {
                "vacancy_title": "Account Manager (Spanish speaking)",
                "company_name": "Depositphotos",
                "vacancy_link": "https://jobs.dou.ua/companies/depositphotos/vacancies/227407/",
                "vacancy_description": "Depositphotos is a leading content marketplace with 220 million royalty-free images, videos, vectors, illustrations, and music. It fosters a community of 100,000 creatives, who submit their works to help clients from 192 countries visualize their ideas.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Sales Manager. Full time/Part-time. Remotely",
                "company_name": "Recruiting agency Escadra",
                "vacancy_link": "https://jobs.dou.ua/companies/escadra/vacancies/257993/",
                "vacancy_description": "Escadra, an Ukrainian IT recruiting company with extensive and successful experience in working for clients from diverse regions and countries of the world, is looking for Sales Manager   Place of duty: remote work or Bucharest\n\nTasks:\n\n\n\nSearch and engagement of potential...",
                "vacancy_city": "за кордоном, віддалено"
            },
            {
                "vacancy_title": "Middle Business Development Manager",
                "company_name": "Soft Industry Alliance",
                "vacancy_link": "https://jobs.dou.ua/companies/soft-industry-allince/vacancies/257991/",
                "vacancy_description": "Soft Industry Alliance is seeking a highly motivated and experienced Business Development Manager to join our dynamic team.\n\nOur ideal candidate will have a strong background in IT and exceptional sales skills.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Sales Manager Upwork",
                "company_name": "Ocean Agency",
                "vacancy_link": "https://jobs.dou.ua/companies/ocean-agency/vacancies/257984/",
                "vacancy_description": "We are Ocean Agency — a full-cycle Ukrainian-made digital agency specializing in web design, web development, and mobile development.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Finance Manager",
                "company_name": "WaardeX",
                "vacancy_link": "https://jobs.dou.ua/companies/waardex/vacancies/257973/",
                "vacancy_description": "WaardeX з 2015 року — доброзичлива AdTech компанія, яка є посередником між майданчиками (додатки, сайти) та паблішерами, збільшуємо прибуток обох на ринках США, Європи, Азії, Ізраїлю, через рекламний трафік з вебсайтів та додатків.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Lead Researcher",
                "company_name": "Luxe Quality",
                "vacancy_link": "https://jobs.dou.ua/companies/luxe-quality/vacancies/257965/",
                "vacancy_description": "We are outstaffing IT company specialize in software testing and quality assurance. Now we are looking for Lead Researcher.  Responsibilities: — Work closely with the Sales Development Representatives to refine lead-generation strategies based on feedback.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Sales Manager (outbound)",
                "company_name": "Blue Carrot",
                "vacancy_link": "https://jobs.dou.ua/companies/blue-carrot/vacancies/257957/",
                "vacancy_description": "We are looking for an IT Sales manager with experience in outbound sales to join us in helping international companies and universities improve their learning strategies by producing efficient e-learning content. Our team has been creating media content since 2014.",
                "vacancy_city": "Львів, віддалено"
            }
        ]
    },
    {
        "category": "Analyst",
        "qty_vacancies": "314 вакансій  в категорії analyst",
        "vacancies_list": [
            {
                "vacancy_title": "Business Analyst",
                "company_name": "Clario",
                "vacancy_link": "https://jobs.dou.ua/companies/clario/vacancies/254365/?from=list_hot",
                "vacancy_description": "Hi, We are Clario, a consumer-focused cybersecurity company on a mission to change an industry. Over 400 professionals with one common goal — supporting everyone’s right to a digital life, secured.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Product Analyst",
                "company_name": "JustAnswer",
                "vacancy_link": "https://jobs.dou.ua/companies/justanswer/vacancies/249947/?from=list_hot",
                "vacancy_description": "About Us We are a San Francisco based company founded in 2003. Our mission is simple: we help people. We have democratized professional services by connecting customers with verified and vetted Experts who provide reliable answers at any hour and on any budget.",
                "vacancy_city": "Львів, Ужгород, віддалено"
            },
            {
                "vacancy_title": "Product Analyst",
                "company_name": "Bizzabo",
                "vacancy_link": "https://jobs.dou.ua/companies/bizzabo/vacancies/251071/?from=list_hot",
                "vacancy_description": "Bizzabo, a leader in event technology, is looking for a highly analytical and detail-oriented Product Analyst to join our dynamic, creative, and growing data team.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Market Research Analyst",
                "company_name": "BetterMe",
                "vacancy_link": "https://jobs.dou.ua/companies/betterme/vacancies/256373/?from=list_hot",
                "vacancy_description": "ABOUT US:\n\nBetterMe is a health & wellness platform providing a tailored holistic approach to well-being. Since 2017, we have been on a mission to create a healthier world for everyone, regardless of age, sex, physical ability, or background.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "System Analyst — Trading Platform Development",
                "company_name": "Currency.com",
                "vacancy_link": "https://jobs.dou.ua/companies/currency-com/vacancies/256442/?from=list_hot",
                "vacancy_description": "Who we are looking for?  We are seeking a skilled System Analyst with a strong background in trading platform development. The ideal candidate will be instrumental in the design, analysis, and implementation of our new trading platform.",
                "vacancy_city": "Варшава (Польща), віддалено"
            },
            {
                "vacancy_title": "Product Analyst",
                "company_name": "Howly",
                "vacancy_link": "https://jobs.dou.ua/companies/howly/vacancies/256331/?from=list_hot",
                "vacancy_description": "Привіт! Мене звати Володимир, я Head of Monetization у Howly, стартапі в екосистемі SKELAR і зараз я в пошуку в свою команду Product Analyst.  За 2 роки із запуску MVP ми виросли до бізнесу з більше ніж 130 людей, і це найкраща команда, з якою мені доводилось працювати.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "System/Business Analyst",
                "company_name": "Solidgate",
                "vacancy_link": "https://jobs.dou.ua/companies/solidgate/vacancies/234782/",
                "vacancy_description": "Solidgate — це B2B продукт у сфері онлайн-платежів. Ми будуємо фінтех-екосистему, щоб наші клієнти могли швидко, безпечно та вигідно приймати оплати по всьому світу: від Європи до ЛАТАМу, від США до Азії.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Product Analyst",
                "company_name": "United Tech",
                "vacancy_link": "https://jobs.dou.ua/companies/united-tech/vacancies/258210/",
                "vacancy_description": "We are currently seeking a Product Analyst to join United Tech. You will have the opportunity to make an impact on our main metrics. This position offers opportunities for career development in a team that provides a supportive work environment.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Junior BI Specialist",
                "company_name": "MWDN",
                "vacancy_link": "https://jobs.dou.ua/companies/mwdn/vacancies/258195/",
                "vacancy_description": "We are looking for an experienced Junior BI to join our client’s growing team.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Бізнес-аналітик Київстар ТБ",
                "company_name": "1+1 media",
                "vacancy_link": "https://jobs.dou.ua/companies/1plus1/vacancies/226563/",
                "vacancy_description": "Київстар ТБ — спільний проєкт 1+1 media і «Київстар», заснований 11 грудня 2019 року. Це українська платформа онлайн-телебачення з величезною відеотекою. Київстар ТБ надає користувачам доступ до понад 320 телеканалів з усього світу.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "BI Analyst",
                "company_name": "PocketGuard",
                "vacancy_link": "https://jobs.dou.ua/companies/pocketguard/vacancies/258190/",
                "vacancy_description": "PocketGuard запрошує приєднатися до команди BI Analystʼa, щоб разом досягти поставлених цілей і робити продукт кращим.\n\nPocketGuard — це додаток для управління особистими фінансами.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Data Analyst",
                "company_name": "vilmate",
                "vacancy_link": "https://jobs.dou.ua/companies/vilmate/vacancies/258150/",
                "vacancy_description": "В компанію Vilmate шукаємо аналітика даних для роботи над молодим шведським проектом в області штучного інтелекту.\n\nVilmate (http://careers.vilmate.com ) — це українська високопрофесійна команда з понад 130 розробників, QA та DevOps інженерів, дизайнерів та менеджерів.",
                "vacancy_city": "Київ, Харків, Варшава (Польща), віддалено"
            },
            {
                "vacancy_title": "Business Analyst",
                "company_name": "Eddy LMS",
                "vacancy_link": "https://jobs.dou.ua/companies/eddy-lms/vacancies/251805/",
                "vacancy_description": "Хей👋, Eddy LMS — це український освітній startup, покликаний полегшити та модернізувати навчальний процес.  Ми створили не лише якісну платформу, а повноцінну освітню екосистему з понад сотнею різноманітних функцій для вчителів, учнів і батьків.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Financial Analyst",
                "company_name": "Solidgate",
                "vacancy_link": "https://jobs.dou.ua/companies/solidgate/vacancies/224982/",
                "vacancy_description": "Solidgate — це В2В продукт у сфері онлайн-платежів. Ми будуємо фінтех-екосистему, щоб наші клієнти могли швидко, безпечно та вигідно приймати оплати по всьому світу: від Європи до ЛАТАМу, від США до Азії.",
                "vacancy_city": "офіс, Київ"
            },
            {
                "vacancy_title": "Junior Business Analyst",
                "company_name": "COAX Software",
                "vacancy_link": "https://jobs.dou.ua/companies/coaxsoftware/vacancies/254546/",
                "vacancy_description": "Команда COAX Software росте й кількість проєктів збільшується! Тому шукаємо Junior Business Analyst, який допоможе запустити в розробку ще багато-багато проєктів з нами 🔥  \n\nBusiness Analyst буде точково залучений у проєкти різних доменів.",
                "vacancy_city": "Івано-Франківськ, віддалено"
            },
            {
                "vacancy_title": "Junior Data Analyst (Jiji)",
                "company_name": "Genesis",
                "vacancy_link": "https://jobs.dou.ua/companies/genesis-technology-partners/vacancies/254532/",
                "vacancy_description": "Jiji — українська продуктова IT компанія, яка створює продукти електронної комерції в Африці і є партнерською компанією Genesis.\n\nМи створюємо та розвиваємо класифайди з 2014 року.",
                "vacancy_city": "Київ, гібрид, Київ, офіс"
            },
            {
                "vacancy_title": "Business Analyst (Implementation team)",
                "company_name": "IPLAND",
                "vacancy_link": "https://jobs.dou.ua/companies/ipland/vacancies/258103/",
                "vacancy_description": "IPLAND — міжнародна продуктова IT компанія. Ми відкриваємо нові нестандартні шляхи рішення бізнес-викликів, надаючи глобальні хмарні сервіси (SaaS), базуючись на економіці спільного користування та можливостях штучного інтелекту.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Junior Product Analyst",
                "company_name": "Genesis",
                "vacancy_link": "https://jobs.dou.ua/companies/genesis-technology-partners/vacancies/258098/",
                "vacancy_description": "Привіт!\n\nМи шукаємо талановитого та високовмотивованого Junior Product Analyst на швидко зростаючий проєкт у сфері відеостримінгу, який допоможе нашій команді приймати бізнес- і продуктові рішення більш об’єктивно, ґрунтуючись на фактах і даних.",
                "vacancy_city": "Київ, офіс"
            },
            {
                "vacancy_title": "Аналітик SQL",
                "company_name": "Sense Bank",
                "vacancy_link": "https://jobs.dou.ua/companies/sensebank/vacancies/258093/",
                "vacancy_description": "Шукаємо людину, яка буде:\n\n\n\nзабезпечувати аналітичну підтримку та супровід бізнес підрозділів;\n\nзайматись розробкою звітів різної складності (KPI , аналіз кредитних портфелів тощо);\n\nвізуалізовувати звіти в Power BI;\n\nоптимізовувати та автоматизовувати регулярну аналітичну...",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Technical Project Manager/Business Analyst",
                "company_name": "WizardsDev",
                "vacancy_link": "https://jobs.dou.ua/companies/wizardsdev/vacancies/258084/",
                "vacancy_description": "— Experience in the role of a business analyst for at least 3 years;\n— Deep understanding of business processes and user needs;\n— Ability to analyze data and identify business requirements;\n— Knowledge of Agile/Scrum methodologies and project management tools;\n— Excellent communication...",
                "vacancy_city": "віддалено"
            }
        ]
    },
    {
        "category": "Ruby",
        "qty_vacancies": "19 вакансій  в категорії ruby",
        "vacancies_list": [
            {
                "vacancy_title": "Senior Ruby On Rails Developer",
                "company_name": "INSART",
                "vacancy_link": "https://jobs.dou.ua/companies/insart/vacancies/258023/",
                "vacancy_description": "For the process of releasing MVP version of a completely new product in a wealth management domain we’re currently looking for an experienced Ruby on Rails Developer with 5+ years of experience with Ruby on Rails framework.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Fullstack developer (RoR / React)",
                "company_name": "ЗАЗМІК",
                "vacancy_link": "https://jobs.dou.ua/companies/zazmic/vacancies/257632/",
                "vacancy_description": "The Position:\n\nOur client is expanding our engineering team and seeking skilled engineers to develop and deliver top-notch technology solutions. You’ll join a talented group of engineers united in assisting our users on their journey of growth.",
                "vacancy_city": "Дніпро, за кордоном, віддалено"
            },
            {
                "vacancy_title": "Backend (Ruby On Rails) Developer",
                "company_name": "Voicespin",
                "vacancy_link": "https://jobs.dou.ua/companies/voicespin/vacancies/257300/",
                "vacancy_description": "We are currently looking for Backend Developer to extend our team. Full-time employment, remote or office, for long-term cooperation.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Middle Ruby Developer (EU based)",
                "company_name": "Amoniac",
                "vacancy_link": "https://jobs.dou.ua/companies/amoniac/vacancies/26260/",
                "vacancy_description": "* Proficient in Ruby, with a good knowledge of its ecosystems.\n* Solid understanding of object-oriented programming.\n* A knack for writing clean, readable Ruby code.\n* Experience with RSpec.",
                "vacancy_city": "Таллінн (Естонія), віддалено"
            },
            {
                "vacancy_title": "RoR/Node.js Developer",
                "company_name": "Rebbix",
                "vacancy_link": "https://jobs.dou.ua/companies/rebbix/vacancies/256809/",
                "vacancy_description": "Project Description\n\nday.io, Brazilian Time & Attendance startup. Our system allows us to ensure that employees follow the assigned schedule and track their time when they work out of the office.",
                "vacancy_city": "Вроцлав (Польща), віддалено"
            },
            {
                "vacancy_title": "Senior Ruby on Rails Developer",
                "company_name": "Altamira",
                "vacancy_link": "https://jobs.dou.ua/companies/altamira-ai/vacancies/256748/",
                "vacancy_description": "Altamira service delivery teams currently span Slovakia, Ukraine, Azerbaijan, and we have ambitions to expand our footprint to meet the growing demand across Europe and into our primary growth markets in the UK and the US.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior Ruby on Rails Engineer",
                "company_name": "JetSoftPro",
                "vacancy_link": "https://jobs.dou.ua/companies/jetsoftpro/vacancies/256668/",
                "vacancy_description": "Project Overview:\n\nWe are seeking a talented Software Engineer to join our team. This is an exciting opportunity to work with a growing US partner that is committed to streamlining recruiting processes and improving visibility for HR teams and managers.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Ruby developer",
                "company_name": "Aejis",
                "vacancy_link": "https://jobs.dou.ua/companies/aejis/vacancies/256583/",
                "vacancy_description": "#remote #fulltime #backenddeveloper\n\nКомпанія Aejis розшукує бекенд девелопера з незвичними вимогами:\n\n1 Стресостійкість 2 Самостійність 3 Відповідальність\n\nЗнання та досвід в ruby та англійської буде суттєвою додатковою перевагою.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Team Lead Backend Engineer [Ruby]",
                "company_name": "StartupSoft",
                "vacancy_link": "https://jobs.dou.ua/companies/startup-soft/vacancies/256505/",
                "vacancy_description": "Tech stack\n\nRubyOnRails, AWS, Kotlin, Swift, JS\n\nProject stage\n\nFounded 2013\n\nTeam composition\n\n14 full-timers in total (product people, 1 Android, QAs)\n\nQualifications and skills\n\n\n\nRuby on Rails development experience in a production environment\n\nManaging and leading a team...",
                "vacancy_city": "Львів, Тернопіль, віддалено"
            },
            {
                "vacancy_title": "Middle Ruby Developer",
                "company_name": "Peachy",
                "vacancy_link": "https://jobs.dou.ua/companies/peachy/vacancies/256497/",
                "vacancy_description": "We are looking for an experienced Ruby Developer to join our dynamic team. As a Backend Ruby Developer at Peachy, you will be instrumental in shaping the technological backbone of our revolutionary platform.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Full Stack Engineer (Ruby / JS)",
                "company_name": "Railsware",
                "vacancy_link": "https://jobs.dou.ua/companies/railsware/vacancies/253576/",
                "vacancy_description": "🔶 Excellent general programming skills, ability to work with complex codebases\n🔶 Extensive knowledge of Ruby, Ruby on Rails, and its testing frameworks\n🔶 Experience in writing JavaScript applications using modern frameworks\n🔶 Practical experience in different DBs (e.g.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Ruby on Rails Developer",
                "company_name": "Codica",
                "vacancy_link": "https://jobs.dou.ua/companies/codica/vacancies/256364/",
                "vacancy_description": "Друзі, вітаємо 👋\n\nЯкщо ви любите логічні рішення та знаходите простоту в коді, то запрошуємо до нас! Ми шукаємо розробників, які вже працювали з Ruby on Rails на реальних проєктах. \n\nФул ремоут або гібрид (офіси є в Києві та Харкові)!",
                "vacancy_city": "Kyiv, Kharkiv, віддалено"
            },
            {
                "vacancy_title": "Full Stack Engineer (Ruby/React)",
                "company_name": "Social Solutions Group",
                "vacancy_link": "https://jobs.dou.ua/companies/social-solutions-group/vacancies/256189/",
                "vacancy_description": "We are seeking a highly qualified and experienced Full Stack Engineer with expertise in Ruby, Ruby on Rails, and JavaScript technologies.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Senior ruby engineer",
                "company_name": "Зорі",
                "vacancy_link": "https://jobs.dou.ua/companies/zori/vacancies/254258/",
                "vacancy_description": "Про нас\n\nЗорі — це додаток, де легко можна знайти спеціалістів за рекомендацією від друзів, знайомих, сусідів, співробітників і тд. Рекомендації від людей яким ти довіряєш — це найцінніше і найнадійніше джерело інформації про виконавців, яких ти шукаєш.",
                "vacancy_city": "Львів, віддалено"
            },
            {
                "vacancy_title": "Middle Ruby Developer (with React)",
                "company_name": "CHI Software",
                "vacancy_link": "https://jobs.dou.ua/companies/chi-software/vacancies/245383/",
                "vacancy_description": "Candidate’s location — Europe  About project  Imagine a cutting-edge web application akin to a CRM system, carefully tailored for various international markets, including the US, UK, Italy, Germany, Canada, and Belgium.",
                "vacancy_city": "Барселона (Іспанія), Краків (Польща), віддалено"
            },
            {
                "vacancy_title": "Middle Strong/Senior Ruby on Rails Developer (part-time)",
                "company_name": "InventorSoft",
                "vacancy_link": "https://jobs.dou.ua/companies/inventorsoft/vacancies/255017/",
                "vacancy_description": "InventorSoft в пошуках Middle Strong/Senior RoR розробника на швейцарський SaaS проєкт.",
                "vacancy_city": "Львів, Чернівці, віддалено"
            },
            {
                "vacancy_title": "Senior Backend Ruby Developer",
                "company_name": "HIRETOP",
                "vacancy_link": "https://jobs.dou.ua/companies/hiretop/vacancies/254897/",
                "vacancy_description": "Full-time  Remote\n\nWe`re looking for a skilled Backend Ruby Developer for an international, fast-growing service company which provides the technology, implementation, and lifecycle expertise to solve business challenges through the lens of intelligent automation technologies...",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Ruby on Rails Developer",
                "company_name": "CommPeak",
                "vacancy_link": "https://jobs.dou.ua/companies/commpeak/vacancies/210336/",
                "vacancy_description": "DESCRIPTION\n\nCommPeak makes cloud-based business communication easier and more affordable, empowering people with superior quality products.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Full-Stack Engineer (Ruby + React) | Quorso",
                "company_name": "GT",
                "vacancy_link": "https://jobs.dou.ua/companies/gt/vacancies/254867/",
                "vacancy_description": "GT was founded in 2019 by a former Apple, Nest, and Google executive. GT’s mission is to connect the world’s best talent with product careers offered by high-growth companies in the UK, USA, Canada, Germany, and the Netherlands.",
                "vacancy_city": "Польща, віддалено"
            }
        ]
    },
    {
        "category": "Golang",
        "qty_vacancies": "49 вакансій  в категорії golang",
        "vacancies_list": [
            {
                "vacancy_title": "Senior Go Engineer (R-ID Team) Fintech",
                "company_name": "EVO",
                "vacancy_link": "https://jobs.dou.ua/companies/evo/vacancies/256464/?from=list_hot",
                "vacancy_description": "Про проєкт:\n\nEVO Fintech створює та об’єднує продукти у рішення під брендом RozetkaPay — https://rozetkapay.com/, які повʼязують онлайн оплати в інтернет, оплати в касах (карткою та готівкою), а також переказами з картки на картку.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Strong Middle Backend Golang Engineer",
                "company_name": "Intellias",
                "vacancy_link": "https://jobs.dou.ua/companies/intellias/vacancies/258146/",
                "vacancy_description": "Dive deep into Digital! For 20 years Intellias has been developing top-tier digital solutions for the world’s leading companies, keeping them in line with the latest technology trends. Join in and provide innovations for the future!",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior DevOps Engineer (Golang, AWS) IRC211149",
                "company_name": "GlobalLogic",
                "vacancy_link": "https://jobs.dou.ua/companies/globallogic/vacancies/258130/",
                "vacancy_description": "GlobalLogic is inviting a DevOps Engineer (Golang, AWS) to join our engineering team.\n\nAvid creates the technology that people use to make the most listened to, most watched and most loved media in the world... the shows, commercials, and news programs you watch on TV...",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Senior C++/Golang/Java Linux Networking Engineer",
                "company_name": "Delphi Software",
                "vacancy_link": "https://jobs.dou.ua/companies/delphi-llc/vacancies/238823/",
                "vacancy_description": "Perimeter 81 is expanding team for development cybersecurity and SaaS platform. All solutions allows companies manage networks and security from single cloud.",
                "vacancy_city": "Київ, Вінниця, віддалено"
            },
            {
                "vacancy_title": "Senior Software Engineer Gо",
                "company_name": "Innovecs",
                "vacancy_link": "https://jobs.dou.ua/companies/innovecs/vacancies/251149/",
                "vacancy_description": "We are looking for a motivated and experienced Senior Golang Developer.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior Golang Software Engineer (FastEx)",
                "company_name": "SoftConstruct Ukraine",
                "vacancy_link": "https://jobs.dou.ua/companies/softconstruct-ukraine/vacancies/249915/",
                "vacancy_description": "SoftConstruct Ukraine is a large product company with Armenian roots. We develop solutions in the fields of Big Data, Data Science and CryptoExchange.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Lead Golang Engineer (Loyalty system)",
                "company_name": "SoftConstruct Ukraine",
                "vacancy_link": "https://jobs.dou.ua/companies/softconstruct-ukraine/vacancies/236840/",
                "vacancy_description": "SoftConstruct Ukraine is a large product company with Armenian roots. We develop solutions in the fields of Big Data, Data Science and CryptoExchange.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Backend Engineer",
                "company_name": "LetyShops",
                "vacancy_link": "https://jobs.dou.ua/companies/letyshops/vacancies/241281/",
                "vacancy_description": "The opportunity\n\nLetyshops is a shopping community. We have saved our users $100M, intending to put Ukraine on the tech map of the world. Now, we’re aiming to save users $100M weekly with a new, revolutionary product set to transform shopping worldwide.",
                "vacancy_city": "Київ, Вінниця, віддалено"
            },
            {
                "vacancy_title": "Back End Engineer (240001AH)",
                "company_name": "Ciklum",
                "vacancy_link": "https://jobs.dou.ua/companies/ciklum/vacancies/258035/",
                "vacancy_description": "Ciklum is looking for a Back End Engineer to join our team full-time in Ukraine.",
                "vacancy_city": "Київ, Львів, Дніпро, Вінниця, віддалено"
            },
            {
                "vacancy_title": "Senior Golang developer",
                "company_name": "ZFORT Group",
                "vacancy_link": "https://jobs.dou.ua/companies/zfort/vacancies/257747/",
                "vacancy_description": "We are looking for a Senior Golang developer.",
                "vacancy_city": "Харків, Кременчук, Хмельницький, за кордоном, віддалено"
            },
            {
                "vacancy_title": "Middle Go Developer",
                "company_name": "NEMESIS",
                "vacancy_link": "https://jobs.dou.ua/companies/nemesis/vacancies/207683/",
                "vacancy_description": "NEMESIS is a social Igaming platform dedicated to esports and virtual games launched in 2018 with the ambition to serve the youngest generation of casual players and video games enthusiasts all over the world.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior/Lead GoLang Engineer (#1247)",
                "company_name": "N-iX",
                "vacancy_link": "https://jobs.dou.ua/companies/n-ix/vacancies/252151/",
                "vacancy_description": "N-iX is looking for Senior/Lead Go Engineer who can become a part of our team and contribute new ideas into product development.",
                "vacancy_city": "Київ, Львів, Дніпро, Вінниця, Івано-Франківськ, Тернопіль, віддалено"
            },
            {
                "vacancy_title": "Senior Golang Engineer",
                "company_name": "[Coreteka]",
                "vacancy_link": "https://jobs.dou.ua/companies/coreteka-com/vacancies/257498/",
                "vacancy_description": "Компанія CoreTeka формує R&D офіс для великої американської продуктової компанії, яка вірить у перемогу України та хоче розвивати свій продукт з найкращими інженерами нашої країни.\n\nПроєкт — великий сервіс з автоматизації продажів.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Technical Lead Software Engineer (Golang/ PHP/ DevOps)",
                "company_name": "MONTE-PRO",
                "vacancy_link": "https://jobs.dou.ua/companies/monte-pro/vacancies/257496/",
                "vacancy_description": "We are seeking an experienced Technical Lead Software Engineer to establish a new development team.  In this role, you will supervise up to 5 team members working on an internal hosting infrastructure project.",
                "vacancy_city": "Бар (Чорногорія), віддалено"
            },
            {
                "vacancy_title": "Full-Stack Golang developer",
                "company_name": "MONTE-PRO",
                "vacancy_link": "https://jobs.dou.ua/companies/monte-pro/vacancies/257473/",
                "vacancy_description": "We are looking for a strong full-stack Golang developer for an internal hosting infrastructure project.  Our company operates at the forefront of the affiliate traffic industry, offering specialized hosting services for affiliate landing and offer pages.",
                "vacancy_city": "Бар (Чорногорія), віддалено"
            },
            {
                "vacancy_title": "Junior/Middle Back-End Engineer",
                "company_name": "Codefinity",
                "vacancy_link": "https://jobs.dou.ua/companies/codefinity/vacancies/257426/",
                "vacancy_description": "Our mission is to make learning technology accessible, easy and fun for users across the world! We are creating next-generation education platform for learning software development and intent to become a leading player in that market.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Senior Go Developer (AdTech)",
                "company_name": "Sigma Software",
                "vacancy_link": "https://jobs.dou.ua/companies/sigma-software/vacancies/257375/",
                "vacancy_description": "We deliver asymmetric advantages to our #adtech customers through vast domain expertise, simplicity, and #stellar level of service.",
                "vacancy_city": "Київ, Харків, Львів, Дніпро, Одеса, Вінниця, Івано-Франківськ, Луцьк, Суми, Тернопіль, Бургас (Болгарія), Варшава (Польща), Краків (Польща), Лісабон (Португалія), Прага (Чехія), віддалено"
            },
            {
                "vacancy_title": "Middle Golang Developer",
                "company_name": "Adtelligent",
                "vacancy_link": "https://jobs.dou.ua/companies/adtelligent/vacancies/257288/",
                "vacancy_description": "ВИМОГИ:\n\n— Розуміти/знати протоколи передачі інформації між клієнтом та сервером, знати особливості та відмінності між варіантами, досконале розуміння HTTP/HTTPS \n\n— Досвід програмування на строготипізованих мовах програмування (переважно GoLang) \n\n— Досвід написання багатопотокових...",
                "vacancy_city": "Київ, Одеса, за кордоном, віддалено"
            },
            {
                "vacancy_title": "Middle Golang Engineer",
                "company_name": "UDTech",
                "vacancy_link": "https://jobs.dou.ua/companies/udt/vacancies/257223/",
                "vacancy_description": "Шукаємо Middle Golang Engineerз комерційним досвідом від 2-х років на повну зайнятість під проект.\n\nЗадача: Створення інструменту для аналіза коду і графічного відображення його структури. Бекенд розробляється на Go.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Golang Developer",
                "company_name": "PIN-UP.TECH",
                "vacancy_link": "https://jobs.dou.ua/companies/pin-up-tech/vacancies/257126/",
                "vacancy_description": "PIN-UP.TECH is one of the directions of the international ecosystem PIN-UP Global, which operates in six countries — Ukraine, Poland, Kazakhstan, Cyprus, Peru, and Armenia.",
                "vacancy_city": "Єреван (Вірменія), Варшава (Польща), Лімасол (Кіпр), Алмати (Казахстан), віддалено"
            }
        ]
    },
    {
        "category": "Ios/macos",
        "qty_vacancies": "45 вакансій  в категорії ios/macos",
        "vacancies_list": [
            {
                "vacancy_title": "Senior Software Engineer (Cocoa) for Moonlock",
                "company_name": "MacPaw",
                "vacancy_link": "https://jobs.dou.ua/companies/macpaw/vacancies/256795/?from=list_hot",
                "vacancy_description": "MacPaw is a software company with headquarters in Kyiv, Ukraine, that develops and distributes software for macOS and iOS. At MacPaw, we believe that humans and technology can reach their greatest potential together. Today, our products have more than 30 million users worldwide.",
                "vacancy_city": "Київ, за кордоном, віддалено"
            },
            {
                "vacancy_title": "Senior PWA (Progressive Web Application) Developer",
                "company_name": "Go interactive",
                "vacancy_link": "https://jobs.dou.ua/companies/go-interactive/vacancies/258060/",
                "vacancy_description": "Our client is a leading marketplace company revolutionizing the way people access credit through our mobile credit marketplace.\n\nThe platform connects borrowers and lenders, providing convenient and secure access to credit in a streamlined and user-friendly manner.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Flutter developer (iOS/Android+Flutter) EU only",
                "company_name": "Windmill Digital",
                "vacancy_link": "https://jobs.dou.ua/companies/windmill-smart-solutions/vacancies/253636/",
                "vacancy_description": "We are looking for an enthusiastic and experienced Flutter Developer who is focused on quality for our team. Flutter developers are a key part of our team and are responsible for turning our innovative experience designs into enterprise-class Android/iOS applications.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "iOS Developer",
                "company_name": "Engenious",
                "vacancy_link": "https://jobs.dou.ua/companies/engenious/vacancies/257930/",
                "vacancy_description": "Who we are: Engenious is a team of dedicated developers, designers, and engineers who strive for perfection in every move they make. We mostly work with mobile application development, and our expertise is rather narrow since we go for quality over quantity.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "iOS developer (Swift) (Odesa)",
                "company_name": "LAB325",
                "vacancy_link": "https://jobs.dou.ua/companies/lab-325/vacancies/257869/",
                "vacancy_description": "LAB325, сервісна технологічна компанія, що спеціалізується на повному циклі розробки мобільних та web продуктів, шукає iOS розробника для довготривалої співпраці.",
                "vacancy_city": "Одеса"
            },
            {
                "vacancy_title": "iOS Developer",
                "company_name": "Right&Above",
                "vacancy_link": "https://jobs.dou.ua/companies/right/vacancies/257798/",
                "vacancy_description": "International IT Company is looking for an IOS Developer\n\nRequirements: · At least 3 years of working experience · Upper-intermediate level of English is a must · Applied Sciences: MVVM Architecture pattern, MVP Architecture pattern, REST · Digital Engagement: iOS App Distribution,...",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior iOS Engineer",
                "company_name": "Stuzo",
                "vacancy_link": "https://jobs.dou.ua/companies/stuzo/vacancies/257773/",
                "vacancy_description": "Stuzo is the leading provider of personalized and predictive commerce solutions for retailers, powered by software products, software services, and insights platforms. Stuzo’s services include digital product strategy, product design, and product engineering.",
                "vacancy_city": "за кордоном"
            },
            {
                "vacancy_title": "Middle iOS (Objective-C) Developer",
                "company_name": "DevCom",
                "vacancy_link": "https://jobs.dou.ua/companies/dev-com/vacancies/257745/",
                "vacancy_description": "You want to work on the development of an application that helps, supports, and saves human lives! You are interested in direct long-term cooperation with an English-speaking client! You need some freedom in making decisions about implementing the new functionality!",
                "vacancy_city": "Львів"
            },
            {
                "vacancy_title": "Mobile Development Lead(iOS/Android)",
                "company_name": "Solve.Care",
                "vacancy_link": "https://jobs.dou.ua/companies/solve_care/vacancies/254009/",
                "vacancy_description": "Job description\n\n\n\n8+ years of experience in developing native Android and iOS mobile applications.\n\nStrong knowledge of programming language in Swift or Java, SQLite and IDE like XCode or Android Studio.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "iOS Engineer",
                "company_name": "Headway",
                "vacancy_link": "https://jobs.dou.ua/companies/headway-1/vacancies/257715/",
                "vacancy_description": "Headway — EdTech стартап, що створює продукти з мікронавчання. Він входить до списку найвпливовіших компаній у світі, які трансформують цифрове навчання та навички спеціалістів — GSV 150.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "iOS Developer",
                "company_name": "Digis",
                "vacancy_link": "https://jobs.dou.ua/companies/digis/vacancies/257631/",
                "vacancy_description": "Digis is seeking a skilled and motivated iOS developer to join our long-term healthcare project.  About the project:  The remote patient monitoring platform advances connected care for patients and accelerates research and therapies.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "React Native Developer",
                "company_name": "Applica Agency",
                "vacancy_link": "https://jobs.dou.ua/companies/applica-agency/vacancies/257622/",
                "vacancy_description": "About Us\n\nHi, we’re Applica — the mobile growth partner working with the teams behind leading apps like Loona, Fabulous, Fitonomy, Freeletics, Drops, and many others 👋\n\nWe are on a mission to become the world’s #1 growth partner for digital app owners.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Swift Developer",
                "company_name": "Traffic Devils",
                "vacancy_link": "https://jobs.dou.ua/companies/traffic-devils/vacancies/257484/",
                "vacancy_description": "TRAFFIC DEVILS — команда, яка вже понад 4 роки невпинно задає тренди в affiliate-індустрії та дивує якістю своїх продуктів.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Senior iOS Product Engineer — Spark team",
                "company_name": "Readdle",
                "vacancy_link": "https://jobs.dou.ua/companies/readdle-inc/vacancies/257383/",
                "vacancy_description": "Readdle is a pioneering force in the personal productivity space on Apple devices, having shaped the landscape since 2007. Our mission is to empower individuals and teams with innovative technology, enhancing their efficiency and creativity.",
                "vacancy_city": "Київ, Одеса, Гданськ (Польща), віддалено"
            },
            {
                "vacancy_title": "Middle/Senior iOS Developer for a short-term contract",
                "company_name": "HYS Enterprise",
                "vacancy_link": "https://jobs.dou.ua/companies/hys-enterprise/vacancies/257338/",
                "vacancy_description": "Шукаємо досвідченого iOS розробника для реалізації нашого продукту MobID!\n\nМи покращуємо процедуру перевірки особистості за допомогою нашого продукту, MobID. Наш додаток зчитує та перевіряє NFC-чіпи, вбудовані в електронні паспорти, забезпечуючи найвищий рівень безпеки й автентичності.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Middle/Senior iOS developer",
                "company_name": "Selecto",
                "vacancy_link": "https://jobs.dou.ua/companies/selecto/vacancies/257336/",
                "vacancy_description": "This position is only for 1 project, not in-house!",
                "vacancy_city": "за кордоном, віддалено"
            },
            {
                "vacancy_title": "Senior iOS Engineer № 475",
                "company_name": "InterLogic",
                "vacancy_link": "https://jobs.dou.ua/companies/interlogic/vacancies/257226/",
                "vacancy_description": "Overview\n\n We are looking for a technically strong engineer with interest in developing Products together with an experienced Team located in Lviv, Gdansk and Copenhagen.",
                "vacancy_city": "Львів, Гданськ (Польща), віддалено"
            },
            {
                "vacancy_title": "Junior Strong iOS Engineer",
                "company_name": "Levi9",
                "vacancy_link": "https://jobs.dou.ua/companies/levi9/vacancies/257192/",
                "vacancy_description": "🔹Who we are!\n\nAt Levi9, we are passionate about what we do. We love our work and together in a team, we are smarter and stronger. We are looking for skilled team players who make change happen. Are you one of these players?",
                "vacancy_city": "Київ, Львів"
            },
            {
                "vacancy_title": "Senior iOS Developer",
                "company_name": "Code Space",
                "vacancy_link": "https://jobs.dou.ua/companies/codespace/vacancies/247669/",
                "vacancy_description": "We are looking for a Senior iOS Developer (with startup experience!) for our client, an Israeli product startup, which is actively developing and growing.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "iOS Developer",
                "company_name": "Agilie",
                "vacancy_link": "https://jobs.dou.ua/companies/agilie/vacancies/257123/",
                "vacancy_description": "Agilie is inviting proactive middle iOS Developer to join our team on full-time basis.\n\n\n\nIf you’re passionate about tech advancements, and you are a team player — we are waiting for you!",
                "vacancy_city": "Дніпро"
            }
        ]
    },
    {
        "category": "Android",
        "qty_vacancies": "34 вакансії  в категорії android",
        "vacancies_list": [
            {
                "vacancy_title": "Android Engineer",
                "company_name": "BetterMe",
                "vacancy_link": "https://jobs.dou.ua/companies/betterme/vacancies/230059/?from=list_hot",
                "vacancy_description": "Про компанію:\n\nBetterMe — це компанія, яка з 2017 року пропонує найкращі рішення для фізичного та ментального здоров’я. Продукти BetterMe відповідають потребам людей різного віку, статі, фізичних можливостей та спортивного досвіду.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior Android Developer",
                "company_name": "IdeaSoft.io",
                "vacancy_link": "https://jobs.dou.ua/companies/ideasoft-io/vacancies/258192/",
                "vacancy_description": "We are looking for an experienced Senior Android Developer to join our team for an innovative project — developing a social app with Web3 elements, including Wallet Connect integration and a donation feature using the project’s tokens.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Android Developer",
                "company_name": "Relevant Software",
                "vacancy_link": "https://jobs.dou.ua/companies/relevant-software/vacancies/258071/",
                "vacancy_description": "We are in need of an experienced Android Developer, who can be a part of our Relevant team that works on our Android application. You should be an active participant in the development process, write good code, and be involved in decisions about software architecture design.",
                "vacancy_city": "Львів, віддалено"
            },
            {
                "vacancy_title": "Str Jun Android developer (Java&Kotlin)",
                "company_name": "Servus Systems Integration",
                "vacancy_link": "https://jobs.dou.ua/companies/servus-systems-integration/vacancies/186199/",
                "vacancy_description": "Компанія Servus Systems Integration вже понад 20 років створює та розвиває інфраструктуру безготівкових платежів та пов’язаних сервісів, допомагає розвитку платіжної екосистеми України, надає експертизу, втілює в життя інноваційні ідеї та забезпечує бездоганну підтримку.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Senior Android Engineer (24000121)",
                "company_name": "Ciklum",
                "vacancy_link": "https://jobs.dou.ua/companies/ciklum/vacancies/257962/",
                "vacancy_description": "Ciklum is looking for a Senior Android Engineer to join our team full-time in Ukraine.",
                "vacancy_city": "Київ, Львів, Дніпро, Вінниця"
            },
            {
                "vacancy_title": "Middle Android Developer",
                "company_name": "Agilie",
                "vacancy_link": "https://jobs.dou.ua/companies/agilie/vacancies/257802/",
                "vacancy_description": "Команда Agilie шукає Middle Android Developer \n\nНаш проєкт:\n\nЦе проєкт від українських замовників в домені healthcare (аптека), над яким наша команда плідно працює понад 3 роки. Він реалізований під платформи: iOS, Android, Web.",
                "vacancy_city": "Дніпро, віддалено"
            },
            {
                "vacancy_title": "Android developer",
                "company_name": "VRG Soft",
                "vacancy_link": "https://jobs.dou.ua/companies/vrg-soft/vacancies/54216/",
                "vacancy_description": "• Сommercial experience in Android development;\n• experience in implementing Material Design and well designed UI;\n• advanced knowledge Kotlin skills;\n• experience with web service technologies (REST, JSON, XML);\n• knowledge of RxJava/Coroutines, MVP, MVVM, Dagger 2, Databinding;...",
                "vacancy_city": "Дніпро"
            },
            {
                "vacancy_title": "Mobile Development Lead(iOS/Android)",
                "company_name": "Solve.Care",
                "vacancy_link": "https://jobs.dou.ua/companies/solve_care/vacancies/254009/",
                "vacancy_description": "Job description\n\n\n\n8+ years of experience in developing native Android and iOS mobile applications.\n\nStrong knowledge of programming language in Swift or Java, SQLite and IDE like XCode or Android Studio.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Senior Android Developer",
                "company_name": "WizardsDev",
                "vacancy_link": "https://jobs.dou.ua/companies/wizardsdev/vacancies/257694/",
                "vacancy_description": "— 5+ years of Android development experience;\n— profound knowledge of Kotlin;\n— experience with architectural patterns (MVP, MVVM, Clean Architecture);\n— experience working with RESTful APIs and data processing;\n— team leadership experience will be a plus; \n— effective communication...",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "User Acquisition Specialist (Android)",
                "company_name": "PlantIn",
                "vacancy_link": "https://jobs.dou.ua/companies/plantin/vacancies/257658/",
                "vacancy_description": "PlantIn — це найбільша у світі спільнота любителів рослин та один з найбільших бізнесів в екосистемі продуктових IT компаній Genesis.\n\nНаш мобільний додаток об’єднує понад 20 мільйонів користувачів по всьому світу.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Middle android developer",
                "company_name": "Mornhouse",
                "vacancy_link": "https://jobs.dou.ua/companies/mornhouse/vacancies/230492/",
                "vacancy_description": "Привіт! Ми робимо додатки на Android та заливаємо їх на Google Play. У зв’язку із ростом, шукаємо Strong junior Android developer. Є стандарти коду та приклади додатків. Роботи та відповідальності буде багато. Передбачено хороше зростання ЗП, або премії залежно від результатів.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Senior Android Developer",
                "company_name": "Erbis",
                "vacancy_link": "https://jobs.dou.ua/companies/erbis/vacancies/257443/",
                "vacancy_description": "About Our Client:\n\nOur client is working on improving the blood analysis system, a groundbreaking tool used in healthcare. Specifically, they are focusing on Android development for this project and are seeking to add two talented professionals to their current team.",
                "vacancy_city": "Дніпро, Краків (Польща), віддалено"
            },
            {
                "vacancy_title": "Android developer",
                "company_name": "Nova Digital",
                "vacancy_link": "https://jobs.dou.ua/companies/nova-digital/vacancies/257415/",
                "vacancy_description": "The Ukrainian IT company Nova Digital, part of the NOVA group of companies, is a powerful developer of web applications and software for architectures of any complexity and workload.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Middle Strong/Senior Android developer",
                "company_name": "Selecto",
                "vacancy_link": "https://jobs.dou.ua/companies/selecto/vacancies/247742/",
                "vacancy_description": "This position is only for 1 project, not in-house!",
                "vacancy_city": "за кордоном, віддалено"
            },
            {
                "vacancy_title": "Android Kernel Developer",
                "company_name": "Everstar",
                "vacancy_link": "https://jobs.dou.ua/companies/everstar/vacancies/257286/",
                "vacancy_description": "Ми — Everstar. Перше рекрутингове агентство, що допомагає milltech компаніям знаходити талановитих людей та спільно наближати перемогу.\n\nСеред наших клієнтів — один з найбільших розробників та виробників БпЛА для потреб оборони України.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "QA Еngineer",
                "company_name": "Mornhouse",
                "vacancy_link": "https://jobs.dou.ua/companies/mornhouse/vacancies/243563/",
                "vacancy_description": "Привіт! Ми — Mornhouse, робимо додатки на Android та заливаємо їх на Google Play. Шукаємо QA Еngineer для тестування додатків. Стандарти із тестування є, процес налаштований.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Middle Android Developer 55790 (In Poland)",
                "company_name": "Indeema Software",
                "vacancy_link": "https://jobs.dou.ua/companies/indeema/vacancies/256994/",
                "vacancy_description": "Indeema Software is looking for a skilled Android Developer to join our Team.",
                "vacancy_city": "за кордоном"
            },
            {
                "vacancy_title": "Lead Android developer (кандидати,які в Україні)",
                "company_name": "Nayax Retail",
                "vacancy_link": "https://jobs.dou.ua/companies/nayax-retail-ltd/vacancies/256928/",
                "vacancy_description": "We are looking for a person who enjoys working in a team. This person enjoys analyzing business requirements, breaking them down, and figuring out how to represent them in a project.",
                "vacancy_city": "Одеса, віддалено"
            },
            {
                "vacancy_title": "Android Developer Kyivstar TV (middle)",
                "company_name": "1+1 media",
                "vacancy_link": "https://jobs.dou.ua/companies/1plus1/vacancies/211674/",
                "vacancy_description": "A joint project of the two leaders in the telecommunications industry 1+1 media and Kyivstar is currently looking for a Android Developer Київстар ТБ (middle) who wants to become part of our team.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Android Developer",
                "company_name": "Brights",
                "vacancy_link": "https://jobs.dou.ua/companies/brights/vacancies/251479/",
                "vacancy_description": "We are looking for a skilled Android developer to join our dynamic team ✨  Key Responsibility:  • Mobile app development.",
                "vacancy_city": "Київ, віддалено"
            }
        ]
    },
    {
        "category": "Front end",
        "qty_vacancies": "168 вакансій  в категорії front end",
        "vacancies_list": [
            {
                "vacancy_title": "Senior FullStack Developer (Java + Angular)",
                "company_name": "ПУМБ",
                "vacancy_link": "https://jobs.dou.ua/companies/fuib/vacancies/253518/?from=list_hot",
                "vacancy_description": "Development of a cutting-edge Identity Management System (IMS) that will integrate modern technologies and platforms to enhance the management of digital user identifiers.",
                "vacancy_city": "за кордоном, віддалено"
            },
            {
                "vacancy_title": "Sr. Full Stack Developer (React+Node.js)",
                "company_name": "Luxe Quality",
                "vacancy_link": "https://jobs.dou.ua/companies/luxe-quality/vacancies/257960/?from=list_hot",
                "vacancy_description": "About The Role:\n\nAs a full time Senior Full Stack Engineer, we are looking for someone who has early startup experience to join our all remote workforce in this journey to improve access to quality mental healthcare in the United States.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Frontend Developer (Vue, Nuxt)",
                "company_name": "stfalcon.com",
                "vacancy_link": "https://jobs.dou.ua/companies/stfalcon-studio/vacancies/251909/?from=list_hot",
                "vacancy_description": "Напрямок розробки: трекінг, логістика, мобільні додатки, букінг, CRM системи.\n\nМи надаємо високоякісні веб-рішення клієнтам по всьому світу. Використовуючи найсучасніші і затребувані технології, ми аналізуємо проекти високої складності.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior Front-End Developer (Web)",
                "company_name": "BetterMe",
                "vacancy_link": "https://jobs.dou.ua/companies/betterme/vacancies/255506/?from=list_hot",
                "vacancy_description": "ABOUT US:\n\nBetterMe is a health & wellness platform providing a tailored holistic approach to well-being. Since 2017, we have been on a mission to create a healthier world for everyone, regardless of age, sex, physical ability, or background.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Shopify Front-End Developer",
                "company_name": "Access Solutions",
                "vacancy_link": "https://jobs.dou.ua/companies/access-solutions/vacancies/256518/?from=list_hot",
                "vacancy_description": "We are looking for a Shopify Frontend Developer to join our dynamic eCommerce team!\n\nJoin us as a key player, specializing in the creation of impactful online stores on the Shopify platform.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Middle/Senior Front-End Developer (React.js, Next.js)",
                "company_name": "Overcode",
                "vacancy_link": "https://jobs.dou.ua/companies/overcode/vacancies/244502/",
                "vacancy_description": "Потрібен Middle/Senior Front-End Developer (React.js, Next.js) у команду оверкодерів з партнерами із США, Ізраїлю та UK.\n\nНаша компанія допомагає запускати нові продукти та покращувати існуючі веб-застосунки на JavaScript.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Web Developer (HTML/CSS)",
                "company_name": "Readdle",
                "vacancy_link": "https://jobs.dou.ua/companies/readdle-inc/vacancies/258215/",
                "vacancy_description": "Readdle is a pioneering force in the personal productivity space on Apple devices, having shaped the landscape since 2007. Our mission is to empower individuals and teams with innovative technology, enhancing their efficiency and creativity.",
                "vacancy_city": "Київ, Одеса, Гданськ (Польща), віддалено"
            },
            {
                "vacancy_title": "Strong Junior Front-End Engineer",
                "company_name": "Sombra",
                "vacancy_link": "https://jobs.dou.ua/companies/sombra/vacancies/258209/",
                "vacancy_description": "Our customer is one of the largest banks in Canada.\n\nYou will work in one of our teams with bank websites. Users usually use it to check info about bank life, and actual/new information. The website shows helpful information for clients of the bank and new potential clients.",
                "vacancy_city": "Київ, Львів, Івано-Франківськ"
            },
            {
                "vacancy_title": "Sr/Middle Angular Developer",
                "company_name": "Luxe Quality",
                "vacancy_link": "https://jobs.dou.ua/companies/luxe-quality/vacancies/258176/",
                "vacancy_description": "We are looking for an Angular Developer in one of our partner’s team.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Middle Frontend Developer",
                "company_name": "Agilie",
                "vacancy_link": "https://jobs.dou.ua/companies/agilie/vacancies/258158/",
                "vacancy_description": "Команда Agilie шукає Middle Frontend Developer\n\nНаш проєкт:\n\nЦе продукт орієнтований передусім на ринок Америки. Додаток надає можливість привітати ваших близьких листівками та подарунками на різноманітні свята такі як: Новий рік, Різдво, День матері, дні народження та інші.",
                "vacancy_city": "Дніпро, віддалено"
            },
            {
                "vacancy_title": "Senior React Developer",
                "company_name": "vilmate",
                "vacancy_link": "https://jobs.dou.ua/companies/vilmate/vacancies/258151/",
                "vacancy_description": "В компанію Vilmate шукаємо висококваліфікованого Senior React розробника, який приєднається до американського стартапу, системи управління відеоконтентом для B2B, яка може конвертувати відео в контент у великих масштабах.",
                "vacancy_city": "Київ, Харків, Варшава (Польща), віддалено"
            },
            {
                "vacancy_title": "Frontend React Developer 100% remotely",
                "company_name": "Kogifi Corp",
                "vacancy_link": "https://jobs.dou.ua/companies/kogifi-consulting-group/vacancies/258132/",
                "vacancy_description": "Hello! We are Kogifi!🙂   We’re searching for a Frontend developer to join our team. If you’ve already got a few independent projects in your portfolio and want to take your code to the next level, we’re the place to make it come true!",
                "vacancy_city": "Вроцлав (Польща), віддалено"
            },
            {
                "vacancy_title": "Front-End Developer",
                "company_name": "OBRIO",
                "vacancy_link": "https://jobs.dou.ua/companies/obrio/vacancies/243373/",
                "vacancy_description": "OBRIO is an IT company with Ukrainian roots inside Genesis business ecosystem. Our team consists of more than 120 talented professionals whose ambitions and striving for success help us build the best products on the market.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Tech Lead (Vue.js)",
                "company_name": "Delasport",
                "vacancy_link": "https://jobs.dou.ua/companies/delasport/vacancies/244617/",
                "vacancy_description": "Delasport is an iGaming Software company providing Sports Betting & Online Casino software, and turnkey B2B solutions.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "SENIOR or LEAD FRONT END DEVELOPER",
                "company_name": "PICHE, LTD",
                "vacancy_link": "https://jobs.dou.ua/companies/piche-ltd/vacancies/252607/",
                "vacancy_description": "Are you an ambitious developer with expertise in JavaScript? Are you ready to embrace the challenge of building a next-generation AI-running business process management web platform from scratch?",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Fullstack developer: Vue, Laravel, SQL",
                "company_name": "Cooking Bros. GmbH",
                "vacancy_link": "https://jobs.dou.ua/companies/cooking-bros-gmbh/vacancies/257964/",
                "vacancy_description": "I’m seeking two full-time developers to elevate my project. They must have robust knowledge of Vue.js, Laravel, and SQL. Their focus will be on enhancing both the front and back end, as well as optimizing the database.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Front End Developer (Angular)",
                "company_name": "Awesomic",
                "vacancy_link": "https://jobs.dou.ua/companies/awesomic/vacancies/257977/",
                "vacancy_description": "Are you a skilled Front End Developer with a knack for Angular? Look no further! Awesomic is seeking dynamic individuals to join our team and contribute to cutting-edge projects in collaboration with top Silicon Valley startups.",
                "vacancy_city": "Київ, за кордоном, віддалено"
            },
            {
                "vacancy_title": "Middle Frontend Developer",
                "company_name": "Partnerway",
                "vacancy_link": "https://jobs.dou.ua/companies/partnerway/vacancies/257928/",
                "vacancy_description": "We are a Ukrainian startup that helps other companies worldwide with the cost of software and manage & control their spending. The company has many slay directions: Reselling, SaaS, and Fintech product development.",
                "vacancy_city": "Київ, Львів, Вінниця, за кордоном, віддалено"
            },
            {
                "vacancy_title": "Senior Front-end (React) developer",
                "company_name": "CMK",
                "vacancy_link": "https://jobs.dou.ua/companies/cmk-software-mac-kiev/vacancies/257912/",
                "vacancy_description": "We are looking for a person who is eager to take part in the creation of enterprise-level solutions to join a team at MacKiev. We offer a fast-paced, collaborative environment that stimulates ideas and innovation.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Middle JavaScript Developer (Dev. MRnD Team)",
                "company_name": "Brainstack_",
                "vacancy_link": "https://jobs.dou.ua/companies/brainstack/vacancies/251868/",
                "vacancy_description": "Brainstack_ - українська мультипродуктова IT-компанія, яка розробляє кросплатформенні додатки та сервіси в нішах: Parental Control, Wellness Ecosystem, Lifestyle Apps, Crypto&Blockchain, а з 2023 року компанія розпочала розвиватися в напрямку AI.",
                "vacancy_city": "Київ, віддалено"
            }
        ]
    },
    {
        "category": "Node.js",
        "qty_vacancies": "142 вакансії  в категорії node.js",
        "vacancies_list": [
            {
                "vacancy_title": "Senior Full-Stack Developer",
                "company_name": "Mealco",
                "vacancy_link": "https://jobs.dou.ua/companies/mealco/vacancies/119337/?from=list_hot",
                "vacancy_description": "— 5+ years in Software Development with strong expertise in JavaScript or TypeScript.\n— Proficiency in NodeJS and frontend frameworks (React, Vue, Angular).\n— Solid experience with databases, microservices, and serverless architectures.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Principal Backend Developer NodeJS (AdTech)",
                "company_name": "Sigma Software",
                "vacancy_link": "https://jobs.dou.ua/companies/sigma-software/vacancies/257152/?from=list_hot",
                "vacancy_description": "Наразі ми шукаємо вмотивованого та цілеспрямованого Principal Backend розробника, який приєднається до нашої динамічної команди професіоналів.\n\nЯк Principal Developer, ти відіграватимеш ключову роль в аналізі та вирішенні різноманітних бізнес-завдань у сфері технологій.",
                "vacancy_city": "Київ, Харків, Львів, Дніпро, Одеса, Вінниця, Полтава, Бургас (Болгарія), Варшава (Польща), Краків (Польща), Познань (Польща), Прага (Чехія), віддалено"
            },
            {
                "vacancy_title": "Senior Full Stack Node/Vue Developer",
                "company_name": "East Wolves Studio",
                "vacancy_link": "https://jobs.dou.ua/companies/east-wolves-studio/vacancies/252914/?from=list_hot",
                "vacancy_description": "We are looking for a highly skilled and experienced full stack Node/Vue Developer to join our team. As a Fullstack Developer, you will be responsible for designing, developing, and maintaining robust and scalable applications using Node.js and the Vue.js framework.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Backend Engineer (Node.js)",
                "company_name": "BetterMe",
                "vacancy_link": "https://jobs.dou.ua/companies/betterme/vacancies/255209/?from=list_hot",
                "vacancy_description": "ABOUT US:\n\nBetterMe is a leading Ukrainian wellness company that develops accessible digital health products & athleisure for people of all ages, backgrounds and physical abilities. Our apps were installed more than 150M times and over 5M people work out with us each month.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Middle/Senior Full-Stack Developer (React.js, Node.js)",
                "company_name": "Overcode",
                "vacancy_link": "https://jobs.dou.ua/companies/overcode/vacancies/244501/",
                "vacancy_description": "Потрібен Middle/Senior Full-Stack Developer (React.js, Node.js) у команду оверкодерів з партнерами із США, Ізраїлю та UK.\n\nНаша компанія допомагає запускати нові продукти та покращувати існуючі веб-застосунки на JavaScript.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Middle Full Stack. Node.js, React. Part time",
                "company_name": "Uasocks",
                "vacancy_link": "https://jobs.dou.ua/companies/uasocks/vacancies/258212/",
                "vacancy_description": "Привіт! Ми компанія Uasocks, створюємо новий класний продукт, платіжну систему для керування рахунками, картками, командами тощо. Орієнтовані на клієнтів які купляють рекламу в Facebook, Google, Tiktok і т.д. Вже маємо першу версію продукту та перших клієнтів.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior Backend (NodeJS) Engineer",
                "company_name": "ELITEX",
                "vacancy_link": "https://jobs.dou.ua/companies/elitex/vacancies/258201/",
                "vacancy_description": "About Elitex:\n\nELITEX is a Software Development company, founded in 2015, with the core expertise & focus on JavaScript, DevOps and Staff Augmentation services.",
                "vacancy_city": "Львів, за кордоном"
            },
            {
                "vacancy_title": "Senior Node.js Engineer",
                "company_name": "Rebbix",
                "vacancy_link": "https://jobs.dou.ua/companies/rebbix/vacancies/258197/",
                "vacancy_description": "Project Description\n\nday.io, Brazilian Time & Attendance startup. Our system allows us to ensure that employees follow the assigned schedule and track their time when they work out of the office.",
                "vacancy_city": "Вроцлав (Польща)"
            },
            {
                "vacancy_title": "Full Stack Developer (Firebase)",
                "company_name": "MWDN",
                "vacancy_link": "https://jobs.dou.ua/companies/mwdn/vacancies/258188/",
                "vacancy_description": "MWDN company is looking for a self-motivated and goal-oriented Full Stack Developer (Firebase) who would like to be a part of a team working on brand-new startup projects for foreign customers.\n\nThis is a remote, full-time job. Hourly payment.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Node.js Developer",
                "company_name": "Techlexity",
                "vacancy_link": "https://jobs.dou.ua/companies/techlexity/vacancies/241418/",
                "vacancy_description": "Hello, Tech Enthusiasts! We are Techlexity, a dynamic software development firm providing complex solutions (mobile apps, web platforms, admin panels) for tech startups and established enterprises across the US and Western Europe.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Fullstack Game Developer",
                "company_name": "Playtech",
                "vacancy_link": "https://jobs.dou.ua/companies/playtech/vacancies/258174/",
                "vacancy_description": "Technology stack:  HTML, CSS, Javascript. React, NodeJS, PixiJS, MongoDB, Photoshop.  Requirements:  1. 2+ years of experience in professional fullstack web software development 2. Commercial experience with modern web technologies(HTML, CSS, Javascript.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Strong Middle/Senior Node.js Engineer",
                "company_name": "Galaktica",
                "vacancy_link": "https://jobs.dou.ua/companies/galaktica/vacancies/258159/",
                "vacancy_description": "Galaкtica — українська продуктова IT-компанія, яка вже 4 роки успішно створює та просуває свої онлайн проекти на світовому ринку. Ми прагнемо до росту та розвитку наших співробітників, а також масштабування та інвестицій у створення нових внутрішніх стартапів.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Node.js Developer",
                "company_name": "Requestum",
                "vacancy_link": "https://jobs.dou.ua/companies/requestum/vacancies/258147/",
                "vacancy_description": "Requestum is looking for a smart and self-motivated Node.js Developer who will start working on the backend side and efficiently communicate with the frontend team.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Middle Full-Stack Developer (Node.js/React.js)",
                "company_name": "AnyforSoft",
                "vacancy_link": "https://jobs.dou.ua/companies/anyforsoft/vacancies/258117/",
                "vacancy_description": "Hey there! At AnyforSoft, we’re looking for a Full Stack Engineer with strong Node.js and React.js skills. We’re diving into an exciting project involving a cutting-edge AI solution for tenders, working with a client based in Europe.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior Software Engineer",
                "company_name": "NCube",
                "vacancy_link": "https://jobs.dou.ua/companies/ncube/vacancies/258094/",
                "vacancy_description": "We are seeking a versatile and adaptable Software Engineer to join our team. This role is a unique blend of software engineering and cloud engineering, ideal for professionals who thrive in dynamic environments.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Tech Lead (Node, TS)",
                "company_name": "Go interactive",
                "vacancy_link": "https://jobs.dou.ua/companies/go-interactive/vacancies/258021/",
                "vacancy_description": "The project is a platform to accept, process, and settle payments — connecting all channels, devices, and markets. Our client brings together all payment data to enable his merchants to make better decisions in less time.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Google Workspace Developer",
                "company_name": "Seedium.io",
                "vacancy_link": "https://jobs.dou.ua/companies/seedium-io/vacancies/257992/",
                "vacancy_description": "What is the purpose of this position?  We are looking for a Middle+/Senior Google Workspace Developer (at least 5+ years of commercial experience in backend development).",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Back End Developer",
                "company_name": "MWDN",
                "vacancy_link": "https://jobs.dou.ua/companies/mwdn/vacancies/257981/",
                "vacancy_description": "We are looking for an experienced Backend Developer who will join us to develop, mature, and scale our client’s product to the next level.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior Backend Engineer",
                "company_name": "Universe",
                "vacancy_link": "https://jobs.dou.ua/companies/universe/vacancies/257950/",
                "vacancy_description": "Шукаємо бізнес-орієнтованого та проактивного Senior Backend Engineer, який/яка удосконалить серверну частину наших мобільних продуктів, разом із командою запускатиме нові застосунки на міжнародний ринок і очолить backend-відділ у напрямку R&D в Guru Apps.",
                "vacancy_city": "Київ, Варшава (Польща)"
            },
            {
                "vacancy_title": "Middle Node.js Developer",
                "company_name": "EveryMatrix",
                "vacancy_link": "https://jobs.dou.ua/companies/everymatrix-ltd/vacancies/257945/",
                "vacancy_description": "Project description:\n\nYou will be part of the Playmatrix department. Playmatrix creates state-of-the-art live casino games from scratch.",
                "vacancy_city": "Львів, віддалено"
            }
        ]
    },
    {
        "category": "Design",
        "qty_vacancies": "210 вакансій  в категорії design",
        "vacancies_list": [
            {
                "vacancy_title": "Graphic Designer",
                "company_name": "PIN-UP.BUSINESS",
                "vacancy_link": "https://jobs.dou.ua/companies/pin-up-business/vacancies/230992/",
                "vacancy_description": "Requirements:\n\n• Skills in working with Photoshop and Figma, knowledge of After Effects and illustration; • One is constantly in search of new design solutions, when there is nothing to do, one improves the hard skills; • One reads articles about new design trends instead of...",
                "vacancy_city": "Київ, Єреван (Вірменія), Варшава (Польща), Лімасол (Кіпр), Алмати (Казахстан), віддалено"
            },
            {
                "vacancy_title": "Graphic Designer (SMM)",
                "company_name": "PIN-UP.BUSINESS",
                "vacancy_link": "https://jobs.dou.ua/companies/pin-up-business/vacancies/230988/",
                "vacancy_description": "Вимоги:\n\n• На ти з Photoshop та Figma; • З легкістю розповідати, що таке компліментарний колір та закрита композиція, у будь-який час та пору року; • Ініціативність — не боїться покликати першим/шою на побачення, завжди має пропозиції для покращення віжуалів друзів у соцмережах;...",
                "vacancy_city": "Київ, Єреван (Вірменія), Варшава (Польща), Лімасол (Кіпр), віддалено"
            },
            {
                "vacancy_title": "Creative Designer (Warsaw)",
                "company_name": "SKELAR",
                "vacancy_link": "https://jobs.dou.ua/companies/skelar/vacancies/258216/",
                "vacancy_description": "SKELAR — це venture builder, який будує міжнародні продуктові IT-компанії за правилами світу венчурних інвестицій. Разом із ко-фаундерами збираємо сильні команди, щоб запускати продуктові IT-бізнеси та перемагати на глобальних ринках.",
                "vacancy_city": "за кордоном"
            },
            {
                "vacancy_title": "UI/UX Designer",
                "company_name": "Perpetio",
                "vacancy_link": "https://jobs.dou.ua/companies/perpetio/vacancies/37890/",
                "vacancy_description": "— 2+ years of commercial experience in UI/UX Design IS A MUST.\n— Strong Intermediate English IS A MUST.\n— Online portfolio with mobile and web applications — please, share when applying.\n— Sketch or Figma or XD.\n— Background or interest in prototyping (Invision or Principle).",
                "vacancy_city": "Львів, віддалено"
            },
            {
                "vacancy_title": "Senior Product Designer (Mobile) for Omo",
                "company_name": "Welltech",
                "vacancy_link": "https://jobs.dou.ua/companies/welltech/vacancies/258214/",
                "vacancy_description": "Here at Welltech we create Mobile and Web applications for the Health & Fitness category.",
                "vacancy_city": "Україна, Варшава (Польща)"
            },
            {
                "vacancy_title": "Creative Design Lead",
                "company_name": "AMO",
                "vacancy_link": "https://jobs.dou.ua/companies/amo/vacancies/258204/",
                "vacancy_description": "AMO — міжнародна IT-компанія, яка створює продукти та історії для мільйонів користувачів. Маємо своє англомовне медіа, власний відеопродакшн та розробляємо додатки у сфері health & fitness. Ми вважаємо, що світ стане кращим, коли ми розкриємо свої суперсили.",
                "vacancy_city": "Київ, віддалено"
            },
            {
                "vacancy_title": "Video Creator",
                "company_name": "WHOAcat",
                "vacancy_link": "https://jobs.dou.ua/companies/whoacat/vacancies/258183/",
                "vacancy_description": "Інтернет-магазин вау-товарів для котиків з найрізноманітніших куточків планети, шукає талановитого Video Creator-а, який за допомогою коротких відео зможе зачарувати світ крутими продуктами та перетворить своїх домашніх пухнастих друзів на справжніх зірок інтернету.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Graphic Designer",
                "company_name": "Neurons Lab",
                "vacancy_link": "https://jobs.dou.ua/companies/neurons-lab/vacancies/258182/",
                "vacancy_description": "We are looking for a part-time graphic designer to support us 2-5 hours a week with punctual design tasks such as presentations, diagrams, and brand development.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior 3D Modeler (Unreal Engine)",
                "company_name": "Svitla Systems",
                "vacancy_link": "https://jobs.dou.ua/companies/svitla-systems-inc/vacancies/258171/",
                "vacancy_description": "Svitla Systems Inc. is looking for a Senior 3D Modeler (Unreal Engine) for a full-time position (40 hours per week) in Ukraine. Our client builds interactive digital twins and environments using the Unreal Engine.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Senior UI/UX Designer",
                "company_name": "28software",
                "vacancy_link": "https://jobs.dou.ua/companies/28software/vacancies/258148/",
                "vacancy_description": "Currently, we are looking for a creative Senior UI/UX Designer to join our team on a full-time basis in our office in Kyiv (hybrid schedule).",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "3D Artist (interior/exterior visualization)",
                "company_name": "PIXREADY",
                "vacancy_link": "https://jobs.dou.ua/companies/pixready/vacancies/258115/",
                "vacancy_description": "Привіт!\n\nМи міжнародна студія 3D-візуалізації та моделювання, допомагаємо компаніям з 10+ країн створювати фотореалістичні зображення їхніх продуктів та ідей.",
                "vacancy_city": "Львів, за кордоном, віддалено"
            },
            {
                "vacancy_title": "3D Modeler",
                "company_name": "PIXREADY",
                "vacancy_link": "https://jobs.dou.ua/companies/pixready/vacancies/258113/",
                "vacancy_description": "Привіт!\n\nМи міжнародна студія 3D-візуалізації та моделювання, допомагаємо компаніям з 10+ країн створювати фотореалістичні зображення їхніх продуктів та ідей.",
                "vacancy_city": "Львів, за кордоном, віддалено"
            },
            {
                "vacancy_title": "Marketing Designer (Digital, Pre-press, Senior)",
                "company_name": "ROZETKA",
                "vacancy_link": "https://jobs.dou.ua/companies/rozetka-ua-internet-supermarket/vacancies/258107/",
                "vacancy_description": "Найпопулярнішому інтернет-магазину Rozetka.ua потрібен «Marketing Designer»\n\nROZETKA — найбільший онлайн-ритейлер та один із найтехнологічніших e-commerce-проектів в Україні. Наша місія — бути універсальним помічником з вибору будь-якого товару в інтернеті.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Instructional Designer",
                "company_name": "Mate academy",
                "vacancy_link": "https://jobs.dou.ua/companies/mate-academy/vacancies/254548/",
                "vacancy_description": "We are Mate academy — an EdTech startup with a technological, gamified, AI-friendly LMS platform where people learn IT specialties. Try it! \n\n🌎Our mission is to help 1 million people worldwide build their careers in IT.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Middle Product Designer",
                "company_name": "Lift: Stories Editor",
                "vacancy_link": "https://jobs.dou.ua/companies/lift-stories-editor/vacancies/251607/",
                "vacancy_description": "Привіт👋\n\nМи українська продуктова компанія Lift, заснована у 2020 році у холдингу Genesis.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Middle Graphic Designer, UX/UI",
                "company_name": "Dream Lab",
                "vacancy_link": "https://jobs.dou.ua/companies/dream-lab/vacancies/258038/",
                "vacancy_description": "На конкурсній основі компанія «DREAM LAB» розширює колектив. Ми шукаємо графічного дизайнера, який любить свою роботу!\n\nВакансія передбачає ПОВНУ зайнятість в офісі в місті Луцьку.",
                "vacancy_city": "Луцьк"
            },
            {
                "vacancy_title": "Game designer",
                "company_name": "Stan's Assets",
                "vacancy_link": "https://jobs.dou.ua/companies/stans-assets/vacancies/258037/",
                "vacancy_description": "We are looking for a Game Designer with 3+ years of experience, experience in creating Game Development Documents, and successfully releasing games. The creativity, passion for games, and awareness of game trends will be a plus.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Product Designer",
                "company_name": "Kiss My Apps",
                "vacancy_link": "https://jobs.dou.ua/companies/kiss-my-apps/vacancies/258036/",
                "vacancy_description": "У команду Kiss My Apps шукаємо креативного та досвідченого Product Designer. Ця можливість для тебе, якщо ти готовий вриватися і створювати проривні дизайн рішення для Health & Fitness продуктів.",
                "vacancy_city": "віддалено"
            },
            {
                "vacancy_title": "Product Designer / UI/UX Designer",
                "company_name": "Codefinity",
                "vacancy_link": "https://jobs.dou.ua/companies/codefinity/vacancies/258034/",
                "vacancy_description": "Our mission is to make learning technology accessible, easy and fun for users across the world! We are creating next-generation education platform for learning software development and intent to become a leading player in that market.",
                "vacancy_city": "Київ"
            },
            {
                "vacancy_title": "Графічний дизайнер",
                "company_name": "ROZETKA",
                "vacancy_link": "https://jobs.dou.ua/companies/rozetka-ua-internet-supermarket/vacancies/257983/",
                "vacancy_description": "Найпопулярнішому інтернет-магазину Rozetka.ua потрібен «Графічний дизайнер»\n\nROZETKA — найбільший онлайн-ритейлер та один із найтехнологічніших e-commerce-проектів в Україні. Наша місія — бути універсальним помічником з вибору будь-якого товару в інтернеті.",
                "vacancy_city": "віддалено"
            }
        ]
    }


]

export default vacanciesDatas;
