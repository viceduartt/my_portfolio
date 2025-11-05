import { Link } from "react-router-dom";
import iconMusic from "../assets/icons/music.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Header() {
  useGSAP(() => {
    const menus = document.querySelectorAll('header h2')
    
    const changeAnimation = (menu, state, timeline) => {
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
    
    if (menus !== undefined) {
      for (let menu of menus) { 
        const timeline = gsap.timeline({})
        const animate = document.querySelector(`#${menu.id} .menu .bg`).dataset

        menu.addEventListener('mouseenter', (e) => {
          if (animate.change === '0') {
            changeAnimation(menu, 'fadein', timeline)
          }
        })
      }
    }

  }, [])

  return (
    <header>
      
      <nav className="group-menu">
        <h2 className="ocult" id="home">
          <Link className="menu" to='/'>
            <div data-change='0' className="bg"></div>
            <div className="area-mouse"></div>

            Home
          </Link>
        </h2>
        <h2 className="ocult" id="projects">
          <Link className="menu"to="/projects">
            <div data-change='0' className="bg"></div>
            <div className="area-mouse"></div>

            Projects
          </Link>
        </h2>
        <h2 className="ocult" id="contact">
          <Link className="menu" to="/contact">
            <div data-change='0' className="bg"></div>
            <div className="area-mouse"></div>

            Contact
          </Link>

        </h2>
        <h2 className="ocult" id="skills">
          <Link className="menu" to="/skills">
            <div data-change='0' className="bg"></div>
            <div className="area-mouse"></div>

            Skills
          </Link>
        </h2>
      </nav>
      <button className="button-music"><img src={iconMusic} alt="" /></button>
    </header>
  );
}

export default Header;
