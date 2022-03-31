import PageHeader from '../PageHeader/PageHeader';
import classes from './Resume.module.css';

const resumeUrl = 'https://docs.google.com/document/d/12qly1sPTGZ7KbXJPoHDUbanoOA6cijt2o7g4qfoueBE/edit?usp=sharing';

const Resume = () => {
    return (
        <div id='resume' className={classes.Resume}>
            <PageHeader title={'My Resume'} />
            <div className={classes.Link}>
            <p onClick={(e) => window.open(resumeUrl, "_blank").focus}>Click here to see my resume</p>
            </div>
        </div>
    );
}

export default Resume;