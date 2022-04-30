import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import db from './firebase';

function App() {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { name, email, subject, message } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      // https://react-form-7a25e-default-rtdb.firebaseio.com

      toast.error('All the fields are mandatory');
    } else {
      const res = await fetch(
        'https://react-form-7a25e-default-rtdb.firebaseio.com/formdata.json',
        {
          method: 'POST',
          headers: {
            'content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            message,
            subject,
          }),
        }
      );
      // db.collection('Contacts').add(state);
      setState({ name: '', email: '', subject: '', message: '' });
      toast.success('Form Submitted Successfully');
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <ToastContainer position="top-center" />
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div className="contact-wrap w-100 p-lg-5 p-4">
                      <h3 className="mb-4">Send Us a message</h3>
                      <form
                        id="contact-form"
                        className="contact-form"
                        onSubmit={handleSubmit}
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={name}
                                placeholder="Name"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                value={subject}
                                placeholder="Subject"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                cols="30"
                                rows="4"
                                value={message}
                                placeholder="Message"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* RIGHT SIDE */}
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="info-wrap w-100 p-lg-5 p-4 img">
                      <h3>Contact Us</h3>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste, voluptatibus.
                      </p>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="pl-3 text">
                          <p>
                            <span>Address:</span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="pl-3 text">
                          <p>
                            <span>Address:</span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="pl-3 text">
                          <p>
                            <span>Address:</span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* RIGHT SIDE */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
