import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from 'next/script'
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
      <head>

        <meta property="og:title" content="Buza Cristian | Web Developer based in Moldova"/>
        <meta property="og:description" content="Hey, my name is Buza Cristian, and I'm a Web Developer based in Moldova. My passion is to create and develop a clean and complex web apps for my users."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://buzacristian.com"/>
        <meta property="og:image" content="/public/imgs/hero.png"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="https://buzacristian.com"/>
        <meta name="twitter:title" content="Buza Cristian | Web Developer based in Moldova"/>
        <meta name="twitter:description" content="Hey, my name is Buza Cristian, and I'm a Web Developer based in Moldova. My passion is to create and develop a clean and complex web apps for my users."/>
        <meta name="twitter:image" content="/public/imgs/hero.png"/>

        <meta name="keywords" content="Buza Cristian , Web Developer , React Developer , React , Developer , Moldova"/>
        <meta name="author" content="Buza Cristian"/>


        <link rel="shortcut icon" href="/favicon.ico" />


      </head>
      <body className={poppins.className}>{
        children}

          

        <Script id="analytics" strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-FVP2MQ4P3E"></Script>
          <Script id="googleanalytics" strategy="lazyOnload">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FVP2MQ4P3E');`}
          </Script>
      </body>
    </html>
  );
}
