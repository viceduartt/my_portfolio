import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function Cursor() {
  let cursorX = 0
  let cursorY = 0
  let state = 0

  useGSAP(() => {
    const idTime = setInterval(() => {
      const cursor = document.querySelector('.cursor')
      const areaCursor = document.querySelectorAll('.area-mouse')

      if (cursor !== undefined && areaCursor !== null) {
        console.log('oi')
        clearInterval(idTime)

        const elementsClick = document.querySelectorAll('a, button, .button-music, label, textarea ')

        elementsClick.forEach(eClick => {
          eClick.addEventListener('mouseenter', () => {
            console.log('teste enter')

            gsap.from('.cursor', {
              opacity: 0,
              duration: 0.5,
            })
            
            gsap.to('.cursor', {
              opacity: 1,
              scale: 0.05,
              backgroundImage: "url('../images/cursor_pointer.svg')",
              duration: 1,

            })
          })

          eClick.addEventListener('mouseleave', () => {
          console.log('teste leave')

            gsap.from('.cursor', {
              opacity: 0,
              duration: 0.5,
            })
            
            gsap.to('.cursor', {
              opacity: 1,
              scale: 1,
              duration: 1,
              backgroundImage: "url('../images/cursor_default.svg')",
            })
          })
        })

        moveCursor(cursor, areaCursor)

      }
    }, 200)


    const moveCursor = (cursor, areaCursor) => {
      document.addEventListener('mousemove', (e) => {
        
        if (state === 0) {

          cursorX = e.clientX
          cursorY = e.clientY


          gsap.from(('.cursor'), {
            x: cursorX,
            y: cursorY,
            opacity: 1,
            scale: 1,
            duration: 10
          })  
        }
      })
    }
  }, [])




  return (
    <div className="cursor">
    </div>

  );
}

export default Cursor;
