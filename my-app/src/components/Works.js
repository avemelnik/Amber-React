import React, { Component } from 'react';
import natPhoto from '../img/nataly.jpg';

export default class Works extends Component {
    render() {
        return (
            <div className="Works">
                <section className="latest-works title-and-text text-center justify-content-center align-items-center align-content-center d-flex flex-column">
                    <div className="container">
                        <header>
                            <h3 className="text-color-white">Latest works</h3>
                            <p className="text-color-white">
                                That we can tuck in our children at night and know that they are fed and clothed and safe from harm. Our
                                trials and triumphs became at once unique and universal.
                            </p>
                        </header>
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
                                        <a href="#"><i className="fa fa-search-plus link-icon" aria-hidden="true"></i></a>
                                    </li>
                                    <li className="link-bg">
                                        <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
    );
    }
    }