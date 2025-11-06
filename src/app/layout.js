import "aos/dist/aos.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import "@bitnoi.se/react-scheduler/dist/style.css";
import "./globals.css";
// import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import ReduxProvider from "./ReduxProvider";
import ClientWrapper from "@/components/ClientWrapper";
import SupabaseProvider from "./SupabaseProvider";
import { Montserrat } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // choose weights you need
  variable: "--font-montserrat",
});

export const metadata = {
  title: "MentorMeInTech",
  description: "Your mentorship and career growth platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body suppressHydrationWarning={true}>
        <ClientWrapper>
          <SupabaseProvider>
            <ReduxProvider>{children}</ReduxProvider>
            <ToastContainer />
          </SupabaseProvider>
        </ClientWrapper>

        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script type="module" src="/src/main.jsx"></script>

        <script>AOS.init();</script>
      </body>
    </html>
  );
}
