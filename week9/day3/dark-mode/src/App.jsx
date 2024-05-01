import React, { useState, useEffect } from 'react';
import './App.css';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const localMode = localStorage.getItem('darkMode');
    if (localMode) {
      setDarkMode(JSON.parse(localMode));
    }
  }, []);

  const darkfun = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  return (
    <div className={darkMode ? 'dark' : ''} >
      <ul className="flex justify-between container">
        <li className="mr-6">
          <a className="text-dark hover:text-blue-800" href="#">Active</a>
        </li>
        <li className="mr-6">
          <a className="text-black hover:text-blue-800" href="#">Link</a>
        </li>
        <li className="mr-6">
          <a className="text-black hover:text-blue-800" href="#">Link</a>
        </li>
        <li className="mr-6">
          <a className="text-black cursor-not-allowed" href="#">Disabled</a>
        </li>
        <button onClick={darkfun}>
          {darkMode ? <Brightness5Icon /> : <DarkModeIcon />}
        </button>
      </ul>
    </div>
  );
}

export default App;
