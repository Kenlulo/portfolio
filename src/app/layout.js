import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Hồ Anh Khoa | Portfolio",
  description:
    "Personal portfolio of Hồ Anh Khoa — Showcasing data analytics, finance dashboards, and AI-powered projects.",
  keywords: ["portfolio", "Hồ Anh Khoa", "data analytics", "finance", "AI"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
