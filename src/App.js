import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import ProductList from './ProductList';
import LoginPage from './LoginPage';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/product' element={<ProductList/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='*' element={<NotFound/>}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
