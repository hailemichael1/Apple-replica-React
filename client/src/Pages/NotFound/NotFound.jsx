import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; 
const NotFound = () => {
  return (
    <section className="internal-page-wrapper top-100 bottom-100">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="not-found-container">
              <h1>404 - Not Found</h1>
              <p>The page you are looking for does not exist.</p>
              <p>
                You can go back to the <Link to="/">Home Page </Link> .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
