import React, {useContext} from 'react';
import ProductContext from '../context.jsx';
import ModalWindowTable from './Modal-Window-Table.jsx';


var RelatedModalWindow = ({handleModalClose, product, sharedFeatures}) => {
  const context = useContext(ProductContext);

  return (
    <div class="modal-content">
      <h2 className='modal-window-comparing'>Comparing</h2>
      <ModalWindowTable
      product={product}
      sharedFeatures={sharedFeatures}
      key={product.id}/>
    </div>
  )

}

export default RelatedModalWindow;