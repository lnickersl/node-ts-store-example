import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Image, Row} from 'react-bootstrap';
import {ProductContext} from '../..';
import {IProductInfo} from '../../types/IProductInfo';
import AdminCreate from './AdminCreate';
import {createProduct} from '../../http/productAPI';
import {IBrand} from '../../types/IBrand';
import {ICategory} from '../../types/ICategory';
import {fetchCategories} from '../../http/categoryAPI';
import {fetchBrands} from '../../http/brandAPI';
import {observer} from 'mobx-react-lite';

const CreateProduct = observer(
  ({show, onHide}: {show: boolean; onHide: () => void}) => {
    const productStore = useContext(ProductContext);

    const [name, setName] = useState('');
    const [price, setPrice] = useState<number>(0);

    const [imgFile, setImgFile] = useState<File>();
    const [selectedBrand, setSelectedBrand] = useState<IBrand>();
    const [selectedCategory, setSelectedCategory] = useState<ICategory>();
    const [info, setInfo] = useState<Partial<IProductInfo>[]>([]);

    const addInfo = () => {
      setInfo([...info, {key: '', value: '', time: Date.now()}]);
    };

    const deleteInfo = (index: number) => {
      info.splice(index, 1);
      setInfo([...info]);
    };

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (!file) return;

      setImgFile(file);
    };

    const changeInfoKey = (key: string, index: number) => {
      info[index].key = key;
      setInfo([...info]);
    };

    const changeInfoValue = (value: string, index: number) => {
      info[index].value = value;
      setInfo([...info]);
    };

    const addProduct = () => {
      const formData = new FormData();

      formData.append('name', name || '');
      formData.append('price', String(price));
      formData.append('brandId', String(selectedBrand?.id || 0));
      formData.append('categoryId', String(selectedCategory?.id || 0));
      formData.append('img', imgFile as Blob);
      formData.append('info', JSON.stringify(info));

      return createProduct(formData).then(onHide);
    };

    useEffect(() => {
      fetchCategories().then(data => productStore.setCategories(data));
      fetchBrands().then(data => productStore.setBrands(data));
    }, []);

    return (
      <AdminCreate
        show={show}
        onHide={onHide}
        onCreate={addProduct}
        title={'Добавить новый продукт'}
      >
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {selectedCategory?.name || 'Выберите категорию'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {productStore.categories.map(category => (
                <Dropdown.Item
                  onClick={() => setSelectedCategory(category)}
                  key={category.id}
                >
                  {category.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {selectedBrand?.name || 'Выбрать брэнд'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {productStore.brands.map(brand => (
                <Dropdown.Item
                  onClick={() => setSelectedBrand(brand)}
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
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Form.Control
            className="mt-2 mb-2"
            placeholder="Введите стоимость товара"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            type="number"
          />
          <Form.Control
            className="mt-2 mb-2"
            type="file"
            onChange={onFileChange}
          />
          <Image
            height={400}
            src={imgFile ? URL.createObjectURL(imgFile as Blob) : ''}
          />
          <hr />
          <Button onClick={() => addInfo()} variant={'outline-dark'}>
            Добавить новое свойство
          </Button>
          {info.map((info, index) => (
            <Row className="mt-2 mb-2" key={info.time}>
              <Col md={4}>
                <Form.Control
                  value={info.key}
                  onChange={e => changeInfoKey(e?.target?.value || '', index)}
                  placeholder="Имя характеристики"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={info.value}
                  onChange={e => changeInfoValue(e?.target?.value || '', index)}
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
  }
);

export default CreateProduct;
