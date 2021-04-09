import logo from './logo.svg';
import './App.css';
import User from './components/User/User';

function App() {
  

  return (
    <div className='App'>
      <h2>Current Value: </h2>
      <button>Toggle</button>
      <User></User>
    </div>
  );
}

export default App;
