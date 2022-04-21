import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_drczmsl', 'contact_form', form.current, 'JWzbpZeZhzWffvdSx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact" class="contact">
    <div class="container">
        <div class="row text-center">
            <h1 class="display-3 fw-bold text-capitalize">Get Started</h1>
            <div class="heading-line"></div>
            <p class="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptate magnam
                doloremque.</p>
        </div>

        {/* <!-- Contact content --> */}
        <div class="row text-white">
            <div class="col-12 col-lg-6 gradient shadow p-3">
                <div class="cta-info w-100">
                    <h4 class="display-4 fw-bold">100% Satisfaction Guaranteed</h4>
                    <p class="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias optio
                        minima, tempore architecto sint ipsam dolore tempora facere laboriosam corrupti!</p>
                    <h3 class="display-3--brief">What will be the next step?</h3>

                    <ul class="cta-info__list">
                    <i class="fa fa-check" aria-hidden="true"></i><li>I'll prepare the proposal.</li>
                    <i class="fa fa-check" aria-hidden="true"></i><li>we'll discuss it together.</li>
                    <i class="fa fa-check" aria-hidden="true"></i><li>let's start the discussion.</li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-lg-6 bg-white shadow p-3">
                <div class="form w-100 pb-2">
                    <h4 class="display-3--title mb-5">start your project</h4>
                    <form ref={form} onSubmit={sendEmail} class="row">
                        <div class="mb-3 col-lg-6 col-md-6">
                            <input type="text" placeholder="Name" name="user_name" id="inputFirstName"
                                class="form-control shadow form-control-lg" required/>
                        </div>
                        <div class="mb-3 col-lg-6 col-md-6">
                            <input type="text" placeholder="Subject" name="user_subject" id="inputLastName"
                                class="form-control shadow form-control-lg" required/>
                        </div>
                        <div class="mb-3 col-lg-12">
                            <input type="email" placeholder="Email Address" name="user_email"
                                class="form-control shadow form-control-lg" required/>
                        </div>
                        <div class="mb-3 col-lg-12">
                            <textarea name="message" id="message" placeholder="Message" rows="8"
                                class="form-control shadow form-control-lg" required></textarea>
                        </div>
                        <div class="text-center d-grid mt-1">
                            <button type="button submit" value='Send' class="btn btn-primary rounded-pill pt-3 pb-3">
                                submit
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default ContactUs