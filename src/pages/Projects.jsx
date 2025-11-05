import Header from "../components/Header";

import img1 from "../assets/images/projects/00/1338843.png";
import iconTech1 from "../assets/images/frontend/tailwindcss.svg";
import iconTech2 from "../assets/images/backend/golang.svg";
import iconSearch from "../assets/icons/search.svg";
import iconMore from "../assets/icons/more.svg";

function Projects() {
  const text = ""
  return (
    <>
      <Header/>

      <div className="loading"></div>


      <main className="projects">
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
              <div className="sections">
                <button className="section on" id="projects-list"></button>
                <button className="section" id="projects-details"></button>
              </div>
              
              <div className="group-search-technology">
                <label htmlFor="search-projects" className="search-projects">
                  <img src={iconSearch} alt="" />

                  <input type="text" id="search-projects" placeholder="Search by: landing page..." value={text} />
                </label>

                <div className="list-technologies">
                  <div className="group-show-technologies">
                    <div className="highlight-list-technologies">
                      <button className="technology on">
                        <img src={iconTech1} alt="" />

                        ailwind cs
                      </button>

                      <button className="technology">
                        <img src={iconTech2} alt="" />

                        Golang
                      </button>

                      <button className="technology">
                        <img src={iconTech1} alt="" />

                        ailwind cs
                      </button>

                      <button className="technology">
                        <img src={iconTech1} alt="" />

                        ailwind cs
                      </button>
                    </div>

                    <button className="button-more">
                      <img src={iconMore} alt="" />
                    </button>

                    <div className="more-list-technologies on">
                      <div className="line-list-technologies">
                        <button className="technology">
                          <img src={iconTech1} alt="" />

                          ailwind cs
                        </button>

                        <button className="technology">
                          <img src={iconTech2} alt="" />

                          Golang
                        </button>

                        <button className="technology">
                          <img src={iconTech1} alt="" />

                          ailwind cs
                        </button>

                        <button className="technology">
                          <img src={iconTech1} alt="" />

                          ailwind cs
                        </button>
                      </div>

                      <div className="more-list-technologies">
                        <div className="line-list-technologies">
                          <button className="technology">
                            <img src={iconTech1} alt="" />

                            ailwind cs
                          </button>

                          <button className="technology">
                            <img src={iconTech2} alt="" />

                            Golang
                          </button>

                          <button className="technology">
                            <img src={iconTech1} alt="" />

                            ailwind cs
                          </button>

                          <button className="technology">
                            <img src={iconTech1} alt="" />

                            ailwind cs
                          </button>
                        </div>

                        <div className="line-list-technologies">
                          <button className="technology">
                            <img src={iconTech1} alt="" />

                            ailwind cs
                          </button>

                          <button className="technology">
                            <img src={iconTech2} alt="" />

                            Golang
                          </button>

                          <button className="technology">
                            <img src={iconTech1} alt="" />

                            ailwind cs
                          </button>

                          <button className="technology">
                            <img src={iconTech1} alt="" />

                            ailwind cs
                          </button>
                        </div>

                        <div className="line-list-technologies">
                          <button className="technology">
                            <img src={iconTech1} alt="" />

                            ailwind cs
                          </button>

                          <button className="technology">
                            <img src={iconTech2} alt="" />

                            Golang
                          </button>

                          <button className="technology">
                            <img src={iconTech1} alt="" />

                            ailwind cs
                          </button>

                          <button className="technology">
                            <img src={iconTech1} alt="" />

                            ailwind cs
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
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
