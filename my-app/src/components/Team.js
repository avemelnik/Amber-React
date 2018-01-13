import React, { Component } from 'react';
import firstTeamPhoto from '../img/johny.jpg';
export default class Team extends Component {
    render() {
        return (
            <div className="Team">
                <section className="our-team d-flex justify-content-center align-content-center align-items-center w-100">
                    <div className="container">
                        <header>
                            <h3 className="text-color-white text-center text-color-black">Our Team</h3>
                        </header>
                        <ul className="row co-worker-list">
                            <li className="col-12 col-lg-3 co-worker">
                                <div className="wrapper text-center">
                                    <figure>
                                        <img src={firstTeamPhoto} alt="our-team" width="210" height="280" className="co-worker-img"/>
                                            <div className="hidden-block-name">
                                                <figcaption className="hidden-block-info">
                                                    <h4>Manny Delgado</h4>
                                                    <p>a little boy</p>
                                                </figcaption>
                                                <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                                            </div>
                                    </figure>
                                    <button className="my-btn my-empty-btn" type="button">Profile</button>
                                </div>
                            </li>
                            <li className="col-12 col-lg-3 co-worker">
                                <div className="wrapper text-center">
                                    <figure>
                                        <img src={firstTeamPhoto} alt="our-team" width="210" height="280" className="co-worker-img"/>
                                            <div className="hidden-block-name">
                                                <figcaption className="hidden-block-info">
                                                    <h4>Manny Delgado</h4>
                                                    <p>a little boy</p>
                                                </figcaption>
                                                <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                                            </div>
                                    </figure>
                                    <button className="my-btn my-empty-btn" type="button">Profile</button>
                                </div>
                            </li>
                            <li className="col-12 col-lg-3 co-worker">
                                <div className="wrapper text-center">
                                    <figure>
                                        <img src={firstTeamPhoto} alt="our-team" width="210" height="280" className="co-worker-img"/>
                                            <div className="hidden-block-name">
                                                <figcaption className="hidden-block-info">
                                                    <h4>Luke Dunphy</h4>
                                                    <p>NATO representative</p>
                                                </figcaption>
                                                <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                                            </div>
                                    </figure>
                                    <button className="my-btn my-empty-btn" type="button">Profile</button>
                                </div>
                            </li>
                            <li className="col-12 col-lg-3 co-worker">
                                <div className="wrapper text-center">
                                    <figure>
                                        <img src={firstTeamPhoto} alt="our-team" width="210" height="280" className="co-worker-img"/>
                                            <div className="hidden-block-name">
                                                <figcaption className="hidden-block-info">
                                                    <h4>Mitchell Pritchett</h4>
                                                    <p>ecology lawer</p>
                                                </figcaption>
                                                <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                                            </div>
                                    </figure>
                                    <button className="my-btn my-empty-btn" type="button">Profile</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>

    );
    }
    }