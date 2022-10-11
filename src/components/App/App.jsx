import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';
import CategoryNav from '../Header/CategoryNav';
import styles from '../Header/CategoryNav.module.css';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Category from '../Category/Category';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <CategoryNav styles={styles} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:categoryTitle" element={<Category />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
