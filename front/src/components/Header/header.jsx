import React from 'react'
import '@components/Header/header.scss'
import { argentBankLogo } from '@assets/index.jsx'
import { Link } from 'react-router-dom'

function Header () {

    return (

        <header>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            </nav>    
        </header>

    )
}

export default Header