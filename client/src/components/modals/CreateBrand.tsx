import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import {createBrand} from '../../http/brandAPI';
import AdminCreate from './AdminCreate';

const CreateBrand = ({show, onHide}: {show: boolean; onHide: () => void}) => {
  const [name, setName] = useState('');

  return (
    <AdminCreate
      show={show}
      onHide={onHide}
      onCreate={() => createBrand({name})}
      title={'Добавить новый брэнд'}
    >
      <Form>
        <Form.Control
          onChange={e => setName(e.target.value)}
          placeholder="Введите название брэнда"
        ></Form.Control>
      </Form>
    </AdminCreate>
  );
};

export default CreateBrand;
