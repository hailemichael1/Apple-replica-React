import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "./products.json"; 

function Iphone() {
  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     // fetch("http://localhost:1111/products")
  //     //   .then((res) => res.json())
  //     //   .then((data) => setProducts(data));
  //         setProducts(data);
  //   }, []);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper bold">iPhones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products.map((product, index) => {
            const { Id, img, Url, Title, Brief, StartPrice, PriceRange } =
              product;
            const productPage = `/iphone/${Id}`;

            return (
              <div
                key={Id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div
                  className={`col-sm-12 col-md-6 my-auto order-${
                    index % 2 === 0 ? 1 : 2
                  }`}
                >
                  <div className="product-title">{Title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className={`col-sm-12 col-md-6 order-${
                    index % 2 === 0 ? 2 : 1
                  }`}
                >
                  <div className="product-image">
                    <img src={img} alt={Title} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;