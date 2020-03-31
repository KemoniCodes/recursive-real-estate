import React from 'react'
import '../scss/contact-page.scss'
import { Link } from 'react-router-dom'
import ContactNav from '../components/ContactNav'
import MainNav from '../components/MainNav'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'


class Contact extends React.Component {
    render() {
        return (
            <div className="contact-page">
                <ContactNav />
                <div>
                    <h1><Link to='/'>Recursive Real Estate</Link></h1>
                    <h3>International Luxury Realty</h3>
                </div>
                <MainNav />
                <SearchBar />

                <h2>CONTACT US</h2>

                <div className="row">
                    <div className="logo">
                        <img src="img/realty-logo.png" alt="" />
                    </div>

                    <div className="contact-info">
                        <h3>Recursive Real Estate</h3>
                        <ul>
                            <li><i class="fas fa-phone"></i>555.555.5555</li>
                            <li><i class="fas fa-envelope"></i>International@RecursiveRealty.com</li>
                            <li><i class="fas fa-home"></i>444 Oppulence Dr. Los Angeles, CA 90210</li>
                        </ul>

                        <form action="" class="contact-form">
                            <div class="col-sm-6">
                                <div class="input-block">
                                    <label for="">First Name</label>
                                    <input type="text" class="form-control"></input>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-block">
                                    <label for="">Last Name</label>
                                    <input type="text" class="form-control"></input>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="input-block">
                                    <label for="">Email</label>
                                    <input type="text" class="form-control"></input>
                                </div>
                            </div>
                 
                            <div class="col-sm-12">
                                <div class="input-block textarea">
                                    <label for="">Drop your message here</label>
                                    <textarea rows="10" type="text" class="form-control"></textarea>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <button class="square-button">Send</button>
                            </div>
                        </form>

                    </div>

                </div>

                <Footer />

            </div>


        )
    }


}

export default Contact