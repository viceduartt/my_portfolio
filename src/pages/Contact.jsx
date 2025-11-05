import Header from "../components/Header";
import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import discord from "../assets/icons/discord.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import linkedin from "../assets/icons/linkedin.svg";

function Contact() {
  const text = "It all started one night when I was staring at my old JavaScript project — a messy jungle of DOM manipulation and callbacks that barely worked. I realized I needed something cleaner, something smarter. Everyone online kept talking about ReactJS, so I decided to dive in.At first, it was chaos. JSX looked weird, and I couldn’t understand why people would mix HTML and JavaScript in the same file. But after a few tutorials, it started to click. Components. State. Props. The idea that the UI could just “react” to changes in data — it felt like magic"
  return (
    <>
      <Header/>

      <div className="loading"></div>


      <main className="contact">
        <div className="backgroud"></div>


        <div className="group-input-socialmedia">
          <div className="input">
            <header>
              <span>Send me a e-mail</span>

              <button>Send</button>
            </header>

            <textarea name="message" id="message" className="message" value={text}>
            </textarea>
          </div>

          <div className="group-socialmedia">
            <a className="socialmedia" id="link-instagram" href="https://ig.me/m/viceduartt"><img src={instagram} alt="" /></a>
            <a className="socialmedia" id="link-github" href="https://github.com/viceduartt"><img src={github} alt="" /></a>
            <a className="socialmedia" id="link-youtube" href="www.youtube.com/@VicEduartt"><img src={youtube} alt="" /></a>
            <a className="socialmedia" id="link-linkedin" href="https://www.linkedin.com/in/viced-artt-6972a5372/"><img src={linkedin} alt="" /></a>
            <a className="socialmedia" id="link-whatsapp" href="https://api.whatsapp.com/send?phone=558189258359&text=Thanks%20for%20contacting"><img src={whatsapp} alt="" /></a>
            <a className="socialmedia" id="link-discord" href="https://discord.com/channels/@me"><img src={discord} alt="" /></a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
