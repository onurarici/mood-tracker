import { useSelector } from 'react-redux';
import './App.css';
import Explication from './components/Explication';
import Welcome from './components/Welcome';
import Row from './components/Row';
import Calender from './components/Calender';


function App() {
  const isLoggedIn = useSelector(state=>state.welcome.isLoggedIn)
  return (
    <div className="App">
      <Calender />
      {/* <Row/> */}
     
      {/* {!isLoggedIn && <Welcome/>} */}
      {/* {isLoggedIn && <Explication />} */}
    </div>
  );
}

export default App;
