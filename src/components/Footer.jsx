import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-10 text-center text-white">
      <div className="flex justify-center space-x-10">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faFacebookF}/>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
         <FontAwesomeIcon icon={faTwitter}/>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
      </div>
      <p className="mt-5">© 2023 Sadi_dev. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
