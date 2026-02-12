import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect } from "react";
import { GlobalHeader } from "../components/GlobalHeader";
import { GameFooter } from "../components/GameFooter";
import jumpPack from "@/assets/1cd261bdfed6ef7a6b3900140b37da6d379dec26.avif";
import dreamcastKeyboard from "@/assets/e69f0c1ce9d1d8e97819f430d46fba5597dfcb87.avif";
import dreamcastMouse from "@/assets/2e5b24e30f2511ba4ec21362bc2c0c8f0497486e.avif";
import microphone from "@/assets/34194e1bc47b1ea0d190170032969331109ca2f9.avif";
import fishingController from "@/assets/8d17e01b95fab35162115c7ab8f71d30fcfdbd38.avif";
import arcadeStick from "@/assets/464962d62fcc4e3dbd97abe1f0ab3f690b77a87d.avif";
import dreamcastController from "@/assets/3e6e900ff2a44ba1cd3d884dd19c9659ee01adf5.avif";
import vmuMemoryCard from "@/assets/3099fc50c771c9c18ee8bd70b8c35d8f2bda6a07.avif";

export default function Accessories() {
  // Handle scrolling to section on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes('accessories')) {
      // Extract section from hash (e.g., #accessories#controllers)
      const parts = hash.split('#');
      const section = parts[parts.length - 1];
      
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <GlobalHeader
        activePage="Accessories"
        contextText="Expand your Dreamcast experience."
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Controllers Section */}
      <ControllersSection />

      {/* Memory Cards Section */}
      <MemoryCardsSection />

      {/* Peripherals Section */}
      <PeripheralsSection />

      {/* Footer */}
      <GameFooter
        gameName="Dreamcast Accessories"
        releaseYear="1999"
        copyright="Dreamcast Accessories © Sega."
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
          Accessories
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
            marginBottom: "40px"
          }}
        >
          Designed to expand the Dreamcast experience.
        </motion.p>
      </div>
    </section>
  );
}

function ControllersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="controllers" ref={ref} className="py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
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
              Built to feel right.
            </h2>

            <p
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: "1.5",
                color: "#6e6e73",
                marginBottom: "32px"
              }}
            >
              The Dreamcast controller introduced a bold new design—prioritizing ergonomics, analog precision, and modular expansion.
            </p>

            <p
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: "1.5",
                color: "#6e6e73",
                marginBottom: "40px"
              }}
            >
              With dual expansion slots, players could connect a VMU, vibration pack, microphone, or other peripherals directly to the controller—making it the central hub of the Dreamcast experience.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-4">
              <FeatureItem text="Single analog stick with digital precision" />
              <FeatureItem text="Dual expansion slots for accessories" />
              <FeatureItem text="Analog triggers for variable input" />
              <FeatureItem text="Designed for long play sessions" />
            </div>
          </motion.div>

          {/* Controller Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={dreamcastController}
                alt="Dreamcast Controller"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MemoryCardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="memory" ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
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
            Memory that played back.
          </h2>

          <p
            style={{
              fontSize: "clamp(17px, 2vw, 21px)",
              lineHeight: "1.5",
              color: "#6e6e73",
              maxWidth: "800px",
              margin: "0 auto 16px"
            }}
          >
            The Visual Memory Unit wasn't just a memory card—it was a second screen, a handheld game system, and a personal interface for players.
          </p>

          <p
            style={{
              fontSize: "clamp(17px, 2vw, 21px)",
              lineHeight: "1.5",
              color: "#6e6e73",
              maxWidth: "800px",
              margin: "0 auto"
            }}
          >
            With its LCD display, buttons, and built-in mini-games, the VMU extended Dreamcast gameplay beyond the console.
          </p>
        </motion.div>

        {/* VMU Image & Features */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src={vmuMemoryCard}
              alt="VMU Memory Card"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <VMUFeature
              title="128 KB flash memory"
              description="Store game saves and downloadable content"
            />
            <VMUFeature
              title="LCD screen for stats and mini-games"
              description="Play games anywhere, see real-time data"
            />
            <VMUFeature
              title="Portable play with downloadable content"
              description="Take your games on the go"
            />
            <VMUFeature
              title="Data transfer between players"
              description="Share saves and mini-games with friends"
            />
          </motion.div>
        </div>

        {/* Optional Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p
            style={{
              fontSize: "17px",
              color: "#6e6e73",
              fontStyle: "italic"
            }}
          >
            Available in multiple colors and regional variants.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PeripheralsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const peripherals = [
    {
      name: "Jump Pack / Vibration Pack",
      description: "Force feedback for compatible titles",
      image: jumpPack
    },
    {
      name: "Dreamcast Keyboard",
      description: "Essential for online play and messaging",
      image: dreamcastKeyboard
    },
    {
      name: "Dreamcast Mouse",
      description: "Designed for shooters and strategy games",
      image: dreamcastMouse
    },
    {
      name: "Microphone",
      description: "Voice input and communication",
      image: microphone
    },
    {
      name: "Fishing Controller",
      description: "Purpose-built for Sega Bass Fishing",
      image: fishingController
    },
    {
      name: "Arcade Stick",
      description: "Authentic arcade-style controls",
      image: arcadeStick
    }
  ];

  return (
    <section id="peripherals" ref={ref} className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            Expand the experience.
          </h2>

          <p
            style={{
              fontSize: "clamp(17px, 2vw, 21px)",
              lineHeight: "1.5",
              color: "#6e6e73",
              maxWidth: "900px",
              margin: "0 auto"
            }}
          >
            Dreamcast peripherals transformed how players interacted with games—bringing motion, voice, competition, and realism into the living room.
          </p>
        </motion.div>

        {/* Peripheral Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {peripherals.map((item, index) => (
            <PeripheralCard
              key={item.name}
              item={item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper Components

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5"
        style={{ backgroundColor: "var(--dreamcast-orange)" }}
      />
      <p
        style={{
          fontSize: "17px",
          lineHeight: "1.5",
          color: "#1d1d1f"
        }}
      >
        {text}
      </p>
    </div>
  );
}

function VMUFeature({ title, description }: { title: string; description: string }) {
  return (
    <div
      className="p-6 rounded-2xl"
      style={{
        background: "white",
        border: "1px solid rgba(0,0,0,0.1)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
      }}
    >
      <h4
        style={{
          fontSize: "19px",
          fontWeight: 600,
          marginBottom: "8px",
          color: "#1d1d1f"
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.5",
          color: "#6e6e73"
        }}
      >
        {description}
      </p>
    </div>
  );
}

function PeripheralCard({
  item,
  index,
  isInView
}: {
  item: { name: string; description: string; image: string };
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div
        className="rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          background: "white",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
        }}
      >
        {/* Image */}
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            style={{
              fontSize: "19px",
              fontWeight: 600,
              marginBottom: "8px",
              color: "#1d1d1f"
            }}
          >
            {item.name}
          </h3>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.5",
              color: "#6e6e73"
            }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}