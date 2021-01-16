import React, { Component } from 'react';

import '../styles/components/NavBar.css';
import rocketLogo from '../assets/images/rocketLogo.png';

class NavBar extends Component {
    render() {
        return (
            <>
                <div id='container-navbar'>

                    <div id='logo'>
                        <img src={rocketLogo} alt='Logo' />
                        <label>Rocket<span className='dev'>Dev</span></label>
                    </div>

                    <div className='control-menu'>

                        <nav>

                            <input type='checkbox' id='check-btn' />
                            <label for='check-btn' className='btn-menu'>&#9776;</label>

                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Sobre mim</a></li>
                                <li><a href="/">Resumo</a></li>
                                <li><a href="/">Conhecimentos</a></li>
                                <li><a href="/">Contato</a></li>
                            </ul>

                        </nav>

                    </div>
                    
                </div>
            </>
        );
    }
}

export default NavBar;