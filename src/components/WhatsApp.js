import React, { Component } from 'react';

import '../styles/components/WhatsApp.css';

import whatsappImage from '../assets/images/whatsapp.png';

class WhatsApp extends Component {
    render() {
        return (
            <>
            
                <div className='whatsApp'>

                    <a href="https://api.whatsapp.com/send?phone=5562981323296"
                        target="_blank" rel="noreferrer" >
                        <img src={whatsappImage} alt='whatsapp' />
                    </a>

                </div>

            </>
        );
    }
}

export default WhatsApp;