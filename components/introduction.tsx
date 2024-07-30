import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import CircleImage from "@/components/circle-image";
import { MotionTransition } from './transition-component';

const Introduction = () => {
    const [isWideScreen, setIsWideScreen] = useState(false);
    const [isShortScreen, setIsShortScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 1200);
            setIsShortScreen(window.innerHeight < 650);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const textSizeClass = isShortScreen 
        ? 'text-lg md:text-2xl' 
        : 'text-2xl md:text-4xl';

    const paragraphSizeClass = isShortScreen
        ? 'text-sm md:text-base'
        : 'text-base md:text-xl';

    return (
        <div className="relative z-20 w-full h-screen bg-darkBg/60 flex flex-col justify-center items-center overflow-hidden">
            <div className="max-w-md px-6 z-24">
                <h1 className={`mb-5 leading-tight text-center ${textSizeClass} md:mb-10`}>
                    Fernando Lucas, <br />
                    <TypeAnimation
                        sequence={[
                            'Data Analyst',
                            1000,
                            'Business Analyst',
                            1000,
                            'Data Scientist',
                            1000,
                            'Finance Specialist',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-secondary"
                    />
                </h1>
                <p className={`mb-2 text-center ${paragraphSizeClass} md:mb-6`}>
                    Cuento con formación en Administración y Dirección de Empresas (ADE) y especialización en análisis de datos, machine learning y deep learning. A lo largo de mi carrera profesional, he asesorado a más de 500 empresas en el ámbito financiero corporativo. Actualmente, mi objetivo es ofrecer soluciones estratégicas basadas en datos, integrando mi experiencia en el mundo de los negocios.
                </p>

                <div className="flex items-center justify-center gap-3 md:gap-10">
                    <a href="/portfolio" className={`px-3 py-2 my-2 transition-all border-2 cursor-pointer ${isShortScreen ? 'text-sm' : 'text-md'} w-fit rounded-xl hover:shadow-lg hover:shadow-white/30`}>
                        Ver proyectos
                    </a>
                    <a href="/Fernando_Lucas_cv.pdf"
                        download="Fernando_Lucas_cv.pdf"
                        className={`px-3 py-2 my-5 transition-all border-2 cursor-pointer ${isShortScreen ? 'text-sm' : 'text-md'} w-fit text-secondary border-secondary rounded-xl hover:shadow-lg hover:shadow-secondary/30`}>
                        Descarga mi CV
                    </a>
                </div>
            </div>
            {isWideScreen && <CircleImage />}
            {isWideScreen && (
                <div className="absolute bottom-0 left-0 w-1/2 max-w-xl">
                    <MotionTransition position='right' className="bottom-0 left-0 hidden md:inline-block md:absolute ">
                        <Image 
                            src="/home-4.png" 
                            priority 
                            width={450} 
                            height={450} 
                            alt="Avatar"
                            className="w-full h-auto"
                        />
                    </MotionTransition>
                </div>
            )}
        </div>
    );
}

export default Introduction;