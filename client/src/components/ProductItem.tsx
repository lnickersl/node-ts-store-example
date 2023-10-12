import React from 'react';
import {Card, Col, Image} from 'react-bootstrap';
import {IProduct} from '../types/IProduct';
import {useNavigate} from 'react-router-dom';
import {PRODUCT_IMG_ROUTE, PRODUCT_ROUTE} from '../utils/consts';

const ProductItem = ({product}: {product: IProduct}) => {
  const navigate = useNavigate();
  return (
    <Col md={3}>
      <Card
        style={{cursor: 'pointer'}}
        className="ms-3 mt-3"
        onClick={() => navigate(PRODUCT_ROUTE + '/' + String(product.id))}
      >
        <Image
          style={{width: 180, height: 180, objectFit: 'contain'}}
          src={PRODUCT_IMG_ROUTE + product.img}
        ></Image>
        <div className="ms-1 mt-1 d-flex justify-content-between align-items-center">
          <div className="text-black-50">{product?.brand?.name || ''}</div>
          <div className="d-flex align-items-center">
            <div>{Number(product?.rating)?.toFixed(1) || 0}</div>
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
