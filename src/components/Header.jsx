import { FaHome, FaUser, FaRegEnvelope, FaPhotoVideo, FaWhmcs } from 'react-icons/fa'
export const Header = () => {

    
    const activeLink = (e) => {
        const list = document.querySelectorAll('.list');
        list.forEach((item, e) => {
            item.classList.remove('active');
        });
        e.target.closest('li').classList.add('active');
    }
    
    return (
        <>
            <div className='container'>
                <div className="navigation mt-5">
                    <ul>
                        <li className="list active">
                            <a href="#" onClick={activeLink}>
                                <span className="icon">
                                    <FaHome />
                                </span>
                                <span className="text">Home</span>
                                <span className="circle"></span>
                            </a>
                        </li>
                        <li className="list">
                            <a href="#" onClick={activeLink}>
                                <span className="icon">
                                    <FaUser />
                                </span>
                                <span className="text">Profile</span>
                                <span className="circle"></span>
                            </a>
                        </li>
                        <li className="list">
                            <a href="#" onClick={activeLink}>
                                <span className="icon">
                                    <FaRegEnvelope />
                                </span>
                                <span className="text">Message</span>
                                <span className="circle"></span>
                            </a>
                        </li>
                        <li className="list">
                            <a href="#" onClick={activeLink}>
                                <span className="icon">
                                    <FaPhotoVideo />
                                </span>
                                <span className="text">Photos</span>
                                <span className="circle"></span>
                            </a>
                        </li>
                        <li className="list">
                            <a href="#" onClick={activeLink}>
                                <span className="icon">
                                    <FaWhmcs />
                                </span>
                                <span className="text">Settings</span>
                                <span className="circle"></span>
                            </a>
                        </li>
                        <div className="indicator"></div>
                    </ul>
                </div>
            </div>
        </>
    )
}