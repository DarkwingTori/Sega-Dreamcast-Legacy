import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface PackagingSectionProps {
  boxImage: string;
}

export function PackagingSection({ boxImage }: PackagingSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  console.log("PackagingSection rendering with boxImage:", boxImage);

  return (
    <section ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Box Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {boxImage && (
                <img 
                  src={boxImage} 
                  alt="Dreamcast Sealed Box" 
                  className="w-full h-auto"
                  style={{
                    filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.15))"
                  }}
                  onError={(e) => console.error("Image failed to load:", boxImage)}
                  onLoad={() => console.log("Image loaded successfully:", boxImage)}
                />
              )}
              {!boxImage && <p>No image provided</p>}
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
                fontSize: "clamp(40px, 5vw, 64px)",
                fontWeight: 600,
                letterSpacing: "-0.015em",
                lineHeight: "1.1",
                marginBottom: "24px"
              }}
            >
              The ultimate gaming system.
            </h2>
            
            <p 
              style={{
                fontSize: "clamp(19px, 2.5vw, 24px)",
                lineHeight: "1.5",
                color: "#1d1d1f",
                marginBottom: "16px"
              }}
            >
              From the moment you opened the box.
            </p>
            
            <p 
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: "1.5",
                color: "#6e6e73",
                marginBottom: "24px"
              }}
            >
              The Dreamcast packaging embodied Sega's vision—bold, confident, and forward-thinking. Every element, from the iconic swirl logo to the striking blue console imagery, signaled that this wasn't just another game system.
            </p>

            <p 
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: "1.5",
                color: "#6e6e73"
              }}
            >
              It was a promise of what gaming could become: connected, innovative, and unforgettable.
            </p>

            {/* What's in the Box */}
            <div className="mt-10 space-y-3">
              <p 
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#6e6e73",
                  marginBottom: "12px"
                }}
              >
                In the Box
              </p>
              <PackageItem text="Dreamcast console" />
              <PackageItem text="Controller with VMU" />
              <PackageItem text="AV cable and power adapter" />
              <PackageItem text="Phone line adapter (select regions)" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PackageItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div 
        className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5"
        style={{ backgroundColor: "var(--dreamcast-orange)" }}
      />
      <p 
        style={{
          fontSize: "17px",
          lineHeight: "1.5",
          color: "#1d1d1f"
        }}
      >
        {text}
      </p>
    </div>
  );
}