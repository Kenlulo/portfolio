"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { t, toggleLang } = useLanguage();

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="nav-logo">
          Anh Khoa<span style={{ color: "var(--accent)" }}>.</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">{t("navAbout")}</a></li>
          <li><a href="#projects">{t("navProjects")}</a></li>
          <li>
            <a href="https://github.com/Kenlulo" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/anh-khoa-3223912a0" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a href="mailto:hoanhkhoa1009@gmail.com">
              Email ↗
            </a>
          </li>
          <li>
            <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
              🌐 {t("langLabel")}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
