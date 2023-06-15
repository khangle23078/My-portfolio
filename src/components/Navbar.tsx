import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div id="home" className="h-[123px] px-3 md:px-0">
      <div className="layout-center">
        <div className="flex items-center justify-between pt-[40px]">
          <h3 className="text-2xl text-white font-extralight">LK.</h3>
          <nav>
            <ul className="hidden md:flex gap-[30px]">
              <li>
                <a href="#home" className="text-white font-extralight">
                  About
                </a>
              </li>
              <li>
                <a href="#project" className="text-white font-extralight">
                  Project
                </a>
              </li>
              <li>
                <a href="#experience" className="text-white font-extralight">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white font-extralight">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
