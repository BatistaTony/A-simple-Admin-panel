import React, { FormEvent, useEffect, useState } from 'react';
import PageLayout from '../../Layout';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { actionCreateNewUser, actionUpdateUser } from '../../store/reducers/users';
import { CustomForm, FormButton } from './styles';
import { validateEmail } from '../../helpers/helper';
import CustomInput from '../../components/Input';

interface CreateAndUpdateProps {
  type: 'create' | 'edit';
}

interface FormDataType {
  name: string;
  email: string;
}

const CreateAndUpdate = ({ type }: CreateAndUpdateProps) => {
  const [userState, setUserState] = useState<FormDataType>({
    name: '',
    email: ''
  });
  const [errorMsg, setErrorMsg] = useState<string>('');
  const { flashUser, users } = useSelector((state: RootState) => state.dashboard);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let isEditing = type === 'edit';

  const userFound = isEditing ? users.find((user) => user.id === flashUser) : null;

  useEffect(() => {
    if (type === 'edit') {
      setUserState({
        name: userFound?.name as string,
        email: userFound?.email as string
      });
    }

    return;
  }, [type, userFound?.email, userFound?.name]);

  const create = (data: FormDataType) => {
    dispatch(
      actionCreateNewUser({
        ...data,
        address: {
          city: ''
        },
        username: `@${data.name.replace(' ', '_')}`
      })
    );
    navigate('/');
  };

  const update = (data: FormDataType) => {
    dispatch(actionUpdateUser({ ...userFound, ...data }));
    navigate('/');
  };

  const handleValidationForm = () => {
    if (userState.email === '' || userState.name === '') {
      setErrorMsg('*All the fields are required*');
      return false;
    } else if (!validateEmail(userState.email)) {
      setErrorMsg('*Email is invalid*');
      return false;
    } else {
      return true;
    }
  };

  const onFinish = (e: FormEvent) => {
    e.preventDefault();
    if (handleValidationForm()) {
      if (type === 'create') {
        create(userState);
      }

      if (type === 'edit') {
        update(userState);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    e.preventDefault();
    setErrorMsg('');
    setUserState({
      ...userState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageLayout title={isEditing ? 'Edit user' : 'Create User'}>
      <CustomForm>
        <form onSubmit={onFinish}>
          <CustomInput
            placeholder="name"
            type="text"
            value={userState.name}
            name="name"
            onChange={handleChange}
          />
          <CustomInput
            placeholder="email"
            type="text"
            value={userState.email}
            name="email"
            onChange={handleChange}
          />
          {!!errorMsg && <p className="error_msg">{errorMsg}</p>}
          <FormButton bg="#c7acac" onClick={() => navigate('/')}>
            cancel
          </FormButton>
          <FormButton bg="#00b4d8">{type === 'edit' ? 'update' : 'create'}</FormButton>
        </form>
      </CustomForm>
    </PageLayout>
  );
};

export default CreateAndUpdate;
