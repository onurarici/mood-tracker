import { useSelector } from 'react-redux';
import './App.css';
import Explication from './components/Explication';
import Welcome from './components/Welcome';


function App() {
  const isLoggedIn = useSelector(state=>state.welcome.isLoggedIn)
  return (
    <div className="App">
      {!isLoggedIn && <Welcome/>}
      {isLoggedIn && <Explication />}
    </div>
  );
}

export default App;
