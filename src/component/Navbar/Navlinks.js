import {motion} from 'framer-motion';

const Navlinks = (props) => {
    const from = {opacity:0, y: 50}
    const to = {opacity:1, y: 0}

    const scrollTo = (elementId) => {
        window.location.hash = elementId
        const section = document.getElementById(elementId)
        const x = section.offsetLeft
        const y = section.offsetTop - 80
        window.scrollTo(x,y)
    }

    return (
        <ul>
            <motion.li
            initial = {from}
            animate = {to}
             onClick={()=>props.mobile && props.closeMenu()}>
                <a onClick={() => scrollTo('home')}>Home</a>
            </motion.li>
            <motion.li
            initial = {from}
            animate = {to}
            transition = {{delay: .1}}
            onClick={()=>props.mobile && props.closeMenu()}>
                <a onClick={() => scrollTo('about')}>About Me</a>
            </motion.li>
            <motion.li 
            initial = {from}
            animate = {to}
            transition = {{delay: .2}}
            onClick={()=>props.mobile && props.closeMenu()}>
                <a onClick={() => scrollTo('skills')}>Skills</a>
            </motion.li>
            <motion.li 
            initial = {from}
            animate = {to}
            transition = {{delay: .3}}
            onClick={()=>props.mobile && props.closeMenu()}>
                <a onClick={() => scrollTo('work')}>My Work</a>
            </motion.li>
            <motion.li 
            initial = {from}
            animate = {to}
            transition = {{delay: .4}}
            onClick={()=>props.mobile && props.closeMenu()}>
                <a onClick={() => scrollTo('resume')}>Resume</a>
            </motion.li>
            <motion.li 
            initial = {from}
            animate = {to}
            transition = {{delay: .5}}
            onClick={()=>props.mobile && props.closeMenu()}>
                <a onClick={() => scrollTo('contact')}>Contact Me</a>
            </motion.li>
        </ul>
    );
}

export default Navlinks;