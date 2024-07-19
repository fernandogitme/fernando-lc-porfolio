"use client"

import { useState, useEffect } from 'react';
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import ContainerPageServices from "@/components/container-page-services";

const ServicesPage = () => {
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 1655);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Check the window size when the component mounts

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <TransitionPage />
            {isWideScreen && <CircleImage />}
            {isWideScreen && <AvatarServices />}
            <ContainerPageServices>
                <div className="grid items-center justify-center  gap-2 mx-auto max-w-5xl md:grid-cols-2">
                    <div className="max-w-[450px]">
                        <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                            Mis <span className="font-bold text-secondary"> Competencias.</span>
                        </h1>
                        <p className="mb-3 text-xl text-gray-300">
                            Como profesional multidisciplinario, integro habilidades tanto en análisis de datos, ciencia de datos, inteligencia artificial, así como experiencia en modelos de negocios y gestión financiera. Este enfoque integral me permite abordar problemas complejos desde diversas perspectivas, ofreciendo soluciones innovadoras y fundamentadas en datos.
                        </p>
                        <div className="flex justify-center mt-8">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fernandolucasprof@gmail.com" target="_blank" rel="noopener noreferrer">
                                <button className="px-5 py-4 rounded-lg text-lg bg-secondary hover:bg-secondary/65 flex flex-col items-center">
                                    <span className="text-base font-bold">Contacta conmigo</span>
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* SLIDER */}
                    <div>
                        <SliderServices />
                    </div>
                </div>
            </ContainerPageServices>
        </>
    );
}

export default ServicesPage;