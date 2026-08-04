import React, { useState, useEffect} from "react";
import blockbasa from "../../../public/assets/images/bseven-white.png"
import { motion } from "framer-motion";
//import girimba from "../../../public/assets/images/Franklin Saint.jpeg"


import {
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  Mail,
  Check,
  BadgeCheck,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Shuffle from "../../component/Shuffle";
import FlowingMenu from "../../component/FlowingMenu";


import saint from "../../../public/assets/images/saint.png"
import CircularGallery from "../../component/CircularGallery";
import CircularText from "../../component/CircularText";
import PixelTransition from "../../component/PixelTransition";
import ScrollVelocity from "../../component/ScrollVelocity";
import ShinyText from "../../component/ShinyText";
import MagicRings from "../../component/MagicRings";
import RotatingText from "../../component/RotatingText";
import ProjectSlider from "../components/shared/PojectSlider";

/* ---------------------------------------------------------------
   DATA
--------------------------------------------------------------- */
const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Praise", href: "#praise" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { n: "45+", l: "websites delivered" },
  { n: "40+", l: "happy clients" },
  { n: "23", l: "digital products built" },
  { n: "100%", l: "custom solutions" },
];


const PROCESS = [
  {
    id: "discover",
    label: "Discover",
    title: "Find the real \nconstraint.",
    desc: "Before a line of code, I map the business problem, the users, and the technical debt already in the room.",
    checklist: ["Stakeholder & user interviews", "Technical audit of existing systems"],
    behaviour: 'output = interviews + audit  →  scope.md',
  },
  {
    id: "architect",
    label: "Architect",
    title: "Design the \nsystem, not the screen.",
    desc: "Every screen sits inside an architecture that has to hold for years, not just the next sprint.",
    checklist: ["Data & API architecture", "Component and design-token system"],
    behaviour: "architecture = scope × 3-year growth curve",
  },
  {
    id: "build",
    label: "Build",
    title: "Ship in \nweekly increments.",
    desc: "Working software every week, reviewed against real usage — not a big reveal at the end.",
    checklist: ["Weekly demo-able releases", "Automated test coverage from day one"],
    behaviour: "release.cadence = 7 days",
  },
  {
    id: "launch",
    label: "Launch",
    title: "Hand over a \nsystem you own.",
    desc: "Documentation, monitoring and a trained team — the site keeps working once I step back.",
    checklist: ["Monitoring & alerting in place", "Full handover documentation"],
    behaviour: "ownership.transfer = complete",
  },
];

const TESTIMONIALS_A = [
  { q: "Rebuilt our entire checkout in three weeks and conversion hasn't dipped once since.", name: "Priya Nandan", handle: "@priyabuilds" },
  { q: "The design system alone paid for the engagement. Every new hire ships on day two now.", name: "Marcus Feld", handle: "@marcusf" },
  { q: "Rare combination of founder instincts and senior engineering taste.", name: "Sana Okafor", handle: "@sana_okafor" },
  { q: "Block Seven shipped what our last two agencies couldn't in six months.", name: "Devon Ruiz", handle: "@devonruiz" },
];

const TESTIMONIALS_B = [
  { q: "Our dashboard finally feels like a product instead of a spreadsheet.", name: "Yuki Tanaka", handle: "@yukicodes" },
  { q: "Clear scoping, weekly demos, zero surprises at launch.", name: "Ola Adeyemi", handle: "@ola_a" },
  { q: "Top-tier engineering with actual design taste attached. Rare.", name: "Ben Castellano", handle: "@bencastel" },
  { q: "Handed us a system our own team could extend without hand-holding.", name: "Lina Hartmann", handle: "@linahart" },
];

type Testimonial = { q: string; name: string; handle: string };

/* ---------------------------------------------------------------
   SMALL PRIMITIVES
--------------------------------------------------------------- */
function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return <div className={`b7-eyebrow${center ? " b7-eyebrow--center" : ""}`}>{children}</div>;
}

function SectionHeading({
  eyebrow,
  title,
  sub,
  center,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`b7-section-head${center ? " b7-section-head--center" : ""}`}>
      <Eyebrow center={center}>{eyebrow}</Eyebrow>
      <h2 className="b7-display">{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="b7-field">
      <span className="b7-field-label b7-mono">{label}</span>
      {children}
    </label>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="b7-card b7-testimonial-card">
      <p>&ldquo;{t.q}&rdquo;</p>
      <div className="b7-testimonial-footer">
        <span className="b7-avatar">{t.name.split(" ").map((w) => w[0]).join("")}</span>
        <div>
          <div className="b7-testimonial-name">
            <span>{t.name}</span>
            <BadgeCheck size={13} className="b7-hero-accent" />
          </div>
          <div className="b7-testimonial-handle">{t.handle}</div>
        </div>
      </div>
    </div>
  );
}

/*-------------------------------------
Motion
-------------------------------------*/
const reveal = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.96,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 90,
      damping: 18,
    },
  },
};

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -120,
    rotate: -2,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 85,
      damping: 18,
    },
  },
};

const slideRight = {
  hidden: {
    opacity: 0,
    x: 120,
    rotate: 2,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 85,
      damping: 18,
    },
  },
};


const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* ---------------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------------- */
const  BlockSeven= () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(PROCESS[0].id);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", type: "Product build", budget: "$5k – $15k", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [typed, setTyped] = useState("");

  const heroLine = 'think GLOBBALLY act LOCALLY';

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(heroLine.slice(0, i + 1));
      i++;
      if (i > heroLine.length) clearInterval(t);
    }, 45);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const step = PROCESS.find((p) => p.id === activeStep) || PROCESS[0];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  }

    //Flowing Menu
const demoItems = [
  {
    text: "Kenya",
    image: "https://i.pinimg.com/736x/d4/b5/be/d4b5be857760143e126e76cb976cb391.jpg"
  },
  {
    text: "Nairobi",
    image: "https://i.pinimg.com/736x/3d/a8/13/3da813f35232d5006c2679eb8d3f0cf9.jpg"
  },
  {
    text: "Safari",
    image: "https://i.pinimg.com/736x/04/9e/1a/049e1ae543607d239f01b07930103be3.jpg"
  },
  {
    text: "Culture",
    image: "https://i.pinimg.com/736x/65/6c/ba/656cbafad109b79a05579ec841beb0a8.jpg"
  }
];

/*SCROLLL*/
//const containerRef = useRef<HTMLDivElement>(null)


  return (
    <div className="b7-page">

      {/* ============ NAV ============ */}
      <header className={`b7-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="b7-container b7-header-row">
          <a href="#top" className="b7-logo">
            <span className="b7-logo-badge b7-display">
              <img 
                src={blockbasa}
                alt="b7"
                className="iyanii"
              />
            </span>
            <span className="b7-logo-name b7-display">Block Seven</span>
          </a>

          <nav className="b7-nav">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="b7-link">
                {n.label}
              </a>
            ))}
          </nav>

          <button className="b7-menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="b7-mobile-menu">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="b7-btn b7-btn-primary">
              Begin Your Journey
            </a>
          </div>
        )}
      </header>

      {/* ============ HERO ============ */}
      <motion.section id="top" className="b7-hero b7-grid-bg b7-radial-bg">
        <div className="b7-container b7-hero-inner">
          
          <Eyebrow>Block Seven — Founder &amp; CEO</Eyebrow>

          <h1 className="b7-display">
            Building the digital
            <br />
            backbone of modern
            <br />
            businesses<span className="b7-hero-accent">.</span>
          </h1>

            {/*Magic rings*/}
          <div className="crownlove">
            <MagicRings
              color="#f4d93e"
              colorTwo= " #FCEFA6"
              ringCount={6}
              speed={0.95}
              attenuation={10}
              lineThickness={2}
              baseRadius={0.35}
              radiusStep={0.1}
              scaleRate={0.1}
              opacity={1}
              blur={0}
              noiseAmount={0.1}
              rotation={0}
              ringGap={1.5}
              fadeIn={0.7}
              fadeOut={0.5}
              followMouse={true}
              mouseInfluence={0.2}
              hoverScale={1.2}
              parallax={0.05}
              clickBurst={false}
            />
          </div>

          <motion.section id="swazy" className="konda"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}>
          {/*PixelTransition */}
          <PixelTransition
            firstContent={
              <img
                src={saint}
                alt="crazyswazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div
              className="survival">
                {/*circular text*/}
                <CircularText
                  text="**NEED**A**WEBSITE?**"
                  onHover="speedUp"
                  spinDuration={20}
                  className="custom-class"
                />
                <p className="domani">
                  <span className="tipsi">
                    i'd be happy to help
                    you get one today
                  </span>
                </p>
              </div>
            }
            gridSize={8}
            pixelColor="#ffffff"
            once={false}
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
          </motion.section>

          <br/>


          {/*Shiny Text */}
          <ShinyText
            text=" I'm Wayne Okoth, founder of Block Seven. I design and engineer software, 
                   both cinematic and 3d websites, and AI-powered solutions that help businesses launch with confidence,
                   grow sustainably, and stay ahead in a rapidly changing world."
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover
            disabled={false}
            className="b7-lede"
          />

          <div className="b7-hero-actions">
            <a href="#work" className="b7-btn b7-btn-primary b7-btn-primary--lg btn-grad">
              Explore My Work <ArrowUpRight size={18} />
            </a>
            <a href="#contact" className="b7-btn b7-btn-outline">
              Talk With Wayne <ArrowRight size={18} />
            </a>
          </div>

          
          <div className="b7-terminal">
            <div className="b7-terminal-bar">
              <span className="b7-terminal-dot b7-terminal-dot--red" />
              <span className="b7-terminal-dot b7-terminal-dot--yellow" />
              <span className="b7-terminal-dot b7-terminal-dot--green" />
              <span className="b7-terminal-title">npm — block-seven</span>
            </div>
            <div className="b7-terminal-body">
              <span className="b7-terminal-user">@block-seven</span>
              <span className="b7-terminal-path"> ~ % </span>
              <span>{typed}</span>
              <span className="b7-caret">▍</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ============ STATS TICKER ============ */}
      <motion.section className="b7-stats-section"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}>
        <div className="b7-container b7-stats-grid">
          {STATS.map((s) => (
            <div key={s.l} className="b7-stat">
              <Shuffle
                text={s.n}
                shuffleDirection="down"
                duration={0.25}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power2.out"
                stagger={0.09}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover
                respectReducedMotion={true}
                loop={false}
                loopDelay={0}
                className="b7-stat-num b7-display"
              />
              <div className="b7-stat-label">
              <ShinyText
              text={s.l}
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover
              disabled={false}
              className="b7-stat-label"
            />
            </div>
              
            </div>
          ))}
        </div>
      </motion.section>

      <br/>
      <br/>
      <br/>

      <div className="topscorrer">
      <ScrollVelocity
        texts={['Block Seven', 'Explore Beyond']} 
        velocity={100}
        className="custom-scroll-text"
        numCopies={9}
        damping={190}
        stiffness={750}
      />
      </div>

      {/* ============ SERVICES ============ */}
      <motion.section id="services" 
       className="b7-container b7-section"
       variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}>
        <SectionHeading
          eyebrow="Services"
          title="Websites engineered to grow your business."
          sub="Whether you need a company website, an online store, or a custom web application, I build solutions that are fast, modern, and scalable."
        />
        </motion.section>

        <motion.section id="services" 
       className="b7-container b7-sectio"
       variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}>
        <SectionHeading
          eyebrow="What Drives Us"
          title="Technology with purpose."
          sub="We believe great software isn't just beautifully designed it solves problems, creates opportunities, and helps businesses grow."
        />
        </motion.section>

        

        {/** 
        <div className="b7-card-grid">
          {SERVICES.map((s) => (
            <div key={s.title} className="b7-card b7-service-card">
              <div className="b7-service-icon">
                <s.icon size={22} className="b7-hero-accent" />
              </div>
              <h3 className="b7-display">{s.title}</h3>
              <p>{s.desc}</p>
              <div className="b7-tag-row">
                {s.tags.map((t) => (
                  <span key={t} className="b7-tag b7-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      */}
      

        <SectionHeading
          eyebrow="Block seven ecosystems"
          title="We are all about."
        />

       <div className="scroll-section">

        <FlowingMenu items={demoItems}
            speed={7}
            textColor="#ffffff"
            bgColor="#000000"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#120F17"
            borderColor="#ffffff"
          />

        </div>

           
      <motion.section id="work" 
      className="b7-container b7-section--tigh"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}>

        <SectionHeading
        eyebrow="Featured work"
        title="Websites & web apps i've made"
        sub="Explore a collection of websites, platforms, and AI-powered solutions designed, engineered wich were created by Wayne"
        />

      

        <div className="scroll-section">
        <ProjectSlider/>
        </div>

        </motion.section>

        <SectionHeading
        eyebrow="Selected Work"
        title="Building products people actually use."
        sub="Explore a collection of websites, platforms, and AI-powered solutions designed, engineered, and launched by Block Seven."
        />
        
      <motion.section id="work" 
      className="b7-container b7-section--tight"
      variants={slideRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}>
      

        <CircularGallery
            bend={1}
            textColor="#ffffff"
            borderRadius={0.10}
            scrollEase={0.10}
            fontUrl=""
            font="bold 30px Orbitron"
            scrollSpeed={9}
        />


      </motion.section>
      {/* ============ PROCESS ============ */}
      <motion.section id="process" className="b7-container b7-section--tight"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}>
        <SectionHeading eyebrow="How it runs" title="One process, four checkpoints." />

        <div className="b7-tabs">
          {PROCESS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveStep(p.id)}
              className={`b7-tab${activeStep === p.id ? " is-active" : ""}`}
            >
              <span className="b7-tab-index b7-mono">0{i + 1}</span>
              {p.label}
            </button>
          ))}
        </div>

        <div className="b7-process-panel">
          <div>
            <Eyebrow>Step {String(PROCESS.findIndex((p) => p.id === step.id) + 1).padStart(2, "0")} / 04</Eyebrow>
            <h3 className="b7-display b7-process-title">{step.title}</h3>
            <p className="b7-process-desc">{step.desc}</p>
          </div>

          <div className="b7-checkpoint-box">
            <div className="b7-checkpoint-label">Checkpoint</div>
            <div className="b7-checklist">
              {step.checklist.map((c) => (
                <div key={c} className="b7-checklist-item">
                  <span className="b7-check-icon">
                    <Check size={12} className="b7-hero-accent" />
                  </span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
            <div className="b7-behaviour">
              <div className="b7-behaviour-label b7-mono">BEHAVIOUR</div>
              <div className="b7-behaviour-code">{step.behaviour}</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ============ Feedback ============ */}
    <motion.section id="praise" 
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}>
        <div className="b7-container">
          <SectionHeading
            eyebrow="What Clients Say"
            title="Trusted by founders, startups, and growing businesses."
            center
          />
        </div>
      </motion.section>
      
      {/*fedbacks */}
      <div className="b7-marquee-row">
          <div className="b7-marquee-track left">
            {[...TESTIMONIALS_A, ...TESTIMONIALS_A].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
        <div className="b7-marquee-row">
          <div className="b7-marquee-track right">
            {[...TESTIMONIALS_B, ...TESTIMONIALS_B].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>

        <br/>


      {/* ============ CONTACT / INQUIRY ============ */}
      <motion.section id="contact" 
      className="b1x b7-container b7-contact-section"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}>
        <div className="b7-contact-card">
          <div className="b7-contact-bg b7-grid-bg" />
          <div className="b7-contact-content">
            <SectionHeading
              eyebrow="Inquire"
              title="Let's build something people remember."
              sub="Tell me about the project. I read every inquiry myself and reply within 24 hours."
              center
            />

            {submitted ? (
              <div className="b7-submitted">
                <span className="b7-submitted-icon">
                  <Check size={26} className="b7-hero-accent" />
                </span>
                <h3 className="b7-display">Message received.</h3>
                <p>
                  Thanks, {form.name.split(" ")[0]} — I'll reply at {form.email} within 24 hours.
                </p>
                <button
                  onClick={() =>
                    { setSubmitted(false); setForm({ name: "", email: "", type: "Product build", budget: "$5k – $15k", message: "" }); }
                  }
                  className=" btn-grad"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="b7-form">
                <div className="b7-form-row">
                  
                    <input
                      required
                      className="b7-input"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your Name"
                    />
                  
                  
                    <input
                      required
                      type="email"
                      className="b7-input"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Email"
                    />
                
                </div>
                <div className="b7-form-row">
                 
                    <select
                      className="b7-input"
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                    >
                      <option>Product build</option>
                      <option>Design system</option>
                      <option>Hotel & Hospitality</option>
                      <option>Real Estate & Property</option>
                      <option>Web app and Apps</option>
                      <option>Restaurant & Café</option>
                      <option>Wildlife & Safari</option>
                      <option>Gym & Fitness</option>
                      <option>Healthcare & Medical</option>
                      <option>E-Commerce & Retail</option>
                      <option>Education & Schools</option>
                      <option>Travel & Tourism</option>
                      <option>Lifestyle & Personal Brand</option>
                      <option>Brand & identity</option>
                      <option>Growth infrastructure</option>
                    </select>
                  
                  <Field label="Budget range">
                    <select
                      className="b7-input"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    >
                      <option>$5k – $15k</option>
                      <option>$15k – $40k</option>
                      <option>$40k – $100k</option>
                      <option>$100k+</option>
                    </select>
                  </Field>
                </div>
                <Field label="Project details">
                  <textarea
                    required
                    rows={4}
                    className="b7-input"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What are you building, and what does done look like?"
                  />
                </Field>
                <button type="submit" className=" btn-grad">
                  Send inquiry <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.section>

      <br/>

    {/**scrooller 
      <div
        ref={containerRef}
        data-lenis-prevent
        className="relat h-[100vh] w-full overflow-y-auto overscroll-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <ScrollSplitCard
          containerRef={containerRef}
          imageSrc={girimba}
          cards={[
            {
              title: "Going Zero to One",
              description: "If you're navigating a new business... breaking into a new market.",
              bgColor: "#e2e2e2",
              textColor: "#111111"
            },
            {
              title: "Scaling from One to N",
              description: "If you've achieved Product/Market Fit...",
              bgColor: "#1a5bcf",
              textColor: "#ffffff"
            },
            {
              title: "Need Quick Solutions",
              description: "If you know exactly what you want and need...",
              bgColor: "#1c1c1c",
              textColor: "#ffffff"
            }
          ]}
        />
      </div>

      */}
          

      {/* ============ FOOTER ============ */}
      <footer className="b7-footer">
        <div className="b7-container b7-footer-inner">
          <div className="b7-footer-brand">
            <span className="b7-logo-badge b7-logo-badge--sm b7-display">
              <img 
                src={blockbasa}
                alt="b7"
                className="ngam"
              />

            </span>

             <div>
              {/*Rotate Text */}        
              <RotatingText
                texts={['BLOCK 7 ECOSYSTEMS', 'BLOCK SEVEN']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={4000}
                splitBy="characters"
                auto
                loop={false}
                className=" b7-footer-brand-name"
              />
            </div>
          </div>

          <nav className="b7-footer-nav">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="b7-link">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="b7-social-row">
            <a href="#" aria-label="Github"><FaGithub size={18} /></a>
            <a href="#" aria-label="Twitter"><FaTwitter size={18} /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
            <a href="#contact" aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BlockSeven;