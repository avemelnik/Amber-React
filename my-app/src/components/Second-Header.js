import React, {Component} from 'react';



export default class SecondHeader extends Component {
    render() {
        return (
            <div className="SecondHeader">
                <section className="pages-block-header">
                    <div className="container text-color-white d-flex flex-column justify-content-center">
                        <h4>Blog grid view</h4>
                        <div className="main-pages-nav d-flex row justify-content-between">
                            <ul className="d-flex flex-row project-list">
                                <li><a href="#">by Alex Poushkin</a></li>
                                <li><a href="#">September 31</a></li>
                                <li><a href="#">12 Comments</a></li>
                            </ul>
                            <ul className="pages-nav d-flex flex-row">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Shortcodes</a></li>
                                <li><a href="#">Typographyv</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>

                        </div>
                    </div>
                </section>
            </div>

        );
    }
}