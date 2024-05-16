import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { Navbar } from "@/component/Navbar";
import Footer from "@/component/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cranax Education and Career Solutions",
  description: "At Cranax Education, we believe in empowering students with the knowledge and skills they need to excel in their academic and professional journeys. As an ISO Certified institution, we are committed to delivering excellence in education and career development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="google-site-verification" content="MixRzyYRWjSq8iva2JYqMcGU4TcFL4sNF4thklbWz8k" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y5Y22LYQJ5"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y5Y22LYQJ5');
            `,
          }}
        ></script>

      </Head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
