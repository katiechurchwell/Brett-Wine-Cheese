import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        // if (e.target.name === 'email') {
        //     const isValid = validateEmail(e.target.value);
        //     console.log(isValid);
        //     if (!isValid) {
        //         setErrorMessage('Your email is invalid.');
        //     } else {
        //         if (!e.target.name.length) {
        //             setErrorMessage(`${e.target.name} is required.`);
        //         } else {
        //             setErrorMessage('');
        //         }
        //     }
        // }

        //allows the state to update with the user input if there is no error message
        if (!errorMessage) {
            //spread prevents overwriting
            setFormState({ ...formState, [e.target.name]: e.target.value })
            console.log('errorMessage', errorMessage);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1 data-testid="h1" className="m-3">Contact me</h1>
            <div className="row d-flex justify-content-center m-3">
                <div className="col-sm-4">
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" defaultValue={name} onBlur={handleChange} name="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" defaultValue={email} onBlur={handleChange} name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea rows="5" className="form-control" defaultValue={message} onBlur={handleChange} name="message" />
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;