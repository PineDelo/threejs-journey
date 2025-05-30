import { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import * as THREE from "three";

const Chapter03 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    /**
     * Objects
     */
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    /**
     * Sizes
     */
    const sizes = {
      width: 800,
      height: 600,
    };

    /**
     * Camera
     */
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 3;
    scene.add(camera);

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);

    // Cleanup
    return () => {
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div>
      <h1>Chapter 03</h1>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <canvas ref={canvasRef} className="webgl"></canvas>
            </div>
          }
        />
        {/* Add more routes for Chapter 03 here */}
      </Routes>
    </div>
  );
};

export default Chapter03;
