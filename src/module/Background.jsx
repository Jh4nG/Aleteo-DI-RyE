import { useState } from "react"
import { Header } from "../components/Header";
import { FixNav } from "../components/FixNav";
import WorldComponent from "./World/WorldComponent";

export const Background = () => {

    const [bgAnimation, setBgAnimation] = useState('black');

    const handleBgAnimation = (bg) => {
        console.log(bg);
        setBgAnimation(bg);
    }

    return (
        <div className={`bg bg__${bgAnimation}`}>
            <FixNav />
            <Header 
                bgAnimation={bgAnimation}
                setAnimation={handleBgAnimation}
            />
            <WorldComponent />
        </div>
    )
}