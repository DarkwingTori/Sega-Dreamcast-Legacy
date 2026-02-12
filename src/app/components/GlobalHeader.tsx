import { Search, Menu, X, ChevronDown } from "lucide-react";
import dreamcastLogo from "@/assets/5ef16fb77ae0eb8e7ee8fea28455000d7cb998f3.png";
import { useContext, useState, useRef, useEffect } from "react";
import { NavigationContext } from "../App";

interface GlobalHeaderProps {
  activePage?: string;
  contextText?: string;
}

interface SearchResult {
  label: string;
  page: string;
  section?: string;
  category: string;
}

export function GlobalHeader({ activePage, contextText }: GlobalHeaderProps) {
  const { navigate } = useContext(NavigationContext);
  
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  // Search state
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Map navigation items to routes
  const getRouteFromHref = (href: string): string | null => {
    const routeMap: { [key: string]: string } = {
      "#": "home",
      "#sonic-adventure": "sonic-adventure",
      "#jet-set-radio": "jet-set-radio",
      "#marvel-vs-capcom": "marvel-vs-capcom",
      "#tony-hawk": "tony-hawk",
      "#vmu": "vmu",
      "#vmu-mini-games": "vmu-mini-games",
      "#accessories": "accessories",
      "#online-seganet": "seganet",
      "#online-games": "online",
      "#music-player": "music-player",
      "#gallery": "gallery"
    };
    return routeMap[href] || null;
  };

  // Searchable content map
  const searchableContent: SearchResult[] = [
    // Pages
    { label: "Home", page: "home", category: "Page" },
    { label: "Dreamcast Console", page: "home", category: "Page" },
    { label: "Tech Specs", page: "home", section: "specs", category: "Section" },
    { label: "Legacy", page: "home", section: "legacy", category: "Section" },
    { label: "Sonic Adventure", page: "sonic-adventure", category: "Page" },
    { label: "Jet Set Radio", page: "jet-set-radio", category: "Page" },
    { label: "Marvel vs. Capcom", page: "marvel-vs-capcom", category: "Page" },
    { label: "Tony Hawk's Pro Skater 2", page: "tony-hawk", category: "Page" },
    { label: "Tony Hawk", page: "tony-hawk", category: "Page" },
    { label: "VMU", page: "vmu", category: "Page" },
    { label: "Visual Memory Unit", page: "vmu", category: "Page" },
    { label: "VMU Features", page: "vmu", category: "Page" },
    { label: "VMU Mini-Games", page: "vmu-mini-games", category: "Page" },
    { label: "Mini Games", page: "vmu-mini-games", category: "Page" },
    { label: "Accessories", page: "accessories", category: "Page" },
    { label: "Controllers", page: "accessories", section: "controllers", category: "Section" },
    { label: "Memory Cards", page: "accessories", section: "memory", category: "Section" },
    { label: "Peripherals", page: "accessories", section: "peripherals", category: "Section" },
    { label: "SegaNet", page: "seganet", category: "Page" },
    { label: "Online", page: "seganet", category: "Page" },
    { label: "Music Player", page: "music-player", category: "Page" },
    { label: "CD Player", page: "music-player", category: "Page" },
    { label: "Soundtracks", page: "music-player", category: "Page" },
    { label: "Gallery", page: "gallery", category: "Page" },
  ];

  // Debounced search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setSelectedIndex(0);
      return;
    }

    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = searchableContent.filter(item =>
        item.label.toLowerCase().includes(query)
      ).slice(0, 8); // Limit to 8 results
      
      setSearchResults(results);
      setSelectedIndex(0);
    }, 150); // Debounce delay

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Close search on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setSearchActive(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    };

    if (searchActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchActive]);

  // Navigate to search result
  const navigateToResult = (result: SearchResult) => {
    navigate(result.page);
    
    if (result.section) {
      setTimeout(() => {
        const element = document.getElementById(result.section!);
        if (element) {
          const headerOffset = 100; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
    
    // Close search
    setSearchActive(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setSearchActive(false);
      setSearchQuery("");
      setSearchResults([]);
      searchInputRef.current?.blur();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < searchResults.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (searchResults.length > 0) {
        navigateToResult(searchResults[selectedIndex]);
      }
    }
  };

  // Toggle search
  const toggleSearch = () => {
    setSearchActive(!searchActive);
    if (!searchActive) {
      setTimeout(() => searchInputRef.current?.focus(), 0);
    } else {
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  const navigationSections = [
    {
      title: "Dreamcast",
      items: [
        { label: "Dreamcast Console", href: "#" },
        { label: "Tech Specs", href: "#", section: "specs" },
        { label: "Legacy", href: "#", section: "legacy" }
      ]
    },
    {
      title: "Games",
      items: [
        { label: "Sonic Adventure", href: "#sonic-adventure" },
        { label: "Jet Set Radio", href: "#jet-set-radio" },
        { label: "Marvel vs. Capcom", href: "#marvel-vs-capcom" },
        { label: "Tony Hawk's Pro Skater 2", href: "#tony-hawk" }
      ]
    },
    {
      title: "VMU",
      items: [
        { label: "About VMU", href: "#vmu" },
        { label: "Features", href: "#vmu" },
        { label: "Mini-Games", href: "#vmu-mini-games" }
      ]
    },
    {
      title: "Accessories",
      items: [
        { label: "Controllers", href: "#accessories", section: "controllers" },
        { label: "Memory Cards", href: "#accessories", section: "memory" },
        { label: "Peripherals", href: "#accessories", section: "peripherals" }
      ]
    },
    {
      title: "Online",
      items: [
        { label: "SegaNet", href: "#online-seganet" },
      ]
    },
    {
      title: "CD Player",
      items: [
        { label: "Soundtracks", href: "#music-player" },
      ]
    },
    {
      title: "Explore",
      items: [
        { label: "Gallery", href: "#gallery" },
      ]
    }
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          backgroundColor: "#F5F5F7",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: "rgba(0,0,0,0.1)",
          minHeight: "48px"
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-20 h-full flex items-center justify-between">
          {/* Mobile Hamburger Menu Button */}
          <button
            className="md:hidden hover:opacity-70 transition-opacity"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" style={{ color: "#1D1D1F" }} />
            ) : (
              <Menu className="w-5 h-5" style={{ color: "#1D1D1F" }} />
            )}
          </button>

          {/* Left - Dreamcast Logo */}
          <a href="#" className="flex items-center group" onClick={(e) => {
            e.preventDefault();
            navigate('home');
            setMobileMenuOpen(false);
          }}>
            <img
              src={dreamcastLogo} 
              alt="Dreamcast" 
              className="h-6 md:h-7 transition-opacity hover:opacity-70"
            />
          </a>

          {/* Center - Desktop Navigation Sections */}
          <div className="hidden md:flex items-center gap-6 lg:gap-12">
            {navigationSections.map((section) => (
              <div key={section.title} className="relative group">
                {/* Section Title */}
                <button
                  className="transition-all hover:opacity-70"
                  style={{
                    fontSize: "12px",
                    color: "#1D1D1F",
                    fontWeight: 500,
                    padding: "4px 0"
                  }}
                >
                  {section.title}
                </button>

                {/* Dropdown Menu */}
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                  style={{ minWidth: "200px", pointerEvents: "none" }}
                >
                  <div
                    className="rounded-xl shadow-2xl overflow-hidden"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.95)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(0,0,0,0.1)",
                      pointerEvents: "auto"
                    }}
                  >
                    {section.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-5 py-3 transition-all no-underline"
                        style={{
                          fontSize: "13px",
                          color: "#1D1D1F",
                          borderBottom: "1px solid rgba(0,0,0,0.05)",
                          textDecoration: "none"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#F5F5F7";
                          e.currentTarget.style.color = "var(--dreamcast-blue)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "#1D1D1F";
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          
                          // Get the route from the href
                          const route = getRouteFromHref(item.href);
                          if (route) {
                            navigate(route);
                          }
                          
                          // If there's a section, scroll to it after navigation
                          const section = (item as any).section;
                          if (section) {
                            setTimeout(() => {
                              const element = document.getElementById(section);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }
                            }, 100);
                          }
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Search Icon */}
          <button
            className="hover:opacity-70 transition-opacity"
            aria-label="Search"
            onClick={toggleSearch}
          >
            <Search
              className="w-4 h-4"
              style={{ color: "#1D1D1F" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ top: "48px" }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div
            className="relative bg-white h-full overflow-y-auto"
            style={{
              maxWidth: "85%",
              boxShadow: "4px 0 24px rgba(0,0,0,0.1)"
            }}
          >
            <div className="p-4">
              {navigationSections.map((section) => (
                <div key={section.title} className="mb-2">
                  {/* Section Header - Accordion Style */}
                  <button
                    className="w-full flex items-center justify-between py-3 px-4 rounded-lg transition-all active:bg-gray-100"
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#1D1D1F",
                      backgroundColor: expandedSection === section.title ? "#F5F5F7" : "transparent"
                    }}
                    onClick={() => setExpandedSection(
                      expandedSection === section.title ? null : section.title
                    )}
                  >
                    <span>{section.title}</span>
                    <ChevronDown
                      className="w-4 h-4 transition-transform"
                      style={{
                        transform: expandedSection === section.title ? "rotate(180deg)" : "rotate(0deg)"
                      }}
                    />
                  </button>
                  
                  {/* Section Items - Expandable */}
                  {expandedSection === section.title && (
                    <div className="mt-1 ml-2">
                      {section.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block py-3 px-4 rounded-lg transition-all active:bg-gray-100"
                          style={{
                            fontSize: "14px",
                            color: "#6e6e73",
                            textDecoration: "none"
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            
                            // Get the route from the href
                            const route = getRouteFromHref(item.href);
                            if (route) {
                              navigate(route);
                            }
                            
                            // If there's a section, scroll to it after navigation
                            const section = (item as any).section;
                            if (section) {
                              setTimeout(() => {
                                const element = document.getElementById(section);
                                if (element) {
                                  const headerOffset = 100;
                                  const elementPosition = element.getBoundingClientRect().top;
                                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                  
                                  window.scrollTo({
                                    top: offsetPosition,
                                    behavior: "smooth"
                                  });
                                }
                              }, 100);
                            }
                            
                            // Close mobile menu
                            setMobileMenuOpen(false);
                            setExpandedSection(null);
                          }}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search Container */}
      {searchActive && (
        <div
          className="fixed top-12 left-0 right-0 z-50"
          ref={searchContainerRef}
        >
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-20">
            <div
              className="bg-white rounded-xl shadow-2xl overflow-hidden"
              style={{
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(0,0,0,0.1)"
              }}
            >
              <div className="px-3 md:px-5 py-3">
                <input
                  type="text"
                  ref={searchInputRef}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search..."
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              {searchQuery.trim() && searchResults.length === 0 && (
                <div className="px-3 md:px-5 py-3 text-center">
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#6e6e73"
                    }}
                  >
                    No results found
                  </p>
                </div>
              )}
              {searchResults.length > 0 && (
                <div className="max-h-48 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <div
                      key={result.label}
                      className={`px-3 md:px-5 py-3 cursor-pointer ${
                        index === selectedIndex ? "bg-gray-100" : ""
                      }`}
                      onClick={() => navigateToResult(result)}
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      <p
                        className="text-sm"
                        style={{
                          color: index === selectedIndex ? "var(--dreamcast-blue)" : "#1D1D1F"
                        }}
                      >
                        {result.label}
                      </p>
                      <p
                        className="text-xs text-gray-500"
                        style={{
                          color: index === selectedIndex ? "var(--dreamcast-blue)" : "#6e6e73"
                        }}
                      >
                        {result.category}: {result.page}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contextual Header Sub-Copy */}
      {contextText && (
        <div
          className="fixed z-40 left-0 right-0 hidden md:block"
          style={{
            top: "48px",
            backgroundColor: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(0,0,0,0.05)",
            padding: "12px 0"
          }}
        >
          <div className="max-w-[980px] mx-auto px-6">
            <p
              style={{
                fontSize: "14px",
                color: "#6e6e73",
                textAlign: "center",
                lineHeight: "1.5"
              }}
            >
              {contextText}
            </p>
          </div>
        </div>
      )}
    </>
  );
}