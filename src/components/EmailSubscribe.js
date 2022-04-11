const EmailSubscribe = () => {
    return (
        <div className="container my-4" id="email-subscribe">
            <div className="d-flex flex-column p-4">
                <h1 className="h1w text-center mb-3">Stay in Touch!</h1>
                <h2 className="h2w text-center mb-4">Always be in the know about upcoming RCF events and workshops by subscribing to our newsletter!</h2>
                {/* <form id="email-subscribe-form" action="/subscribe" method="POST">
                    <div className="row mb-2">
                        <div className="col">
                            <input type="text" className="form-control" name="firstName" placeholder="First Name">
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="lastName" placeholder="Second Name">
                        </div>
                        <div className="col">
                            <input type="email" className="form-control" name="email" placeholder="Email">
                        </div>
                        <div className="col flex-grow-0">
                            <button id="submit" className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </form> */}
            </div>
    </div>
    )
}

export default EmailSubscribe;