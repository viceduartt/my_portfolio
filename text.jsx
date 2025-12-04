
  if (mobile) {
    return (
      <>
        <Cursor></Cursor>
        <Header />

        <Loading></Loading>

        <div className="background"></div>

        <main className="contact">
          <div className="notice-sendEmail">
            <button id="close-notice"><img src={close} alt="" /></button>

            <div className="content">
              <img className="happCat" src={happyCat} alt="" />

              <span className="notice-msg">Email sent successfully! I'll get back to you shortly.</span>
            </div>
          </div>

          <div className="group-input-socialmedia">
            <header>
              <label className="userEmail" htmlFor="userEmail">
                <input type="email" name="userEmail" translate="no" onChange={(e) => { handleEmail(e.target.value) }} id="userEmail" value={valueEmail} placeholder="contactemail@example.com" />

                <div className="border"></div>
              </label>
            </header>


            <div className="msg-send">
              <label htmlFor="msg" className="msg">

                <textarea name="msg" id="msg" translate="no" onChange={(e) => { handleMsg(e.target.value) }} value={valueMsg} placeholder="Describe what I can do for you here, or if you prefer, send me an email at viceduartt@gmail.com"></textarea>
              </label>


              <button className="button-small" id="sendEmail">Send</button>
            </div>
          </div>


          <div className="group-socialmedia-cards">
            <div className="group-socialmedia">
              <a href="maito:" className="btn-socialmedia"><img src={email} alt="" /></a>
              <a href="" className="btn-socialmedia"><img id="icon-whatsapp" src={whatsapp} alt="" /></a>
              <a href="" className="btn-socialmedia"><img src={instagram} alt="" /></a>
              <a href="" className="btn-socialmedia"><img src={discord} alt="" /></a>
            </div>

            <div className="group-cards-scroll">
              <div className="scroll-container">
                <div className="scroll"></div>
              </div>

              <div className="cards-container" data-scroll='no'>

                <div className="card">

                  <div className="group-icon-text">
                    <img src={website} alt="" />

                    <div className='group-nameService-descriptionService'>
                      <h3 className="nameService">Website Development</h3>

                      <p className="body-big">I develop everything from <span className="green">landing pages</span> to <span className="green">media streaming websites!</span> But I'm always available for challenges.</p>
                    </div>
                  </div>

                  <a href="https://wa.me/5581989258359?text=Hi%2C%20I%20need%20someone%20to%20create%20a%20website%20for%20my%20business.%20(Describe%20the%20type%20of%20website%20and%20the%20features%20you%20would%20like)" d="Website" id="Website" className="btn-selectService">Let’s Go</a>
                </div>

                <div className="card">
                  <div className="group-icon-text">
                    <img src={virtualStory} alt="" />

                    <div className="group-nameService-descriptionService">
                      <h3 className="nameService">E-commerce creation</h3>

                      <p className="body-big">I create online stores for everyone from small to <span className="green">large</span>, tailored to your needs.</p>
                    </div>
                  </div>

                  <a href="https://wa.me/5581989258359?text=Hi%2C%20I%20need%20someone%20to%20create%20an%20online%20store%20for%20my%20business.%20(Please%20tell%20me%20more%20about%20the%20features%20the%20online%20store%20will%20have%2C%20and%20its%20size.)" id="Ecommerce" className="btn-selectService">Let’s Go</a>
                </div>

                <div className="card">
                  <div className="group-icon-text">
                    <img src={systemInternal} alt="" />

                    <div className="group-nameService-descriptionService">
                      <h3 className="nameService">Creation of internal systems</h3>

                      <p className="body-big">I can develop any type of system your business needs, from <span className="green">tracking</span> and <span className="green">inventory management systems</span> to <span className="green">fully customized solutions.</span></p>
                    </div>
                  </div>

                  <a href="https://wa.me/5581989258359?text=Hello%2C%20I%20need%20you%20to%20create%20a%20system%20for%20my%20business.%20(Describe%20exactly%20what%20you%20need.)" id="internalSystems" className="btn-selectService">Let’s Go</a>
                </div>

                <div className="card">
                  <div className="group-icon-text">
                    <img src={interfaces} alt="" />

                    <div className="group-nameService-descriptionService">
                      <h3 className="nameService">Creating interfaces for websites/apps</h3>

                      <p className="body-big">I develop the product interface and design from scratch or enhance what you already have.</p>
                    </div>
                  </div>

                  <a href="https://wa.me/5581989258359?text=Hi%2C%20I%20need%20you%20to%20create%20some%20interfaces%20for%20my%20app%2Fwebsite.%20(Please%20provide%20more%20details.)" id="interfaces" className="btn-selectService">Let’s Go</a>
                </div>

                <div className="card">
                  <div className="group-icon-text">
                    <img src={moblieApp} alt="" />

                    <div className="group-nameService-descriptionService">
                      <h3 className="nameService">Mobile app development</h3>

                      <p className="body-big">Do you have an amazing idea for a mobile app? I can help turn your idea into reality! I create apps for <span className="green">iOS</span> and <span className="green">ndroid</span> at no extra cost.</p>
                    </div>
                  </div>

                  <a href="https://wa.me/5581989258359?text=Hi%2C%20I%20need%20you%20to%20create%20a%20mobile%20app%20for%20my%20business.%20(Please%20provide%20more%20details.)" id="MobileApp" className="btn-selectService">Let’s Go</a>
                </div>

                <div className="card">
                  <div className="group-icon-text">
                    <img src={consultingWebsite} alt="" />

                    <div className="group-nameService-descriptionService">
                      <h3 className="nameService">Web Application Consulting</h3>

                      <p className="body-big">Is your web application not getting as many visitors as before? Is it slow? I can find out why for you!</p>
                    </div>
                  </div>

                  <a href="https://wa.me/5581989258359?text=Hello%2C%20I%20have%20a%20web%20application%20and%20I%20would%20like%20to%20request%20your%20consulting%20services%20for%20(Please%20provide%20more%20details%20and%20explain%20your%20problem)." id="consultingWebapp" className="btn-selectService">Let’s Go</a>
                </div>

                <div className="card">
                  <div className="group-icon-text">
                    <img src={consultingInterface} alt="" />

                    <div className="group-nameService-descriptionService">
                      <h3 className="nameService">UI/UX Design Consulting</h3>

                      <p className="body-big">Has your product reached the level you've always dreamed of? Don't be fooled, <span className="green">it can go much further with a solid design!</span></p>
                    </div>
                  </div>

                  <a href="https://wa.me/5581989258359?text=Hello%2C%20I%20already%20have%20a%20design%20for%20my%20app%2Fwebsite%2C%20but%20I%20would%20like%20to%20request%20your%20consulting%20services." id="consulting Design" className="btn-selectService">Let’s Go</a>
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
        <Header />

        <Loading></Loading>

        <div className="background"></div>


        <main className="contact">
          <div className="notice-sendEmail">
            <button id="close-notice"><img src={close} alt="" /></button>

            <div className="content">
              <img className="happCat" src={happyCat} alt="" />

              <span className="notice-msg">{Contact("noticemsg")}</span>
            </div>
          </div>

          <div className="group-input-socialmedia">
            <header>
              <label className="userEmail" htmlFor="userEmail">
                <div className="output" id="outputEmail"></div>
                <input type="email" name="userEmail" translate="no" onChange={(e) => { handleEmail(e.target.value) }} id="userEmail" value={valueEmail} placeholder={tContact("placeholderInput")} />

                <div className="border"></div>
              </label>


              <div className="group-socialmedia-btnSend">
                <div className="group-socialmedia">
                  <a href="maito:viceduartt@gmail.com" className="btn-socialmedia"><img src={email} alt="" /></a>
                  <a href="https://wa.me/5581989258359" className="btn-socialmedia"><img src={whatsapp} alt="" /></a>
                  <a href="https://www.instagram.com/viceduartt/?next=%2F" className="btn-socialmedia"><img src={instagram} alt="" /></a>
                  <a href="https://github.com/viceduartt" className="btn-socialmedia"><img src={discord} alt="" /></a>
                </div>

                <button className="button-small" id="sendEmail">{tContact("sendEmail")}</button>
              </div>
            </header>

            <label htmlFor="msg" className="msg">
              <div className="output" id="outputMsg"></div>

              <textarea name="msg" id="msg" translate="no" onChange={(e) => { handleMsg(e.target.value) }} value={valueMsg} placeholder={tContact("placeholderTextarea")}></textarea>
            </label>
          </div>


          <div className="group-cards-scroll">
            <div className="scroll-container">
              <div className="scroll"></div>
            </div>

            <div className="cards-container">

              <div className="card">

                <div className="group-icon-text">
                  <img src={website} alt="" />

                  <div className="group-nameService-descriptionService">
                  <h3 className="nameService">{Contact("service-websiteDev")}</h3>

                    <p className="body-big" dangerouslySetInnerHTML={{ __html: Contact("contentService-websiteDev") }} ></p>
                  </div>
                </div>

                <a href="https://wa.me/5581989258359?text=Hi%2C%20I%20need%20someone%20to%20create%20a%20website%20for%20my%20business.%20(Describe%20the%20type%20of%20website%20and%20the%20features%20you%20would%20like)" d="Website" className="btn-selectService">Let’s Go</a>
              </div>

              <div className="card">
                <div className="group-icon-text">
                  <img src={virtualStory} alt="" />

                  <div className="group-nameService-descriptionService">
                    <h3 className="nameService">E-commerce creation</h3>

                    <p className="body-big">I create online stores for everyone from small to <span className="green">large</span>, tailored to your needs.</p>
                  </div>
                </div>

                <a href="https://wa.me/5581989258359?text=Hi%2C%20I%20need%20someone%20to%20create%20an%20online%20store%20for%20my%20business.%20(Please%20tell%20me%20more%20about%20the%20features%20the%20online%20store%20will%20have%2C%20and%20its%20size.)" id="Ecommerce" className="btn-selectService">Let’s Go</a>
              </div>

              <div className="card">
                <div className="group-icon-text">
                  <img src={systemInternal} alt="" />

                  <div className="group-nameService-descriptionService">
                    <h3 className="nameService">Creation of internal systems</h3>

                    <p className="body-big">I can develop any type of system your business needs, from <span className="green">tracking</span> and <span className="green">inventory management systems</span> to <span className="green">fully customized solutions.</span></p>
                  </div>
                </div>

                <a href="https://wa.me/5581989258359?text=Hello%2C%20I%20need%20you%20to%20create%20a%20system%20for%20my%20business.%20(Describe%20exactly%20what%20you%20need.)" id="internalSystems" className="btn-selectService">Let’s Go</a>
              </div>

              <div className="card">
                <div className="group-icon-text">
                  <img src={interfaces} alt="" />

                  <div className="group-nameService-descriptionService">
                    <h3 className="nameService">Creating interfaces for websites/apps</h3>

                    <p className="body-big">I develop the product interface and design from scratch or enhance what you already have.</p>
                  </div>
                </div>

                <a href="https://wa.me/5581989258359?text=Hi%2C%20I%20need%20you%20to%20create%20some%20interfaces%20for%20my%20app%2Fwebsite.%20(Please%20provide%20more%20details.)" id="interfaces" className="btn-selectService">Let’s Go</a>
              </div>

              <div className="card">
                <div className="group-icon-text">
                  <img src={moblieApp} alt="" />

                  <div className="group-nameService-descriptionService">
                    <h3 className="nameService">Mobile app development</h3>

                    <p className="body-big">Do you have an amazing idea for a mobile app? I can help turn your idea into reality! I create apps for <span className="green">iOS</span> and <span className="green">ndroid</span> at no extra cost.</p>
                  </div>
                </div>

                <a href="https://wa.me/5581989258359?text=Hi%2C%20I%20need%20you%20to%20create%20a%20mobile%20app%20for%20my%20business.%20(Please%20provide%20more%20details.)" id="MobileApp" className="btn-selectService">Let’s Go</a>
              </div>

              <div className="card">
                <div className="group-icon-text">
                  <img src={consultingWebsite} alt="" />

                  <div className="group-nameService-descriptionService">
                    <h3 className="nameService">Web Application Consulting</h3>

                    <p className="body-big">Is your web application not getting as many visitors as before? Is it slow? I can find out why for you!</p>
                  </div>
                </div>

                <a href="https://wa.me/5581989258359?text=Hello%2C%20I%20have%20a%20web%20application%20and%20I%20would%20like%20to%20request%20your%20consulting%20services%20for%20(Please%20provide%20more%20details%20and%20explain%20your%20problem)." id="consultingWebapp" className="btn-selectService">Let’s Go</a>
              </div>

              <div className="card">
                <div className="group-icon-text">
                  <img src={consultingInterface} alt="" />

                  <div className="group-nameService-descriptionService">
                    <h3 className="nameService">UI/UX Design Consulting</h3>

                    <p className="body-big">Has your product reached the level you've always dreamed of? Don't be fooled, <span className="green">it can go much further with a solid design!</span></p>
                  </div>
                </div>

                <a href="https://wa.me/5581989258359?text=Hello%2C%20I%20already%20have%20a%20design%20for%20my%20app%2Fwebsite%2C%20but%20I%20would%20like%20to%20request%20your%20consulting%20services." id="consulting Design" className="btn-selectService">Let’s Go</a>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }