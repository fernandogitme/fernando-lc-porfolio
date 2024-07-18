import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="relative z-20 w-full bg-darkBg/60">
            <div className="grid items-center justify-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <div className="flex justify-center md:justify-start">
                    <Image 
                        src="/home-4.png" 
                        priority 
                        width="600" 
                        height="450" 
                        alt="Avatar"
                        className="w-full max-w-xs md:max-w-md"
                    />
                </div>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Fernando Lucas, <br />
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
                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                    Cuento con formación en Administración y Dirección de Empresas (ADE) y especialización en análisis de datos, machine learning y deep learning. A lo largo de mi carrera profesional, he asesorado a más de 500 empresas en el ámbito financiero corporativo. Actualmente, mi objetivo es ofrecer soluciones estratégicas basadas en datos, integrando mi experiencia en el mundo de los negocios.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-lg hover:shadow-white/30">
                            Ver proyectos
                        </a>
                        <a href="/Fernando_Lucas_cv.pdf"
                            download="Fernando_Lucas_cv.pdf"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-lg hover:shadow-secondary/30">
                            Descarga mi CV
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
