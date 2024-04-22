import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionNBComponent } from "../../components/DescripcionNBComponent"

export const NBPointer9 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionNBComponent 
                iframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/CWDpDoGVC78?si=Y_k5Jq_3YM-QvPAB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                description={<>
                                <p>El cine en Suba se ha venido moviendo desde hace más de 20 años. En el territorio nacieron iniciativas con el objetivo de explorar su propio entorno a través de las artes audiovisuales, producto de eso surgieron realizadores de ficción y de documental, surgieron procesos de escuela en cine y cineclubes. Como habitantes de la suba barrial, yo que crecí en villa maria, y Adriana que creció en aures, tendremos unas charlas con personas de la suba popular que decidieron llevar a cabo sus procesos sociales, indagaremos sobre sus inicios, detallando momentos importantes, creaciones interesantes y analizando el estado actual de sus procesos.</p>
                                <p>
                                    <strong>Director:</strong> Adriana Porras - Jose Montero
                                </p>
                            </>}
            />
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Narrativas populares'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-NB"}
            />
        </>
    )
}