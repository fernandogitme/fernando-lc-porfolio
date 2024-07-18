import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlDemo, urlGithub } = data

    return (
            <div key={id} className="p-8 border border-teal-50 rounded-xl">
                <h3 className="mb-4 font-semibold text-xl text-center">
                    <span className="inline-block pb-1 border-b-2    border-secondary">{title}</span>
                </h3>
                <div className="flex justify-center">
                    <Image
                        src={image}
                        alt="Image"
                        width={300} height={300} className="w-full md:w-[300px] rounded-2xl h-auto"
                    />
                </div>

            <div className="flex gap-5 mt-5 justify-center">
                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 px-4 md:px-6 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80 text-white text-center font-semibold"
                    style={{ width: "150px" }} 
                >
                    Presentacion
                </Link>
            </div>
        </div>
    );
}

export default PortfolioBox
