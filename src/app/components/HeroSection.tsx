import { motion } from "motion/react";

interface HeroSectionProps {
  consoleLogo: string;
  consoleImage: string;
}

export function HeroSection({ consoleLogo, consoleImage }: HeroSectionProps) {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <img src={consoleLogo} alt="Dreamcast" className="h-16 mx-auto" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
          style={{ 
            fontSize: "clamp(48px, 7vw, 96px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: "1.05"
          }}
        >
          Sega Dreamcast.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: "1.1",
            color: "var(--dreamcast-blue)"
          }}
          className="mb-2"
        >
          Ahead of its time.
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            color: "#6e6e73",
            lineHeight: "1.4"
          }}
          className="mb-8"
        >
          The console that redefined what gaming could be.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex gap-4 justify-center mb-16"
        >
          <a
            href="#sonic-adventure"
            className="px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
            style={{ 
              backgroundColor: "var(--dreamcast-orange)",
              color: "white",
              fontSize: "17px"
            }}
          >
            Explore Games
          </a>
          <a
            href="#specs"
            className="px-6 py-3 rounded-full border-2 transition-all duration-200 hover:scale-105"
            style={{ 
              borderColor: "var(--dreamcast-blue)",
              color: "var(--dreamcast-blue)",
              fontSize: "17px"
            }}
          >
            View Tech Specs
          </a>
        </motion.div>

        {/* Console Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative"
        >
          <img 
            src={consoleImage} 
            alt="Dreamcast Console and Controller" 
            className="w-full max-w-4xl mx-auto"
            style={{
              filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.15))"
            }}
          />
        </motion.div>
      </div>

      {/* Gradient Background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, rgba(0,119,200,0.03) 0%, rgba(255,255,255,0) 60%)"
        }}
      />
    </section>
  );
}
