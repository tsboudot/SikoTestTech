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
        <section className="flex-1" style={sectionStyle}>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="text-lg">{text}</p>
        </section>
    );
};

export default MainSectionItem;
