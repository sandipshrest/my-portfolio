import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Sandip Shrestha - Web Developer",
  description: "I am sandip shrestha. Full-stack web developer & UI/UX designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 2500,
            },
            error: {
              duration: 4000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
      </body>
    </html>
  );
}
