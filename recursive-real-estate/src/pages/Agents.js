import React from 'react'
import ContactNav from '../components/ContactNav'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'


class Agents extends React.Component {
    render() {
        return(
            <div className="agents-page">
                <ContactNav />
                <MainNav />
                <Footer />


            </div>


        )
    }


}

export default Agents