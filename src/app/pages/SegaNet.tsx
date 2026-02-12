import { GlobalHeader } from "../components/GlobalHeader";
import { GameFooter } from "../components/GameFooter";
import { SegaNetHero } from "../components/seganet/SegaNetHero";
import { WhatIsSegaNet } from "../components/seganet/WhatIsSegaNet";
import { HowItWorked } from "../components/seganet/HowItWorked";
import { ConnectedGames } from "../components/seganet/ConnectedGames";
import { HardwareSetup } from "../components/seganet/HardwareSetup";
import { LegacyImpact } from "../components/seganet/LegacyImpact";

export default function SegaNet() {
  return (
    <div className="min-h-screen bg-white">
      {/* Global Navigation */}
      <GlobalHeader activePage="Online" />

      {/* Hero Section */}
      <SegaNetHero />

      {/* What Is SegaNet */}
      <WhatIsSegaNet />

      {/* How It Worked */}
      <HowItWorked />

      {/* Games That Connected Players */}
      <ConnectedGames />

      {/* Hardware & Setup */}
      <HardwareSetup />

      {/* Legacy & Impact */}
      <LegacyImpact />

      {/* Footer */}
      <GameFooter
        gameName="SegaNet"
        releaseYear="2000"
        copyright="SegaNet © SEGA."
      />
    </div>
  );
}
