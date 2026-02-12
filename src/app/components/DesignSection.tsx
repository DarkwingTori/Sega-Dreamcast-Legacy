import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface DesignSectionProps {
  consoleImage: string;
}

export function DesignSection({ consoleImage }: DesignSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="design" ref={ref} className="py-32">
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
              Designed to stand apart.
            </h2>
            <p 
              style={{
                fontSize: "clamp(19px, 2.5vw, 24px)",
                lineHeight: "1.5",
                color: "#1d1d1f",
                marginBottom: "16px"
              }}
            >
              Compact. Purposeful. Instantly recognizable.
            </p>
            <p 
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: "1.5",
                color: "#6e6e73"
              }}
            >
              The Sega Dreamcast delivered a clean, modern design that broke away from bulky consoles of its era—setting a new standard for form and function in home gaming.
            </p>

            {/* Specs Callout */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p 
                  style={{
                    fontSize: "14px",
                    color: "#6e6e73",
                    marginBottom: "4px"
                  }}
                >
                  Dimensions
                </p>
                <p 
                  style={{
                    fontSize: "17px",
                    fontWeight: 600
                  }}
                >
                  195.8 × 190 × 75.5 mm
                </p>
              </div>
              <div>
                <p 
                  style={{
                    fontSize: "14px",
                    color: "#6e6e73",
                    marginBottom: "4px"
                  }}
                >
                  Weight
                </p>
                <p 
                  style={{
                    fontSize: "17px",
                    fontWeight: 600
                  }}
                >
                  1.5 kg
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={consoleImage} 
              alt="Dreamcast Design" 
              className="w-full"
              style={{
                filter: "drop-shadow(0 10px 40px rgba(0,0,0,0.1))"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
