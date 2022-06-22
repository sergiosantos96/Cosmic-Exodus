import React, { useState } from "react";
import Routemap from "../../component/routemap/routemap";
import contact_banner from "../../assets/Banners/Contact_banner.png";
import mobileversion from "../../assets/Banners/Vertical_banner.png";
import { useNewMoralisObject } from "react-moralis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

function Contact() {
  const form = useNewMoralisObject("ContactUsTicket");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function validateEmail(email) {
    const validRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

  const saveObject = async () => {
    const data = {
      name,
      message,
      email,
    };
    form.save(data, {
      onSuccess: () => {
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Your form was submitted succesfully!");
      },
      onError: () => {
        toast.error(
          `This email has already been used. Contact us to troubleshoot.`
        );
      },
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (name === "" && email === "" && message === "") {
      toast.info("Please fill in all fields.");
      return;
    }
    if (validateEmail(email)) {
      saveObject();
    } else {
      toast.error(`Please enter a valid email address.`);
    }
  };
  const routes = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];
  return (
    <>
      <img
        src={contact_banner}
        alt="Contact Banner"
        className="contact__banner"
      />
      <img
        src={mobileversion}
        alt="Contact Banner"
        className="contact__mobilebanner"
      />
      <Routemap routes={routes} />
      <div className="contact">
        <h2 className="contact__title">Contact Us</h2>
        <div className="graphics__line"></div>
        <p className="contact__description">
          We really care about what you have to say, if you wish to reach out to
          us feel free to do so below!
        </p>
        <p className="contact__responsive">
          At Cosmic Exodus, accessible from cosmicexodus.finance, one of our
          main priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by Cosmic Exodus and how we use it.
        </p>
        <div className="contact__line-responsive"></div>
        <div className="contact__line"></div>
        <ToastContainer theme={"dark"} pauseOnHover={true} limit={3} />
        <form className="contact__form" method="post">
          <input
            className="contact__input"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className="contact__input"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            className="contact__message"
            type="text"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <div className="contact__flex">
            <p className="contact__info">
              By clicking “submit”. You agree to be subscribed to Cosmic Exodus
              newsletter according to our{" "}
              <a href="/privacypage">privacy policy</a>.
            </p>
            <button
              className="contact__submit"
              type="button"
              onClick={(e) => submitForm(e)}
              disabled={
                name === "" && email === "" && message === "" ? true : false
              }
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
