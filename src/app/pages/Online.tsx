import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Wifi, Users, Globe } from "lucide-react";
import seganetLogo from "@/assets/6e51564737d5d2dd517998a1a3501c38aa2cc0ae.avif";
import { GlobalHeader } from "../components/GlobalHeader";
import { GameFooter } from "../components/GameFooter";

export default function Online() {
  return (
    <div className="min-h-screen bg-white">
      <GlobalHeader
        activePage="Online"
        contextText="With SegaNet, Dreamcast introduced online console gaming years before it became standard."
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Intro Story */}
      <IntroStorySection />

      {/* SegaNet Overview */}
      <SegaNetOverviewSection />

      {/* Built for Competition */}
      <CompetitionSection />

      {/* Partnerships */}
      <PartnershipsSection />

      {/* Marketing */}
      <MarketingSection />

      {/* End of Service */}
      <EndOfServiceSection />

      {/* Legacy */}
      <LegacySection />

      {/* Closing Statement */}
      <ClosingSection />

      <GameFooter
        gameName="SegaNet"
        releaseYear="2000"
        copyright="SegaNet © SEGA."
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(64px, 8vw, 120px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: "1",
            marginBottom: "24px",
            color: "var(--dreamcast-blue)"
          }}
        >
          Online
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: "1.1",
            color: "#1d1d1f",
            marginBottom: "16px"
          }}
        >
          Before online gaming was expected.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            color: "#6e6e73",
            lineHeight: "1.4",
            marginBottom: "32px"
          }}
        >
          Dreamcast connected players—years ahead of the industry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-4 justify-center mb-16"
        >
          <button
            className="px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: "var(--dreamcast-orange)",
              color: "white",
              fontSize: "17px"
            }}
          >
            Explore SegaNet
          </button>
          <button
            className="px-6 py-3 rounded-full border-2 transition-all duration-200 hover:scale-105"
            style={{
              borderColor: "var(--dreamcast-blue)",
              color: "var(--dreamcast-blue)",
              fontSize: "17px"
            }}
          >
            View Supported Games
          </button>
        </motion.div>

        {/* SegaNet Logo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-[800px] mx-auto"
        >
          <img
            src={seganetLogo}
            alt="SegaNet Logo"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

function IntroStorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gray-50">
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
            marginBottom: "32px"
          }}
        >
          The first step into online console gaming.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.6",
            color: "#6e6e73",
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          <p className="mb-6">
            When Dreamcast launched, online gaming wasn't standard—it was experimental.
            Sega changed that.
          </p>
          <p>
            With built-in modem support and a dedicated internet service, Dreamcast became the first mainstream console designed for online play from day one.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SegaNetOverviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
              marginBottom: "32px",
              color: "var(--dreamcast-blue)"
            }}
          >
            SegaNet
          </h2>
          <p
            style={{
              fontSize: "clamp(17px, 2vw, 21px)",
              lineHeight: "1.6",
              color: "#6e6e73",
              maxWidth: "800px",
              margin: "0 auto"
            }}
          >
            Launched on September 7, 2000, SegaNet was Dreamcast's online gaming service in the United States—offering dial-up multiplayer, matchmaking, and internet access through a single subscription.
            <br /><br />
            It marked a bold shift toward connected console gaming.
          </p>
        </motion.div>

        {/* Icon Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Wifi, title: "Built-in Modem", desc: "56K modem included" },
            { icon: Users, title: "Multiplayer", desc: "Real-time matchmaking" },
            { icon: Globe, title: "Internet Access", desc: "Web browsing included" }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 text-center"
            >
              <feature.icon
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "var(--dreamcast-orange)" }}
              />
              <h3
                style={{
                  fontSize: "21px",
                  fontWeight: 600,
                  marginBottom: "8px"
                }}
              >
                {feature.title}
              </h3>
              <p style={{ fontSize: "15px", color: "#6e6e73" }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompetitionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const games = [
    "ChuChu Rocket!",
    "NFL 2K1",
    "Bomberman Online",
    "Quake III Arena",
    "Unreal Tournament"
  ];

  return (
    <section ref={ref} className="py-32 bg-gray-50">
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
            marginBottom: "32px"
          }}
        >
          Play together. Compete globally.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.6",
            color: "#6e6e73",
            textAlign: "center",
            marginBottom: "48px"
          }}
        >
          SegaNet supported a growing lineup of online titles, including:
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4 max-w-[700px] mx-auto mb-12">
          {games.map((game, index) => (
            <motion.div
              key={game}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "var(--dreamcast-orange)" }}
                />
                <p
                  style={{
                    fontSize: "19px",
                    fontWeight: 600
                  }}
                >
                  {game}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.6",
            color: "#6e6e73",
            textAlign: "center"
          }}
        >
          Players competed in real time—over phone lines—years before broadband gaming became the norm.
        </motion.p>
      </div>
    </section>
  );
}

function PartnershipsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    { name: "GTE Internetworking", role: "(later Genuity)" },
    { name: "AT&T WorldNet", role: "(preferred ISP)" },
    { name: "Excite@Home", role: "(exclusive portal partner)" }
  ];

  return (
    <section ref={ref} className="py-32">
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
            marginBottom: "32px"
          }}
        >
          Powering a connected experience.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.6",
            color: "#6e6e73",
            textAlign: "center",
            marginBottom: "48px"
          }}
        >
          Sega partnered with:
        </motion.p>

        <div className="space-y-4 max-w-[600px] mx-auto mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
            >
              <p style={{ fontSize: "21px", fontWeight: 600 }}>
                {partner.name}{" "}
                <span style={{ color: "#6e6e73", fontWeight: 400 }}>
                  {partner.role}
                </span>
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.6",
            color: "#6e6e73",
            textAlign: "center"
          }}
        >
          These collaborations laid the groundwork for a scalable online console ecosystem.
        </motion.p>
      </div>
    </section>
  );
}

function MarketingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-white to-gray-50">
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
            marginBottom: "32px"
          }}
        >
          Gaming goes mainstream.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.6",
            color: "#6e6e73",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          The launch of SegaNet was backed by a major advertising push—including sponsorship of the MTV Video Music Awards.
          <br /><br />
          Online gaming wasn't a niche anymore. Sega made it part of popular culture.
        </motion.p>
      </div>
    </section>
  );
}

function EndOfServiceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32">
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
            marginBottom: "32px"
          }}
        >
          Short-lived. Long-lasting impact.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.6",
            color: "#6e6e73",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          Due to the Dreamcast's discontinuation, SegaNet officially shut down on July 20, 2001—less than a year after launch.
          <br /><br />
          However, online support for Dreamcast games continued through 2003, and SegaNet's influence lived on in every connected console that followed.
        </motion.p>
      </div>
    </section>
  );
}

function LegacySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gray-50">
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
            marginBottom: "32px"
          }}
        >
          The blueprint for modern gaming.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: "1.6",
            color: "#6e6e73",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          SegaNet proved that console gaming could be social, competitive, and connected.
          <br /><br />
          It wasn't just ahead of its time—it defined what came next.
        </motion.p>
      </div>
    </section>
  );
}

function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32">
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
          The future connected
          <br />
          <span style={{ color: "var(--dreamcast-blue)" }}>here first.</span>
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
            margin: "0 auto"
          }}
        >
          Dreamcast didn't wait for online gaming to become popular.
          <br />
          It made it possible.
        </motion.p>
      </div>
    </section>
  );
}
