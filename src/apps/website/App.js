import './style/style.css';
import './style/main-body.css';
import Home from './components/windows/Home';
import Maintenance from './components/windows/Maintenance';

function App() {
  return (
    <div className="App">
      <Maintenance show={true}>
         <Home/>
      </Maintenance>
    </div>
  );
}

export default App;
