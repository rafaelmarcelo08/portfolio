import React, { Component } from 'react';

import '../styles/pages/Knowledge.css';

/**Linguamge de programação */
import html from '../assets/images/technologies/html.png';
import javascript from '../assets/images/technologies/javascript.png';
import java from '../assets/images/technologies/java.png';
import typescript from '../assets/images/technologies/typescript.png';

/**Frameworks */
import reactJs from '../assets/images/technologies/reactJs.png';
import springBoot from '../assets/images/technologies/springBoot.png';
import angular from '../assets/images/technologies/angular.svg';

/**Estilização */
import css from '../assets/images/technologies/css.png';

/**Banco de dados */
import mysql from '../assets/images/technologies/mysql.png';

/**Software */
import node from '../assets/images/technologies/node.png';
import git from '../assets/images/technologies/git.png';
import github from '../assets/images/socialLogoGitHub.png';
import windows from '../assets/images/technologies/windows.png';
import ubuntu from '../assets/images/technologies/ubuntu.png';
import heidisql from '../assets/images/technologies/heidisql.png';
import apache from '../assets/images/technologies/apache.png';
import figma from '../assets/images/technologies/figma.png';
import postgres from '../assets/images/technologies/postgres.png';


class Knowledge extends Component {
    render() {
        return (
            <>
                <div id='containerKnowledge'>

                    <div className='titleKnowledge'>
                        Aqui estão algumas tecnologias que já utilizei
                    </div>

                    <div>

                        <div className='subtitle'>
                            Linguagem de programação:
                        </div>

                        <div className='technologies'>

                            <img src={html} alt='html' />
                            <img src={javascript} alt='javascript' />
                            <img src={java} alt='java' />
                            <img src={typescript} alt='typescript' />

                        </div>

                        <div className='subtitle'>
                            Frameworks:
                        </div>

                        <div className='technologies'>

                            <img src={reactJs} alt='reactJs' />
                            <img src={springBoot} alt='springBoot' />
                            <img src={angular} alt='angular' />

                        </div>

                        <div className='subtitle'>
                            Estilização:
                        </div>

                        <div className='technologies'>

                            <img src={css} alt='css' />

                        </div>

                        <div className='subtitle'>
                            Banco de dados:
                        </div>

                        <div className='technologies'>

                            <img src={mysql} alt='mysql' />

                        </div>

                        <div className='subtitle'>
                            Software:
                        </div>

                        <div className='technologies'>

                            <img src={node} alt='node' />
                            <img src={git} alt='git' />
                            <img src={windows} alt='windows' />
                            <img src={ubuntu} alt='ubuntu' />
                            <img src={github} alt='github' />
                            <img src={heidisql} alt='heidisql' />
                            <img src={apache} alt='apache' />
                            <img src={figma} alt='figma' />
                            <img src={postgres} alt='postgres' />

                        </div>

                    </div>

                </div>
            </>
        );
    }
}

export default Knowledge;