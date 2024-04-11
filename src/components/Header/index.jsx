import { useEffect, useState } from 'react';
import { CanvasComponents } from './components/CanvasComponent';
import { Cuadro } from './components/Cuadro';
import { MapaSilueta } from './components/MapaSilueta';
import { CassettePlayer } from './components/CassettePlayer';
import { Camera01 } from './components/Camera01';
import { FaAngleDoubleRight, FaRegWindowClose } from "react-icons/fa";
export const Header = ({
    section,
    titleNav,
    setSection,
    startMoveIcons
}) => {

    const [rotateLateralidad, setRotateLateralidad] = useState(0);
    const [flatOpenSideMobile, setFlatOpenSideMobile] = useState(false);

    const showSideBar = (action) => {
        if (action) {
            setFlatOpenSideMobile(true);
        } else {
            setFlatOpenSideMobile(false);
        }
    }

    const activeLink = (e) => {
        const list = document.querySelectorAll('.list');
        list.forEach((item, e) => {
            item.classList.remove('active');
        });
        e.target.closest('li').classList.add('active');
    }

    const mapaSilueta = (scale = 2.3)=> {
        return (
            <CanvasComponents
                Content={
                    <MapaSilueta
                        position={[2,1,1]}
                        rotation={[1.7,-1.35,0]}
                        scale={scale}
                    />
                }
                target={[2, 1, 1]}
                rotateLateralidad={rotateLateralidad}
            />
        )
    }

    const camaraIcon = (scale = 12)=>{
        return (
            <CanvasComponents
                Content={
                    <Camera01 
                        scale={scale}
                        position={[0,-.5,0]}
                        rotation={[0,0.5,0]}
                    />
                }
                rotateLateralidad={rotateLateralidad}
            />
        )
    }

    const casseteIcon = (scale = 8)=> {
        return (
            <CanvasComponents
                Content={
                    <CassettePlayer 
                        scale={scale} 
                        rotation={[0,0.5,0]}
                    />
                    // <Cassete 
                    //     scale={0.5} 
                    //     rotation={[0,0.2,0]}
                    // />
                }
                rotateLateralidad={rotateLateralidad}
            />
        )
    }

    const cuadroIcon = (scale = 3)=> {
        return (
            <CanvasComponents
                Content={
                    <Cuadro
                        position={[0,0,0]}
                        scale={scale}
                        rotation={[0,0.5,0]}
                    />
                }
                target={[.7, 0, 0]}
                rotateLateralidad={rotateLateralidad}
            />
        )
    }

    useEffect(()=>{
        if(!startMoveIcons){
            setTimeout(()=>{
                setRotateLateralidad(rotateLateralidad == 1 || rotateLateralidad == 0 ? -1 : 1)
            },10000)
        }
    },[startMoveIcons,rotateLateralidad]);

    return (
        <>
            <div className="navigation d-none d-md-flex">
                <ul>
                    <li className="list active">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('RostrosYEspacios', 'Rostros y espacios')}}>
                            <span className="icon">
                                {mapaSilueta()}
                            </span>
                            <span className="text">{titleNav}</span>
                            <span className={`circle circle__${section}`}></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('ImagenComparada', 'Imagen comparada')}}>
                            <span className="icon">
                                {camaraIcon()}
                            </span>
                            <span className="text">{titleNav}</span>
                            <span className={`circle circle__${section}`}></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('SinforniaDeUnaLocalidad', 'Sinfonía de una localidad')}}>
                            <span className="icon">
                                {casseteIcon()}
                            </span>
                            <span className="text">{titleNav}</span>
                            <span className={`circle circle__${section}`}></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('NarracionesBarriales', 'Narraciones barriales')}}>
                            <span className="icon">
                                {cuadroIcon()}
                            </span>
                            <span className="text">{titleNav}</span>
                            <span className={`circle circle__${section}`}></span>
                        </a>
                    </li>
                </ul>
            </div>
            
            {/* Mobile */}
            <div className={`navigation-display-menu d-block d-md-none ${flatOpenSideMobile && 'd-none'}`}>
                <button type="button" className="btn btn-fixNav" onClick={()=>{showSideBar(true)}}>
                    <FaAngleDoubleRight />
                </button>
            </div>
            <div className={`d-flex flex-column flex-shrink-0 p-3 text-white navigation-fix-nav__content ${!flatOpenSideMobile ? 'navigation-fix-nav' : ' navigation-fix-nav--close navigation-fix-nav'}`}>
                <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-9">
                            <span className="fs-4">
                                Contenidos
                            </span>
                        </div>
                        <div className="col-3">
                            <a className="btn" onClick={()=>{showSideBar(false)}}>
                                <FaRegWindowClose />
                            </a>
                        </div>
                    </div>
                </div>
                </div>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-item-a" onClick={(e)=>{activeLink(e);showSideBar(false); setSection('RostrosYEspacios', 'Rostros y espacios')}}>
                            <div className="row">
                                <div className='col-4' style={{ height: "10vh" }}>
                                    {mapaSilueta(6)}
                                </div>
                                <div className='col-8 d-flex align-items-center nav-item-text'>
                                    <span className="">Rostros y espacios</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-item-a" onClick={(e)=>{activeLink(e);showSideBar(false); setSection('ImagenComparada', 'Imagen comparada')}}>
                            <div className="row">
                                <div className='col-4' style={{ height: "10vh" }}>
                                    {camaraIcon(25)}
                                </div>
                                <div className='col-8 d-flex align-items-center nav-item-text'>
                                    <span className="">Imagen comparada</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-item-a" onClick={(e)=>{activeLink(e);showSideBar(false); setSection('SinforniaDeUnaLocalidad', 'Sinfonía de una localidad')}}>
                            <div className="row">
                                <div className='col-4' style={{ height: "10vh" }}>
                                    {casseteIcon(14)}
                                </div>
                                <div className='col-8 d-flex align-items-center nav-item-text'>
                                    <span className="">Sinfonía de una localidad</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-item-a" onClick={(e)=>{activeLink(e);showSideBar(false); setSection('NarracionesBarriales', 'Narraciones barriales')}}>
                            <div className="row">
                                <div className='col-4' style={{ height: "10vh" }}>
                                    {cuadroIcon(5)}
                                </div>
                                <div className='col-8 d-flex align-items-center nav-item-text'>
                                    <span className="">Narraciones barriales</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}