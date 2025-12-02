const iconMusic = "/icons/music.svg";

const menu = "/icons/menu.svg";
const logo = "/images/avatar.svg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [mobile, setMobile] = useState(false)
  const tComponents = useTranslations("Components")
  const pathname = usePathname()
  const lang = pathname.split("/")[1]
  const maxVolume = 0.4
  let volume = 0
  let lock = 0

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setMobile(true)
    }
  }, [])

  let showMenu = true

  useGSAP(() => {
    const menus = document.querySelectorAll('header h2')

    const animaLoadMenu = (menu) => {
      const pos = menu.getBoundingClientRect()

      gsap.from(`#${menu.id}`, {
        opacity: 0,
        x: -pos.left,
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
      document.querySelectorAll('.button-lang').forEach(btn => {
        if (btn.dataset.lang === lang) {
          btn.classList.add("on")
        } else {
          btn.classList.remove("on")
        }

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
        opacity: 0.6,
        scale: 1,
        duration: 0.6
      })
    }

    const animaBtnMusic = () => {
      const btnMusic = document.querySelector(".button-music")

      if (JSON.parse(sessionStorage.getItem('audio')) !== null) {
        if (JSON.parse(sessionStorage.getItem('audio')).play === "true") {
          gsap.to(btnMusic, {
            duration: 1,
            scale: 1.2,
            opacity: 1
          })
        } else if (JSON.parse(sessionStorage.getItem('audio')).play === "false") {
          btnMusic.addEventListener("mouseenter", () => {
            gsap.to(btnMusic, {
              duration: 0.5,
              scale: 1.1,
              opacity: 1
            })
          })
        }
  
        btnMusic.addEventListener("mouseleave", () => {        
  
          if (JSON.parse(sessionStorage.getItem('audio')).play === "false") {
            gsap.to(btnMusic, {
              duration: 0.5,
              scale: 1,
              opacity: 0.6
            })
          }
        })

        function configMusic () {
          const audio = document.querySelector(".musicPlayer")
  
          const fadeinVolume = () => {
            sessionStorage.setItem('audio', JSON.stringify({
              currentTime: audio.currentTime,
              duration: audio.duration,
              play: audio.dataset.play
            }))
  
            console.log("player")
  
            const delay = setInterval(() => {  
              if (audio.volume >= maxVolume - 0.1) {
                clearInterval(delay)
              } else {
                volume = volume + 0.1
                audio.volume = volume
              }
            }, 50)
          }
  
          const fadeoutVolume = () => {
            sessionStorage.setItem('audio', JSON.stringify({
              currentTime: audio.currentTime,
              duration: audio.duration,
              play: audio.dataset.play
            }))
  
            console.log("pausedd")
  
            const delay = setInterval(() => {
  
              if (audio.volume <= 0.2) {
                clearInterval(delay)
                audio.pause()
              } else {
                volume = volume - 0.1
                audio.volume = volume
              }
            }, 100)
          }
  
          
          if (JSON.parse(sessionStorage.getItem('audio')).play === "true") {
            audio.dataset.play = "false"
    
  
            gsap.to('.button-music', {
              opacity: 1,
              scale: 1,
              duration: 0.6,
            })

            volume = audio.volume

            fadeoutVolume()
          } else if (JSON.parse(sessionStorage.getItem('audio')).play === "false") {
            audio.volume = 0
            audio.dataset.play = "true"
  
            gsap.to(btnMusic, {
              duration: 0.5,
              scale: 1.1,
              opacity: 1,
            })
  
            audio.play()
            fadeinVolume()
          }
        }
  
        btnMusic.addEventListener("click", configMusic)
        return () => window.removeEventListener("click", configMusic)

      }
    }

    if (menus !== undefined) {
      for (let menu of menus) {
        const timeline = gsap.timeline({})
        const animate = document.querySelector(`#${menu.id} .menu .bg`).dataset

        animaLoadBtnLang(menu)
        animaLoadMenu(menu)
        animaLoadBtnMusic(menu)
        animaBtnMusic()



        menu.addEventListener('mouseenter', (e) => {
          if (animate.change === '0') {
            changeAnimation(menu, timeline)
          }
        })
      }
    }


    const shwoHeader = () => {
      const menuBtn = document.querySelector('.btn-menu')
      const header = document.querySelector('.header-moblie')
      console.log(menuBtn)
      const timeline = gsap.timeline({})

      menuBtn.addEventListener('click', () => {


        console.log(showMenu)

        if (showMenu === true) {
          showMenu = false
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
          console.log('Viiiiii')
          showMenu = true

          gsap.to(header, {
            duration: 1,
            opacity: 0,
            onComplete: () => { gsap.to(header, { duration: 0.1, display: 'none' }) }
          })

          gsap.to(menuBtn, {
            duration: 1,
            opacity: 0.9,
            scale: 0.9
          })
        }
      })

    }


    const time = setTimeout(() => {
      if (window.innerWidth <= 1000) {
        document.body.style.overflow = 'hidden'

        console.log('tetttt')
        gsap.to(document.querySelector('.header-moblie'), {
          duration: 0.1,
          x: '60%',

        })
        shwoHeader()
      }
    }, 200)


  }, [])

  if (mobile) {
    return (
      <>

        <header>
          <div className="logo">
            <div className="bg-img">

              <img src={logo} alt="avatar" />
            </div>

            <span> &lt;{tComponents("title")}/&gt;</span>
          </div>
          <button className="btn-menu"><img src={menu} alt="" /></button>


          <div className="header-moblie">

            <nav className="group-menu">
              <h2 className="ocult" id="home">
                <a className="menu" href='/'>
                  <div data-change='0' className="bg"></div>
                  Home
                </a>
              </h2>
              <h2 className="ocult" id="projects">
                <a className="menu" href="/projects">
                  <div data-change='0' className="bg"></div>
                  Projects
                </a>
              </h2>
              <h2 className="ocult" id="contact">
                <a className="menu" href="/contact">
                  <div data-change='0' className="bg"></div>
                  Contact
                </a>

              </h2>
              <h2 className="ocult" id="skills">
                <a className="menu" href="/skills">
                  <div data-change='0' className="bg"></div>
                  Skills
                </a>
              </h2>
            </nav>

            <div className="button-langs">

              <div className="group-langs">
                <LanguageSwitcher />
              </div>

              <button className="button-music">
                <img src={iconMusic} alt="" />

              </button>

            </div>



          </div>

        </header>
      </>
    );
  } else {
    return (
      <>
        <header>

          <nav className="group-menu">
            <h2 className="ocult" id="home">
              <a className="menu" href='/'>
                <div data-change='0' className="bg"></div>
                Home
              </a>
            </h2>
            <h2 className="ocult" id="projects">
              <a className="menu" href="/projects">
                <div data-change='0' className="bg"></div>
                Projects
              </a>
            </h2>
            <h2 className="ocult" id="contact">
              <a className="menu" href="/contact">
                <div data-change='0' className="bg"></div>
                Contact
              </a>

            </h2>
            <h2 className="ocult" id="skills">
              <a className="menu" href="/skills">
                <div data-change='0' className="bg"></div>
                Skills
              </a>
            </h2>
          </nav>

          <div className="button-langs">
            <div className="group-langs">
              <LanguageSwitcher />
            </div>

            <button className="button-music"><img src={iconMusic} alt="" /></button>
          </div>
        </header>
      </>
    );
  }

}
