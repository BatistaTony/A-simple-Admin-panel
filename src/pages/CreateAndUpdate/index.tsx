import React from 'react';
import PageLayout from '../../Layout';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { actionCreateNewUser, actionUpdateUser } from '../../store/reducers/users';

interface CreateAndUpdateProps {
  type: 'create' | 'edit';
}

interface FormDataType {
  name: string;
  email: string;
}

const CreateAndUpdate = ({ type }: CreateAndUpdateProps) => {
  const { flashUser, users } = useSelector((state: RootState) => state.dashboard);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let isEditing = type === 'edit';

  const userFound = isEditing ? users.find((user) => user.id === flashUser) : null;

  const create = (data: FormDataType) => {
    dispatch(
      actionCreateNewUser({
        ...data,
        address: {
          city: ''
        },
        username: `@${data.name.replace(" ","_")}`
      })
    );
    navigate('/');
  };

  const update = (data: FormDataType) => {
    dispatch(actionUpdateUser({ ...userFound, ...data }));
    navigate('/');
  };

  const onFinish = (records: any) => {
    if (type === 'create') {
      create(records);
    }

    if (type === 'edit') {
      update(records);
    }
  };
  const onFinishFailed = () => {};

  return (
    <PageLayout title={isEditing ? 'Edit user' : 'Create User'}>
      <Form
        name="create-user"
        layout="vertical"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item
          label="Name"
          name="name"
          initialValue={isEditing ? userFound?.name : null}
          rules={[{ required: true, message: 'Please input your user name!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          initialValue={isEditing ? userFound?.email : null}
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'email has to be valid' }
          ]}>
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            style={{ background: 'orange', marginRight: '20px' }}
            type="primary"
            onClick={() => navigate('/')}>
            cancel
          </Button>
          <Button type="primary" htmlType="submit">
            {isEditing ? 'Update' : 'Create'}
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  );
};

export default CreateAndUpdate;
