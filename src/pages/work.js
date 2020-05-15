import React from 'react';
import Container from '../components/Container';
// import contactPage from '../styles/contact.module.css';
import styles from '../styles/projects.module.css';
import image1 from '../../static/web_highlighter_extension.png';
import image2 from '../../static/heart_rate_alert_app.png';
import image3 from '../../static/cprogramminglogo.png';
import image4 from '../../static/reactTodoList.png';
import image5 from '../../static/yoga_studio.png';
import image6 from '../../static/shopping_list.png';
import image7 from '../../static/ArtGalleryLayout.png';
import image8 from '../../static/ball_bouncing_animation.png';
import image9 from '../../static/MagazineLayout.png';
// import {Link} from 'gatsby';
import ProjectElement from '../components/ProjectElement';

const aboutPage = () => {
    return (
        
            <Container>
                <div className={styles.container}>
                    {/* <div className={styles.projectContainer}>
                        <h4>Project Name</h4>
                        <img src={image1} alt="web highlighter" className={styles.projectImage}/>
                        <div>   
                        <Link to="https://www.github.com/" >Github</Link> | 
                        <Link to="https://www.github.com/">Live Demo</Link>
                        </div>
                        <p>tiam aliquam nisi sit amet ante condimentum, condimentum</p>
                    </div> */}

                    <ProjectElement name={"Web Highlighter"} image={image1} description={"Hello world"} />
                    <ProjectElement name={"Heart Rate Alert"} image={image2} description={"Hello world"} />
                    <ProjectElement name={"C programs"} image={image3} description={'It\'s a set of c programs from university' } />
                    <ProjectElement name={"ReactJS Todo List"} image={image4} description={'It\'s a todo list made esentially with reactjs' } />
                    <ProjectElement name={"Yoga Studio Website"} image={image5} description={'It\'s a sample yoga studio website' } />
                    <ProjectElement name={"Shopping List"} image={image6} description={'Tehcnologies: Vanilla Javascript, HTML5, javascript' } />
                    <ProjectElement name={"Art Gallery Layout"} image={image7} description={'Tehcnologies: Vanilla Javascript, HTML5, SCSS' } />
                    <ProjectElement name={"Ball bouncing animation"} image={image8} description={'Tehcnologies: Vanilla Javascript, HTML5, SCSS' } />
                    <ProjectElement name={"Magazine Layout"} image={image9} description={'Tehcnologies: Vanilla Javascript, HTML5, SCSS' } />

                    
                </div>  

                


            </Container>
        
    );
}

export default aboutPage;
