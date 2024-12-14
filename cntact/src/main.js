import * as THREE from 'three';

//Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

//Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//Create & add bject
const geometry = new THREE.SphereGeometry();
const material = new THREE.MeshNormalMaterial({ color: '#468585', wireframe: true });
const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

//Create a light
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);

//Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Render the scene
function animate() {
    requestAnimationFrame(animate);

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

animate();