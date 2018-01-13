import React, {Component} from 'react';
import firstWavePhoto from '../img/wave.jpg';
import secondWavePhoto from '../img/wave-2.jpg';


export default class MainBlog extends Component {
    render() {
        return (
            <div className="MainBlog">
                <section className="main-section d-flex flex-column justify-content-center">
                    <div className="container">
                        <div className="row">
                            <main className="col-lg-8">
                                <article className="main-article">
                                    <img src={firstWavePhoto}/>
                                    <h4>These are the Americans that I know</h4>
                                    <p>No health care? The market will fix it. I have come here to seek a new beginning
                                        between the
                                        United
                                        States and Muslims around the world; one based upon mutual interest and mutual
                                        respect; and one
                                        based upon the truth that America and Islam are not exclusive, and need not be
                                        in competition.
                                        On
                                        economic development, we will create a new corps of business volunteers to
                                        partner with
                                        counterparts
                                        in Muslim-majority countries.</p>

                                    <div className="cite"><p>Thereby, the whale commanders are enabled to recognise each
                                        other upon the
                                        ocean,
                                        even at
                                        considerable distances and with no small facility.</p>
                                        <p className="cite-caption"><em>— Moby-Dick, Herman Melville</em></p></div>

                                    <p>Tell that to the proud auto workers at a Michigan plant who, after they found out
                                        it was closing,
                                        kept showing up every day and working as hard as ever, because they knew there
                                        were people who
                                        counted on the brakes that they made.</p>

                                    <h4>Michigan plant who, after they found</h4>
                                    <p>It was closing, kept showing up every day and working as hard as ever, because
                                        they knew there
                                        were
                                        people who counted on the brakes that they made. Michigan plant who, after they
                                        found out it was
                                        closing, kept showing up every day and working as hard as ever, because. Tell
                                        that to the proud
                                        auto
                                        workers at a Michigan plant who, after they found out it was closing, kept
                                        showing up every day
                                        and
                                        working as hard as ever, because they knew there were people who counted on the
                                        brakes that they
                                        made.</p>

                                    <p>Michigan plant who, after they found out it was closing, kept showing up every
                                        day and working as
                                        hard as ever, because they knew there were people who counted on the brakes that
                                        they made.
                                        Michigan
                                        plant who, after they found out it was closing, kept showing up every day and
                                        working as hard as
                                        ever, because.</p>

                                    <ul className="single-img-list d-flex flex-ryw justify-content-between">
                                        <li><img src={secondWavePhoto}/></li>
                                        <li><img src={secondWavePhoto}/></li>
                                        <li><img src={secondWavePhoto}/></li>
                                    </ul>
                                    <p>Because they knew there were people who counted on the brakes that they made.
                                        Michigan plant who,
                                        after
                                        they found out it was closing, kept showing up every day and working as hard as
                                        ever, because
                                        they knew
                                        there were people who counted on the brakes that they made. Michigan plant who,
                                        after they found
                                        out it
                                        was closing, kept showing up every day and working as hard as ever, because.</p>

                                    <p>Tell that to the proud auto workers at a Michigan plant who, after they found out
                                        it was closing,
                                        kept
                                        showing up every day and working as hard as ever, because they knew there were
                                        people who
                                        counted on the
                                        brakes that they made.</p>
                                </article>
                                <ul className="d-flex tags">
                                    <li><p>Tags:</p></li>
                                    <li><a href="#">amber</a></li>
                                    <li><a href="#">dance</a></li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">sultan</a></li>
                                    <li><a href="#">onmouseover tag</a></li>
                                </ul>
                                <h4>Related posts</h4>
                                <ul className="row related-posts">
                                    <li className="col-md-4">
                                        <p>June 24</p>
                                        <p className="text-color-green">The hope of a young naval lieutenant bravely
                                            patrolling</p>
                                    </li>
                                    <li className="col-md-4">
                                        <p>June 24</p>
                                        <p className="text-color-green">The hope of a young naval lieutenant bravely
                                            patrolling</p>
                                    </li>
                                    <li className="col-md-4">
                                        <p>June 24</p>
                                        <p className="text-color-green">The hope of a young naval lieutenant bravely
                                            patrolling</p>
                                    </li>
                                </ul>
                            </main>
                            <aside className="offset-1 col-lg-3">
                                <h4>Categories</h4>
                                <ul className="categories">
                                    <li><a href="#">Creative portfolio</a></li>
                                    <li><a href="#">Onmouseover category</a></li>
                                    <li><a href="#">Amber golden</a></li>
                                    <li><a href="#">Amsterdam fight gear</a></li>
                                    <li><a href="#">Creamy cucumber</a></li>
                                </ul>

                                <h4>Reacent comments</h4>
                                <ul className="reacent-comments">
                                    <li><a href="#">Creative portfolio</a></li>
                                    <li><a href="#">Onmouseover category</a></li>
                                    <li><a href="#">Amber golden</a></li>
                                </ul>
                                <h4>Latest works</h4>
                                <div className="latest-work-slide">
                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active">
                                                <img className="d-block img-fluid w-100" src={secondWavePhoto}
                                                     alt="First slide"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block img-fluid w-100" src="img\wave-2.jpg"
                                                     alt="Second slide"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block img-fluid w-100" src={secondWavePhoto}
                                                     alt="Third slide"/>
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleControls"
                                           role="button"
                                           data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleControls"
                                           role="button"
                                           data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>

                                </div>
                                <h4>Tag cloud</h4>
                                <div className="d-flex flex-column flex-wrap">
                                <a href="#" className="my-btn my-empty-btn">bad boy</a>
                                <a href="#" className="my-btn my-empty-btn">winter</a>
                                <a href="#" className="my-btn my-empty-btn">is coming</a>
                                <a href="#" className="my-btn my-empty-btn">southy</a>
                                <a href="#" className="my-btn my-empty-btn">mouseover</a>
                                <a href="#" className="my-btn my-empty-btn">asia</a>
                                <a href="#" className="my-btn my-empty-btn">surfing</a>
                                <a href="#" className="my-btn my-empty-btn">iceland</a>
                                <a href="#" className="my-btn my-empty-btn">she</a>
                                <a href="#" className="my-btn my-empty-btn">china</a>
                                <a href="#" className="my-btn my-empty-btn">daytona</a>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}