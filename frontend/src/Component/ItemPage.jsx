// ItemPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Data from "../Component/Data";
import { Link } from 'react-router-dom';

const ItemPage = () => {
    const { id } = useParams();
    const detail = Data.find(item => item.id.toString() === id);
    return (
        <div className='details'>
            {detail && (
                <div >
                    <div class="row gx-4 gx-lg-7 align-items-center">
                        <div class="col-md-4" style={{ paddingLeft: '50px' }}>
                            <img class="card-img-top mb-5 mb-md-0" src={detail.post_image} alt="..." />
                        </div>
                        <div class="col-md-7">
                            <h4 class="display-5 fw-bolder">{detail.title}</h4>
                            <div class="fs-5 mb-5">
                                <span class="text-decoration-line-through" style={{ display: 'block' }}>{detail.author}</span>
                                <span class="text-decoration-line-through" style={{ display: 'block' }}>Кількість переглядів: {detail.watch_quantity}</span>
                                <a href={detail.post_link} className="nav-link text-dark fw-bold" style={{ marginLeft: '-15px' }}>Посилання на джерело</a>
                            </div>

                            <span class="lead" style={{ display: 'block' }}>Найпопулярніші кольори:</span>
                            <p class="lead"><ul>
                                {detail.most_popular_colors.map((color, colorIndex) => (
                                    <li key={colorIndex} style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ backgroundColor: color.color, width: '20px', height: '20px', display: 'inline-block', marginRight: '5px', border: '1px solid black' }}></span>
                                        {color.color} - {color.count}
                                    </li>
                                ))}
                            </ul></p>
                            {/* <div class="d-flex">
                                <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{ maxWidth: '3rem' }} fdprocessedid="t64uk" />
                                <button class="btn btn-outline-dark flex-shrink-0" type="button" fdprocessedid="sk9dfa">
                                    <i class="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button>
                            </div> */}

                            <p class="lead">
                                Слово яке найчастуше згадують: {detail.most_popular_word.most_common_word} - {detail.most_popular_word.count}
                            </p>

                            <Link to={{ pathname: `/` }}>
                                <button className="secondary-button-item">Назад</button>
                            </Link>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemPage;
