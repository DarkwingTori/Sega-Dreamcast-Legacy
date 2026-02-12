import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Monitor, Volume2 } from "lucide-react";

export function GraphicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
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
            Graphics that felt alive.
          </h2>
          <p 
            style={{
              fontSize: "clamp(17px, 2vw, 21px)",
              lineHeight: "1.5",
              color: "#6e6e73",
              maxWidth: "700px",
              margin: "0 auto"
            }}
          >
            With PowerVR2 graphics and Yamaha AICA audio, Dreamcast games weren't just played—they were experienced.
            <br />
            Sharper visuals. Richer sound. Deeper immersion.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Graphics Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-10 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(0,119,200,0.05) 0%, rgba(0,119,200,0.1) 100%)",
              border: "1px solid rgba(0,119,200,0.1)"
            }}
          >
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
              style={{ backgroundColor: "var(--dreamcast-blue)" }}
            >
              <Monitor className="w-8 h-8 text-white" />
            </div>
            
            <h3 
              style={{
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 600,
                marginBottom: "12px",
                color: "var(--dreamcast-blue)"
              }}
            >
              PowerVR2 Graphics
            </h3>
            
            <p 
              style={{
                fontSize: "17px",
                lineHeight: "1.5",
                color: "#6e6e73",
                marginBottom: "16px"
              }}
            >
              NEC PowerVR2 @ 100 MHz delivering stunning visuals and smooth frame rates that defined a generation of gaming.
            </p>
            
            <div className="space-y-2">
              <p style={{ fontSize: "14px", color: "#86868b" }}>8 MB VRAM</p>
              <p style={{ fontSize: "14px", color: "#86868b" }}>Tile-based rendering</p>
              <p style={{ fontSize: "14px", color: "#86868b" }}>Hardware anti-aliasing</p>
            </div>
          </motion.div>

          {/* Audio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-10 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(240,90,40,0.05) 0%, rgba(240,90,40,0.1) 100%)",
              border: "1px solid rgba(240,90,40,0.1)"
            }}
          >
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
              style={{ backgroundColor: "var(--dreamcast-orange)" }}
            >
              <Volume2 className="w-8 h-8 text-white" />
            </div>
            
            <h3 
              style={{
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 600,
                marginBottom: "12px",
                color: "var(--dreamcast-orange)"
              }}
            >
              64-channel Audio
            </h3>
            
            <p 
              style={{
                fontSize: "17px",
                lineHeight: "1.5",
                color: "#6e6e73",
                marginBottom: "16px"
              }}
            >
              Yamaha AICA sound processor with 2 MB audio RAM creating rich, immersive soundscapes that brought games to life.
            </p>
            
            <div className="space-y-2">
              <p style={{ fontSize: "14px", color: "#86868b" }}>2 MB Audio RAM</p>
              <p style={{ fontSize: "14px", color: "#86868b" }}>Hardware mixing</p>
              <p style={{ fontSize: "14px", color: "#86868b" }}>3D positional audio</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
