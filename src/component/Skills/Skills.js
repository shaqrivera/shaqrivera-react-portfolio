import classes from './Skills.module.css';

const Skills = () => {
    return (
    <div id='skills' className={classes.Skills}>
        {/* <PageHeader title={'Skills'} /> */}
        <div className={classes.PageHeader}>
            <h1>
                Skills
            </h1>
        </div>
        <div className={classes.Container}>
           <div className={classes.List}>
               <ul>
                   <li className={classes.ListHead}>
                       Front End Skills
                   </li>
                   <li>
                       HTML5 - CSS - Javascript
                   </li>
                   <li>
                       React - JQuery - Bootstrap 
                   </li>
               </ul>
               </div>
               <div className={classes.List}>
                <ul>
                    <li className={classes.ListHead}>
                        Back End Skills
                    </li>
                    <li>
                        MySQL - MongoDB - GraphQL
                    </li>
                    <li>
                        Express - Apollo - Handlebars - Node.js
                    </li>
                </ul>
               </div>  
        </div>
    </div>
        );
}

export default Skills;