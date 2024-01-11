export const Header = () => {

    
    const activeLink = (e) => {
        const list = document.querySelectorAll('.list');
        list.forEach((item, e) => {
            item.classList.remove('active');
        });
        e.target.parentElement.parentElement.classList.add('active');
    }
    
    return (
        <>
            <div className="navigation">
                <ul>
                    <li className="list active">
                        <a href="#" onClick={activeLink}>
                            <span className="icon">
                                <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span className="text">Home</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={activeLink}>
                            <span className="icon">
                                <ion-icon name="person-outline"></ion-icon>
                            </span>
                            <span className="text">Profile</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={activeLink}>
                            <span className="icon">
                                <ion-icon name="chatbubble-outline"></ion-icon>
                            </span>
                            <span className="text">Message</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={activeLink}>
                            <span className="icon">
                                <ion-icon name="camera-outline"></ion-icon>
                            </span>
                            <span className="text">Photos</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={activeLink}>
                            <span className="icon">
                                <ion-icon name="settings-outline"></ion-icon>
                            </span>
                            <span className="text">Settings</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </div>
        </>
    )
}