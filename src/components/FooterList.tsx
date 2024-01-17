import * as React from "react";

interface FooterListProps {
    title: string;
    items: string[];
}

const FooterList: React.FC<FooterListProps> = ({ title, items }: FooterListProps): JSX.Element => {
    return (
        <div className="my-4">
            <h3 className="mb-5 ">{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li className="mb-3" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default FooterList;