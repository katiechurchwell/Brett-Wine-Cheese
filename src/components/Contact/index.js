import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ message: '' });
    const { message } = formState;
    const destination = "churchwell.catherine@gmail.com"
    const link = `mailto:${destination}&subject=Hello%20Brett&body=${message}`

    return (
        <section>
            <div className="row d-flex justify-content-center m-3">
                <h1>Contact</h1>
                <div className="col-sm-4">
                    <form action="mailto:info@w3docs.com" method="get" enctype="text/plain">
                        <div>
                            <label className="form-label" for="name">Name</label>
                            <br />
                            <input type="text" className="form-control" name="name" id="name" />
                        </div>
                        <div>
                            <label className="form-label" for="email">Email</label>
                            <br />
                            <input type="text" className="form-control" name="email" id="email" />
                        </div>
                        <div>
                            <label className="form-label">Comments</label>
                            <br />
                            <textarea name="comments" className="form-control" rows="5" cols="35"></textarea>
                        </div>
                        <div>
                            <div className="row justify-content-center mt-3">
                                <input type="submit" className="btn btn-primary m-1 w-25" name="submit" value="Send" />
                                <input type="reset" className="btn btn-primary m-1 w-25" name="reset" value="Clear Form" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;