import React from 'react'
import '../pages/Home.css'

const Footer =()=>{
    return(
        <footer className='footer'>
            <p>&copy; {new Date().getFullYear()}Archa.All rights reserved</p>
        </footer>
    );
}

export default Footer;