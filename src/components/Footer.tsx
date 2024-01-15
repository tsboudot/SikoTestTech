import * as React from "react";
import logo from "../../public/images/logo.png";
import FooterList from "./FooterList";

const Footer: React.FC = (): JSX.Element => {
    const list1 = {
        title: "INFORMATIONS",
        items: ["Mentions légales", "Conditions générales de vente", "Politique de confidentialité", "RGPD & Cookies"],
    };

    const list2 = {
        title: "SIKO MOBILITY",
        items: ["Acceuil", "Devenir Partenaire", "Qui sommes nous ? ", "Contact", "FAQ"],
    };

    const list3 = {
        title: "NOS SERVICES",
        items: ["Nos services", "Assurance", "Forfait entretien", "Assistance dépannage", "Garantie 3 ans"],
    };

    return (
        <footer className="flex flex-col p-4 text-white bg-gray-900 brightened">
            <div className="up flex flex-row w-100%">
                <div className="flex flex-col items-baseline sm:w-1/2 lg:w-full mx-auto pr-8">
                    <div className="logo-container mb-2">
                        <img className="mb-2 logo-brightened" src={logo} alt="logo" />
                    </div>
                    <div className="list-Container flex ">
                        <ul className="flex flex-col justify-between">
                            <li className="mb-2">contact@sikoomobility</li>
                            <li className="mb-3">86 rue Dutot, 75015 Paris</li>
                            <li >Siko Mobility respecte les normes sociales et environnementales et s'inscrit dans une démarche de progrès.</li>
                        </ul>
                    </div>

                </div>
                <div className="flex  flex-row justify-between sm:w-1/2 lg:w-full mx-auto">
                    <FooterList {...list1} />
                    <FooterList {...list2} />
                    <FooterList {...list3} />
                </div>
            </div>
            <div className="down flex flex-row justify-between">
                <div><p>&copy; 2021 Siko Mobility, tous droits réservés.</p></div>
                <div className="réseauxsociaux flex flex-row space-x-4">
                    <svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
                    <svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
