import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionRyEComponent } from "../../components/descripcionRyEComponent"

export const RyEPointer1 = ( { 
        modalIsOpen,
        handleModalOpen,
        redesText
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionRyEComponent 
                iframe={<iframe src="https://www.youtube.com/embed/uOV--H42sMU?si=KGdoEm-rLYLllvWw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                description={
                    <>
                        <p>
                            El Humedal Tibabuyes es uno de los cinco humedales que hacen parte de la localidad de Suba. A pesar de su importancia, se le ha maltratado al convertirse en un espacio recreativo y de ocio para la comunidad. Alejandro, defensor del humedal, nos comenta su experiencia con este y el por qué es importante protegerlo.
                            Esta propuesta con algunos toques de cine experimental, muestra la importancia de los humedales en las ciudades grandes como Bogotá. 
                        </p>
                        <p>
                            <strong>Entrevistados:</strong> Alejandro Guzmán <br />
                            <strong>Director:</strong> Edison González <br />
                            <strong>Asistente de</strong> dirección: Geovanny Hernández <br />
                            <strong>Continuista:</strong> Laura Mora <br />
                            <strong>Director de</strong> fotografía: David Julio <br />
                            <strong>Sonido:</strong> Cristian Cuervo <br />
                            <strong>Música:</strong> Kevin Sánchez <br />
                        </p>
                        <p>
                            Agradecimientos a Casa de la memoria de Suba 
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
                title={'Rizoma'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-RyE"}
            />
        </>
    )
}