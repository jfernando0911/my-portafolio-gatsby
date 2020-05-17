import React from 'react';
import Container from '../components/Container';
import contactPage from '../styles/contact.module.css';

const contact = () => {
    return (
        <div>
            <Container>

            
                <form className={contactPage.container} action="https://formspree.io/jfernando0911@gmail.com" method="POST">
                    <div className={contactPage.name}>
                        <p>Name</p>
                        <input type="text" placeholder="Please enter your name" name="name"/>
                    </div>
                    <div className={contactPage.email}>
                        <p>Email</p>
                        <input type="email" placeholder="Please enter your email" name="_replyto"/>
                    </div>
                    <div className={contactPage.message}>
                        <p>Message</p>
                        <textarea name="message">

                        </textarea>
                    </div>
                    <div>
                        <input type="submit" value="Send"/>
                    </div>

                </form>  

            </Container>
        </div>
    );
}

export default contact;
