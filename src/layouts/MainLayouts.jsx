import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from './../components/Navbar';

export default function MainLayouts({ theme }) {
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark"); // Remove any existing theme classes
    document.documentElement.classList.add(theme); // Add new theme class
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={theme}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
