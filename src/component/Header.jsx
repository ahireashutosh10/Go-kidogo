import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./Header.module.css"; // Import CSS module
import logo from '../assets/logo-new.svg';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <button className={styles["mobile-menu-button"]} onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <nav className={`${styles["nav-menu"]} ${isMobileMenuOpen ? styles.active : ""}`}>
          <Link to="/city" className={styles["nav-link"]}>
            CITY
          </Link>
          <Link to="/our-partners" className={styles["nav-link"]}>
            PARTNER
          </Link>
          <Link to="/about-us" className={styles["nav-link"]}>
            ABOUT US
          </Link>
          <Link to="/our-solution" className={styles["nav-link"]}>
            GOKIDO TOOL
          </Link>
          <Link to="/become-a-partner" className={styles["nav-link"]}>
            CONTACT
          </Link>

          <div className={styles["language-selector"]}>
            <button className={styles["language-button"]} onClick={toggleDropdown}>
              German (DE)
              <svg
                className={styles["dropdown-icon"]}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {isDropdownOpen && (
              <div className={styles["language-dropdown"]}>
                <Link to="#" className={styles["dropdown-item"]}>
                  English (EN)
                </Link>
                <Link to="#" className={styles["dropdown-item"]}>
                  German (DE)
                </Link>
              </div>
            )}
          </div>

          <Link to="/login" className={styles["login-button"]}>
            Log in
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;