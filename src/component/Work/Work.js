import classes from './Work.module.css';
import proEventPlanning from '../img/pro-event-planning.png';
import feedMeFoodFinder from '../img/feed-me-food-finder-landing-page.png';
import blogWaffle from '../img/blog-waffle.png';
import artStoreScreenshot from '../img/art-store-screenshot.png'
import PageHeader from '../PageHeader/PageHeader.js';

const WorkCard = (description, liveUrl, repoUrl, img, projectName, technologies) => {
    return(
        <div className={classes.Card}>
            <h2 className={classes.CardHeader}>{projectName}</h2>
            <img src={img} alt={projectName} />
            <p className={classes.Description}>{description}</p>
            <div className={classes.TechnologiesContainer}>
                <h2>Technologies</h2>
                <ul className={classes.TechnologiesContainer}>
                {technologies.map((technology, index) => <li key={index} className={classes.Technology}>{technology}</li>)}
              </ul>  
            </div>
            
            <p className={classes.Live} onClick={(e) => window.open(liveUrl, "_blank").focus}>Live Deployment</p>
            <p className={classes.Repo} onClick={(e) => window.open(repoUrl, "_blank").focus}>Repository</p>
        </div>
    )
}

const Work = () => {
    return (
        <div id='work'>

        
        <div className={classes.Work}>
            <PageHeader title={'My Work'} />
            <div className={classes.WorkCards}>
            {WorkCard(
                'An e-commerce website that allows users to sell their artwork. Accepts payments through the Stripe platform.',
                'https://mern-art-store.herokuapp.com/',
                'https://github.com/shaqrivera/The-Art-Store',
                artStoreScreenshot,
                'The Art Store',
                ['React.js', 'Context API', 'GraphQL', 'MongoDB', 'Stripe', 'Cloudinary', 'JWT', 'react-bootstrap']

            )}
            {WorkCard(
                'An event planning app that allows users to create events, and rsvp to created events. Once a user has created an RSVP to an event, they will receive weather updates by email.',
                'https://shaq-pro-event-planning.herokuapp.com/',
                'https://github.com/shaqrivera/Pro-Event-Planning',
                 proEventPlanning,
                'Pro Event Planning',
                ['Express.js', 'Handlebars.js', 'Sequelize', 'MySQL', 'Nodemailer', 'node-cron']
                )}
            {WorkCard(
                `A web application to help users decide what to eat. Generates a random restaurant or recipe based on users' input.`,
                'https://jesshaff.github.io/feed-me-food-finder-project-1/',
                'https://github.com/shaqrivera/feed-me-food-finder',
                feedMeFoodFinder,
                'Feed Me Food Finder',
                ['JavaScript', 'JQuery', 'HTML5', 'CSS', 'Bulma']
                )}
            {WorkCard(
                `A blog where users can post their thoughts, and add comments to other users' thoughts.`,
                'https://blog-waffle.herokuapp.com/',
                'https://github.com/shaqrivera/blog-waffle',
                blogWaffle,
                'Blog Waffle',
                ['Express.js', 'Handlebars.js', 'MySQL', 'Bootstrap']
                )} 
            </div>
            
        </div>
        </div>
    );
}

export default Work;