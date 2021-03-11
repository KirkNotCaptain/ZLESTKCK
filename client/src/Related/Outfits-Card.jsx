import React from 'react';
import StarRating from '../Reviews/Star-Rating.jsx';

var OutfitsCard = ({product, removeOutfit}) => {

  // console.log('product: ', product);

  const calculateSalePrice = () => {
    if (product.styles.salePrice) {
      return (
        <span className='related-card-sale-price'><strike>{`$${product.styles.price}`}</strike> {`$${product.styles.salePrice}`}</span>
      )
    } else {
      return (
        <div className='related-card-price'>{`$${product.styles.price}`}</div>
      )
    }
  };

  return (
    <div className='outfits-list-card'>
      <span className="fa fa-times checked" onClick={() => {removeOutfit(product)}}></span>
      <img className='outfits-list-card-img' src={product.styles.photo}/>
      <h3 className='outfits-card-category'>{product.category}</h3>
      <h2 className='outfits-card-name'>{product.name}</h2>
      <div className='outfits-card-price'>{calculateSalePrice()}</div>
      <StarRating
      ratingsList={product.ratings}
      class={'outfit-card-ratings'}
      dimension={'20px'}
      />
    </div>
  )

}

export default OutfitsCard;