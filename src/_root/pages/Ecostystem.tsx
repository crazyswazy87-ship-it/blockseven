import { motion } from "framer-motion";
import logo from "../../../public/assets/bseven-white.png"
import bra from "../../../public/assets/bseven-white.png"
import sub from "../../../public/assets/bseven-black.png"
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import CardNav from "../../component/CardNav";
import ShinyText from "../../component/ShinyText";
import ScrollFloat from "../../component/ScrollFloat";
import ScrollReveal from "../../component/ScrollReveal";
import RotatingText from "../../component/RotatingText";
import FlowingMenu from "../../component/FlowingMenu";
import CircularText from "../../component/CircularText";
import ScrollStack, { ScrollStackItem } from "../../component/ScrollStack";
import Shuffle from "../../component/Shuffle";
import MagicRings from "../../component/MagicRings";
import ScrollVelocity from "../../component/ScrollVelocity";
import InfiniteCarousel from "../components/shared/InfiniteCarousel";

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
import Magnet from "../../component/Magnet";




const Ecosytem = () => {

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


 const carouselImages = [
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
        <img 
          src={logo}
          alt="B7"
          height={100}
          width={140}
        />
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
    velocity={50}
    className="custom-scroll-tex"
    numCopies={20}
    damping={70}
    stiffness={750}
  />
  </div>

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
          
          </motion.div>
        </div>

      </div>
    </section>


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
    </div>

    {/* CAROUSEL */}
    <motion.div
      className="tooltip"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
    <InfiniteCarousel images={carouselImages} speed={25} />
    </motion.div>

    


    {/*shop */}

    {/*Circular gallery */}
    <section id="catalogue" className="bizi">
      
        <span className="uzi">
          Our Collections
        </span>

        {/*mbotoo */}

      
        {/*circular text*/}
        <CircularText
          text="**WOLF***GNG**"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />

        <div className="manymen">
          <button
          onClick={() => navigate("/")} 
          className=" btn-grad">
          Shop Now
          </button>
        </div>

      
    </section>

      <div 
      className="jenita">
      {/*Rotate Text */}
      <div className="katanisha">
        Our core values
      </div>
      <RotatingText
        texts={['Growth', 'Resilience', 'Dicipline' , 'Community']}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
        splitBy="characters"
        auto
        loop={false}
        className="safisha"
      />
    </div>

    <section id="him" className="kartelo">
      {/*Scroll Stack */}
      <ScrollStack>
        <ScrollStackItem itemClassName="elon">
          <h2>What Our Customers Say</h2>
          
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
          <h2 className="psycho">Join our pack waitlist</h2>
          <p className="psycho">Recieve emails when new merchendise drops</p>

          <input
            type="email"
            required
            className="mcfullstop"
            placeholder="Enter your Email"
          />

          <button
            type="submit"
            className="btn-grad bundi"
          >
              <img
                src={sub}
                alt="wolfy"
                height={80}
                className="mwitu"
              />
        
          </button>
        </section>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="trump">
          <Link to={'/andime'}>
          <img 
            src={bra}
            alt="WOLFGNG"
            height={100}
            width={100}
            className="madem"
          />
          </Link>

          <Link 
            to={'/catalogue'}
            className="poli"
            >© 2026 Wolf GNG</Link>
          <Link 
            to={'/terms'}
            className="poli"
            >Terms & Conditions</Link>
          <Link 
            to={'/refund'}
            className="poli"
            >Refund Policy</Link>
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

export default Ecosytem