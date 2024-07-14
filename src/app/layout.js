import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Sandip Shrestha - JavaScript Developer",
  description:
    "I am a MERN stack developer with a years of professional experience in building web application. I specialize in javascript & typescript. I have been primarily working on js stacks like Nodejs, react, nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/images/favicon_io/favicon-16x16.png"
          type="image/png"
          size="16x16"
        />
        <link
          rel="shortcut icon"
          href="/images/favicon_io/favicon-32x32.png"
          type="image/png"
          size="32x32"
        />
      </head>
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
