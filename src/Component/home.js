import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?cs=srgb&dl=pexels-mikebirdy-120049.jpg&fm=jpg"
              className="d-block w-100"
              height={700}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <h3>ABC Automobiles</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://s7ap1.scene7.com/is/image/tatamotors/nexon-20lakh-desktop?$BA-1920-925-D$&fit=crop&fmt=jpg"
              height={700}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Get the best offer</h5>
              <p>10% offer on Tata</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/modules/generic-hero/homepage-hero-banner/banner-compress-web-new.webp"
              height={700}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Get the best deal</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container my-4">
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src="https://s7ap1.scene7.com/is/image/tatamotors/sunlit-yellow-left?$VH-708-500-D$&fit=crop&fmt=webp-alpha"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Tata Harrier</h5>
                <p className="card-text">
                  We are Warriors, We are Harriers The New Harrier symbolizes
                  the unwavering spirit of young achievers in its latest avatar.
                </p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Book Now
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Notification</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Our Representative will call you shortly
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src="https://s7ap1.scene7.com/is/image/tatamotors/twilight-purple-right?$VH-708-500-D$&fit=crop&fmt=webp-alpha"
                className="card-img-top"
                alt="..." />
              <div className="card-body">
                <h5 className="card-title">Tata Nexon</h5>
                <p className="card-text">
                  Nexon in its new avatar is now here with multiple combinations
                  of design, powertrain, and features with the philosophy.
                </p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Book Now
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Notification</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Our Representative will call you shortly
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
              </div>
            </div>
          </div>


          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src="https://s7ap1.scene7.com/is/image/tatamotors/CosmicGold-right?$VH-708-500-D$&fit=crop&fmt=webp-alpha"
                className="card-img-top"
                alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Tata Safari</h5>
                <p className="card-text">
                  The New Safari epitomizes premium luxury with its opulent
                  interiors, Plush Upholstery & advanced infotainment system.
                </p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Book Now
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Notification</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Our Representative will call you shortly
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
              </div>
            </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src="https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Mahindra XUV700</h5>
                <p className="card-text">
                The XUV700, available in five- and seven-seater options, features an attractive design and a quality cabin. Packed with modern features and high safety ratings, it offers good engine performance and road dynamics, competitively priced in its segment.
                </p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Book Now
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Notification</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Our Representative will call you shortly
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src="https://imgd.aeplcdn.com/664x374/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80"
                className="card-img-top"
                alt="..." />
              <div className="card-body">
                <h5 className="card-title">Maruti Brezza</h5>
                <p className="card-text">
                The Brezza, a compact SUV, has fairly good quality and road presence. It has a lot of feel-good features, a spacious and comfortable cabin for five passengers and a large boot. Its petrol engine is fuel efficient, and the ride is stable and absorbent.
                </p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Book Now
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Notification</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Our Representative will call you shortly
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
              </div>
            </div>
          </div>


          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src="https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80"
                className="card-img-top"
                alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Maruti Fronx</h5>
                <p className="card-text">
                The Fronx is an attractive and spacious crossover based on the Baleno, boasting a long list of features. Its engines are efficient and sufficiently powerful, available with both AMT and torque converter options. The ride is accomplished, with adequate ground clearance.
                </p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Book Now
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Notification</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Our Representative will call you shortly
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
              </div>
            </div>
            </div>

            
            <div className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src="https://imgd.aeplcdn.com/664x374/n/cw/ec/47278/m8-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">BMW M8</h5>
                <p className="card-text">
                It is available in 1 variant, with an engine of 4395 cc and a choice of 1 transmission: Automatic. M8 comes with 6 airbags. BMW M8 has a ground clearance of 130 mm and is available in 9 colours. Users have reported a mileage of 8.77 kmpl for M8.
                </p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Book Now
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Notification</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Our Representative will call you shortly
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src="https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/x1-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80"
                className="card-img-top"
                alt="..." />
              <div className="card-body">
                <h5 className="card-title">BMW X1</h5>
                <p className="card-text">
                The BMW X1 stands out with its elegant design, generous interior space, and modern technology. Its potent engine delivers an exhilarating driving experience, coupled with a lavish cabin and top-quality materials for an opulent ride.
                </p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Book Now
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Notification</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Our Representative will call you shortly
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
              </div>
            </div>
          </div>


          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src="https://imgd.aeplcdn.com/664x374/n/cw/ec/48034/2-series-gran-coupe-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
                className="card-img-top"
                alt="..."/>
              <div className="card-body">
                <h5 className="card-title">BMW 2 Series Gran Coupe</h5>
                <p className="card-text">
                2 Series Gran Coupe has an NCAP rating of 5 stars and comes with 6 airbags. BMW 2 Series Gran Coupe has a ground clearance of 152 mm and is available in 7 colours. 
                </p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Book Now
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Notification</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Our Representative will call you shortly
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
              </div>
            </div>
            </div>

            


        </div>
    </div>
    </>
  );
}

export default Home;
