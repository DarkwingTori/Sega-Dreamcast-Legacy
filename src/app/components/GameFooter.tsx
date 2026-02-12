import { useContext } from "react";
import { NavigationContext } from "../App";

interface GameFooterProps {
  gameName?: string;
  releaseYear?: string;
  copyright?: string;
}

export function GameFooter({ 
  gameName = "Sonic Adventure",
  releaseYear = "1998",
  copyright = "Sonic Adventure © SEGA."
}: GameFooterProps) {
  const { navigate } = useContext(NavigationContext);

  // Map link text to routes
  const getLinkRoute = (linkText: string): string | null => {
    const routeMap: { [key: string]: string } = {
      "Overview": "home",
      "Sonic Adventure": "sonic-adventure",
      "Jet Set Radio": "jet-set-radio",
      "Marvel Vs. Capcom": "marvel-vs-capcom",
      "Tony Hawk Pro Skater 2": "tony-hawk",
      "Game Gallery": "gallery",
      "Sprites": "gallery",
      "Concept Art": "gallery",
      "Box Art": "gallery",
      "SegaNet": "seganet",
      "Music Player": "music-player",
      "VMU": "vmu",
      "VMU Mini-Games": "vmu-mini-games",
      "Accessories": "accessories"
    };
    return routeMap[linkText] || null;
  };

  // Handle section scrolls on home page
  const handleLinkClick = (link: string) => {
    const route = getLinkRoute(link);
    if (route) {
      navigate(route);
    } else {
      // Handle section scrolls for home page links
      if (link === "Hardware") {
        navigate("home");
        setTimeout(() => {
          document.getElementById("design")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else if (link === "Tech Specs") {
        navigate("home");
        setTimeout(() => {
          document.getElementById("specs")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else if (link === "Legacy") {
        navigate("home");
        setTimeout(() => {
          document.getElementById("legacy")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  const footerColumns = [
    {
      title: "Dreamcast",
      links: ["Overview", "Hardware", "Tech Specs", "Legacy"]
    },
    {
      title: "Games",
      links: ["Sonic Adventure", "Jet Set Radio", "Marvel Vs. Capcom", "Tony Hawk Pro Skater 2"]
    },
    {
      title: "Media",
      links: ["Game Gallery", "Concept Art", "Box Art", "Sprites"]
    },
    {
      title: "Online",
      links: ["SegaNet", "Music Player", "VMU", "Accessories"]
    }
  ];

  return (
    <footer 
      className="w-full"
      style={{
        backgroundColor: "#F5F5F7",
        padding: "64px 80px"
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Legal / Description */}
        <div className="mb-8">
          <p 
            style={{
              fontSize: "11px",
              lineHeight: "1.6",
              color: "#6e6e73",
              maxWidth: "800px"
            }}
          >
            {copyright}
            <br />
            Originally released in {releaseYear} for the Sega Dreamcast.
            <br />
            All trademarks, characters, and imagery are property of their respective owners.
            <br />
            This page is a historical and design tribute.
          </p>
        </div>

        {/* Footer Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-300">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p 
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#1d1d1f",
                  marginBottom: "12px"
                }}
              >
                {column.title}
              </p>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-all hover:underline"
                      style={{
                        fontSize: "11px",
                        color: "#6e6e73",
                        textDecoration: "none"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--dreamcast-blue)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#6e6e73";
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link);
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            style={{
              fontSize: "12px",
              color: "#6e6e73"
            }}
          >
            Copyright © 1998–2001 Sega. All rights reserved.
          </p>
          <p 
            style={{
              fontSize: "12px",
              color: "#6e6e73"
            }}
          >
            United States | English
          </p>
        </div>
      </div>
    </footer>
  );
}