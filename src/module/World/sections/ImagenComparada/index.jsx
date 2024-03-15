import { ICPointer1 } from "./components/ICPointer1"
import { ICPointer2 } from "./components/ICPointer2";
import { ICPointer3 } from "./components/ICPointer3";
import { ICPointer4 } from "./components/ICPointer4";
import { ICPointer5 } from "./components/ICPointer5";

export const ImagenComparadaComponent = ({
    statusIC,
    setModalOpenIC,
    setStatusICModal
}) => {

    const handleModalOpen = (action) => {
        let tmp = statusIC;
        tmp[action] = false;
        setStatusICModal(tmp);
        setModalOpenIC(false);
    }

    return (
        <>
            <ICPointer1 
                modalIsOpen={statusIC.Pointer1}
                handleModalOpen={()=>{handleModalOpen('Pointer1');}}
            />
            <ICPointer2 
                modalIsOpen={statusIC.Pointer2}
                handleModalOpen={()=>{handleModalOpen('Pointer2');}}
            />
            <ICPointer3 
                modalIsOpen={statusIC.Pointer3}
                handleModalOpen={()=>{handleModalOpen('Pointer3');}}
            />
            <ICPointer4 
                modalIsOpen={statusIC.Pointer4}
                handleModalOpen={()=>{handleModalOpen('Pointer4');}}
            />
            <ICPointer5 
                modalIsOpen={statusIC.Pointer5}
                handleModalOpen={()=>{handleModalOpen('Pointer5');}}
            />
        </>
    )
}