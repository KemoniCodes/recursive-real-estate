import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class MainNav extends Component {
    render() {
        return (
            <div className="main-nav">
               <header>
                <nav className="main-nav">
                   
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/Properties'>Properties</Link></li>
                            <li><Link to ='/Agents'>Agents</Link></li>
                            <li><Link to ='/Contact'>Contact</Link></li>

                            <div className="auth">
                                <li><Link to='/Sign In'>Sign In</Link></li>
                                <li><Link to='/Register'>Register</Link></li>
                            </div>
                        </ul>
                   
                </nav>

      </header>



            </div >

        )
    }

}





export default MainNav



