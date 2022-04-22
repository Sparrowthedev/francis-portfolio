import React from 'react';
import { portfolioItems } from '../data';

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
            {portfolioItems.map(item=>(
                <div class="col-lg-4 col-md-6">
                <div class="portfolio-box shadow">
                    <img src={item.img} alt={item.alt} class="img-fluid"/>
                    <div class="portfolio-info">
                        <div class="caption">
                            <h4>{item.Title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>    
</section>

  )
}

export default Portfolio