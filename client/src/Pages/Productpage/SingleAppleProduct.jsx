import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../Iphone/products.json";

const SingleAppleProduct = () => {
  const [productData, setProductData] = useState(null);
  const { pid } = useParams();

  // useEffect(() => {
  //   fetch("http://localhost:1111/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const singleProduct = data.filter((x) => x.id == pid);
  //       setProduct(singleProduct);
  //     });
  // }, []);
  useEffect(() => {
    const singleProduct = productsData.find((x) => x.Id === pid);
    setProductData(singleProduct);
  }, [pid]);

  if (!productData) return <div>Loading...</div>;

  const { Id, img, Title, Brief, StartPrice, PriceRange, Description } =
    productData;

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center bottom-50">
            <div className="col-12">
              <div className="title-wrapper bold">{Title}</div>
              <div className="brief-description">{Brief}</div>
            </div>
          </div>

          <div className="row justify-content-center text-center product-holder h-100">
            <div className={`col-sm-12 col-md-6 my-auto`}>
              <div className="starting-price">{`Starting at ${StartPrice}`}</div>
              <div className="monthly-price">{PriceRange}</div>
              <div className="product-details">{Description}</div>
            </div>

            <div className={`col-sm-12 col-md-6`}>
              <div className="product-image">
                <img src={img} alt={Title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleAppleProduct;
