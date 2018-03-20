import React, { Component } from 'react';

import {Link} from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div>
         <h1 className="site-heading text-center text-white d-none d-lg-block">
      <span className="site-heading-upper text-primary mb-3">Virtual Tour To</span>
      <span className="site-heading-lower">Rajasthan</span>
    </h1>

    
    <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div className="container">
        <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Rajasthan Tourism</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active px-lg-4">
              <a className="nav-link text-uppercase text-expanded" href="index.html">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item px-lg-4">
              <a className="nav-link text-uppercase text-expanded" href="">About</a>
            </li>
            <li className="nav-item px-lg-4">
              <a className="nav-link text-uppercase text-expanded" href="#cities">Cities</a>
    
            </li>
       <li className="nav-item px-lg-4">
             <Link to='/Login'><a className="nav-link text-uppercase text-expanded" >Login</a></Link>
    
        </li>
      <li className="nav-item px-lg-4">
             <Link to='/index.vr'><a className="nav-link text-uppercase text-expanded" >StartVR</a></Link>
    
        </li>
     
          </ul>
        </div>
      </div>
    </nav>

    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Our </span>
                <span className="section-heading-lower">Motto</span>
              </h2>
              <p className="mb-0">Rajasthan is one of the most popular tourist destinations in India, for both domestic and international tourists. Rajasthan attracts tourists for its historical forts, palaces, art and culture.
In spite of being the most popular tourist destination, many people in india having lack of money or any other reasons cannot visit here. Now the question arises, how we can make everyone feel at rajasthan.
The solution is to make a virtual tour
Of rajasthan for them. In virtual tour, we will make a web application that contains 360 degree images of all the tourist places of rajasthan(city wise). In this web app, one can also know about the weather conditions of that place.


</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section clearfix">
      <div className="container" id="cities">
        <div className="intro">
          <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/intro.jpg" alt="" />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">Visit</span>
              <span className="section-heading-lower">Jaipur</span>
            </h2>
            <p className="mb-3">Jaipur is the capital and the largest city of the Indian state of Rajasthan in Northern India. It was founded on 18 November 1727 by Jai Singh II, the ruler of Amer after whom the city is named. As of 2011, the city has a population of 3.1 million, making it the tenth most populous city in the country.
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="">Visit Today!</a>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section className="page-section clearfix">
      <div className="container" id="cities">
        <div className="intro">
          <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/jodhpur.jpg" alt="" />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">Visit</span>
              <span className="section-heading-lower">Jodhpur</span>
            </h2>
            <p className="mb-3">Jodhpur is the second largest city in the Indian state of Rajasthan and officially the second metropolitan city of the state. It was formerly the seat of a princely state of the same name. The capital of the kingdom was known as Marwar.
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="#">Visit Today!</a>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section className="page-section clearfix">
      <div className="container" id="cities">
        <div className="intro">
          <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/chittorgarh.jpg" alt="" />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">Visit</span>
              <span className="section-heading-lower">Jodhpur</span>
            </h2>
            <p className="mb-3">Chittorgarh About this sound pronunciation (help·info) (also Chittor or Chittaurgarh) is a city and a municipality in Rajasthan state of western India. It lies on the Berach River, a tributary of the Banas, and is the administrative headquarters of Chittorgarh District and a former capital of the Sisodia Rajput Dynasty of Mewar.
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="#">Visit Today!</a>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section className="page-section clearfix">
      <div className="container" id="cities">
        <div className="intro">
          <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/pushkar.jpg" alt="" />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">Visit</span>
              <span className="section-heading-lower">Pushkar</span>
            </h2>
            <p className="mb-3">Pushkar (Hindi: पुष्कर) is a town in the Ajmer district in the Indian state of Rajasthan. It is situated about 10 km (6.2 mi) northwest of Ajmer and about 150 kilometres (93 mi) southwest of Jaipur. It is a pilgrimage site for Hindus and Sikhs. Pushkar has many temples.
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="#">Visit Today!</a>
            </div>
          </div>
        </div>
      </div>

    </section>



    <footer className="footer text-faded text-center py-5">
      <div className="container">
        <p className="m-0 small">Copyright &copy; Rajasthan Tourism 2018</p>
      </div>
    </footer>

   
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        </div>
    )
  }
}
export default Home;