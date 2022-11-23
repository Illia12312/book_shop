import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import Cart from './pages/Cart/Cart';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/registration' element={<Registration/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
