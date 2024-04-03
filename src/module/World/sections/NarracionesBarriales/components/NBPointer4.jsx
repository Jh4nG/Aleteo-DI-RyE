import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionNBComponent } from "../../components/DescripcionNBComponent"

export const NBPointer4 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionNBComponent 
                iframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/uy0bIGbq94U?si=3dnB9bqLcJqIId9H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
                description={<>
                                <p>La localidad de Suba no es ajena a la venta ambulante, aunque cuenta con la particularidad de albergar a un artista callejero único en su categoría. Si bien estamos acostumbrados a ver artistas ambulantes de diversas disciplinas, como malabaristas o bailarines, en el ámbito de la plástica suelen destacar caricaturistas o grafiteros, pero nunca escultores. Sí, has leído bien: escultores. Rodolfo Moreno es uno de ellos, un artista especializado en la escultura y talla en madera que se ha convertido en parte del paisaje local. Como migrante, decidió establecerse en Suba, donde no solo reside, sino que también ha convertido un espacio cercano a una conocida iglesia en su taller y vitrina. Allí, día tras día, trabaja en sus grandes obras, tallando y esculpiendo la madera frente a la mirada de transeúntes curiosos y algún que otro mecenas de barrio que apoya su trabajo.</p>
                                <p>
                                    <strong>Director:</strong> Libardo Andrés Galindo
                                </p>
                            </>}
            />
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Suba Ambulante - Rodolfo A. Moreno (El Escultor Callejero) '}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-NB"}
            />
        </>
    )
}