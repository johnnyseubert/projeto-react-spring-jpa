import { ReactComponent as GitHubIcon } from 'assets/img/github.svg';
import './styles.css';

export default function Navbar() {
   return (
      <header>
         <nav className="container">
            <div className="dsmovie-nav-content">
               <h1>DSMovie</h1>
               <a href="https://github.com/johnnyseubert" target="_blank" rel="noreferrer">
                  <div className="dsmovie-contact-container">
                     <GitHubIcon />
                     <p className="dsmovie-contact-link">/johnnyseubert</p>
                  </div>
               </a>
            </div>
         </nav>
      </header>
   );
} 