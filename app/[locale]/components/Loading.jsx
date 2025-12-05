import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect } from "react";

function Loading() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
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
                if (window.innerWidth <= 1000) {
                    gsap.to("*", {
                        duration: 0.1,
                        overflowY: "auto"
                    })
                }
            }
        })
    })
    return (
        <div className="loading"></div>
    )
}

export default Loading;
