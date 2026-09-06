import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/* Full-bleed generative wall + mouse-driven optical lens. */
(() => {
  const canvas = document.getElementById('particle-field');
  const hero = canvas && canvas.closest('.hero-panel');
  if (!canvas || !hero) return;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, .1, 100);
  camera.position.set(0, 0, 5.5);
  const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true, powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  const seed = Math.random() * 1000;

  const wall = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
    depthWrite:false, uniforms:{uTime:{value:0},uSeed:{value:seed},uAspect:{value:1}},
    vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position,1.0);}',
    fragmentShader:`precision highp float; varying vec2 vUv; uniform float uTime,uSeed,uAspect;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7))+uSeed)*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
      float blob(vec2 p,vec2 c,float r){return exp(-dot(p-c,p-c)/r);}
      void main(){vec2 p=(vUv-.5)*vec2(uAspect,1.);float t=uTime*.045;vec2 q=p+vec2(sin(t*.8),cos(t*.65))*.12;float n=noise(q*2.2+t)+.5*noise(q*5.0-t*.7)+.22*noise(q*11.0+t*.4);float a=blob(p,vec2(.30,.08),.34)+blob(p,vec2(-.28,-.22),.28);float b=blob(p,vec2(.06,-.25),.3);vec3 base=vec3(.945098,.941176,.913725);vec3 petrol=vec3(.18,.29,.27);vec3 violet=vec3(.20,.18,.34);vec3 olive=vec3(.48,.58,.08);vec3 col=base+petrol*(.004*n+a*.008)+violet*(b*.005)+olive*(blob(p,vec2(.38,-.3),.2)*.006);float vign=1.-smoothstep(.35,.85,length(p));col*=.997+.003*vign;gl_FragColor=vec4(col,1.);}`
  }));
  wall.position.z=-1; scene.add(wall);
  scene.add(new THREE.HemisphereLight(0xbfd7ff,0x020304,1.4)); const key=new THREE.PointLight(0xc9ff58,18,7); key.position.set(2,1.5,3); scene.add(key); const fill=new THREE.PointLight(0x718dff,13,7); fill.position.set(-2,-1,2); scene.add(fill);

  const lens = new THREE.Group();
  lens.position.set(1.28,.02,.2); scene.add(lens);
  // The exact triangular prism asset used by the referenced three.js dispersion example.
  new GLTFLoader().load('/assets/models/DispersionTest.glb', gltf => {
    const prism=gltf.scene;
    prism.position.set(0,0,0); prism.scale.setScalar(118);
    prism.traverse(o=>{if(!o.isMesh)return; const isPrism=/^Prism_/.test(o.parent?.name||o.name||''); if(!isPrism){o.visible=false;return;} o.material=new THREE.MeshPhysicalMaterial({color:0xffffff,metalness:0,roughness:.012,transmission:.9,ior:1.46,thickness:.72,clearcoat:1,clearcoatRoughness:.018,transparent:true,opacity:.98,side:THREE.DoubleSide});});
    lens.add(prism);
  });
  // Deterministic fallback keeps the prism visible while the reference glTF loads.
  const tri=new THREE.Shape(); tri.moveTo(-.82,-.58); tri.lineTo(.82,-.58); tri.lineTo(0,.78); tri.closePath();
  const prismGeo=new THREE.ExtrudeGeometry(tri,{depth:.62,bevelEnabled:true,bevelSegments:3,bevelSize:.025,bevelThickness:.025}); prismGeo.center();
  const prismFallback=new THREE.Mesh(prismGeo,new THREE.MeshPhysicalMaterial({color:0xffffff,metalness:0,roughness:.02,transmission:.78,ior:1.46,thickness:.65,clearcoat:1,clearcoatRoughness:.02,transparent:true,opacity:.95,side:THREE.DoubleSide})); prismFallback.rotation.set(.08,.18,0); lens.add(prismFallback);
  const mouse = new THREE.Vector2(), target = new THREE.Vector2();
  hero.addEventListener('pointermove', e => {const r=hero.getBoundingClientRect(); target.set((e.clientX-r.left)/r.width-.5,(e.clientY-r.top)/r.height-.5);});
  hero.addEventListener('pointerleave',()=>target.set(0,0));
  function resize(){const r=hero.getBoundingClientRect();renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.updateProjectionMatrix();wall.material.uniforms.uAspect.value=r.width/r.height;}
  addEventListener('resize',resize); resize(); let t=0;
  function tick(){t+=.008;mouse.lerp(target,.045);wall.material.uniforms.uTime.value=t;lens.rotation.x=mouse.y*.22;lens.rotation.y=mouse.x*.32;lens.position.x=1.28+mouse.x*.12;lens.position.y=-mouse.y*.08;renderer.render(scene,camera);requestAnimationFrame(tick);} tick();
})();
