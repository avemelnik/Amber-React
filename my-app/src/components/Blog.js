import React, { Component } from 'react';
import blogPhoto from '../img/rayan.jpg';


export default class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <section className="blog-post  d-flex justify-content-center align-content-center align-items-center">
                    <div className="container">
                        <header>
                            <h3 className="text-color-black text-center">Latest blog posts</h3>
                        </header>
                        <ul className="row blog">
                            <li className="col-12 col-lg-4">
                                <img src={blogPhoto} alt=""/>
                                    <div className="blog-caption">
                                        <h4 className="text-left ml-0 text-color-green">Runway to Red Carpet: Awards Season</h4>
                                        <p>Her father worked on oil rigs and farms that through most of the Depression. But it is a new
                                            story that has seared into my genetic.
                                            Learn more</p>
                                        <span className="comments d-flex flex-row justify-content-between">
                        <a href="#">Learn more</a>
                        <a href="#" className="d-flex flex-row justify-content-between"><i
                            className="fa fa-comment"></i><p>159</p></a>
                    </span>
                                    </div>
                            </li>
                            <li className="col-12 col-lg-4">
                                <img src={blogPhoto}/>
                                    <div className="blog-caption">
                                        <h4 className="text-left ml-0 text-color-green">Runway to Red Carpet: Awards Season</h4>
                                        <p>Her father worked on oil rigs and farms that through most of the Depression. But it is a new
                                            story that has seared into my genetic.
                                            Learn more</p>
                                        <span className="comments d-flex flex-row justify-content-between">
                        <a href="#">Learn more</a>
                        <a href="#" className="d-flex flex-row justify-content-between"><i
                            className="fa fa-comment"></i><p>159</p></a>
                    </span>
                                    </div>
                            </li>
                            <li className="col-12 col-lg-4">
                                <img src={blogPhoto}/>
                                    <div className="blog-caption">
                                        <h4 className="text-left ml-0 text-color-green">Runway to Red Carpet: Awards Season</h4>
                                        <p>Her father worked on oil rigs and farms that through most of the Depression. But it is a new
                                            story that has seared into my genetic.
                                            Learn more</p>
                                        <span className="comments d-flex flex-row justify-content-between">
                        <a href="#">Learn more</a>
                        <a href="#" className="d-flex flex-row justify-content-between"><i
                            className="fa fa-comment"></i><p>159</p></a>
                    </span>
                                    </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>

    );
    }
    }