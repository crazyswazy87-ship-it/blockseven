

const Slider = () => {
  return (
    <div>
      <section>
        <div className="head">
          <h2>Welcome crazyswazy</h2>

          <div className="controls">
            <button id="prev" className="nav-btn" aria-label="Prev">‹</button>
            <button id="next" className="nav-btn" aria-label="Next">›</button>
          </div>
        </div>

        <div className="slider">
          <div className="track" id="track">

            <article className="project-card" active>
              <img className="project-card__bg" 
              src="icons/my gpt/chongo.png" 
              alt=""/>
              <div className="project-card__content">
                <img className="project-card__thumb" 
                src="icons/my gpt/majegi.png" 
                alt=""/>
                <div>
                  <h3 className="project-card__title">Headlines</h3>
                  <p className="project-card__desc">@mwiregi on all platforms</p>
                  <button className="project-card__btn">follow</button>
                </div>
              </div>
            </article>

            <article className="project-card" active>
              <img className="project-card__bg" 
              src="icons/my gpt/chongo.png" 
              alt=""/>
              <div className="project-card__content">
                <img className="project-card__thumb" 
                src="icons/my gpt/majegi.png" 
                alt=""/>
                <div>
                  <h3 className="project-card__title">Socials</h3>
                  <p className="project-card__desc">@mwiregi on all platforms</p>
                  <button className="project-card__btn">follow</button>
                </div>
              </div>
            </article>

            <article className="project-card">
              <img className="project-card__bg" 
              src="icons/my gpt/anaku.png" 
              alt=""/>
              <div className="project-card__content">
                <img className="project-card__thumb" 
                src="icons/my gpt/kazoze.png" 
                alt=""/>
                <div>
                  <h3 className="project-card__title">Occupation</h3>
                  <p className="project-card__desc">Crurrently working at Safaricom plc</p>
                  <button className="project-card__btn">SAFARICOM/CFO.</button>
                </div>
              </div>
            </article>

            <article className="project-card">
              <img className="project-card__bg" 
              src="icons/my gpt/dj.png" 
              alt=""/>
              <div className="project-card__content">
                <img className="project-card__thumb" 
                src="icons/my gpt/SPOTIFY TOXIC COVER PHOTO.png" 
                alt=""/>
                <div>
                  <h3 className="project-card__title">Music Genre</h3>
                  <p className="project-card__desc">CAN GET OVER THIS PLAYLIST</p>
                  <button className="project-card__btn">PLAY</button>
                </div>
              </div>
            </article>

            <article className="project-card">
              <img className="project-card__bg" 
              src="icons/my gpt/easy.png" 
              alt=""/>
              <div className="project-card__content">
                <img className="project-card__thumb" 
                src="icons/my gpt/magoods.png" 
                alt=""/>
                <div>
                  <h3 className="project-card__title">Brand</h3>
                  <p className="project-card__desc">Shugli zote</p>
                  <button className="project-card__btn">WE DM</button>
                </div>
              </div>
            </article>

            <article className="project-card">
              <img className="project-card__bg" 
              src="icons/my gpt/juo.png" 
              alt=""/>
              <div className="project-card__content">
                <img className="project-card__thumb" src="icons/my gpt/martel.png" alt=""/>
                <div>
                  <h3 className="project-card__title">Hobbies</h3>
                  <p className="project-card__desc">Selling brainstorming ideas  </p>
                  <button className="project-card__btn">@1k / 5mins brainstormin</button>
                </div>
              </div>
            </article>

            <article className="project-card">
              <img className="project-card__bg" src="icons/my gpt/easy.png" 
              alt=""/>
              <div className="project-card__content">
                <img className="project-card__thumb" 
                src="icons/my gpt/magoods.png" 
                alt=""/>
                <div>
                  <h3 className="project-card__title">Brand</h3>
                  <p className="project-card__desc">Shugli zote</p>
                  <button className="project-card__btn">WE DM</button>
                </div>
              </div>
            </article>

          </div>
        </div>

        <div className="dots" id="dots"></div>
      </section>
    </div>
  )
}

export default Slider