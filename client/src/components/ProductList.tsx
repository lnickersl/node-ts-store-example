import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {ProductContext} from '..';
import {Row} from 'react-bootstrap';
import ProductItem from './ProductItem';

const ProductList = observer(() => {
  const productStore = useContext(ProductContext);
  return (
    <Row className="d-flex">
      {productStore.products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Row>
  );
});

export default ProductList;
