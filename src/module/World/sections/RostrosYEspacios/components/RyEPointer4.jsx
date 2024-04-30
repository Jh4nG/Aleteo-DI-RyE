import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionRyEComponent } from "../../components/descripcionRyEComponent"

export const RyEPointer4 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionRyEComponent 
                iframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/ulGazC3aFqg?si=h_YHe5vSjdOXIr0m" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                description={
                    <>
                        <p>
                            El paro que se realizó en diferentes espacios de Suba entre el 2019 y 2021, fue un evento histórico que tuvo como protagonistas a diversos jóvenes de la localidad. Este videoclip documental, desea conmemorar este suceso.  
                        </p>

                        <p>
                            <strong>Director y montajista:</strong> Edison González <br />
                            <strong>Música:</strong> Kevin Sánchez
                        </p>
                        <p>
                            <strong>Material de archivo: </strong><br />
                            Laura Mora <br />
                            Edison González
                        </p>
                        <p>
                            <strong>Redes: </strong> <br />
                            <a href="https://www.instagram.com/di_rostros_y_espacios/ " target="_blank">DI_rostros_y_espacios</a> <br />
                            <a href="https://www.instagram.com/la_chimenea_cultural/ " target="_blank">la_chimenea_cultural</a> 
                        </p>
                    </>
                }
            />
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Fugaz'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-RyE"}
            />
        </>
    )
}