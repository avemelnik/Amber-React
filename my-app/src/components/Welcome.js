import React, { Component } from 'react';
import firstCarItem from '../img/1.jpg';
import secondCarItem from '../img/2.jpg';
import thirdCarItem from '../img/3.jpg';
import fourthCarItem from '../img/4.jpg';
import fifthCarItem from '../img/5.jpg';

export default class Welcome extends Component {
    render() {
        return (
            <div className="Welcome">
                <section className="welcome-section w-100">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner main-carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img className="d-block img-fluid w-100" src={firstCarItem} height="950" alt="First slide"/>
                            </div>

                            <div className="carousel-item">
                                <img className="d-block img-fluid w-100" src={secondCarItem} height="950" alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid w-100" src={thirdCarItem} height="950" alt="Third slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid w-100" src={fourthCarItem} height="950" alt="Fourth slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid w-100" src={fifthCarItem} height="950" alt="Fifth slide"/>
                            </div>
                            <div className="carousel-caption d-none d-md-block m-auto">
                                <h2 className="d-flex flex-column"><span className="text-color-white">Creating a unique look. </span><span
                                    className="text-color-green">Never been easier.</span></h2>
                                <div className="welcome-button">
                                    <button type="button" className="my-btn">see features</button>
                                    <button type="button" className="my-btn my-empty-btn">purchase now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

    );
    }
    }
