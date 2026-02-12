import { motion } from "motion/react";
import seganetLogo from "@/assets/6e51564737d5d2dd517998a1a3501c38aa2cc0ae.avif";

export function SegaNetHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Subtle dot grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #093D90 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-[980px] mx-auto px-6 text-center relative z-10">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "17px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--dreamcast-blue)",
            marginBottom: "24px"
          }}
        >
          Online
        </motion.p>

        {/* SegaNet Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12"
        >
          <img
            src={seganetLogo}
            alt="SegaNet"
            className="mx-auto"
            style={{
              maxWidth: "600px",
              width: "100%",
              height: "auto"
            }}
          />
        </motion.div>

        {/* Subheadline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 600,
            letterSpacing: "-0.015em",
            lineHeight: "1.1",
            marginBottom: "24px",
            color: "#1d1d1f"
          }}
        >
          Online gaming, before it was expected.
        </motion.h1>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontSize: "clamp(19px, 2.5vw, 24px)",
            lineHeight: "1.5",
            color: "#6e6e73",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          SegaNet brought competitive online gaming to the Dreamcast—connecting players through dial-up internet for real-time matches, leaderboards, and communication. Years before online play became standard, Dreamcast players were already connected.
        </motion.p>
      </div>
    </section>
  );
}