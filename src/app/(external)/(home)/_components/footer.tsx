const navigation = {
  main: [
    { name: "Help", href: "#" },
    { name: "Site Guide", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Copyright Compliance Policy", href: "#" },
    { name: "CA Notice at Collection", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background border-top">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="border-left border-right">
          <div className="">
            <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 pt-4 text-sm/6">
              {navigation.main.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <p className="text-muted-foreground mt-10 pb-4 text-center text-sm/6">
            &copy; {new Date().getFullYear()} Rate My Professor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
