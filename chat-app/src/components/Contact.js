import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <figure class="Contact">
            <img class="avatar" alt="avatar" src="https://randomuser.me/api/portraits/men/88.jpg" />
            <name class="name">
            June Chapman
            </name>
            <status class="status">
                <statusonline class="status-online" />
                <statustext class="status-text">
                online
                </statustext>

            </status>

        </figure>

    );


}

export default Contact;


