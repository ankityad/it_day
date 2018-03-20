import React, { Component } from 'react';


class Jaipur extends Component {
  render() {
    return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

      </div>
    </nav>

    <header className="masthead text-center text-white">
      <div className="masthead-content">
        <div className="container">
          <h1 className="masthead-heading mb-0">Jaipur</h1>
          <h2 className="masthead-subheading mb-0">The Pink City</h2>
          <a href="tourism.rajasthan.gov.in/jaipur.html" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
        </div>
      </div>
      <div className="bg-circle-1 bg-circle"></div>
      <div className="bg-circle-2 bg-circle"></div>
      <div className="bg-circle-3 bg-circle"></div>
      <div className="bg-circle-4 bg-circle"></div>
    </header>

    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <a href=""><img className="img-fluid rounded-circle" src="img/amber.jpg" alt="" /></a>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4">The Amber Fort</h2>
              <p>Amer Fort is a fort located in Amer, Rajasthan, India. Amer is a town with an area of 4 square kilometres (1.5 sq mi) located 11 kilometres (6.8 mi) from Jaipur, the capital of Rajasthan. Located high on a hill, it is the principal tourist attraction in Jaipur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src="img/hawa.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-5">
              <h2 className="display-4">Hawa Mahal</h2>
              <p>Hawa Mahal is a palace in Jaipur, India. It is constructed of red and pink sandstone. The palace sits on the edge of the City Palace, Jaipur, and extends to the zenana, or women's chambers. The structure was built in 1799 by Maharaja Sawai Pratap Singh.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src="img/jaigarh.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4">Jaigarh Fort</h2>
              <p>Jaigarh Fort is situated on the promontory called the Cheel ka Teela (Hill of Eagles) of the Aravalli range; it overlooks the Amber Fort and the Maota Lake, near Amber in Jaipur, Rajasthan, India. The fort was built by Jai Singh II in 1726 to protect the Amber Fort</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <footer className="py-5 bg-black">
      <div className="container">
        <p className="m-0 text-center text-white small">Copyright &copy; Your Website 2018</p>
      </div>
      
    </footer>

    
    <script src="jaipur/vendor/jquery/jquery.min.js"></script>
    <script src="jaipur/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        </div>
        )
  }
}
export default Jaipur;