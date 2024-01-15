import React, { Suspense } from 'react';
import { useEffect, useRef } from 'react'
import { Header } from '../components/Header'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import MouseMeshInteraction from '../assets/three.mmi.js';

export const Mundo = () => {

  let scene;
  let camera;
  let renderer;
  let mmi;
  const refContainer = useRef(null);

  const render = ()=> {
    renderer.render(scene, camera);
  }
  
  useEffect(() => {
    // === THREE.JS CODE START ===
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.localClippingEnabled = true;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(4, 0.5, 3); // posición para mostrar objeto de entrada

    // use ref as a mount point of the Three.js scene instead of the document.body
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render); // use only if there is no animation loop
    controls.minDistance = 3; // Maximo que se puede acercar
    controls.maxDistance = 6; // Maximo que se puede alejar
    controls.enablePan = false;
    // Se agregar la imagen del arbol
    const loader = new GLTFLoader();
    mmi = new MouseMeshInteraction(scene, camera);
    loader.load('/mundo/scene.gltf', (gltf) => {
      let tree = gltf.scene;
      tree.rotation.set(0, 0, 0);
      tree.scale.set(0.1, 0.1, 0.1);
      tree.position.set(0, -.85, 0);
      tree.visible = true;
      scene.add(tree);
            
      tree.getObjectByName('Nido1').visible = false;
      tree.getObjectByName('Nido2').visible = false;
      tree.getObjectByName('Nido3').visible = false;
      tree.getObjectByName('Nido4').visible = false;
      

      // mmi.addHandler('Nido', 'click', (event) => {

      //   this.sendObjectSelected.emit('Nido');
      
      //   tree.getObjectByName('Nido1').visible = true;
      //   tree.getObjectByName('Nido2').visible = true;
      //   tree.getObjectByName('Nido3').visible = true;
      //   tree.getObjectByName('Nido4').visible = true;
      // });

      // mmi.addHandler('Icono1', 'click', (event) => {
      //   this.sendObjectSelected.emit('Icono1');
      // });

      // mmi.addHandler('Icono2', 'click', (event) => {
      //   this.sendObjectSelected.emit('Icono2');
      // });

      // mmi.addHandler('Icono3', 'click', (event) => {
      //   this.sendObjectSelected.emit('Icono3');
      // });

      // mmi.addHandler('Icono4', 'click', (event) => {
      //   this.sendObjectSelected.emit('Icono4');
      // });

      // mmi.addHandler('Icono5', 'click', (event) => {
      //   this.sendObjectSelected.emit('Icono5');
      // });

      // mmi.addHandler('Icono6', 'click', (event) => {
      //   this.sendObjectSelected.emit('Icono6');
      // });

      // mmi.addHandler('Icono7', 'click', (event) => {
      //   this.sendObjectSelected.emit('Icono7');
      // });

      // mmi.addHandler('Icono8', 'click', (event) => {
      //   this.sendObjectSelected.emit('Icono8');
      // });

      // mmi.addHandler('Icono9', 'click', (event) => {
      //   this.sendObjectSelected.emit('Icono9');
      // });
      render();
    });

    refContainer.current && refContainer.current.appendChild( renderer.domElement );
  }, []);
  return (
    <>
      {/* <Header /> */}
      <div ref={refContainer}></div>
    </>
  )
}