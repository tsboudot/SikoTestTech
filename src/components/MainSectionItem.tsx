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
        <section className="relative block min-w-[256px] min-h-[256px] w-full h-[80vh] rounded-lg transition transform hover:scale-105 undefined" style={sectionStyle}>
            <div className="justify-self-end"><h2 className="text-4xl font-bold">{title}</h2></div>
            <p className="text-lg">{text}</p>
        </section>
    );
};

export default MainSectionItem;
