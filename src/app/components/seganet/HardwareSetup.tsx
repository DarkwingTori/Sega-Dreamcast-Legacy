import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import webBrowser from "@/assets/8399f815caa0b9228012a26cb556b4992ab74a8d.avif";

export function HardwareSetup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hardwareItems = [
    "Built-in 56k modem (regional variants)",
    "Dreamcast Keyboard (included free with some subscriptions)",
    "Controller-based navigation",
    "VMU integration for game data and messaging"
  ];

  return (
    <section ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src={webBrowser}
              alt="Dreamcast Web Browser"
              className="w-full h-auto rounded-2xl"
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
              }}
            />
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
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
              Everything you needed to get online.
            </h2>

            <p
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: "1.5",
                color: "#1d1d1f",
                marginBottom: "32px"
              }}
            >
              To access SegaNet, players used the Dreamcast's built-in modem, along with optional accessories designed for online interaction.
            </p>

            {/* Hardware List */}
            <div className="space-y-4 mb-8">
              {hardwareItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5"
                    style={{ backgroundColor: "var(--dreamcast-blue)" }}
                  />
                  <p
                    style={{
                      fontSize: "17px",
                      lineHeight: "1.5",
                      color: "#1d1d1f"
                    }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Callout Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-white rounded-2xl p-6 border-l-4"
              style={{
                borderLeftColor: "var(--dreamcast-orange)"
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.5",
                  color: "#6e6e73"
                }}
              >
                <strong style={{ color: "#1d1d1f" }}>Early promotion:</strong> SegaNet offered a free Dreamcast and keyboard with a two-year subscription—making online gaming more accessible than ever.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}