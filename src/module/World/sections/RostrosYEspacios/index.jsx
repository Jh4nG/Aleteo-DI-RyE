import { RyEPointer1 } from "./components/RyEPointer1"
import { RyEPointer2 } from "./components/RyEPointer2";
import { RyEPointer3 } from "./components/RyEPointer3";
import { RyEPointer4 } from "./components/RyEPointer4";
import { RyEPointer5 } from "./components/RyEPointer5";

export const RostrosYEspaciosComponent = ({
    statusRyE,
    setModalOpenRyE,
    setStatusRyEModal,
    statusGlobalAudio,
    handleStatusPlay 
}) => {

    const handleModalOpen = (action) => {
        let tmp = statusRyE;
        tmp[action] = false;
        setStatusRyEModal(tmp);
        setModalOpenRyE(false);
        if(statusGlobalAudio){
            handleStatusPlay(true);
        }
    }

    return (
        <>
            <RyEPointer1 
                modalIsOpen={statusRyE.Pointer1}
                handleModalOpen={()=>{handleModalOpen('Pointer1');}}
            />
            <RyEPointer2 
                modalIsOpen={statusRyE.Pointer2}
                handleModalOpen={()=>{handleModalOpen('Pointer2');}}
            />
            <RyEPointer3 
                modalIsOpen={statusRyE.Pointer3}
                handleModalOpen={()=>{handleModalOpen('Pointer3');}}
            />
            <RyEPointer4 
                modalIsOpen={statusRyE.Pointer4}
                handleModalOpen={()=>{handleModalOpen('Pointer4');}}
            />
            <RyEPointer5 
                modalIsOpen={statusRyE.Pointer5}
                handleModalOpen={()=>{handleModalOpen('Pointer5');}}
            />
        </>
    )
}