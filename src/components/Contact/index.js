import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const FORM_ENDPOINT = "mailto:churchwellcatherine@gmail.com";

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="get"
            enctype="text/plain">
            <h1 data-testid="h1" className="m-3">Contact me</h1>
            <div className="row d-flex justify-content-center m-3">
                <div className="col-sm-4">
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" defaultValue={name} name="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" defaultValue={email} name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea rows="5" className="form-control" defaultValue={message} name="message" />
                        </div>
                        <button type="submit" value="Send" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </form>
    )
}

export default ContactForm;