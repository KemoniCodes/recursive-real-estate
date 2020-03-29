import React from 'react'
import '../scss/contact-page.scss'
import { Link } from 'react-router-dom'
import ContactNav from '../components/ContactNav'
import MainNav from '../components/MainNav'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'


class Contact extends React.Component {
    render() {
        return(
            <div className="contact-page">
                   <ContactNav />
                <div>
                    <h1><Link to='/'>Recursive Real Estate</Link></h1>
                    <h3>International Luxury Realty</h3>
                </div>
                <MainNav />
                <SearchBar />
                <Footer />


            </div>


        )
    }


}

export default Contact