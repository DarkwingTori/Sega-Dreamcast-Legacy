import { motion } from "motion/react";

interface FooterProps {
  segaLogo: string;
}

export function Footer({ segaLogo }: FooterProps) {
  return (
    <footer className="py-16 border-t border-gray-200">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Sega Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <img 
            src={segaLogo} 
            alt="Sega" 
            className="h-10 mx-auto mb-6 opacity-80"
          />
          <p 
            style={{
              fontSize: "14px",
              color: "#86868b",
              marginBottom: "4px"
            }}
          >
            A tribute to gaming innovation
          </p>
          <p 
            style={{
              fontSize: "12px",
              color: "#86868b"
            }}
          >
            Dreamcast • 1998-2001 • Forever Remembered
          </p>
        </motion.div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a 
            href="#design"
            className="text-sm transition-colors"
            style={{ color: "#515154" }}
          >
            History
          </a>
          <span style={{ color: "#d2d2d7" }}>|</span>
          <a 
            href="#specs"
            className="text-sm transition-colors"
            style={{ color: "#515154" }}
          >
            Specifications
          </a>
          <span style={{ color: "#d2d2d7" }}>|</span>
          <a 
            href="#performance"
            className="text-sm transition-colors"
            style={{ color: "#515154" }}
          >
            Legacy
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p 
            style={{
              fontSize: "12px",
              color: "#86868b"
            }}
          >
            © 2024 Educational Tribute. Sega and Dreamcast are registered trademarks of Sega Corporation.
            <br />
            This page is a design exercise and not affiliated with Sega.
          </p>
        </div>
      </div>
    </footer>
  );
}
