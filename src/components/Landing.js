


const Landing = () => {
    return (
        <div className="hero">
            <div className="background-image" style={{ backgroundImage: "url(../images/nae1.jpg)", backgroundSize: "cover", height: "100vh"}} ></div>
                <div className="container hero-content-area">
                    <h1 className="text-center h1w">Real Creative Futures Digital</h1>
                    <h3 className="text-center h3w">The Real Creative Team are based at New Art Exchange, an award-winning art gallery and performance space in Hyson Green, Nottingham. The team work hard to make sure the events, workshops and support available, reflects the type of support Creative and Digital individuals are telling us they need!</h3>
                    <div>
                        {/* <button class="btn btn-primary mr-4 sign-up-btn">Sign-up</button> */}
                        <a className="btn btn-secondary" href="#learn-more">Learn More</a>
                    </div>
                </div>
                
        </div>
    )
}

export default Landing;