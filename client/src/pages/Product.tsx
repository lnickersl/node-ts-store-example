import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {fetchProduct} from '../http/productAPI';
import {IProduct} from '../types/IProduct';
import {PRODUCT_IMG_ROUTE} from '../utils/consts';

const Product = () => {
  const {id} = useParams();
  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productId = Number(id);

    if (Number.isNaN(productId)) return;

    fetchProduct(productId)
      .then(prod => setProduct(prod))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div></div>;

  if (!product) return <h2 color="red">Товар не найдет</h2>;

  return (
    <Container className="mt-2">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            style={{objectFit: 'contain'}}
            src={PRODUCT_IMG_ROUTE + product.img}
          ></Image>
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>
              {id} {product.name}
            </h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: 'url(/assets/big-star.png) no-repeat center center',
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 32,
              }}
            >
              {product.rating?.toFixed(1) || 0}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>От: {product.price} руб.</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="flex-d flex-column m-3">
        <h1 className="text-start">Характеристики</h1>
        {(product.info || []).map(info => (
          <Row
            key={info.id}
            style={{
              background: info.id % 2 === 0 ? 'lightgray' : 'transparent',
              padding: 10,
            }}
          >
            {info.key}: {info.value}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default Product;
