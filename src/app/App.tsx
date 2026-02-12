import {
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import dreamcastLogo from "@/assets/5ef16fb77ae0eb8e7ee8fea28455000d7cb998f3.png";
import dreamcastConsole from "@/assets/d05d901ca81d28410a0733e711cf3fb1d0339372.avif";
import dreamcastBox from "@/assets/a0cb6cd508a4ecbebdc0ee3b4007f1befe2260aa.avif";
import { GlobalHeader } from "./components/GlobalHeader";
import { HeroSection } from "./components/HeroSection";
import { DesignSection } from "./components/DesignSection";
import { PackagingSection } from "./components/PackagingSection";
import { PerformanceSection } from "./components/PerformanceSection";
import { GraphicsSection } from "./components/GraphicsSection";
import { OnlineSection } from "./components/OnlineSection";
import { VMUSection } from "./components/VMUSection";
import { SpecsSection } from "./components/SpecsSection";
import { TimelineSection } from "./components/TimelineSection";
import { GameFooter } from "./components/GameFooter";
import SonicAdventure from "./pages/SonicAdventure";
import TonyHawk from "./pages/TonyHawk";
import JetSetRadio from "./pages/JetSetRadio";
import MarvelVsCapcom from "./pages/MarvelVsCapcom";
import VMU from "./pages/VMU";
import VMUMiniGames from "./pages/VMUMiniGames";
import Online from "./pages/Online";
import SegaNet from "./pages/SegaNet";
import MusicPlayer from "./pages/MusicPlayer";
import Accessories from "./pages/Accessories";
import Gallery from "./pages/Gallery";

// Create a simple navigation context
export const NavigationContext = createContext({
  navigate: (path: string) => {},
});

export default function App() {
  const [currentPage, setCurrentPage] =
    useState<string>("home");

  // Listen to hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setCurrentPage(hash || "home");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () =>
      window.removeEventListener(
        "hashchange",
        handleHashChange,
      );
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
    window.scrollTo(0, 0);
  };

  if (currentPage === "sonic-adventure") {
    return (
      <NavigationContext.Provider value={{ navigate }}>
        <SonicAdventure />
      </NavigationContext.Provider>
    );
  }

  if (currentPage === "vmu") {
    return (
      <NavigationContext.Provider value={{ navigate }}>
        <VMU />
      </NavigationContext.Provider>
    );
  }

  if (currentPage === "vmu-mini-games") {
    return (
      <NavigationContext.Provider value={{ navigate }}>
        <VMUMiniGames />
      </NavigationContext.Provider>
    );
  }

  if (currentPage === "online") {
    return (
      <NavigationContext.Provider value={{ navigate }}>
        <Online />
      </NavigationContext.Provider>
    );
  }

  if (currentPage === "seganet") {
    return (
      <NavigationContext.Provider value={{ navigate }}>
        <SegaNet />
      </NavigationContext.Provider>
    );
  }

  if (currentPage === "tony-hawk") {
    return (
      <NavigationContext.Provider value={{ navigate }}>
        <TonyHawk />
      </NavigationContext.Provider>
    );
  }

  if (currentPage === "jet-set-radio") {
    return (
      <NavigationContext.Provider value={{ navigate }}>
        <JetSetRadio />
      </NavigationContext.Provider>
    );
  }

  if (currentPage === "marvel-vs-capcom") {
    return (
      <NavigationContext.Provider value={{ navigate }}>
        <MarvelVsCapcom />
      </NavigationContext.Provider>
    );
  }

  if (currentPage === "music-player") {
    return (
      <NavigationContext.Provider value={{ navigate }}>
        <MusicPlayer />
      </NavigationContext.Provider>
    );
  }

  if (currentPage === "accessories") {
    return (
      <NavigationContext.Provider value={{ navigate }}>
        <Accessories />
      </NavigationContext.Provider>
    );
  }

  if (currentPage === "gallery") {
    return (
      <NavigationContext.Provider value={{ navigate }}>
        <Gallery />
      </NavigationContext.Provider>
    );
  }

  return (
    <NavigationContext.Provider value={{ navigate }}>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <GlobalHeader activePage="Dreamcast Console" />

        {/* Hero Section */}
        <HeroSection
          consoleLogo={dreamcastLogo}
          consoleImage={dreamcastConsole}
        />

        {/* Design Section */}
        <DesignSection consoleImage={dreamcastConsole} />

        {/* Packaging Section */}
        <PackagingSection boxImage={dreamcastBox} />

        {/* Performance Section */}
        <PerformanceSection />

        {/* Graphics & Sound Section */}
        <GraphicsSection />

        {/* Online Gaming Section */}
        <OnlineSection />

        {/* VMU Section */}
        <VMUSection />

        {/* Specs Section */}
        <SpecsSection />

        {/* Timeline Section */}
        <TimelineSection />

        {/* Footer */}
        <GameFooter
          gameName="Dreamcast"
          releaseYear="1998"
          copyright="Sega Dreamcast © SEGA."
        />
      </div>
    </NavigationContext.Provider>
  );
}