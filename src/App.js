import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Title from './Title';
import ProductList from './ProductList';
import LoginPage from './LoginPage';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Title/>
      <Routes>
        <Route path='/product' element={<ProductList/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='*' element={<NotFound/>}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
