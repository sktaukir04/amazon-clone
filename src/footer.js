import React from 'react'
import './footer.css'
import instagram from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import whatsapp from "./assets/whatsapp.png";
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='footer-col'>
                        <h4>Company</h4>
                        <ul>
                            <li><a href='#'>About us</a></li>
                            <li><a href='#'>Our services</a></li>
                            <li><a href='#'>Privacy</a></li>
                            <li><a href='#'>Program</a></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>get help</h4>
                        <ul>
                            <li><a href='#'>FAQ</a></li>
                            <li><a href='#'>Shipping</a></li>
                            <li><a href='#'>Returns</a></li>
                            <li><a href='#'>Order</a></li>
                            <li><a href='#'>Payment</a></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>online shop</h4>
                        <ul>
                            <li><a href='#'>Sell on Amazon</a></li>
                            <li><a href='#'>Become an Affiliate</a></li>
                            <li><a href='#'>Advertise Your Products</a></li>
                            <li><a href='#'>Help</a></li>
                        </ul>
                    </div>
                  
                    <div className='footer-col'>
                        <h4>follow me</h4>
                        <div className='social-links'>
                            <a href="https://www.instagram.com/sktaukir04" target="_blank"><img src={instagram} width="30px" height="30px" /></a>
                            <a href="https://www.facebook.com/profile.php?id=100010066064795" target="_blank"><img src={facebook} width="30px" height="30px" /></a>
                            <a href="https://www.linkedin.com/in/shaikh-taukir-200096b15a" target="_blank"><img src={linkedin} width="30px" height="30px" /></a>
                            <a href="https://www.twitter.com/sktaukir04" target="_blank"><img src={twitter} width="30px" height="30px" /></a>

                        </div>



                    </div> <br/><br/>
                    <marquee direction="left">
                        <p className="marque">Shaikh Taukir Ahmad --shaikhtaukir0212@gmail.com-- © 2018</p>
                    </marquee>
                </div>



            </div>
        </div>
    )
}

export default Footer



{/* <footer className='footer'>

                    <ul class="list-inline">
                        <div className='mainfooter'>Sections</div>
                        <li className="list-inline-item"><a href="#">Home</a></li>
                        <li className="list-inline-item"><a href="#">Services</a></li>
                        <li className="list-inline-item"><a href="#">About</a></li>
                        <li className="list-inline-item"><a href="#">Terms</a></li>
                        <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                    </ul>
                    <div className='mainfooter'>Social</div>
                    <div class="social">
                        <a href="#"><i className="icon instagram"><img src={instagram} width="30px" height="30px" alt="Instagram" /></i></a>
                        <a href="#"><i className="icon snapchat"><img src={twitter} width="30px" height="30px" alt="twitter" /></i></a>
                        <a href="#"><i className="icon twitter"><img src={facebook} width="30px" height="30px" alt="facebook" /></i></a>
                        <a href="#"><i className="icon facebook"><img src={linkedin} width="30px" height="30px" alt="linkedin" /></i></a>
                        <a href="#"><i className="icon facebook"><img src={whatsapp} width="30px" height="30px" alt="whatsapp" /></i></a>
                    </div>
                    <p class="copyright">Company Name © 2018</p>
                </footer> */}