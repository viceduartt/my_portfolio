import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function Cursor() {
  let cursorX = 0
  let cursorY = 0

  useGSAP(() => {
    const idTime = setInterval(() => {
      const cursor = document.querySelector('.cursor')
      const areaCursor = document.querySelectorAll('.area-mouse')

      if (cursor !== undefined && areaCursor !== undefined) {
        clearInterval(idTime)
        moveCursor(cursor, areaCursor)
        
        for (const e of areaCursor) {
          areaEnter(cursor, e)
        }
      }
    }, 200)

    const areaEnter = (cursor, areaCursor) => {
      
      areaCursor.addEventListener('mouseenter', (e) => {
        const parentElment = areaCursor.parentElement

        parentElment.dataset.enter = 'false'
        e = e.target
        let pos = e.clientHeight/2

        cursorY = pos
        
        gsap.to('.cursor', {
          scale: 0.2,
          y: cursorY,
          duration: 8
        }) 

        console.log(pos)
      })
    }

    const moveCursor = (cursor, areaCursor) => {
      document.addEventListener('mousemove', (e) => {
        gsap.from(('.cursor'), {
          x: cursorX,
          y: cursorY,
          opacity: 1,
          scale: 1.1,
          duration: 0.5
        })

        cursorX = e.clientX
        cursorY = e.clientY


        gsap.to(('.cursor'), {
          x: cursorX,
          y: cursorY,
          opacity: 0.8,
          scale: 1,
          duration: 0.5,
          ease: 'line'
        })

        gsap.to('.cursor', {
          scale: 1.3,
          repeat: -1,
          yoyo: true,
          duration: 0.6
        })
      })
    }
  }, [])




  return (
    <div className="cursor">
    </div>

  );
}

export default Cursor;
