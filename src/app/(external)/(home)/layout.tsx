import { ReactNode } from "react";

import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

export default async function HomeLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
