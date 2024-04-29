import React from "react";
import amol from "../images/Amol.jpeg";
import vishal from "../images/Vishal.jpeg";
import ashish from "../images/Ashish.jpeg";
import raj from "../images/RAJ.jpeg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div class="container1 aboutus">
        <div class="row">
          <div class="col-md-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={ashish} alt="ashish" />
                        </div>
                        <div className="img-text">
                          <h2>Ashish Patil</h2>
                          <p>
                            Hi I'm Ashish Patil. I'm currently pursuing
                            Diploma in CDAC , and my role in the project
                            is backendend developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={vishal} alt="vishal" />
                        </div>
                        <div className="img-text">
                          <h2>Vishal Meshram</h2>
                          <p>
                            Hi I'm Vishal Meshram. I'm currently pursuing Diploma
                            in CDAC , and my role in the project is
                            frontend developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={amol} alt="amol" />
                        </div>
                        <div className="img-text">
                          <h2>Amol  Balure</h2>
                          <p>
                            Hi I'm Amol Balure and I'm the Team lead of this
                            project. I'm currently pursuing Diploma in CDAC
                            , and my role in the project is backendend
                            developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={raj} alt="raj" />
                        </div>
                        <div className="img-text">
                          <h2>Raj Moundekar</h2>
                          <p>
                            Hi I'm Raj Moundekar. I'm currently pursuing Diploma
                            in CDAC , and my role in the project is
                            frontend developer.
                          </p>
                        </div>
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
};

export default AboutUs;
