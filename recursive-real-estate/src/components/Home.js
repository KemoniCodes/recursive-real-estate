import React from 'react'
import ContactNav from './ContactNav';
import MainNav from './MainNav'
import SearchBar from './SearchBar';
import Slideshow from './Slideshow';
import Footer from './Footer';
import Interiors from './Interiors';
import Destinantions from './Destinations';
import { Link } from 'react-router-dom'



class Home extends React.Component {
    render() {
        return (

            <div className="Home">
                <ContactNav />
                <div>
                    <h1><Link to='/'>Recursive Real Estate</Link></h1>
                    <h3>International Luxury Realty</h3>
                </div>

                <MainNav />

                <SearchBar />

                <Slideshow />

                <Destinantions />

                <Interiors />

                <Footer />



            </div>


        )
    }
}

export default Home
