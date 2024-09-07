import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene;
const scene = new THREE.Scene();

// Object
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const geometry = new THREE.BoxGeometry(1, 1, 1);
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 2.7;
camera.position.y = 1;
camera.position.x = 1;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
