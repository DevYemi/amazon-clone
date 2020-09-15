import React from 'react'
import { Link } from 'react-router-dom'
import Language from '@material-ui/icons/Language'
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__row1">
                <div className="f__row1__btt">Back To Top</div>
                <div className="f__row1__links">
                    <div>
                        <h5>Get to Know Us</h5>
                        <ul>
                            <Link>
                                <li>Careers</li>
                            </Link>
                            <Link>
                                <li>Blog</li>
                            </Link>
                            <Link>
                                <li>About Amazon</li>
                            </Link>
                            <Link>
                                <li>Investor Relations</li>
                            </Link>
                            <Link>
                                <li>Amazon Devices</li>
                            </Link>
                            <Link>
                                <li>Amazon Tours</li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <h5>Make Money with Us</h5>
                        <ul>
                            <Link>
                                <li>Sell on Amazon</li>
                            </Link>
                            <Link>
                                <li>Sell Your Apps on Amazon</li>
                            </Link>
                            <Link>
                                <li>Become an Affiliate</li>
                            </Link>
                            <Link>
                                <li>Advertise Your Products</li>
                            </Link>
                            <Link>
                                <li>Self-Publish with Us</li>
                            </Link>
                            <Link>
                                <li>Host an Amazon Hub</li>
                            </Link>
                            <Link>
                                <li>›See More Make Money with Us</li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <h5>Amazon Payment Products</h5>
                        <ul>
                            <Link>
                                <li>Amazon Business Card</li>
                            </Link>
                            <Link>
                                <li>Shop with Points</li>
                            </Link>
                            <Link>
                                <li>Reload Your Balance</li>
                            </Link>
                            <Link>
                                <li>Amazon Currency Converter</li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <h5>Let Us Help You</h5>
                        <ul>
                            <Link>
                                <li>Amazon and COVID-19</li>
                            </Link>
                            <Link>
                                <li>Your Account</li>
                            </Link>
                            <Link>
                                <li>Your Orders</li>
                            </Link>
                            <Link>
                                <li>Shipping Rates & Policies</li>
                            </Link>
                            <Link>
                                <li>Returns & Replacements</li>
                            </Link>
                            <Link>
                                <li>Manage Your Content and Devices</li>
                            </Link>
                            <Link>
                                <li>Amazon Assistant</li>
                            </Link>
                            <Link>
                                <li>Help</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="f__row1__extension">
                    <Link to='/'>
                        <img src="/img/amazon-logo.png" alt="logo" />
                    </Link>
                    <div>
                        <div className="f__row1__extenLanguage">
                            <Language id="icon_flag" />
                            <p>English</p>
                            <div>
                                <ArrowDropUp id="icon_ArrowUp" />
                                <ArrowDropDown id="icon_ArrowDown" />
                            </div>
                        </div>
                        <div className="f__row1__extenCurrency">$ USD-U.S. DOLLAR</div>
                        <div className="f__row1__extenCountry">
                            <img src="/img/usa-flag.png" alt="logo" />
                            <p>UNITED STATE</p> </div>
                    </div>
                </div>
            </div>
            <div className="footer__row2Container">
                <div className="f__row2__div1">
                    <div className="f__row2__links">
                        <Link>
                            <div className="f__row2__link">
                                <h5>Amazon Music</h5>
                                <small>Stream millions</small>
                                <small>of songs</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Alexa</h5>
                                <small>Actionable Analytics</small>
                                <small>for the Web</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Amazon Rapids</h5>
                                <small>Fun stories for</small>
                                <small>kids on the go</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>CreateSpace</h5>
                                <small>Indie Print Publishing</small>
                                <small>Made Easy</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>IMDbPro</h5>
                                <small>Get Info Entertainment</small>
                                <small>Professionals Need</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5> Ring</h5>
                                <small>Smart Home</small>
                                <small>Security Systems</small>
                                <small></small>
                            </div>
                        </Link>
                    </div>
                    <div className="f__row2__links">
                        <Link>
                            <div className="f__row2__link">
                                <h5>Amazon Advertising</h5>
                                <small>Find, attract, and</small>
                                <small>engage customers</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Sell on Amazon</h5>
                                <small>Start a Selling Account</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Amazon Web Services</h5>

                                <small>Scalable Cloud</small>
                                <small>Computing Services</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5> DPReview</h5>
                                <small>Digital</small>
                                <small>Photography</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Kindle Direct Publishing</h5>
                                <small>Indie Digital Publishing</small>
                                <small>Made Easy</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>eero WiFi</h5>
                                <small>Stream 4K Video</small>
                                <small>in Every Room</small>
                            </div>
                        </Link>
                    </div>
                    <div className="f__row2__links">
                        <Link>
                            <div className="f__row2__link">
                                <h5>Amazon Drive</h5>
                                <small>Cloud storage</small>
                                <small>from Amazon</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Amazon Business</h5>
                                <small>Everything for</small>
                                <small>Your Business</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Audible</h5>
                                <small>Listen to Books & Original</small>
                                <small>Audio Performances</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>East Dane</h5>
                                <small>Designer Men's</small>
                                <small>Fashion</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Prime Video Direct</h5>
                                <small>Video Distribution</small>
                                <small>Made Easy</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Neighbors App</h5>
                                <small>Real-Time Crime</small>
                                <small>& Safety Alerts</small>
                            </div>
                        </Link>
                    </div>
                    <div className="f__row2__links">
                        <Link>
                            <div className="f__row2__link">
                                <h5>6pm</h5>
                                <small>Score Deal</small>
                                <small>On fahion Brands</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>AmazonGlobal</h5>
                                <small>Ship Orders</small>
                                <small>Internationally</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Book Depository</h5>
                                <small>Books With Free</small>
                                <small>Delivery Worldwide</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Fabric</h5>
                                <small>Sewing, Quilting</small>
                                <small>& Knitting</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>ShopBop</h5>
                                <small>Designer</small>
                                <small>Fahion Brands</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Amazon Subscription Boxes</h5>
                                <small>Top subscription boxes – right to your</small>
                                <small> door</small>
                            </div>
                        </Link>
                    </div>
                    <div className="f__row2__links">
                        <Link>
                            <div className="f__row2__link">
                                <h5>AbeBooks</h5>
                                <small>Books, art</small>
                                <small>& collectibles</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Home Services</h5>
                                <small>Experienced Pros</small>
                                <small>Happiness</small>
                                <small> Guarantee</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Box Office Mojo</h5>
                                <small>Find Movie</small>
                                <small>Box Office Data</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Goodreads</h5>
                                <small>Book reviews</small>
                                <small>& recommendations</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Woot!</h5>
                                <small>Deals and</small>
                                <small>Shenanigans</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>PillPack</h5>
                                <small>Pharmacy</small>
                                <small>Simplified</small>
                            </div>
                        </Link>
                    </div>
                    <div className="f__row2__links">
                        <Link>
                            <div className="f__row2__link">
                                <h5>ACX</h5>
                                <small>Audiobook Publishing</small>
                                <small>Made Easy</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Amazon Ignite</h5>
                                <small>Sell your original</small>
                                <small>Digital Educational</small>
                                <small>Resources</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>ComiXology</h5>
                                <small>Thousands of</small>
                                <small>Digital Comics</small>

                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>IMDb</h5>


                                <small>Movies, TV</small>
                                <small>& Celebrities</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Zappos</h5>
                                <small>Shoes &</small>
                                <small>Clothings</small>
                            </div>
                        </Link>
                        <Link>
                            <div className="f__row2__link">
                                <h5>Amazon Second Chance</h5>
                                <small>Pass it on, trade it in,</small>
                                <small>give it a second life</small>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="f__row2__div2">
                    <Link>
                    <p>Conditions of Use</p>
                    </Link>
                    <Link>
                    <p>Privacy Notice</p>
                    </Link>
                    <Link>
                    <p>Interest-Based Ads</p>
                    </Link>
                    <p>© 1996-2020, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </div>
    )
}
export default Footer