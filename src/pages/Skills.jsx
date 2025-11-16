import Header from "../components/Header";
import logo from "../assets/images/logo.svg";

import iconClose from "../assets/icons/close.svg";
import iconSearch from "../assets/icons/search.svg";
import iconFrontend from "../assets/icons/frontend.svg";
import iconBackend from "../assets/icons/backend.svg";
import Loading from "../components/Loading";
import Cursor from "../components/Cursor";


import img1 from "../assets/images/frontend/boostrap.svg";
import img2 from "../assets/images/frontend/javascript.svg";
import img3 from "../assets/images/frontend/css.svg";
import { useGSAP } from "@gsap/react";

function Skills() {
  useGSAP(() => {
    const time = setInterval(() => {
      if (document.querySelector('.group-list-skills') !== null) {
        clearInterval(time)
  
        document.querySelector('#button-frontend').addEventListener('click', (e) => {
          changeSkills(0)
          animaBtn(e.target)
        })

        document.querySelector('#button-backend').addEventListener('click', (e) => {
          changeSkills(1)
          animaBtn(e.target)
        })

  
      }
    }, 200)

    const changeSkills = (area) => {
      console.log(area)
    }

    const animaBtn = (btn) => {
      const btnsArea = document.querySelector('.category-skills')
    }

  })
  const text = ''


  const changeBg = () => {
      document.querySelector('body').classList.remove('contact')
  }

  return (
    <>
      <Cursor></Cursor>
      <Header/>

      <Loading></Loading>
      

      <main className="skills" onLoad={() => {changeBg()}}>

        <div className="explore">
          <header>
            <div className="menu-category">
              <button className="category-skills on"  id="button-frontend">
                <img src={iconFrontend} alt="" />

                <span className="button-small">Front-end</span>
              </button>

              <button className="category-skills" id="button-backend">
                <img src={iconBackend} alt="" />

                <span className="button-small">Back-end</span>
              </button>
            </div>

            <button className="close">
              <img src={iconClose} alt="" />
            </button>
          </header>

          <div className="group-list-skills">
            <div className="group-list-skills">
              <div className="view-list">

                <div className="list-skills" id="frontEnd">
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

                <div className="list-skills list-off" id="backEnd">
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
              </div>

              <div className="scrollbar-container">
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
