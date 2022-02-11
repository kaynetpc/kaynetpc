
import {
  Routes,
  Route} from 'react-router-dom';
import './style/style.css';
import './style/main-body.css';
import Home from './components/windows/Home';
import Maintenance from './components/windows/Maintenance';
import HBD from '../../HBD';

function App() {
  return (
    <Routes>
      <Route path={"/*"}  element={
        <div className="App">
          <Maintenance show={true}>
            <Home/>
          </Maintenance>
        </div>
      }  />
      <Route path="/hbd"  element={
        <HBD/>
      } />
    </Routes>
  );
}

export default App;
