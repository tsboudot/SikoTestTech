import * as React from "react";
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer: React.FC = (): JSX.Element => {
    return (
        <div className="down flex flex-row justify-between">
            <p>&copy; 2021 Siko Mobility, tous droits réservés.</p>
            <div className="réseauxsociaux">
                <i className="faFacebook"></i>
                <i className="faTwitter"></i>
            </div>
        </div>
    );
};

export default Footer;
