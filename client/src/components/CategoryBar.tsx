import {observer} from 'mobx-react-lite';
import React, {useContext} from 'react';
import {ProductContext} from '..';
import {ListGroup} from 'react-bootstrap';

const CategoryBar = observer(() => {
  const productStore = useContext(ProductContext);
  return (
    <ListGroup>
      {(productStore?.categories || []).map(category => (
        <ListGroup.Item
          style={{cursor: 'pointer', userSelect: 'none'}}
          active={category.id === productStore?.selectedCategory?.id}
          key={category.id}
          onClick={() =>
            productStore.selectCategory(
              category === productStore.selectedCategory ? null : category
            )
          }
        >
          {category.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default CategoryBar;
