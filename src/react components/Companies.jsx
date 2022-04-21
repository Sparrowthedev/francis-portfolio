import React from 'react'

const Companies = () => {
  return (
    <section id="companies" class="companies">
        <div class="container">
            <div class="row text-center">
                <h4 class="fw-bold lead mb-3">Trusted by companies like</h4>
                <div class="heading-line mb-5"></div>
            </div>
        </div>
         {/* COMPANY CARDS */}
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-lg-2">
                    <div class="companies__logo-box shadow-sm"><img src="images/campanies/campany-1.png"
                            alt="company 1 logo" class="img-fluid"/></div>
                </div>
                <div class="col-md-4 col-lg-2">
                    <div class="companies__logo-box shadow-sm"><img src="images/campanies/campany-2.png"
                            alt="company 2 logo" class="img-fluid"/></div>
                </div>
                <div class="col-md-4 col-lg-2">
                    <div class="companies__logo-box shadow-sm"><img src="images/campanies/campany-3.png"
                            alt="company 3 logo" class="img-fluid"/></div>
                </div>
                <div class="col-md-4 col-lg-2">
                    <div class="companies__logo-box shadow-sm"><img src="images/campanies/campany-4.png"
                            alt="company 4 logo" class="img-fluid"/></div>
                </div>
                <div class="col-md-4 col-lg-2">
                    <div class="companies__logo-box shadow-sm"><img src="images/campanies/campany-5.png"
                            alt="company 5 logo" class="img-fluid"/></div>
                </div>
                <div class="col-md-4 col-lg-2">
                    <div class="companies__logo-box shadow-sm"><img src="images/campanies/campany-6.png"
                            alt="company 6 logo" class="img-fluid"/></div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Companies