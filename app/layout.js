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
      <body className="min-h-screen flex flex-col justify-between ">
        <Provider> {children} </Provider>
        <footer className="p-4  w-[100%]  text-center text-sm bg-gray-100">
          &copy; Pahasara Wickramasinghe
        </footer>
      </body>
    </html>
  );
}
