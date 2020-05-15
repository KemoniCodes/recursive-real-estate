import React from 'react'
import '../scss/property-page.scss'
import { Link } from 'react-router-dom'
import ContactNav from '../components/ContactNav'
import MainNav from '../components/MainNav'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'


class Properties extends React.Component {
    render() {
        return (
            <div className="property-page" >
                <ContactNav />
                <div>
                    <h1><Link to='/'>Recursive Real Estate</Link></h1>
                    <h3>International Luxury Realty</h3>
                </div>
                <MainNav />
                <SearchBar />

                <h2>Our Properties</h2>

                <div className="row">
                    <div>
                        <img src="img/estate-9.jpg" alt="" />
                        <div className="agent-info">
                            <p>123 MONTANA RD</p>
                            <p className="location">LOS HILLS, NZ 44455</p>
                            <ul>
                                <li className="price">$50,000</li>
                                <div className="details">
                                    <li><i class="fas fa-home"></i> 5,000 sq ft</li>
                                    <li><i class="fas fa-bed"></i> 5</li>
                                    <li><i class="fas fa-bath"></i>4</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/estate-10.jpg" alt="" />
                        <div className="agent-info">
                            <p>222 THE ESTATES DR</p>
                            <p className="location">LAS BILLETAS, MX 244356 </p>
                            <ul>
                                <li className="price"> $200,220</li>
                                <div className="details">
                                    <li><i class="fas fa-home"></i> 16,200 sq ft</li>
                                    <li><i class="fas fa-bed"></i> 8</li>
                                    <li><i class="fas fa-bath"></i>10</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/estate-11.jpg" alt="" />
                        <div className="agent-info">
                            <p>47 MODERN WAY</p>
                            <p className="location">NEW DUBAI, DXB 335669</p>
                            <ul>
                                <li className="price">$52,5000</li>
                                <div className="details">
                                    <li><i class="fas fa-home"></i> 11,749 sq ft</li>
                                    <li><i class="fas fa-bed"></i> 8</li>
                                    <li><i class="fas fa-bath"></i>9</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/estate-12.jpg" alt="" />
                        <div className="agent-info">
                            <p>679 DEM LN</p>
                            <p className="location">LITTLE ISLAND, JM 876</p>
                            <ul>
                                <li className="price"> $400,320</li>
                                <div className="details">
                                    <li><i class="fas fa-home"></i> 20,000 sq ft</li>
                                    <li><i class="fas fa-bed"></i> 9</li>
                                    <li><i class="fas fa-bath"></i>10</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/estate-13.jpg" alt="" />
                        <div className="agent-info">
                            <p>732 COLD PL</p>
                            <p className="location">MOSCOW, RUS 4567</p>
                            <ul>
                                <li className="price">  $429,312</li>
                                <div className="details">
                                    <li><i class="fas fa-home"></i> 28,720 sq ft</li>
                                    <li><i class="fas fa-bed"></i> 8</li>
                                    <li><i class="fas fa-bath"></i>10</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/estate-14.jpg" alt="" />
                        <div className="agent-info">
                            <p>306 CLASSIC ST</p>
                            <p className="location">LITTLE SPAIN, FR</p>
                            <ul>
                                <li className="price"> $535,678,000</li>
                                <div className="details">
                                    <li><i class="fas fa-home"></i> 81,000 sq ft</li>
                                    <li><i class="fas fa-bed"></i> 15</li>
                                    <li><i class="fas fa-bath"></i>14</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/estate-16.jpg" alt="" />
                        <div className="agent-info">
                            <p>56 KHAN RD</p>
                            <p className="location">SEAL, AUS</p>
                            <ul>
                                <li className="price"> $250,564</li>
                                <div className="details">
                                    <li><i class="fas fa-home"></i> 17,130 sq ft</li>
                                    <li><i class="fas fa-bed"></i> 8</li>
                                    <li><i class="fas fa-bath"></i>10</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/estate-17.jpg" alt="" />
                        <div className="agent-info">
                            <p>4007 LAMB ST</p>
                            <p className="location">RED TOWN, GL</p>
                            <ul>
                                <li className="price"> $284,590</li>
                                <div className="details">
                                    <li><i class="fas fa-home"></i> 19,430 sq ft</li>
                                    <li><i class="fas fa-bed"></i> 9</li>
                                    <li><i class="fas fa-bath"></i>11</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/estate-18.jpg" alt="" />
                        <div className="agent-info">
                            <p>32 WAVY WAY</p>
                            <p className="location">BEACH DUNES, IB</p>
                            <ul>
                                <li className="price"> $125,764</li>
                                <div className="details">
                                    <li><i class="fas fa-home"></i> 17,630 sq ft</li>
                                    <li><i class="fas fa-bed"></i> 7</li>
                                    <li><i class="fas fa-bath"></i>10</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/estate-1.jpg" alt="" />
                        <div className="agent-info">
                            <p>323 MUHOLLAND DR</p>
                            <p className="location">MALIBU, CA</p>
                            <ul>
                                <li className="price"> $333,333</li>
                                <div className="details">
                                    <li><i class="fas fa-home"></i> 25,333sq ft</li>
                                    <li><i class="fas fa-bed"></i> 8</li>
                                    <li><i class="fas fa-bath"></i>9</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/estate-2.jpg" alt="" />
                        <div className="agent-info">
                            <p>112 MAHONEY LN</p>
                            <p className="location">LONDON, UK</p>
                            <ul>
                                <li className="price"> $500,545,33</li>
                                <div className="details">
                                    <li><i class="fas fa-home"></i> 505,000 sq ft</li>
                                    <li><i class="fas fa-bed"></i> 14</li>
                                    <li><i class="fas fa-bath"></i>18</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/estate-3.jpg" alt="" />
                        <div className="agent-info">
                            <p>6843 REID DR</p>
                            <p className="location">MILAN,ITLY</p>
                            <ul>
                                <li className="price"> $734,521,000</li>
                                <div className="details">
                                    <li><i class="fas fa-home"></i> 10,000,234 sq ft</li>
                                    <li><i class="fas fa-bed"></i> 20</li>
                                    <li><i class="fas fa-bath"></i>28</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/estate-4.jpg" alt="" />
                        <div className="agent-info">
                            <p>234 PALM AVE</p>
                            <p className="location">SUNNY, HWI</p>
                            <ul>
                                <li className="price"> $32,333</li>
                                <div className="details">
                                    <li><i class="fas fa-home"></i> 25,700 sq ft</li>
                                    <li><i class="fas fa-bed"></i> 10</li>
                                    <li><i class="fas fa-bath"></i>13</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/estate-5.jpg" alt="" />
                        <div className="agent-info">
                            <p>5572 CLARK LN</p>
                            <p className="location">MEDDY, GR</p>
                            <ul>
                                <li className="price">$443,200</li>
                                <div className="details">
                                    <li><i class="fas fa-home"></i> 25,000 sq ft</li>
                                    <li><i class="fas fa-bed"></i> 10</li>
                                    <li><i class="fas fa-bath"></i>12</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>



                <Footer />
            </div>
        )

    }

}




export default Properties