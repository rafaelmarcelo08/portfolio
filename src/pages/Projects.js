import React, { Component } from 'react';

import '../styles/pages/Projects.css';

import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import objects from '../util/Objects';
import ModelProjects from '../components/ModelProjects';

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
                            {

                                objects.map(object => {
                                    return (
                                        <ModelProjects content={object} key = {object.id}/>
                                    );
                                })

                            }
                        </Slider>

                    </div>

                </div>
            </>
        );
    }
}

export default Projects;