import { NBPointer1 } from "./components/NBPointer1"
import { NBPointer10 } from "./components/NBPointer10";
import { NBPointer2 } from "./components/NBPointer2";
import { NBPointer3 } from "./components/NBPointer3";
import { NBPointer4 } from "./components/NBPointer4";
import { NBPointer5 } from "./components/NBPointer5";
import { NBPointer6 } from "./components/NBPointer6";
import { NBPointer7 } from "./components/NBPointer7";
import { NBPointer8 } from "./components/NBPointer8";
import { NBPointer9 } from "./components/NBPointer9";

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
                modalIsOpen={statusNB.Pointer5}
                handleModalOpen={()=>{handleModalOpen('Pointer5');}}
            />
            <NBPointer6 
                modalIsOpen={statusNB.Pointer6}
                handleModalOpen={()=>{handleModalOpen('Pointer6');}}
            />
            <NBPointer7 
                modalIsOpen={statusNB.Pointer7}
                handleModalOpen={()=>{handleModalOpen('Pointer7');}}
            />
            <NBPointer8 
                modalIsOpen={statusNB.Pointer8}
                handleModalOpen={()=>{handleModalOpen('Pointer8');}}
            />
            <NBPointer9 
                modalIsOpen={statusNB.Pointer9}
                handleModalOpen={()=>{handleModalOpen('Pointer9');}}
            />
            <NBPointer10 
                modalIsOpen={statusNB.Pointer10}
                handleModalOpen={()=>{handleModalOpen('Pointer10');}}
            />
        </>
    )
}