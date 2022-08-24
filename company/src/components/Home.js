import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Feel the Premium Business Experience
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in maximus turpis. Suspendisse potenti. Morbi fermentum ante et nibh tempor, at auctor leo fringilla. Praesent gravida euismod purus in imperdiet. Ut lacus erat, congue vel mauris quis, aliquam gravida dolor. Phasellus dolor elit, convallis in rhoncus id, vehicula quis tortor.
              </p>
              <div className="buttons d-flex justify-content-center">
                <Link to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">
                  Contact Us
                </Link>
                <Link to="/service" className="btn btn-outline-light rounded-pill px-4 py-2">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
