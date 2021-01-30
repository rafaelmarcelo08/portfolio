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
                       Você não possui nenhum projeto ainda.
                    </div>

                </div>

            </>
        );
    }
}

export default Projects;