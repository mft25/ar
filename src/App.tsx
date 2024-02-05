import './App.css'
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

function App() {
  return (
    <>
      <a-scene mindar-image="imageTargetSrc: ./targets.mind;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
        <a-assets>
          <a-asset-item id="duckModel" src="./duck.glb"></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          <a-gltf-model rotation="0 -90 0 " position="0 0 0" scale="0.5 0.5 0.5" src="#duckModel" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"></a-gltf-model>
        </a-entity>
      </a-scene>
    </>
  )
}

export default App
