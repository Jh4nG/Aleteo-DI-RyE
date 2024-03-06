import { useState } from "react"
import { Header } from "../components/Header";
import { FixNav } from "../components/FixNav";
import WorldComponent from "./World/WorldComponent";

export const Background = () => {

    const [section, setSection] = useState('RostrosYEspacios');

    const handleSection = (section) => {
        setSection(section);
    }

    return (
        <div className={`bg`}>
            <FixNav />
            <Header 
                setSection={handleSection}
            />
            <WorldComponent 
                section={section}
            />
        </div>
    )
}