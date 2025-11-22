import { Link } from "react-router-dom";
import iconMusic from "../assets/icons/music.svg";
import iconBr from "../assets/icons/br.svg";
import iconFr from "../assets/icons/fr.svg";
import iconUs from "../assets/icons/us.svg";
import menu from "../assets/icons/menu.svg";
import logo from "../assets/images/avatar.svg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Header() {
  let showMenu = false

  useGSAP(() => {
    const menus = document.querySelectorAll('header h2')
    
    const animaLoadMenu = (menu) => {
      const pos = menu.getBoundingClientRect()

      gsap.from(`#${menu.id}`, {
        opacity: 0,
        x:-pos.left,
      })

      gsap.to(`#${menu.id}`, {
        opacity: 0,
        duration: 0.4
      })

      gsap.to(`#${menu.id}`, {
        opacity: 1,
        x: 0,
        duration: 1,
    
      })
    }

    const changeAnimation = (menu, timeline) => {
      const animate = document.querySelector(`#${menu.id} .menu .bg`).dataset
      
      if (animate.change == '0') {
        animate.change = '1'


        const time = setTimeout(() => {
          clearTimeout(time)
          animate.change = '2'
        }, 10)

        menu.addEventListener('mouseleave', (e) => {
          e.stopPropagation()

          if (animate.change == '2') {
            animate.change = '3'

            timeline.to((`#${menu.id} .menu .bg`), {
              backgroundColor: '#28D9DF',
              opacity: 1,
              height: '100%',
              top: '0%',
              duration: 1,
              ease: 'li'
            })
  
            timeline.to((`#${menu.id} .menu .bg`), {
              backgroundColor: '#ffffffff',
              opacity: 1,
              height: '10%',
              top: '45%',
              duration: 0.5,
              ease: 'li'
            })
  
            timeline.to((`#${menu.id} .menu .bg`), {
              backgroundColor: '#ffffffff',
              opacity: 0,
              height: '20%',
              top: '40%',
              duration: 0.1,
              ease: 'li'
            })

            const time = setTimeout(() => {
              clearTimeout(time)
              animate.change = '0'
            }, 2500)
            
          }


        })

        timeline.to((`#${menu.id} .menu .bg`), {
          backgroundColor: '#ffffffff',
          opacity: 0,
          height: '20%',
          top: '40%',
          duration: 0.1,
          ease: 'li'
        })

        timeline.to((`#${menu.id} .menu .bg`), {
          backgroundColor: '#ffffffff',
          opacity: 1,
          height: '10%',
          top: '45%',
          duration: 0.5,
          ease: 'li'
        })

        timeline.to((`#${menu.id} .menu .bg`), {
          backgroundColor: '#28D9DF',
          opacity: 1,
          height: '100%',
          top: '0%',
          duration: 1,
          ease: 'li'
        })
      }
    }

    const animaLoadBtnLang = () => {
      document.querySelectorAll('.button-lang').forEach(btn=>{

        if (btn.className !== 'button-lang on') {
          btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
              opacity: '100%',
              scale: 1.1,
              duration: 0.1,
            })
          })
  
          btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
              opacity: '75%',
              scale: 1,
              duration: 0,
            })
          })
        }
      })

      gsap.to('.button-lang', {
        opacity: '75%',
        duration: 0.6,
        delay: 0.2
      })

      gsap.to('.button-lang.on', {
        opacity: 1,
        duration: 0.6,
        scale: 1.1,
        delay: 0.5
      })
    }

    const animaLoadBtnMusic = () => {
      gsap.to('.button-music', {
        opacity: 1,
        duration: 0.6
      })
    }
    
    if (menus !== undefined) {
      for (let menu of menus) { 
        const timeline = gsap.timeline({})
        const animate = document.querySelector(`#${menu.id} .menu .bg`).dataset

        animaLoadBtnLang(menu)
        animaLoadMenu(menu)
        animaLoadBtnMusic(menu)

        
        menu.addEventListener('mouseenter', (e) => {
          if (animate.change === '0') {
            changeAnimation(menu, timeline)
          }          
        })
      }
    }

    
    const shwoHeader = () => {
      const menuBtn = document.querySelector('.btn-menu')

      menuBtn.addEventListener('click', () => {
        const header = document.querySelector('.header-moblie')
        
        console.log(showMenu)
        
        if (showMenu === false) {
          console.log('test')
          gsap.to(header, {
            duration: 1,
            x: '0%',
            display: 'flex',
            opacity: 1,
          })

          gsap.to(menuBtn, {
            duration: 1,
            opacity: 1,
            scale: 0.95,
            delay: 0.5
          })

        } else {
          console.log('oioio')

          gsap.to(header, {
            duration: 1,
            x: '60%',
            opacity: 0,
            onComplete: () => {gsap.to(header, {duration: 0.1, display: 'none'})}
          })

          gsap.to(menuBtn, {
            duration: 1,
            opacity: 0.9,
            scale: 0.9
          })
        }
      })

    }

    if (document.querySelector('.header-moblie') !== null) {
      gsap.to(document.querySelector('.header-moblie'), {
        duration: 0.1,
        x: '60%',
        
      })
      shwoHeader()
    }
    
  }, [])

  if (window.innerWidth <= 1000) {
    return (
      <>

        <header>
          <div className="logo">
            <div className="bg-img">

              <img src={logo} alt="" />
            </div>

            <span> &lt;VicedArtt/&gt;</span>
          </div>
          <button className="btn-menu" onClick={() => {showMenu = !showMenu}}><img src={menu} alt="" /></button> 


          <div className="header-moblie">

            <nav className="group-menu">
              <h2 className="ocult" id="home">
                <Link className="menu" to='/'>
                  <div data-change='0' className="bg"></div>
                  Home
                </Link>
              </h2>
              <h2 className="ocult" id="projects">
                <Link className="menu"to="/projects">
                  <div data-change='0' className="bg"></div>
                  Projects
                </Link>
              </h2>
              <h2 className="ocult" id="contact">
                <Link className="menu" to="/contact">
                  <div data-change='0' className="bg"></div>
                  Contact
                </Link>
      
              </h2>
              <h2 className="ocult" id="skills">
                <Link className="menu" to="/skills">
                  <div data-change='0' className="bg"></div>
                  Skills
                </Link>
              </h2>
            </nav>

            <div className="button-langs">

              <div className="group-langs">
                <button className="button-lang on" id="lang-us"><img src={iconUs} alt="" /></button>
                <button className="button-lang" id="lang-fr"><img src={iconFr} alt="" /></button>
                <button className="button-lang" id="lang-br"><img src={iconBr} alt="" /></button>
              </div>
              
              <button className="button-music"><img src={iconMusic} alt="" /></button>
      
            </div>
            
            

          </div>
    
        </header>
      </>
    );
  } else {

    return (
      <header>
        
        <nav className="group-menu">
          <h2 className="ocult" id="home">
            <Link className="menu" to='/'>
              <div data-change='0' className="bg"></div>
              Home
            </Link>
          </h2>
          <h2 className="ocult" id="projects">
            <Link className="menu"to="/projects">
              <div data-change='0' className="bg"></div>
              Projects
            </Link>
          </h2>
          <h2 className="ocult" id="contact">
            <Link className="menu" to="/contact">
              <div data-change='0' className="bg"></div>
              Contact
            </Link>
  
          </h2>
          <h2 className="ocult" id="skills">
            <Link className="menu" to="/skills">
              <div data-change='0' className="bg"></div>
              Skills
            </Link>
          </h2>
        </nav>
  
        <div className="button-langs">
          <div className="group-langs">
            <button className="button-lang on" id="lang-us"><img src={iconUs} alt="" /></button>
            <button className="button-lang" id="lang-fr"><img src={iconFr} alt="" /></button>
            <button className="button-lang" id="lang-br"><img src={iconBr} alt="" /></button>
          </div>
  
          <button className="button-music"><img src={iconMusic} alt="" /></button>
        </div>
      </header>
    );
  }

}

export default Header;
