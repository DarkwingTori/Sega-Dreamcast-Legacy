import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import frontCover from "@/assets/3d8d77435b91e75b45428308afe724a199303578.avif";
import backCover from "@/assets/17711ad511ad8cc2346d55f9d097e833799cbe54.avif";
import characterSelect from "@/assets/bef495b9770e8feab6050b979c8580400dbf5db0.avif";
import posterArt from "@/assets/7a70e34105dd41f1892afd988c20d11d765b2242.avif";
import gameplayShot from "@/assets/2594e08f7210f5595396a9de1f6dbb05743deca2.avif";
import wolverineImg from "@/assets/7e5dceaaeb3830181863148045b38a4824757ed2.webp";
import captainAmericaImg from "@/assets/d685788d346be2d3b5b5d317fc04793caa478b4a.webp";
import spiderManImg from "@/assets/544ddfa50858e2eb26a310934e220e4074d38dae.webp";
import hulkImg from "@/assets/d72ea3446bd4fa842f79724fd551e3470cf1e0f3.webp";
import venomImg from "@/assets/0cf596c4e3be2dc9ed8b70bd8301ca207bb06c3f.webp";
import gambitImg from "@/assets/5173f961f585a96e67a8ed3751140986afedf5ac.webp";
import warMachineImg from "@/assets/3f39d8bccdb8ecca5206d1898f767e549b08cb39.webp";
import highSpeedVenomImg from "@/assets/f80b277448c3c05ceb395eefbbb39f632455119b.gif";
import hyperArmorWarMachineImg from "@/assets/e40c7532b7362370960986442eb59c8c912d9817.webp";
import ryuImg from "@/assets/5d463dc8e61ff2295a81250f8e7c6ac482d8cb19.webp";
import chunLiImg from "@/assets/844f5508ccf105da5fd9caa7ed4cbca77d08a949.webp";
import megaManImg from "@/assets/9ea13abac012335ed6bc15a088c253de910aa3b2.webp";
import striderImg from "@/assets/0ed0c6d46980385dcafe64112484585d5383bed1.webp";
import morriganImg from "@/assets/5f51b706de1f62ddd6bbac3a0567253829128921.webp";
import jinImg from "@/assets/c263e11be21d63ce59c374b3dad52d85cc342bf2.webp";
import captainCommandoImg from "@/assets/c9707fb50ef50449fc139564e2a46486ffd85fc0.webp";
import zangiefImg from "@/assets/8404d3ee2ef4782a9e87ea30baeebd69641f4c10.webp";
import shadowLadyImg from "@/assets/74c6d68014fafc27663ceae326ef57c72e47cf97.gif";
import rollImg from "@/assets/01c044e3cbd7654811f14b4afa8fa7c2ac0ce61c.webp";
import { GlobalHeader } from "../components/GlobalHeader";
import { GameFooter } from "../components/GameFooter";

// Marvel vs. Capcom Color Palette - Comic Book Intensity
const colors = {
  red: "#AF271D",
  blue: "#373C8C",
  purple: "#581D75",
  white: "#FFFFFF",
  black: "#000000"
};

export default function MarvelVsCapcom() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: frontCover, alt: "Marvel vs. Capcom Front Cover" },
    { src: backCover, alt: "Marvel vs. Capcom Back Cover" },
    { src: characterSelect, alt: "Marvel vs. Capcom Character Select Screen" }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.black }}>
      <GlobalHeader
        activePage="Marvel vs. Capcom"
        contextText="A legendary crossover brought home on Dreamcast."
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Poster Art Section */}
      <PosterSection />

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

      {/* Gameplay Screenshot */}
      <GameplayScreenSection />

      {/* Core Gameplay */}
      <GameplaySection />

      {/* New to the Series */}
      <NewFeaturesSection />

      {/* Game Modes */}
      <GameModesSection />

      {/* Character Roster - CENTERPIECE */}
      <CharacterRosterSection />

      {/* Special Partners */}
      <SpecialPartnersSection />

      {/* Dreamcast Advantage */}
      <DreamcastAdvantageSection />

      {/* Tech & Credits */}
      <TechCreditsSection />

      {/* Closing Section */}
      <ClosingSection />

      {/* Footer */}
      <GameFooter
        gameName="Marvel vs. Capcom"
        releaseYear="1998"
        copyright="Marvel vs. Capcom © Capcom. Marvel characters © Marvel."
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 overflow-hidden relative" style={{ backgroundColor: colors.black }}>
      {/* Comic book energy lines */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/4 left-0 w-full h-1"
          style={{
            background: `linear-gradient(90deg, ${colors.red} 0%, transparent 50%, ${colors.blue} 100%)`
          }}
        />
        <div
          className="absolute top-2/4 left-0 w-full h-2"
          style={{
            background: `linear-gradient(90deg, ${colors.blue} 0%, transparent 50%, ${colors.purple} 100%)`
          }}
        />
        <div
          className="absolute top-3/4 left-0 w-full h-1"
          style={{
            background: `linear-gradient(90deg, ${colors.purple} 0%, transparent 50%, ${colors.red} 100%)`
          }}
        />
      </div>

      <div className="max-w-[980px] mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(48px, 7vw, 96px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: "1",
            marginBottom: "20px",
            textTransform: "uppercase"
          }}
        >
          <span style={{ color: colors.red }}>Marvel</span>{" "}
          <span style={{ color: colors.white }}>vs.</span>{" "}
          <span style={{ color: colors.blue }}>Capcom</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            letterSpacing: "0.01em",
            lineHeight: "1.1",
            color: colors.white,
            marginBottom: "16px",
            textTransform: "uppercase"
          }}
        >
          Clash of Super Heroes
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            color: "#999",
            lineHeight: "1.4",
            marginBottom: "40px"
          }}
        >
          Iconic heroes. Explosive combat. Only on Dreamcast.
        </motion.p>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button
            className="px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${colors.red} 0%, ${colors.purple} 100%)`,
              color: colors.white,
              fontSize: "17px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              boxShadow: `0 0 30px rgba(175, 39, 29, 0.5)`
            }}
          >
            <Play className="w-4 h-4" />
            Watch Trailer
          </button>
          <button
            className="px-6 py-3 rounded-lg border-2 transition-all duration-200 hover:scale-105"
            style={{
              borderColor: colors.blue,
              backgroundColor: "rgba(55, 60, 140, 0.2)",
              color: colors.white,
              fontSize: "17px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}
          >
            View Characters
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}

function PosterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.red }}>
      {/* Comic halftone effect */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, ${colors.black} 1px, transparent 1px)`,
          backgroundSize: "10px 10px"
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
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
            marginBottom: "48px",
            color: colors.white,
            textTransform: "uppercase",
            textShadow: `3px 3px 0 ${colors.black}`
          }}
        >
          The best of the best!
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
              border: `6px solid ${colors.white}`,
              boxShadow: `0 0 40px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.1)`
            }}
          >
            <img
              src={posterArt}
              alt="Marvel vs. Capcom Poster Art"
              className="w-full h-auto"
              style={{ display: "block" }}
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
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.black }}>
      {/* Diagonal comic effect */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `repeating-linear-gradient(45deg, ${colors.red}, ${colors.red} 10px, transparent 10px, transparent 20px, ${colors.blue} 20px, ${colors.blue} 30px, transparent 30px, transparent 40px)`
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
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
              backgroundColor: "#1a1a1a",
              border: `4px solid ${colors.purple}`,
              boxShadow: `0 0 40px rgba(88, 29, 117, 0.4)`
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
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all"
              style={{
                backgroundColor: colors.red,
                border: `3px solid ${colors.white}`,
                boxShadow: `0 0 20px rgba(175, 39, 29, 0.5)`
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" style={{ color: colors.white }} />
            </button>

            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all"
              style={{
                backgroundColor: colors.blue,
                border: `3px solid ${colors.white}`,
                boxShadow: `0 0 20px rgba(55, 60, 140, 0.5)`
              }}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" style={{ color: colors.white }} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {images.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className="w-4 h-4 rounded-full transition-all border-2"
                style={{
                  backgroundColor: index === currentImage ? colors.red : "transparent",
                  borderColor: index === currentImage ? colors.red : colors.white,
                  transform: index === currentImage ? "scale(1.2)" : "scale(1)"
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
    <section ref={ref} className="py-32 relative" style={{ backgroundColor: colors.purple }}>
      {/* Diagonal accent */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          background: `repeating-linear-gradient(135deg, ${colors.black} 0px, ${colors.black} 40px, transparent 40px, transparent 80px)`
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
            color: colors.white,
            textTransform: "uppercase",
            textShadow: `4px 4px 0 ${colors.black}`
          }}
        >
          When universes collide.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: colors.white,
            maxWidth: "700px",
            margin: "0 auto"
          }}
        >
          Marvel vs. Capcom: Clash of Super Heroes brings together legendary characters from Marvel Comics and Capcom's iconic franchises in fast-paced, tag-team combat.
          <br /><br />
          Originally developed for the arcade, the Dreamcast version delivers the full crossover experience—recreated for the home.
        </motion.p>
      </div>
    </section>
  );
}

function GameplayScreenSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20" style={{ backgroundColor: colors.black }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                border: `4px solid ${colors.blue}`,
                boxShadow: `8px 8px 0 ${colors.red}, 0 0 40px rgba(55, 60, 140, 0.4)`
              }}
            >
              <img
                src={gameplayShot}
                alt="Marvel vs. Capcom gameplay screenshot"
                className="w-full h-auto"
                style={{ display: "block" }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              style={{
                fontSize: "clamp(40px, 5vw, 56px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                marginBottom: "24px",
                color: colors.white,
                textTransform: "uppercase"
              }}
            >
              Explosive action.
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: "1.5",
                color: "#ccc",
                marginBottom: "24px"
              }}
            >
              Tag-team battles with devastating combos, screen-filling super moves, and non-stop arcade intensity.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.5",
                color: "#999"
              }}
            >
              The Dreamcast version preserves the arcade's fluid 60fps action, bringing home the full competitive experience.
            </p>
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
    <section ref={ref} className="py-32 relative" style={{ backgroundColor: colors.blue }}>
      {/* Comic book dots */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, ${colors.white} 2px, transparent 2px)`,
          backgroundSize: "20px 20px"
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
            color: colors.white,
            textTransform: "uppercase",
            textShadow: `3px 3px 0 ${colors.black}`
          }}
        >
          Built for spectacle.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: colors.white,
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          Players select a team of two fighters and battle head-to-head, switching characters on the fly to maintain pressure and control the match.
          <br /><br />
          While one character fights, the other recovers—rewarding strategy, timing, and aggressive play.
        </motion.p>
      </div>
    </section>
  );
}

function NewFeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Variable Cross (Duo Team Attack)",
      description: "Attack with both characters simultaneously for a limited time—overwhelming opponents with coordinated offense.",
      color: colors.red
    },
    {
      title: "Hyper Combo Gauge",
      description: "Unlimited access to the Hyper Combo meter enables devastating combo chains and back-to-back super moves.",
      color: colors.purple
    },
    {
      title: "Guest Character System",
      description: "Replace traditional assists with randomly assigned Special Partners, each limited in use but powerful when timed correctly.",
      color: colors.blue
    }
  ];

  return (
    <section ref={ref} className="py-32 relative" style={{ backgroundColor: colors.black }}>
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
            color: colors.white,
            textTransform: "uppercase"
          }}
        >
          A faster, more explosive system.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl hover:scale-105 transition-all duration-300"
              style={{
                backgroundColor: feature.color,
                border: `4px solid ${colors.white}`,
                boxShadow: `6px 6px 0 ${colors.black}`
              }}
            >
              <Zap className="w-8 h-8 mb-4" style={{ color: colors.white }} />
              <h3
                style={{
                  fontSize: "21px",
                  fontWeight: 800,
                  marginBottom: "12px",
                  color: colors.white,
                  textTransform: "uppercase"
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: colors.white,
                  lineHeight: "1.5"
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GameModesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const modes = [
    { title: "Arcade", description: "Battle through AI-controlled teams and face Onslaught, the ultimate crossover boss." },
    { title: "Versus", description: "Local competitive play with customizable settings." },
    { title: "Training", description: "Practice combos, timing, and Hyper Combos with adjustable difficulty." },
    { title: "Survival", description: "Fight wave after wave with a shared life gauge." },
    { title: "Cross Fever", description: "Four players. Two teams. Total chaos." }
  ];

  return (
    <section ref={ref} className="py-32 relative" style={{ backgroundColor: colors.red }}>
      {/* Halftone effect */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, ${colors.black} 1.5px, transparent 1.5px)`,
          backgroundSize: "15px 15px"
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
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
            color: colors.white,
            textTransform: "uppercase",
            textShadow: `4px 4px 0 ${colors.black}`
          }}
        >
          Five ways to fight.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modes.map((mode, index) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl hover:scale-105 transition-all"
              style={{
                backgroundColor: colors.black,
                border: `3px solid ${colors.white}`,
                boxShadow: `4px 4px 0 ${colors.purple}`
              }}
            >
              <h3
                style={{
                  fontSize: "21px",
                  fontWeight: 800,
                  marginBottom: "8px",
                  color: colors.white,
                  textTransform: "uppercase"
                }}
              >
                {mode.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "#ccc",
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

function CharacterRosterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const marvelCharacters = [
    { name: "Captain America", image: captainAmericaImg },
    { name: "Spider-Man", image: spiderManImg },
    { name: "Wolverine", image: wolverineImg },
    { name: "Hulk", image: hulkImg },
    { name: "Venom", image: venomImg },
    { name: "Gambit", image: gambitImg },
    { name: "War Machine", image: warMachineImg },
    { name: "High Speed Venom", image: highSpeedVenomImg },
    { name: "Hyper Armor War Machine", image: hyperArmorWarMachineImg }
  ];

  const capcomCharacters = [
    { name: "Ryu", image: ryuImg },
    { name: "Chun-Li", image: chunLiImg },
    { name: "Mega Man", image: megaManImg },
    { name: "Strider Hiryu", image: striderImg },
    { name: "Morrigan Aensland", image: morriganImg },
    { name: "Jin Saotome", image: jinImg },
    { name: "Captain Commando", image: captainCommandoImg },
    { name: "Zangief", image: zangiefImg },
    { name: "Shadow Lady", image: shadowLadyImg },
    { name: "Roll", image: rollImg }
  ];

  return (
    <section ref={ref} className="py-32 relative" style={{ backgroundColor: colors.black }}>
      {/* Energy radial gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${colors.red} 0%, transparent 50%), radial-gradient(circle at 70% 50%, ${colors.blue} 0%, transparent 50%)`
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
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
            color: colors.white,
            textTransform: "uppercase"
          }}
        >
          A crossover lineup.
        </motion.h2>

        {/* Marvel Characters */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3
            className="mb-6"
            style={{
              fontSize: "32px",
              fontWeight: 900,
              color: colors.red,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              textShadow: `2px 2px 0 ${colors.black}`
            }}
          >
            Marvel Characters
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {marvelCharacters.map((character, index) => (
              <motion.div
                key={character.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="p-5 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: colors.red,
                  border: `3px solid ${colors.white}`,
                  boxShadow: `4px 4px 0 ${colors.black}`
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 800,
                    color: colors.white,
                    textAlign: "center",
                    textTransform: "uppercase"
                  }}
                >
                  {character.name}
                </p>
                {character.image && (
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-10 h-10 mx-auto mt-2"
                    style={{ display: "block" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Capcom Characters */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3
            className="mb-6"
            style={{
              fontSize: "32px",
              fontWeight: 900,
              color: colors.blue,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              textShadow: `2px 2px 0 ${colors.black}`
            }}
          >
            Capcom Characters
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {capcomCharacters.map((character, index) => (
              <motion.div
                key={character.name || character}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="p-5 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: colors.blue,
                  border: `3px solid ${colors.white}`,
                  boxShadow: `4px 4px 0 ${colors.black}`
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 800,
                    color: colors.white,
                    textAlign: "center",
                    textTransform: "uppercase"
                  }}
                >
                  {character.name || character}
                </p>
                {character.image && (
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-10 h-10 mx-auto mt-2"
                    style={{ display: "block" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Secret Characters Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="p-8 rounded-2xl text-center"
          style={{
            backgroundColor: colors.purple,
            border: `4px solid ${colors.white}`,
            boxShadow: `8px 8px 0 ${colors.black}`
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              fontWeight: 900,
              color: colors.white,
              marginBottom: "12px",
              textTransform: "uppercase",
              textShadow: `2px 2px 0 ${colors.black}`
            }}
          >
            Secret Characters
          </h3>
          <p
            style={{
              fontSize: "17px",
              color: colors.white
            }}
          >
            Unlocked via codes, including alternate versions and experimental fighters—adding depth and replayability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SpecialPartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const marvelPartners = ["Cyclops", "Colossus", "Jubilee", "Magneto", "Storm", "Sentinel"];
  const capcomPartners = [
    "Arthur (Ghosts 'n Goblins)",
    "Devilot (Cyberbots)",
    "Unknown Soldier (Forgotten Worlds)",
    "Anita (Darkstalkers)"
  ];

  return (
    <section ref={ref} className="py-32 relative" style={{ backgroundColor: colors.purple }}>
      {/* Diagonal pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `repeating-linear-gradient(45deg, ${colors.black} 0px, ${colors.black} 30px, transparent 30px, transparent 60px)`
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
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
            marginBottom: "24px",
            color: colors.white,
            textTransform: "uppercase",
            textShadow: `3px 3px 0 ${colors.black}`
          }}
        >
          Backup when it counts.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            color: colors.white,
            textAlign: "center",
            marginBottom: "48px"
          }}
        >
          During matches, players can summon Special Partners from both universes for brief support attacks.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Marvel Partners */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-xl"
            style={{
              backgroundColor: colors.red,
              border: `4px solid ${colors.white}`,
              boxShadow: `6px 6px 0 ${colors.black}`
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 900,
                color: colors.white,
                marginBottom: "16px",
                textTransform: "uppercase"
              }}
            >
              Marvel Partners
            </h3>
            <div className="space-y-2">
              {marvelPartners.map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: colors.white }} />
                  <p style={{ fontSize: "15px", color: colors.white, fontWeight: 700 }}>{partner}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Capcom Partners */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-xl"
            style={{
              backgroundColor: colors.blue,
              border: `4px solid ${colors.white}`,
              boxShadow: `6px 6px 0 ${colors.black}`
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 900,
                color: colors.white,
                marginBottom: "16px",
                textTransform: "uppercase"
              }}
            >
              Capcom Partners
            </h3>
            <div className="space-y-2">
              {capcomPartners.map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: colors.white }} />
                  <p style={{ fontSize: "15px", color: colors.white, fontWeight: 700 }}>{partner}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DreamcastAdvantageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            color: colors.white,
            textTransform: "uppercase"
          }}
        >
          The arcade at home.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: "#999",
            maxWidth: "800px",
            margin: "0 auto 40px"
          }}
        >
          The Dreamcast version runs at a smooth 60fps, matching the arcade's performance while adding home-console conveniences like expanded training modes and customizable versus matches.
          <br /><br />
          No quarters required.
        </motion.p>
      </div>
    </section>
  );
}

function TechCreditsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32" style={{ backgroundColor: colors.red }}>
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
            color: colors.white,
            textTransform: "uppercase",
            textShadow: `3px 3px 0 ${colors.black}`
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
            { label: "Developer", value: "Capcom" },
            { label: "Publisher", value: "Capcom" },
            { label: "Producer", value: "Yoshihiro Sudo" },
            { label: "Platform", value: "Dreamcast" },
            { label: "Release", value: "November 23, 1998 (JP)" },
            { label: "Genre", value: "Fighting, Tag-Team" },
            { label: "Players", value: "1-4" },
            { label: "Format", value: "GD-ROM" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex justify-between py-3 border-b-2"
              style={{ borderColor: colors.white }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: colors.white,
                  textTransform: "uppercase",
                  fontWeight: 800,
                  letterSpacing: "0.05em"
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: colors.white,
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
            color: colors.white,
            textTransform: "uppercase"
          }}
        >
          Not just a crossover.
          <br />
          <span style={{ color: colors.red }}>A collision.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: "#999",
            maxWidth: "700px",
            margin: "0 auto"
          }}
        >
          Marvel vs. Capcom brought two legendary universes together in explosive, high-speed combat.
          <br /><br />
          <strong style={{ color: colors.white }}>
            On Dreamcast, the clash came home.
          </strong>
        </motion.p>
      </div>
    </section>
  );
}