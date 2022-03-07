import './App.css';
import Dropdown from './Dropdown';
import Api from './Api';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer />
      <Dropdown />
      <Api />
    </div>
  );
}

export default App;
