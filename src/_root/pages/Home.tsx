import { motion } from "framer-motion";
import logo from "../../../public/assets/bseven-white.png"
//import bra from "../../../public/assets/bseven-white.png"
//import sub from "../../../public/assets/bseven-black.png"
import { useNavigate } from "react-router-dom";
//import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import CardNav from "../../component/CardNav";
import ShinyText from "../../component/ShinyText";
import ScrollFloat from "../../component/ScrollFloat";
import ScrollReveal from "../../component/ScrollReveal";
//import RotatingText from "../../component/RotatingText";
import FlowingMenu from "../../component/FlowingMenu";
//import CircularText from "../../component/CircularText";
//import ScrollStack, { ScrollStackItem } from "../../component/ScrollStack";
import Shuffle from "../../component/Shuffle";
import MagicRings from "../../component/MagicRings";
import ScrollVelocity from "../../component/ScrollVelocity";
//import LogoLoop from "../../component/LogoLoop";
//import InfiniteCarousel from "../components/shared/InfiniteCarousel";

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
//import StarBorder from "../../component/StarBorder";
import Magnet from "../../component/Magnet";
//import Folder from "../../component/Folder";
import DomeGallery from "../../component/DomeGallery";
//import DotsMap from "../components/shared/DotsMap";
//import MagicBento from "../../component/MagicBento";




const Home = () => {

  const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  const navigate = useNavigate();
   //variable proximity
 //const containerRef = useRef(null);

 

 //Topbar
const itemsz = [
  {
    label: "About",
    target: "about",
  },
  {
    label: "Ecosystem",
    target: "ecosystem",
  },
  {
    label: "Contact",
    target: "socials",
  }
];

  //Flowing Menu
const demoItems = [
   { link: '/', text: 'Kenya', image: 'https://i.pinimg.com/736x/d4/b5/be/d4b5be857760143e126e76cb976cb391.jpg' },
  { link: '/', text: 'Nairobi', image: 'https://i.pinimg.com/736x/3d/a8/13/3da813f35232d5006c2679eb8d3f0cf9.jpg' },
  { link: '/', text: 'Safari', image: 'https://i.pinimg.com/736x/04/9e/1a/049e1ae543607d239f01b07930103be3.jpg' },
  { link: '/', text: 'Culture', image: 'https://i.pinimg.com/736x/65/6c/ba/656cbafad109b79a05579ec841beb0a8.jpg' }
];



//Logo Loop
const imageLogos = [
  { src: Domain, alt: "Hostig", href: "#" },
  { src: Css, alt: "Css", href: "#" },
  { src: Git, alt: "Git", href: "#" },
  { src: ReactImg, alt: "React", href: "#" },
  { src: Html, alt: "HTML", href:"#"},
  { src: Javascript, alt: "Java Script", href:"#"},
  { src: Codex, alt: "Codex", href:"#"},
  { src: Gitt, alt: "Version Control", href:"#"},
  { src: Ts, alt: "Typescript", href:"#"},
  { src: Vercel, alt: "Vercel", href:"#"},
  { src: Appwrite, alt: "Appwrite", href:"#"},
  { src: AI, alt: "Atificial Inteligence", href:"#"},
  { src: Dev, alt: "Templates", href:"#"}
];




  return (
  <div className="home-container">
  <section 
    className="hero">

    {/*card nav */}
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={itemsz}
      baseColor=""
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
      theme="light"
      className="topbar"
    />

    

    <div className="hero-content">
      <div className="broski">
    {/*Magnet */}
      <Magnet padding={50} disabled={false} magnetStrength={3}>

        <img 
          src={logo}
          alt="B7"
          height={100}
          width={140}
        />

      </Magnet>
      </div>

      {/*Magic rings*/}
    <div className="crownlove">
      <MagicRings
        color="#0fa4e9"
        colorTwo= "(rgba(25, 151, 235, 0.8)"
        ringCount={6}
        speed={1}
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

      {/*Shiny Text */}
      <ShinyText
        text="BLOCK SEVEN"
        speed={2}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover
        disabled={false}
        className="hero-tag"
      />

      <h1>
        INSPIRED BY THE FEAR
        <br />
        OF BEING AVERAGE
      </h1>


      <div className="hero-buttons">
        <motion.div>
         <button 
          className="btn-grad"
          onClick={() => navigate("/")}>
            Explore beyond
          </button>
        </motion.div>

        <motion.div>
         <button 
          onClick={() => handleScroll("contact")}
          className="btn-grad">
            B7 Ecosystem
         </button>
        </motion.div>
      </div>
    </div>
  </section>

  <div className="topscorrer">
  <ScrollVelocity
    texts={['Block Seven', 'Explore Beyond']} 
    velocity={100}
    className="custom-scroll-text"
    numCopies={10}
    damping={70}
    stiffness={750}
  />
  </div>

  {/*Flowing menu */}
    <div className="manoseti">
  
      {/*Shiny Text */}
      <ShinyText
        text="WE ARE ALL ABOUT"
        speed={5}
        delay={0}
        color="#fff"
        shineColor="#51aaf9"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover
        disabled={false}
        className="uzi"
      />

        <FlowingMenu items={demoItems}
          speed={7}
          textColor="#ffffff"
          bgColor="#000000"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#120F17"
          borderColor="#ffffff"
        />

    {/*Shiny Text */}
      <ShinyText
        text="TECHNOLOGIES BEHIND THE ECOSYSTEM"
        speed={5}
        delay={0}
        color="#fff"
        shineColor="#51aaf9"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover
        disabled={false}
        className="uzi"
      />

    <DomeGallery
      fit={0.8}
      minRadius={600}
      maxVerticalRotationDeg={7}
      segments={34}
      dragDampening={2}
      grayscale
    />


    {/*Scroll Float */}
    <ScrollFloat
      animationDuration={9}
      ease='back.inOut(2)'
      scrollStart='center bottom+=50%'
      scrollEnd='bottom bottom-=40%'
      stagger={0.03}
      containerClassName="bdady"
    >
      About Us
    </ScrollFloat>

     {/*Shiny Text 
      <ShinyText
        text="BLOCK 7 ECOSYSTEM"
        speed={5}
        delay={0}
        color="#fff"
        shineColor="#51aaf9"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover
        disabled={false}
        className="uzi"
      />
    */}

      
    

        {/*Shiny Text 
      <ShinyText
        text="TECHNOLOGIES BEHIND THE VISION"
        speed={5}
        delay={0}
        color="#fff"
        shineColor="#51aaf9"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover
        disabled={false}
        className="uzi"
      />

      <LogoLoop
        logos={imageLogos}
        useCustomRender={false}
      />
      */}

      




      {/*Folder 
      <div className="kicks">
        <Folder  
        size={2} 
        color="#4785ff"
        className="custom-folder"
        color="#4785ff"
        size={2}
      />
      </div>
      */}
    
    <div className="genje"> 
      
      <section id="about">
        <div className="sana">
          <div className="wild">
            {/*Scroll Reveal */}
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={4}
              blurStrength={1}
            >
            The internet is evolving beyond static experiences.
            We build immersive digital systems that combine
            technology, motion, AI, and culture into living platforms.
            </ScrollReveal>

            <motion.div className="dream">
              {/*Magnet */}
              <Magnet padding={50} disabled={false} magnetStrength={4}>
    
              <Shuffle
                text="WE CREATE"
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
                className="tag-hero"
              />
              </Magnet>

              {/*Magnet */}
              <Magnet padding={50} disabled={false} magnetStrength={4}>

              <Shuffle
                text="3D"
                shuffleDirection="right"
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
                className="tag-hero"
              />
              </Magnet>

              {/*Magnet */}
              <Magnet padding={50} disabled={false} magnetStrength={4}>
    
              <Shuffle
                text="WEBSITES"
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
                className="tag-hero"
              />

              </Magnet>
      
            </motion.div>
          </div>

          <div className="wild">

            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={4}
              blurStrength={1}
            >
            Take your business or brand to global visibility for 
            millons of users worldwide 
            </ScrollReveal>



            <motion.div className="dream">
              {/*Magnet */}
              <Magnet padding={50} disabled={false} magnetStrength={4}>
    
              <Shuffle
                text="EXPLORE"
                shuffleDirection="up"
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
                className="tag-hero"
              />
              </Magnet>

              {/*Magnet */}
              <Magnet padding={50} disabled={false} magnetStrength={4}>
    
              <Shuffle
                text="JOIN US"
                shuffleDirection="right"
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
                className="tag-hero"
              />

            
              </Magnet>

            
            </motion.div>
          </div>

        </div>
      </section>


      
    </div>

    {/*Magic Bento
    <MagicBento 
      textAutoHide={true}
      enableStars
      enableSpotlight
      enableBorderGlow={true}
      enableTilt={false}
      enableMagnetism={false}
      clickEffect
      spotlightRadius={400}
      particleCount={12}
      glowColor="132, 0, 255"
      disableAnimations={false}
    />
     */}
   
  </div>


</div>

  )
}

export default Home