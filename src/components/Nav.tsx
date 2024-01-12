import * as React from "react";
import { useState } from "react";
import logo from "../../public/images/logo.png";

const Nav: React.FC = (): JSX.Element => {
    const [servicesDropdown, setServicesDropdown] = useState<boolean>(false);

    const handleDropdown = () => {
        console.log("Clic sur Nos services");
        setServicesDropdown(!servicesDropdown);
    };

    return (
        <nav className="flex flex-row justify-between bg-gray-600 p-4">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <ul className="flex space-x-4 justify-center items-center">
                <li className="text-white">Espace Marchand</li>
                <li className="text-gray-100 relative">
                    <li onClick={handleDropdown}>
                        Nos services
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
            </ul>
        </nav>
    );
};

export default Nav;
