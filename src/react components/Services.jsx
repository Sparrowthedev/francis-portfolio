import React from 'react'

const Services = () => {
  return (
    <section id="services" class="services">
        {/*  FIRST CONTAINER  */}
        <div class="container">
            <div class="row text-center">
                <h1 class="fw-bold display-3">My Services</h1>
                <div class="heading-line mb-1"></div>
            </div>

            <div class="row pt-2 pb-2 mt-0 mb-3">
                <div class="col-md-6 border-right">
                    <div class="bg-white p-3">
                        <h2 class="fw-bold text-capitalize text-center">
                            My services range from writing to bitcoin analysis,copywriting, sales marketting and content
                            creation.
                        </h2>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bg-white p-4 text-start">
                        <p class="fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                            repellendus accusantium quo, tempore veniam facere earum assumenda esse voluptate sapiente.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* START THE MAIN CONTENT FOR THE SERVICES  */}
        <div class="container">
            {/* {/*  START THE WRITING CONTENT  */} 
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                    <div class="services__content">
                        <div class="icon d-block fas fa-laptop"></div>
                        <h3 class="display-3--title mt-1">Writing</h3>
                        <p class="lh-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla odit quod quas
                            accusantium expedita omnis iusto, ab, eum unde corrupti culpa iure! Ipsa quia tempora
                            obcaecati dolores!
                        </p>
                        <button type="button" class="rounded-pill btn-rounded border-primary">
                            Learn more
                            <span>
                                <i class="fas fa-arrow-right"></i>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
                    <div class="services__pic">
                        <img src="images/services/service-2.png" alt="writing svg" class="img-fluid"/>
                    </div>
                </div>
            </div>
            {/*  START THE MARKETTING CONTENT  */}
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start">
                    <div class="services__pic">
                        <img src="images/services/service-1.png" alt="marketing svg" class="img-fluid"/>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                    <div class="services__content">
                        <div class="icon d-block fas fa-paper-plane"></div>
                        <h3 class="display-3--title mt-1">Marketing</h3>
                        <p class="lh-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla odit quod quas
                            accusantium expedita omnis iusto, ab, eum unde corrupti culpa iure! Ipsa quia tempora
                            obcaecati dolores!
                        </p>
                        <button type="button" class="rounded-pill btn-rounded border-primary">
                            Learn more
                            <span>
                                <i class="fas fa-arrow-right"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="row">
                {/* START THE BITCOIN CONTENT  */}
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                    <div class="services__content">
                        <div class="icon d-block fas fa-bitcoin-sign"></div>
                        <h3 class="display-3--title mt-1">Bitcoin Analysis</h3>
                        <p class="lh-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla odit quod quas
                            accusantium expedita omnis iusto, ab, eum unde corrupti culpa iure! Ipsa quia tempora
                            obcaecati dolores!
                        </p>
                        <button type="button" class="rounded-pill btn-rounded border-primary">
                            Learn more
                            <span>
                                <i class="fas fa-arrow-right"></i>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
                    <div class="services__pic">
                        <img src="images/services/service-3.png" alt="bitcoin svg" class="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Services