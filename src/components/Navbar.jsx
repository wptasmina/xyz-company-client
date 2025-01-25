import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { Button, Menu, MenuItem } from "@material-tailwind/react";
import { useState } from "react";
import Fade from "@mui/material/Fade";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // nav bar
    <nav className="py-2 shadow-md sticky z-10 top-0 bg-white">
  
      <div className="w-11/12 md:w-10/12 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} className="w-14" />
          </div>
        </Link>
        {/* nav list */}
        <div className="gap-3 md:flex items-center hidden ">
          <NavLink to="/" className="font-semibold">
            Home
          </NavLink>
          <div className="text-gray-700 md:flex items-center hidden">
            <NavLink to="/employee-register" className="font-semibold">
              Join as Employee
            </NavLink>
          </div>
          <div className="text-gray-700 md:flex items-center hidden">
            <NavLink to="/hr-register" className="font-semibold">
              Join as HR Manager
            </NavLink>
          </div>
        </div>  
        {/* nav button */}
        <div className="flex items-center  rounded-md p-0.5 border-2 border-orange-700">
          <Link to='/login'>
            <Button variant="contained" className=" bg-[#1a3566ee] px-6 py-2 rounded-md">Login</Button>
          </Link>
          {/* mobile menu */}
          <div className="block md:hidden">
            <Button
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <IoIosMenu className="text-3xl text-[#1753c2]" />
            </Button>
            {/* nav list */}
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>
                <NavLink to="/" className="font-semibold">
                  Home
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-700 flex items-center">
                  <NavLink to="/employee-register" className="font-semibold">
                    Join as Employee
                  </NavLink>
                </div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-700 flex items-center">
                  <NavLink to="/employee-register" className="font-semibold">
                    Join as HR Manager
                  </NavLink>
                </div>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
