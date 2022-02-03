import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { User } from '../../types/user';
import { useNavigate } from 'react-router-dom';
import useToggle from '../../hooks/useToggle';
import PageLayout from '../../Layout';
import CustomModal from '../../components/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import CustomMessage from '../../components/Message';
import CustomTable from '../../components/Table';
import { actionDeleteUser, deleteUser, resetFlashUser, setFlashUser } from '../../store/reducers/users';

const Home = () => {
  const {users} = useSelector((state: RootState) => state.dashboard);
  const [userId, setUserId] = useState<number | null>(null);
  const dispatch = useDispatch()

  let navigate = useNavigate();
  const { isToggled, toggle } = useToggle(false);

  const showModalDelete = (id: number) => {
    setUserId(id)
    toggle();
  };

  const handleOnEdit = (id: number) => {
    dispatch(setFlashUser(id))
    navigate('/edit');
  };

  const handleDleteUser = (id:number) => {
    dispatch(actionDeleteUser(id))
    toggle();
  };

  useEffect(() => {
    dispatch(resetFlashUser())
  }, []);

  const singleUserFound: User | undefined = users.find((user) => user.id === userId);

  return (
    <PageLayout title="Dashboard">
      <CustomModal
        visible={isToggled}
        onCancel={toggle}
        onOkClick={()=> handleDleteUser(userId as number)}
        title="Delete user">
        {!!singleUserFound && (
          <p>
            Do you really want to delete the user called {singleUserFound.name} who lives at
            {" "}{singleUserFound.address?.city} ?
          </p>
        )}
      </CustomModal>

      <Button
        type="primary"
        onClick={() => navigate('/create')}
        style={{
          background: 'blue',
          marginBottom: '10px',
          marginTop: '20px',
          alignSelf: 'flex-end',
          justifySelf: 'flex-end'
        }}>
        Creat new user
      </Button>

      {users.length <= 0 && (
        <CustomMessage>
          <h1>There is no user on the database, please create new one !</h1>
        </CustomMessage>
      )}

      {users.length > 0 && (
        <CustomTable data={users} handleDelete={showModalDelete} handleEdit={handleOnEdit} />
      )}
    </PageLayout>
  );
};

export default Home;
