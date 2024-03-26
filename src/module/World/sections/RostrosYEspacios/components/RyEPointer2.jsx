import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionRyEComponent } from "../../components/descripcionRyEComponent"

export const RyEPointer2 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionRyEComponent 
                iframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/V2fGe4tAGiI?si=0CHFey0ECxTLmtyz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                description={
                    <>
                        <p>
                            Realizar una pieza audiovisual es todo un reto y se ve reflejado en esta propuesta. Con una suerte de cine directo y un detrás de cámaras poco usual se realiza la entrevista a Germán, vocalista y fundador de la banda de metal y punk Sobibor para conocer su historia.
                        </p>
                        <p>
                            <strong>Entrevistados:</strong> Germán Luque
                        </p>
                        <p>
                            <strong> Director:</strong> Edison González <br />
                            <strong> Asistente de dirección:</strong> Geovanny Hernández <br />
                            <strong> Continuista:</strong> Laura Mora <br />
                            <strong> Directorde fotografía:</strong> David Julio <br />
                            <strong> Sonido:</strong> Cristian Cuervo <br />
                            Agradecimientos a Sobibor<br />
                            <strong> Material de archivo:</strong> Sobibor<br />
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
                title={'Memorias de un documental con Sobibor'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-RyE"}
            />
        </>
    )
}