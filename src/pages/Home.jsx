import Header from "../components/Header";
import logo from "../assets/images/avatar.svg";

import iconGithub from "../assets/icons/github.svg";
import iconInstagram from "../assets/icons/instagram.svg";
import iconYoutube from "../assets/icons/youtube.svg";

function Home() {
  const changeAnima = (e, classNameE, state) => {
    const animation = e.getAnimations()[0]


    if (animation !== undefined) { 
      if (e.className === classNameE || e.className === `${classNameE} fadeout`) {
        if (animation.playState === 'finished') {
          console.log('teste')
          e.className = `${classNameE} fadein`
        }
      } else {
        const time = setInterval(() => {
          if (animation.playState === 'finished' || animation.playState === 'idle') {
            console.log('funfunfun')
            e.className = `${classNameE} fadeout`
            clearInterval(time)
          }
      }, 100)

        if (animation.playState === 'finished') {
          e.className = `${classNameE} fadeout`
        }
      }
    } else {
      if (e.className === classNameE || e.className === `${classNameE} fadeout`) {
        console.log('animation')
        e.className = `${classNameE} fadein`
        const time = setInterval(() => {
          if (animation !== undefined) {            
            if (animation.playState === 'finished') {
              e.className = `${classNameE} fadeout`
              clearInterval(time)
            }
          }
        }, 100)
      } else if (e.className === classNameE) {
        e.className = `${classNameE} fadeout`
      }
    }

    if (state === 'fadeout') {
      const time = setInterval(() => {

        if (animation !== undefined) {
          if (animation.playState === 'finished' || animation.playState === 'idle') {
            console.log('funfunfun')
            e.className = `${classNameE} fadeout`
            clearInterval(time)
          }
        }
      }, 100)
    }

    
  }

  const changeUrl = (e) => {
    let animation = e.getAnimations()
    const getUrl = window.location.href
    console.log(animation)

    if (animation === undefined) {
      window.location.href = getUrl + 'contact'
    } else if (animation[0].playState === 'finished') {
      window.location.href = getUrl + 'contact'
    }
  }

  return (
    <>
      <Header/>

      <div className="loading"></div>

      <main className="home">
      
        <div className="about">
          <img src={logo} alt="" />

          <div className="goup-text-button">
            <div className="group-texts">
              <h6>Hello i am</h6>
              <h3>Viced Artt</h3>

              <h1>Web Developer & <br /> UI Designer</h1>
            </div>

            <button className="contact">
              <div className="area-mouse"></div>
              Contact
            </button>
          </div>
        </div>

        <div className="socialmendia">
            <a id="link-instagram" className="link" href="https://ig.me/m/viceduartt"
              onMouseEnter={(e) => {changeAnima(e.target, 'link', 'fadein')}}
              onMouseLeave={(e) => {changeAnima(e.target, 'link', 'fadeout')}}
            >
              <div className="border"></div>
              <div className="border-container">
                <div className="border-anima"></div>
              </div>
              <img src={iconInstagram} alt="" />
            </a>
            <a id="link-github" className="link" href="https://github.com/viceduartt"
              onMouseEnter={(e) => {changeAnima(e.target, 'link', 'fadein')}}
              onMouseLeave={(e) => {changeAnima(e.target, 'link', 'fadeout')}}
            >
              <div className="border"></div>
              <div className="border-container">
                <div className="border-anima"></div>
              </div>
              <img src={iconGithub} alt="" />
            </a>
            <a id="link-youtube" className="link" href="www.youtube.com/@VicEduartt"
              onMouseEnter={(e) => {changeAnima(e.target, 'link', 'fadein')}}
              onMouseLeave={(e) => {changeAnima(e.target, 'link', 'fadeout')}}
            >
              <div className="border"></div>
              <div className="border-container">
                <div className="border-anima"></div>
              </div>
              <img src={iconYoutube} alt="" />
            </a>
        </div>
      </main>
    </>
  );
}

export default Home;
