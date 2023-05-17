import * as THREE from 'three';

let camera, scene, renderer;

init();
render();

function init() {
    const forest = document.getElementById("forest");

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 600);
    camera.position.set(100, 100, 100);
    camera.lookAt(0, 0, 0);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe6fafc);

    const treeGeometry = new THREE.BoxGeometry(10, 10, 50);
    const treeMaterial = new THREE.MeshBasicMaterial({ color: 0xb7ffb7, opacity: 0.5, transparent: true });
    const tree = new THREE.Mesh(treeGeometry, treeMaterial);
    // tree.position.set(0, 20, 0);
    scene.add(tree);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    forest.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {
    renderer.render(scene, camera);
}