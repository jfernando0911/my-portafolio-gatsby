import React from 'react';
// import styles from '../styles/project.module.css';
import styles from './styles/ProjectElement.module.css';

const ProjectElement = (props) => {
    return (
        <div>
            <div className={styles.projectContainer}>
                <h4>{props.name}</h4>
                <img src={props.image} alt="project image" className={styles.projectImage} />
                <div>
                    <a href="https://www.github.com/" target="_blank">{props.github}</a> 
                    <a href="https://www.github.com/" target="_blank">{props.livedemo}</a>
                </div>
                <p>{props.description}</p>
            </div>

        </div>
    );
}

export default ProjectElement;
