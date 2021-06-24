import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../../assets/logo.png";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} />
        <span className="help-text">
          <b>Meet</b> plus
        </span>
      </div>
      <div className="action-btn">
        <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
        <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
        <FontAwesomeIcon className="icon-block" icon={faCog} />
      </div>
    </div>
  );
};
export default Header;
