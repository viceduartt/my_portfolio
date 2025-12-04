"use client";

import Header from "../components/Header";
import Cursor from "../components/Cursor";
import Loading from "../components/Loading";
import { useTranslations } from "use-intl";

const img1 = "/images/projects/00/1338843.png";
const iconTech1 = "/images/frontend/tailwindcss.svg";
const iconTech2 = "/images/backend/golang.svg";
const programming = "/images/programming.svg"


function Projects() {
  const project = useTranslations("projects")

  const changeBg = () => {
      document.querySelector('body').classList.remove('contact')
  }

  return (
    <>
      <Cursor></Cursor>

      <Loading></Loading>


      <div className="notice-projects">
        <div className="msg">
          <img src={programming} alt="" />

          <div className="groupbtn-msg">
            <span>{project("msg")}</span>

            <div className="group-links">
              <a href="/contact" className="contact-dev">{project("btn")}</a>
              <a href="https://www.instagram.com/viceduartt/?next=%2F" className="socialmedia-dev">Instagram</a>
            </div>
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
