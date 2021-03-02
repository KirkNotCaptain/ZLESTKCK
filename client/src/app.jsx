import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import ProductContext from './context.js';

import fetchRelatedProducts from './FetchData/fetchRelatedProducts.js';
import fetchProductDetails from './FetchData/fetchProductDetails.js';

import ProductContainer from './Product/ProductContainer.jsx'
import QAContainer from './QA/QAContainer.jsx'
import RelatedContainer from './Related/RelatedContainer.jsx'
import ReviewContainer from './Reviews/ReviewContainer.jsx'



let App = function(props) {

  console.log('rerender!');

  //using 11101 as the default product
  const [currentProduct, setProduct] = useState("11101");
  const [relatedItems, setRelatedItems] = useState([]);


  var fetchRelatedItems = () => {

    var relatedItems = [];

    fetchRelatedProducts(currentProduct)
    .then((data) => {
      //data will contain all of the related items product objects
      console.log('all related products', data);

      setRelatedItems(data);

    })
  }

  var fetchCurrentProduct = () => {

    fetchProductDetails(currentProduct)
    .then((data) => {
      console.log('current product: ', data);
    })

  }

  var updateCurrentProduct = (newProductID) => {
    // console.log('new product id: ', newProductID);
    // console.log('current product: ', currentProduct)

    //this works and updates the current product
    setProduct(newProductID)
  }

  useEffect(() => {
    console.log('use effect current product:', currentProduct)
    fetchRelatedItems()
    fetchCurrentProduct()
  }, [currentProduct]);



  return (
    <ProductContext.Provider value={{
      relatedProducts: relatedItems,
      updateCurrentProduct: updateCurrentProduct
    }}>
      <div>
        <ProductContainer />
        <RelatedContainer />
        <QAContainer />
        <ReviewContainer />
      </div>
    </ProductContext.Provider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);