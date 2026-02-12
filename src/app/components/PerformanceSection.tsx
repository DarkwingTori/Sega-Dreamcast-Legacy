import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Cpu } from "lucide-react";

export function PerformanceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="performance" ref={ref} className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 600,
            letterSpacing: "-0.015em",
            lineHeight: "1.1",
            marginBottom: "24px"
          }}
        >
          Power that pushed boundaries.
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
            margin: "0 auto 64px"
          }}
        >
          Powered by a 200 MHz Hitachi SH-4 processor, Dreamcast delivered arcade-quality performance at home—years before competitors caught up.
        </motion.p>

        {/* Performance Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative py-20 px-8 rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0,119,200,0.08) 0%, rgba(240,90,40,0.08) 100%)"
          }}
        >
          <div className="relative z-10">
            <div 
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
              style={{ backgroundColor: "var(--dreamcast-blue)" }}
            >
              <Cpu className="w-10 h-10 text-white" />
            </div>
            
            <p 
              style={{
                fontSize: "clamp(56px, 8vw, 96px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: "1",
                background: "linear-gradient(135deg, var(--dreamcast-blue) 0%, var(--dreamcast-orange) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "8px"
              }}
            >
              200 MHz
            </p>
            
            <p 
              style={{
                fontSize: "clamp(19px, 2.5vw, 24px)",
                fontWeight: 600,
                color: "#1d1d1f"
              }}
            >
              Hitachi SH-4 CPU
            </p>
            
            <p 
              style={{
                fontSize: "17px",
                color: "#6e6e73",
                marginTop: "8px"
              }}
            >
              Built for speed.
            </p>
          </div>

          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, var(--dreamcast-blue) 1px, transparent 0)",
              backgroundSize: "40px 40px"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
