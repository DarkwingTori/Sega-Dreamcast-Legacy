import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import frontCover from "@/assets/a493bf9d19ae8c7c77614835e181e7d480a68315.avif";
import backCover from "@/assets/df391ed92eb0cfced1f512444ac3c78cd8be19fc.avif";
import disc from "@/assets/80fa0ac9ea04639ad371bed8ac58f44a589d93cb.avif";
import characterAction from "@/assets/997db96ec1d3210f2dfb328a3bfca7f58dc850b3.avif";
import characterLineup from "@/assets/c3c056682be0d2c544d2a46f57b482e81d3e82f3.avif";
import characterGroup from "@/assets/56b07f3017f5165ac51c0c50f7f6c37eb5d8ea16.avif";
import { GlobalHeader } from "../components/GlobalHeader";
import { GameFooter } from "../components/GameFooter";

// Jet Set Radio Color Palette
const colors = {
  purple: "#583EAD",
  yellow: "#EEEE00",
  limeGreen: "#8DBB2E",
  orange: "#EDB916"
};

export default function JetSetRadio() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: frontCover, alt: "Jet Set Radio Front Cover" },
    { src: backCover, alt: "Jet Set Radio Back Cover" },
    { src: disc, alt: "Jet Set Radio Disc" }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <GlobalHeader
        activePage="Jet Set Radio"
        contextText="A cel-shaded revolution driven by music, motion, and rebellion."
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Character Showcase - Action */}
      <CharacterActionSection />

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

      {/* Art Direction */}
      <ArtDirectionSection />

      {/* Character Lineup */}
      <CharacterLineupSection />

      {/* Movement & Gameplay */}
      <MovementSection />

      {/* Level Structure */}
      <LevelStructureSection />

      {/* Character Group */}
      <CharacterGroupSection />

      {/* Graffiti System */}
      <GraffitiSection />

      {/* Soundtrack */}
      <SoundtrackSection />

      {/* Culture & Influence */}
      <CultureSection />

      {/* Tech & Credits */}
      <TechCreditsSection />

      {/* Closing Section */}
      <ClosingSection />

      {/* Footer */}
      <GameFooter
        gameName="Jet Set Radio"
        releaseYear="2000"
        copyright="Jet Set Radio © Sega."
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="pt-20 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-20 overflow-hidden relative">
      {/* Background diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-5"
        style={{
          background: `repeating-linear-gradient(45deg, ${colors.yellow}, ${colors.yellow} 10px, transparent 10px, transparent 20px)`
        }}
      />

      <div className="max-w-[980px] mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(32px, 10vw, 96px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: "1",
            marginBottom: "20px",
            textTransform: "uppercase",
            background: `linear-gradient(135deg, ${colors.yellow} 0%, ${colors.limeGreen} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            transform: "skewY(-1deg)"
          }}
        >
          Jet Set Radio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(24px, 5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            lineHeight: "1.1",
            color: "#000",
            marginBottom: "16px"
          }}
        >
          Express yourself.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "clamp(15px, 2.5vw, 21px)",
            color: "#6e6e73",
            lineHeight: "1.4",
            marginBottom: "32px",
            fontStyle: "italic"
          }}
        >
          Graffiti. Motion. Music. Tokyo in motion.
        </motion.p>
      </div>
    </section>
  );
}

function CharacterActionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 md:py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: colors.purple }}>
      {/* Decorative elements */}
      <div
        className="hidden md:block absolute top-10 left-10 w-32 h-32 rounded-full opacity-20"
        style={{ backgroundColor: colors.yellow }}
      />
      <div
        className="hidden md:block absolute bottom-10 right-10 w-40 h-40 rounded-full opacity-20"
        style={{ backgroundColor: colors.limeGreen }}
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              style={{
                fontSize: "clamp(28px, 6vw, 64px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                marginBottom: "24px",
                color: colors.yellow,
                transform: "skewY(-1deg)"
              }}
            >
              Claim your territory.
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 2.5vw, 21px)",
                lineHeight: "1.5",
                color: "white",
                marginBottom: "24px"
              }}
            >
              Armed with spray cans and style, you'll skate through the streets of Tokyo-to, tagging territory and outrunning the authorities.
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.5",
                color: "rgba(255, 255, 255, 0.8)"
              }}
            >
              Every graffiti tag is a statement. Every trick is an act of rebellion. Every moment is a battle for creative freedom.
            </p>
          </motion.div>

          {/* Character Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative rounded-2xl md:rounded-3xl overflow-hidden"
              style={{
                transform: window.innerWidth >= 768 ? "rotate(2deg)" : "rotate(0deg)",
                border: `${window.innerWidth >= 768 ? '6px' : '3px'} solid ${colors.yellow}`,
                backgroundColor: "#fff"
              }}
            >
              <img
                src={characterAction}
                alt="Jet Set Radio Character in Action"
                className="w-full h-auto"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MediaGallerySection({ images, currentImage, onNext, onPrev, setCurrentImage }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ backgroundColor: "#000" }}>
      {/* Diagonal stripes background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `repeating-linear-gradient(-45deg, ${colors.yellow}, ${colors.yellow} 40px, transparent 40px, transparent 80px)`
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Image with slight tilt */}
          <div
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl"
            style={{ transform: "rotate(-1deg)" }}
          >
            <div className="relative" style={{ minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="w-full h-auto"
                style={{ maxHeight: "600px", objectFit: "contain" }}
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all"
              style={{ backgroundColor: colors.yellow, border: "3px solid #000" }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" style={{ color: "#000" }} />
            </button>

            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all"
              style={{ backgroundColor: colors.yellow, border: "3px solid #000" }}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" style={{ color: "#000" }} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {images.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className="w-3 h-3 rounded-full transition-all border-2"
                style={{
                  backgroundColor: index === currentImage ? colors.yellow : "transparent",
                  borderColor: colors.yellow
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
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Diagonal accent block */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5"
        style={{
          backgroundColor: colors.limeGreen,
          transform: "rotate(45deg)"
        }}
      />

      <div className="max-w-[980px] mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            marginBottom: "24px",
            transform: "skewY(-1deg)"
          }}
        >
          Tokyo is your canvas.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: "#6e6e73",
            maxWidth: "700px",
            margin: "0 auto"
          }}
        >
          Released in 2000 for the Sega Dreamcast, Jet Set Radio put players on inline skates and dropped them into a stylized vision of Tokyo—where graffiti is expression, movement is freedom, and authority is something to outrun.
          <br /><br />
          You play as a member of the GG's, a youth gang claiming the city through art, style, and sound.
        </motion.p>
      </div>
    </section>
  );
}

function ArtDirectionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const influences = [
    "Late-90s Japanese pop culture",
    "Hip-hop and graffiti movements",
    "Shibuya and Shinjuku street fashion",
    "Artists like Eric Haze, who designed the game's iconic logo"
  ];

  return (
    <section ref={ref} className="py-32 relative" style={{ backgroundColor: colors.yellow }}>
      <div className="max-w-[980px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            textAlign: "center",
            marginBottom: "32px",
            transform: "skewY(-1deg)"
          }}
        >
          A style no one had seen before.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            textAlign: "center",
            marginBottom: "48px",
            fontWeight: 600
          }}
        >
          Jet Set Radio was the first video game to use cel-shaded graphics, a deliberate response to the industry's obsession with realism and fantasy.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "19px",
            fontWeight: 700,
            marginBottom: "24px",
            textAlign: "center"
          }}
        >
          Inspired by:
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {influences.map((influence, index) => (
            <motion.div
              key={influence}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-2xl border-4 border-black bg-white"
              style={{ transform: index % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: colors.purple }}
                />
                <p style={{ fontSize: "17px", fontWeight: 700 }}>
                  {influence}
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
            textAlign: "center",
            fontWeight: 700
          }}
        >
          The result was a visual identity that felt alive—and completely original.
        </motion.p>
      </div>
    </section>
  );
}

function CharacterLineupSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            textAlign: "center",
            marginBottom: "48px",
            color: colors.purple,
            transform: "skewY(-1deg)"
          }}
        >
          Meet the GG's.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              border: `6px solid ${colors.orange}`,
              transform: "rotate(-1deg)",
              backgroundColor: "#fff"
            }}
          >
            <img
              src={characterLineup}
              alt="Jet Set Radio Character Lineup"
              className="w-full h-auto"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: "#6e6e73",
            textAlign: "center",
            marginTop: "32px",
            maxWidth: "800px",
            margin: "32px auto 0"
          }}
        >
          Each character brings their own style, attitude, and story to the streets. Choose your favorite and make the city yours.
        </motion.p>
      </div>
    </section>
  );
}

function MovementSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mechanics = [
    "Skate freely through open urban spaces",
    "Perform tricks to gain speed and reach hidden areas",
    "Spray graffiti under time pressure",
    "Evade increasingly aggressive authorities"
  ];

  return (
    <section ref={ref} className="py-32" style={{ backgroundColor: colors.limeGreen }}>
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            marginBottom: "24px",
            color: "#000",
            transform: "skewY(-1deg)"
          }}
        >
          Motion is everything.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: "#000",
            marginBottom: "48px",
            fontWeight: 600
          }}
        >
          Players traverse the city on inline skates, chaining movement, tricks, and graffiti into a seamless flow.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "19px",
            fontWeight: 700,
            marginBottom: "24px"
          }}
        >
          Core mechanics:
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {mechanics.map((mechanic, index) => (
            <motion.div
              key={mechanic}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-2xl bg-white border-4 hover:scale-105 transition-all"
              style={{ borderColor: colors.purple }}
            >
              <p style={{ fontSize: "17px", fontWeight: 600 }}>
                {mechanic}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: "#000",
            fontWeight: 700
          }}
        >
          The more territory you claim, the harder the city pushes back.
        </motion.p>
      </div>
    </section>
  );
}

function LevelStructureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const levels = [
    {
      title: "Street Levels",
      description: "Tag all graffiti points before time runs out—or chase rival gang members in boss-style encounters."
    },
    {
      title: "Rival Showdowns",
      description: "Unlock new characters by matching rival techniques or out-racing them through the city."
    },
    {
      title: "Trial Levels",
      description: "Test skill and style through Jet Graffiti, Jet Tech, and Jet Crash. Each mode emphasizes speed, precision, and creativity."
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            textAlign: "center",
            marginBottom: "64px",
            color: colors.purple,
            transform: "skewY(-1deg)"
          }}
        >
          Three ways to play.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((level, index) => (
            <motion.div
              key={level.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl border-4 hover:scale-105 transition-all duration-300"
              style={{
                backgroundColor: "#fff",
                borderColor: index === 0 ? colors.yellow : index === 1 ? colors.orange : colors.limeGreen,
                transform: `rotate(${index === 1 ? 0 : index === 0 ? -1 : 1}deg)`
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  marginBottom: "12px",
                  color: "#000"
                }}
              >
                {level.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "#6e6e73",
                  lineHeight: "1.5"
                }}
              >
                {level.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CharacterGroupSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden" style={{ backgroundColor: colors.orange }}>
      {/* Decorative circles */}
      <div
        className="absolute top-20 right-20 w-40 h-40 rounded-full opacity-20"
        style={{ backgroundColor: colors.purple }}
      />
      <div
        className="absolute bottom-20 left-20 w-32 h-32 rounded-full opacity-20"
        style={{ backgroundColor: colors.limeGreen }}
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            textAlign: "center",
            marginBottom: "48px",
            color: "#000",
            transform: "skewY(-1deg)"
          }}
        >
          Your crew. Your rules.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl bg-white"
            style={{
              border: `6px solid ${colors.purple}`,
              transform: "rotate(1deg)",
              backgroundColor: "#fff"
            }}
          >
            <img
              src={characterGroup}
              alt="Jet Set Radio Character Group"
              className="w-full h-auto"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: "#000",
            textAlign: "center",
            marginTop: "32px",
            maxWidth: "800px",
            margin: "32px auto 0",
            fontWeight: 600
          }}
        >
          Build your crew by recruiting rival gang members. Each character you unlock brings new abilities and opens new paths through the city.
        </motion.p>
      </div>
    </section>
  );
}

function GraffitiSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Use preset graffiti designs",
    "Create custom graffiti with the editor",
    "Unlock new designs by collecting Graffiti Souls"
  ];

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            marginBottom: "48px",
            transform: "skewY(-1deg)"
          }}
        >
          Make it yours.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "19px",
            fontWeight: 700,
            marginBottom: "24px"
          }}
        >
          Players can:
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="p-8 rounded-3xl border-4"
              style={{
                borderColor: index === 0 ? colors.purple : index === 1 ? colors.yellow : colors.limeGreen,
                backgroundColor: "white"
              }}
            >
              <p style={{ fontSize: "17px", fontWeight: 700 }}>
                {feature}
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
            color: "#6e6e73",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          Using the VMU, graffiti could be uploaded, shared, and downloaded—turning player art into a shared community experience.
        </motion.p>
      </div>
    </section>
  );
}

function SoundtrackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const genres = ["Hip hop", "Funk", "Electronic", "Acid jazz", "Rock", "Trip hop", "J-pop"];
  const composers = ["Hideki Naganuma", "Richard Jacques", "Tomonori Sawada (as Toronto)"];

  return (
    <section ref={ref} className="py-32 relative overflow-hidden" style={{ backgroundColor: colors.purple }}>
      <div className="max-w-[980px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            textAlign: "center",
            marginBottom: "24px",
            color: colors.yellow,
            transform: "skewY(-1deg)"
          }}
        >
          The city has a beat.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            textAlign: "center",
            marginBottom: "48px",
            fontWeight: 700,
            color: "white"
          }}
        >
          Music isn't background—it's identity.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "19px",
            fontWeight: 700,
            marginBottom: "16px",
            textAlign: "center",
            color: colors.yellow
          }}
        >
          The Jet Set Radio soundtrack blends:
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {genres.map((genre, index) => (
            <motion.span
              key={genre}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="px-6 py-3 rounded-full border-3 bg-white"
              style={{
                fontSize: "15px",
                fontWeight: 700,
                border: `3px solid ${colors.yellow}`
              }}
            >
              {genre}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontSize: "19px",
            fontWeight: 700,
            marginBottom: "16px",
            textAlign: "center",
            color: colors.yellow
          }}
        >
          Featured composers:
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {composers.map((composer, index) => (
            <motion.div
              key={composer}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="px-8 py-4 rounded-2xl border-4 bg-white"
              style={{ borderColor: colors.orange }}
            >
              <p style={{ fontSize: "17px", fontWeight: 700 }}>
                {composer}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            textAlign: "center",
            fontWeight: 600,
            color: "white"
          }}
        >
          The main theme, "Let Mom Sleep," set the tone for a soundtrack that was energetic, rebellious, and unmistakably global.
        </motion.p>
      </div>
    </section>
  );
}

function CultureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            marginBottom: "24px",
            color: colors.purple,
            transform: "skewY(-1deg)"
          }}
        >
          More than a game.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: "#6e6e73",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          Jet Set Radio captured a moment in youth culture—where style, music, and self-expression mattered as much as mechanics.
          <br /><br />
          Its influence extended far beyond gaming, shaping art direction, music production, and the visual language of an entire generation.
        </motion.p>
      </div>
    </section>
  );
}

function TechCreditsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32" style={{ backgroundColor: "#000" }}>
      <div className="max-w-[980px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-0.015em",
            textAlign: "center",
            marginBottom: "64px",
            color: colors.yellow,
            transform: "skewY(-1deg)"
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
            { label: "Developer", value: "Smilebit" },
            { label: "Publisher", value: "Sega" },
            { label: "Director", value: "Masayoshi Kikuchi" },
            { label: "Producers", value: "Takayuki Kawagoe, Osamu Sato" },
            { label: "Designer", value: "Masayoshi Yokoyama" },
            { label: "Programmer", value: "Kazuhisa Hasuoka" },
            { label: "Artists", value: "Ryuta Ueda, Kazuki Hosokawa" },
            { label: "Composers", value: "Hideki Naganuma, Richard Jacques, Tomonori Sawada" },
            { label: "Platform", value: "Dreamcast" },
            { label: "Release", value: "June 29, 2000" },
            { label: "Genres", value: "Platformer, Action, Sports" },
            { label: "Mode", value: "Single-player" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex justify-between py-3 border-b"
              style={{ borderColor: colors.limeGreen }}
            >
              <p style={{ fontSize: "15px", color: colors.yellow }}>{item.label}</p>
              <p style={{ fontSize: "15px", fontWeight: 700, color: "#fff", textAlign: "right" }}>{item.value}</p>
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
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            marginBottom: "24px",
            transform: "skewY(-1deg)"
          }}
        >
          This wasn't realism.
          <br />
          <span style={{ color: colors.purple }}>It was identity.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.5",
            color: "#6e6e73",
            maxWidth: "700px",
            margin: "0 auto"
          }}
        >
          Jet Set Radio didn't try to look real.
          <br />
          It tried to feel real—to a generation defined by music, movement, and expression.
          <br /><br />
          <strong>And it succeeded.</strong>
        </motion.p>
      </div>
    </section>
  );
}