import yuste from "../../../public/assets/bseven-white.png"
import ScrollStack, { ScrollStackItem } from "../../component/ScrollStack";
import CardNav from "../../component/CardNav";
import logo from "../../../public/assets/bseven-black.png"
import { motion } from "framer-motion";
import prada from "../../../public/assets/westy.png";
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
import Carousel from "../../component/Carousel";
import DotsMap from "../components/shared/DotsMap";
import FlowingMenu from "../../component/FlowingMenu";


const Home = () => {
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

   const items = [
    {
      label: "About",
      bgColor: "#08070a",
      textColor: "#fff",
      links: [
        { label: "Block Seven", ariaLabel: "About Company" },
        { label: "Crazy Swazy", ariaLabel: "About me" }
      ]
    },
    {
      label: "Projects", 
       bgColor: "#08070a",
      textColor: "#fff",
      links: [
        { label: "Memflix", ariaLabel: "Featured Projects" },
        { label: "Sheng", ariaLabel: "Project Case Studies" },
        { label: "Kejani", ariaLabel: "Project Case Studies" },
        { label: "Components", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#08070a",
      textColor: "#fff",
      links: [
        { label: "Memeflix", ariaLabel: "Memeflix" },
        { label: "Instagram", ariaLabel: "Instagram" },
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
      ]
    }
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

const demoItems = [
   { link: '#', text: 'Kenya', image: 'https://i.pinimg.com/736x/d4/b5/be/d4b5be857760143e126e76cb976cb391.jpg' },
  { link: '#', text: 'Kanairo', image: 'https://i.pinimg.com/736x/3d/a8/13/3da813f35232d5006c2679eb8d3f0cf9.jpg' },
  { link: '#', text: 'Safari', image: 'https://i.pinimg.com/736x/04/9e/1a/049e1ae543607d239f01b07930103be3.jpg' },
  { link: '#', text: 'Culture', image: 'https://i.pinimg.com/736x/65/6c/ba/656cbafad109b79a05579ec841beb0a8.jpg' }
];



  return (  
    <>
      <section className="online">
           <CardNav
              logo={logo}
              logoAlt="Company Logo"
              items={items}
              baseColor="#fff"
              menuColor="#000"
              buttonBgColor="#111"
              buttonTextColor="#fff"
              ease="circ.out"
              theme="dark"
            />

      <ScrollStack className="card-container">
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
              <ScrollStackItem>
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

              </ScrollStackItem>
              
              <ScrollStackItem itemClassName="twenty">
                <div className="title">

                  <img 
                    src={yuste}
                    alt="Block 7"
                    height={57}
                  />

                  <img
                    src="https://fontmeme.com/permalink/260527/63cf8238.png"
                  />


                </div>

                <div className="friends">
                  <div className="umbwa">
                    <Carousel
                      baseWidth={300}
                      autoplay={false}
                      autoplayDelay={3000}
                      pauseOnHover={false}
                      loop={false}
                      round={false}
                    />
                  </div>

                  <span className="umbwa-genje chingz">
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
                  </span>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="twenty-two">
                <div className="friends-two">

                  <div className="umbwakni">
                    <span className="descri">
                      I create 3d websites built for global visibility for millions of users worldwide.
                    </span>

                    <span className="hedd">
                      click here to take your business global  
                    </span>

                  </div>
                  
                  <div className="umbwa">
                     {/* GLOBE */}
                    <motion.div
                      initial={{ opacity: 0, y: 80 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                        {typeof window !== "undefined" && <DotsMap />}
                    </motion.div>
                  </div>

                </div>
              </ScrollStackItem>
              <ScrollStackItem itemClassName="twenty">
                <div style={{ height: '600px', position: 'relative' }}>
                  <FlowingMenu items={demoItems}
                  speed={57}
                  textColor="#ffffff"
                  bgColor="#000000"
                  marqueeBgColor="#ffffff"
                  marqueeTextColor="#120F17"
                  borderColor="#ffffff"
                />
                </div>
              </ScrollStackItem>
            
            </ScrollStack>

         {/*MAMBOTO
        <motion.div
          className="tooltip"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >    
          <div className="">
            <CircularGallery
              bend={6}
              textColor="#ffffff"
              borderRadius={0.08}
              scrollEase={0.11}
              // Optionally load a custom font for the labels.
              // Accepts a stylesheet URL (e.g. Google Fonts) or a direct font file.
              fontUrl=""
              font="bold 30px Orbitron"
              scrollSpeed={2}
          />
          </div>
        </motion.div>  
         */}


            
        
        <div className="shooting-star"></div>



      </section>
    </>
  );
};

export default Home;