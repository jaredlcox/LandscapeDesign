import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

const ThreeDPlantModel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x8fbcd4); // A light blue color, for example
    mountRef.current.appendChild(renderer.domElement);

    // Adjust camera position and orientation
    camera.position.set(0, 0, 5); // Position the camera
    camera.lookAt(0, 0, 0); // Orient the camera to look at the origin

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Add directional light for better illumination
    directionalLight.position.set(0, 1, 1); // Adjust as needed
    scene.add(directionalLight);

    // Load materials and 3D model
    const mtlLoader = new MTLLoader();
    mtlLoader.load(
      "../../data/plants/oleander/OBJ_BS09_NeriumOleander_6.mtl",
      (materials) => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(
          "../../data/plants/oleander/OBJ_BS09_NeriumOleander_6.obj",
          (object) => {
            console.log("Object loaded:", object);

            // Check object's bounding box
            const bbox = new THREE.Box3().setFromObject(object);
            console.log("Bounding box:", bbox);

            // Optionally scale the object if too large or small
            const size = bbox.getSize(new THREE.Vector3());
            if (size.length() > 10 || size.length() < 0.1) {
              object.scale.setScalar(1 / size.length());
              console.log("Scaled object to fit the scene");
            }

            // Ensure the object is visible
            object.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                child.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
                child.visible = true;
                child.geometry.computeBoundingBox();
                console.log("Mesh child:", child);
              }
            });

            // Position the object if needed
            object.position.set(0, 0, 0);
            scene.add(object);
          },
          (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          },
          (error) => {
            console.error("An error happened", error);
          }
        );
      },
      (error) => {
        console.error("An error happened while loading MTL", error);
      }
    );

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      // Any animations or updates go here

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeDPlantModel;
