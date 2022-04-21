import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio" class="portfolio">
    <div class="container">
        <div class="row text-center mt-5">
            <h1 class="display-3 fw-bold text-capitalize">My latest work</h1>
            <div class="heading-line"></div>
            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo omnis labore
                molestias.</p>
        </div>

        {/* <!-- FILTER CONTENT --> */}
        <div class="row text-center mt-5 mb-4 g-3">
            <div class="col-md-12">
                <button class="btn btn-outline-primary  mt-2 mx-1" type="button">
                    All
                </button>
                <button class="btn btn-outline-primary mt-2 mx-1" type="button">
                    Bitcoin
                </button>
                <button class="btn btn-outline-primary mt-2 mx-1" type="button">
                    Articles
                </button>
                <button class="btn btn-outline-primary mt-2 mx-1" type="button">
                    Sales Marketing
                </button>
            </div>
        </div>

        {/* <!-- Start the Porfolio content --> */}
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="portfolio-box shadow">
                    <img src="images/portfolio/portfolio-1.jpg" alt="portfolio-1 pic" class="img-fluid"/>
                    <div class="portfolio-info">
                        <div class="caption">
                            <h4>project name goes here 1</h4>
                            <p>category project</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="portfolio-box shadow">
                    <img src="images/portfolio/portfolio-2.jpg" alt="portfolio-2 pic" class="img-fluid"/>
                    <div class="portfolio-info">
                        <div class="caption">
                            <h4>project name goes here 2</h4>
                            <p>category project</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="portfolio-box shadow">
                    <img src="images/portfolio/portfolio-3.jpg" alt="portfolio-3 pic" class="img-fluid"/>
                    <div class="portfolio-info">
                        <div class="caption">
                            <h4>project name goes here 3</h4>
                            <p>category project</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="portfolio-box shadow">
                    <img src="images/portfolio/portfolio-4.jpg" alt="portfolio-4 pic" class="img-fluid"/>
                    <div class="portfolio-info">
                        <div class="caption">
                            <h4>project name goes here 4</h4>
                            <p>category project</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="portfolio-box shadow">
                    <img src="images/portfolio/portfolio-5.jpg" alt="portfolio-5 pic" class="img-fluid"/>
                    <div class="portfolio-info">
                        <div class="caption">
                            <h4>project name goes here 5</h4>
                            <p>category project</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="portfolio-box shadow">
                    <img src="images/portfolio/portfolio-6.jpg" alt="portfolio-6 pic" class="img-fluid"/>
                    <div class="portfolio-info">
                        <div class="caption">
                            <h4>project name goes here 6</h4>
                            <p>category project</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="portfolio-box shadow">
                    <img src="images/portfolio/portfolio-7.jpg" alt="portfolio-7 pic" class="img-fluid"/>
                    <div class="portfolio-info">
                        <div class="caption">
                            <h4>project name goes here 7</h4>
                            <p>category project</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="portfolio-box shadow">
                    <img src="images/portfolio/portfolio-8.jpg" alt="portfolio-8 pic" class="img-fluid"/>
                    <div class="portfolio-info">
                        <div class="caption">
                            <h4>project name goes here 8</h4>
                            <p>category project</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="portfolio-box shadow">
                    <img src="images/portfolio/portfolio-9.jpg" alt="portfolio-9 pic" class="img-fluid"/>
                    <div class="portfolio-info">
                        <div class="caption">
                            <h4>project name goes here 9</h4>
                            <p>category project</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Portfolio