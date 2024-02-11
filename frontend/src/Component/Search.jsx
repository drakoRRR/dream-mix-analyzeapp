import React, { useState, useEffect } from 'react';
import Data from "../Component/Data";
import vacanciesData from "../Component/Vacancies";
import axios from 'axios';

import ItemPage from './ItemPage';
import { Link } from 'react-router-dom';
import { Header } from './Header';

const VacancyCard = ({ vacancy }) => {
    return (
        <div className="col-md-4">
            <div className="work-section-info">
                <h3>{vacancy.company_name}</h3>
                <p>{vacancy.vacancy_title}</p>
                <p>{vacancy.vacancy_city}</p>
                <h6>Опис: {vacancy.vacancy_description}</h6>
                <a href={vacancy.vacancy_link} className="nav-link text-dark fw-bold">Details</a>
            </div>
        </div>

    );
};

export const Search = () => {
    const [socialMedia, setSocialMedia] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedVacancies, setSelectedVacancies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchOptions, setSearchOptions] = useState([]);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const regex = new RegExp(searchQuery); // 'i' flag for case-insensitive matching
        const filteredVacancies = vacanciesData.filter(vacancyGroup => {
            return vacancyGroup.vacancies_list.some(item =>
                regex.test(item.vacancy_title) ||
                regex.test(item.category)
            );
        });
        setSelectedVacancies(filteredVacancies);
    };
    
    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
        const regex = new RegExp(value); // 'i' flag for case-insensitive matching
        const options = vacanciesData
            .flatMap(group => group.vacancies_list)
            .filter(item =>
                regex.test(item.vacancy_title) ||
                regex.test(item.vacancy_description)
            );
        setSearchOptions(options);
    };

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setSocialMedia([...socialMedia, value]);
        } else {
            setSocialMedia(socialMedia.filter(item => item !== value));
        }
    };

    

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
    };



    const filterVacancies = () => {
        let filteredVacancies = [];
        if (socialMedia.includes("vacancies")) {
            if (selectedOption) {
                filteredVacancies = vacanciesData.filter(vacancyGroup => {
                    return vacancyGroup.category.toLowerCase() === selectedOption.toLowerCase();
                });
            } else {
                filteredVacancies = vacanciesData;
            }
        }
        setSelectedVacancies(filteredVacancies);
    };


    const handleLanguageClick = (language) => {
        setSelectedLanguage(language);
        const filteredVacancies = vacanciesData.filter(vacancyGroup => {
            return vacancyGroup.vacancies_list && vacancyGroup.vacancies_list.some(item =>
                item.languages && item.languages.includes(language)
            );
        });
        setSelectedVacancies(filteredVacancies);
    };
    useEffect(() => {
        filterVacancies();
    }, [socialMedia, selectedOption]);

    return (
        <div>
            <Header />
            <form onSubmit={handleSearchSubmit}>
                <div className="d-flex justify-content-center">
                    <div className="input-group rounded" style={{ width: '500px' }}>
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={searchQuery} onChange={handleSearchChange} />
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>
            </form>

            <div className="d-flex justify-content-center align-items-center mt-3">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="douCheckbox" value="dou" onChange={handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="douCheckbox">Dou news</label>
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="vacanciesCheckbox" value="vacancies" onChange={handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="vacanciesCheckbox">Dou vacancies</label>
                </div>
            </div>

            {socialMedia.includes("vacancies") && (
                <select className="secondary-button" onChange={handleSelectChange}>
                    <option value="">Select programming language</option>
                    {vacanciesData.map((vacancyGroup, index) => (
                        <option key={index} value={vacancyGroup.category}>{vacancyGroup.category}</option>
                    ))}
                </select>
            )}


<div className="work-section-bottom">
                {socialMedia.includes("dou") && Data.map((data, index) => (
                    <div className="work-section-info" key={index}>
                        <div className="info-boxes-img-container">
                            <img src={data.post_image} alt="" />
                        </div>
                        <p> </p>
                        <h6>{data.title}</h6>
                        <h3>{data.author}</h3>
                        <a href={data.post_link} className="nav-link text-dark fw-bold">Посилання на джерело</a>
                        <p>Кількість переглядів: {data.watch_quantity}</p>
                        <Link to={{ pathname: `/item/${data.id}`, state: { detail: data } }}>
                            <button className="secondary-button-item">View More</button>
                        </Link>
                    </div>
                ))}
            </div>


            <div className="container mt-7">
                <div className="row">
                    {selectedVacancies.map((vacancyGroup, index) => (
                        <React.Fragment key={index}>
                            {vacancyGroup.vacancies_list.map((item, idx) => (
                                <VacancyCard key={idx} vacancy={item} />
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* <div className="d-flex justify-content-center mt-3">
                <h5>Select Programming Language:</h5>
                <div className="d-flex flex-wrap">
                    {programmingLanguages.map((language, index) => (
                        <button key={index} className="btn btn-secondary mx-2 my-1" onClick={() => handleLanguageClick(language)}>{language}</button>
                    ))}
                </div>
            </div> */}

            <div className="work-section-bottom">
                {searchOptions.map((option, index) => (
                    <div className="work-section-info" key={index}>
                        <p>{option.vacancy_title}</p>
                        <p>{option.vacancy_description}</p>
                        <p>option.vacancy_link</p>
                    </div>
                ))}
            </div>



        </div>
    );
};
