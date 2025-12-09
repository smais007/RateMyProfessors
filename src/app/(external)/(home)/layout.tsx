import Navbar from "./_components/navbar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
