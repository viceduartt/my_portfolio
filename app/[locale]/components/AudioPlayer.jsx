"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export default function AudioPlayer() {
  let volume = 0
  const maxVolume = 0.5
  let lock = false

  const time = setTimeout(() => {
    if (document.querySelector(".musicPlayer") !== null) {
      if (lock === false) {
        clearInterval(time)


        document.addEventListener("keydown", () => {
          sessionStorage.setItem('audio', JSON.stringify({
            currentTime: audio.currentTime,
            duration: audio.duration,
            play: "false"
          }))
        })
  
        const audioConfig = JSON.parse(sessionStorage.getItem('audio'))



        const audio = document.querySelector(".musicPlayer")
  
        const fadeinVolume = () => {
          audio.dataset.play = "true"
          
          sessionStorage.setItem('audio', JSON.stringify({
            currentTime: audio.currentTime,
            duration: audio.duration,
            play: audio.dataset.play
          }))

          if (window.innerWidth >= 1000) {
            gsap.to(".button-music", {
              duration: 1,
              scale: 1.2,
              opacity: 1
            })
          }
  
  
          const delay = setInterval(() => {  
            if (audio.volume >= maxVolume - 0.1) {
              clearInterval(delay)
            } else {
              volume = volume + 0.1
              audio.volume = volume
            }
          }, 50)
        }

        if (audioConfig !== null) {
          if (audioConfig.play === "true") {
            audio.currentTime = audioConfig.currentTime
            console.log(audio)
            audio.play()

            const delay = setInterval(() => {  
            if (audio.volume >= maxVolume - 0.1) {
              clearInterval(delay)
            } else {
              volume = volume + 0.1
              audio.volume = volume
            }
          }, 50)
          }
        }

        if (audioConfig !== null) {
          if (audioConfig.currentTime !== null) {
            document.addEventListener("click", () => {
              if (lock === false) {        
                lock = true
  
                audio.dataset.play = "true"
      
                volume = 0
                audio.volume = volume
                audio.play()
                fadeinVolume()
              }
            })
    
          }
        } else {
            document.addEventListener("click", () => {
              if (lock === false) {
                lock = true
  
                audio.dataset.play = "true"
                volume = 0
                audio.volume = volume
                audio.play()
                fadeinVolume()
              }
            })
          }
  
      }
    }
  }, 700) 
  return (
    <>
      <audio loop className="musicPlayer" data-play="false" src="/musics/mix.mp3">
      </audio>
    </>
  );
}
