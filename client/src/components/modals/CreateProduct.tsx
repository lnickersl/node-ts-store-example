import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Row} from 'react-bootstrap';
import {Context} from '../..';
import {IProductInfo} from '../../types/IProductInfo';
import AdminCreate from './AdminCreate';
import {createProduct} from '../../http/productAPI';

const CreateProduct = ({show, onHide}: {show: boolean; onHide: () => void}) => {
  const {product} = useContext(Context);

  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [brandId, setBrandId] = useState<number>();
  const [categoryId, setCategoryId] = useState<number>();
  const [price, setPrice] = useState<number>();
  const [info, setInfo] = useState<IProductInfo[]>([]);

  const addInfo = () => {
    setInfo([...info, {key: '', value: '', time: Date.now()}]);
    setImg(
      'https://www.meme-arsenal.com/memes/48a07908813b3d93ae67c1302dfc35ae.jpg'
    );
  };

  const deleteInfo = (index: number) => {
    info.splice(index, 1);
    setInfo([...info]);
  };

  return (
    <AdminCreate
      show={show}
      onHide={onHide}
      onCreate={() =>
        createProduct({name, price, img, brandId, categoryId, info})
      }
      title={'Добавить новый продукт'}
    >
      <Form>
        <Dropdown className="mt-2 mb-2">
          <Dropdown.Toggle>Выбрать категорию</Dropdown.Toggle>
          <Dropdown.Menu>
            {product.categories.map(category => (
              <Dropdown.Item
                onClick={() => setCategoryId(category.id)}
                key={category.id}
              >
                {category.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="mt-2 mb-2">
          <Dropdown.Toggle>Выбрать брэнд</Dropdown.Toggle>
          <Dropdown.Menu>
            {product.brands.map(brand => (
              <Dropdown.Item
                onClick={() => setBrandId(brand.id)}
                key={brand.id}
              >
                {brand.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Form.Control
          className="mt-2 mb-2"
          placeholder="Введите название товара"
          onChange={e => setName(e.target.value)}
        />
        <Form.Control
          className="mt-2 mb-2"
          placeholder="Введите стоимость товара"
          onChange={e => setPrice(Number(e.target.value))}
          type="number"
        />
        <Form.Control className="mt-2 mb-2" type="file" />
        <hr />
        <Button onClick={() => addInfo()} variant={'outline-dark'}>
          Добавить новое свойство
        </Button>
        {info.map((info, index) => (
          <Row className="mt-2 mb-2" key={info.time}>
            <Col md={4}>
              <Form.Control
                onChange={e => {
                  info.key = e.target.value;
                }}
                placeholder="Имя характеристики"
              />
            </Col>
            <Col md={4}>
              <Form.Control
                onChange={e => {
                  info.value = e.target.value;
                }}
                placeholder="Значение характеристики"
              />
            </Col>
            <Col md={4}>
              <Button
                onClick={() => deleteInfo(index)}
                variant={'outline-danger'}
              >
                Удалить
              </Button>
            </Col>
          </Row>
        ))}
      </Form>
    </AdminCreate>
  );
};

export default CreateProduct;
