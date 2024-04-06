import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const poppins = Poppins({ subsets: ["latin"],
weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
 });

export const metadata = {
  title: "Buza Cristian | Web Developer based in Moldova",
  description: "Hey, my name is Buza Cristian, and I'm a Web Developer based in Moldova. My passion is to create and develop a clean and complex web apps for my users.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
