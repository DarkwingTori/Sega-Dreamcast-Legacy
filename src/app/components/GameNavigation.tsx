import { Search } from "lucide-react";

interface GameNavigationProps {
  activePage?: string;
}

export function GameNavigation({ activePage }: GameNavigationProps) {
  const navItems = [
    { label: "Dreamcast Games", href: "#" },
    { label: "Sonic Adventure", href: "#sonic-adventure" },
    { label: "Jet Set Radio", href: "#jet-set-radio" },
    { label: "Marvel Vs. Capcom", href: "#marvel-vs-capcom" },
    { label: "Tony Hawk Pro Skater 2", href: "#tony-hawk" },
    { label: "Compare", href: "#compare" },
    { label: "Gallery", href: "#gallery" },
    { label: "Specs", href: "#specs" },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: "rgba(0,0,0,0.1)",
        height: "44px"
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Left - Navigation Items */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-all ${
                activePage === item.label
                  ? "border-b-2"
                  : "hover:opacity-70"
              }`}
              style={{
                fontSize: "12px",
                color: "#1D1D1F",
                fontWeight: activePage === item.label ? 600 : 400,
                borderColor: activePage === item.label ? "var(--dreamcast-blue)" : "transparent",
                paddingBottom: "2px"
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right - Search Icon */}
        <button 
          className="hover:opacity-70 transition-opacity"
          aria-label="Search"
        >
          <Search 
            className="w-4 h-4" 
            style={{ color: "#1D1D1F" }}
          />
        </button>
      </div>
    </nav>
  );
}
