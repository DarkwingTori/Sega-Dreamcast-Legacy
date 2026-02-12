import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import frontCover from "@/assets/911a82a6a47ef0179bf3339fbc154bd98056582a.avif";
import backCover from "@/assets/30d0b2800b4b594730be4ae4ce6b6134854a09c9.avif";
import disc from "@/assets/c4c24c6804f9dc70e05d46a42b9a2c9dbbbe330d.avif";
import tonyAerial from "@/assets/6c6c80fbd2ce15621c2ac8583831ae16c2da8733.avif";
import loadingScreen from "@/assets/ce03a2076d6f15bf03210800514f12703364666b.avif";
import gameplayShot from "@/assets/0fc4a69e78606f0d22262bb179d5e9e3749e9357.avif";
import { GlobalHeader } from "../components/GlobalHeader";
import { GameFooter } from "../components/GameFooter";

// Tony Hawk's Pro Skater 2 Color Palette - 90s Skate Culture
const colors = {
  black: "#000000",
  rust: "#C36124",
  offWhite: "#FBFBFB",
  blue: "#6CA1D5"
};

export default function TonyHawk() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: frontCover, alt: "Tony Hawk's Pro Skater 2 Front Cover" },
    { src: backCover, alt: "Tony Hawk's Pro Skater 2 Back Cover" },
    { src: disc, alt: "Tony Hawk's Pro Skater 2 Disc" }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.offWhite }}>
      <GlobalHeader
        activePage="Tony Hawk's Pro Skater 2"
        contextText="The skateboarding game that turned combos into culture."
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Tony Aerial Hero Image */}
      <TonyAerialSection />

      {/* Media Gallery Section */}
      <MediaGallerySection
        images={images}
        currentImage={currentImage}
        onNext={nextImage}
        onPrev={prevImage}
        setCurrentImage={setCurrentImage}
      />

      {/* About the Game */}
      <AboutSection />

      {/* Loading Screen Section */}
      <LoadingScreenSection />

      {/* Gameplay Foundation */}
      <GameplaySection />

      {/* In-Game Screenshot Section */}
      <InGameSection />

      {/* Trick System */}
      <TrickSystemSection />

      {/* Modes of Play */}
      <ModesSection />

      {/* Competitive Play */}
      <CompetitiveSection />

      {/* Skaters & Characters */}
      <SkatersSection />

      {/* Style & Sound */}
      <StyleSoundSection />

      {/* Tech & Credits */}
      <TechCreditsSection />

      {/* Closing Section */}
      <ClosingSection />

      {/* Footer */}
      <GameFooter
        gameName="Tony Hawk's Pro Skater 2"
        releaseYear="2000"
        copyright="Tony Hawk's Pro Skater 2 © Activision."
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden" style={{ backgroundColor: colors.black }}>
      {/* Grunge texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${colors.rust} 10px, ${colors.rust} 11px)`
        }}
      />

      <div className="max-w-[980px] mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(48px, 7vw, 96px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: "0.95",
            marginBottom: "24px",
            background: `linear-gradient(135deg, ${colors.rust} 0%, ${colors.blue} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textTransform: "uppercase"
          }}
        >
          Tony Hawk's
          <br />
          Pro Skater 2
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            letterSpacing: "0.02em",
            lineHeight: "1.1",
            color: colors.offWhite,
            marginBottom: "16px",
            textTransform: "uppercase"
          }}
        >
          Push. Land. Repeat.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            color: colors.blue,
            lineHeight: "1.4",
            marginBottom: "32px"
          }}
        >
          The skateboarding game that defined a generation.
        </motion.p>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button
            className="px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 hover:scale-105 border-2"
            style={{
              backgroundColor: colors.rust,
              borderColor: colors.rust,
              color: colors.offWhite,
              fontSize: "17px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}
          >
            <Play className="w-4 h-4" />
            Watch Trailer
          </button>
          <button
            className="px-6 py-3 rounded-lg border-2 transition-all duration-200 hover:scale-105"
            style={{
              borderColor: colors.blue,
              backgroundColor: "transparent",
              color: colors.blue,
              fontSize: "17px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}
          >
            View Gallery
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}

function TonyAerialSection() {
  return (
    <section className="py-20" style={{ backgroundColor: colors.offWhite }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Image */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{
              backgroundColor: colors.black,
              border: `4px solid ${colors.rust}`
            }}
          >
            <img
              src={tonyAerial}
              alt="Tony Hawk's aerial trick"
              className="w-full h-auto"
              style={{ maxHeight: "600px", objectFit: "contain" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MediaGallerySection({ images, currentImage, onNext, onPrev, setCurrentImage }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20" style={{ backgroundColor: colors.offWhite }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Image */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{
              backgroundColor: colors.black,
              border: `4px solid ${colors.rust}`
            }}
          >
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-auto"
              style={{ maxHeight: "600px", objectFit: "contain" }}
            />

            {/* Navigation Arrows */}
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-lg flex items-center justify-center transition-all shadow-lg hover:scale-110"
              style={{
                backgroundColor: colors.rust,
                border: `2px solid ${colors.black}`
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" style={{ color: colors.offWhite }} />
            </button>

            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-lg flex items-center justify-center transition-all shadow-lg hover:scale-110"
              style={{
                backgroundColor: colors.rust,
                border: `2px solid ${colors.black}`
              }}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" style={{ color: colors.offWhite }} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            {images.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className="w-4 h-4 rounded-sm transition-all border-2"
                style={{
                  backgroundColor: index === currentImage ? colors.rust : "transparent",
                  borderColor: colors.black,
                  transform: index === currentImage ? "rotate(45deg)" : "none"
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden" style={{ backgroundColor: colors.black }}>
      {/* Diagonal stripe */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-10"
        style={{
          background: `repeating-linear-gradient(-45deg, ${colors.rust}, ${colors.rust} 20px, transparent 20px, transparent 40px)`
        }}
      />

      <div className="max-w-[980px] mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            marginBottom: "24px",
            color: colors.offWhite,
            textTransform: "uppercase"
          }}
        >
          Skateboarding, refined.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: colors.blue,
            maxWidth: "700px",
            margin: "0 auto"
          }}
        >
          Released in 2000 for the Sega Dreamcast, Tony Hawk's Pro Skater 2 built on the foundation of its predecessor—refining controls, expanding trick systems, and deepening progression.
          <br /><br />
          <span style={{ color: colors.rust, fontWeight: 700 }}>
            It didn't just improve the formula. It perfected it.
          </span>
        </motion.p>
      </div>
    </section>
  );
}

function LoadingScreenSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.black }}>
      {/* Grunge overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, ${colors.rust} 0px, ${colors.rust} 1px, transparent 1px, transparent 3px)`
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 56px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            marginBottom: "48px",
            color: colors.rust,
            textTransform: "uppercase",
            textAlign: "center"
          }}
        >
          Loading...
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{
              border: `4px solid ${colors.rust}`,
              backgroundColor: colors.black
            }}
          >
            <img
              src={loadingScreen}
              alt="Tony Hawk's Pro Skater 2 loading screen"
              className="w-full h-auto"
              style={{ display: "block" }}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: colors.blue,
            maxWidth: "800px",
            margin: "32px auto 0",
            textAlign: "center"
          }}
        >
          Even the loading screen was iconic—setting the tone before you even grabbed the controller.
        </motion.p>
      </div>
    </section>
  );
}

function InGameSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20" style={{ backgroundColor: colors.offWhite }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              style={{
                fontSize: "clamp(40px, 5vw, 56px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                marginBottom: "24px",
                color: colors.black,
                textTransform: "uppercase"
              }}
            >
              Pure gameplay.
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: "1.5",
                color: "#1d1d1f",
                marginBottom: "24px"
              }}
            >
              Intuitive controls combined with responsive physics made every session feel fluid and rewarding.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.5",
                color: "#6e6e73"
              }}
            >
              The Dreamcast's analog triggers and VMU integration elevated the experience, bringing arcade precision to home consoles.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                border: `4px solid ${colors.black}`,
                boxShadow: `8px 8px 0 ${colors.rust}`
              }}
            >
              <img
                src={gameplayShot}
                alt="Tony Hawk's Pro Skater 2 in-game screenshot"
                className="w-full h-auto"
                style={{ display: "block" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GameplaySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32" style={{ backgroundColor: colors.offWhite }}>
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            marginBottom: "24px",
            color: colors.black,
            textTransform: "uppercase"
          }}
        >
          Built for flow.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: "#1d1d1f",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          Players take control of professional and fictional skateboarders in fully 3D environments—performing tricks, completing objectives, and chaining combos in fast-paced, two-minute sessions.
          <br /><br />
          The game's physics favor expression and creativity, allowing players to move freely through levels and tackle objectives in any order.
        </motion.p>
      </div>
    </section>
  );
}

function TrickSystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mechanics = [
    "Manuals to extend combos",
    "Grabs, flips, slides, and lip tricks",
    "Wall rides and ramp transfers",
    "Switch stance, nollies, and fakies",
    "Directional balance during manuals"
  ];

  return (
    <section ref={ref} className="py-32 relative overflow-hidden" style={{ backgroundColor: colors.blue }}>
      {/* Geometric pattern */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 opacity-20"
        style={{
          background: `repeating-linear-gradient(90deg, ${colors.black} 0px, ${colors.black} 2px, transparent 2px, transparent 20px)`
        }}
      />

      <div className="max-w-[980px] mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            textAlign: "center",
            marginBottom: "32px",
            color: colors.black,
            textTransform: "uppercase"
          }}
        >
          Where combos were born.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: colors.black,
            textAlign: "center",
            marginBottom: "48px",
            fontWeight: 600
          }}
        >
          Tony Hawk's Pro Skater 2 introduced manuals, fundamentally changing how tricks were chained together.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {mechanics.map((mechanic, index) => (
            <motion.div
              key={mechanic}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="p-6 rounded-lg"
              style={{
                backgroundColor: colors.offWhite,
                border: `3px solid ${colors.black}`,
                boxShadow: `4px 4px 0 ${colors.rust}`
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{
                    backgroundColor: colors.rust,
                    transform: "rotate(45deg)"
                  }}
                />
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: colors.black,
                    textTransform: "uppercase",
                    letterSpacing: "0.02em"
                  }}
                >
                  {mechanic}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: colors.black,
            textAlign: "center",
            fontWeight: 700,
            textTransform: "uppercase"
          }}
        >
          The result: longer runs, higher scores, limitless creativity.
        </motion.p>
      </div>
    </section>
  );
}

function ModesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const modes = [
    {
      title: "Career Mode",
      description: "Complete objectives, earn cash, unlock levels, and improve skater stats."
    },
    {
      title: "Free Skate",
      description: "No timer. No goals. Just skate."
    },
    {
      title: "Single Session",
      description: "Chase high scores in timed runs."
    },
    {
      title: "Multiplayer",
      description: "Competitive modes including Graffiti, Trick Attack, Tag, HORSE, and Free Skate."
    },
    {
      title: "Level Editor",
      description: "Create custom parks using over 100 modular pieces and themed environments."
    }
  ];

  return (
    <section ref={ref} className="py-32" style={{ backgroundColor: colors.offWhite }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            textAlign: "center",
            marginBottom: "64px",
            color: colors.black,
            textTransform: "uppercase"
          }}
        >
          Five ways to skate.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modes.map((mode, index) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: index % 2 === 0 ? colors.black : colors.rust,
                border: `3px solid ${index % 2 === 0 ? colors.rust : colors.black}`
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  marginBottom: "12px",
                  color: colors.offWhite,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}
              >
                {mode.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: index % 2 === 0 ? colors.blue : colors.offWhite,
                  lineHeight: "1.5"
                }}
              >
                {mode.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompetitiveSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const criteria = ["Variety", "Difficulty", "Execution"];

  return (
    <section ref={ref} className="py-32" style={{ backgroundColor: colors.black }}>
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            marginBottom: "24px",
            color: colors.offWhite,
            textTransform: "uppercase"
          }}
        >
          Skill, judged.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: colors.blue,
            marginBottom: "48px"
          }}
        >
          Select levels feature competition modes, where players perform for judges across three rounds.
          <br /><br />
          Scores are evaluated based on:
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {criteria.map((criterion, index) => (
            <motion.div
              key={criterion}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="p-8 rounded-lg"
              style={{
                backgroundColor: colors.rust,
                border: `3px solid ${colors.blue}`,
                boxShadow: `6px 6px 0 ${colors.blue}`
              }}
            >
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: 900,
                  color: colors.offWhite,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}
              >
                {criterion}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: colors.blue
          }}
        >
          To fully complete these events, players must win gold and collect all available cash.
        </motion.p>
      </div>
    </section>
  );
}

function SkatersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skaterGroups = [
    { count: "10", label: "professional skateboarders" },
    { count: "4", label: "unlockable original characters" },
    { count: "1", label: "special guest: Spider-Man" }
  ];

  return (
    <section ref={ref} className="py-32" style={{ backgroundColor: colors.offWhite }}>
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            marginBottom: "48px",
            color: colors.black,
            textTransform: "uppercase"
          }}
        >
          Legends on the board.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skaterGroups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-lg relative"
              style={{
                backgroundColor: colors.black,
                border: `4px solid ${colors.rust}`
              }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-8 h-8"
                style={{
                  backgroundColor: colors.rust,
                  clipPath: "polygon(100% 0, 0 0, 100% 100%)"
                }}
              />
              <p
                style={{
                  fontSize: "64px",
                  fontWeight: 900,
                  color: colors.rust,
                  lineHeight: "1",
                  marginBottom: "12px"
                }}
              >
                {group.count}
              </p>
              <p
                style={{
                  fontSize: "17px",
                  color: colors.blue,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  letterSpacing: "0.05em"
                }}
              >
                {group.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: "#1d1d1f"
          }}
        >
          Each skater brings unique stats and style, encouraging experimentation and mastery.
        </motion.p>
      </div>
    </section>
  );
}

function StyleSoundSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden" style={{ backgroundColor: colors.rust }}>
      {/* Diagonal stripes */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `repeating-linear-gradient(45deg, ${colors.black} 0px, ${colors.black} 20px, transparent 20px, transparent 40px)`
        }}
      />

      <div className="max-w-[980px] mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            marginBottom: "24px",
            color: colors.offWhite,
            textTransform: "uppercase"
          }}
        >
          The sound of an era.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: colors.black,
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          Set against urban environments infused with punk rock and hip-hop, the game's atmosphere was as important as its mechanics.
          <br /><br />
          <span style={{ color: colors.offWhite, fontWeight: 700 }}>
            The soundtrack and visual style defined skate culture for a generation—and still resonate today.
          </span>
        </motion.p>
      </div>
    </section>
  );
}

function TechCreditsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32" style={{ backgroundColor: colors.black }}>
      <div className="max-w-[980px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 900,
            letterSpacing: "0.05em",
            textAlign: "center",
            marginBottom: "64px",
            color: colors.rust,
            textTransform: "uppercase"
          }}
        >
          Game Information
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-x-12 gap-y-3 max-w-[700px] mx-auto"
        >
          {[
            { label: "Developer", value: "Neversoft" },
            { label: "Publisher", value: "Activision" },
            { label: "Director", value: "Jason Uyeda" },
            { label: "Producer", value: "Scott Pease" },
            { label: "Designer", value: "Aaron Cammarata" },
            { label: "Programmer", value: "Mick West" },
            { label: "Artist", value: "Silvio Porretta" },
            { label: "Composer", value: "Brian Bright" },
            { label: "Platform", value: "Dreamcast" },
            { label: "Release", value: "September 19, 2000" },
            { label: "Genre", value: "Sports" },
            { label: "Modes", value: "Single-player, Multiplayer" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex justify-between py-3 border-b-2"
              style={{ borderColor: colors.rust }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: colors.blue,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  letterSpacing: "0.05em"
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: colors.offWhite,
                  textAlign: "right"
                }}
              >
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32" style={{ backgroundColor: colors.offWhite }}>
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            marginBottom: "24px",
            color: colors.black,
            textTransform: "uppercase"
          }}
        >
          Not just a sequel.
          <br />
          <span style={{ color: colors.rust }}>A standard.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: "#1d1d1f",
            maxWidth: "700px",
            margin: "0 auto"
          }}
        >
          Tony Hawk's Pro Skater 2 didn't just raise the bar—it set it.
          <br /><br />
          <strong style={{ color: colors.rust }}>For skateboarding games.</strong>
          <br />
          <strong style={{ color: colors.blue }}>For player creativity.</strong>
          <br />
          <strong style={{ color: colors.black }}>For an entire generation.</strong>
        </motion.p>
      </div>
    </section>
  );
}