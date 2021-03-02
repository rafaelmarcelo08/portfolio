import React, { Component } from 'react';

import '../styles/pages/Projects.css';

import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Projects extends Component {
    render() {


        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };


        return (
            <>

                <div id='containerProjects'>

                    <div className='titleProjects'>

                        <label>Meus Projetos</label>

                    </div>

                    <div className='boxProjects'>
                        
                        <Slider {...settings}>

                            <div className='box'>
                                <h3>1</h3>
                            </div>

                            <div className='box'>
                                <h3>2</h3>
                            </div>

                        </Slider>

                    </div>

                </div>
            </>
        );
    }
}

export default Projects;
