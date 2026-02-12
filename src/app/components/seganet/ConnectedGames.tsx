import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function ConnectedGames() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const games = [
    "ChuChu Rocket!",
    "NFL 2K1",
    "NFL 2K2",
    "Bomberman Online",
    "Quake III Arena",
    "Unreal Tournament",
    "Phantasy Star Online",
    "NBA 2K1",
    "Alien Front Online"
  ];

  return (
    <section ref={ref} className="py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
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
            Where competition went online.
          </h2>
          <p
            style={{
              fontSize: "clamp(19px, 2.5vw, 24px)",
              lineHeight: "1.5",
              color: "#6e6e73",
              maxWidth: "800px",
              margin: "0 auto"
            }}
          >
            SegaNet launched alongside online-enabled titles designed to showcase the future of multiplayer gaming on consoles.
          </p>
        </motion.div>

        {/* Games List */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {games.map((game, index) => (
            <motion.div
              key={game}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300"
              style={{
                backgroundColor: "#FEFEFE"
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(9, 61, 144, 0.03) 0%, rgba(249, 115, 8, 0.03) 100%)"
                }}
              />
              <p
                className="relative z-10"
                style={{
                  fontSize: "19px",
                  fontWeight: 600,
                  color: "#1d1d1f"
                }}
              >
                {game}
              </p>
              {game === "ChuChu Rocket!" && (
                <p
                  className="relative z-10 mt-2"
                  style={{
                    fontSize: "12px",
                    color: "var(--dreamcast-blue)",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase"
                  }}
                >
                  First Online Console Game in the U.S.
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
          style={{
            fontSize: "17px",
            lineHeight: "1.5",
            color: "#6e6e73",
            fontStyle: "italic"
          }}
        >
          From sports to shooters, SegaNet supported fast-paced online play across genres.
        </motion.p>
      </div>
    </section>
  );
}
