import React from 'react';
import Container from '../components/Container';
import contactPage from '../styles/contact.module.css';

const contact = () => {
    return (
        <div>
            <Container>
                <div className={contactPage.container}>
                    <div>
                        <p>Name</p>
                        <input type="text" placeholder="Please enter your name"/>
                    </div>
                    <div>
                        <p>Email</p>
                        <input type="email" placeholder="Please enter your email"/>
                    </div>
                    <div>
                        <p>Message</p>
                        <textarea>

                        </textarea>
                    </div>
                </div>  

            </Container>
        </div>
    );
}

export default contact;
