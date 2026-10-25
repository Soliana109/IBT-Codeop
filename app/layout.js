import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/components/Store";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FREE_DELIVERY } from "@/lib/api";

const display = Bodoni_Moda({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const body = Jost({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata = {
  title: { default: "Soli's Mart | Good Food, Thoughtfully Chosen", template: "%s | Soli's Mart" },
  description: "Shop pantry staples, kitchen tools and home finds at Soli's Mart.",
};

export const viewport = { themeColor: "#7a1637" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <StoreProvider>
          <div className="announce">
            A little piece of the good life, delivered with care &middot; Free delivery over {FREE_DELIVERY.toLocaleString("en-US")} ETB
          </div>
          <Header />
          <main>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
