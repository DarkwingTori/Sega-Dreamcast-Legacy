import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Globe, Wifi } from "lucide-react";

export function OnlineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8"
            style={{
              background: "linear-gradient(135deg, var(--dreamcast-blue) 0%, var(--dreamcast-orange) 100%)"
            }}
          >
            <Wifi className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 600,
              letterSpacing: "-0.015em",
              lineHeight: "1.1",
              marginBottom: "24px"
            }}
          >
            Online. Before it was normal.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: "clamp(17px, 2vw, 21px)",
              lineHeight: "1.5",
              color: "#6e6e73",
              maxWidth: "700px",
              margin: "0 auto"
            }}
          >
            Dreamcast didn't wait for the future. It built it.
            <br />
            With built-in online support, Dreamcast became the first mainstream console to bring players together—across the world.
          </motion.p>
        </div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { name: "Dricas", desc: "Japan's gateway" },
            { name: "SegaNet", desc: "North America's network" },
            { name: "Dreamarena", desc: "European connection" }
          ].map((service, index) => (
            <div
              key={service.name}
              className="p-8 rounded-2xl border text-center transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "rgba(0,119,200,0.2)",
                background: "linear-gradient(180deg, rgba(0,119,200,0.02) 0%, rgba(0,119,200,0.05) 100%)"
              }}
            >
              <Globe 
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "var(--dreamcast-blue)" }}
              />
              <p 
                style={{
                  fontSize: "clamp(19px, 2.5vw, 24px)",
                  fontWeight: 600,
                  marginBottom: "4px"
                }}
              >
                {service.name}
              </p>
              <p 
                style={{
                  fontSize: "14px",
                  color: "#6e6e73"
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Feature Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 p-8 rounded-3xl text-center"
          style={{
            background: "linear-gradient(135deg, rgba(0,119,200,0.08) 0%, rgba(240,90,40,0.08) 100%)"
          }}
        >
          <p 
            style={{
              fontSize: "clamp(19px, 2.5vw, 24px)",
              fontWeight: 600,
              color: "#1d1d1f",
              marginBottom: "8px"
            }}
          >
            Built-in 56K modem
          </p>
          <p 
            style={{
              fontSize: "17px",
              color: "#6e6e73"
            }}
          >
            Every console ready for the internet, right out of the box.
          </p>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-5 -z-10"
        style={{
          backgroundImage: "radial-gradient(circle, var(--dreamcast-blue) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />
    </section>
  );
}
