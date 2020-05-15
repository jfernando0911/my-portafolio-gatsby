import React from 'react';
import {Link} from 'gatsby';
// import styles from '../styles/project.module.css';
import styles from './styles/ProjectElement.module.css';

const ProjectElement = (props) => {
    return (
        <div>
            <div className={styles.projectContainer}>
                        <h4>{props.name}</h4>
                        <img src={props.image} alt="web highlighter" className={styles.projectImage}/>
                        <div>   
                        <Link to="https://www.github.com/" >Github</Link> | 
                        <Link to="https://www.github.com/">Live Demo</Link>
                        </div>
                        <p>{props.description}</p>
                    </div>

        </div>
    );
}

export default ProjectElement;
