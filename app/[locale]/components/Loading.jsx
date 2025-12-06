import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useRef } from "react";

function Loading() {

    const settings = useRef({
        friction: 0.9,
        sensitivity: 1.3,
        smooth: 0.10
    });

    const scrollY = useRef(0);
    const targetScrollY = useRef(0);
    const velocity = useRef(0);
    const touchStart = useRef(0);

    function onTouchStart(e) {
        touchStart.current = e.touches[0].clientY;
        velocity.current = 0;
    }

    function onTouchMove(e) {
        const runScroll = JSON.parse(sessionStorage.getItem('scroll'))
        if (!runScroll || runScroll.run !== "true") return;

        e.preventDefault();
        const current = e.touches[0].clientY;
        const delta = (touchStart.current - current) * settings.current.sensitivity;

        touchStart.current = current;
        targetScrollY.current += delta;

        clamp();
    }


    function onWheel(e) {
        const runScroll = JSON.parse(sessionStorage.getItem('scroll'))
        if (!runScroll || runScroll.run !== "true") return;

        e.preventDefault();

        const delta = e.deltaY * settings.current.sensitivity;

        velocity.current += delta;
        clamp();
    }


    function clamp() {
        const max = document.documentElement.scrollHeight - window.innerHeight;

        targetScrollY.current = Math.max(0, Math.min(targetScrollY.current, max));
    }


    function animate() {

        // easing para reduzir jitter
        scrollY.current += (targetScrollY.current - scrollY.current) * settings.current.smooth;

        // inércia real
        velocity.current *= settings.current.friction;
        targetScrollY.current += velocity.current;

        clamp();

        window.scrollTo(0, scrollY.current);

        requestAnimationFrame(animate);
    }


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });

        sessionStorage.setItem('scroll', JSON.stringify({
            run: "false"
        }));

        requestAnimationFrame(animate);

    }, []);


    useGSAP(() => {
        const timeline = gsap.timeline({})

        timeline.to('.loading', {
            opacity: 1,
            duration: 0.1,
        });

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
                        }));

                        window.addEventListener('wheel', onWheel, { passive: false });
                        window.addEventListener('touchstart', onTouchStart, { passive: false });
                        window.addEventListener('touchmove', onTouchMove, { passive: false });

                    }
                }, 600);
            }
        });
    });

    return (
        <div className="loading"></div>
    )
}

export default Loading;
