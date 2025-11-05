import Header from "../components/Header";
import logo from "../assets/images/logo.svg";

import iconClose from "../assets/icons/close.svg";
import iconSearch from "../assets/icons/search.svg";
import iconFrontend from "../assets/icons/frontend.svg";
import iconBackend from "../assets/icons/backend.svg";

import img1 from "../assets/images/frontend/boostrap.svg";
import img2 from "../assets/images/frontend/javascript.svg";
import img3 from "../assets/images/frontend/css.svg";

function Skills() {
  const text = ''


  const changeAnima = (e) => {
    const idTime = setTimeout(() => {
      e.className = 'anima-bg fadeout'
      console.log(e.className)
      clearTimeout(idTime)

      const timeDeleteE = setInterval(() => {
        e.className = 'anima-bg delete'
      }, 1500)
    }, 3500)
  }

  const idTime = setInterval(() => {
    let e = document.getElementsByClassName('anima-bg')[0]
    
    if (e !== undefined) {
      changeAnima(e)
      clearInterval(idTime)
    }
  }, 100)

  const changeBorderInput = (e) => {
    console.log('jkklkjkl')
    e.addEventListener('animationend', (e) => {
      const border = document.querySelector('.search-skills .border')

      border.computedStyleMap.display = 'none'
    })
  }

  const changeAnimaInput = (e, state) => {
    if (state === 'click') {
      e.className = 'on'
    } else {
      e.className = ''
    }
  }

  return (
    <>
      <Header/>

      <div className="loading"></div>

      <main className="skills">

        <div className="anima-explore">
          <div className="anima-bg">
            <div className="border-left">
              <div className="border"></div>
            </div>
            <div className="border-top-right-bottom">
              <div className="border"></div>
            </div>

          </div>
        </div>
        <div className="explore">
          <header>
            <label htmlFor="search-skills" className="search-skills">
              <div className="border"></div>
              <img src={iconSearch} alt="" />

              <input 
                onAnimationStart={(e) => {changeBorderInput(e.target)}} type="text" id="search-skills" 
                onClick={(e) => {changeAnimaInput(e.target, 'click')}}
                onMouseLeave={(e) => {changeAnimaInput(e.target, 'fadeout')}}
                placeholder="Search: boostrap..." 
                value={text} 
              />
            </label>

            <span>Skills</span>

            <button className="close">
              <img src={iconClose} alt="" />
            </button>
          </header>

          <div className="group-list-skills">
            <div className="menu-category">
              <button className="category-skills on" id="button-frontend">
                <img src={iconFrontend} alt="" />

                <span className="button-small">Front-end</span>
              </button>

              <button className="category-skills" id="button-backend">
                <img src={iconBackend} alt="" />

                <span className="button-small">Back-end</span>
              </button>
            </div>

            <div className="group-list-skills">
              <div className="list-skills">
                <div className="line-skill">
                  <div className="skill">
                    <img src={img1} alt="" />

                    <span className="caption-small">Boostrap</span>
                  </div>

                  <div className="skill">
                    <img src={img2} alt="" />

                    <span className="caption-small">JavaScript</span>
                  </div>

                  <div className="skill">
                    <img src={img3} alt="" />

                    <span className="caption-small">CSS</span>
                  </div>

                  <div className="skill">
                    <img src={img1} alt="" />

                    <span className="caption-small">Boostrap</span>
                  </div>

                  <div className="skill">
                    <img src={img2} alt="" />

                    <span className="caption-small">JavaScript</span>
                  </div>

                  <div className="skill">
                    <img src={img3} alt="" />

                    <span className="caption-small">CSS</span>
                  </div>
                </div>

                <div className="line-skill">
                  <div className="skill">
                    <img src={img1} alt="" />

                    <span className="caption-small">Boostrap</span>
                  </div>

                  <div className="skill">
                    <img src={img2} alt="" />

                    <span className="caption-small">JavaScript</span>
                  </div>

                  <div className="skill">
                    <img src={img3} alt="" />

                    <span className="caption-small">CSS</span>
                  </div>

                  <div className="skill">
                    <img src={img1} alt="" />

                    <span className="caption-small">Boostrap</span>
                  </div>

                  <div className="skill">
                    <img src={img2} alt="" />

                    <span className="caption-small">JavaScript</span>
                  </div>

                  <div className="skill">
                    <img src={img3} alt="" />

                    <span className="caption-small">CSS</span>
                  </div>
                </div>

                <div className="line-skill">
                  <div className="skill">
                    <img src={img1} alt="" />

                    <span className="caption-small">Boostrap</span>
                  </div>

                  <div className="skill">
                    <img src={img2} alt="" />

                    <span className="caption-small">JavaScript</span>
                  </div>

                  <div className="skill">
                    <img src={img3} alt="" />

                    <span className="caption-small">CSS</span>
                  </div>

                  <div className="skill">
                    <img src={img1} alt="" />

                    <span className="caption-small">Boostrap</span>
                  </div>
                </div>
              </div>

              <div className="scrollbar-container off">
                <div className="scrollbar"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Skills;
