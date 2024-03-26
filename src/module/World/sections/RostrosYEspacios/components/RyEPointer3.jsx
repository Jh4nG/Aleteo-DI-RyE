import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionRyEComponent } from "../../components/descripcionRyEComponent"

export const RyEPointer3 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionRyEComponent 
                iframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/uJd9kBvYHms?si=jW-nHVo6aExawnAG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
                description={
                    <>
                        <p>
                            Guillermo es un habitante de la localidad de Suba que tiene un trabajo poco común: es locutor de radio comunitaria. Este personaje cuenta su historia y el cómo llegó a fundar La Oferta Radio junto a su hijo Andrés. 
                        </p>
                        <p>
                            <strong>Entrevistados:</strong> Guillermo Morra y Andrés Mora
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
                            Agradecimientos a La Oferta Radio
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
                title={'El locutor'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-RyE"}
            />
        </>
    )
}