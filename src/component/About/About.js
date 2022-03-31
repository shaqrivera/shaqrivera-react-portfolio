import classes from './About.module.css';
import PageHeader from '../PageHeader/PageHeader.js';
import Selfie from '../img/selfie.jpeg';

const About = () => {
    return (
        <div id='about' className={classes.AboutMe}>
            <PageHeader title={"About Me"} />
            <div className={classes.Container}>
                <div className={classes.Portrait}>
                    <img className={classes.Selfie} src={Selfie} alt ="Shaquille Rivera"/>
                </div>
                <div className={classes.Text}>
                    <h2>Welcome! My name is Shaquille Rivera.</h2>
                    <p>
                    I am a Full Stack Developer based in Alpharetta, GA. In 2022, I gained a certificate in Full Stack development from Georgia Institute of Technology. Before starting my journey in development, I previously worked in real estate investing, food service, and hospitality. Both of my parents are 20+ year US Army veterans.
                     In his civilian career, my father was a Full Stack Developer and a Senior Project Manager, which began my interest in coding and developing. A few of my interests outside of coding are real estate investing, bartending, and making music. 
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default About;