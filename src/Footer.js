import './App.css';

function Footer() {
  return (
    <div>
    
        <footer>
        <section class="nb-footer">
        <div class="container">
        <div class="row">
        <div class="col-md-4 col-sm-6">
            <div class="footer-single">
            <img className="logo" src="images/logo.png" alt="logo"></img> 
        

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus felis diam, vulputate in risus eu, porttitor condimentum purus. Phasellus ullamcorper, odio id feugiat bibendum.</p>
                <a href="" class="btn btn-footer">Contact Us</a>
            </div>
        </div>

        <div class="col-md-4 col-sm-6">
            <div class="footer-single useful-links">
            <div class="footer-title"><h2>Navigation</h2></div>
            <ul class="list-unstyled">
                    <li><a href="index.html">Home </a></li>
                    <li><a href="about1.html">About Us </a></li>
                    <li><a href="service1.html">Services </a></li>
                    <li><a href="portfolio1.html">Portfolio </a></li>
                    <li><a href="contact1.html">Contact Us </a></li>
            </ul>
            </div>
        </div>
        

        <div class="col-md-4 col-sm-6">
            <div class="footer-single">
                <div class="footer-title"><h2>Contact Information</h2></div>
                <address>
                    999, Holly Eiusmod Tempor, City<br/>
                    Your State, Country <br/><br/>
                    <i class="fa fa-phone"></i>  987 654 3210 <br/>
                    <i class="fa fa-envelope"></i> info@example.com<br/>
            
                </address>					
            </div>
        </div>

        </div>
        </div>
        </section>	

        <section class="nb-copyright">
        <div class="container">
        <div class="row">
        <div class="col-sm-12 copyrt xs-center">
            2021 © All Rights Reserved. <a href="">Terms & Conditions</a> | <a href="">Privacy Policy</a>
        </div>        
        </div>
        </div>
        </section>
        </footer>
    </div>
  );
}

export default Footer;