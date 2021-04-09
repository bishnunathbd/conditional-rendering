import logo from './logo.svg';
import './App.css';
import User from './components/User/User';
import { useState } from 'react';

function App() {
  const [familiar, setFamiliar] = useState(false);

  // const handleToggle = () => setFamiliar(!familiar);

  return (
    <div className='App'>
      <h2>Current Value: {familiar.toString()}</h2>
      <button onClick={() => setFamiliar(!familiar)}>Toggle</button>
      <User familiar={familiar}></User>
    </div>
  );
}

export default App;
