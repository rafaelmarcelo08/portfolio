import React, { Component } from 'react';

import '../styles/pages/About.css';

import studyAbout from '../assets/images/studyAbout.png';
import CurriculoRafaelMarcelo from '../assets/curriculo/CurriculoRafaelMarcelo.pdf';

class About extends Component {
    render() {
        return (
            <>
                <div id='containerAbout'>

                    <div className='imageAbout'>
                        <img src={studyAbout} alt='stydy' />
                    </div>

                    <div id='conatainerAboutMe'>

                        <div className='titleAboutMe'>
                            <h3>
                                Sobre mim
                        </h3>
                        </div>

                        <div className='meStory'>

                            <p>
                                Bem-vindo nessa seção caro leitor, aqui falarei um pouco sobre mim. ok ? <br />
                            Então.. <br />Eu <strong>Rafael Marcelo</strong> sou fanático por tecnologias,
                            e tenho como objetivo construir uma carreira em desenvolvimento web, mobile e desktop,
                            com habilidade em Java, Javascript e PHP.
                            </p>

                        </div>

                        <div className='myPortfolio'>
                            <span>Segue meu currículo logo abaixo:</span>
                        </div>

                        <div className='styleButton'>

                            <a
                                href={CurriculoRafaelMarcelo}
                                target='_blank'
                                rel="noreferrer">Meu currículo
                            </a>
                        </div>

                    </div>

                </div>
            </>
        );
    }
}

export default About;