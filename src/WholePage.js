import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import ProductList from './ProductList';
import LoginPage from './LoginPage';
import NotFound from './NotFound';
import './css/base.css'
import styles from './css/WholePage.module.css'

function WholePage() {
  return (
    <div className={styles.pageContainer}>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/product' element={<ProductList/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='*' element={<NotFound/>}/>        
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default WholePage;
