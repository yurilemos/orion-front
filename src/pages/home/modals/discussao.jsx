import React from 'react';
import Modal from '../../../components/modal';
import { Form, Input } from 'antd';

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 18,
  },
};
/* Modal de adição das discussões */
const DiscussaoModal = (props) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={props.open}
      onCancel={props.onClose}
      onOk={() => {
        form.submit();
      }}
      title={props.title}
    >
      <Form
        name="basic"
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={props.onFinish}
        onFinishFailed={(e) => {}}
        autoComplete="off"
        {...layout}
      >
        <Form.Item
          label="Titulo"
          name="titulo"
          rules={[
            {
              required: true,
              message: 'O titulo é obrigatório!',
            },
          ]}
        >
          <Input style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Descrição"
          name="descricao"
          style={{ margin: '2rem 0' }}
        >
          <Input.TextArea rows={4} autoSize={true} style={{ width: '100%' }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default DiscussaoModal;
