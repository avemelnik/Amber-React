import React, {Component} from 'react';
import natPhoto from '../img/nataly.jpg';


export default class PortfolioGallery extends Component {
    render() {
        return (
            <div className="PortfolioGallery">
                <section
                    className="gallery justify-content-center align-items-center align-content-center d-flex flex-column">
                    <div
                        className="container d-flex flex-column align-content-center justify-content align-items-center">
                        <p className="text-galary">Gingerbread candy chupa chups topping. Halvah cake croissant jelly
                            beans. Unerdwear.com brownie lollipop
                            sesame snaps bear claw sweet roll sweet I love soufflé. Caramels powder gummies pudding
                            danish sesame snaps.
                            Sweet roll caramels fruitcake bonbon unerdwear.com brownie ice cream carrot cake. Carrot
                            cake apple pie
                            gummies I love applicake I love I love chocolate bar pudding.</p>
                        <ul className="nav-gallery d-flex flex-row">
                            <li><a href="#">View all</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">Photos</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Apps</a></li>
                            <li><a href="#">Poisons</a></li>
                        </ul>
                        <ul className="row latest-photo">
                            <li className="col-12 col-lg-4 photo">
                                <figure><img src={natPhoto} width="290" height="290" alt="nataly"/>
                                    <figcaption>
                                        <div className="lower-text d-flex flex-column text-left">
                                            <p className="name text-color-white">Lindemans Wine</p>
                                            <p className="job text-color-green">Art Direction, Web Design</p>
                                        </div>
                                    </figcaption>
                                </figure>
                                <ul className="link-hidden">
                                    <li className="link-bg">
                                        <a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                    </li>
                                    <li className="link-bg">
                                        <a href="#"><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    </li>
                                    <li className="link-bg">
                                        <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="col-12 col-lg-4 photo">
                                <figure><img src={natPhoto} width="290" height="290" alt="nataly"/>
                                    <figcaption>
                                        <div className="lower-text d-flex flex-column text-left">
                                            <p className="name text-color-white">Lindemans Wine</p>
                                            <p className="job text-color-green">Art Direction, Web Design</p>
                                        </div>
                                    </figcaption>
                                </figure>
                                <ul className="link-hidden">
                                    <li className="link-bg">
                                        <a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                    </li>
                                    <li className="link-bg">
                                        <a href="#"><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    </li>
                                    <li className="link-bg">
                                        <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="col-12 col-lg-4 photo">
                                <figure><img src={natPhoto} width="290" height="290" alt="nataly"/>
                                    <figcaption>
                                        <div className="lower-text d-flex flex-column text-left">
                                            <p className="name text-color-white">Lindemans Wine</p>
                                            <p className="job text-color-green">Art Direction, Web Design</p>
                                        </div>
                                    </figcaption>
                                </figure>
                                <ul className="link-hidden">
                                    <li className="link-bg">
                                        <a href="#"><i className="fa fa-heart link-icon" aria-hidden="true"></i></a>
                                    </li>
                                    <li className="link-bg">
                                        <a href="#"><i className="fa fa-search-plus link-icon"
                                                       aria-hidden="true"></i></a>
                                    </li>
                                    <li className="link-bg">
                                        <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </li>
                                <li className="col-12 col-lg-4 photo">
                                    <figure><img src={natPhoto} width="290" height="290" alt="nataly"/>
                                        <figcaption>
                                            <div className="lower-text d-flex flex-column text-left">
                                                <p className="name text-color-white">Lindemans Wine</p>
                                                <p className="job text-color-green">Art Direction, Web Design</p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <ul className="link-hidden">
                                        <li className="link-bg">
                                            <a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                        </li>
                                        <li className="link-bg">
                                            <a href="#"><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                        </li>
                                        <li className="link-bg">
                                            <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="col-12 col-lg-4 photo">
                                    <figure><img src={natPhoto} width="290" height="290" alt="nataly"/>
                                        <figcaption>
                                            <div className="lower-text d-flex flex-column text-left">
                                                <p className="name text-color-white">Lindemans Wine</p>
                                                <p className="job text-color-green">Art Direction, Web Design</p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <ul className="link-hidden">
                                        <li className="link-bg">
                                            <a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                        </li>
                                        <li className="link-bg">
                                            <a href="#"><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                        </li>
                                        <li className="link-bg">
                                            <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="col-12 col-lg-4 photo">
                                    <figure><img src={natPhoto} width="290" height="290" alt="nataly"/>
                                        <figcaption>
                                            <div className="lower-text d-flex flex-column text-left">
                                                <p className="name text-color-white">Lindemans Wine</p>
                                                <p className="job text-color-green">Art Direction, Web Design</p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <ul className="link-hidden">
                                        <li className="link-bg">
                                            <a href="#"><i className="fa fa-heart link-icon" aria-hidden="true"></i></a>
                                        </li>
                                        <li className="link-bg">
                                            <a href="#"><i className="fa fa-search-plus link-icon"
                                                           aria-hidden="true"></i></a>
                                        </li>
                                        <li className="link-bg">
                                            <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </li>
                                    <li className="col-12 col-lg-4 photo">
                                        <figure><img src={natPhoto} width="290" height="290" alt="nataly"/>
                                            <figcaption>
                                                <div className="lower-text d-flex flex-column text-left">
                                                    <p className="name text-color-white">Lindemans Wine</p>
                                                    <p className="job text-color-green">Art Direction, Web Design</p>
                                                </div>
                                            </figcaption>
                                        </figure>
                                        <ul className="link-hidden">
                                            <li className="link-bg">
                                                <a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                            </li>
                                            <li class="link-bg">
                                                <a href="#"><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                            </li>
                                            <li class="link-bg">
                                                <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="col-12 col-lg-4 photo">
                                        <figure><img src={natPhoto} width="290" height="290" alt="nataly"/>
                                            <figcaption>
                                                <div className="lower-text d-flex flex-column text-left">
                                                    <p className="name text-color-white">Lindemans Wine</p>
                                                    <p className="job text-color-green">Art Direction, Web Design</p>
                                                </div>
                                            </figcaption>
                                        </figure>
                                        <ul className="link-hidden">
                                            <li className="link-bg">
                                                <a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                            </li>
                                            <li className="link-bg">
                                                <a href="#"><i class="fa fa-search-plus" aria-hidden="true"></i></a>
                                            </li>
                                            <li className="link-bg">
                                                <a href="#"><i class="fa fa-link" aria-hidden="true"></i></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="col-12 col-lg-4 photo">
                                        <figure><img src={natPhoto} width="290" height="290" alt="nataly"/>
                                            <figcaption>
                                                <div className="lower-text d-flex flex-column text-left">
                                                    <p className="name text-color-white">Lindemans Wine</p>
                                                    <p className="job text-color-green">Art Direction, Web Design</p>
                                                </div>
                                            </figcaption>
                                        </figure>
                                        <ul className="link-hidden">
                                            <li className="link-bg d-flex">
                                                <a href="#"><i className="fa fa-heart link-icon" aria-hidden="true"></i></a>
                                            </li>
                                            <li className="link-bg">
                                                <a href="#"><i className="fa fa-search-plus link-icon"
                                                               aria-hidden="true"></i></a>
                                            </li>
                                            <li className="link-bg">
                                                <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                            </li>
                                        </ul>
                                    </li>

                        </ul>
                        <a href="#" className="show-more text-color-green m-0 mb-5">Show more photos</a>
                    </div>
                </section>
            </div>

    );
    }
    }