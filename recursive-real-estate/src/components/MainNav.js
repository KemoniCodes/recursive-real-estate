import React from 'react'
import { Link } from 'react-router-dom'
import app from "../firebase.js";





const MainNav = () => {
        return (
            
                <div className="main-nav">
                    <header>
                        <nav className="main-nav">

                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/Properties'>Properties</Link></li>
                                <li><Link to='/Agents'>Agents</Link></li>
                                <li><Link to='/Contact'>Contact</Link></li>

                                <div className="auth">
                                    <li><Link to='/SignIn'>Sign In</Link></li>
                                    <li><Link to='/Register'>Register</Link></li>
                                    <li><Link to='/SignIn'  onClick={() => app.auth().signOut()}>Log Out</Link></li>
                                </div>

            
                            </ul>

                        </nav>


                    </header>
                   
               
                    
                </div >
                
        )
    

}





export default MainNav



