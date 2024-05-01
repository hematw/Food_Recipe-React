import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function BackGlow() {
    useGSAP(() => {
        const timeline = gsap.timeline()
        timeline.to(".hero-pizza",
            {
                rotation: 360,
                duration: 40,
                repeat: -1,
                yoyo: true,
                ease: "linear"
            })

            gsap.from(".hero-text", {x: "-1000px", duration: 1})
            gsap.from(".hero-pizza", {x: "1000px", duration: 1})
    })

    return (
        <div className="w-full py-16 flex flex-col md:flex-row md:justify-between items-center">
            <div class="hero-text md:w-1/2 text-center md:text-left mt-10 order-1 md:order-none">
                <h1 className="text-2xl md:text-4xl">
                    Explore Delicious Recipes from Around the World with
                </h1>

                <h1 className="brand font-bold text-5xl md:text-8xl mt-8 md:mt-0">
                    Atom Foods
                </h1>
            </div>

            <div class="w-80 md:mr-20 hero-pizza">
                <img src="/pizza.png" alt="Pizza Image." />
            </div>
        </div>
    )
}