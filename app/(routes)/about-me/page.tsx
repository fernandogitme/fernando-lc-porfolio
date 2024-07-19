"use client"

import { useState, useEffect } from 'react';
import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 1550);
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
            <ContainerPage>
                <div className="flex flex-col items-center justify-center min-h-screen">
                    {isWideScreen && <Avatar />}
                    <h1 className="text-2xl leading-tight text-center md:text-5xl md:mt-10">
                        Toda mi{' '}
                        <span className="font-bold text-secondary">
                            trayectoria profesional
                        </span>
                    </h1>

                    <CounterServices />
                    <TimeLine />
                </div>
            </ContainerPage>
        </>
    );
}

export default AboutMePage;
