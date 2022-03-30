import Navlinks from './Navlinks';
import classes from './Navbar.module.css';

const MobileNav = () => {
    return (
        <nav className={classes.MobileNav}>
            <Navlinks />
        </nav>
    );
}

export default MobileNav;