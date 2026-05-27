import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import yuste from "../../../public/assets/bseven-white.png"

const Home = () => {

  const finalText = "INSPIRED BY THE FEAR OF BEING AVERAGE";


  const [text, setText] = useState("");

 useEffect(() => {

  let index = 0;

  const interval = setInterval(() => {

    setText(finalText.slice(0, index));

    index++;

    if (index > finalText.length) {
      clearInterval(interval);
    }

  }, 100);

  return () => clearInterval(interval);

}, []);

  return (
    <>
      <section className="online">

        <div className="meakins">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
          <div id="stars5"></div>
        </div>

        <div className="shooting-star"></div>

        <div className="title">

          <img 
            src={yuste}
            alt="Block 7"
            height={90}
          />

          <img
            src="https://fontmeme.com/permalink/260527/63cf8238.png"
          />

          <span className="note">
            {text}
          </span>

          <br />

          <Link  to='/ecosystem'className="start-btn btn-grad reveal-btn">
            EXPLORE BEYOND
          </Link>

        </div>

      </section>
    </>
  );
};

export default Home;