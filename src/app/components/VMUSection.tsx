import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Gamepad2, Save, Smartphone } from "lucide-react";

export function VMUSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
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
              A second screen.
              <br />
              <span style={{ color: "var(--dreamcast-orange)" }}>In your hand.</span>
            </h2>
            
            <p 
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: "1.5",
                color: "#6e6e73",
                marginBottom: "24px"
              }}
            >
              The Visual Memory Unit wasn't just storage.
              <br />
              It was interaction—bringing gameplay beyond the screen with real-time data, mini-games, and player personalization.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(240,90,40,0.1)" }}
                >
                  <Save 
                    className="w-5 h-5"
                    style={{ color: "var(--dreamcast-orange)" }}
                  />
                </div>
                <div>
                  <p style={{ fontSize: "17px", fontWeight: 600, marginBottom: "4px" }}>
                    128KB Storage
                  </p>
                  <p style={{ fontSize: "15px", color: "#6e6e73" }}>
                    Save game data directly to the unit
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(240,90,40,0.1)" }}
                >
                  <Smartphone 
                    className="w-5 h-5"
                    style={{ color: "var(--dreamcast-orange)" }}
                  />
                </div>
                <div>
                  <p style={{ fontSize: "17px", fontWeight: 600, marginBottom: "4px" }}>
                    LCD Display
                  </p>
                  <p style={{ fontSize: "15px", color: "#6e6e73" }}>
                    48×32 pixel monochrome screen
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(240,90,40,0.1)" }}
                >
                  <Gamepad2 
                    className="w-5 h-5"
                    style={{ color: "var(--dreamcast-orange)" }}
                  />
                </div>
                <div>
                  <p style={{ fontSize: "17px", fontWeight: 600, marginBottom: "4px" }}>
                    Standalone Gaming
                  </p>
                  <p style={{ fontSize: "15px", color: "#6e6e73" }}>
                    Play mini-games anywhere
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* VMU Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* VMU Cards */}
              <div className="space-y-4">
                {[
                  { title: "Game Data", icon: "💾" },
                  { title: "Mini Games", icon: "🎮" },
                  { title: "Player Stats", icon: "📊" }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="p-6 rounded-2xl"
                    style={{
                      background: "white",
                      border: "1px solid rgba(0,0,0,0.1)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                        style={{ 
                          background: "linear-gradient(135deg, var(--dreamcast-blue) 0%, var(--dreamcast-orange) 100%)"
                        }}
                      >
                        {item.icon}
                      </div>
                      <p style={{ fontSize: "19px", fontWeight: 600 }}>
                        {item.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Glow Effect */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-3xl opacity-20 -z-10"
                style={{
                  background: "radial-gradient(circle, var(--dreamcast-orange) 0%, transparent 70%)"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
