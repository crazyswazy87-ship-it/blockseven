import { FaYoutube } from "react-icons/fa"
import { FaFacebook, FaInstagram, FaTiktok, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa6"


const Topbar = () => {
  return (
    <>
    <div className="topbar">
  
                <div className="quen">
                <a
                  href="#"
                  className="text-white text-2xl hover:scale-110 transition-all duration-300"
                >
                  <FaTwitter />
                </a>
                </div>
      
                <div className="quen">
                <a
                  href="#"
                  className="text-white text-2xl hover:scale-110 transition-all duration-300"
                >
                  <FaInstagram />
                </a>
                </div>
      
                <div className="quen">
                <a
                  href="#"
                  className="text-white text-2xl hover:scale-110 transition-all duration-300"
                >
                  <FaWhatsapp />
                </a>
                </div>

                <div className="quen">
                <a
                  href="#"
                  className="text-white text-2xl hover:scale-110 transition-all duration-300"
                >
                  <FaYoutube />
                </a>
                </div>
      
                <div className="quen">
                <a
                  href="#"
                  className="text-white text-2xl hover:scale-110 transition-all duration-300"
                >
                  <FaTiktok />
                </a>
                </div>

                <div className="quen">
                <a
                  href="#"
                  className="text-white text-2xl hover:scale-110 transition-all duration-300"
                >
                  <FaTwitch />
                </a>
                </div>

                <div className="quen">
                <a
                  href="#"
                  className="text-white text-2xl hover:scale-110 transition-all duration-300"
                >
                  <FaFacebook />
                </a>
                </div>

    </div>
    </>
  )
}

export default Topbar