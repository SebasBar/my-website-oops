import React from 'react'
import './Contact.css'

function Contact() {
    let status = true
    if (status) {
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
    } else {
        return (
            <figure class="Contact">
                <img class="avatar" alt="avatar" src="https://randomuser.me/api/portraits/men/88.jpg" />
                <name class="name">
                June Chapman
                </name>
                <status class="status">
                    <statusonline class="status-offline" />
                    <statustext class="status-text">
                    offline
                    </statustext>
                </status>
            </figure>
        ); 
    }

}


export default Contact;


