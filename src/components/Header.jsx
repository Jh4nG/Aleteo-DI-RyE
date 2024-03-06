import { FaHome, FaUser, FaRegEnvelope, FaPhotoVideo, FaWhmcs } from 'react-icons/fa'
export const Header = ({
    setSection
}) => {

    const activeLink = (e) => {
        const list = document.querySelectorAll('.list');
        list.forEach((item, e) => {
            item.classList.remove('active');
        });
        e.target.closest('li').classList.add('active');
    }
    
    return (
        <>
            <div className="navigation">
                <ul>
                    <li className="list active">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('RostrosYEspacios')}}>
                            <span className="icon">
                                <FaHome />
                            </span>
                            <span className="text">Rostros y espacios </span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('ImagenComparada')}}>
                            <span className="icon">
                                <FaUser />
                            </span>
                            <span className="text">Narraciones barriales</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('SinforniaDeUnaLocalidad')}}>
                            <span className="icon">
                                <FaRegEnvelope />
                            </span>
                            <span className="text">Imagen comparada</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('NarracionesBarriales')}}>
                            <span className="icon">
                                <FaPhotoVideo />
                            </span>
                            <span className="text">Sinfonía de una localidad</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <div className={`indicator`}></div>
                </ul>
            </div>
        </>
    )
}