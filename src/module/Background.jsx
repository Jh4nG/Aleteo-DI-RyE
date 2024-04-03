import { useState } from "react"
import { Header } from "../components/Header";
import { FixNav } from "../components/FixNav";
import WorldComponent from "./World/WorldComponent";
import logoChimenea from './../assets/img/Logos/1. Logo Chimenea.png';
import logoInstitucion from './../assets/img/Logos/2.Institucion.png';

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
            <div className="bg__franjaRoja">
                <div className="d-flex justify-content-between">
                    <img width={"80"} src={logoChimenea} />
                    <img width={"120"} src={logoInstitucion} />
                </div>
            </div>
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