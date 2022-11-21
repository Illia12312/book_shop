import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path='/cart' element={<Cart/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
