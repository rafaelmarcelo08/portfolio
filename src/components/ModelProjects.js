import React from 'react';

import '../styles/components/ModelProjects.css';

function ModelProjects(props) {

    return (
        <>
            <div className='box'>

                <header id='headerTitle'>

                    {props.content.title}

                </header>

                <main id='main'>

                    {props.content.description}

                </main>

                <footer id='footerLink'>

                    <a
                        href={props.content.link}
                        target="_blank"
                        rel="noreferrer" >
                        Veja o app
                    </a>

                </footer>

            </div>
        </>
    );
}

export default ModelProjects;