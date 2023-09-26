import "react-responsive-modal/styles.css";

import { Modal } from "react-responsive-modal";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";


const CustomForm = ({ status, message, onValidated }) => {
  const [open, setOpen] = useState(true);
  const onCloseModal = () => setOpen(false);
  const [state, setState] = useState();
  const [emailstate, setEmailState] = useState();
  const [postcodestate, setPostCodeState] = useState();
  const [agreestate, setAgreeState] = useState();
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  let email, postcode;
  var pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  const submit = () => {
    if (email.value === "" || postcode.value === "") {
      setState("Fields are required");
      return;
    } else if (!pattern.test(email.value)) {
      setState("");
      setEmailState("Please enter valid email address.");
      return;
    } else if (postcode.value < 6) {
      setState("");
      setEmailState("");
      setPostCodeState("Please add postcode at least 6 charachter");
      return;
    } else if (agree == false) {
      setState("");
      setEmailState("");
      setPostCodeState("");
      setAgreeState("Please indicate that you accept the Terms and Conditions");
      return;
    } else {
      setAgreeState("");
      setState("");
      setEmailState("");
      setPostCodeState("");
    }

    email &&
      postcode &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,

        POSTCODE: postcode.value,
      });
  };

  
  useEffect(() => {
    if (status == "success") {
      setOpen(false);
    }
  }, [status]);


  return (
    <Modal open={open} showCloseIcon={false} center onClose={onCloseModal}>
      <div className="modal1 homepup getstart-popup" id="subscribepopup">
        <div className="modal-dialog1 modal-lg">
          <div className="modal-content1">
            <button type="button" onClick={onCloseModal}>
              <Image
                src="/images/vendoricon4.png"
                height={50}
                width={50}
                alt=""
              />
            </button>

            <div className="modal-body">
              <div className="popupvector">
                <Image src="/images/logo.svg" height={75} width={154} alt="" />
              </div>
              <div className="popuptxt">
                <h2>Subscribe</h2>
                <p>
                  Join Our Waitlist to receive free delivery, BBQ Grills and
                  many more surprises for the first 500 subscribers.
                </p>
              </div>

              <div className="newsletter-oter">
                {state ? <div className="alert alert-danger">{state}</div> : ""}
                {status === "sending" && (
                  <div className="customFormSending">sending...</div>
                )}
                {state ? (
                  ""
                ) : (
                  <div>
                    {status === "error" && (
                      <div
                        className="customFormError"
                        dangerouslySetInnerHTML={{ __html: message }}
                      />
                    )}{" "}
                  </div>
                )}

                {state ? (
                  ""
                ) : (
                  <div>
                    {status === "success" && (
                      <div
                        className="customFormSuccess"
                        dangerouslySetInnerHTML={{ __html: message }}
                      />
                    )}
                  </div>
                )}

                <input
                  className="customInput"
                  ref={(node) => (email = node)}
                  type="email"
                  placeholder="Enter your email"
                  tabIndex="1"
                />
                {emailstate ? <div>{emailstate}</div> : ""}
                <input
                  className="customInput"
                  ref={(node) => (postcode = node)}
                  type="text"
                  tabIndex="1"
                  placeholder="Post Code"
                />
                {postcodestate ? <div>{postcodestate}</div> : ""}
                <label className="custom-chkbox">
                  I agree to terms of services and privacy policy
                  <input
                    type="checkbox"
                    name="checkagree"
                    id="agree"
                    onChange={checkboxHandler}
                  />
                  <span className="checkmark"></span>
                </label>
                {agreestate ? <div>{agreestate}</div> : ""}
                <button className="bttn customButton" onClick={submit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CustomForm;
