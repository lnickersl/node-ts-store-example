import React, {useContext} from 'react';
import {ProductContext} from '..';
import {Pagination} from 'react-bootstrap';
import {observer} from 'mobx-react-lite';

const Pages = observer(() => {
  const productStore = useContext(ProductContext);

  const pages: number[] = [];

  const pageCount = Math.ceil(productStore.totalCount / productStore.limit);

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <Pagination className="mt-5">
      {pages.map(page => (
        <Pagination.Item
          key={page}
          active={productStore.page === page}
          onClick={() => productStore.setPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;
