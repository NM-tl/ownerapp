import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Image from "next/image";
import SimpleLayout from "@/ui/Layouts/simpleLayout"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        const contentElement = contentRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: contentElement,
                start: 'top 80%',
                end: 'bottom 60%',
                toggleActions: 'play none none reverse',
            },
        });

        tl.from(contentElement, {
            y: 30,
            duration: 2,
            ease: 'power2.inOut',
        });
    }, []);

    return (
        <SimpleLayout>
            <div ref={contentRef} className='flex flex-col'>
                <div className="flex gap-5 items-center">
                    <div className="text-center lg:text-left flex flex-col max-w-lg">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-7xl">
                        Boost your productivity. Start using our app today.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
                        sagittis vel nulla.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <a
                        href="#"
                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                        Get started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6">
                        Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8 fixed">
                    <Image src="/vercel.svg" alt="App screenshot" width={600} height={300} />
                    </div>
                </div>
                <div className="min-h-screen">123</div>
                <div className="min-h-screen">123</div>
                <div className="min-h-screen">123</div>
            </div>
        </SimpleLayout>
    );
};

export default About;
