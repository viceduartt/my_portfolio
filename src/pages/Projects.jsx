import Header from "../components/Header";

import img1 from "../assets/images/projects/00/1338843.png";
import iconTech1 from "../assets/images/frontend/tailwindcss.svg";
import iconTech2 from "../assets/images/backend/golang.svg";
import iconMore from "../assets/icons/more.svg";
import Loading from "../components/Loading";
import Cursor from "../components/Cursor";



function Projects() {
  const text = ""

  const changeBg = () => {
      document.querySelector('body').classList.remove('contact')
  }

  return (
    <>
      <Cursor></Cursor>
      <Header/>

      <Loading></Loading>


      <div className="backgroumd">
        <div className="msg">
          <img src={img1} alt="" />

          <div className="groupbtn-msg">
            <span>I'm selecting the best projects; in the meantime, you can contact me.</span>

            <a href="#contact" className="contact">Contact</a>
          </div>

        </div>
      </div>

      <main className="projects" onLoad={() => {changeBg()}}>

          <div className="project">
            <img className="project-focus" src={img1} alt="" />

            <h2>NovaWeb</h2>

            <div className="technologies">
              <div className="section-technology">
                <div className="technology">
                  <img src={iconTech1} alt="" />

                  <span className="label-small">Tailwind css</span>
                </div>

                <div className="technology">
                  <img src={iconTech2} alt="" />

                  <span className="label-small">Golang</span>
                </div>

                <div className="technology">
                  <img src={iconTech2} alt="" />

                  <span className="label-small">Golang</span>
                </div>

                <div className="technology">
                  <img src={iconTech2} alt="" />

                  <span className="label-small">Golang</span>
                </div>

                <div className="technology">
                  <img src={iconTech2} alt="" />

                  <span className="label-small">Golang</span>
                </div>

                <div className="technology">
                  <img src={iconTech1} alt="" />

                  <span className="label-small">Tailwind css</span>
                </div>

                <div className="technology">
                  <img src={iconTech2} alt="" />

                  <span className="label-small">Golang</span>
                </div>
              </div>

              <div className="section-technology">

                <div className="technology">
                  <img src={iconTech2} alt="" />

                  <span className="label-small">Golang</span>
                </div>

                <div className="technology">
                  <img src={iconTech2} alt="" />

                  <span className="label-small">Golang</span>
                </div>

                <div className="technology">
                  <img src={iconTech2} alt="" />

                  <span className="label-small">Golang</span>
                </div>

                <div className="technology">
                  <img src={iconTech2} alt="" />

                  <span className="label-small">Golang</span>
                </div>
              </div>
            </div>

            <p>NovaWeb is an innovative digital space created to inspire, connect, and transform online experiences. Here, you’ll find exclusive content, practical tools, and an active community ready to share knowledge, creativity, and innovation.
Our goal is to provide an intuitive navigation experience, modern design, and smart features to support your digital journey—whether you're a curious explorer, a content creator, or a professional seeking solutions.n active community ready to share knowledge, creativity, and innovation.
Our goal is to provide an intuitive navigation experience, modern design, and smart features to support your digital journey—whether you're a curious explorer, a content creator, or a professional seeking solutions.n active community ready to share knowledge, creativity, and innovation.
Our goal is to provide an intuitive navigation experience, modern design, and smart features to support your digital journey—whether you're a curious explorer, a content creator, or a professional seeking solutions.</p>
          </div>

          <div className="list-projects">
            <header>              
              <button className="btnTag" id="landingPage">Landing page</button>
              <button className="btnTag" id="landingPage">Landing page</button>
              <button className="btnTag" id="landingPage">Landing page</button>
              <button className="btnTag" id="landingPage">Landing page</button>

              <button className="btnTag" id="landingPage">Landing page</button>
              <button className="btnTag" id="landingPage">Landing page</button>
              <button className="btnTag" id="landingPage">Landing page</button>
              <button className="btnTag" id="landingPage">Landing page</button>
              <button className="btnTag" id="landingPage">Landing page</button>
            </header>

            <div className="group-list-projects">
              <div className="projects">
                <div className="container-img on">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>

                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>

                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>

                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>

                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>

                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>

                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
                </div>
                <div className="container-img">
                  <img src={img1} alt="" />
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

export default Projects;
