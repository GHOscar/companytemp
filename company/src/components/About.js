import React from 'react'
import about from '../img/about.png'

const About = () => {
    return (
        <div>
           <section id="about">
               <div className="container my-5 py-5">
                   <div className="row">
                       <div className="rounded col-md-6">
                            <img src={about} alt="about" className="w-75 mt-5 h-75 shadow rounded" />
                       </div>
                       <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                            <hr className="w-50" />
                            <p className="lead mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum</p>
                            <button className="btn btn-primary rounded-pill py-2">Get Started</button>
                            <button className="btn btn-outline-primary rounded-pill py-2 ms-2">Contact Us</button>
                           </div>
                       </div>
               </div>
           </section>
        </div>
    )
}

export default About