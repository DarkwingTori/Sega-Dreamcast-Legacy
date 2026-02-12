import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import vmuChaoScreen from "@/assets/f6747a85577ad922593f62c3ba9c56d2ddef7d3f.png";
import chaoCharacter from "@/assets/caed9f66e314102799f7fd031bcb71c49b874f14.avif";
import vmuScreens from "@/assets/60a20d958d7da4529dda3d4041d14cbb0f1c7113.avif";
import { GlobalHeader } from "../components/GlobalHeader";
import { GameFooter } from "../components/GameFooter";

export default function VMUMiniGames() {
  return (
    <div className="min-h-screen bg-white">
      <GlobalHeader
        activePage="VMU Mini-Games"
        contextText="Download mini-games to your VMU. Play anywhere. Transfer progress back to your console."
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Second Screen Experience */}
      <SecondScreenSection />

      {/* Chao Adventure Spotlight */}
      <ChaoAdventureSection />

      {/* VMU Mini-Games Gallery */}
      <VMUGamesListSection />

      {/* Footer */}
      <GameFooter
        gameName="VMU Mini-Games"
        releaseYear="1998"
        copyright="Visual Memory Unit © Sega."
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(48px, 7vw, 96px)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: "1.05",
            marginBottom: "20px"
          }}
        >
          VMU Mini-Games
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(21px, 3vw, 28px)",
            fontWeight: 500,
            lineHeight: "1.3",
            color: "#6e6e73",
            marginBottom: "16px"
          }}
        >
          Gaming that goes with you.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            color: "#86868b",
            lineHeight: "1.4",
            marginBottom: "40px"
          }}
        >
          A true second-screen experience. Years ahead of its time.
        </motion.p>
      </div>
    </section>
  );
}

function SecondScreenSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vmu-games" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 600,
              letterSpacing: "-0.015em",
              lineHeight: "1.1",
              marginBottom: "24px"
            }}
          >
            A true second-screen experience.
          </h2>
          <p
            style={{
              fontSize: "clamp(17px, 2vw, 21px)",
              lineHeight: "1.5",
              color: "#1d1d1f",
              maxWidth: "800px",
              margin: "0 auto 32px"
            }}
          >
            Several Dreamcast titles expanded gameplay beyond the console by downloading mini-games directly to the Visual Memory Unit.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.5",
              color: "#6e6e73",
              maxWidth: "800px",
              margin: "0 auto"
            }}
          >
            Players could remove the VMU, continue playing on its built-in screen, then reconnect it to transfer progress back into the game—creating a true second-screen experience years ahead of its time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={vmuScreens}
            alt="VMU screens showing various mini-games"
            className="w-full h-auto"
            style={{ display: "block" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function ChaoAdventureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 600,
            letterSpacing: "-0.015em",
            lineHeight: "1.1",
            textAlign: "center",
            marginBottom: "64px"
          }}
        >
          Chao Adventure
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: "1.5",
                color: "#1d1d1f",
                marginBottom: "24px"
              }}
            >
              In <strong>Sonic Adventure</strong>, players could transfer Chao eggs to the VMU and raise them on the go.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.5",
                color: "#6e6e73",
                marginBottom: "24px"
              }}
            >
              Training Chao through mini-games increased their stats, which could then be uploaded back into the Dreamcast—directly affecting gameplay.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.5",
                color: "var(--dreamcast-blue)",
                fontWeight: 600
              }}
            >
              This feature blurred the line between console and handheld play.
            </p>
          </motion.div>

          {/* Chao Character Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src={chaoCharacter}
                alt="Chao character"
                className="w-full max-w-[300px] h-auto"
                style={{ display: "block" }}
              />
            </div>
          </motion.div>
        </div>

        {/* VMU Screen Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[600px] mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 p-8">
            <img
              src={vmuChaoScreen}
              alt="Chao Adventure on VMU screen"
              className="w-full h-auto"
              style={{ display: "block" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VMUGamesListSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const games = [
    "Sonic Adventure",
    "Sonic Adventure 2",
    "Shenmue",
    "Skies of Arcadia",
    "Power Stone",
    "Power Stone 2",
    "Marvel vs. Capcom 2",
    "Sega GT",
    "Resident Evil 2",
    "Soulcalibur (JP)",
    "Tech Romancer",
    "Quake III Arena",
    "NFL 2K",
    "NFL 2K1",
    "NFL 2K2",
    "Sakura Wars",
    "Sakura Wars 2",
    "Sakura Wars 3",
    "Sakura Wars 4",
    "Time Stalkers",
    "Zombie Revenge",
    "TrickStyle",
    "Tokyo Bus Guide",
    "Evolution 2"
  ];

  return (
    <section ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 600,
            letterSpacing: "-0.015em",
            lineHeight: "1.1",
            textAlign: "center",
            marginBottom: "24px"
          }}
        >
          Games that featured VMU mini-games
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "17px",
            color: "#6e6e73",
            textAlign: "center",
            marginBottom: "48px"
          }}
        >
          Dozens of Dreamcast titles supported VMU mini-games and extra functionality.
        </motion.p>

        {/* Multi-column grid - Apple footer style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3"
        >
          {games.map((game, index) => (
            <motion.div
              key={game}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.02 }}
              className="py-2 border-b border-gray-200"
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "#1d1d1f",
                  fontWeight: 500
                }}
              >
                {game}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: "13px",
            color: "#86868b",
            textAlign: "center",
            marginTop: "48px"
          }}
        >
          And many more titles supported VMU save icons and real-time display features.
        </motion.p>
      </div>
    </section>
  );
}