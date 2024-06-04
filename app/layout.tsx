import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/layoutcomponents/Navbar/Navbar";
import Footer from "@/components/layoutcomponents/Footer";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  metadataBase: new URL("https://www.illumifact.org/"),
  title: "IllumiFact",
  description: "Fact-checking platform that corrects political misinformation and promotes critical thinking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  <script src="https://accounts.google.com/gsi/client" async></script>

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
