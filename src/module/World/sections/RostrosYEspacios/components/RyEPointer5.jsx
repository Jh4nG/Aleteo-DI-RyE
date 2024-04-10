import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionRyEComponent } from "../../components/descripcionRyEComponent"

export const RyEPointer5 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionRyEComponent 
                iframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/uEX5oJQ01Uw?si=aENd-qm-VE9O7pCu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                description={
                    <>
                        <p>
                            Les Rátes, así se llama la librería-galería que dirige Rosenberg, un espacio ubicado cerca de la Plaza Fundacional de Suba cuya historia demuestra la lucha que tienen algunos gestores culturales para poder cultivar el arte en la localidad de Suba. 
                        </p>
                        <p>
                            <strong>Entrevistado:</strong> Rosenberg Montañez 
                        </p>
                        <p>
                            <strong>Director:</strong> Edison González <br />
                            <strong>Asistente de dirección:</strong> Geovanny Hernández <br />
                            <strong>Continuista:</strong> Laura Mora <br />
                            <strong>Director de fotografía:</strong> David Julio <br />
                            <strong>Sonido:</strong> Cristian Cuervo <br />
                            <strong>Música:</strong> Kevin Sánchez <br />
                        </p>
                        <p>
                            Agradecimientos a Les Rátes 
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
                title={'Los perdedores'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-RyE"}
            />
        </>
    )
}