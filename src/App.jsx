import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import Cart from './pages/Cart/Cart';
import Registration from './pages/Registration/Registration';
import Kid from './pages/Kid/Kid';
import Discount from './pages/Discount/Discount';
import Popular from './pages/Popular/Popular';
import Audio from './pages/Audio/Audio';
import Fantasy from './pages/CategoriesOfHeader/Fantasy/Fantasy';
import History from './pages/CategoriesOfHeader/History/History';
import Novel from './pages/CategoriesOfHeader/Novel/Novel';
import Thriller from './pages/CategoriesOfHeader/Thriller/Thriller';
import Science from './pages/CategoriesOfHeader/Science/Science';
import Payment from './pages/Payment/Payment';
import Delivery from './pages/Delivery/Delivery';
import Return from "./pages/Return/Return"
import Conditions from './pages/Conditions/Conditions';
import LogOut from './pages/LogOut/LogOut';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/registration' element={<Registration/>} />
          <Route path='/Kid' element={<Kid/>} />
          <Route path='/discount' element={<Discount/>} />
          <Route path='/popular' element={<Popular/>} />
          <Route path='/audio' element={<Audio/>} />
          <Route path='/fantasy' element={<Fantasy/>} />
          <Route path='/history' element={<History/>} />
          <Route path='/novel' element={<Novel/>} />
          <Route path='/return' element={<Return/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/delivery' element={<Delivery/>} />
          <Route path='/science' element={<Science/>} />
          <Route path='/thriller' element={<Thriller/>} />
          <Route path='/conditions' element={<Conditions/>}/>
          <Route path='/LogOut' element={<LogOut/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
