import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bigHouseLogo from '../../images/bh-pink.svg';

const Header = () => {
    const  { pathname  } = useLocation();
    console.log(pathname)
    if(pathname === '/') {
        console.log("hit pathName")
        return (
            <div className="container">
                <header className="landing-header">
                    <div className="banner-logos">
                        <a href="https://bighouse.org.uk/"><img src={bigHouseLogo} className="navbar-brand" alt="responsive image" style={ {height:"6rem", width: "6rem"}}></img></a>
                        <a href="/"><img src="/images/RCF-logo.svg" class="navbar-brand" alt="responsive image" style={{ height:"6rem", width: "6rem" }}></img></a>
                        <a href="/"><img src="/images/eu-only.svg" class="navbar-brand" alt="responsive image" style={{ height:"6rem", width: "6rem" }}></img></a>
                        <a href="https://www.midlandsengine.org/"><img src="/images/me-white.svg" class="navbar-brand" alt="responsive image" style={{ height:"6rem", width: "6rem" }}></img></a> 
                    </div>
                    <nav className="banner-links">
                        <li><Link to="/events" className="h3w"><strong>Events & Workshops</strong></Link></li>
                        {/* <li><a className="h3w" href="/events" ><strong></strong></a></li> */}
                        {/* <li><a className="h3w" href="/coaches"><strong>Coaches</strong></a></li> */}
                        <li><Link to="/coaches" className="h3w"><strong>Coaches</strong></Link></li>
                        {/* <li><a href="/resources" className="h3w"><strong>Resources</strong></a></li> */}
                        <li><Link to="/resources" className="h3w"><strong>Resources</strong></Link></li>
                    </nav>
                </header>
            </div>
        ) 
    } else {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="/images/RCF-logo.svg" className="img-fluid navbar-brand" alt="responsive image" style={{height:"5rem",width: "5rem"}}></img>
                        <a href="https://bighouse.org.uk/"><img src="/images/bh-pink.svg" className="navbar-brand" alt="responsive image" style={{height:"6rem",width: "6rem"}}></img></a>
                        <a href="/"><img src="/images/eu-only.svg" className="navbar-brand" alt="responsive image" style={{height:"6rem",width: "6rem"}}></img></a>
                        <a href="https://www.midlandsengine.org/"><img src="/images/me-blue.svg" className="navbar-brand" alt="responsive image" style={{height:"6rem",width: "6rem"}}></img></a>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link h3b" href="/events"><strong>Events & Workshops</strong><span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link h3b" href="/coaches"><strong>Coaches</strong></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link  h3b" href="/resources"><strong>Resources</strong></a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;