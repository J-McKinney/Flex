import React, { Component } from "react";
import * as THREE from "three";
import STARLITE from "../../images/star.png";
// import NavBar from "../../Components/MyNavBar/MyNavBar";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Style from "./StarsContainer.module.css";

let scene, camera, renderer, stars, starGeo;

class StarsContainer extends Component {
  componentDidMount() {
    this.init();
  }
  init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      1000,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 1;
    camera.position.x = Math.PI / 2;
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    starGeo = new THREE.Geometry();
    for (let i = 0; i < 6000; i++) {
      let star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
      );
      star.velocity = 0;
      star.acceleration = 0.02;
      starGeo.vertices.push(star);
    }
    let sprite = new THREE.TextureLoader().load(STARLITE);
    let starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.7,
      map: sprite,
    });
    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);
    window.addEventListener("resize", this.onWindowResize, false);
    this.animate();
  };
  onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  animate = () => {
    starGeo.vertices.forEach((p) => {
      p.velocity += p.acceleration;
      p.y -= p.velocity;
      if (p.y < -200) {
        p.y = 200;
        p.velocity = 0;
      }
    });
    starGeo.verticesNeedUpdate = true;
    stars.rotation.y += 0.004;
    stars.rotation.x = -1.5;
    stars.rotation.z = -44;
    renderer.render(scene, camera);
    requestAnimationFrame(this.animate);
  };

  render() {
    return (
      <>
        <div className={Style.starWrapper}>
          <div className={Style.content} ref={(ref) => (this.mount = ref)}>
            <div className={Style.textBox}>
              <div className={Style.heading1}>
                Hello, I'm&nbsp;
                <span className={Style.highlight}>Jesse McKinney.</span>
              </div>
              <div className={Style.heading2}>
                I'm a full-stack web developer.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StarsContainer;
