import React, { useState } from "react";
import contact from '../img/contact.png'

const Contact = () => {

  const [msg, setMsg] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value

    setMsg({...msg, [name]:value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {name, email, message} = msg;
    try {
      const res = await fetch('/message', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, message
        })
      })
      console.log(res.status);
      if(res.status === 400 || !res) {
        window.alert('Message not sent')
      } else {
        window.alert('Message sent');
        setMsg({
          name: '',
          email: '',
          message: ''
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Any <b>Questions?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <img src={contact} alt="Contact" className="w-55" />
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit} method="POST">
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Your Name
                  </label>
                  <input
                    type="name"
                    class="form-control"
                    id="name"
                    placeholder="John Doe"
                    name="name"
                    value={msg.name}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="name@example.com"
                    name="email"
                    value={msg.email}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">
                    Your Message
                  </label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="5"
                    placeholder="Write here..."
                    name="message"
                    value={msg.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">Send Message <i className="fa fa-paper-plane ms-2" /></button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
