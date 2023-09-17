import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import CategoryBar from '../components/CategoryBar';
import BrandBar from '../components/BrandBar';
import ProductList from '../components/ProductList';

const Shop = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <CategoryBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
