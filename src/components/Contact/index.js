import React, { useState } from 'react';

function ContactForm() {
    const destination = "churchwell.catherine@gmail.com"
    const link = `mailto:${destination}`

    return (
        <section>
            <div className="row d-flex justify-content-center m-3">
                <h1>Contact</h1>
                <div className="col-sm-4">
                    <form>
                        <div>
                            <label className="form-label" for="name">Name</label>
                            <br />
                            <input type="text" className="form-control" name="name" id="name" />
                        </div>
                        <div>
                            <label className="form-label">Comments</label>
                            <br />
                            <textarea name="comments" className="form-control" rows="5" cols="35"></textarea>
                        </div>
                        <div>
                            <div className="row justify-content-center mt-3">
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