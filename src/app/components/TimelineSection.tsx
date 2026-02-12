import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: "1998",
      title: "Japan Release",
      description: "Dreamcast launches in Japan on November 27, selling out its entire stock of 150,000 units on the first day."
    },
    {
      year: "1999",
      title: "Global Expansion",
      description: "Successful launches in North America, Europe, and Australia. Aggressive marketing campaign positions Dreamcast as the next generation of gaming."
    },
    {
      year: "2001",
      title: "Discontinued",
      description: "Sega discontinues the Dreamcast on March 31, marking the end of Sega's hardware era but cementing the console's cult legacy."
    }
  ];

  return (
    <section id="legacy" ref={ref} className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 600,
            letterSpacing: "-0.015em",
            lineHeight: "1.1",
            textAlign: "center",
            marginBottom: "64px"
          }}
        >
          A Brief, Brilliant Legacy
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5"
            style={{
              background: "linear-gradient(180deg, var(--dreamcast-blue) 0%, var(--dreamcast-orange) 100%)"
            }}
          />

          {/* Timeline Items */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 
                    ? "md:flex-row" 
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Year Badge */}
                <div 
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10"
                  style={{
                    background: index === milestones.length - 1
                      ? "var(--dreamcast-orange)"
                      : "var(--dreamcast-blue)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                  }}
                >
                  <p 
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "white"
                    }}
                  >
                    {milestone.year}
                  </p>
                </div>

                {/* Content Card */}
                <div 
                  className={`ml-28 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 
                      ? "md:mr-auto md:pr-16" 
                      : "md:ml-auto md:pl-16"
                  }`}
                >
                  <div 
                    className="p-8 rounded-2xl"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid rgba(0,0,0,0.1)",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.06)"
                    }}
                  >
                    <h3 
                      style={{
                        fontSize: "clamp(24px, 3vw, 32px)",
                        fontWeight: 600,
                        marginBottom: "12px",
                        color: index === milestones.length - 1
                          ? "var(--dreamcast-orange)"
                          : "var(--dreamcast-blue)"
                      }}
                    >
                      {milestone.title}
                    </h3>
                    <p 
                      style={{
                        fontSize: "17px",
                        lineHeight: "1.5",
                        color: "#6e6e73"
                      }}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}