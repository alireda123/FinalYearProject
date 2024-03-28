import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/layoutcomponents/Navbar";
import Footer from "@/components/layoutcomponents/Footer";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { createClient } from "@/utils/supabase/server";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const supabase = createClient()
  const returnSession = async () => await supabase.auth.getSession(); 
   
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col justify-between items-center">
          <Navbar/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
