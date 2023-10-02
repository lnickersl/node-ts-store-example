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
import Pages from '../components/Pages';

const Shop = observer(() => {
  const productStore = useContext(ProductContext);

  useEffect(() => {
    fetchCategories().then(data => productStore.setCategories(data));
    fetchBrands().then(data => productStore.setBrands(data));
  }, []);

  useEffect(() => {
    fetchProducts(
      productStore.selectedCategory?.id,
      productStore.selectedBrand?.id,
      productStore.page,
      productStore.limit
    ).then(data => {
      productStore.setProducts(data.rows);
      productStore.setTotalCount(data.count);
      console.log(data.count);
    });
  }, [
    productStore.page,
    productStore.selectedBrand,
    productStore.selectedCategory,
  ]);

  useEffect(
    () => productStore.setPage(1),
    [productStore.selectedBrand, productStore.selectedCategory]
  );

  return (
    <Container>
      <Row>
        <Col md={3}>
          <CategoryBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <ProductList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
