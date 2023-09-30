import React, {ReactNode, useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

function AdminCreate<T>({
  show,
  onHide,
  onCreate,
  children,
  title,
}: {
  show: boolean;
  onHide: () => void;
  onCreate: () => Promise<T>;
  children: ReactNode;
  title: string;
}) {
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const create = () => {
    setMessage('');

    onCreate()
      .then(() => {
        setSuccess(true);
        setMessage('Добавлено!');
      })
      .catch(err => {
        const error = err?.response?.data?.message;

        setSuccess(false);
        setMessage(error?.toString() || 'Ошибка!');
      });
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
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{color: success ? 'green' : 'red'}}>{message}</p>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={create}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AdminCreate;
