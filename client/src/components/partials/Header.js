import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bigHouseLogo from '../../images/bh-pink.svg';

const Header = () => {
    const  { pathname  } = useLocation();

    const activateLi = (child) => {
        const allLinks = document.querySelectorAll('nav div a')
        const activeLink = document.querySelector(`nav div :nth-child(${child})`);
        // const selectedLi = document.querySelector(`nav`);
        allLinks.forEach( (link) => {
            if(link.className === 'active') {
                link.className = 'inactive'
            }
        })
        activeLink.className = 'active';
        const input = document.querySelector('nav input')
        //console.log(input.checked)
        input.checked = false;
        // console.log(allLis)
    }

    return (
        <header>
            <div>
                <div id="header-logos">
                    {/* <a href="https://bighouse.org.uk/"><img src={bigHouseLogo} className="big-house-logo" alt="Big House logo"></img></a> */}
                    <Link to="/"><img src="/images/RCF-logo-white.svg" className="rcfd-logo" alt="RCFD logo"></img></Link>
                    {/* <a href="/"><img src="/images/eu-only.svg" className="eu-logo" alt="Eurpean Union logo"></img></a> */}
                    {/* <a href="https://www.midlandsengine.org/"><img src="/images/me-white.svg" className="midlands-engine-logo" alt="Midlands Engine logo" ></img></a>  */}
                </div>
                <nav>
                    <label htmlFor="hamburger">&#9776;</label>
                    <input type="checkbox" id="hamburger" />
                    <div id="ham-items">
                        <Link className="active" onClick={() => activateLi(1)} to="/" ><li><strong>Home</strong></li></Link>
                        <Link className="inactive" onClick={() => activateLi(2)} to="/events" ><li><strong>Events & Workshops</strong></li></Link>
                        <Link className="inactive" onClick={() => activateLi(3)} to="/coaches"><li><strong>Coaches</strong></li></Link>
                        <Link className="inactive" onClick={() => activateLi(4)} to="/resources"><li><strong>Resources</strong></li></Link>
                    </div>
                </nav>
            </div>
        </header>
    )
    // return (
    //     <header>
    //         <div>
    //             <div id="header-logos">
    //                 {/* <a href="https://bighouse.org.uk/"><img src={bigHouseLogo} className="big-house-logo" alt="Big House logo"></img></a> */}
    //                 <Link to="/"><img src="/images/RCF-logo-white.svg" className="rcfd-logo" alt="RCFD logo"></img></Link>
    //                 {/* <a href="/"><img src="/images/eu-only.svg" className="eu-logo" alt="Eurpean Union logo"></img></a> */}
    //                 {/* <a href="https://www.midlandsengine.org/"><img src="/images/me-white.svg" className="midlands-engine-logo" alt="Midlands Engine logo" ></img></a>  */}
    //             </div>
    //             <nav id="full-nav">
    //                 <div>
    //                     <Link className="active" onClick={() => activateLi(1)} to="/" ><li><strong>Home</strong></li></Link>
    //                     <Link className="inactive" onClick={() => activateLi(2)} to="/events" ><li><strong>Events & Workshops</strong></li></Link>
    //                     <Link className="inactive" onClick={() => activateLi(3)} to="/coaches"><li><strong>Coaches</strong></li></Link>
    //                     <Link className="inactive" onClick={() => activateLi(4)} to="/resources"><li><strong>Resources</strong></li></Link>
    //                 </div>
    //             </nav>
    //             <nav id="ham-nav">
    //                 <label for="hamburger">&#9776;</label>
    //                 <input type="checkbox" id="hamburger" />
    //                 <div id="ham-items">
    //                     <Link className="active" onClick={() => activateLi(1)} to="/" ><li><strong>Home</strong></li></Link>
    //                     <Link className="inactive" onClick={() => activateLi(2)} to="/events" ><li><strong>Events & Workshops</strong></li></Link>
    //                     <Link className="inactive" onClick={() => activateLi(3)} to="/coaches"><li><strong>Coaches</strong></li></Link>
    //                     <Link className="inactive" onClick={() => activateLi(4)} to="/resources"><li><strong>Resources</strong></li></Link>
    //                 </div>

    //             </nav>
    //         </div>

    //     </header>
    // )
}
    // if(pathname === '/') {
    //     return (







//             // <div className="container">
//             //     <header className="landing-header">
//             //         <div className="banner-logos">
//             //             <a href="https://bighouse.org.uk/"><img src={bigHouseLogo} className="navbar-brand big-house-logo" alt="Big House logo"></img></a>
//             //             <a href="/"><img src="/images/RCF-logo.svg" className="navbar-brand rcfd-logo" alt="RCFD logo"></img></a>
//             //             <a href="/"><img src="/images/eu-only.svg" className="navbar-brand eu-logo" alt="Eurpean Union logo"></img></a>
//             //             <a href="https://www.midlandsengine.org/"><img src="/images/me-white.svg" className="navbar-brand midlands-engine-logo" alt="Midlands Engine logo" ></img></a> 
//             //         </div>
//             //         <nav className="banner-links">
//             //             <li><Link to="/events" className="h3-white"><strong>Events & Workshops</strong></Link></li>
//             //             <li><Link to="/coaches" className="h3-white"><strong>Coaches</strong></Link></li>
//             //             <li><Link to="/resources" className="h3-white"><strong>Resources</strong></Link></li>
//             //         </nav>
//             //     </header>
//             // </div>

// <header>
//         <div>
//             <a href="https://bighouse.org.uk/"><img src={bigHouseLogo} className="big-house-logo" alt="Big House logo"></img></a>
//             <a href="/"><img src="/images/RCF-logo.svg" className="rcfd-logo" alt="RCFD logo"></img></a>
//             <a href="/"><img src="/images/eu-only.svg" className="eu-logo" alt="Eurpean Union logo"></img></a>
//             <a href="https://www.midlandsengine.org/"><img src="/images/me-white.svg" className="midlands-engine-logo" alt="Midlands Engine logo" ></img></a> 
//         </div>
//         <nav>
//             <li><Link to="/events" className="h3-white"><strong>Events & Workshops</strong></Link></li>
//             <li><Link to="/coaches" className="h3-white"><strong>Coaches</strong></Link></li>
//             <li><Link to="/resources" className="h3-white"><strong>Resources</strong></Link></li>
//         </nav>
// </header>
//         ) 









//     } else {
//         return (
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container">
//                     <a className="navbar-brand" href="/">
//                         <img src="/images/RCF-logo.svg" className="navbar-brand rcfd-logo" alt="RCF logo"></img></a>
//                         <a href="https://bighouse.org.uk/"><img src="/images/bh-pink.svg" className="navbar-brand big-house-logo" alt="Big House logo"></img></a>
//                         <a href="/"><img src="/images/eu-only.svg" className="navbar-brand eu-logo" alt="Eurpean Union logo" ></img></a>
//                         <a href="https://www.midlandsengine.org/"><img src="/images/me-blue.svg" className="navbar-brand midlands-engine-logo" alt="Midlands Engine logo"></img></a>
                    
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//                         <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//                             <div className="nav-item active">
//                                 {/* <a className="nav-link h3b" href="/events"><strong>Events & Workshops</strong><span className="sr-only">(current)</span></a> */}
//                                 <li><Link to="/events" className="nav-link  h3-black"><strong>Events & Workshops</strong><span className="sr-only">(current)</span></Link></li>
//                             </div>
//                             <div className="nav-item active">
//                                 {/* <a className="nav-link h3b" href="/coaches"><strong>Coaches</strong></a> */}
//                                 <li><Link to="/coaches" className="nav-link  h3-black"><strong>Coaches</strong></Link></li>
//                             </div>
//                             <div className="nav-item active">
//                                 {/* <a className="nav-link  h3b" href="/resources"><strong>Resources</strong></a> */}
//                                 <li><Link to="/resources" className="nav-link  h3-black"><strong>Resources</strong></Link></li>
//                             </div>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         )
//     }
// }

export default Header;