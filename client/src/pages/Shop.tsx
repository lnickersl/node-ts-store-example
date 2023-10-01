import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import CategoryBar from '../components/CategoryBar';
import BrandBar from '../components/BrandBar';
import ProductList from '../components/ProductList';
import {observer} from 'mobx-react-lite';
import {ProductContext} from '..';
import {fetchCategories} from '../http/categoryAPI';
import {fetchBrands} from '../http/brandAPI';
import {fetchProducts} from '../http/productAPI';

const Shop = observer(() => {
  const productStore = useContext(ProductContext);

  useEffect(() => {
    fetchCategories().then(data => productStore.setCategories(data));
    fetchBrands().then(data => productStore.setBrands(data));
    fetchProducts().then(data => productStore.setProducts(data));
  }, []);

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
});

export default Shop;
