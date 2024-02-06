import React from 'react'
import { Link } from "react-router-dom";

function Maincontent() {
  return (
    <main>
  
  <section id="head" className="head">
    <div className="container">
      <div className="row">
        <div className="col col-1-2">
          <div className="head__about">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <Link to="#" className="btn btn--rounded">
          
              Get Started{" "}
            </Link>
          </div>
        </div>
        <div className="col col-1-2">
          <div className="head__img">
            <img
              src="./images/illustration-working.svg"
              alt="illustration working"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="shorten" className="shorten">
    <div className="container">
      <div className="shorten__form">
        <form>
          <div className="form__group">
            <input
              type="text"
              className="error"
              placeholder="Shorten a link here..."
            />
            <small className="error"> Please add a Link </small>
          </div>
          <Link to="#" className="btn">
            Shorten It!
          </Link>
        </form>
      </div>
      <div className="shorten__links">
        <div className="shorten__link">
          <Link
            to="https://www.frontend.com"
            className="shorten__link--main"
          >
            https://www.frontend.com
          </Link>
          <Link to="https://re.link/sfdhkd" className="shorten__link--shorted">
            https://re.link/sfdhkd
          </Link>
          <Link to="#" className="btn btn--small">
            copy
          </Link>
        </div>
        <div className="shorten__link">
          <Link to="https://code.net" className="shorten__link--main">
            https://code.net
          </Link>
          <Link to="https://re.link/sfdhkd" className="shorten__link--shorted">
            https://re.link/sfdhkd
          </Link>
          <Link to="#" className="btn btn--small btn--active">
            copied!
          </Link>
        </div>
        <div className="shorten__link">
          <Link
            to="https://www.frontend.com"
            className="shorten__link--main"
          >
            https://www.frontend.com
          </Link>
          <Link to="https://re.link/sfdhkd" className="shorten__link--shorted">
            https://re.link/sfdhkd
          </Link>
          <Link to="#" className="btn btn--small">
            copy
          </Link>
        </div>
      </div>
    </div>
  </section>
  <section id="pros" className="pros">
    <div className="container">
      <div className="pros__header">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
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
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
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
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
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
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
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
  )
}

export default Maincontent
