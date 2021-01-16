import React, { Component } from 'react';

import '../styles/pages/Home.css';

import NavBar from '../components/NavBar';
import templateHome from '../assets/images/templateHome.png';
import rocketHome from '../assets/images/rocketLogo.png';
import About from './About';


class Home extends Component {
    render() {
        return (
            <>
                <NavBar />

                <div id='containerHome'>

                    <div className='containerImagesHome'>
                        <img className='formatImagesHome' src={templateHome} alt='templateHome' />
                    </div>

                    <div id='containerWelcomeFormat'>

                        <div className='textWelcome'>
                            <p>Olá, <br /> eu sou<span> Rafael Marcelo</span>,
                            desenvolvedor <span className='fullstack'> fullStack</span>.</p>
                        </div>

                        <div className='btn-git'>
                            <a href='https://github.com/rafaelmarcelo08' target='_blank' rel="noreferrer">github</a>
                        </div>

                    </div>

                    <div className='containerImagesHome second'>
                        <img className='formatImagesHome ' src={rocketHome} alt='rocketHome' />
                    </div>

                </div>

                <About />
            </>
    
        );
    }
}

export default Home;