import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./styles/Header.scss";
import { useTheme } from "../../context/ThemeContext";
import FixedTop from "./FixedTop";

const Header = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector("#hero");
      if (!hero) {
        setScrolled(window.scrollY > 50);
        return;
      }
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setScrolled(window.scrollY > heroBottom - 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`${scrolled ? "scroll" : "hero-mode"} ${
        menuOpen ? "is-open" : ""
      }`}
    >
      <div className="inner">
        <h4 className="logo">
          B<span className="logo-dot"></span>M
        </h4>
        <div className="right-wrap">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="mob-nav-btn"
            aria-label="메뉴 열기"
          >
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </button>
          <Nav closeMenu={() => setMenuOpen(false)} />
          <button
            type="button"
            className={`theme-btn ${isDark ? "dark" : ""}`}
            onClick={toggleTheme}
            aria-label="테마 전환"
          />
        </div>
      </div>
      <FixedTop />
    </header>
  );
};

export default Header;
