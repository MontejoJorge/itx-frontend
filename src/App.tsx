import { Routes, Route } from 'react-router';
import { Header } from './components/header';
import { Home } from './pages/home';
import { Product } from './pages/product';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}