import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/common/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home></Home>
    </div>
  );
}

export default App;
