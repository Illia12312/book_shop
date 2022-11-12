import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MySlider from './components/MySlider/MySlider';
import Christmas from './components/Christmas/Christmas';
import NewModels from './components/newModels/NewModels';

function App() {
  return (
    <div className="App">
      <Header/>
      <Christmas/>
      <NewModels/>
      <MySlider/>
      <Footer/>
    </div>
  );
}

export default App;
