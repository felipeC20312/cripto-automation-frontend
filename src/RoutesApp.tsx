import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Error from './pages/Error';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Error />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default RoutesApp;
