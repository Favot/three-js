import gsap from "gsap";
import * as THREE from "three";
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene;
const scene = new THREE.Scene();

// Object
const group = new THREE.Group();
scene.add(group);
group.position.y = 1;

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

group.add(cube1);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
camera.position.y = 0;
camera.position.x = 0;

scene.add(camera);

if (!canvas) throw new Error("Canvas not found");

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

gsap.to(cube1.position, { duration: 1, delay: 1, x: 2 });
gsap.to(cube1.position, { duration: 1, delay: 2, x: 0 });
// Animation
const clock = new THREE.Clock();

const tick = () => {
  // Clock
  // const elapsedTime = clock.getElapsedTime();

  // cube1.rotation.y = Math.sin(elapsedTime * 0.5);
  // cube1.position.x = Math.cos(elapsedTime * 1.2);
  // cube1.rotation.z = elapsedTime;

  // update cubes rotation

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
