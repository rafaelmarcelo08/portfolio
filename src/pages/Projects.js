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
                                href='https://consulta-cep-web.herokuapp.com/'
                                target='_blank'
                                rel="noreferrer">

                                <div className='nameProject'>
                                    <h3>CEP</h3>
                                </div>

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
