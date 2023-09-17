import React from 'react';
import {Card, Col, Image} from 'react-bootstrap';
import {IProduct} from '../types/IProduct';
import {useNavigate} from 'react-router-dom';
import {PRODUCT_ROUTE} from '../utils/consts';

const ProductItem = ({product}: {product: IProduct}) => {
  const navigate = useNavigate();
  return (
    <Col md={3}>
      <Card
        style={{width: 180, cursor: 'pointer'}}
        className="ms-3 mt-3"
        onClick={() => navigate(PRODUCT_ROUTE + '/' + String(product.id))}
      >
        <Image width={180} height={180} src={product.img}></Image>
        <div className="ms-1 mt-1 d-flex justify-content-between align-items-center">
          <div className="text-black-50">Samsung</div>
          <div className="d-flex align-items-center">
            <div>{product.rating.toFixed(1)}</div>
            <Image
              width={16}
              height={16}
              className="ms-1 me-1"
              src="/assets/star.png"
            ></Image>
          </div>
        </div>
        <div className="ms-1 text-start">{product.name}</div>
      </Card>
    </Col>
  );
};

export default ProductItem;
