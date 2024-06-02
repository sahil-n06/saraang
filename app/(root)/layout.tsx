import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Poppins } from "next/font/google";
const poppins = Poppins({ 
    subsets: ["latin"] ,
    display: "swap",
    weight: ["400", "500","600","700"],
    variable: "--font-family-poppins",
  });
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col">
        <Header></Header>
        <main className="flex-1">{children}</main>
        <Footer></Footer>
      </div>
    );
  }
  