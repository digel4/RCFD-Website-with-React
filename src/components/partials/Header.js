import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bigHouseLogo from '../../images/bh-pink.svg';

const Header = () => {
    const  { pathname  } = useLocation();
    if(pathname === '/') {
        return (
            <div className="container">
                <header className="landing-header">
                    <div className="banner-logos">
                        <a href="https://bighouse.org.uk/"><img src={bigHouseLogo} className="navbar-brand" alt="Big House logo" style={ {height:"6rem", width: "6rem"}}></img></a>
                        <a href="/"><img src="/images/RCF-logo.svg" className="navbar-brand" alt="RCF logo" style={{ height:"6rem", width: "6rem" }}></img></a>
                        <a href="/"><img src="/images/eu-only.svg" className="navbar-brand" alt="Eurpean Union logo" style={{ height:"6rem", width: "6rem" }}></img></a>
                        <a href="https://www.midlandsengine.org/"><img src="/images/me-white.svg" className="navbar-brand" alt="Midlands Engine logo" style={{ height:"6rem", width: "6rem" }}></img></a> 
                    </div>
                    <nav className="banner-links">
                        <li><Link to="/events" className="h3w"><strong>Events & Workshops</strong></Link></li>
                        <li><Link to="/coaches" className="h3w"><strong>Coaches</strong></Link></li>
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
                        <img src="/images/RCF-logo.svg" className="img-fluid navbar-brand" alt="RCF logo" style={{height:"5rem",width: "5rem"}}></img></a>
                        <a href="https://bighouse.org.uk/"><img src="/images/bh-pink.svg" className="navbar-brand" alt="Big House logo" style={{height:"6rem",width: "6rem"}}></img></a>
                        <a href="/"><img src="/images/eu-only.svg" className="navbar-brand" alt="Eurpean Union logo" style={{height:"6rem",width: "6rem"}}></img></a>
                        <a href="https://www.midlandsengine.org/"><img src="/images/me-blue.svg" className="navbar-brand" alt="Midlands Engine logo" style={{height:"6rem",width: "6rem"}}></img></a>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <div className="nav-item active">
                                {/* <a className="nav-link h3b" href="/events"><strong>Events & Workshops</strong><span className="sr-only">(current)</span></a> */}
                                <li><Link to="/events" className="nav-link  h3b"><strong>Events & Workshops</strong><span className="sr-only">(current)</span></Link></li>
                            </div>
                            <div className="nav-item active">
                                {/* <a className="nav-link h3b" href="/coaches"><strong>Coaches</strong></a> */}
                                <li><Link to="/coaches" className="nav-link  h3b"><strong>Coaches</strong></Link></li>
                            </div>
                            <div className="nav-item active">
                                {/* <a className="nav-link  h3b" href="/resources"><strong>Resources</strong></a> */}
                                <li><Link to="/resources" className="nav-link  h3b"><strong>Resources</strong></Link></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;