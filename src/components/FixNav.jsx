import { useState } from "react";
import { FaAngleDoubleLeft, FaFacebookF, FaInstagram, FaRegWindowClose } from "react-icons/fa";
import { ModalNav } from "./ModalNav";

export const FixNav = () => {
   const [flatOpenSide, setFlatOpenSide] = useState(false);
   const [modalOpen, setModalOpen] = useState(false);
   const [navSelected, setNavSelected] = useState('');

   const showSideBar = (action) => {
      if (action) {
         setFlatOpenSide(true);
      } else {
         setFlatOpenSide(false);
      }
   }

   const handleModalOpen = (nav) => {
      setNavSelected(nav);
      setModalOpen(!modalOpen);
   }

   return (
      <>
         <ModalNav 
            nav={navSelected}
            modalIsOpen={modalOpen}
            handleModalOpen={handleModalOpen}
         />
         <div className={`display-menu ${flatOpenSide && 'd-none'}`}>
            <button type="button" className="btn btn-fixNav" onClick={()=>{showSideBar(true)}}>
               <FaAngleDoubleLeft />
            </button>
         </div>

         <div className={`d-flex flex-column flex-shrink-0 p-3 text-white fix-nav__content ${!flatOpenSide ? 'fix-nav' : ' fix-nav--close fix-nav'}`}>
            <div className="row">
               <div className="col-12">
                  <div className="row">
                     <div className="col-3">
                        <a className="btn" onClick={()=>{showSideBar(false)}}>
                           <FaRegWindowClose />
                        </a>
                     </div>
                     <div className="col-9">
                        <span className="fs-4">
                           D.I.
                           Rostros y espacios
                        </span>
                     </div>
                  </div>
               </div>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
               <li className="nav-item">
                  <a onClick={()=>{handleModalOpen('SobreNosotros');showSideBar(false)}} data-bs-toggle="modal" data-bs-target="#sobreNosotros" href="#" className="nav-link text-white" aria-current="page">
                     <svg className="bi me-2" width="16" height="16">
                        <use xlinkHref="#home" />
                     </svg>
                     Sobre nosotros
                  </a>
               </li>
               <li className="nav-item">
                  <a onClick={()=>{handleModalOpen('SobreChimenea');showSideBar(false)}} data-bs-toggle="modal" data-bs-target="#sobreNosotros" href="#" className="nav-link text-white" aria-current="page">
                     <svg className="bi me-2" width="16" height="16">
                        <use xlinkHref="#home" />
                     </svg>
                     Sobre La Chimenea
                  </a>
               </li>
               <li>
                  <a onClick={()=>{handleModalOpen('Creditos');showSideBar(false)}} href="#" data-bs-toggle="modal" data-bs-target="#CreditosModal" className="nav-link text-white">
                     <svg className="bi me-2" width="16" height="16">
                        <use xlinkHref="#speedometer2" />
                     </svg>
                     Créditos
                  </a>
               </li>
               <li>
                  <a onClick={()=>{handleModalOpen('Contactenos');showSideBar(false)}} href="#" data-bs-toggle="modal" data-bs-target="#ContactenosModal" className="nav-link text-white">
                     <svg className="bi me-2" width="16" height="16">
                        <use xlinkHref="#table" />
                     </svg>
                     Contáctenos
                  </a>
               </li>
            </ul>
            <hr />
            <div className="dropdown">
               <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <strong>Redes Sociales</strong>
               </a>
               <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                  <li>
                     <a className="dropdown-item" target="_blank" href="https://www.facebook.com/lachimeneacultural">
                        <FaFacebookF /> La chimenea cultural
                     </a>
                  </li>
                  <li>
                     <a className="dropdown-item" target="_blank" href="https://www.instagram.com/la_chimenea_cultural/">
                        <FaInstagram /> La Chimenea cultural
                     </a>
                  </li>
                  <li>
                     <a className="dropdown-item" target="_blank" href="https://www.instagram.com/di_rostros_y_espacios/">
                        <FaInstagram /> D.I. Rostros y espacios
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </>
   )
}