import classes from './Home.module.css';
import chip from '../img/chip.svg';
import network from '../img/network.svg'

const Home = () => {
    return (
        <div className={classes.Home}>
            <div className={classes.Container}>
                <h1>Shaquille Rivera</h1>
                <h1 className={classes.Developer}>Full Stack Developer</h1>
            </div>
            <img className={classes.Chip} src={chip} alt="microchip"></img>
            <img className={classes.Network} src={network} alt="network spiral"></img>
        </div>
    );
}

export default Home;