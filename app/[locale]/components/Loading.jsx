import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect } from "react";

function Loading() {
    let scrollY = 0;
    let touchStart = 0;

    function onTouchStart(e) {
        touchStart = e.touches[0].clientY;
    }

    function onTouchMove(e) {
        e.preventDefault();
        const current = e.touches[0].clientY;
        const delta = touchStart - current;
        touchStart = current;
        scrollY += delta;
        clamp();
        update();
    }

    function update() {
        window.scrollTo(0, scrollY);
    }

    function onWheel(e) {
        const runScroll = JSON.parse(sessionStorage.getItem('scroll'))

        if (runScroll !== null) {
            if (runScroll.run === "true") {
                e.preventDefault();
                scrollY += e.deltaY;
                clamp();
                update();
            }
        }
    }

    function clamp() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        scrollY = Math.max(0, Math.min(scrollY, max));
    }


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        sessionStorage.setItem('scroll', JSON.stringify({
            run: "false"
        }))
    }, [])

    useGSAP(() => {
        const timeline = gsap.timeline({})

        timeline.to('.loading', {
            opacity: 1,
            duration: 0.1,
        })


        timeline.to('.loading', {
            opacity: 0,
            zIndex: '-1',
            duration: 0.5,
            delay: 0.2,
            onComplete: () => {
                const time = setTimeout(() => {
                    clearTimeout(time)
                    if (window.innerWidth <= 1088) {
                        sessionStorage.setItem('scroll', JSON.stringify({
                            run: "true"
                        }))

                        window.addEventListener('wheel', onWheel, { passive: false });
                        window.addEventListener('touchstart', onTouchStart, { passive: false });
                        window.addEventListener('touchmove', onTouchMove, { passive: false });

                    }
                }, 600);
            }
        })
    })
    return (
        <div className="loading"></div>
    )
}

export default Loading;
