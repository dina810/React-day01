import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBlender } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

class ContactMe extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Get IN Touch",
    };
  }

  render() {
    return (
      <footer className="d-flex flex-column text-white Skills">
        <h5 className="offset-1 my-4">{this.state.title}</h5>
        <div className="d-flex offset-1">
          <div className="d-flex flex-column col-3">
            <div className="my-2">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              <span>dina.reda@gmail10.com</span>
            </div>
            <div className="my-2">
              <FontAwesomeIcon icon={faBlender}></FontAwesomeIcon>
              <span> +2010-201-38-407</span>
            </div>
          </div>
          <button className="btn ContactMe text-white col-3 mx-5">
            Contact Me
          </button>
          <div className="d-flex flex-column col-3">
            <div className="d-flex mx-5">
              <FontAwesomeIcon
                className="mx-3"
                size="2x"
                icon={faFacebookF}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="mx-3"
                size="2x"
                icon={faTwitter}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="mx-3"
                size="2x"
                icon={faLinkedin}
              ></FontAwesomeIcon>
            </div>
            <div className="offset-3 my-3">
              <p>Copyright &copy; 2022 EG</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default ContactMe;
