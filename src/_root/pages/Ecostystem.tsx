import memeflix from "../../../public/assets/images/memeflix-icon.jpg"
import kejani from "../../../public/assets/images/Franklin Saint.jpeg"
//import nature from "../../../public/assets/images/nature.png"
import sheng from "../../../public/assets/images/sheng.png"
import basa from "../../../public/assets/images/b77.png"
import keja from "../../../public/assets/images/kej.png"

import prev from "../../../public/assets/icons/previous.svg"
import next from "../../../public/assets/icons/nextt.svg"
import { useRef } from "react"
//import { ScrollChoreography } from "../../component/ScrollChoreography"
import FlowingMenu from "../../component/FlowingMenu"
import ShinyText from "../../component/ShinyText"
import { RippleTransition } from "../../component/RippleTransition"
import { FaApple, FaGooglePlay } from "react-icons/fa"
import  blocksaba  from "../../../public/assets/images/bseven-white.png"



const Ecostystem = () => {
  const slideRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
  if (!slideRef.current) return;

  const items = slideRef.current.querySelectorAll(".item-one");

  if (items.length > 0) {
    slideRef.current.appendChild(items[0]);
  }
};

const handlePrev = () => {
  if (!slideRef.current) return;

  const items = slideRef.current.querySelectorAll(".item-one");

  if (items.length > 0) {
    slideRef.current.prepend(items[items.length - 1]);
  }
};

const images = {
  topLeft: "https://images.unsplash.com/photo-1741454570867-4a10f31fc5e3?q=100&w=2832&fm=webp&auto=format&fit=crop",
  topRight: "https://images.unsplash.com/photo-1755456068400-fbcdce2f795a?q=100&w=2832&fm=webp&auto=format&fit=crop",
  bottomLeft: "https://images.unsplash.com/photo-1755456068249-13d384440902?q=100&w=2832&fm=webp&auto=format&fit=crop",
  bottomRight: "https://images.unsplash.com/photo-1741454570904-a22d9d6ea511?q=100&w=2832&fm=webp&auto=format&fit=crop",
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

const imagez = [
  "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=85&w=1800",
  "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&q=85&w=1800",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=85&w=1800",
]


  return (
    <>
    <div className="home-container">
    <div className="heroo">

      <div className="container-one">
        
        <div className="slide-one" ref={slideRef}>

          <div className="item-one" 
            style={{
            backgroundImage: `url(${basa})`,}}>
              <div className="content-one">
                <div className="name-one">Block Seven</div>
                <div className="des-one">
                  A unified digital ecosystem powering innovative products that simplify everyday life.
                </div>
                <div className="store-buttons">
                  <button className="store-btn apple">
                  <img 
                    src={blocksaba}
                    alt="b7"
                    className="cent"
                  />
                  <div>
                    <span className="rusha">explore</span>
                    <strong>Ecosystems</strong>
                  </div>
                </button>
                </div>
              </div>
          </div>

          <div className="item-one" 
            style={{
            backgroundImage: `url(${memeflix})`,}}>
              <div className="content-one">
                <div className="name-one">Memeflix</div>
                <div className="des-one">
                  A modern social platform where users discover, create, and share trending memes.
                </div>
                <div className="store-buttons">
                  <button className="store-btn apple">
                  <img 
                    src={blocksaba}
                    alt="b7"
                    className="cent"
                  />
                  <div>
                    <span className="rusha">explore</span>
                    <strong>Ecosystems</strong>
                  </div>
                </button>
                </div>
              </div>
          </div>

          <div className="item-one" 
            style={{
            backgroundImage: `url(${keja})`,}}>
              <div className="content-one">
                <div className="name-one">Kejani</div>
                <div className="des-one">
                  A smart property discovery platform that helps Kenyans find verified rental homes with ease.
                </div>
                <div className="store-buttons">
                <button className="store-btn apple">
                  <FaApple className="store-icon" />
                  <div>
                    <span className="rusha">Download on the</span>
                    <strong>App Store</strong>
                  </div>
                </button>

                <button className="store-btn google">
                  <FaGooglePlay className="store-icon" />
                  <div>
                    <span className="rusha">GET IT ON</span>
                    <strong>Google Play</strong>
                  </div>
                </button>
              </div>
              </div>
          </div>

          <div className="item-one" 
            style={{
            backgroundImage: `url(${memeflix})`,}}>
              <div className="content-one">
                <div className="name-one">Doba</div>
                <div className="des-one">
                  A seamless music streaming platform for discovering, listening to, and downloading your favorite tracks.
                </div>
                <div className="store-buttons">
                <button className="store-btn apple">
                  <FaApple className="store-icon" />
                  <div>
                    <span className="rusha">Download on the</span>
                    <strong>App Store</strong>
                  </div>
                </button>

                <button className="store-btn google">
                  <FaGooglePlay className="store-icon" />
                  <div>
                    <span className="rusha">GET IT ON</span>
                    <strong>Google Play</strong>
                  </div>
                </button>
              </div>
              </div>
          </div>

          <div className="item-one" 
            style={{
            backgroundImage: `url(${kejani})`,}}>
              <div className="content-one">
                <div className="name-one">CCC</div>
                <div className="des-one">
                  An intelligent cost estimation platform for calculating, organizing, and managing project expenses.
                </div>
                <div className="store-buttons">
                <button className="store-btn apple">
                  <FaApple className="store-icon" />
                  <div>
                    <span className="rusha">Download on the</span>
                    <strong>App Store</strong>
                  </div>
                </button>

                <button className="store-btn google">
                  <FaGooglePlay className="store-icon" />
                  <div>
                    <span className="rusha">GET IT ON</span>
                    <strong>Google Play</strong>
                  </div>
                </button>
              </div>
              </div>
          </div>

          <div className="item-one" 
            style={{
            backgroundImage: `url(${sheng})`,}}>
              <div className="content-one">
                <div className="name-one">Sheng AI</div>
                <div className="des-one">
                  An intelligent language assistant that bridges Sheng, English, and Swahili through fast, accurate, and context-aware translations.
                </div>
                <div className="store-buttons">
                <button className="store-btn apple">
                  <FaApple className="store-icon" />
                  <div>
                    <span className="rusha">Download on the</span>
                    <strong>App Store</strong>
                  </div>
                </button>

                <button className="store-btn google">
                  <FaGooglePlay className="store-icon" />
                  <div>
                    <span className="rusha">GET IT ON</span>
                    <strong>Google Play</strong>
                  </div>
                </button>
              </div>
              </div>
          </div>

        </div>

        <div className="bofya">
          <button className="prev" onClick={handlePrev}>
            <img 
              src={prev}
              alt="Prev"
              className="john"
            />
          </button>
          <button className="next" onClick={handleNext}>
            <img 
              src={next}
              alt="Next"
              className="cena"
            />
          </button>
        </div>
      </div>

     </div>
     
    <div className="scroll-section">

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

          <RippleTransition
            images={imagez}
            className="h-[520px] w-full"
            autoPlay
            autoPlayInterval={3200}
            autoPlayOrigin="random"
            duration={1.4}
            pinch
          />

        </div>

     {/* Next section  
      <section className="scroll-section">
        <ScrollChoreography images={images} />
      </section>
     */}


    
    </div>
    

    
    </>
  )
}

export default Ecostystem