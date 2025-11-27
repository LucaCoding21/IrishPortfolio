import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata = {
  title: "iclaire — Portfolio",
  description: "UI/UX & Web Design Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
