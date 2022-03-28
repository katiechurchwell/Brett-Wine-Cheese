import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const destination = "churchwell.catherine@gmail.com"
    const link = `mailto:${destination}`
    const [formState, setFormState] = useState({ name: '', email: '', comments: '' });
    const { name, email, comments } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.name.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }

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
            <div className="row d-flex justify-content-center m-3">
                <h1>Contact</h1>
                <div className="col-sm-4">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label
                                className="form-label"
                                for="name">Name</label>
                            <br />
                            <input
                                name="name"
                                type="text"
                                className="form-control"
                                defaultValue={name}
                                id="name"
                                onBlur={handleChange} />
                        </div>
                        <div>
                            <label className="form-label" for="email">Email</label>
                            <br />
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                defaultValue={email}
                                id="email"
                                onBlur={handleChange} />
                        </div>
                        <div>
                            <label className="form-label">Comments</label>
                            <br />
                            <textarea
                                name="comments"
                                className="form-control"
                                defaultValue={comments}
                                rows="5"
                                cols="35"
                                onBlur={handleChange}></textarea>
                        </div>
                        <div>
                            <div className="row justify-content-center mt-3">
                                {errorMessage && (
                                    <div class="alert alert-danger" role="alert">
                                        {errorMessage}
                                    </div>
                                )}
                                <a href={link}><input type="submit" className="btn btn-primary m-1 w-25" name="submit" value="Send" /></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;