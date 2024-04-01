import { useState } from "react"
import { Header } from "../components/Header";
import { FixNav } from "../components/FixNav";
import WorldComponent from "./World/WorldComponent";

export const Background = () => {

    const [section, setSection] = useState('RostrosYEspacios');
    const [titleNav, setTitleNav] = useState('Rostros y espacios');

    const handleSection = (section,title) => {
        setSection(section);
        setTitleNav(title);
    }

    return (
        <div className={`bg`}>
            <h1 className="bg__title">
                Documental interactivo <br />
                <span className="bg__subTitle">{titleNav}</span>
            </h1>
            <FixNav />
            <Header 
                setSection={handleSection}
                titleNav={titleNav}
            />
            <WorldComponent 
                section={section}
            />
        </div>
    )
}