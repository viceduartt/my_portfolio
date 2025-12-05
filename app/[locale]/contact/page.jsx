"use client";

import Header from "../components/Header";
import Cursor from "../components/Cursor";
import Loading from "../components/Loading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";

const close = "/icons/close.svg";
const happyCat = "/images/happyCat.svg";

const instagram = "/icons/instagram.svg";
const discord = "/icons/discord.svg";
const whatsapp = "/icons/whatsapp.svg";
const email = "/icons/email.svg";
const website = "/icons/website.svg";
const interfaces = "/icons/interfaces.svg";
const moblieApp = "/icons/moblueApp.svg";
const virtualStory = "/icons/storyVirtual.svg";
const systemInternal = "/icons/systemInternal.svg";
const consultingWebsite = "/icons/consultingWebsite.svg";
const consultingInterface = "/icons/consultingDesign.svg";


function Contact() {
  const tContact = useTranslations("contact")
  const [mobile, setMobile] = useState(false)
  let posView = 0.1
  let posScrollBar = 0.3
  const [valueEmail, setValueEmail] = useState('')
  const [valueMsg, setValueMsg] = useState('')

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setMobile(true)
    }

    if (window.innerWidth <= 1000) {

      console.log("oi")
    } else {
      if (document.querySelector(".card") !== null) {
        const cards = document.querySelectorAll(".card")

        const getTag = (getTranslaye) => {
          return tContact.raw(getTranslaye)
        }

        cards.forEach(card => {
          const text = card.querySelector("h3").innerText

          card.querySelector("h3").innerText = getTag(text)
          card.querySelector("p").innerHTML = getTag(`desc-${text}`)
          card.querySelector("a").innerHTML = getTag("btnCard")
        })
      }
    }


  }, [])

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

        sendEmail()

        if (window.innerWidth > 840) {

          scroll()

        } else {
          scrollMobile()
        }
        animaSocialmediaBtns()
        changeBg()
      }
    }, 300)

    const sendEmail = async () => {
      const btnSend = document.querySelector('#sendEmail')
      const inputEmail = document.querySelector('#userEmail')

      btnSend.addEventListener('click', async () => {
        const emailContact = document.querySelector('#userEmail').value.trim()
        const bodyMsg = document.querySelector('#msg').value.trim()

        const checkEmail = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;


        if ((emailContact !== '' && bodyMsg !== '') && (emailContact.length < 254 && checkEmail.test(emailContact))) {
          const inputContainer = document.querySelector('.group-input-socialmedia')
          const borderInput = document.querySelector('.userEmail .border')
          const noticeBox = document.querySelector('.notice-sendEmail')

          gsap.to(inputContainer, {
            duration: 1,
            border: '0.3rem solid #cddf28'
          })

          gsap.to(borderInput, {
            duration: 1,
            backgroundColor: '#cddf28'
          })

          try {
            const res = await fetch("/api/sendEmail", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                emailContact: emailContact,
                bodyMsg: bodyMsg,
              }),
            });

            console.log(res)

            if (res.ok) {
              gsap.to(inputContainer, {
                duration: 1,
                border: '0.3rem solid #28df5fff',
                onComplete: () => {
                  gsap.to(inputContainer, {
                    duration: 1,
                    delay: 0.5,
                    border: '0.2rem solid #28D9DF'
                  })
                }
              })

              gsap.to(borderInput, {
                duration: 1,
                backgroundColor: '#28df5fff',
                onComplete: () => {
                  gsap.to(borderInput, {
                    duration: 1,
                    delay: 0.5,
                    backgroundColor: '#28D9DF'
                  })
                }
              })

              setValueEmail('')
              setValueMsg('')

              gsap.to(document.querySelector('.background'), {
                duration: 0.5,
                delay: 1,
                opacity: 1,
              })

              if (window.innerWidth <= 1000) {
                gsap.to(noticeBox, {
                  duration: 0.5,
                  delay: 1.3,
                  opacity: 1,
                  display: 'flex',
                  y: '10%',
                  onComplete: () => {
                    const btn = noticeBox.querySelector('button')

                    btn.addEventListener('mouseenter', () => {
                      gsap.to(btn, {
                        duration: 1,
                        opacity: 1,
                        display: 'flex'
                      })
                    })
                    btn.addEventListener('mouseleave', () => {
                      gsap.to(btn, {
                        duration: 1,
                        opacity: 0.9,
                      })
                    })

                    btn.addEventListener('click', () => {
                      gsap.to(document.querySelector('.background'), {
                        duration: 0.5,
                        opacity: 0,
                      })

                      gsap.to(noticeBox, {
                        duration: 0.5,
                        opacity: 0,
                        y: '-10%',

                        onComplete: () => {
                          gsap.to(noticeBox, {
                            duration: 0.1,
                            display: 'none'
                          })
                        }
                      })
                    })

                  }
                })
              } else {

                gsap.to(noticeBox, {
                  duration: 0.5,
                  delay: 1.3,
                  opacity: 1,
                  display: 'flex',
                  y: '10%',
                  onComplete: () => {
                    const btn = noticeBox.querySelector('button')

                    btn.addEventListener('mouseenter', () => {
                      gsap.to(btn, {
                        duration: 1,
                        opacity: 1,
                        display: 'flex'
                      })
                    })
                    btn.addEventListener('mouseleave', () => {
                      gsap.to(btn, {
                        duration: 1,
                        opacity: 0.9,
                      })
                    })

                    btn.addEventListener('click', () => {
                      gsap.to(document.querySelector('.background'), {
                        duration: 0.5,
                        opacity: 0,
                      })

                      gsap.to(noticeBox, {
                        duration: 0.5,
                        opacity: 0,
                        y: '-10%',

                        onComplete: () => {
                          gsap.to(noticeBox, {
                            duration: 0.1,
                            display: 'none'
                          })
                        }
                      })
                    })

                  }
                })
              }


            } else {
              gsap.to(inputContainer, {
                duration: 1,
                border: '0.3rem solid #f11212ff'
              })

              gsap.to(borderInput, {
                duration: 1,
                backgroundColor: '#f11212ff'
              })
            }

          } catch {
            console.log('error in sendEmail')

            gsap.to(inputContainer, {
              duration: 1,
              border: '0.3rem solid #f11212ff'
            })

            gsap.to(borderInput, {
              duration: 1,
              backgroundColor: '#f11212ff'
            })
          }


        }

      })


      inputEmail.addEventListener('keydown', async (e) => {
        console.log(e.key)
        const emailContact = document.querySelector('#userEmail').value.trim()
        const bodyMsg = document.querySelector('#msg').value.trim()

        const checkEmail = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

        console.log(e.key)

        if (e.key === 'Enter') {
          if ((emailContact !== '' && bodyMsg !== '') && (emailContact.length < 254 && checkEmail.test(emailContact))) {
            const inputContainer = document.querySelector('.group-input-socialmedia')
            const borderInput = document.querySelector('.userEmail .border')
            const noticeBox = document.querySelector('.notice-sendEmail')

            gsap.to(inputContainer, {
              duration: 1,
              border: '0.3rem solid #cddf28'
            })

            gsap.to(borderInput, {
              duration: 1,
              backgroundColor: '#cddf28'
            })

            try {
              const res = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  emailContact: emailContact,
                  bodyMsg: bodyMsg,
                }),
              });

              console.log(res)

              if (res.ok) {
                gsap.to(inputContainer, {
                  duration: 1,
                  border: '0.3rem solid #28df5fff',
                  onComplete: () => {
                    gsap.to(inputContainer, {
                      duration: 1,
                      delay: 0.5,
                      border: '0.2rem solid #28D9DF'
                    })
                  }
                })

                gsap.to(borderInput, {
                  duration: 1,
                  backgroundColor: '#28df5fff',
                  onComplete: () => {
                    gsap.to(borderInput, {
                      duration: 1,
                      delay: 0.5,
                      backgroundColor: '#28D9DF'
                    })
                  }
                })

                setValueEmail('')
                setValueMsg('')

                gsap.to("*", {
                  pointerEvents: "none",
                  duration: 0.1
                })

                gsap.to(".notice-sendEmail button", {
                  duration: 0.1,
                  pointerEvents: "all",
                })

                gsap.to(document.querySelector('.background'), {
                  duration: 0.5,
                  delay: 1,
                  opacity: 1,
                })

                gsap.from(noticeBox, {
                  duration: 0.1,
                  y: "-4vh"
                })

                gsap.to(noticeBox, {
                  duration: 0.5,
                  delay: 1.3,
                  opacity: 1,
                  pointerEvents: "all",
                  y: '0vh',
                  onComplete: () => {
                    const btn = noticeBox.querySelector('button')

                    btn.addEventListener('mouseenter', () => {
                      gsap.to(btn, {
                        duration: 1,
                        opacity: 1,
                      })
                    })
                    btn.addEventListener('mouseleave', () => {
                      gsap.to(btn, {
                        duration: 1,
                        opacity: 0.9,
                      })
                    })

                    btn.addEventListener('click', () => {
                      gsap.to("*", {
                        pointerEvents: "all",
                        duration: 0.1
                      })

                      gsap.to(document.querySelector('.background'), {
                        duration: 0.5,
                        opacity: 0,
                      })

                      gsap.to(noticeBox, {
                        duration: 0.5,
                        opacity: 0,
                        pointerEvents: "none",
                        y: '-3vh'
                      })
                    })

                  }
                })

              } else {
                gsap.to(inputContainer, {
                  duration: 1,
                  border: '0.3rem solid #f11212ff'
                })

                gsap.to(borderInput, {
                  duration: 1,
                  backgroundColor: '#f11212ff'
                })
              }

            } catch {
              console.log('error in sendEmail')

              gsap.to(inputContainer, {
                duration: 1,
                border: '0.3rem solid #f11212ff'
              })

              gsap.to(borderInput, {
                duration: 1,
                backgroundColor: '#f11212ff'
              })
            }


          }
        }


      })
    }

    const animaSocialmediaBtns = () => {
      const btnsSM = document.querySelectorAll('.btn-socialmedia')

      for (const btn of btnsSM) {
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, {
            duration: 0.3,
            filter: "brightness(0) saturate(100%) invert(65%) sepia(37%) saturate(6800%) hue-rotate(238deg) brightness(100%) contrast(103%)"
          })

          if (window.innerWidth <= 840) {
            gsap.to(btn, {
              duration: 0.6,
              scale: 1.1,
            })
          } else {

            gsap.to(btn, {
              duration: 0.6,
              scale: 0.9,
            })
          }

        })

        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, {
            duration: 0.3,
            filter: "brightness(0) saturate(100%) invert(76%) sepia(95%) saturate(1417%) hue-rotate(134deg) brightness(95%) contrast(84%)"
          })

          if (window.innerWidth <= 840) {
            gsap.to(btn, {
              duration: 0.6,
              scale: 1,
            })
          } else {

            gsap.to(btn, {
              duration: 0.6,
              scale: 0.7,
            })
          }
        })


      }
    }

    const scrollMobile = () => {
      const cards = document.querySelectorAll('.card')

      const obs = new IntersectionObserver((entries) => {
        console.log(entries)

        if (entries[0].isIntersecting === true) {

          gsap.to(entries[0].target, {
            duration: 1,
            opacity: 1,
            x: '0rem'

          })
        } else {
          gsap.to(entries[0].target, {
            duration: 1,
            opacity: '0',
            x: '20rem'
          })
        }
      }, {
        threshold: 0.2,
        rootMargin: ''
      })

      for (const card of cards) {
        obs.observe(card)
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

      if (window.innerWidth <= 840) {
        gsap.to('.group-input-socialmedia', {
          duration: 1,
          height: '36rem',
          opacity: 1,
          delay: 0.2
        })
      } else {
        gsap.to('.group-input-socialmedia', {
          duration: 1,
          height: '23rem',
          opacity: 1,
          delay: 0.2
        })
      }

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

    const checkEmail = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

    if (checkEmail.test(valueEmail) && valueMsg.length > 2) {
      gsap.to(document.querySelector('#sendEmail'), {
        duration: 0.5,
        opacity: 1,
        padding: '0 3rem'
      })
    } else {
      gsap.to(document.querySelector('#sendEmail'), {
        duration: 0.5,
        opacity: 0.6,
        padding: '0 0.8rem'
      })
    }

  }

  const handleMsg = (e) => {
    setValueMsg(e)

    const checkEmail = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

    if (checkEmail.test(valueEmail) && valueMsg.length > 2) {
      gsap.to(document.querySelector('#sendEmail'), {
        duration: 0.5,
        opacity: 1,
        padding: '0 3rem'

      })
    } else {
      gsap.to(document.querySelector('#sendEmail'), {
        duration: 0.5,
        opacity: 0.6,
        padding: '0 0.8rem'
      })
    }
  }

  const chnageTextMobile = () => {
    if (document.querySelector(".cardMobile") !== null) {

      const cards = document.querySelectorAll(".cardMobile")

      const getTag = (getTranslaye) => {
        return tContact.raw(getTranslaye)

      }

      cards.forEach(card => {
        const text = card.querySelector("h3").innerText

        card.querySelector("h3").innerText = getTag(text)
        card.querySelector("p").innerHTML = getTag(`desc-${text}`)
        card.querySelector("a").innerHTML = getTag("btnCard")

      })
    }
  }

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

              <span className="notice-msg">{tContact("noticemsg")}</span>
            </div>
          </div>

          <div className="group-input-socialmedia">
            <header>
              <label className="userEmail" htmlFor="userEmail">
                <input type="email" name="userEmail" translate="no" onChange={(e) => { handleEmail(e.target.value) }} id="userEmail" value={valueEmail} placeholder={tContact("placeholderInput")} />

                <div className="border"></div>
              </label>
            </header>


            <div className="msg-send">
              <label htmlFor="msg" className="msg">

                <textarea name="msg" id="msg" translate="no" onChange={(e) => { handleMsg(e.target.value) }} value={valueMsg} placeholder={tContact("placeholderTextarea")}></textarea>
              </label>


              <button className="button-small" id="sendEmail">{tContact("sendEmail")}</button>
            </div>
          </div>


          <div className="group-socialmedia-cards">
            <div className="group-socialmedia">
              <a target="_blank" href="maito:viceduartt@gmail.com" className="btn-socialmedia"><img src={email} alt="" /></a>
              <a target="_blank" href="https://wa.me/5581989258359" className="btn-socialmedia"><img src={whatsapp} alt="" /></a>
              <a target="_blank" href="https://www.instagram.com/viceduartt/?next=%2F" className="btn-socialmedia"><img src={instagram} alt="" /></a>
              <a target="_blank" href="https://github.com/viceduartt" className="btn-socialmedia"><img src={discord} alt="" /></a>
            </div>

            <div className="group-cards-scroll">
              <div className="scroll-container">
                <div className="scroll"></div>
              </div>

              <div className="cards-container" data-scroll='no'>

                <div onLoad={() => { chnageTextMobile() }} className="card cardMobile">

                  <div className="group-icon-text">
                    <img src={website} alt="" />

                    <div className='group-nameService-descriptionService'>
                      <h3 className="nameService">Website Development</h3>

                      <p className="body-big">I develop everything from <span className="green">landing pages</span> to <span className="green">media streaming websites!</span> But I'm always available for challenges.</p>
                    </div>
                  </div>

                  <a target="_blank" href="https://wa.me/5581989258359?text=Hi%2C%20I%20need%20someone%20to%20create%20a%20website%20for%20my%20business.%20(Describe%20the%20type%20of%20website%20and%20the%20features%20you%20would%20like)" d="Website" id="Website" className="btn-selectService">Let’s Go</a>
                </div>

                <div className="card cardMobile">
                  <div className="group-icon-text">
                    <img src={virtualStory} alt="" />

                    <div className="group-nameService-descriptionService">
                      <h3 className="nameService">E-commerce creation</h3>

                      <p className="body-big">I create online stores for everyone from small to <span className="green">large</span>, tailored to your needs.</p>
                    </div>
                  </div>

                  <a target="_blank" href="https://wa.me/5581989258359?text=Hi%2C%20I%20need%20someone%20to%20create%20an%20online%20store%20for%20my%20business.%20(Please%20tell%20me%20more%20about%20the%20features%20the%20online%20store%20will%20have%2C%20and%20its%20size.)" id="Ecommerce" className="btn-selectService">Let’s Go</a>
                </div>

                <div className="card cardMobile">
                  <div className="group-icon-text">
                    <img src={systemInternal} alt="" />

                    <div className="group-nameService-descriptionService">
                      <h3 className="nameService">Creation of internal systems</h3>

                      <p className="body-big">I can develop any type of system your business needs, from <span className="green">tracking</span> and <span className="green">inventory management systems</span> to <span className="green">fully customized solutions.</span></p>
                    </div>
                  </div>

                  <a target="_blank" href="https://wa.me/5581989258359?text=Hello%2C%20I%20need%20you%20to%20create%20a%20system%20for%20my%20business.%20(Describe%20exactly%20what%20you%20need.)" id="internalSystems" className="btn-selectService">Let’s Go</a>
                </div>

                <div className="card cardMobile">
                  <div className="group-icon-text">
                    <img src={interfaces} alt="" />

                    <div className="group-nameService-descriptionService">
                      <h3 className="nameService">Creating interfaces for websites/apps</h3>

                      <p className="body-big">I develop the product interface and design from scratch or enhance what you already have.</p>
                    </div>
                  </div>

                  <a target="_blank" href="https://wa.me/5581989258359?text=Hi%2C%20I%20need%20you%20to%20create%20some%20interfaces%20for%20my%20app%2Fwebsite.%20(Please%20provide%20more%20details.)" id="interfaces" className="btn-selectService">Let’s Go</a>
                </div>

                <div className="card cardMobile">
                  <div className="group-icon-text">
                    <img src={moblieApp} alt="" />

                    <div className="group-nameService-descriptionService">
                      <h3 className="nameService">Mobile app development</h3>

                      <p className="body-big">Do you have an amazing idea for a mobile app? I can help turn your idea into reality! I create apps for <span className="green">iOS</span> and <span className="green">ndroid</span> at no extra cost.</p>
                    </div>
                  </div>

                  <a target="_blank" href="https://wa.me/5581989258359?text=Hi%2C%20I%20need%20you%20to%20create%20a%20mobile%20app%20for%20my%20business.%20(Please%20provide%20more%20details.)" id="MobileApp" className="btn-selectService">Let’s Go</a>
                </div>

                <div className="card cardMobile">
                  <div className="group-icon-text">
                    <img src={consultingWebsite} alt="" />

                    <div className="group-nameService-descriptionService">
                      <h3 className="nameService">Web Application Consulting</h3>

                      <p className="body-big">Is your web application not getting as many visitors as before? Is it slow? I can find out why for you!</p>
                    </div>
                  </div>

                  <a target="_blank" href="https://wa.me/5581989258359?text=Hello%2C%20I%20have%20a%20web%20application%20and%20I%20would%20like%20to%20request%20your%20consulting%20services%20for%20(Please%20provide%20more%20details%20and%20explain%20your%20problem)." id="consultingWebapp" className="btn-selectService">Let’s Go</a>
                </div>

                <div className="card cardMobile">
                  <div className="group-icon-text">
                    <img src={consultingInterface} alt="" />

                    <div className="group-nameService-descriptionService">
                      <h3 className="nameService">UI/UX Design Consulting</h3>

                      <p className="body-big">Has your product reached the level you've always dreamed of? Don't be fooled, <span className="green">it can go much further with a solid design!</span></p>
                    </div>
                  </div>

                  <a target="_blank" href="https://wa.me/5581989258359?text=Hello%2C%20I%20already%20have%20a%20design%20for%20my%20app%2Fwebsite%2C%20but%20I%20would%20like%20to%20request%20your%20consulting%20services." id="consulting Design" className="btn-selectService">Let’s Go</a>
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

              <span className="notice-msg">{tContact("noticemsg")}</span>
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
                  <a target="_blank" href="maito:viceduartt@gmail.com" className="btn-socialmedia"><img src={email} alt="" /></a>
                  <a target="_blank" href="https://wa.me/5581989258359" className="btn-socialmedia"><img src={whatsapp} alt="" /></a>
                  <a target="_blank" href="https://www.instagram.com/viceduartt/?next=%2F" className="btn-socialmedia"><img src={instagram} alt="" /></a>
                  <a target="_blank" href="https://github.com/viceduartt" className="btn-socialmedia"><img src={discord} alt="" /></a>
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
                    <h3 className="nameService">Website Development</h3>

                    <p className="body-big"></p>
                  </div>
                </div>

                <a target="_blank" href="https://wa.me/5581989258359?text=Hi%2C%20I%20need%20someone%20to%20create%20a%20website%20for%20my%20business.%20(Describe%20the%20type%20of%20website%20and%20the%20features%20you%20would%20like)" d="Website" className="btn-selectService">Let’s Go</a>
              </div>

              <div className="card">
                <div className="group-icon-text">
                  <img src={virtualStory} alt="" />

                  <div className="group-nameService-descriptionService">
                    <h3 className="nameService">E-commerce creation</h3>

                    <p className="body-big"></p>
                  </div>
                </div>

                <a target="_blank" href="https://wa.me/5581989258359?text=Hi%2C%20I%20need%20someone%20to%20create%20an%20online%20store%20for%20my%20business.%20(Please%20tell%20me%20more%20about%20the%20features%20the%20online%20store%20will%20have%2C%20and%20its%20size.)" id="Ecommerce" className="btn-selectService">Let’s Go</a>
              </div>

              <div className="card">
                <div className="group-icon-text">
                  <img src={systemInternal} alt="" />

                  <div className="group-nameService-descriptionService">
                    <h3 className="nameService">Creation of internal systems</h3>

                    <p className="body-big"></p>
                  </div>
                </div>

                <a target="_blank" href="https://wa.me/5581989258359?text=Hello%2C%20I%20need%20you%20to%20create%20a%20system%20for%20my%20business.%20(Describe%20exactly%20what%20you%20need.)" id="internalSystems" className="btn-selectService">Let’s Go</a>
              </div>

              <div className="card">
                <div className="group-icon-text">
                  <img src={interfaces} alt="" />

                  <div className="group-nameService-descriptionService">
                    <h3 className="nameService">Creating interfaces for websites/apps</h3>

                    <p className="body-big"></p>
                  </div>
                </div>

                <a target="_blank" href="https://wa.me/5581989258359?text=Hi%2C%20I%20need%20you%20to%20create%20some%20interfaces%20for%20my%20app%2Fwebsite.%20(Please%20provide%20more%20details.)" id="interfaces" className="btn-selectService">Let’s Go</a>
              </div>

              <div className="card">
                <div className="group-icon-text">
                  <img src={moblieApp} alt="" />

                  <div className="group-nameService-descriptionService">
                    <h3 className="nameService">Mobile app development</h3>

                    <p className="body-big"></p>
                  </div>
                </div>

                <a target="_blank" href="https://wa.me/5581989258359?text=Hi%2C%20I%20need%20you%20to%20create%20a%20mobile%20app%20for%20my%20business.%20(Please%20provide%20more%20details.)" id="MobileApp" className="btn-selectService">Let’s Go</a>
              </div>

              <div className="card">
                <div className="group-icon-text">
                  <img src={consultingWebsite} alt="" />

                  <div className="group-nameService-descriptionService">
                    <h3 className="nameService">Web Application Consulting</h3>

                    <p className="body-big"></p>
                  </div>
                </div>

                <a target="_blank" href="https://wa.me/5581989258359?text=Hello%2C%20I%20have%20a%20web%20application%20and%20I%20would%20like%20to%20request%20your%20consulting%20services%20for%20(Please%20provide%20more%20details%20and%20explain%20your%20problem)." id="consultingWebapp" className="btn-selectService">Let’s Go</a>
              </div>

              <div className="card">
                <div className="group-icon-text">
                  <img src={consultingInterface} alt="" />

                  <div className="group-nameService-descriptionService">
                    <h3 className="nameService">UI/UX Design Consulting</h3>

                    <p className="body-big"></p>
                  </div>
                </div>

                <a target="_blank" href="https://wa.me/5581989258359?text=Hello%2C%20I%20already%20have%20a%20design%20for%20my%20app%2Fwebsite%2C%20but%20I%20would%20like%20to%20request%20your%20consulting%20services." id="consulting Design" className="btn-selectService">Let’s Go</a>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

}

export default Contact;
