import React, { Component } from 'react';

import '../styles/components/NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div id='container-navbar'>

            <input type='checkbox' id='btn_menu' />
            <label for='btn_menu'> &#9776;</label>
    
            <nav>
    
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Sobre mim</a></li>
                    <li><a href="/">Resumo</a></li>
                    <li><a href="/">Conhecimentos</a></li>
                    <li><a href="/">Contato</a></li>
                </ul>
    
    
    
            </nav>
    
    
        </div>

        );
    }
}

export default NavBar;