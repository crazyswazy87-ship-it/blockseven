import InfiniteCarousel from "../components/shared/InfiniteCarousel";
import ParticleBackground from "../components/shared/ParticleBackground";
import TopBar from "../components/shared/TopBar";

import Domain from "../../../public/assets/do.jpg";
import Css from "../../../public/assets/css.jpg";
import Git from "../../../public/assets/git.jpg";
import Django from "../../../public/assets/django.jpg";
import ReactImg from "../../../public/assets/react.jpg";
import Html from "../../../public/assets/html.jpg";
import Javascript from "../../../public/assets/js.jpg";
import Claude from "../../../public/assets/ap.jpg";
import Python from "../../../public/assets/py.jpg";
import Gitt from "../../../public/assets/gittt.jpg";
import Dev from "../../../public/assets/dev.jpg";

import { motion } from "framer-motion";
import GolgiShape from "../components/shared/GolgiShape";

/* ✅ Animation */
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
  { src: Git, title: "Git Workflow", className: "caorosel-image" },
  { src: Django, title: "Django", className: "caorosel-image" },
  { src: ReactImg, title: "React Dev", className: "caorosel-image" },
  { src: Html, title: "HTML", className: "caorosel-image" },
  { src: Javascript, title: "JavaScript", className: "caorosel-image" },
  { src: Claude, title: "AI Systems", className: "caorosel-image" },
  { src: Python, title: "Python", className: "caorosel-image" },
  { src: Gitt, title: "Version Control", className: "caorosel-image" },
  { src: Dev, title: "Dev Options", className: "caorosel-image" },
];

const Ecostystem = () => {
  return (
    <div className="eco-back relative overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* UI LAYER */}
      <div className="relative z-10">
        <TopBar />

        {/* TITLE */}
        <div className="obebaba text-center mt-6">
          BUILT WITH POWERFUL SYSTEMS
        </div>

        {/* SUBTITLE */}
        <div className="eco-sub text-center">
          Certified technologies powering modern digital systems
        </div>

        {/* OPTIONAL EFFECT */}
        <div className="shooting-star"></div>

        {/* CAROUSEL */}
        <InfiniteCarousel images={carouselImages} speed={25} />

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
            What is Block 7?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-400 leading-relaxed"
          >
            Block 7 is a social technology company creating culture-first digital
            platforms powered by content and AI. We combine viral entertainment,
            AI-driven communication, community-powered creation, and local culture
            with global reach.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-500 italic"
          >
             <GolgiShape />
          </motion.p>
        </motion.section>

      </div>
    </div>
  );
};

export default Ecostystem;