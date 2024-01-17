import * as React from "react";

interface MainSectionItemProps {
    title: string;
    backgroundImage: string;
    text: string;
}

const MainSectionItem: React.FC<MainSectionItemProps> = ({
    title,
    backgroundImage,
    text,
}: MainSectionItemProps): JSX.Element => {
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white", // Couleur du texte
        padding: "20px", // Ajustez selon vos besoins
    };

    return (
        <section className=" transform hover:scale-105 transition-transform mainItem relative block min-w-[256px] min-h-[256px] w-full h-[80vh] rounded-lg transition transform  undefined" style={sectionStyle}>
            <div className="flex flex-col justify-end h-full ">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="text-lg">{text}</p>
            </div>
        </section>
    );
};

export default MainSectionItem;
