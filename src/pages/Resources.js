import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <div>
      <Header />
      <main>
        
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

export default Resources;
