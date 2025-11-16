import Header from "../components/Header";
import logo from "../assets/images/avatar.svg";

import iconGithub from "../assets/icons/github.svg";
import iconInstagram from "../assets/icons/instagram.svg";
import iconYoutube from "../assets/icons/youtube.svg";
import Loading from "../components/Loading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Cursor from "../components/Cursor";



function Home() {
  const changeBg = () => {
    document.querySelector('body').classList.remove('contact')
  }

  useGSAP(() => {
    const animaContact = (contact) => {
      contact.addEventListener('mouseleave', () => {
        gsap.to('.contact .bg', {
          scaleY: 0.01,
          opacity: 0,
          duration: 1.5
        })

        gsap.to('.contact', {
          backgroundColor: '#0C0C0C',
          scale: 1,
          duration: 0.5
        })

        gsap.to('.contact a', {
          duration: 1,
          color: '#28D9DF'
        })
      })

      contact.addEventListener('mouseenter', (e) => {
        gsap.to('.contact .bg', {
          scaleY: 1,
          opacity: 1,
          duration: 1,
        })

        gsap.to('.contact', {
          backgroundColor: '#11111100',
          duration: 0.5
        })
        
        gsap.to('.contact a', {
          duration: 1,
          color: 'black',
        })
      })
    }
  
    const animaLinkSM = (link) => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          scale: 1.1,
          borderColor: '#9527ff',
          duration: 1
        })

        gsap.to(`#${link.id} img`, {
          duration: 0.5,
          filter: 'brightness(0) saturate(100%) invert(36%) sepia(86%) saturate(7009%) hue-rotate(265deg) brightness(99%) contrast(105%)'
        })
      })

      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          scale: 1,
          borderColor: '#28d9df',
          duration: 1
        })

        gsap.to(`#${link.id} img`, {
          duration: 0.5,
          filter: 'brightness(0) saturate(100%) invert(76%) sepia(95%) saturate(1417%) hue-rotate(134deg) brightness(95%) contrast(84%)'
        })
      })
    }

    const animaHome = (home) => {
      const group_texts = document.querySelector('.group-texts')
      const contact = document.querySelector('.contact')
      const socialmedia = document.querySelector('.socialmendia')
      const photo = document.querySelector('.my-photo')

      socialmedia.style.opacity = 0
      contact.style.opacity = 0
      group_texts.style.opacity = 0
      photo.style.opacity = 0

      group_texts.style.pointerEvents = 'none'
      socialmedia.style.pointerEvents = 'none'
      contact.style.pointerEvents = 'none'
      photo.style.pointerEvents = 'none'


      let delay = 0.6
      const ballWidth = document.querySelector('#ball').offsetWidth
      
      gsap.to('#ball', {
        opacity: 1,
        scale: 0.3,
        duration: 0.5,
        delay: delay
      })

      gsap.to('#ball', {
        scale: 1,
        top: (photo.getBoundingClientRect().top + window.screenY),
        backgroundColor: '#7407D5',
        duration: 0.6,
        delay: delay = delay + 0.3
      })

      gsap.to('#ball', {
        left: '139rem',
        duration: 1,
        delay: delay = delay + 0.5
      })

      gsap.to('#ball', {
        left: photo.getBoundingClientRect().left + window.scrollX,
        duration: 1,
        delay: delay = delay + 0.4
      })


      gsap.to('.group-texts', {
        opacity: 1,
        pointerEvents: 'all',
        duration: 1,
        delay: delay = delay + 0.5
      })

      gsap.to('.contact', {
        opacity: 1,
        pointerEvents: 'all',
        duration: 1,
        delay: delay = delay + 0.4
      })

      gsap.to('.socialmendia', {
        opacity: 1,
        pointerEvents: 'all',
        duration: 1,
        delay: delay = delay + 0.3
      })

      gsap.to('.my-photo', {
        opacity: 1,
        duration: 1,
        delay: 2.7
      })

      gsap.to('#ball', {
        display: 'none',
        duration: 0.1,
        delay: 4
      })
    } 

    const time = setInterval(() => {
      const btnContact = document.querySelector('.contact')
      const linkSM = document.querySelectorAll('.link')
      const home = document.querySelector('.home')

      clearInterval(time)
  
      if (home !== undefined) {
        animaHome(home)
      }

      if (btnContact !== undefined) {
        animaContact(btnContact)
      }

  
      if (linkSM !== undefined) {
        linkSM.forEach(link=>{animaLinkSM(link)})
      }
  
      console.log(btnContact)
    }, 200)
  })



  return (
    <>
      <Cursor></Cursor>
      <Header/>

      <Loading></Loading>

      <div id="ball"></div>

      <main className="home" onLoad={() => {changeBg()}}>
        <div className="about">
          <img src={logo} alt="" className="my-photo" />

          <div className="goup-text-button">
            <div className="group-texts">
              <h6>Hello i am</h6>
              <h3>Viced Artt <p className="emoji">✨</p></h3>

              <h1>Web Developer & <br /> UI Designer</h1>
              <h6 className="text-impact">Building the next era.</h6>
            </div>

            <button className="contact">
              <div className="bg"></div>
              <a href="/contatc" className="button">Build the Future</a>
            </button>
          </div>
        </div>

        <div className="socialmendia">
            <a id="link-instagram" className="link" href="https://ig.me/m/viceduartt"
            >
              <img src={iconInstagram} alt="" />
            </a>
            <a id="link-github" className="link" href="https://github.com/viceduartt"
            >
              <img src={iconGithub} alt="" />
            </a>
            <a id="link-youtube" className="link" href="www.youtube.com/@VicEduartt"
            >
              <img src={iconYoutube} id="youtube" alt="" />
            </a>
        </div>
      </main>
    </>
  );
}

export default Home;
