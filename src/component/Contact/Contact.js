import classes from './Contact.module.css';
import PageHeader from '../PageHeader/PageHeader.js';
import {FaGithub, FaLinkedin, FaPhoneSquareAlt} from 'react-icons/fa';
import {MdAlternateEmail} from 'react-icons/md';

const Contact = () => {
    return (
        <div className={classes.Contact}>
            <PageHeader title={'Contact Me'}/>
            <div className={classes.Links}>
                <div className={classes.Link}>
                    <FaGithub color='white' size='40px'/>
                    <p onClick={(e) => window.open('https://github.com/shaqrivera', "_blank").focus}>Email Me</p>
                </div>
                <div className={classes.Link}>
                    <FaLinkedin color='white' size='40px'/>
                    <p onClick={(e) => window.open('https://www.linkedin.com/in/shaquille-rivera-b18b11150/', "_blank").focus}>LinkedIn</p>
                </div>
                <div className={classes.Link}>
                    <MdAlternateEmail color='white' size='40px'/>
                    <a href='mailto:shaq.rivera@gmail.com'>shaq.rivera@gmail.com</a>
                </div>
                <div className={classes.Link}>
                    <FaPhoneSquareAlt color='white' size='40px'/>
                    <a href='tel:4045942958'>(404)594-2958</a>
                </div>   
            </div>

            
        </div>
    );
}

export default Contact;