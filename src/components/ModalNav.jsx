import Modal from 'react-bootstrap/Modal';
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import imgLaChimenea from '../assets/img/Logos/ChimenaCultural.webp';
import imgTresOlas from '../assets/img/Logos/LogoTresOlas.webp';

export const ModalNav = ({ 
    modalIsOpen,
    size = 'lg',
    nav,
    handleModalOpen, 
}) => {

    const contentTitle = ()=>{
        let title = "";
        switch(nav){
            case 'SobreNosotros':
                title = 'Sobre Nosotros';
                break;
            case 'SobreChimenea':
                title = 'Sobre la Chimenea';
                break;
            case 'Creditos':
                title = 'Créditos';
                break;
            case 'Contactenos':
                title = 'Contáctenos';
                break;
        }
        return title;
    }

    const contentDescription = ()=> {
        switch(nav){
            case 'SobreNosotros':
                return <>
                    <p>Las localidades de Bogotá tienen muchas historias que contar, desde el vendedor de calle y sus empanadas hasta el trabajador que debe subir todos los días a un transporte público. </p>
                    <p>Rostros y espacios por medio de diversos medios contará la historia de aquellas personas y sus lugares de estar en donde cada punto cardinal es relevante y reconoce la esfera en la cual se halla aquella historia.</p>
                    <p>Es una propuesta de narrativas expandidas tipo documental interactivo con una  plataforma web y muestra física (tipo proyección-muestra de museo) en la localidad de Suba creado por la organización La Chimenea Cultura.</p>
                </>;
            case 'SobreChimenea':
                return <>
                    <p>La Chimenea Cultural es una corporación sin ánimo de lucro que proviene de un proceso de Cineclub de la localidad de Suba en Bogotá (Colombia), llamado Cineclub La Chimenea, que fue reactivado en el año 2010 el cual realizó proyecciones semanales hasta el año 2017 en diferentes espacios culturales. Ahora desarrolla proyectos creativos en donde se destacan las narrativas interactivas, sobre todo el proyecto de ciencia ficción Aleteo-transmedia, además, desarrolla proyectos de formación, participación en eventos académicos, artísticos y culturales.</p>
                    <div className="col-12 text-center">
                        <img src={imgLaChimenea} width="40%" />
                    </div>
                </>;
            case 'Creditos':
                return <>
                    <p>El proyecto D.I. Rostros y Espacios es desarrollado por un equipo de artistas de Colombia que han dedicado su tiempo y experiencia para que se haga realidad.</p><br />
                    <div className='text-center'>
                        <p><strong>Casa Productora:</strong></p>
                        <p>La Chimenea Cultural</p><br />

                        <p><strong>Director y productor:</strong></p>
                        <p>Edison González</p>
                        <p><strong>Asistente de producción:</strong></p>
                        <p>Laura Mora</p>
                        <p><strong>Guion:</strong></p>
                        <p>Edison González</p>
                        <p><strong>Artistas visuales :</strong></p>
                        <p>Sara Contreras</p>
                        <p><strong>Artistas plásticos:</strong></p>
                        <p>Laura Mora</p>
                        <p><strong>Fotógrafos:</strong></p>
                        <p>David Julio</p>
                        <p>Andrés Mora</p>
                        <p>Laura Mora</p>
                        <p>Edison González</p>
                        <p><strong>Sonidistas:</strong></p>
                        <p>Cristian Cuervo</p>
                        <p><strong>Músicos:</strong></p>
                        <p>Kevin Sánchez</p>
                        <p><strong>Desarrolladores:</strong></p>
                        <p>Jhon Jairo González</p>
                        <p><strong>Montajistas audiovisuales y sonoros:</strong></p>
                        <p>Edison González</p>
                        <p>Laura Mora</p><br />

                        <p><strong>Artistas audiovisuales seleccionados</strong></p>
                        <p>Alejandra Uriza</p>
                        <p>Daniel Ortega</p>
                        <p>José Montero</p>
                        <p>Juan Jiménez</p>
                        <p>Libardo Galindo</p>
                        <p>Luisa Rodríguez</p>
                        <p>Marthabella Pedraza</p>
                        <p>Óscar Cardozo</p>
                        <p>Vanesa Sandoval </p>
                        <p>Yhon Durán</p><br />
                        <p><strong>Agradecimientos:</strong></p>
                        <p>Les Rátes</p>
                        <p>La Oferta Radio</p>
                        <p>Sobibor</p>
                        <p>Casa de la Memoria de Suba</p>
                        <p>Biblioteca Amigos de la Naturaleza</p>
                        <p>Eiliv - Bar</p>
                        <p>Casa de juventud Diego Felipe Becerra</p>
                        <div className="col-12">
                            <img src={imgLaChimenea} width="40%" />
                            <img src={imgTresOlas} width="30%" />
                        </div>
                    </div>
                </>;
            case 'Contactenos':
                return <>
                            <div className='row col-12 text-center mt-5 mb-5'>
                                <div className='col-6'>
                                    <span style={{fontSize: '1.8rem'}}><FaPhoneAlt /></span> <br />
                                    <a href="tel:3214175816">3214175816</a><br />
                                    <a href="tel:3014996737">3014996737</a>
                                </div>
                                <div className='col-6'>
                                    <span style={{fontSize: '1.8rem'}}><FaRegEnvelope /></span> <br />
                                    <a href="mailto:Corpolachimeneacultural@gmail.com">Corpolachimeneacultural@gmail.com</a><br />
                                    <a href="mailto:proyectoaleteoproduccion@gmail.com">proyectoaleteoproduccion@gmail.com</a>
                                </div>
                            </div>
                        </>;
        }
    }

    return (
        <>
            <Modal 
                show={modalIsOpen} 
                onHide={handleModalOpen}
                size={size}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2>{contentTitle()}</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container'>
                        {contentDescription()}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}