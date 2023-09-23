import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import {createCategory} from '../../http/categoryAPI';
import AdminCreate from './AdminCreate';

const CreateCategory = ({
  show,
  onHide,
}: {
  show: boolean;
  onHide: () => void;
}) => {
  const [name, setName] = useState('');

  return (
    <AdminCreate
      show={show}
      onHide={onHide}
      onCreate={() => createCategory({name})}
      title={'Добавить новую категорию'}
    >
      <Form>
        <Form.Control
          onChange={e => setName(e.target.value)}
          placeholder="Введите название категории"
        ></Form.Control>
      </Form>
    </AdminCreate>
  );
};

export default CreateCategory;
