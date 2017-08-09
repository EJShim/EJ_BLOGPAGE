import * as THREE from 'three';
import TrackballControls from 'three-trackballcontrols';
// let TrackballControls = require('three-trackballcontrols');

class E_Manager {
    constructor() {
        this.m_bAnimate = true;
        this.Initialize();
    }

    Initialize() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 500;


        let geometry = new THREE.TorusGeometry(200, 100, 16, 100);
        let material = new THREE.MeshBasicMaterial({
            color: 0xff00ff,
            wireframe: true
        });

        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);

        this.renderer = new THREE.WebGLRenderer();

        //Initialize Trackball Controls
        this.controls = new TrackballControls(this.camera, this.renderer.domElement);
        this.controls.rotateSpeed = 4.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;
        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;
        this.controls.keys = [65, 83, 68];
        this.controls.addEventListener('change', this.Redraw.bind(this));           
        
        window.addEventListener("resize", this.OnResize.bind(this));
        

        this.Animate();
    }

    SetRenderWindow(renderwindow) {

        this.DoAnimate();
        this.renderWindow = renderwindow;
        this.renderWindow.appendChild(this.renderer.domElement);

        this.OnResize();
    }

    RemoveRenderWindow() {
        
        let renWin = this.renderWindow;
        while (renWin.firstChild) {
            renWin.removeChild(renWin.firstChild);        
        }
        this.CancelAnimate();
        this.renderWindow = null;
    }

    Animate() {
        if (this.m_bAnimate) {
            this.mesh.rotation.x += 0.01;
            this.mesh.rotation.y += 0.02;

            this.Redraw();
        }

        this.controls.update();
        requestAnimationFrame(this.Animate.bind(this));
    }


    Redraw() {
        this.renderer.render(this.scene, this.camera);
    }

    OnResize() {        
        if (this.renderWindow === null || this.renderWindow === undefined) return;

        //Handle Resize
        let width = 500;
        let height = 500;
        this.camera.aspect = this.renderWindow.clientWidth / this.renderWindow.clientHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.renderWindow.clientWidth, this.renderWindow.clientHeight);
        this.controls.handleResize();

        this.Redraw();

    }

    DoAnimate() {
        this.m_bAnimate = true;
    }

    CancelAnimate() {
        this.m_bAnimate = false;
    }

    OnClickCube() {
        this.mesh.geometry = new THREE.BoxGeometry(300, 300, 300);
        this.mesh.material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true
        });
        // this.mesh = new THREE.Mesh( geometry, material );

        this.Redraw();

    }

    OnClickSphere() {
        this.mesh.geometry = new THREE.SphereGeometry(300, 32, 32);
        this.mesh.material = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            wireframe: true
        });

        this.Redraw();
    }

    OnClickTorus() {
        this.mesh.geometry = new THREE.TorusGeometry(200, 100, 16, 100);
        this.mesh.material = new THREE.MeshBasicMaterial({
            color: 0xff00ff,
            wireframe: true
        });

        this.Redraw();
    }
}

const _manager = new E_Manager();

//Make Reducer
const initialState = {
    manager: _manager
};


export default function Manager(state, action) {
    if (typeof state === "undefined")
        state = initialState;

    switch (action.type) {
        default: return state;
    }
}