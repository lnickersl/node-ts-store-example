import React from 'react';
import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

const Product = () => {
  const {id} = useParams();
  const product = {
    id: 0,
    name: 'Samsung X11R590',
    img: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/2f9eba33ac847b71d34c7627ce668af3/cab1ed89be567118a019bdef198ef818e21b8c583b3a55ee7584337c1ae80e65.jpg.webp',
    price: 19300,
    brandId: 0,
    categoryId: 4,
    rating: 1.2111,
  };

  const descriptions = [
    {id: 0, key: 'Оперативная память', value: '5 Гб'},
    {id: 1, key: 'Камера', value: '12 Мп'},
    {id: 2, key: 'Процессор', value: 'Arm x64'},
    {id: 3, key: 'Ядра', value: '2'},
    {id: 4, key: 'Аккумулятор', value: '3000'},
  ];

  return (
    <Container className="mt-2">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={product.img}></Image>
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{product.name}</h2>
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
              {product.rating.toFixed(1)}
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
        {descriptions.map(info => (
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
