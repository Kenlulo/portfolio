"use client";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Credit Risk Dashboard",
      descKey: "project7Desc",
      tags: [],
      image: "/images/project-credit-risk.png",
      demo: "https://hoanhkhoa-credit-risk.streamlit.app",
      github: "https://github.com/Kenlulo/credit-risk-dashboard",
    },
    {
      title: "Financial Integrity Hub",
      descKey: "project6Desc",
      tags: [],
      image: "/images/project-fih.png",
      demo: "https://hoanhkhoa-fih.streamlit.app",
      github: "https://github.com/Kenlulo/financial-integrity-hub",
    },
    {
      title: "Advanced Stock Evaluator",
      descKey: "project1Desc",
      tags: [],
      image: "/images/project-finance.png",
      demo: "https://hoanhkhoa-stock.streamlit.app",
      github: "https://github.com/hoanhkhoa/portfolio-stock-analysis",
    },
    {
      title: "FPA Business Partner",
      descKey: "project2Desc",
      tags: [],
      image: "/images/project-fpa.png",
      demo: "https://hoanhkhoa-finance.streamlit.app",
      github: "https://github.com/hoanhkhoa/financial-dashboard-portfolio",
    },
    {
      title: "Personal Income Tax System",
      descKey: "project3Desc",
      tags: [],
      image: "/images/tax.jpg",
      demo: "https://hoanhkhoa-tax.streamlit.app",
      github: "https://github.com/hoanhkhoa/python", 
    },
    {
      title: "Shopee Revenue Analytics",
      descKey: "project4Desc",
      tags: [],
      image: "/images/shopee.png",
      demo: "https://hoanhkhoa-shopee.streamlit.app",
      github: "https://github.com/hoanhkhoa/shopee-analytics-dashboard",
    },
    {
      title: "DCF Valuation Tool",
      descKey: "project5Desc",
      tags: [],
      image: "/images/project-dcf.png",
      demo: "https://hoanhkhoa-dcf-valuation.streamlit.app",
      github: "https://github.com/hoanhkhoa/dcf-valuation-tool",
    },
  ];

  return (
    <main>
      {/* ══════════════ HERO ══════════════ */}
      <section className="hero">
        <div className="container">
          <div className="hero-content animate-in">
            <p className="hero-greeting">
              <span style={{ fontSize: "1.4rem" }}>👋</span> {t("greeting")}
            </p>
            <h1>Hồ Anh Khoa</h1>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                {t("heroBtn")}
              </a>
            </div>
            <div className="hero-contacts">
              <a href="mailto:hoanhkhoa1009@gmail.com" className="hero-contact-link">
                ✉️ hoanhkhoa1009@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/anh-khoa-3223912a0" target="_blank" rel="noopener noreferrer" className="hero-contact-link">
                💼 LinkedIn
              </a>
              <a href="https://github.com/Kenlulo" target="_blank" rel="noopener noreferrer" className="hero-contact-link">
                🐙 GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ ABOUT ══════════════ */}
      <section id="about" className="section" style={{ background: "var(--bg-card)" }}>
        <div className="container">
          <div className="section-header">
            <div className="badge" style={{ marginBottom: "12px", display: "inline-flex" }}>
              {t("aboutBadge")}
            </div>
            <h2>{t("aboutTitle")}</h2>
          </div>
          <div style={{
            maxWidth: "720px",
            margin: "0 auto",
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            lineHeight: "1.9",
            textAlign: "center",
          }}>
            <p>{t("aboutText")}</p>
          </div>
        </div>
      </section>

      {/* ══════════════ PROJECTS ══════════════ */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge" style={{ marginBottom: "12px", display: "inline-flex" }}>
              {t("projectsBadge")}
            </div>
            <h2>{t("projectsTitle")}</h2>
            <p>{t("projectsSubtitle")}</p>
          </div>

          <div className="projects-grid">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card animate-in"
                style={{ animationDelay: `${i * 0.15}s`, textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="project-card-image"
                />
                <div className="project-card-body">
                  <h3>{p.title}</h3>
                  <p>{t(p.descKey)}</p>
                </div>
                <div className="project-card-footer">
                  <span className="project-link">
                    {t("viewProject")}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
