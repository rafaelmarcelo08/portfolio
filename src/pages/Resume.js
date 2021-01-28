import React, { Component } from 'react';

import '../styles/pages/Resume.css';
import logoPUC from '../assets/images/puc.svg';

class Resume extends Component {
    render() {
        return (
            <>

                <div id='containerResume'>

                    <h1 className='title'>Formação acadêmica</h1>

                    <div id='resume'>

                        <div id='puc-logo'>
                            <img src={logoPUC} alt='Logo PUC' />
                        </div>

                        <div>

                            <div className='course'>

                                <h3>Análise e Desenvolvimento de Sistemas</h3>
                                <h3>Período: 6</h3>
                                <h3>Noturno</h3>

                            </div>

                            <div className='btn-degree'>
                                <a href='/'
                                    target='_blank'
                                    rel="noreferrer"
                                >Diploma</a>
                            </div>

                        </div>

                    </div>

                </div>
            </>
        );
    }
}

export default Resume;