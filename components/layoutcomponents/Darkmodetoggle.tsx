'use client'; // Only the interactive part becomes a Client Component
import { useState } from 'react';

export default function Darkmodetoggle() {
 const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    const newTheme = !darkMode ? 'dark' : 'light'; 
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={changeTheme}> 
      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1024" className="icon" version="1.1">{/* ... your svg ... */}</svg>
    </button>
  );
}