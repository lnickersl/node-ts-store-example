import React from 'react';
import {observer} from 'mobx-react-lite';
import {useContext} from 'react';
import {Context} from '..';
import {Card, Container} from 'react-bootstrap';

const BrandBar = observer(() => {
  const {product} = useContext(Context);
  return (
    <Container className="d-flex flex-wrap">
      {product.brands.map(brand => (
        <Card
          style={{cursor: 'pointer'}}
          className="p-3 me-2 mt-2"
          key={brand.id}
          onClick={() => product.selectBrand(brand)}
          border={product.selectedBrand?.id === brand.id ? 'danger' : 'normal'}
        >
          {brand.name}
        </Card>
      ))}
    </Container>
  );
});

export default BrandBar;
