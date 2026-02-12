import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import frontCover from "@/assets/18e748cf4d8d77e3c7617a3aa2abca52d716df40.avif";
import backCover from "@/assets/760537f94abb643446b6290d2f0352bea116793e.avif";
import disc from "@/assets/2bf481addab3daa447f3ff3938844b49e261d018.avif";
import sonicCharacter from "@/assets/bb53a15ae3c3b835f54b67efb75c66c9dbae0f1a.avif";
import tailsCharacter from "@/assets/28f6e1b603f9ddcee8e233c3e45e9147444e372f.avif";
import knucklesCharacter from "@/assets/4753f231a52c4c0af02024741c02190901d77c74.avif";
import amyCharacter from "@/assets/59e0c64219ef55accfd5dbdf9b9b0cdbc94197c7.avif";
import bigCharacter from "@/assets/75d151bee16800f53431d3b1a957d2f97f400130.avif";
import gammaCharacter from "@/assets/ff8511529bccbd3a9d9ba91f20f0f95b6f4a789e.avif";
import characterMontage from "@/assets/470787c8b5e797ae102d2a13544b35f7985dfc7f.avif";
import gameplayScreenshot from "@/assets/4967581f1a918a324972f996cd4527783e66facd.avif";
import vmuScreenshot from "@/assets/f8cbbb14e4e0c7d4fb428a4859c813e11fc10b03.avif";
import { GlobalHeader } from "../components/GlobalHeader";
import { GameFooter } from "../components/GameFooter";

// Sonic Adventure Color Palette
const colors = {
  white: "#FEFEFE",
  deepBlue: "#0C1E65",
  red: "#E50308",
  lightBlue: "#7FBFFF"
};

export default function SonicAdventure() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: frontCover, alt: "Sonic Adventure Front Cover" },
    { src: backCover, alt: "Sonic Adventure Back Cover" },
    { src: disc, alt: "Sonic Adventure Disc" }
  ];

  const characters = [
    { name: "Sonic", description: "Speed-focused action", image: sonicCharacter },
    { name: "Tails", description: "Flight & exploration", image: tailsCharacter },
    { name: "Knuckles", description: "Treasure hunting", image: knucklesCharacter },
    { name: "Amy", description: "Puzzle-based gameplay", image: amyCharacter },
    { name: "Big", description: "Fishing & exploration", image: bigCharacter },
    { name: "E-102 Gamma", description: "Combat-driven missions", image: gammaCharacter }
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
        activePage="Sonic Adventure"
        contextText="The first fully 3D Sonic experience—ushering in a new era of speed and storytelling."
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Character Montage Section */}
      <CharacterMontageSection />

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

      {/* Gameplay Screenshot Section */}
      <GameplaySection />

      {/* Characters Section */}
      <CharactersSection characters={characters} />

      {/* VMU Integration Section */}
      <VMUSection />

      {/* Gameplay Features */}
      <FeaturesSection />

      {/* Tech & Credits */}
      <TechCreditsSection />

      {/* Closing Section */}
      <ClosingSection />

      {/* Footer */}
      <GameFooter 
        gameName="Sonic Adventure"
        releaseYear="1998"
        copyright="Sonic Adventure © SEGA."
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 w-full h-64 opacity-10"
        style={{
          background: `linear-gradient(180deg, ${colors.lightBlue} 0%, transparent 100%)`
        }}
      />

      <div className="max-w-[980px] mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(48px, 7vw, 96px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: "1",
            marginBottom: "20px",
            background: `linear-gradient(135deg, ${colors.deepBlue} 0%, ${colors.lightBlue} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          Sonic Adventure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            lineHeight: "1.1",
            color: colors.deepBlue,
            marginBottom: "16px"
          }}
        >
          The adventure begins.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            color: "#6e6e73",
            lineHeight: "1.4",
            marginBottom: "32px"
          }}
        >
          The first fully 3D Sonic experience. Six heroes. Six stories. One epic adventure.
        </motion.p>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button
            className="px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: colors.red,
              color: colors.white,
              fontSize: "17px",
              fontWeight: 600
            }}
          >
            <Play className="w-4 h-4" />
            Watch Trailer
          </button>
          <button
            className="px-6 py-3 rounded-full border-2 transition-all duration-200 hover:scale-105"
            style={{
              borderColor: colors.deepBlue,
              color: colors.deepBlue,
              fontSize: "17px",
              fontWeight: 600
            }}
          >
            View Gallery
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}

function CharacterMontageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.deepBlue }}>
      {/* Diagonal accent stripe */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        style={{
          background: `linear-gradient(135deg, ${colors.lightBlue} 0%, transparent 100%)`
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
              textAlign: "center",
              marginBottom: "48px",
              color: colors.white
            }}
          >
            An epic cast of heroes.
          </h2>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={characterMontage}
              alt="Sonic Adventure Character Montage"
              className="w-full h-auto"
              style={{ display: "block" }}
            />
          </div>

          <p
            style={{
              fontSize: "clamp(17px, 2vw, 21px)",
              lineHeight: "1.5",
              color: colors.lightBlue,
              textAlign: "center",
              marginTop: "32px",
              maxWidth: "800px",
              margin: "32px auto 0"
            }}
          >
            "I've got no regrets. Things are already set in motion, and I have to see this through to the end. I choose to go my own way."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MediaGallerySection({ images, currentImage, onNext, onPrev, setCurrentImage }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20" style={{ backgroundColor: colors.white }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Image */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: "#f5f5f7" }}
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
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg"
              style={{ backgroundColor: colors.red }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" style={{ color: colors.white }} />
            </button>

            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg"
              style={{ backgroundColor: colors.red }}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" style={{ color: colors.white }} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            {images.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className="w-3 h-3 rounded-full transition-all border-2"
                style={{
                  backgroundColor: index === currentImage ? colors.deepBlue : "transparent",
                  borderColor: colors.deepBlue
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
            color: colors.deepBlue
          }}
        >
          A revolution in 3D platforming.
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
          Released in 1998 for the Sega Dreamcast, Sonic Adventure marked Sonic's full transition into 3D. 
          Six playable characters, each with unique gameplay styles, converge in an interconnected story 
          centered around the mysterious entity known as Chaos.
          <br /><br />
          The game introduced Adventure Fields—open hub worlds where players could explore, interact with NPCs, 
          and discover secrets between action stages.
        </motion.p>
      </div>
    </section>
  );
}

function GameplaySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.lightBlue }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: `4px solid ${colors.deepBlue}` }}
            >
              <img
                src={gameplayScreenshot}
                alt="Sonic Adventure Gameplay"
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
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                marginBottom: "24px",
                color: colors.deepBlue
              }}
            >
              Speed redefined.
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: "1.5",
                color: colors.deepBlue,
                marginBottom: "24px"
              }}
            >
              Race through loop-de-loops, grind on rails, and dash across expansive 3D environments at breakneck speeds.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.5",
                color: "#1d1d1f"
              }}
            >
              Each stage was designed to showcase the Dreamcast's capabilities—featuring dynamic camera angles, 
              scripted set pieces, and fluid transitions between gameplay styles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CharactersSection({ characters }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            color: colors.deepBlue
          }}
        >
          Six heroes. Six stories.
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {characters.map((character: any, index: number) => (
            <motion.div
              key={character.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group cursor-pointer"
            >
              <div
                className="relative rounded-3xl overflow-hidden mb-4 transition-all duration-300 group-hover:scale-105 flex items-center justify-center"
                style={{
                  backgroundColor: "#f5f5f7",
                  border: `3px solid ${colors.lightBlue}`,
                  aspectRatio: "1/1",
                  padding: "16px"
                }}
              >
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3
                style={{
                  fontSize: "21px",
                  fontWeight: 700,
                  marginBottom: "4px",
                  color: colors.deepBlue
                }}
              >
                {character.name}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "#6e6e73"
                }}
              >
                {character.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VMUSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.red }}>
      {/* Decorative circles */}
      <div
        className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-20"
        style={{ backgroundColor: colors.white }}
      />
      <div
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full opacity-20"
        style={{ backgroundColor: colors.lightBlue }}
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                marginBottom: "24px",
                color: colors.white
              }}
            >
              Raise your Chao.
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: "1.5",
                color: colors.white,
                marginBottom: "24px"
              }}
            >
              The Chao Garden introduced a virtual pet system where players could raise, breed, and train adorable creatures called Chao.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.5",
                color: "rgba(255, 255, 255, 0.9)"
              }}
            >
              Using the VMU (Visual Memory Unit), you could take your Chao with you on the go—feeding them, 
              playing mini-games, and watching them grow even when away from the console.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: `4px solid ${colors.white}` }}
            >
              <img
                src={vmuScreenshot}
                alt="Sonic Adventure VMU Chao"
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

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "3D Platforming",
      description: "High-speed action stages with multiple paths and hidden secrets"
    },
    {
      title: "Adventure Fields",
      description: "Explore open hub worlds connecting all stages and stories"
    },
    {
      title: "Character Variety",
      description: "Six unique gameplay styles from speed to combat to fishing"
    },
    {
      title: "Chao Garden",
      description: "Raise virtual pets with unique genetics and abilities"
    },
    {
      title: "Mini-Games",
      description: "Compete in kart races, sky chases, and more"
    },
    {
      title: "Ring System",
      description: "Classic ring-based health with new 3D collection mechanics"
    }
  ];

  return (
    <section ref={ref} className="py-32" style={{ backgroundColor: colors.white }}>
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
            color: colors.deepBlue
          }}
        >
          Gameplay that defines a generation.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: index % 3 === 0 ? colors.lightBlue : index % 3 === 1 ? "#f5f5f7" : colors.deepBlue,
                border: `3px solid ${index % 3 === 2 ? colors.lightBlue : "transparent"}`
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  marginBottom: "12px",
                  color: index % 3 === 2 ? colors.white : colors.deepBlue
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.5",
                  color: index % 3 === 2 ? "rgba(255, 255, 255, 0.9)" : "#6e6e73"
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

function TechCreditsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32" style={{ backgroundColor: colors.deepBlue }}>
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
            color: colors.white
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
            { label: "Developer", value: "Sonic Team" },
            { label: "Publisher", value: "Sega" },
            { label: "Director", value: "Takashi Iizuka" },
            { label: "Producer", value: "Yuji Naka" },
            { label: "Designer", value: "Hirokazu Yasuhara" },
            { label: "Composer", value: "Jun Senoue" },
            { label: "Platform", value: "Dreamcast" },
            { label: "Release", value: "December 23, 1998" },
            { label: "Genre", value: "3D Platformer, Action-Adventure" },
            { label: "Mode", value: "Single-player" },
            { label: "Voice Cast", value: "Ryan Drummond, Corey Bringas, Michael McGaharn" },
            { label: "Theme Song", value: "Open Your Heart by Crush 40" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex justify-between py-3 border-b"
              style={{ borderColor: colors.lightBlue }}
            >
              <p style={{ fontSize: "15px", color: colors.lightBlue }}>{item.label}</p>
              <p style={{ fontSize: "15px", fontWeight: 600, color: colors.white, textAlign: "right" }}>{item.value}</p>
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
            color: colors.deepBlue
          }}
        >
          The adventure that started it all.
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
          Sonic Adventure wasn't just a technical achievement—it redefined what Sonic could be. 
          With its cinematic presentation, memorable soundtrack, and diverse gameplay, 
          it proved that the blue blur belonged in the third dimension.
          <br /><br />
          <strong style={{ color: colors.deepBlue }}>This is where legends are made.</strong>
        </motion.p>
      </div>
    </section>
  );
}