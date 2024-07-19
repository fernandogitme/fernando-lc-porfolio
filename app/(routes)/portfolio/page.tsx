"use client"

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";

import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";

const PortfolioPage = () => {
    const [isWideScreenAvatar, setIsWideScreenAvatar] = useState(false);
    const [isWideScreenCircle, setIsWideScreenCircle] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreenAvatar(window.innerWidth >= 1650);
            setIsWideScreenCircle(window.innerWidth >= 1500);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Check the window size when the component mounts

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        document.body.classList.add('no-scroll');
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <ContainerPage>
            <TransitionPage />
            {isWideScreenAvatar && <AvatarPortfolio />}
            {isWideScreenCircle && <CircleImage />}
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Mis últimos <span className="font-bold text-secondary">proyectos realizados</span>
                </h1>

                <div className="relative z-1 grid max-w-5xl gap-20 mx-auto mt-24 md:grid-cols-2">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;
