import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import Cart from './pages/Cart/Cart';
import Registration from './pages/Registration/Registration';
import Kid from './pages/Kid/Kid';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/registration' element={<Registration/>} />
          <Route path='/Kid' element={<Kid/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
