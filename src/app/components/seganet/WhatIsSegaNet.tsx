import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Wifi, Globe, Users } from "lucide-react";

export function WhatIsSegaNet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left: Copy */}
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
              Designed to connect players everywhere.
            </h2>

            <p
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: "1.5",
                color: "#1d1d1f",
                marginBottom: "20px"
              }}
            >
              Launched on September 7, 2000, SegaNet was Sega's dedicated online gaming service for the Dreamcast in the United States. Built for dial-up connectivity, SegaNet allowed players to compete online, browse the web, send messages, and access game-specific online features—all from the console.
            </p>

            <p
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: "1.5",
                color: "#6e6e73"
              }}
            >
              With a monthly subscription of $21.95, SegaNet bundled internet access, online gaming infrastructure, and Dreamcast-specific services into a single platform.
            </p>
          </motion.div>

          {/* Right: Icon Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <FeatureCard
              icon={<Wifi size={32} />}
              title="Real-Time Multiplayer"
              description="Compete with players across the country in live matches and tournaments."
            />
            <FeatureCard
              icon={<Globe size={32} />}
              title="Full Internet Access"
              description="Browse the web, check email, and download game updates—all from your Dreamcast."
            />
            <FeatureCard
              icon={<Users size={32} />}
              title="Community Features"
              description="Leaderboards, messaging, and player profiles kept you connected between matches."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div
        className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
        style={{
          backgroundColor: "rgba(9, 61, 144, 0.08)",
          color: "var(--dreamcast-blue)"
        }}
      >
        {icon}
      </div>
      <div>
        <h3
          style={{
            fontSize: "21px",
            fontWeight: 600,
            marginBottom: "6px",
            color: "#1d1d1f"
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.5",
            color: "#6e6e73"
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
