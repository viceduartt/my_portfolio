import Header from "../components/Header";
import instagram from "../assets/icons/instagram.svg";
import discord from "../assets/icons/discord.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import email from "../assets/icons/email.svg";

import website from "../assets/icons/website.svg";
import interfaces from "../assets/icons/interfaces.svg";
import moblieApp from "../assets/icons/moblueApp.svg";
import virtualStory from "../assets/icons/storyVirtual.svg";
import systemInternal from "../assets/icons/systemInternal.svg";
import consultingWebsite from "../assets/icons/consultingWebsite.svg";
import consultingInterface from "../assets/icons/consultingDesign.svg";
import Loading from "../components/Loading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Cursor from "../components/Cursor";
import { useState } from "react";


function Contact() {

  let posView = 0.1
  let posScrollBar = 0.3
  const [valueEmail, setValueEmail] = useState('')
  const [valueMsg, setValueMsg] = useState('')



  useGSAP(() => {
    const time = setTimeout(() => {
      if (document.querySelector('.scroll-container') !== null) {
        clearTimeout(time)
        gsap.to('.cards-container', {
          duration: 5,
          x: 0,
          ease: "circ"
        })

        animaLoading()

        scroll()
        animaSocialmediaBtns()
        changeBg()
      }
    }, 300)

    const animaSocialmediaBtns = () => {
      const btnsSM = document.querySelectorAll('.btn-socialmedia')

      for (const btn of btnsSM) {
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, {
            duration: 0.3,
            filter: "brightness(0) saturate(100%) invert(65%) sepia(37%) saturate(6800%) hue-rotate(238deg) brightness(100%) contrast(103%)"
          })

          gsap.to(btn, {
            duration: 0.6,
            scale: 0.9,
          })
        })

        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, {
            duration: 0.3,
            filter: "brightness(0) saturate(100%) invert(76%) sepia(95%) saturate(1417%) hue-rotate(134deg) brightness(95%) contrast(84%)"
          })

          gsap.to(btn, {
            duration: 0.6,
            scale: 0.7,
          })
        })

      }
    }

    const scroll = () => {
      const groupCards = document.querySelector('.cards-container')
      const cards = document.querySelectorAll('.card')
      let scrollTime

      const scrollCards = (entries, observer) => {

        if (entries[0].isIntersecting) {
          gsap.to(entries[0].target, {
            duration: 1,
            opacity: 1,
            y: '0px'
          })
          
        } else {
          gsap.to(entries[0].target, {
            duration: 1,
            opacity: 0,
            y: '300px'

          })
        }

      }

      const observer = new IntersectionObserver(scrollCards, {
        root: document.querySelector('.group-cards-scroll'),
        threshold: 0,
      })

      
      for (const card of cards) {
        observer.observe(card)
        
      }

      const time = setTimeout(() => {
        clearTimeout(time)
        
        const cardsContainer = document.querySelector('.cards-container')
        
        if (cardsContainer !== null) {

          document.querySelector('.cards-container').addEventListener('wheel', (e) => {
            const timeline = gsap.timeline({})
    
            clearTimeout(scrollTime)
    
            if (e.deltaY > 0 || e.deltaY < 0) {
              scrollTime = setTimeout(() => {
                clearTimeout(scrollTime)
                console.log(timeline.isActive())
                  if (timeline.isActive() === false) {
                    gsap.to('.scroll', {
                      duration: 1,
                      opacity: 0.7
                    })
                  }
                }, 2000)
            }
            
            if (e.deltaY > 0) {
              if (posView < 0) {
                gsap.to(groupCards, {
                  duration: 1,
                  x: `${posView++}%`
                })
    
                gsap.to('.scroll', {
                  duration: 1,
                  x: `${posScrollBar--}%`
                })
    
                timeline.to('.scroll', {
                  duration: 0.5,
                  opacity: 1
                })
              } else {
                gsap.to('.scroll', {
                  duration: 1,
                  x: `0%`
                })
              }
      
    
    
            } else {
              if (posView > -50.5) {
    
                gsap.to(groupCards, {
                  duration: 1,
                  x: `${posView--}%`
                  
                })
    
                gsap.to('.scroll', {
                  duration: 1,
                  x: `${posScrollBar++}%`
                })
    
                timeline.to('.scroll', {
                  duration: 0.5,
                  opacity: 1
                })
              } else {
                gsap.to('.scroll', {
                  duration: 1,
                  x: `67%`
                })
              }
            }
          })
        }

        
      }, 4500)
    }

    const animaLoading = () => {
      gsap.to('.group-input-socialmedia', {
        duration: 1,
        height: '20rem',
        opacity: 1,
        delay: 0.2
      })

      gsap.to('.scroll-container', {
        duration: 3,
        opacity: 1,

      })
    }


    const changeBg = () => {
      document.querySelector('body').classList.add('contact')
    }

  })

    const handleEmail = (e) => {
      setValueEmail(e)

      
    }

    const handleMsg = (e) => {
      setValueMsg(e)
    }


  return (
    <>
      <Cursor></Cursor>
      <Header/>

      <Loading></Loading>


      <main className="contact">
        <div className="group-input-socialmedia">
          <header>
            <label className="userEmail" htmlFor="userEmail">
              <div className="output" id="outputEmail"></div>
              <input type="email" name="userEmail" translate="no" onChange={(e) => {handleEmail(e.target.value)}} id="userEmail" value={valueEmail} placeholder="contactemail@example.com" />

              <div className="border"></div>
            </label>


            <div className="group-socialmedia-btnSend">
              <div className="group-socialmedia">
                <a href="" className="btn-socialmedia"><img src={email} alt="" /></a>
                <a href="" className="btn-socialmedia"><img src={whatsapp} alt="" /></a>
                <a href="" className="btn-socialmedia"><img src={instagram} alt="" /></a>
                <a href="" className="btn-socialmedia"><img src={discord} alt="" /></a>
              </div>

              <button className="button-small" id="sendEmail">Send</button>
            </div>
          </header>

          <label htmlFor="msg" className="msg">
            <div className="output" id="outputMsg"></div>

            <textarea name="msg" id="msg"  translate="no" onChange={(e) => {handleMsg(e.target.value)}} value={valueMsg} placeholder="teste"></textarea>
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
                  <h3 className="nameService">Website Development</h3>

                  <p className="body-big">I develop everything from <span className="green">landing pages</span> to <span className="green">media streaming websites!</span> But I'm always available for challenges.</p>
                </div>
              </div>

              <button id="Website" className="btn-selectService">Let’s Go</button>
            </div>

            <div className="card">
              <div className="group-icon-text">
                <img src={virtualStory} alt="" />

                <div className="group-nameService-descriptionService">
                  <h3 className="nameService">E-commerce creation</h3>

                  <p className="body-big">I create online stores for everyone from small to <span className="green">large</span>, tailored to your needs.</p>
                </div>
              </div>

              <button id="Ecommerce" className="btn-selectService">Let’s Go</button>
            </div>

            <div className="card">
              <div className="group-icon-text">
                <img src={systemInternal} alt="" />

                <div className="group-nameService-descriptionService">
                  <h3 className="nameService">Creation of internal systems</h3>

                  <p className="body-big">I can develop any type of system your business needs, from <span className="green">tracking</span> and <span className="green">inventory management systems</span> to <span className="green">fully customized solutions.</span></p>
                </div>
              </div>

              <button id="internalSystems" className="btn-selectService">Let’s Go</button>
            </div>

            <div className="card">
              <div className="group-icon-text">
                <img src={interfaces} alt="" />

                <div className="group-nameService-descriptionService">
                  <h3 className="nameService">Creating interfaces for websites/apps</h3>

                  <p className="body-big">I develop the product interface and design from scratch or enhance what you already have.</p>
                </div>
              </div>

              <button id="interfaces" className="btn-selectService">Let’s Go</button>
            </div>

            <div className="card">
              <div className="group-icon-text">
                <img src={moblieApp} alt="" />

                <div className="group-nameService-descriptionService">
                  <h3 className="nameService">Mobile app development</h3>

                  <p className="body-big">Do you have an amazing idea for a mobile app? I can help turn your idea into reality! I create apps for <span className="green">iOS</span> and <span className="green">ndroid</span> at no extra cost.</p>
                </div>
              </div>

              <button id="MobileApp" className="btn-selectService">Let’s Go</button>
            </div>

            <div className="card">
              <div className="group-icon-text">
                <img src={consultingWebsite} alt="" />

                <div className="group-nameService-descriptionService">
                  <h3 className="nameService">Web Application Consulting</h3>

                  <p className="body-big">Is your web application not getting as many visitors as before? Is it slow? I can find out why for you!</p>
                </div>
              </div>

              <button id="consultingWebapp" className="btn-selectService">Let’s Go</button>
            </div>

            <div className="card">
              <div className="group-icon-text">
                <img src={consultingInterface} alt="" />

                <div className="group-nameService-descriptionService">
                  <h3 className="nameService">UI/UX Design Consulting</h3>

                  <p className="body-big">Has your product reached the level you've always dreamed of? Don't be fooled, <span className="green">it can go much further with a solid design!</span></p>
                </div>
              </div>

              <button id="consulting Design" className="btn-selectService">Let’s Go</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
