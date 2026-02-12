import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function HowItWorked() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Dial-Up Connectivity",
      description: "Built-in modem support allowed Dreamcast to connect directly to the internet—no PC required."
    },
    {
      title: "Dedicated Servers",
      description: "SegaNet supported real-time multiplayer gaming with optimized routing for competitive play."
    },
    {
      title: "ISP Partnerships",
      description: "Sega partnered with GTE Internetworking (later Genuity), AT&T WorldNet, and Excite@Home to deliver nationwide access."
    },
    {
      title: "Console-First Design",
      description: "Unlike PC-centric services, SegaNet was designed entirely around console gaming."
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
              marginBottom: "16px"
            }}
          >
            Online, the Dreamcast way.
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8"
              style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)"
              }}
            >
              <div
                className="w-12 h-1 rounded-full mb-6"
                style={{
                  backgroundColor: "var(--dreamcast-orange)"
                }}
              />
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  marginBottom: "12px",
                  color: "#1d1d1f"
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.5",
                  color: "#6e6e73"
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
