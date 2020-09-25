import React, {Component} from 'react';

class Navbar extends Component {
render(){
  return (
	<div>
	  <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <a className="navbar-brand logo-image" href="#header"><img src="images/logo_muskan.png" alt="alternative"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#header">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle page-scroll" href="#about" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">About us</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#whoweare"><span className="item-text">Who We Are</span></a>
                        <div className="dropdown-items-divide-hr"></div>
                        <a className="dropdown-item" href="#ourapproach"><span className="item-text">Our Approach</span></a>
						<div className="dropdown-items-divide-hr"></div>
                        <a className="dropdown-item" href="#award"><span className="item-text">Awards & Recognitions</span></a>
						<div className="dropdown-items-divide-hr"></div>
                        <a className="dropdown-item" href="#team"><span className="item-text">Team</span></a>
						<div className="dropdown-items-divide-hr"></div>
                        <a className="dropdown-item" href="#partners"><span className="item-text">Partners</span></a>
						<div className="dropdown-items-divide-hr"></div>
                        <a className="dropdown-item" href="#history"><span className="item-text">History of Muskaan</span></a>
                    </div>
                </li>
				<li className="nav-item">
                    <a className="nav-link page-scroll" href="#intellectualdisability">Intellectual Disability</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#gallery">Gallery</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#contact">Contact Us</a>
                </li>
            </ul>
            <span className="nav-item social-icons">
                <span className="fa-stack">
                    <a target="_blank" href="https://www.facebook.com/muskan/">
                        <i className="fas fa-circle fa-stack-2x facebook"></i>
                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span className="fa-stack">
                    <a target="_blank" href=" https://twitter.com/muskan">
                        <i className="fas fa-circle fa-stack-2x twitter"></i>
                        <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
				<span className="fa-stack">
                	<a target="_blank" href="https://instagram.com/muskan">
						<i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-instagram fa-stack-1x"></i>
                     </a>
                 </span>
                 <span className="fa-stack">
                 	<a target="_blank" href="https://www.linkedin.com/company/muskan/">
						<i className="fas fa-circle fa-stack-2x"></i>
						<i className="fab fa-linkedin-in fa-stack-1x"></i>
                    </a>
                 </span>
            </span>
        </div>
    </nav> 
	
    </div>
    
  );
}
}

export default Navbar;
