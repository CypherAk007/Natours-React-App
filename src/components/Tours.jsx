import Button from '../UI/Button';
import './Tours.scss';

const Tours = () => {
    return (
        <section class="section-tour">
            <div className="u-center-text u-margin-bottom-big flex">
                <h2 class="heading-secondary">
                    Most Popular Tours
                </h2>
            </div>
            <div class="section-tour__cards">

                <div class="card">
                    <div class="card__side card__side--front">
                        <div class="card__picture card__picture--1">
                            &nbsp;
                        </div>
                        <h4 class="card__heading">
                            <span class="card__heading-span card__heading-span--1">
                                The Sea Explorer
                            </span>

                        </h4>
                        <div class="card__details">
                            <ul>
                                <li>3 day tours</li>
                                <li>Up to 30 people</li>
                                <li>2tour guides</li>
                                <li>Sleep in cozy hotels</li>
                                <li>Difficulty:easy</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card__side card__side--back card__side--back-1">
                        <div class="card__cta">
                            <div class="card__price-box">
                                <div class="card__price-only">Only</div>
                                <div class="card__price-value">$297</div>
                            </div>
                            <Button>Book now</Button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__side card__side--front">
                        <div class="card__picture card__picture--2">
                            &nbsp;
                        </div>
                        <h4 class="card__heading">
                            <span class="card__heading-span card__heading-span--2">
                                The Forest Hiker
                            </span>

                        </h4>
                        <div class="card__details">
                            <ul>
                                <li>7 day tours</li>
                                <li>Up to 30 people</li>
                                <li>2tour guides</li>
                                <li>Sleep in cozy hotels</li>
                                <li>Difficulty:easy</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card__side card__side--back card__side--back-2">
                        <div class="card__cta">
                            <div class="card__price-box">
                                <div class="card__price-only">Only</div>
                                <div class="card__price-value">$297</div>
                            </div>
                            <Button>Book now</Button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__side card__side--front">
                        <div class="card__picture card__picture--3">
                            &nbsp;
                        </div>
                        <h4 class="card__heading">
                            <span class="card__heading-span card__heading-span--3">
                                The Snow adventurous
                            </span>

                        </h4>
                        <div class="card__details">
                            <ul>
                                <li>5day tours</li>
                                <li>Up to 15 people</li>
                                <li>6tour guides</li>
                                <li>Sleep in cozy hotels</li>
                                <li>Difficulty:Hard</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card__side card__side--back card__side--back-3">
                        <div class="card__cta">
                            <div class="card__price-box">
                                <div class="card__price-only">Only</div>
                                <div class="card__price-value">$897</div>
                            </div>
                            <Button>Book now</Button>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`flex `}>

            <Button green={true} className={` -bg--color-primary text-white mt-36 mx-auto `}>Discover all tours</Button>
            </div>
        </section>
    )
}

export default Tours;