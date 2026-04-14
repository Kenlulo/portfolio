"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-links">
          <li><a href="#about">{t("navAbout")}</a></li>
          <li><a href="#projects">{t("navProjects")}</a></li>
          <li>
            <a href="https://github.com/Kenlulo" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/anh-khoa-3223912a0" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:hoanhkhoa1009@gmail.com">
              ✉️ hoanhkhoa1009@gmail.com
            </a>
          </li>
        </ul>
        <p>© {new Date().getFullYear()} {t("footerCopy")}</p>
      </div>
    </footer>
  );
}
