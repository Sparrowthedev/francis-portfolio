import React from 'react';


const Intro = () => {
  return (
    <section id="home" class="intro-section">
    <div class="container">
        <div class="row align-items-center">
            {/*  START THE FIRST COL  */}
            <div class="col-md-6 intros">
                <div class="main">
                    <h1 class="display-2">
                        <span class="display-2--intro">Hey!, I'm Franc</span>
                        <span class="display-2--description lh-base">Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Consequuntur rerum iusto sint in hic illum necessitatibus voluptatibus
                            quod dolorem distinctio?</span>
                    </h1>
                    <button type="button" class="rounded-pill btn-rounded">
                        Get in touch
                        <span>
                            <i class="fas fa-arrow-right"></i>
                        </span>
                    </button>
                </div>
            </div>

            {/* START THE SECOND COL */}
            <div class="col-md-6 intros text-end">
                <div class="img-box">
                    <img src="/images/arts/content.png" alt="writer svg" class="img-fluid main-img"/>
                </div>
            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1"
            d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
    </svg>
</section>
  )
}

export default Intro