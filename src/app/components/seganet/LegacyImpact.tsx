import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import adImage from "@/assets/393616de0dc61f825b2f4b247cd7967c406eb944.webp";

export function LegacyImpact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const impactPoints = [
    "Voice communication in select titles via microphone",
    "Online rankings and stat tracking were early features",
    "Sega sponsored major pop-culture events (e.g., MTV VMAs) to market SegaNet",
    "One of the first console services to bundle hardware + ISP",
    "Browser experience powered by Dreamcast-specific software (Dream Passport / Dream Key)"
  ];

  return (
    <section ref={ref} className="py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Headline & Copy */}
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
              marginBottom: "24px"
            }}
          >
            Ahead of its time.
          </h2>
          <p
            style={{
              fontSize: "clamp(19px, 2.5vw, 24px)",
              lineHeight: "1.5",
              color: "#1d1d1f",
              maxWidth: "900px",
              margin: "0 auto 16px"
            }}
          >
            Although SegaNet was discontinued in July 2001 following the Dreamcast's discontinuation, its impact lasted far longer. Online support for Dreamcast titles continued through 2003, and SegaNet helped prove that console-based online gaming was not only possible—but essential.
          </p>
          <p
            style={{
              fontSize: "clamp(17px, 2vw, 21px)",
              lineHeight: "1.5",
              color: "#6e6e73",
              maxWidth: "800px",
              margin: "0 auto"
            }}
          >
            Many ideas introduced with SegaNet would later become standard across the industry.
          </p>
        </motion.div>

        {/* Ad Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <img
            src={adImage}
            alt="SegaNet Advertisement"
            className="w-full h-auto rounded-3xl mx-auto"
            style={{
              maxWidth: "800px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
            }}
          />
          <p
            className="text-center mt-4"
            style={{
              fontSize: "13px",
              color: "#6e6e73",
              fontStyle: "italic"
            }}
          >
            "The only high-speed online console gaming network. Jack in today."
          </p>
        </motion.div>

        {/* Impact Points */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3
            className="text-center mb-8"
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#1d1d1f"
            }}
          >
            Innovations That Defined Online Gaming
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {impactPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 bg-gray-50 rounded-xl p-6"
              >
                <div
                  className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: "var(--dreamcast-orange)" }}
                />
                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: "1.5",
                    color: "#1d1d1f"
                  }}
                >
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}