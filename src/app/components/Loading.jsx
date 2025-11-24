import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function Loading() {
    useGSAP(() => {
        const timeline = gsap.timeline({})

        timeline.to('.loading', {
            opacity: 1,
            duration: 0.1
        })

        timeline.to('.loading', {
            opacity: 0,
            zIndex: '-1',
            duration: 0.5,
            delay: 0.2
        })
    })
    return (
        <div className="loading"></div>
    )
}

export default Loading;
