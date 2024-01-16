import * as React from "react";
import { useState } from "react";
import logo from "../../public/images/logo.png";
import LanguageSwitcher from "./switchLang";
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { getTextByIdAndLang, Lang } from '../texts'; // Assurez-vous d'avoir cette importation

const Nav: React.FC = (): JSX.Element => {
    const [servicesDropdown, setServicesDropdown] = useState<boolean>(false);

    const handleDropdown = () => {
        console.log("Clic sur Nos services");
        setServicesDropdown(!servicesDropdown);
    };

    const currentLanguage: Lang = useSelector((state: RootState) => state.lang.language as Lang);

    // Utilisez la fonction getTextByIdAndLang pour obtenir le texte du composant numéro 1
    const commercialSpaceText = getTextByIdAndLang(1, currentLanguage);
    const nosServices = getTextByIdAndLang(2, currentLanguage)

    return (
        <nav className="flex flex-row justify-between border-gray-600 p-4 order-b-2 z-50 sticky top-0">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>

            <ul className="flex space-x-4 justify-center items-center">
                {/* Utilisez la variable commercialSpaceText ici */}
                <li className="text-white">{commercialSpaceText}</li>
                <li className="text-gray-100 relative">
                    <li onClick={handleDropdown}>
                        {nosServices}
                    </li>
                    {servicesDropdown && (
                        <ul className="absolute bg-gray-600 mt-2 p-2">
                            <li className="text-white">Assurance</li>
                            <li className="text-white">Assistance</li>
                            <li className="text-white">Maintenance</li>
                            <li className="text-white">Extension de garantie</li>
                        </ul>
                    )}
                </li>
                <li className="text-white">
                    {/* Bouton "Simulation" */}
                    <button className="bg-blue-500 text-white p-2 rounded">Simulation</button>
                </li>
                <li><LanguageSwitcher /></li>
            </ul>
        </nav>
    );
};

export default Nav;