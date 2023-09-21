import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from 'react-bootstrap';
import {Context} from '../..';
import {IProductInfo} from '../../types/IProductInfo';

const CreateProduct = ({show, onHide}: {show: boolean; onHide: () => void}) => {
  const {product} = useContext(Context);
  const [info, setInfo] = useState<IProductInfo[]>([]);

  const addInfo = () => {
    setInfo([...info, {key: '', value: '', time: Date.now()}]);
  };

  const deleteInfo = (index: number) => {
    info.splice(index, 1);
    setInfo([...info]);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый продукт
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Выбрать категорию</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.categories.map(category => (
                <Dropdown.Item key={category.id}>{category.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Выбрать брэнд</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.brands.map(brand => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-2 mb-2"
            placeholder="Введите азвание товара"
          />
          <Form.Control
            className="mt-2 mb-2"
            placeholder="Введите стоимость товара"
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
                <Form.Control placeholder="Имя характеристики" />
              </Col>
              <Col md={4}>
                <Form.Control placeholder="Значение характеристики" />
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateProduct;
