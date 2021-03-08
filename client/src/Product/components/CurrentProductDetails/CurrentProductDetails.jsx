import React from "react";

const CurrentProductDetails = ({ CurrentProductInfo, CurrentProductView }) => {
  if (CurrentProductInfo.defaultProp === true) {
    return <div></div>;
  }

  let product = CurrentProductInfo;
  let productStyle = CurrentProductView;

  if (productStyle.sale_price === undefined ) {
    productStyle.sale_price = 0;
  }



  return (
    <>
      <div className="ProductDetailContainer">
        <div className="readAllReviewsContainer">
          <a href="related-container"> Read All Reviews! </a>
        </div>

        <div>
          <div className="categoryText">
            <h3> Category:</h3> {product.category}
          </div>
          <div> Product Name: {product.name} </div>
          <div className="priceText">
            {productStyle.sale_price === 0 ||
            productStyle.sale_price === undefined ||
            productStyle.sale_price === null ? (
              <div>
                {" "}
                ${productStyle.default_price ||
                  productStyle.original_price}{" "}
              </div>
            ) : (
              <div>
                {" "}
                <div className="saleNumber"> {productStyle.sale_price} </div>  
                <div className="crossedOutOriginalPrice">
                  {" "}
                  {productStyle.original_price ||
                    productStyle.default_price}{" "}
                </div>
                
              </div>
            )}
          </div>
          <div className="styleText">STYLE > {productStyle.name}</div>
        </div>
      </div>
    </>
  );
};

export default CurrentProductDetails;
