import { useEffect, useRef } from "react";
import "../../../ProjectSlider.css";
import ShinyText from "../../../component/ShinyText";
import Shuffle from "../../../component/Shuffle";

interface Project {
  bg: string;
  thumb: string;
  title: string;
  desc: string;
  btnLabel: string;
}

const PROJECTS: Project[] = [
  {
    bg: "/assets/images/pesosbg.png",
    thumb: "/assets/images/pesoslogo.jpg",
    title: "PESOS",
    desc: "Streetwear brand",
    btnLabel: "View Project",
  },
  {
    bg: "/assets/images/wolfbg.png",
    thumb: "/assets/images/wolflogo.png",
    title: "WOLFGNG",
    desc: "Fitness apparel",
    btnLabel: "View Project",
  },
  {
    bg: "/assets/images/shengbg.jpeg",
    thumb: "/assets/images/sheng.png",
    title: "SHENG AI",
    desc: "AI Sheng translator",
    btnLabel: "View Project",
  },
  {
    bg: "/assets/images/artshordybg.jpg",
    thumb: "/assets/images/artshordylogo.png",
    title: "SHORDY",
    desc: "Creative crafts",
    btnLabel: "View Project",
  },
  {
    bg: "/assets/images/konektbg.png",
    thumb: "/assets/images/konectlogo.png",
    title: "KONEKT",
    desc: "Prepaid Wi-Fi",
    btnLabel: "View Project",
  },
];

export default function ProjectSlider() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    const prev = prevRef.current;
    const next = nextRef.current;
    const dotsBox = dotsRef.current;
    if (!wrap || !track || !prev || !next || !dotsBox) return;

    const cards = Array.from(track.children) as HTMLElement[];

    const isMobile = () => matchMedia("(max-width:767px)").matches;

    dotsBox.innerHTML = "";
    cards.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.onclick = () => activate(i, true);
      dotsBox.appendChild(dot);
    });
    const dots = Array.from(dotsBox.children) as HTMLElement[];

    let current = 0;

    function center(i: number) {
      const card = cards[i];
      const axis: "top" | "left" = isMobile() ? "top" : "left";
      const size: "clientHeight" | "clientWidth" = isMobile()
        ? "clientHeight"
        : "clientWidth";
      const start = isMobile() ? card.offsetTop : card.offsetLeft;
      wrap!.scrollTo({
        [axis]: start - (wrap![size] / 2 - card[size] / 2),
        behavior: "smooth",
      } as ScrollToOptions);
    }

    function toggleUI(i: number) {
      cards.forEach((c, k) => c.toggleAttribute("active", k === i));
      dots.forEach((d, k) => d.classList.toggle("active", k === i));
      prev!.disabled = i === 0;
      next!.disabled = i === cards.length - 1;
    }

    function activate(i: number, scroll: boolean) {
      if (i === current) return;
      current = i;
      toggleUI(i);
      if (scroll) center(i);
    }

    function go(step: number) {
      activate(Math.min(Math.max(current + step, 0), cards.length - 1), true);
    }

    const onPrevClick = () => go(-1);
    const onNextClick = () => go(1);
    prev.onclick = onPrevClick;
    next.onclick = onNextClick;

    const onKeydown = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) go(1);
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) go(-1);
    };
    addEventListener("keydown", onKeydown, { passive: true });

    const hoverHandlers: Array<() => void> = [];
    const clickHandlers: Array<() => void> = [];
    cards.forEach((card, i) => {
      const onEnter = () =>
        matchMedia("(hover:hover)").matches && activate(i, true);
      const onClick = () => activate(i, true);
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("click", onClick);
      hoverHandlers.push(() => card.removeEventListener("mouseenter", onEnter));
      clickHandlers.push(() => card.removeEventListener("click", onClick));
    });

    let sx = 0,
      sy = 0;
    const onTouchStart = (e: TouchEvent) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (isMobile() ? Math.abs(dy) > 60 : Math.abs(dx) > 60)
        go((isMobile() ? dy : dx) > 0 ? -1 : 1);
    };
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchend", onTouchEnd, { passive: true });

    if (isMobile()) dotsBox.hidden = true;

    const onResize = () => center(current);
    addEventListener("resize", onResize);

    toggleUI(0);
    center(0);

    return () => {
      removeEventListener("keydown", onKeydown);
      removeEventListener("resize", onResize);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchend", onTouchEnd);
      hoverHandlers.forEach((off) => off());
      clickHandlers.forEach((off) => off());
      prev.onclick = null;
      next.onclick = null;
    };
  }, []);

  return (
    <section>
      <div className="head">
        <div className="controls">
          <button ref={prevRef} id="prev" className="nav-btn" aria-label="Prev">
            ‹
          </button>
          <button ref={nextRef} id="next" className="nav-btn" aria-label="Next">
            ›
          </button>
        </div>
      </div>

      <div className="slider" ref={wrapRef}>
        <div className="track" ref={trackRef}>
          {PROJECTS.map((p, i) => (
            <article className="project-card" key={p.title} {...(i === 0 ? { active: "" } : {})}>
              <img className="project-card__bg" src={p.bg} alt="" />
              <div className="project-card__content">
                <img className="project-card__thumb" src={p.thumb} alt="" />
                <div>
                  <h3 className="project-card__title">{p.title}</h3>
                  <p>
                      <ShinyText
                      text={p.desc}
                      speed={3}
                      delay={0}
                      color="#ffff"
                      shineColor="#e7e433"
                      spread={120}
                      direction="left"
                      yoyo={false}
                      pauseOnHover
                      disabled={false}
                      className="project-card__desc"
                    />
                  </p>
                  <button className="project-card__btn">
                     <Shuffle
                      text={p.btnLabel}
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
                      
                    />
                    </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="dots" ref={dotsRef} id="dots" />
    </section>
  );
}
