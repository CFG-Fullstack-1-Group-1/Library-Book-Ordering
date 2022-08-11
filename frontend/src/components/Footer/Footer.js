import React from 'react';
import './Footer.css';
import whitelogo from '../../../static/images/whitelogo.png';

function Footer() {
    return (

        <div className='footer-container'>

            <section className='what-we-do'>
               
            </section>
        
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-items">
                    <img src={whitelogo} alt="whitelogo" className="footer-whitelogo"/>
                        <p className="logo-tagline">
                            Library orders. simplified. 
                        </p>
                            <h2>What we do?</h2>
                            <p>Insert text about Requisit here hello hello hello hello hello </p>
                        </div>

                        <div className="footer-items">
                            <h2>Contact Us</h2>
                            <p>12345678910</p>
                            <p>hello@requisit.com</p>
                            <p>123 Road, London, L1 CGF4</p>
                        </div>
                </div>
                    <div className="footer-link-wrapper">

                        <div className="footer-items">
                            <h2>Need Help?</h2>
                            <p>Technical Support</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>

                        <div className="footer-items">
                            <h2>About Us</h2>
                            <p>How it works</p>
                            <p>Careers</p>
                            <p>Investors</p>
                            <p>Terms of Service</p>
                        </div>

                    </div>
            </div>
            <section className="footer-copyright">
                    <div className="copyright-wrap">
                        <div className="copyright-icons">
                            <small className='website-rights'>
                                Requisit © 2022 by Eleanor C-M., Anna S-F., Margalida B., Mariam H. 
                            </small>
                        </div>
                        <div className="more-info">
                            <p>Privacy |  T&Cs | Accessibility</p>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Footer
