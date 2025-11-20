import Header from "../components/Header";

import iconClose from "../assets/icons/close.svg";
import iconFrontend from "../assets/icons/frontend.svg";
import iconBackend from "../assets/icons/backend.svg";
import Loading from "../components/Loading";
import Cursor from "../components/Cursor";


import boostrap from "../assets/images/frontend/boostrap.svg";
import angular from "../assets/images/frontend/angular.svg";
import react from "../assets/images/frontend/react.svg";
import next from "../assets/images/frontend/nextjs.svg";
import html from "../assets/images/frontend/html.svg";
import css from "../assets/images/frontend/css.svg";
import rive from "../assets/images/frontend/rive.svg";
import figma from "../assets/images/frontend/figma.svg";
import solidjs from "../assets/images/frontend/solid.svg";
import javascript from "../assets/images/frontend/javascript.svg";
import vue from "../assets/images/frontend/vue.svg";
import scss from "../assets/images/frontend/scss.svg";
import tailwindcss from "../assets/images/frontend/tailwindcss.svg";
import reactNatove from "../assets/images/frontend/reactNative.svg";
import Eletron from "../assets/images/frontend/electronjs.svg";

import nodejs from "../assets/images/backend/nodejs.svg";
import mysql from "../assets/images/backend/mysql.svg";
import mongodb from "../assets/images/backend/mongodb.svg";
import golang from "../assets/images/backend/golang.svg";
import docker from "../assets/images/backend/docker.svg";
import php from "../assets/images/backend/php.svg";
import rust from "../assets/images/backend/rust.svg";



import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Skills() {
  useGSAP(() => {
    let posView = 0
    let indice = 0
    const time = setInterval(() => {
      if (document.querySelector('.group-list-skills') !== null) {
        clearInterval(time)
  

        document.querySelector('#button-frontend').addEventListener('mouseenter', (e) => {
          animaBtn(e.target, '0')
        })

        document.querySelector('#button-backend').addEventListener('mouseenter', (e) => {
          animaBtn(e.target, '1')
        })

        
        scroll()
        document.querySelector('.scrollbar').style.height = '100%'

        configList()
        configBtnsSkills()
        configViewEx()

        configSkills()

        
        
        
      } else if (document.querySelector('.area-list') !== null) {
        clearInterval(time)

        configCarroselSkills()
      }
    }, 200)

    const configCarroselSkills = () => {
      const listsSkills = document.querySelectorAll('.list-skills')

      for (const listSkill of listsSkills) {
        if (listSkill.id === 'frontEnd') {
          const timeline = gsap.timeline({repeat: -1, yoyo: true})
          timeline.fromTo(listSkill, {
            duration: 8,
            x: '2%',
            ease: 'none',

          }, {
            duration: 8,
            x: '-115%',
            ease: 'none',
          })

          

        } else if (listSkill.id === 'backEnd') {
          const timeline = gsap.timeline({repeat: -1, yoyo: true})
          timeline.fromTo(listSkill, {
            duration: 3,
            x: '2%',
            ease: 'none',

          }, {
            duration: 3,
            x: '-18%',
            ease: 'none',
          })
        }

      }
    }
    
    const configBtnsSkills = () => {
      const btnsAreas = document.querySelectorAll('.category-skills')

      for (const btn of btnsAreas) {
        if (btn.dataset.selected === 'yes') {
          gsap.to(btn, {
            duration: 1,
            border: '0.2rem solid #28D9DF',
            opacity: 1,
            padding: '1rem 3rem'
          })
        }
      }

    }

    const configSkills = () => {
      const timeline = gsap.timeline({})
      const listsSkills = document.querySelectorAll('.list-skills')

      for (const listSkills of listsSkills) {
        console.log(listSkills.dataset.display + ' - ' + listSkills.dataset.id)
        
        if (listSkills.dataset.display === 'yes') {
          console.log('true')
          const skills = listSkills.querySelectorAll('.skill')

          for (const skill of skills) {
            timeline.to(skill, {
                duration: 0.2,
                opacity: 0.8,
                scale: 1,
              })
          }
        } 
      }


    }

    const configViewEx = () => {
      const listsSkills = document.querySelectorAll('.list-skills')
      const cursor = document.querySelector('.cursor')

      for (const listSkill of listsSkills) {
        if (listSkill.dataset.display === 'yes') {
          const cardsSkills = document.querySelectorAll(`#${listSkill.id} .skill`)
          const boxInfo = document.querySelector('.container-ex')
          const contentTextBox = document.querySelector('.group-text-ex')
          
          
          for (const skill of cardsSkills) {            
            skill.addEventListener('mouseenter', (e) => {

              const proeficity = parseInt(skill.dataset.proficiancy, 10);
              const fillGraphic = proeficity * 4

              gsap.to('.graphic',{
                  duration: 0.1,
                   background: `conic-gradient(#9D34FF 0deg 0deg,
                transparent 0}deg 0deg)`
                })

              const time = setInterval(() => {
                if (indice < proeficity) {
                  indice++

                  boxInfo.querySelector('span').innerText = indice + '%'
                } else {
                  clearInterval(time)
                }
              }, 10)

              gsap.to('.graphic',{
                duration: 2,
                background: `conic-gradient(#9D34FF ${fillGraphic}deg 0deg,
                transparent ${fillGraphic}deg 0deg)`
                
              })

              skill.addEventListener('mousemove', () => {

                if (skill.dataset.reverse === 'yes') {
                  gsap.to(contentTextBox, {
                    duration: 0.1,
                    alignItems: 'end',
                  })

                  

                  gsap.to(boxInfo, {
                    duration: 1,
                    flexDirection: 'row-reverse',
                    opacity: 1,
                    y: cursor.getBoundingClientRect().top - 60,
                    x: cursor.getBoundingClientRect().right - boxInfo.offsetWidth
                  })

                  gsap.to(boxInfo, {
                    
                  })
                } else {
                  gsap.to(contentTextBox, {
                    duration: 0.1,
                    alignItems: 'start'
                  })

                  gsap.to(boxInfo, {
                    duration: 1,

                    flexDirection: 'row',
                    opacity: 1,
                    y: cursor.getBoundingClientRect().top - 60,
                    x: cursor.getBoundingClientRect().right
                  })
                }

              })

              

              gsap.to(skill, {
                duration: 0.2,
                opacity: 1,
              })

            })

            skill.addEventListener('mouseleave', () => {
              indice = 0
              gsap.to('.graphic',{
                  duration: 1,
                   background: `conic-gradient(#9D34FF 0deg 0deg,
                transparent 0}deg 0deg)`
                })

              if (skill.dataset.reverse == 'yes') {
                gsap.to(boxInfo, {
                  duration: 1,
                  opacity: 0,
                  y: cursor.getBoundingClientRect().top - 60,
                  x: cursor.getBoundingClientRect().right - boxInfo.offsetWidth
                })

              } else {
                gsap.to(boxInfo, {
                  duration: 1,
                  opacity: 0,
                  y: cursor.getBoundingClientRect().top - 60,
                  x: cursor.getBoundingClientRect().right
                })

                gsap.to(skill, {
                  duration: 0.5,
                  opacity: 0.8
                })

                
              }
            })
          }
        }
      }
    }

    const configList = () => {
      const listSkills = document.querySelectorAll('.list-skills')

      for (const listSkill of listSkills) {
        if (listSkill.dataset.display === 'yes') {
          gsap.to(listSkill, {
            duration: 1,
            opacity: 1,
            display: 'grid',
          })

          gsap.to(listSkill, {
            duration: 0.1,
            y: '0%'
          })
        } else {
          gsap.to(listSkill, {
            duration: 0.1,
            display: 'none',
            opacity: 0,
            y: '100%'
          })
        }

      }
    }

    const scroll = () => {
      const viewScroll = document.querySelector('.list-skills')
      const scrollBar = document.querySelector('.scrollbar')

      console.log(viewScroll.getBoundingClientRect().bottom)

      const skills = document.querySelectorAll('.skill')

      for (const skill of skills) {
        if (skill.dataset.end === 'yes') {
          const oberser = new IntersectionObserver(lockScroll, {
            root: document.querySelector('.list-skills'),
            threshold: 1
          })

          oberser.observe(skill)
        }
      }

      viewScroll.addEventListener('wheel', (e) => {


        if (viewScroll.dataset.whellOff !== 'off') {
          if (e.deltaY > 0) {
            console.log(posView)
            if (posView < 100) {
  
  
              gsap.to(viewScroll, {
                duration: 1,
                y: `-${posView = posView + 10}%`
              })
  
              gsap.to(scrollBar, {
                duration: 1,
                y: posView
              })
            }
          } else {
            if (posView > 0) {
  
              gsap.to(viewScroll, {
                duration: 1,
                y: `-${posView = posView - 10}%`

                
              })
  
              gsap.to(scrollBar, {
                duration: 1,
                y: posView
              })
            }
          }
        }



      })
    }

    const changeSkills = (area) => {
      const timeline = gsap.timeline({})
      const listsSkills = document.querySelectorAll('.list-skills')
      
      for (const listSkill of listsSkills) {
        
        if (listSkill.dataset.id === area) {
          const skills = listSkill.querySelectorAll('.skill')
          listSkill.dataset.display = 'yes'

          console.log('testeteste')

          gsap.to(listSkill, {
            duration: 0.2, 
            display: 'grid',
            opacity: 0.8,
            y: '0'
          })

          
          for (const skill of skills) {
            timeline.to(skill, {
                duration: 0.2,
                opacity: 1,
                scale: 1,
              })
          }

        } else {
           gsap.to(listSkill, {
            duration: 0.1, 
            y: '109%',
            opacity: 0,
            display: 'none'
          })

          const skills = listSkill.querySelectorAll('.skill')

          for (const skill of skills) {
            gsap.to(skill, {
                duration: 0.1,
                opacity: 0,
                scale: 1.3,
              })
          }





          listSkill.dataset.display = 'no'
        }
      }
    }

    const lockScroll = () => {
      console.log('teste 123')
    }

    const animaBtn = (btnSelected, area) => {
      const btnsArea = document.querySelectorAll('.category-skills')

      for (const btn of btnsArea) {
        if (btn.dataset.selected !== 'yes') {
          gsap.to(btn, {
            duration: 1,
            border: '3px solid #ffffff00',
            padding: '1rem 2.2rem',
            opacity: 0.9
          })
        }
      }

      
      gsap.to(btnSelected, {
        duration: 1,
        border: '0.2rem solid #28D9DF',
        opacity: 1,
        padding: '1rem 3rem'
      })
      
      btnSelected.addEventListener('mouseleave', () => {
        if (btnSelected.dataset.selected !== 'yes') {
          gsap.to(btnSelected, {
              duration: 1,
              border: '3px solid #ffffff00',
              padding: '1rem 2.2rem',
              opacity: 0.9
            })
        }
      })

      btnSelected.addEventListener('click', () => {
        for (const btn of btnsArea) {
          btn.dataset.selected = 'no'

          gsap.to(btn, {
            duration: 1,
            border: '3px solid #ffffff00',
            padding: '1rem 2.2rem',
            opacity: 0.9
          })
        }

        gsap.to(btnSelected, {
          duration: 1,
          border: '0.2rem solid #28D9DF',
          opacity: 1,
          padding: '1rem 3rem'
        })

        btnSelected.dataset.selected = 'yes'
        changeSkills(area)
      })

    }

  })


  const changeBg = () => {
      document.querySelector('body').classList.remove('contact')
  }

  if (window.innerWidth <= 1300) {
    return (
      <>
        <Cursor></Cursor>
        <Header/>

        <Loading></Loading>
        

        <main className="skills" onLoad={() => {changeBg()}}>
          
          <div className="container-ex" data-display='no'>
            <div className="graphic">
              <span className="fontPixel"></span>
            </div>

            <div className="group-text-ex">
              <span className="heading-ex fontPixel">Proficiency</span>

              <span className="data-ex label-small">Experience: 3 years</span>
            </div>


          </div>


          <div className="explore">
            <h1>Skills</h1>

            <div className="view-list">
              <div className="area-list" id="areaFackEnd">
                <h2>Back-end</h2>                

                <div className="list-skills" data-wheel-x='yes' data-id='0' data-display='yes' data-whell-off='no' id="frontEnd">
                  
                  <div className="skill" data-proficiancy='70'>
                    <img src={react} alt="" />

                    <span className="caption-small">ReactJS</span>
                  </div>

                  <div className="skill" data-proficiancy='30'>
                    <img src={next} alt="" />

                    <span className="caption-small">NextJS</span>
                  </div>

                  <div className="skill" data-proficiancy='65'>
                    <img src={javascript} alt="" />

                    <span className="caption-small">JavaScript</span>
                  </div>

                  <div className="skill" data-proficiancy='100' data-reverse='yes'>
                    <img src={html} alt="" />

                    <span className="caption-small">HTML</span>
                  </div>

                  <div className="skill" data-proficiancy='85' data-reverse='yes'>
                    <img src={css} alt="" />

                    <span className="caption-small">CSS</span>
                  </div>

                  <div className="skill" data-proficiancy='100' data-reverse='yes'>
                    <img src={scss} alt="" />

                    <span className="caption-small">SCSS</span>
                  </div>

                  <div className="skill" data-proficiancy='100'>
                    <img src={figma} alt="" />

                    <span className="caption-small">Figma</span>
                  </div>

                  <div className="skill" data-proficiancy='25'>
                    <img src={rive} alt="" />

                    <span className="caption-small">Rive</span>
                  </div>

                  <div className="skill" data-proficiancy='65'>
                    <img src={boostrap} alt="" />

                    <span className="caption-small">JavaScript</span>
                  </div>

                  <div className="skill" data-proficiancy='47' data-reverse='yes'>
                    <img src={angular} alt="" />

                    <span className="caption-small">AngularJS</span>
                  </div>

                  <div className="skill" data-proficiancy='64' data-reverse='yes'>
                    <img src={vue} alt="" />

                    <span className="caption-small">VueJS</span>
                  </div>

                  <div className="skill" data-proficiancy='81' data-reverse='yes'>
                    <img src={tailwindcss} alt="" />

                    <span className="caption-small">Tailwind</span>
                  </div>

                  <div className="skill" data-proficiancy='12'>
                    <img src={solidjs} alt="" />

                    <span className="caption-small">SolidJS</span>
                  </div>

                  <div className="skill" data-proficiancy='76'>
                    <img src={reactNatove} alt="" />

                    <span className="caption-small">React native</span>
                  </div>

                  <div className="skill" data-proficiancy='53' id="end">
                    <img src={Eletron} alt="" />
                    <span className="caption-small">Eletron</span>
                  </div>


                </div>
              </div>

              <div className="area-list" id="areaBackEnd">
                <h2>Back-end</h2>

                <div className="list-skills" data-wheel-x='yes' data-id='1' data-display='no' data-whell-off='off' id="backEnd">
                  
                  <div className="skill" data-proficiancy='95'>
                    <img src={nodejs} alt="" />

                    <span className="caption-small">NodeJS</span>
                  </div>

                  <div className="skill" data-proficiancy='100'>
                    <img src={mysql} alt="" />

                    <span className="caption-small">MySQL</span>
                  </div>

                  <div className="skill" data-proficiancy='100'>
                    <img src={mongodb} alt="" />

                    <span className="caption-small">MongoDB</span>
                  </div>

                  <div className="skill" data-proficiancy='74' data-reverse='yes'>
                    <img src={docker} alt="" />

                    <span className="caption-small">Docker</span>
                  </div>

                  <div className="skill" data-proficiancy='10' data-reverse='yes'>
                    <img src={golang} alt="" />

                    <span className="caption-small">GoLangS</span>
                  </div>

                  <div className="skill" data-proficiancy='5' data-reverse='yes'>
                    <img src={rust} alt="" />

                    <span className="caption-small">Rust</span>
                  </div>

                  <div className="skill" data-proficiancy='77'id="end">
                    <img src={php} alt="" />

                    <span className="caption-small">PHP</span>
                  </div>

                </div>
              </div>


            </div>
          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
        <Cursor></Cursor>
        <Header/>
  
        <Loading></Loading>
        
  
        <main className="skills" onLoad={() => {changeBg()}}>
          
          <div className="container-ex" data-display='no'>
            <div className="graphic">
              <span className="fontPixel"></span>
            </div>
  
            <div className="group-text-ex">
              <span className="heading-ex fontPixel">Proficiency</span>
  
              <span className="data-ex label-small">Experience: 3 years</span>
            </div>
  
  
          </div>
  
  
  
          <div className="explore">
            <header>
              <div className="menu-category">
                <button className="category-skills" data-selected='yes' id="button-frontend">
                  <img src={iconFrontend} alt="" />
  
                  <span className="button-small">Front-end</span>
                </button>
  
                <button className="category-skills" id="button-backend">
                  <img src={iconBackend} alt="" />
  
                  <span className="button-small">Back-end</span>
                </button>
              </div>
  
              <span>Skills</span>
  
              <button className="close">
                <img src={iconClose} alt="" />
              </button>
            </header>
  
            <div className="group-list-skills">
              <div className="view-list">
  
                <div className="list-skills" data-id='0' data-display='yes' data-whell-off='no' id="frontEnd">
                  
                  <div className="skill" data-proficiancy='70'>
                    <img src={react} alt="" />
  
                    <span className="caption-small">ReactJS</span>
                  </div>
  
                  <div className="skill" data-proficiancy='30'>
                    <img src={next} alt="" />
  
                    <span className="caption-small">NextJS</span>
                  </div>
  
                  <div className="skill" data-proficiancy='65'>
                    <img src={javascript} alt="" />
  
                    <span className="caption-small">JavaScript</span>
                  </div>
  
                  <div className="skill" data-proficiancy='100' data-reverse='yes'>
                    <img src={html} alt="" />
  
                    <span className="caption-small">HTML</span>
                  </div>
  
                  <div className="skill" data-proficiancy='85' data-reverse='yes'>
                    <img src={css} alt="" />
  
                    <span className="caption-small">CSS</span>
                  </div>
  
                  <div className="skill" data-proficiancy='100' data-reverse='yes'>
                    <img src={scss} alt="" />
  
                    <span className="caption-small">SCSS</span>
                  </div>
  
                   <div className="skill" data-proficiancy='100'>
                    <img src={figma} alt="" />
  
                    <span className="caption-small">Figma</span>
                  </div>
  
                   <div className="skill" data-proficiancy='25'>
                    <img src={rive} alt="" />
  
                    <span className="caption-small">Rive</span>
                  </div>
  
                   <div className="skill" data-proficiancy='65'>
                    <img src={boostrap} alt="" />
  
                    <span className="caption-small">JavaScript</span>
                  </div>
  
                  <div className="skill" data-proficiancy='47' data-reverse='yes'>
                    <img src={angular} alt="" />
  
                    <span className="caption-small">AngularJS</span>
                  </div>
  
                  <div className="skill" data-proficiancy='64' data-reverse='yes'>
                    <img src={vue} alt="" />
  
                    <span className="caption-small">VueJS</span>
                  </div>
  
                  <div className="skill" data-proficiancy='81' data-reverse='yes'>
                    <img src={tailwindcss} alt="" />
  
                    <span className="caption-small">Tailwind</span>
                  </div>
  
                  <div className="skill" data-proficiancy='12'>
                    <img src={solidjs} alt="" />
  
                    <span className="caption-small">SolidJS</span>
                  </div>
  
                  <div className="skill" data-proficiancy='76'>
                    <img src={reactNatove} alt="" />
  
                    <span className="caption-small">React native</span>
                  </div>
  
                  <div className="skill" data-proficiancy='53' data-end='yes'>
                    <img src={Eletron} alt="" />
                    <span className="caption-small">Eletron</span>
                  </div>
  
  
                </div>
  
                <div className="list-skills" data-id='1' data-display='no' data-whell-off='off' id="backEnd">
                  
                  <div className="skill" data-proficiancy='95'>
                    <img src={nodejs} alt="" />
  
                    <span className="caption-small">NodeJS</span>
                  </div>
  
                  <div className="skill" data-proficiancy='100'>
                    <img src={mysql} alt="" />
  
                    <span className="caption-small">MySQL</span>
                  </div>
  
                  <div className="skill" data-proficiancy='100'>
                    <img src={mongodb} alt="" />
  
                    <span className="caption-small">MongoDB</span>
                  </div>
  
                  <div className="skill" data-proficiancy='74' data-reverse='yes'>
                    <img src={docker} alt="" />
  
                    <span className="caption-small">Docker</span>
                  </div>
  
                  <div className="skill" data-proficiancy='10' data-reverse='yes'>
                    <img src={golang} alt="" />
  
                    <span className="caption-small">GoLangS</span>
                  </div>
  
                  <div className="skill" data-proficiancy='5' data-reverse='yes'>
                    <img src={rust} alt="" />
  
                    <span className="caption-small">Rust</span>
                  </div>
  
                   <div className="skill" data-proficiancy='77'>
                    <img src={php} alt="" />
  
                    <span className="caption-small">PHP</span>
                  </div>
  
                </div>
              </div>
  
              <div className="scrollbar-container">
                <div className="scrollbar"></div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

}

export default Skills;
