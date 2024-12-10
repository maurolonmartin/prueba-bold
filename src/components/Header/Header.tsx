import React from "react";
import './header.scss';
import Image from "next/image";

const Header: React.FC = () => (
  <header className="header">
    <div className="logo">
      <Image
        src="https://careers.recruiteecdn.com/image/upload/q_auto,f_auto,w_400,c_limit/production/images/BLSz/iazuZsJdKTI0.png"
        alt="Bold Logo"
        width={100} 
        height={50}
        priority={true} 
      />
    </div>
    <nav className="nav">
      <a href="#" className="navLink">Mi negocio</a>
      <a href="#" className="navLink">Ayuda</a>
    </nav>
  </header>
);

export default Header;
