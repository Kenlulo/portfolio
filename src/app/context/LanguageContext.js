"use client";
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  vi: {
    // Navbar & Footer
    navAbout: "Giới Thiệu",
    navProjects: "Dự Án",

    // Hero
    greeting: "Xin chào, tôi là",
    heroBtn: "Xem Dự Án →",

    // About
    aboutBadge: "🧑‍💻 About Me",
    aboutTitle: "Giới Thiệu",
    aboutText:
      "Tôi là một người đam mê công nghệ và tài chính, tập trung vào việc xây dựng các công cụ phân tích dữ liệu thông minh phục vụ cho thị trường chứng khoán Việt Nam. Với nền tảng vững chắc về kế toán – tài chính doanh nghiệp kết hợp kỹ năng lập trình, tôi hướng tới việc biến dữ liệu khô khan thành những insight có giá trị để hỗ trợ ra quyết định đầu tư.",

    // Projects
    projectsBadge: "🚀 Portfolio",
    projectsTitle: "Dự Án Nổi Bật",
    projectsSubtitle: "Những sản phẩm tôi đã xây dựng và phát triển",
    viewProject: "🔗 Xem Dự Án →",

    // Project descriptions
    project1Desc:
      "Hệ thống phân tích & đánh giá cổ phiếu toàn diện tích hợp AI cho thị trường Việt Nam. Bao gồm phân tích cơ bản, kỹ thuật, dự báo ML, và chấm điểm rủi ro tự động.",
    project2Desc:
      "Dashboard CFO chuyên nghiệp tích hợp phân tích tài chính, so sánh ngành, dự báo và lập kế hoạch ngân sách. Thiết kế dành cho nhà quản trị tài chính doanh nghiệp.",
    project3Desc:
      "Hệ thống quản lý và tính toán thuế Thu Nhập Cá Nhân (TNCN). Hỗ trợ import dữ liệu lương hàng loạt từ Excel, quản lý người phụ thuộc, và phân tích cấu trúc thu nhập chuyên nghiệp.",
    project4Desc:
      "Công cụ tự động hóa phân tích doanh thu và phí sàn cho nhà bán hàng Shopee. Tích hợp thuật toán tự nhận diện cột, xử lý dữ liệu lỗi, và biểu đồ trực quan hóa tài chính sâu sắc.",
    project5Desc:
      "Công cụ định giá doanh nghiệp bằng phương pháp Chiết khấu Dòng tiền (DCF). Tích hợp tính WACC, dự phóng FCFF 5 năm, phân tích độ nhạy, và xuất báo cáo Excel chuyên nghiệp.",
    project6Desc:
      "Hệ thống Đối soát & Kiểm toán Tài chính Thông minh (FIH). Tự động khớp Sổ phụ Ngân hàng và Sổ cái, phát hiện giao dịch rủi ro qua Luật Kiểm toán và định luật Benford.",
    project7Desc:
      "Bảng điều khiển Giám sát Rủi ro Tín dụng theo Thông tư 11/2021/TT-NHNN. Phân loại nợ 5 nhóm, phát hiện rủi ro tập trung (Concentration Risk), chấm điểm tín dụng tự động và xuất báo cáo chuyên nghiệp.",

    // Footer
    footerCopy: "Hồ Anh Khoa. Built with Next.js.",

    // Language toggle
    langLabel: "EN",
  },
  en: {
    // Navbar & Footer
    navAbout: "About",
    navProjects: "Projects",

    // Hero
    greeting: "Hello, I'm",
    heroBtn: "View Projects →",

    // About
    aboutBadge: "🧑‍💻 About Me",
    aboutTitle: "About Me",
    aboutText:
      "I'm passionate about technology and finance, focused on building intelligent data analytics tools for the Vietnamese stock market. With a solid background in corporate accounting and finance combined with programming skills, I aim to turn raw data into valuable insights to support investment decisions.",

    // Projects
    projectsBadge: "🚀 Portfolio",
    projectsTitle: "Featured Projects",
    projectsSubtitle: "Products I have built and developed",
    viewProject: "🔗 View Project →",

    // Project descriptions
    project1Desc:
      "A comprehensive AI-powered stock analysis & evaluation system for the Vietnamese market. Includes fundamental analysis, technical analysis, ML forecasting, and automated risk scoring.",
    project2Desc:
      "A professional CFO dashboard integrating financial analysis, industry comparison, forecasting, and budget planning. Designed for corporate finance managers.",
    project3Desc:
      "Personal Income Tax estimation and management system. Features bulk payroll importing via Excel, dependent management, and professional income structure visualization.",
    project4Desc:
      "Automated revenue and platform fee analysis tool for Shopee sellers. Features auto-column matching, robust error handling, and deep financial visualization charts.",
    project5Desc:
      "Enterprise valuation tool using the Discounted Cash Flow (DCF) method. Integrates WACC calculation, 5-year FCFF projection, sensitivity analysis, and professional Excel report export.",
    project6Desc:
      "Smart Financial Reconciliation & Audit Hub (FIH). Automates matching between Bank Statements and General Ledgers, detecting risky transactions via Audit Rules and Benford's Law.",
    project7Desc:
      "Credit Risk Monitoring Dashboard per Circular 11/2021/TT-NHNN. Features 5-group loan classification, Concentration Risk detection, automated Credit Scoring, and professional report generation.",

    // Footer
    footerCopy: "Hồ Anh Khoa. Built with Next.js.",

    // Language toggle
    langLabel: "VN",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("vi");

  const t = (key) => translations[lang]?.[key] || key;
  const toggleLang = () => setLang((prev) => (prev === "vi" ? "en" : "vi"));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
