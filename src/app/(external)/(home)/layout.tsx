import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="">
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  );
}
