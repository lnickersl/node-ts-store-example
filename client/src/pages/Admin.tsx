import React, {PropsWithChildren, useContext, useState} from 'react';
import {Button, ButtonProps, Container} from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateCategory from '../components/modals/CreateCategory';
import CreateProduct from '../components/modals/CreateProduct';
import {AuthContext} from '..';

const AdminButton = (props: PropsWithChildren<ButtonProps>) => (
  <Button {...props} variant={'outline-dark'} className="mt-3 p-3">
    {props.children}
  </Button>
);

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);
  const auth = useContext(AuthContext);

  return (
    <Container className="d-flex flex-column">
      <p>{auth?.user?.role || 'Нет'}</p>
      <AdminButton onClick={() => setBrandVisible(true)}>
        Добавить бренд
      </AdminButton>
      <AdminButton onClick={() => setCategoryVisible(true)}>
        Добавить категорию
      </AdminButton>
      <AdminButton onClick={() => setProductVisible(true)}>
        Добавить товар
      </AdminButton>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateCategory
        show={categoryVisible}
        onHide={() => setCategoryVisible(false)}
      />
      <CreateProduct
        show={productVisible}
        onHide={() => setProductVisible(false)}
      />
    </Container>
  );
};

export default Admin;
