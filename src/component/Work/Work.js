import classes from './Work.module.css';
import proEventPlanning from '../img/pro-event-planning.png';
import feedMeFoodFinder from '../img/feed-me-food-finder-landing-page.png';
import blogWaffle from '../img/blog-waffle.png';
import PageHeader from '../PageHeader/PageHeader.js';

const WorkCard = (liveUrl, repoUrl, img, projectName) => {
    return(
        <div className={classes.Card}>
            <h2 className={classes.CardHeader}>{projectName}</h2>
            <img src={img} alt={projectName} />
            <p className={classes.Live} onClick={(e) => window.open(liveUrl, "_blank").focus}>Live Deployment</p>
            <p className={classes.Repo} onClick={(e) => window.open(repoUrl, "_blank").focus}>Repository</p>
        </div>
    )
}

const Work = () => {
    return (
        <div>

        
        <div className={classes.Work}>
            <PageHeader title={'My Work'} />
            <div className={classes.WorkCards}>
            {WorkCard('https://shaq-pro-event-planning.herokuapp.com/','https://github.com/jhara0994/Pro-Event-Planning', proEventPlanning, 'Pro Event Planning')}
            {WorkCard('https://jesshaff.github.io/feed-me-food-finder-project-1/','https://github.com/jesshaff/feed-me-food-finder-project-1',feedMeFoodFinder,'Feed Me Food Finder')}
            {WorkCard('https://blog-waffle.herokuapp.com/','https://github.com/shaqrivera/blog-waffle',blogWaffle,'Blog Waffle')} 
            </div>
            
        </div>
        </div>
    );
}

export default Work;