import react from "react";

type HeaderProps = {
    title: string;
    };

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="w-full p-6 bg-gray-500 text-white shadow-md">
            <h1 className="text-3xl font-bold">{title}</h1>
        </header>
    );
};

export default Header;