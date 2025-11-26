import Footer from "@/components/layout/Footer";
import LetsChat from "@/components/sections/LetsChat";

export const metadata = {
  title: "Contact — iclaire",
  description: "Get in touch with Irish Claire to collaborate on thoughtful, intentional design work.",
};

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen text-[#3f3737]">
      <LetsChat />
      <Footer />
    </main>
  );
}
