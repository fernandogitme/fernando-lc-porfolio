interface ContainerPageProps {
    children: React.ReactNode;
}

const ContainerPageServices = (props: ContainerPageProps) => {
    const { children } = props;

    return (
        <div className="w-full h-screen flex items-center justify-center px-4 pb-10 mx-auto mt-40 md:pb-0 md:px-6">
            {children}
        </div>
    );
}

export default ContainerPageServices;
