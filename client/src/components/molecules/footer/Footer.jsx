
import {Links} from 'src/utilities/Links'
import { NavLink as Link } from 'react-router-dom'
import Instagram from 'src/icons/svg/Instagram';
import Twitter from 'src/icons/svg/Twitter';
import Youtube from 'src/icons/svg/Youtube';
import { FooterWrapper, FooterLink } from 'src/components/molecules/footer/Style';
import app from 'src/icons/img/app-store.png';
import play from 'src/icons/img/google-play.png';


const Footer = () => {
  return (
    <FooterWrapper>
        <div className="footer-top space-around">
            <div className="footer-links">
                <p>Company</p>
                <ul>
                    { Links.map((LinkData) => LinkData.Company?.map((link, index) => ( <li key={index}> <FooterLink to={link.to}> {link.name} </FooterLink></li>)))}
                </ul>
            </div>

            <div className="footer-links">
                <p>Support</p>
                <ul>
                    { Links.map((LinkData) => LinkData.Support?.map((link, index) => ( <li key={index}> <FooterLink  to={link.to}> {link.name} </FooterLink></li>)))}
                </ul>
            </div>

            <div className="footer-links">
                <p>Legal</p>
                <ul>
                    { Links.map((LinkData) => LinkData.Legal?.map((link, index) => ( <li key={index}> <FooterLink  to={link.to}> {link.name} </FooterLink></li>)))}
                </ul>
            </div>
            <div className="footer-links">
                <p>Install App</p>
                <Link to = '/'><img src={ play } alt="Google play link" /></Link>  <br />
                <Link to = '/'><img src={ app } alt="App Store Link" /></Link>
            </div>
        </div>
        <div className="footer-bottom space-between">
            <div className="copy">
                <span>
                    &copy; 2023 LILIES. All rights reserved
                </span>
            </div>
            <div className="socials space-around">
                <div>< Instagram /></div>
                <div>< Twitter /></div>
               <div>< Youtube /></div>
               
            </div>
        </div>
    </FooterWrapper >
  )
}

export default Footer