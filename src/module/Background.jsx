import { useEffect, useState } from "react"
import { Header } from "../components/Header";
import { FixNav } from "../components/FixNav";
import { Loader } from '@react-three/drei';
import { LoaderApp } from "../components/Loader/LoaderApp";
import WorldComponent from "./World/WorldComponent";
import logoChimenea from './../assets/img/Logos/1. Logo Chimenea.png';
import logoInstitucion from './../assets/img/Logos/2.Institucion.png';
import { BiaComponents } from "../components/BiaComponent";
import { AudioComponent } from "../components/AudioComponent/AudioComponent";
import { addLogs } from "../services/useLog";

export const Background = () => {

    const [section, setSection] = useState('RostrosYEspacios');
    const [titleNav, setTitleNav] = useState('Rostros y espacios');
    const [openLoader, setOpenLoader] = useState(true);
    const [statusPlay, setStatusPlay] = useState(0);
    const [statusGlobalAudio, setStatusGlobalAudio] = useState(true);

    const init = ()=>{
        addLogs(titleNav);
    }
    
    const handleSection = (section,title) => {
        setSection(section);
        setTitleNav(title);
        addLogs(title);
    }

    const handleSetOpenLoader = (status) => {
        setOpenLoader(status);
    }

    const handleStatusGlobalAudio = (status)=>{
        setStatusGlobalAudio(status)
    }

    const handleStatusPlay = (status)=> {
        setStatusPlay(status);
    }

    useEffect(()=>{
        init();
    },[]);

    return (
        <div className={`bg`}>
            {/* Loader */}
            <Loader 
                barStyles={false}
                dataInterpolation={(p) => {
                        (p == '100') && handleSetOpenLoader(false); handleStatusPlay(true);
                        return ``;
                    }}
                initialState={(active) => false}
            />
            <LoaderApp 
                modalIsOpen={openLoader}
            />

            {/* Título */}
            <h1 className="bg__title">
                Documental interactivo <br />
                <span className="bg__subTitle">{titleNav}</span>
            </h1>
            {/* Logos */}
            <div className="bg__franjaRoja">
                <div className="d-flex justify-content-between">
                    <img width={"80"} src={logoChimenea} />
                    <img width={"120"} src={logoInstitucion} />
                </div>
            </div>

            <BiaComponents />
            
            <FixNav />
            <Header 
                section={section}
                titleNav={titleNav}
                setSection={handleSection}
                startMoveIcons={openLoader}
            />
            <WorldComponent 
                section={section}
                statusGlobalAudio={statusGlobalAudio}
                handleStatusPlay={handleStatusPlay}
            />

            <AudioComponent 
                statusPlay={statusPlay}
                handleStatusPlay={handleStatusPlay}
                handleStatusGlobalAudio={handleStatusGlobalAudio}
            />
        </div>
    )
}