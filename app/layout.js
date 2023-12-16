import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lyrics",
  description: "Find lyrics of your favourite song",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
        <meta name="theme-color" content="#fff" />
      </head>
      <body className="min-h-screen dark:bg-[#18181b] flex flex-col justify-between ">
        <Provider> {children} </Provider>
      </body>
    </html>
  );
}
