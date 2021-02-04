import React, { Component } from 'react';

import '../styles/pages/Projects.css';

class Projects extends Component {
    render() {
        return (
            <>

                <div id='containerProjects'>

                    <div className='titleProjects'>
                        Meus Projetos
                    </div>

                    <div className='boxProjects'>

                        <div className='box'>

                            <a
                                href='/'
                                target='_blank'
                                rel="noreferrer">
                            </a>

                        </div>

                        <div className='boxTitle'>
                            Consulta CEP - React JS
                        </div>

                    </div>

                </div>
            </>
        );
    }
}

export default Projects;