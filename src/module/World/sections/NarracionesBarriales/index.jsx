import { NBPointer1 } from "./components/NBPointer1"
import { NBPointer2 } from "./components/NBPointer2";
import { NBPointer3 } from "./components/NBPointer3";
import { NBPointer4 } from "./components/NBPointer4";
import { NBPointer5 } from "./components/NBPointer5";

export const NarracionesBarrialesComponent = ({
    statusNB,
    setModalOpenNB,
    setStatusNBModal
}) => {

    const handleModalOpen = (action) => {
        let tmp = statusNB;
        tmp[action] = false;
        setStatusNBModal(tmp);
        setModalOpenNB(false);
    }

    return (
        <>
            <NBPointer1 
                modalIsOpen={statusNB.Pointer1}
                handleModalOpen={()=>{handleModalOpen('Pointer1');}}
            />
            <NBPointer2 
                modalIsOpen={statusNB.Pointer2}
                handleModalOpen={()=>{handleModalOpen('Pointer2');}}
            />
            <NBPointer3 
                modalIsOpen={statusNB.Pointer3}
                handleModalOpen={()=>{handleModalOpen('Pointer3');}}
            />
            <NBPointer4 
                modalIsOpen={statusNB.Pointer4}
                handleModalOpen={()=>{handleModalOpen('Pointer4');}}
            />
            <NBPointer5 
                modalIsOpen={statusIC.Pointer5}
                handleModalOpen={()=>{handleModalOpen('Pointer5');}}
            />
        </>
    )
}