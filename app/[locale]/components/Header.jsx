const iconMusic = "/icons/music.svg";

const menu = "/icons/menu.svg";
const logo = "/images/avatar.svg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobile, setMobile] = useState(false)
  const pathname = usePathname()
  const lang = pathname.split("/")[1]
  const maxVolume = 0.5
  const header = useTranslations("header")
  let volume = 0


  useEffect(() => {
    if (window.innerWidth <= 1088) {
      setMobile(true)
    }
  }, [])


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
      console.log("funfun")

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

      if (window.innerWidth <= 1088) {

        gsap.to('.button-lang', {
          opacity: '55%',
          duration: 0.6,
          delay: 0.2,
        })
      } else {
        gsap.to('.button-lang', {
          opacity: '75%',
          duration: 0.6,
          delay: 0.2,
        })
      }


      gsap.to('.button-lang.on', {
        opacity: 1,
        duration: 0.6,
        scale: 1.1,
        delay: 0.5
      })
    }

    const animaLoadBtnMusic = () => {
      if (window.innerWidth >= 1088)
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
          if (JSON.parse(sessionStorage.getItem('audio')).play === "false") {
            gsap.to(btnMusic, {
              duration: 1,
              scale: 1,
              opacity: 0.6
            })
          }

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
              duration: 1,
              scale: 1,
              opacity: 0.6
            })
          }
        })

        function configMusic() {
          const audio = document.querySelector(".musicPlayer")

          const fadeinVolume = () => {
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

          console.log(JSON.parse(sessionStorage.getItem('audio')).play)

          if (JSON.parse(sessionStorage.getItem('audio')).play === "true") {

            if (window.innerWidth <= 1088) {
              gsap.to('.button-music', {
                opacity: 0.6,
                scale: 1,
                duration: 0.5,
              })
            } else {
              gsap.to('.button-music', {
                opacity: 1,
                scale: 1,
                duration: 0.6,
              })
            }

            volume = audio.volume

            fadeoutVolume()
          } else if (JSON.parse(sessionStorage.getItem('audio')).play === "false") {
            audio.volume = 0

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

      }
    }

    if (window.innerWidth >= 1088) {
      console.log("desktop")
      for (let menu of menus) {
        const timeline = gsap.timeline({})
        const animate = document.querySelector(`#${menu.id} .menu .bg`).dataset

        animaLoadBtnLang()
        animaLoadMenu(menu)
        animaLoadBtnMusic()
        animaBtnMusic()



        menu.addEventListener('mouseenter', (e) => {
          if (animate.change === '0') {
            changeAnimation(menu, timeline)
          }
        })
      }
    }

    const animaLoadBtnsMobile = () => {
      const menus = document.querySelectorAll(".header-moblie h2")
      const timeline = gsap.timeline({})

      console.log(menus)

      menus.forEach((menu) => {
        gsap.from(menu, {
          duration: 0.1,
          opacity: 0,
          x: "60%"
        }, {

        })

        timeline.to(menu, {
          duration: 0.5,
          opacity: 1,
          x: "0%"
        })
      })
    }

    const resetMenuMobile = () => {
      const menus = document.querySelectorAll(".header-moblie h2")
      const btnLangs = document.querySelectorAll(".button-lang")
      const timelineMenus = gsap.timeline({})
      const timelineLangs = gsap.timeline({})

      menus.forEach((menu) => {
        timelineMenus.to(menu, {
          duration: 0.2,
          opacity: 0,
          x: "100%",
        })
      })

      gsap.to('.button-music', {
        opacity: 0.1,
        duration: 0
      })

      btnLangs.forEach((btn) => {
        timelineLangs.to(btn, {
          opacity: 0,
          duration: 0.1,
        })
      })
    }

    const shwoHeader = () => {
      const menuBtn = document.querySelector('.btn-menu')
      const header = document.querySelector('.header-moblie')
      console.log(menuBtn)

      menuBtn.addEventListener('click', () => {
        console.log(menuBtn.dataset.showmenu)

        if (menuBtn.dataset.showmenu === "true") {
          console.log('open')

          sessionStorage.setItem('scroll', JSON.stringify({
            run: "false"
          }))


          animaLoadBtnsMobile()

          gsap.to("*", {
            //overflowY: "hidden"
          })

          gsap.to(header, {
            duration: 1,
            pointerEvents: "all",
            opacity: 1,
            onComplete: () => {
              animaLoadBtnLang()
              animaLoadBtnMusic()
              animaBtnMusic()
            }
          })

          gsap.to(menuBtn, {
            duration: 1,
            opacity: 1,
            scale: 0.95,
            delay: 0.5
          })

        } else if (menuBtn.dataset.showmenu === "false") {

          console.log('close')

          sessionStorage.setItem('scroll', JSON.stringify({
            run: "true"
          }))

          resetMenuMobile()

          if (window.innerWidth <= 1088) {
            gsap.to("*", {
              //overflowY: "auto"
            })

          } else {

          }


          gsap.to(header, {
            duration: 1,
            opacity: 0,
            pointerEvents: "none",
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
      clearTimeout(time)

      if (window.innerWidth <= 1088) {
        const menusMobile = document.querySelectorAll(".header-moblie h2")


        for (let menu of menusMobile) {
          const timeline = gsap.timeline({})
          const animate = document.querySelector(`#${menu.id} .menu .bg`).dataset

          animaLoadMenu(menu)

          menu.addEventListener('mouseenter', (e) => {
            if (animate.change === '0') {
              changeAnimation(menu, timeline)
            }
          })
        }

        shwoHeader()
      }

      saveMusic()
    }, 200)


  }, [])

  const saveMusic = () => {
    const links = document.querySelectorAll(".ocult")
    const btnContact = document.querySelectorAll(".contact")

    btnContact.forEach((btn) => {
      btn.addEventListener("click", () => {
        const audio = document.querySelector(".musicPlayer")

        if (JSON.parse(sessionStorage.getItem('audio')) === null) {
          if (JSON.parse(sessionStorage.getItem('audio')).play === "true") {
            console.log("mudou para skjskj")
            sessionStorage.setItem('audio', JSON.stringify({
              currentTime: audio.currentTime,
              duration: audio.duration,
              play: "true",
              changeLang: true,
            }))
          } else {
            sessionStorage.setItem('audio', JSON.stringify({
              currentTime: audio.currentTime,
              duration: audio.duration,
              play: "false",
              changeLang: false,
            }))
          }
        }

      })
    })

    links.forEach((link) => {
      link.addEventListener("click", () => {
        const audio = document.querySelector(".musicPlayer")

        if (JSON.parse(sessionStorage.getItem('audio')) === null) {
          if (JSON.parse(sessionStorage.getItem('audio')).play === "true") {
            console.log("mudou para skjskj")
            sessionStorage.setItem('audio', JSON.stringify({
              currentTime: audio.currentTime,
              duration: audio.duration,
              play: "true",
              changeLang: true,
            }))
            console.log("caso 1")
          }
        } else {
          sessionStorage.setItem('audio', JSON.stringify({
            currentTime: audio.currentTime,
            duration: audio.duration,
            play: audio.dataset.play,
            changeLang: false,
          }))
        }
      })
    })
  }

  const changeShowMenu = () => {
    const btnMenu = document.querySelector(".btn-menu")

    console.log(`target:`)
    console.log(btnMenu.dataset)
    console.log(btnMenu)
    if (btnMenu.dataset.showmenu === "true") {
      btnMenu.dataset.showmenu = "false"
      console.log(`showMenu false ${btnMenu.dataset.showmenu}`)

    } else if (btnMenu.dataset.showmenu === "false") {
      btnMenu.dataset.showmenu = "true"
      console.log(`showMenu true ${btnMenu.dataset.showmenu}`)
    }
  }

  const changeStatusMusic = (target) => {
    const audio = document.querySelector(".musicPlayer")

    console.log("changeStatusMusic: ")

    if (audio.dataset.play === "true") {
      audio.dataset.play = "false"

      sessionStorage.setItem('audio', JSON.stringify({
        currentTime: audio.currentTime,
        duration: audio.duration,
        play: "false"
      }))

      console.log(`data-true ${JSON.parse(sessionStorage.getItem('audio')).play}`)

    } else if (audio.dataset.play === "false") {
      audio.dataset.play = "true"

      sessionStorage.setItem('audio', JSON.stringify({
        currentTime: audio.currentTime,
        duration: audio.duration,
        play: "true"
      }))

      console.log(`data-false ${JSON.parse(sessionStorage.getItem('audio')).play}`)

    }
  }

  if (mobile) {
    return (
      <>

        <header>
          <a href="/">
            <div className="logo">
              <div className="bg-img">

                <img src={logo} alt="avatar" />
              </div>

              <span> &lt;VicedArtt/&gt;</span>
            </div>
          </a>
          <button onClick={() => { changeShowMenu() }} data-showmenu="true" className="btn-menu"><img src={menu} alt="" /></button>


          <div className="header-moblie">

            <nav className="group-menu">
              <h2 className="ocult" id="home">
                <a className="menu" href='/'>
                  <div data-change='0' className="bg"></div>
                  {header("menu-home")}

                </a>
              </h2>
              <h2 className="ocult" id="projects">
                <a className="menu" href="/projects">
                  <div data-change='0' className="bg"></div>
                  {header("menu-projects")}
                </a>
              </h2>
              <h2 className="ocult" id="contact">
                <a className="menu" href="/contact">
                  <div data-change='0' className="bg"></div>
                  {header("menu-contact")}
                </a>

              </h2>
              <h2 className="ocult" id="skills">
                <a className="menu" href="/skills">
                  <div data-change='0' className="bg"></div>
                  {header("menu-skills")}
                </a>
              </h2>
            </nav>

            <div className="button-langs">

              <div className="group-langs">
                <LanguageSwitcher />
              </div>

              <button onClick={(e) => { changeStatusMusic(e.target) }} className="button-music">
                <img className="img-button-music" src={iconMusic} alt="" />

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
                {header("menu-home")}
              </a>
            </h2>
            <h2 className="ocult" id="projects">
              <a className="menu" href="/projects">
                <div data-change='0' className="bg"></div>
                {header("menu-projects")}
              </a>
            </h2>
            <h2 className="ocult" id="contact">
              <a className="menu" href="/contact">
                <div data-change='0' className="bg"></div>
                {header("menu-contact")}

              </a>

            </h2>
            <h2 className="ocult" id="skills">
              <a className="menu" href="/skills">
                <div data-change='0' className="bg"></div>
                {header("menu-skills")}

              </a>
            </h2>
          </nav>

          <div className="button-langs">
            <div className="group-langs">
              <LanguageSwitcher />
            </div>

            <button onClick={(e) => { changeStatusMusic(e.target) }} className="button-music"><img src={iconMusic} alt="" /></button>
          </div>
        </header>
      </>
    );
  }

}
