
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'

export default function MainLayouts(theme) {
  useEffect(() => {
    document.documentElement.className = theme; // Ensures correct class is set
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  return (
    <div className={theme}>
      <Outlet />
    </div>
  )
}
