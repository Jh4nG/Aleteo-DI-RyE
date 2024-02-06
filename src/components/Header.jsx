import { FaHome, FaUser, FaRegEnvelope, FaPhotoVideo, FaWhmcs } from 'react-icons/fa'
export const Header = ({
    bgAnimation,
    setAnimation
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
                        <a href="#" onClick={(e)=>{activeLink(e); setAnimation('black')}}>
                            <span className="icon">
                                <FaHome />
                            </span>
                            <span className="text">Home</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setAnimation('red')}}>
                            <span className="icon">
                                <FaUser />
                            </span>
                            <span className="text">Profile 2</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setAnimation('green')}}>
                            <span className="icon">
                                <FaRegEnvelope />
                            </span>
                            <span className="text">Message</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setAnimation('yellow')}}>
                            <span className="icon">
                                <FaPhotoVideo />
                            </span>
                            <span className="text">Photos</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setAnimation('blue')}}>
                            <span className="icon">
                                <FaWhmcs />
                            </span>
                            <span className="text">Settings</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <div className={`indicator indicator__${bgAnimation}`}></div>
                </ul>
            </div>
        </>
    )
}