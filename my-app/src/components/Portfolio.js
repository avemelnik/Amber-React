import React, {Component} from 'react';
import avatar from '../img/avatar.jpg';


export default class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio">
                <section className="portfolio d-flex flex-column justify-content-center align-items-center align-content-center">
                    <div className="container mt-5 mb-5">
                        <div className="row">
                            <div className="my-photo col-8">
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src={avatar} alt="First slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src={avatar} alt="Second slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src={avatar} alt="Third slide"/>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>

                            </div>
                            <aside className="col-4">
                                <div className="d-flex flex-row">
                                    <button type="button" className="left"> </button>
                                    <button type="button" className="right"> > </button>
                                </div>
                                <p className="likes">257</p>
                                <p className="text-color-orange">Art Direction, Web Design</p>
                                <p>Gingerbread candy chupa chups topping. Halvah cake croissant jelly beans. Unerdwear.com brownie
                                    lollipop sesame snaps bear claw sweet roll sweet I love soufflé.</p>

                                        <p>Caramels powder gummies pudding danish sesame snaps. Sweet roll caramels fruitcake bonbon unerdwear.</p>

                                        <p>Work description</p>
                                        <ul className="work-description">
                                            <li>Brownie ice cream</li>
                                            <li>Carrot Carrot cake apple pie</li>
                                            <li>Love applicake I love</li>
                                            <li>Chocolate bar pudding</li>
                                            <li><button type="button" className="my-btn my-empty-btn">By now</button></li>
                                        </ul>


                            </aside>
                        </div>
                    </div>

                </section>
            </div>

    );
    }
    }