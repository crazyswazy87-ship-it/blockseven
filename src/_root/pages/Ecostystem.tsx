import memeflix from "../../../public/assets/images/memeflix-icon.jpg"
import kejani from "../../../public/assets/images/Franklin Saint.jpeg"
import nature from "../../../public/assets/images/nature.png"
import caty from '../../../public/assets/images/caty.png'

import prev from "../../../public/assets/icons/prev.png"
import next from "../../../public/assets/icons/next.png"
import { useRef } from "react"




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

  return (
    <>
    <div className="container-one">
      
      <div className="slide-one" ref={slideRef}>

        <div className="item-one" 
          style={{
          backgroundImage: `url(${kejani})`,}}>
            <div className="content-one">
              <div className="name-one">Memeflix</div>
              <div className="des-one">A social media driven app that lets you share and read memes</div>
              <button>See more</button>
            </div>
        </div>

        <div className="item-one" 
          style={{
          backgroundImage: `url(${caty})`,}}>
            <div className="content-one">
              <div className="name-one">Kejani</div>
              <div className="des-one">A house hunt app used by kenyans to locate vaccant houses</div>
              <button className="btn-grad">See more</button>
            </div>
        </div>

        <div className="item-one" 
          style={{
          backgroundImage: `url(${nature})`,}}>
            <div className="content-one">
              <div className="name-one">Kejani</div>
              <div className="des-one">A house hunt app used by kenyans to locate vaccant houses</div>
              <button>See more</button>
            </div>
        </div>

        <div className="item-one" 
          style={{
          backgroundImage: `url(${memeflix})`,}}>
            <div className="content-one">
              <div className="name-one">Kejani</div>
              <div className="des-one">A house hunt app used by kenyans to locate vaccant houses</div>
              <button>See more</button>
            </div>
        </div>

        <div className="item-one" 
          style={{
          backgroundImage: `url(${kejani})`,}}>
            <div className="content-one">
              <div className="name-one">Kejani</div>
              <div className="des-one">A house hunt app used by kenyans to locate vaccant houses</div>
              <button>See more</button>
            </div>
        </div>

        <div className="item-one" 
          style={{
          backgroundImage: `url(${memeflix})`,}}>
            <div className="content-one">
              <div className="name-one">Kejani</div>
              <div className="des-one">A house hunt app used by kenyans to locate vaccant houses</div>
              <button>See more</button>
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
   

    
    </>
  )
}

export default Ecostystem