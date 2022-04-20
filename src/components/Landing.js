import LandingEventsSlider from './partials/LandingEventsSlider';


const Landing = () => {
    return (
        <div id="landing-content">
            <div id="hero">
                <div id="hero-image"></div>
                <div id="hero-content">
                    <h1 className="h1-white">Real Creative Futures Digital</h1>
                    <h3 className="h3-white">The Real Creative Team are based at New Art Exchange, an award-winning art gallery and performance space in Hyson Green, Nottingham. The team work hard to make sure the events, workshops and support available, reflects the type of support Creative and Digital individuals are telling us they need!</h3>
                    <a className="btn btn-secondary" href="#learn-more">Learn More</a>
                </div>
            </div>
      
             <div className="body-copy-black" id="learn-more">
                <h2 className="h2-orange">The Big House, A Creative Business Support Programme.</h2>
                <p>The Big House is to help Creative and Digital businesses to grow and create new jobs in the region, from potential start-ups and new entrepreneurs, to established SMEs looking to expand and bring new products and services to market. The Big House programme is being delivered through a partnership of business support organisations across the local area, with specialist expertise in different aspects of the Creative and Digital industries.</p>
                <p>The Big House is a business support project, delivered by seven partners across Nottinghamshire and Derbyshire. Each partner organisation has specialist expertise in different areas of the creative and digital industries. The Big House partners include, The Creative Quarter company, NBV Enterprise Solutions Ltd, New Art Exchange, Nottingham City Council, Nottingham Trent University; The Business School and the Hive (Nottingham Trent University's business incubator), Derby QUAD, Derby Theatre and University of Derby. The Big House programme is a 6-year, £8.8 million tailored support programme for the Creative and Digital Industries (CDI) sector in Nottingham, Nottinghamshire, Derby and Derbyshire. The programme is part-funded by a £2.5 million contribution from the European Regional Development Fund (ERDF) with match funding from the Creative Local Growth Fund programme, funded by The Arts Council. </p>
                <p>Real Creative Futures - Digital is New Art Exchange's offering to The Big House programme. RCF-D is a business support programme, aimed specifically at the creative and digital sectors, using  expertise and insight to help launch, innovate and grow creative enterprises. The project nurtures entrepreneurs and SMEs with 12 hours of free tailored support, including one‐to‐one mentoring from experts and advisers who have real experience within the creative and digital industries, in addition to networking events, seminars and workshops, to help you build valuable relationships and develop your skills. If you work in music, visual or performing arts, broadcasting, design, film, photography,architecture or publishing, online marketing and video, mobile applications design and web development, then you're part of the city's creative and digital industries. To be eligible, you need to be working within the creative and/or digital industries, as either an established SME or entrepreneur eager to set a business up. Your business must have less than 250 employees and not have received more than €200,000 in state funding.</p>
             </div>
             <LandingEventsSlider />
        </div>

    )
}

export default Landing;