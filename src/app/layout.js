import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { Darker_Grotesque, Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
  display: "swap",
});

export const metadata = {
  title: "iclaire — Portfolio",
  description: "UI/UX & Web Design Portfolio",
};

export default function RootLayout({ children }) {
  const htmlClassNames = `${figtree.variable} ${darkerGrotesque.variable}`;

  return (
    <html lang="en" className={htmlClassNames}>
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
