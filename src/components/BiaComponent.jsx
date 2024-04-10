import { useEffect, useRef, useState } from 'react';
import { Tooltip } from 'react-tooltip'
import imgBia from '../assets/img/BIA01.gif';
export const BiaComponents = ()=> {

    const [toolBiaOpen, setToolBiaOpen] = useState(true);
    const tooltipBia = useRef(null)

    useEffect(()=>{
        setTimeout(()=>{
            (toolBiaOpen) ? tooltipBia.current?.close() : tooltipBia.current?.open();
            setToolBiaOpen(!toolBiaOpen);
        },5000)
    },[toolBiaOpen])

    return (
        <>
            {/* BIA - Museo Interactivo */}
            <div id="bia-tooltip" className="BIA">
                <a href="http://museointeractivoaleteo.com/" target="_blank">
                    <img src={imgBia}  width={100}/>
                </a>
            </div>
            <Tooltip ref={tooltipBia} anchorSelect="#bia-tooltip" place="top">Museo Interactivo</Tooltip>
        </>
    )
}