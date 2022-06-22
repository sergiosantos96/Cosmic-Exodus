import React, { useState, useEffect } from "react";
import "./EmailPopup.css";
import { ImCross } from "react-icons/im";
import { /* useMoralisQuery,  */ useNewMoralisObject } from "react-moralis";
import { useLocation, useParams } from "react-router";

function EmailPopup() {
  const [closePopup, setClosePopup] = useState(true);
  const { save } = useNewMoralisObject("NewsletterSubscriptions");
  const [errorMsg, setErrorMsg] = useState(" ");

  const [email, setEmail] = useState("");

  /*   const { data, error, isLoading } = useMoralisQuery("NewsletterSubscriptions");
   */
  /*   let emails = JSON.stringify(data, null, 2); */

  const handleChange = (e) => {
    setEmail(e.target.value.toLowerCase());
  };

  function ValidateEmail(input) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

  const saveEmail = async (e) => {
    e.preventDefault();
    if (!ValidateEmail(email)) {
      setErrorMsg("Invalid Email");
      return;
    }

    const data = {
      email: email,
    };

    save(data, {
      onSuccess: () => {
        setErrorMsg("Your email is added");
      },
      onError: () => {
        setErrorMsg("Seems like you already subscribed.");
      },
    });
  };

  if (!closePopup) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const pathname = window.location.pathname;
  console.log(pathname);

  useEffect(() => {
    if (pathname === "/giveaway") {
      setClosePopup(true);
    } else
      setTimeout(function () {
        setClosePopup(false);
      }, 30000);
  }, []);

  if (!closePopup)
    return (
      <>
        <div className="wrapper">
          <div className="popup" onClick={() => setClosePopup(true)} />
          <div className="popup__container">
            <div className="popup__title">
              Subscribe to <br /> our newsletter
            </div>
            <ImCross
              className="popup__close"
              onClick={() => setClosePopup(true)}
            />
            <form className="popup__form" onSubmit={saveEmail}>
              <input
                className="popup__input"
                placeholder="Email"
                onChange={(e) => handleChange(e)}
              />
              <button className="popup__submit" type="submit">
                Submit
              </button>
              <p id="error">{errorMsg}</p>
              <p className="popup__disclaimer">
                By clicking “submit”. you agree to be subscribed to Cosmic
                Exodus newsletter according to our
                <span className="popup__span"> privacy policy</span>.
              </p>
            </form>
          </div>
        </div>
      </>
    );
  return null;
}

export default EmailPopup;
