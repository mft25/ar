import './App.css'
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['a-scene']: any;
      ['a-assets']: any;
      ['a-asset-item']: any;
      ['a-camera']: any;
      ['a-entity']: any;
      ['a-gltf-model']: any;
    }
  }
}

function App() {
  return (
    <div className="video-container">
      <a-scene mindar-image="imageTargetSrc: ./targets.mind; filterMinCF:0.0001; filterBeta: 0.001;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
        <a-assets>
          <a-asset-item id="duckModel" src="./duck.glb"></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          <a-gltf-model rotation="0 -90 0 " position="0 0 0" scale="0.5 0.5 0.5" src="#duckModel"></a-gltf-model>
        </a-entity>
      </a-scene>
    </div>
  )
}

export default App
