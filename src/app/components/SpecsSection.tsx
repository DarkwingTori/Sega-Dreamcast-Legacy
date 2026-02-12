import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function SpecsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const specs = [
    { label: "CPU", value: "Hitachi SH-4 @ 200 MHz" },
    { label: "GPU", value: "NEC PowerVR2 @ 100 MHz" },
    { label: "Memory", value: "16 MB RAM" },
    { label: "Video RAM", value: "8 MB" },
    { label: "Audio RAM", value: "2 MB" },
    { label: "Audio", value: "Yamaha AICA (64 channels)" },
    { label: "Media", value: "GD-ROM, CD-ROM" },
    { label: "Storage", value: "VMU (128 KB per unit)" },
    { label: "Network", value: "56K modem (built-in)" },
    { label: "Controllers", value: "4 ports" },
    { label: "Dimensions", value: "195.8 × 190 × 75.5 mm" },
    { label: "Weight", value: "1.5 kg" }
  ];

  const timeline = [
    { date: "November 27, 1998", event: "Released in Japan" },
    { date: "September 9, 1999", event: "Released in North America" },
    { date: "October 14, 1999", event: "Released in Europe" },
    { date: "November 30, 1999", event: "Released in Australia" },
    { date: "March 31, 2001", event: "Production discontinued" },
  ];

  return (
    <section id="specs" ref={ref} className="py-32">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
            Tech Specs
          </h2>
          <p 
            style={{
              fontSize: "clamp(17px, 2vw, 21px)",
              color: "#6e6e73"
            }}
          >
            Small in size. Massive in impact.
          </p>
        </motion.div>

        {/* Specs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div 
            className="grid md:grid-cols-2 gap-px rounded-3xl overflow-hidden"
            style={{ 
              backgroundColor: "rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.08)"
            }}
          >
            {specs.map((spec, index) => (
              <div
                key={spec.label}
                className="bg-white p-6 flex justify-between items-center"
              >
                <p 
                  style={{
                    fontSize: "17px",
                    color: "#6e6e73"
                  }}
                >
                  {spec.label}
                </p>
                <p 
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    textAlign: "right"
                  }}
                >
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Milestone */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center p-12 rounded-3xl"
          style={{
            background: "linear-gradient(135deg, rgba(0,119,200,0.08) 0%, rgba(240,90,40,0.08) 100%)"
          }}
        >
          <p 
            style={{
              fontSize: "14px",
              color: "#6e6e73",
              marginBottom: "8px",
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}
          >
            Total Units Sold
          </p>
          <p 
            style={{
              fontSize: "clamp(48px, 6vw, 72px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: "1",
              background: "linear-gradient(135deg, var(--dreamcast-blue) 0%, var(--dreamcast-orange) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            9.13 Million
          </p>
        </motion.div>

        {/* Release Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <h3 
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 600,
              textAlign: "center",
              marginBottom: "32px"
            }}
          >
            Release Timeline
          </h3>

          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div
                key={item.date}
                className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50"
              >
                <div 
                  className="flex-shrink-0 w-3 h-3 rounded-full"
                  style={{ 
                    backgroundColor: index < timeline.length - 1 
                      ? "var(--dreamcast-blue)" 
                      : "var(--dreamcast-orange)"
                  }}
                />
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <p 
                    style={{
                      fontSize: "17px",
                      fontWeight: 600
                    }}
                  >
                    {item.event}
                  </p>
                  <p 
                    style={{
                      fontSize: "15px",
                      color: "#6e6e73"
                    }}
                  >
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
