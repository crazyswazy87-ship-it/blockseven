import InfiniteCarousel from "../components/shared/InfiniteCarousel";
import ParticleBackground from "../components/shared/ParticleBackground";
import TopBar from "../components/shared/TopBar";

import Domain from "../../../public/assets/do.jpg";
import Css from "../../../public/assets/css.jpg";
import Git from "../../../public/assets/git.jpg";
import ReactImg from "../../../public/assets/react.jpg";
import Html from "../../../public/assets/html.jpg";
import Javascript from "../../../public/assets/js.jpg";
import Codex from "../../../public/assets/ap.jpg";
import Gitt from "../../../public/assets/gittt.jpg";
import Dev from "../../../public/assets/dev.jpg";
import Ts from "../../../public/assets/ts.png";
import Vercel from "../../../public/assets/verc.jpg";
import Appwrite from "../../../public/assets/appw.png";
import AI from "../../../public/assets/aiii.jpg";

import prada from "../../../public/assets/westy.png";

import { motion } from "framer-motion";
import DotsMap from "../components/shared/DotsMap";

/* Animation */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const carouselImages = [
  { src: Domain, title: "Hosting", className: "caorosel-image" },
  { src: Css, title: "CSS", className: "caorosel-image" },
  { src: Git, title: "Git ", className: "caorosel-image" },
  { src: ReactImg, title: "React", className: "caorosel-image" },
  { src: Html, title: "HTML", className: "caorosel-image" },
  { src: Javascript, title: "JavaScript", className: "caorosel-image" },
  { src: Codex, title: "Codex ", className: "caorosel-image" },
  { src: Gitt, title: "Version Control", className: "caorosel-image" },
  { src: Ts, title: "Typescript", className: "caorosel-image" },
  { src: Vercel, title: "Vercel", className: "caorosel-image" },
  { src: Appwrite, title: "Appwrite", className: "caorosel-image" },
  { src: AI, title: " AI", className: "caorosel-image" },
  { src: Dev, title: "Templates", className: "caorosel-image" },
];

const Ecostystem = () => {
  return (
    <div className="eco-back relative overflow-hidden">
      
      {/* BACKGROUND */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <ParticleBackground />
      </motion.div>

      {/* UI LAYER */}
      <div className="relative z-10">
        
        <TopBar />

        {/* ABOUT SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-4xl mx-auto py-16 text-white"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl font-semibold"
          >
            <motion.div
              className="obebaba text-center mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              WE ENGINEER DIGITAL EXPERIENCES
            </motion.div>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mt-4 text-gray-400 leading-relaxed"
          >
            <motion.div
              className="eco-sub text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              AI systems, modern development, immersive interfaces,
              and culture-driven technology.
              Certified technologies powering modern digital systems
            </motion.div>
          </motion.div>
        </motion.section>

        {/* SHOOTING STAR */}
        <motion.div
          className="shooting-star"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 1200 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 8,
            ease: "linear",
          }}
        />

        {/* TITLE */}
        <motion.p
          className="ill"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TECHNOLOGIES BEHIND THE VISION
        </motion.p>

        {/* CAROUSEL */}
        <motion.div
          className="tooltip"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <InfiniteCarousel images={carouselImages} speed={25} />
        </motion.div>

        {/* IMAGE + TEXT */}
        <motion.div
          className="gucci"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={prada}
            alt="Swazy"
            className="prada"
            initial={{ scale: 0.8, rotate: -4 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
          />

          <motion.div
            className="tooltipp"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            The internet is evolving beyond static experiences.
            We build immersive digital systems that combine
            technology, motion, AI, and culture into living platforms.
          </motion.div>
        </motion.div>

        {/* GLOBE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <section className="globe-wrapper">
            {typeof window !== "undefined" && <DotsMap />}
          </section>
        </motion.div>

      </div>
    </div>
  );
};

export default Ecostystem;