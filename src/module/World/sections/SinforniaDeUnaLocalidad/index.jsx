import { SLPointer1 } from "./components/SLPointer1"
import { SLPointer2 } from "./components/SLPointer2";
import { SLPointer3 } from "./components/SLPointer3";
import { SLPointer4 } from "./components/SLPointer4";
import { SLPointer5 } from "./components/SLPointer5";

export const SinforniaDeUnaLocalidadComponent = ({
    statusSL,
    setModalOpenSL,
    setStatusSLModal,
    statusGlobalAudio,
    handleStatusPlay 
}) => {

    const handleModalOpen = (action) => {
        let tmp = statusSL;
        tmp[action] = false;
        setStatusSLModal(tmp);
        setModalOpenSL(false);
        if(statusGlobalAudio){
            handleStatusPlay(true);
        }
    }

    return (
        <>
            <SLPointer1 
                modalIsOpen={statusSL.Pointer1}
                handleModalOpen={()=>{handleModalOpen('Pointer1');}}
            />
            <SLPointer2 
                modalIsOpen={statusSL.Pointer2}
                handleModalOpen={()=>{handleModalOpen('Pointer2');}}
            />
            <SLPointer3 
                modalIsOpen={statusSL.Pointer3}
                handleModalOpen={()=>{handleModalOpen('Pointer3');}}
            />
            <SLPointer4 
                modalIsOpen={statusSL.Pointer4}
                handleModalOpen={()=>{handleModalOpen('Pointer4');}}
            />
            <SLPointer5 
                modalIsOpen={statusSL.Pointer5}
                handleModalOpen={()=>{handleModalOpen('Pointer5');}}
            />
        </>
    )
}