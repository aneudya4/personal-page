import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
        <section className="contact">
            <h2>Contact</h2>
            <div className="contact__container">
                <div className="contact__info">
                    <h3>Get In Touch</h3>
                    <p>
                        Although I'm not currently looking for any new
                        opportunities, my inbox is always open. Whether you have
                        a question or just want to say hi, I'll try my best to
                        get back to you!
                    </p>

                    <a
                        aria-label="email"
                        title="Email Client"
                        rel="noopener"
                        target="_blank"
                        href="mailto:a4aneudy@gmail.com"
                    >
                        <FaEnvelope />
                        Email me
                    </a>
                </div>
                <div className="contact__form">
                    <form>
                        <h3>Send Me a Message</h3>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe..."
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="johndoe@email.com..."
                        />
                        <label htmlFor="message">Message</label>

                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            required
                            spellCheck="false"
                        />

                        <button className="btn" type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
