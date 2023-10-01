import React from 'react';
import {observer} from 'mobx-react-lite';
import {useContext} from 'react';
import {ProductContext} from '..';
import {Card, Container} from 'react-bootstrap';

const BrandBar = observer(() => {
  const productStore = useContext(ProductContext);
  return (
    <Container className="d-flex flex-wrap">
      {productStore.brands.map(brand => (
        <Card
          style={{cursor: 'pointer'}}
          className="p-3 me-2 mt-2"
          key={brand.id}
          onClick={() => productStore.selectBrand(brand)}
          border={
            productStore.selectedBrand?.id === brand.id ? 'danger' : 'normal'
          }
        >
          {brand.name}
        </Card>
      ))}
    </Container>
  );
});

export default BrandBar;
