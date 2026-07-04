import { motion } from "framer-motion";
import logo from "../../../public/assets/bseven-white.png"
import bs from "../../../public/assets/bseven-white.png"
import sub from "../../../public/assets/bseven-black.png"
import { Link } from "react-router-dom";
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
//import TextPressure from "../../component/TextPressure";
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
import PixelTransition from "../../component/PixelTransition";
//import DotsMap from "../components/shared/DotsMap";
//import MagicBento from "../../component/MagicBento";

import pakapawa from "../../../public/assets/Franklin Saint.jpeg"
import CircularGallery from "../../component/CircularGallery";
import RotatingText from "../../component/RotatingText";
import CircularText from "../../component/CircularText";
import ScrollStack, { ScrollStackItem } from "../../component/ScrollStack";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";




const Home = () => {

  const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  //const navigate = useNavigate();
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
          onClick={() => handleScroll("beyond")}>
            Explore beyond
          </button>
        </motion.div>

        <motion.div>
         <button 
          onClick={() => handleScroll("ecosystem")}
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

     <div 
      className="jenita">
      {/*Rotate Text */}
      {/*Shiny Text */}
      <ShinyText
        text="I'm Wayne Okoth"
        speed={5}
        delay={0}
        color="#fff"
        shineColor="#51aaf9"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover
        disabled={false}
        className="katanisha"
      />

      <RotatingText
        texts={['I CREATE', '3D WEBSITES','AM THE','FOUNDER', 'AND CEO', 'OF', 'BLOCK 7']}
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
        className="safisha"
      />
    </div>

    <section id="swazy" className="konda">
    {/*PixelTransition */}
    <PixelTransition
      firstContent={
        <img
          src={pakapawa}
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

      <button 
        onClick={() => handleScroll("contact")}
        className="btn-grad">
        Reach out
      </button>
    </section>
    
    <section id="ecosystem" style={{ height: '500px', position: 'relative' }}>
      {/*Shiny Text */}
      <ShinyText
        text="Our Ecosystem"
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

      <CircularGallery
        bend={1}
        textColor="#ffffff"
        borderRadius={0.10}
        scrollEase={0.10}
        fontUrl=""
        font="bold 30px Orbitron"
        scrollSpeed={4}
    />

    
    </section>
    
    <section id='beyond' className="tyla">
      {/*Shiny Text */}
      <ShinyText
        text="Explore Beyond WITH US"
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

    {/*Scroll Stack */}
      <ScrollStack>
        <ScrollStackItem itemClassName="elon">
          <h2 className="dissme">What Our Customers Say</h2>
          
          <div className="moto">

          <div className="zuck">
            <div className="yolo">
              ⭐ ⭐ ⭐ ⭐ ⭐
            </div>
            <div className="meso">
              Got myself a wolfGNG stweatshirt, 
              its very reliable & affordable
            </div>
            <div className="maja">
              <div className="msee oo">
                SM
              </div>
              <div className="rates">
                <span className="bombo">Simon Mwangi</span>
                <span className="alaine">Customer</span>
              </div>
            </div>
          </div>

          <div className="zuck">
            <div className="yolo">
              ⭐ ⭐ ⭐ ⭐ 
            </div>
            <div className="meso">
              Comfortable enough for everyday wear and 
              stylish enough to turn heads. Worth every shilling
            </div>
            <div className="maja">
              <div className="msee ii">
                AK
              </div>
              <div className="rates">
                <span className="bombo">Abdul Karim</span>
                <span className="alaine">Pack member</span>
              </div>
            </div>
          </div>

          <div className="zuck">
            <div className="yolo">
              ⭐ ⭐ ⭐ ⭐ ⭐
            </div>
            <div className="meso">
               I've washed it
               multiple times and it still looks brand new
            </div>
            <div className="maja">
              <div className="msee pp">
                YS
              </div>
              <div className="rates">
                <span className="bombo">Young Sido</span>
                <span className="alaine">Pack Member</span>
              </div>
            </div>
          </div>

          <div className="zuck">
            <div className="yolo">
              ⭐ ⭐ ⭐ ⭐ 
            </div>
            <div className="meso">
              The design stands out without trying too hard
            </div>
            <div className="maja">
              <div className="msee aa">
                YA
              </div>
              <div className="rates">
                <span className="bombo">Yassin Adam</span>
                <span className="alaine">Customer</span>
              </div>
            </div>
          </div>

          <div className="zuck">
            <div className="yolo">
              ⭐ ⭐ ⭐ 
            </div>
            <div className="meso">
              The fabric feels premium,
              and I've received so many compliments whenever I wear it
            </div>
            <div className="maja">
              <div className="msee ii">
                NO
              </div>
              <div className="rates">
                <span className="bombo">Nancy Onyango</span>
                <span className="alaine">Pack member</span>
              </div>
            </div>
          </div>

          <div className="zuck">
            <div className="yolo">
              ⭐ ⭐ ⭐ ⭐ 
            </div>
            <div className="meso">
              It's more than apparel it's a community
            </div>
            <div className="maja">
              <div className="msee aa">
                AK
              </div>
              <div className="rates">
                <span className="bombo">Abdul Karim</span>
                <span className="alaine">Pack member</span>
              </div>
            </div>
          </div>

          <div className="zuck">
            <div className="yolo">
              ⭐ ⭐ ⭐ ⭐ ⭐ 
            </div>
            <div className="meso">
              Every time I wear WolfGNG, I feel confident and motivated
            </div>
            <div className="maja">
              <div className="msee ss">
                KK
              </div>
              <div className="rates">
                <span className="bombo">Kairo Khalif</span>
                <span className="alaine">Customer</span>
              </div>
            </div>
          </div>

          </div>

        </ScrollStackItem>

        <ScrollStackItem 
          itemClassName="kamala">
        <section id="contact" className="kamala">
          <h2 className="psycho">Join our ecosystems</h2>
           {/*Shiny Text */}
      <ShinyText
        text="Be among the first to explore our new apps & websites"
        speed={5}
        delay={0}
        color="#fff"
        shineColor="#293138"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover
        disabled={false}
        className="psycho"
      />

          <input
            type="name"
            required
            className="mcfullstop"
            placeholder="Enter your name"
          />

          <input
            type=""
            required
            className="mcfullstop"
            placeholder="Enter your Email or Phone"
          />

          <button
            type="submit"
            onClick={() => {}}
            className="btn-grad bundi"
          >
              <img
                src={sub}
                alt="wolfy"
                height={40}
                className="mwitu"
              />
          </button>
        </section>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="trump">
          <Link to={'/andime'}>
          <img 
            src={bs}
            alt="Bloc 7"
            width={100}
            className="madem"
          />
          </Link>

          <Link 
            to={'#'}
            className="poli"
            >© 2026 BLOCK SEVEN</Link>
          <Link 
            to={'#'}
            className="poli"
            >Terms & Conditions</Link>
          <Link 
            to={'#'}
            className="poli"
            >Jobs</Link>
          <Link 
            to={'#'}
            className="poli"
            >Powered by BlockSeven</Link>
          
        </ScrollStackItem>

        <section id="socials" className="wawili">

        <div className="quen">
        <a
          href="https://www.instagram.com/wolf_gng5?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          className="text-white text-2xl hover:scale-110 transition-all duration-300"
        >
          <FaInstagram />
        </a>
        </div>

        <div className="quen">
        <a
          href="https://api.whatsapp.com/send?phone=254722541890"
          className="text-white text-2xl hover:scale-110 transition-all duration-300"
        >
          <FaWhatsapp />
        </a>
        </div>

        <div className="quen">
        <a
          href="https://www.tiktok.com/@mrabdiadan?is_from_webapp=1&sender_device=pc"
          className="text-white text-2xl hover:scale-110 transition-all duration-300"
        >
          <FaTiktok />
        </a>
        </div>

      </section>

      </ScrollStack>
    </section>

   
  </div>


</div>

  )
}

export default Home