import * as React from "react";

interface FooterListProps {
    title: string;
    items: string[];
}

const FooterList: React.FC<FooterListProps> = ({ title, items }: FooterListProps): JSX.Element => {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default FooterList;