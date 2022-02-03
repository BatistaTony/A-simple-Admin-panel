import { useEffect } from 'react';
import 'antd/dist/antd.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/home';
import CreateAndUpdate from './pages/CreateAndUpdate';
import { getUsers, resetUsers } from './store/reducers/users';
import { RootState } from './store';

function App() {
  const dashboard = useSelector((state: RootState) => state.dashboard);

  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof dashboard === 'undefined') {
      dispatch(resetUsers());
    }
    dispatch(getUsers());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<CreateAndUpdate type="edit" />} />
        <Route path="/create" element={<CreateAndUpdate type="create" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
