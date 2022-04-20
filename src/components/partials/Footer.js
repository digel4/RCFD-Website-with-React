const Footer = () => {
    return (
        <footer>
            <div id="footer-container">
                <div id="spending-organisation-logos">
                    <img className="footer-images" src="/images/cq.svg" alt="Creative Quarter logo"></img>
                    <img className="footer-images" src="/images/derbytheatre.svg" alt="Derby Theatre logo"></img>
                    <img className="footer-images" src="/images/nbv.svg" alt="Nottingham Business Venture logo"></img>
                    <img className="footer-images" src="/images/ntu.svg" alt="Nottingham Trent University logo"></img>
                    <img className="footer-images" src="/images/nae.svg" alt="new Art Exchange logo"></img>
                    <img className="footer-images" src="/images/quad.svg" alt="Derby Quad logo"></img>
                </div>
                <div id="funding-organisation-logos">
                    <img className="footer-images" src="/images/ncc.svg" alt="Nottingham City Council logo"></img>
                    <img className="footer-images" src="/images/art.svg" alt="Arts Council logo"></img>
                    <img className="footer-images" src="/images/d2n2.svg" alt="d2n2 logo"></img>
                </div>
                <hr></hr>
                <div id="about-content" className="body-copy-small-white">
                    <div id="about-content-info">
                        <ul>
                            <li><h6>Support</h6></li>
                            <li>Support for You</li>
                            <li>Workshops & Events</li>
                            <li>Experimentor</li>
                            <li>Resources</li>
                        </ul>
                        <ul>
                            <li><h6>General</h6></li>
                            <li>About The Big House</li>
                            <li>Terms & Privacy</li>
                            <li>Cookie Policy</li>
                            <li>Accessibility</li>
                            <li>Join the conversation</li>
                            <li style={{ color:"#EB600B" }}>#TheBigHouse</li>
                        </ul>
                        <ul>
                            <li><h6>Contact</h6></li>
                            <li>0115 924 8630</li>
                            <li>RCF@nae.org.uk</li>
                        </ul>
                    </div>
                    <div id="about-content-logos">
                        <img className="bh-eu-me" src="/images/eu.svg" alt="European Union logo"></img>
                        <img className="bh-eu-me" src="/images/me-white.svg" alt="Midland Engine logo"></img>
                    </div>
                </div>
            </div>
        </footer>
    )
}

{/* <footer id="footer">
<div className="container">
    <div className="d-flex pt-4 justify-content-between">
        <img className="footer-images" src="/images/cq.svg" alt="Creative Quarter logo"></img>
        <img className="footer-images" src="/images/derbytheatre.svg" alt="Derby Theatre logo"></img>
        <img className="footer-images" src="/images/nbv.svg" alt="Nottingham Business Venture logo"></img>
        <img className="footer-images" src="/images/ntu.svg" alt="Nottingham Trent University logo"></img>
        <img className="footer-images" src="/images/nae.svg" alt="new Art Exchange logo"></img>
        <img className="footer-images" src="/images/quad.svg" alt="Derby Quad logo"></img>
    </div>
    <div className="d-flex justify-content-around">
        <img className="footer-images" src="/images/ncc.svg" alt="Nottingham City Council logo"></img>
        <img className="footer-images" src="/images/art.svg" alt="Arts Council logo"></img>
        <img className="footer-images" src="/images/d2n2.svg" alt="d2n2 logo"></img>
    </div>
    <hr></hr>
    <div className="d-flex justify-content-between">
        <div className="d-flex body-copy-small-white">
            <div>
                <div className="pb-3">Support</div>
                <div>Support for You</div>
                <div>Workshops & Events</div>
                <div>Experimentor</div>
                <div>Resources</div>
            </div>
            <div className="px-4">
                <div className="pb-3">General</div>
                <div>About The Big House</div>
                <div>Terms & Privacy</div>
                <div>Cookie Policy</div>
                <div>Accessibility</div>
                <div className="">Join the conversation</div>
                <div style={{ color:"#EB600B" }}>#TheBigHouse</div>
            </div>
            <div>
                <div className="pb-3">Contact</div>
                <div>0115 924 8630</div>
                <div>RCF@nae.org.uk</div>
            </div>
            <div className="d-flex justify-content-end" >
                <img className="bh-eu-me" src="/images/eu.svg" alt="European Union logo"></img>
                <img className="bh-eu-me" src="/images/me-white.svg" alt="Midland Engine logo"></img>
            </div>
        </div>
    </div>
</div>
</footer> */}
 

export default Footer;
