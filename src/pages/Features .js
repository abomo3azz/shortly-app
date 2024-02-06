import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Features() {
  return (
    <div>
      <Header />
      <main>
        <section id="pros" className="pros">
          <div className="container">
            <div className="pros__header">
              <h2>Advanced Statistics</h2>
              <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
            <div className="row pros__row">
              {/* col  */}
              <div className="col col-1-3">
                <div className="pro">
                  <div className="pro__icon">
                    <img
                      src="./images/icon-brand-recognition.svg"
                      alt="brand recognition icon"
                    />
                  </div>
                  <div className="pro__content">
                    <h3>Brand Recognition</h3>
                    <p>
                      Boost your brand recognition with each click. Generic
                      links don’t mean a thing. Branded links help instil
                      confidence in your content.
                    </p>
                  </div>
                </div>
              </div>
              {/* // end col  */}
              {/* col  */}
              <div className="col col-1-3">
                <div className="pro">
                  <div className="pro__icon">
                    <img
                      src="./images/icon-detailed-records.svg"
                      alt="brand recognition icon"
                    />
                  </div>
                  <div className="pro__content">
                    <h3>Detailed Records</h3>
                    <p>
                      Gain insights into who is clicking your links. Knowing
                      when and where people engage with your content helps
                      inform better decisions.
                    </p>
                  </div>
                </div>
              </div>
              {/* // end col  */}
              {/* col  */}
              <div className="col col-1-3">
                <div className="pro">
                  <div className="pro__icon">
                    <img
                      src="./images/icon-fully-customizable.svg"
                      alt="brand recognition icon"
                    />
                  </div>
                  <div className="pro__content">
                    <h3>Fully Customizable</h3>
                    <p>
                      Improve brand awareness and content discoverability
                      through customizable links, supercharging audience
                      engagement.
                    </p>
                  </div>
                </div>
              </div>
              {/* // end col  */}
            </div>
          </div>
        </section>
        <section id="cta" className="cta">
          <div className="container">
            <h2>Boost your links today</h2>
            <Link to="#" className="btn btn--rounded">
              Get Started
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Features;
