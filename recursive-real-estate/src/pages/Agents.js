import React from 'react'
import '../scss/agents-page.scss'

import { Link } from 'react-router-dom'
import ContactNav from '../components/ContactNav'
import MainNav from '../components/MainNav'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'


class Agents extends React.Component {
    render() {
        return (
            <div className="agents-page">
                <ContactNav />
                <div>
                    <h1><Link to='/'>Recursive Real Estate</Link></h1>
                    <h3>International Luxury Realty</h3>
                </div>
                <MainNav />
                <SearchBar />

                <h2>Our Agents</h2>

                <div className="row">
                    <div>
                        <img src="img/agent-1.jpg" alt="" />
                        <div className="agent-info">
                            <p>VAN CASE</p>
                            <p className="title">BROKER</p>
                            <ul>
                                <li>| 333.555.5555</li>
                                <li>| Van@RecursiveEstates.com</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/agent-2.jpg" alt="" />
                        <div className="agent-info">
                            <p>JOSIE AVERY</p>
                            <p className="title">BROKER</p>
                            <ul>
                                <li>| 333.555.5555</li>
                                <li>| Josie@RecursiveEstates.com</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/agent-3.jpg" alt="" />
                        <div className="agent-info">
                            <p>DEXTER HAYS</p>
                            <p className="title">BROKER</p>
                            <ul>
                                <li>| 333.555.5555</li>
                                <li>| Dexter@RecursiveEstates.com</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/agent-4.jpg" alt="" />
                        <div className="agent-info">
                            <p>JAYDON GARNER</p>
                            <p className="title">BROKER</p>
                            <ul>
                                <li>| 333.555.5555</li>
                                <li>| Jaydon@RecursiveEstates.com</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/agent-5.jpg" alt="" />
                        <div className="agent-info">
                            <p>MELANY SINGLETON</p>
                            <p className="title">BROKER</p>
                            <ul>
                                <li>| 333.555.5555</li>
                                <li>| Melany@RecursiveEstates.com</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/agent-6.jpg" alt="" />
                        <div className="agent-info">
                            <p>COLLIN HAMMOND</p>
                            <p className="title">BROKER</p>
                            <ul>
                                <li>| 333.555.5555</li>
                                <li>| Collin@RecursiveEstates.com</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/agent-7.jpg" alt="" />
                        <div className="agent-info">
                            <p>NATALEE HOLLOWAY</p>
                            <p className="title">BROKER</p>
                            <ul>
                                <li>| 333.555.5555</li>
                                <li>| Natalee@RecursiveEstates.com</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/agent-8.jpg" alt="" />
                        <div className="agent-info">
                            <p>LESLIE KHAN</p>
                            <p className="title">BROKER</p>
                            <ul>
                                <li>| 333.555.5555</li>
                                <li>| Leslie@RecursiveEstates.com</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/agent-9.jpg" alt="" />
                        <div className="agent-info">
                            <p>IGNACIO LAMB</p>
                            <p className="title">BROKER</p>
                            <ul>
                                <li>| 333.555.5555</li>
                                <li>| Ignacio@RecursiveEstates.com</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/agent-10.jpg" alt="" />
                        <div className="agent-info">
                            <p>ALFRED BERNARD</p>
                            <p className="title">BROKER</p>
                            <ul>
                                <li>| 333.555.5555</li>
                                <li>| Alfred@RecursiveEstates.com</li>   
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/agent-11.jpg" alt="" />
                        <div className="agent-info">
                            <p>MARIAH HINTON</p>
                            <p className="title">BROKER</p>
                            <ul>
                                <li>| 333.555.5555</li>
                                <li>| Mariah@RecursiveEstates.com</li>      
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/agent-12.jpg" alt="" />
                        <div className="agent-info">
                            <p>NICKOLAS MAHONEY</p>
                            <p className="title">BROKER</p>
                            <ul>
                                <li>| 333.555.5555</li>
                                <li>| Nickolas@RecursiveEstates.com</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/agent-13.jpg" alt="" />
                        <div className="agent-info">
                            <p>SHELBY REID</p>
                            <p className="title">BROKER</p>
                            <ul>
                                <li>| 333.555.5555</li>
                                <li>| Shelby@RecursiveEstates.com</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/agent-14.jpg" alt="" />
                        <div className="agent-info">
                            <p>NEIL MURPHY</p>
                            <p className="title">BROKER</p>
                            <ul>
                                <li>| 333.555.5555</li>
                                <li>| Neil@RecursiveEstates.com</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src="img/agent-15.jpg" alt="" />
                        <div className="agent-info">
                            <p>KAMDEN CLARK</p>
                            <p className="title">BROKER</p>
                            <ul>
                                <li>| 333.555.5555</li>
                                <li>| Kamden@RecursiveEstates.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Footer />


            </div>


        )
    }


}

export default Agents