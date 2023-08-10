import Navbar from "../components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "online translator",
  description: "online translator",
};

const RootLayout =({ children })=> {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <footer>
          <h2 className="text-center">Ovi khan brother please Insert your footer content here</h2>
        </footer>
        </body>
    </html>
  );
}

export default RootLayout;
