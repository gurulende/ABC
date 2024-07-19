import React, { useState } from 'react';
import { ReactDOM } from 'react';
import Menu from './Menu';
import Footer from './Footer';


function About(){

    const [count, setCount] = useState(0);

    return (
        <div>
           
            
            
        <div data-testid="about-content">

                <div className="text-secondary px-4 py-5 text-center">
                <div className="py-5">
                <h1 className="display-5 fw-bold text-black">About Us</h1>
                <div className="col-lg-6 mx-auto">
                <p className="fs-5 mb-4"> Welcome to ABC Automobiles! We are dedicated to providing top-quality vehicles and exceptional customer service.
                Our extensive inventory includes a wide range of cars to suit every need, from compact cars for city driving to
                spacious SUVs for family adventures. We pride ourselves on our commitment to excellence, offering only the best
                in terms of quality and value.</p>
                </div>
                </div>
                </div>
              
                </div>


               <div class="card mb-3" style={{}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img  className="card-img-top shadow p-3 mb-5 bg-body-tertiary rounded" src="https://mediapool.bmwgroup.com/cache/P9/201907/P90360275/P90360275-oliver-zipse-member-of-the-board-of-management-of-bmw-ag-production-as-of-16-august-2019-chairman-of-600px.jpg" class="img-fluid rounded-start" alt="..." />
      <div class="card-body text-center">
        <h1 class="card-title fw-bold">Oliver Zipse</h1>
      </div>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        
        <h5 class="card-title fw-bold">Our Story</h5>
        <p class="card-text">Founded in 2021, ABC Automobiles quickly established itself as a premier destination for high-quality vehicles. Over the past few years, we have honed our expertise in offering a wide range of cars and SUVs, catering to various preferences and requirements. Our commitment to excellence and customer satisfaction sets us apart in the automotive industry.</p>
        <h5 class="card-title">Our Specialization</h5>
        <p class="card-text">While our core focus is on cars and SUVs, we distinguish ourselves by providing exceptional service and a diverse selection. Our specialized stock includes:
        Cars: From compact sedans to luxurious vehicles, we offer a broad spectrum of options to suit your driving style and needs.
        SUVs: Our inventory features a range of SUVs, known for their performance, comfort, and versatility.</p>
        <h5 class="card-title">Our Commitment</h5>
        <p class="card-text">At ABC Automobiles, our mission is to provide you with exceptional vehicles and unmatched service. Whether you're in the market for a new car or SUV or looking for a rental, our dedicated team is here to assist you every step of the way.</p>
        <h5 class="card-title">Contact Us</h5>
        <p class="card-text"><small class="text-body-secondary">Explore our inventory or visit our showroom to experience the quality and service that define ABC Automobiles. We look forward to helping you find your perfect vehicle.</small></p>
      </div>
    </div>
  </div>
</div>
           
        </div>
    )
}

export default About;