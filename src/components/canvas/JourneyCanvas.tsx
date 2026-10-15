import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function JourneyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0x0a1026, 2.5);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x00f5ff, 6, 25);
    cyanPointLight.position.set(5, 4, 4);
    scene.add(cyanPointLight);

    const violetPointLight = new THREE.PointLight(0x8b5cf6, 6, 25);
    violetPointLight.position.set(-5, -3, 3);
    scene.add(violetPointLight);

    const blueDirLight = new THREE.DirectionalLight(0x38bdf8, 2);
    blueDirLight.position.set(0, 8, 6);
    scene.add(blueDirLight);

    // --- Main Monolith: 3D Ribbon Torus Knot (Matching Nexora 3D Logo) ---
    const monolithGroup = new THREE.Group();
    scene.add(monolithGroup);

    // Outer refractive glass ribbon
    const knotGeometry = new THREE.TorusKnotGeometry(1.6, 0.42, 160, 32, 2, 3);
    const knotMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x00f5ff,
      emissive: 0x111638,
      roughness: 0.15,
      metalness: 0.75,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.5,
      ior: 1.6,
      transparent: true,
      opacity: 0.95
    });
    const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial);
    monolithGroup.add(knotMesh);

    // Inner wireframe energy skeleton
    const wireGeometry = new THREE.TorusKnotGeometry(1.61, 0.425, 80, 16, 2, 3);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    monolithGroup.add(wireMesh);

    // --- Multi-Channel Concentric Energy Rings ---
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.7, 0.015, 16, 120), ringMat1);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.3, 0.015, 16, 120), ringMat2);
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(3.9, 0.015, 16, 120), ringMat3);

    ring1.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    ring3.rotation.x = -Math.PI / 4;

    ringGroup.add(ring1);
    ringGroup.add(ring2);
    ringGroup.add(ring3);

    // --- 22 Indian Telecom Circle Nodes & Animated Carrier Data Packets ---
    const nodesGroup = new THREE.Group();
    scene.add(nodesGroup);

    const nodeGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const nodeMatCyan = new THREE.MeshBasicMaterial({ color: 0x00f5ff });
    const nodeMatViolet = new THREE.MeshBasicMaterial({ color: 0xa855f7 });
    const nodeMatGold = new THREE.MeshBasicMaterial({ color: 0x10b981 }); // Mumbai HQ NOC beacon

    // 22 circle coordinates arranged strategically
    const circleCoords: [number, number, number][] = [
      [0.0, -0.4, 1.2],   // Mumbai HQ (BOM)
      [0.2, 1.2, 0.8],    // Delhi NCR (DEL)
      [-0.1, -1.4, 0.9],  // Bengaluru (BLR)
      [0.4, -0.8, 1.0],   // Hyderabad (HYD)
      [1.5, 0.3, 0.4],    // Kolkata (KOL)
      [0.3, -1.8, 0.7],   // Chennai (CHE)
      [-0.4, -0.6, 1.1],  // Pune
      [-0.9, 0.2, 1.0],   // Ahmedabad
      [-0.3, 0.9, 0.9],   // Jaipur
      [0.6, 0.7, 0.7],    // Lucknow
      [1.1, 0.4, 0.6],    // Patna
      [1.6, 0.8, 0.2],    // Guwahati
      [0.8, -0.2, 0.9],   // Bhubaneswar
      [-0.1, 1.7, 0.5],   // Chandigarh / Punjab
      [0.1, 2.2, 0.2],    // Jammu & Kashmir
      [-0.7, -1.9, 0.5],  // Kerala
      [0.7, -1.3, 0.7],   // Andhra Pradesh
      [0.2, 0.1, 0.9],    // Madhya Pradesh
      [-0.8, 0.8, 0.7],   // Rajasthan West
      [0.4, -0.1, 1.1],   // Maharashtra Rest
      [0.7, 0.9, 0.5],    // UP East
      [0.2, 0.8, 0.7]     // UP West
    ];

    const nodeMeshes: THREE.Mesh[] = [];
    circleCoords.forEach((coord, idx) => {
      const mat = idx === 0 ? nodeMatGold : idx % 2 === 0 ? nodeMatCyan : nodeMatViolet;
      const mesh = new THREE.Mesh(nodeGeo, mat);
      mesh.position.set(coord[0] * 1.8, coord[1] * 1.8, coord[2] * 1.8);
      nodesGroup.add(mesh);
      nodeMeshes.push(mesh);
    });

    // Connecting Carrier Route Splines (Mesh lines between Mumbai and major circles)
    const routesGroup = new THREE.Group();
    scene.add(routesGroup);

    const routeCurves: THREE.CatmullRomCurve3[] = [];
    const mumbaiPos = nodeMeshes[0].position;

    // Connect Mumbai NOC to 6 primary nodes
    const hubIndices = [1, 2, 3, 4, 5, 7];
    hubIndices.forEach((targetIdx) => {
      const targetPos = nodeMeshes[targetIdx].position;
      const midPoint = new THREE.Vector3()
        .addVectors(mumbaiPos, targetPos)
        .multiplyScalar(0.5)
        .add(new THREE.Vector3(0, 0, 0.4)); // Curve outwards

      const curve = new THREE.CatmullRomCurve3([mumbaiPos, midPoint, targetPos]);
      routeCurves.push(curve);

      const points = curve.getPoints(40);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x00f5ff,
        transparent: true,
        opacity: 0.25
      });
      const line = new THREE.Line(lineGeo, lineMat);
      routesGroup.add(line);
    });

    // Moving Data Packets on Splines
    const packetGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const packetMeshes: { mesh: THREE.Mesh; curveIndex: number; speed: number; progress: number }[] = [];

    routeCurves.forEach((_, curveIdx) => {
      for (let p = 0; p < 2; p++) {
        const pMesh = new THREE.Mesh(packetGeo, packetMat);
        routesGroup.add(pMesh);
        packetMeshes.push({
          mesh: pMesh,
          curveIndex: curveIdx,
          speed: 0.004 + Math.random() * 0.003,
          progress: Math.random()
        });
      }
    });

    // --- Ambient Particle Constellation (1,200 Stars & Data Dust) ---
    const particleCount = 1200;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x00f5ff);
    const c2 = new THREE.Color(0x3b82f6);
    const c3 = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 22;
      posArray[i + 1] = (Math.random() - 0.5) * 22;
      posArray[i + 2] = (Math.random() - 0.5) * 16 - 2;

      const mixed = Math.random() < 0.4 ? c1 : Math.random() < 0.7 ? c2 : c3;
      colorArray[i] = mixed.r;
      colorArray[i + 1] = mixed.g;
      colorArray[i + 2] = mixed.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // --- Interactive Mouse & Touch Tracking ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // --- Scroll Progress Management ---
    let targetScrollProgress = 0;
    let currentScrollProgress = 0;

    const onScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      targetScrollProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Resize Handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // --- 60-120fps Animation Loop ---
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth scroll lerp
      currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.06;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Base idle rotations
      knotMesh.rotation.y = elapsedTime * 0.25;
      knotMesh.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2;
      wireMesh.rotation.y = elapsedTime * 0.25;
      wireMesh.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2;

      ring1.rotation.z = elapsedTime * 0.18;
      ring2.rotation.z = -elapsedTime * 0.14;
      ring3.rotation.z = elapsedTime * 0.1;

      particleSystem.rotation.y = elapsedTime * 0.015;

      // Animate packet movements along carrier curves
      packetMeshes.forEach((item) => {
        item.progress += item.speed;
        if (item.progress > 1) item.progress = 0;
        const curve = routeCurves[item.curveIndex];
        if (curve) {
          const pt = curve.getPoint(item.progress);
          item.mesh.position.copy(pt);
        }
      });

      // Pulse Mumbai NOC beacon
      if (nodeMeshes[0]) {
        const pulse = 1 + Math.sin(elapsedTime * 5) * 0.35;
        nodeMeshes[0].scale.set(pulse, pulse, pulse);
      }

      // --- 3D Journey Stage Interpolations Driven by Scroll ---
      const sp = currentScrollProgress;

      // STAGE 01 (0.00 - 0.15): Intelligent Core (Hero)
      // Monolith sits at center-right, glowing gracefully
      if (sp < 0.15) {
        const factor = sp / 0.15;
        const targetX = 1.3 - factor * 0.5;
        const targetY = -0.1 + factor * 0.3;
        monolithGroup.position.set(targetX, targetY, 0);
        monolithGroup.scale.setScalar(1.0 - factor * 0.1);
        ringGroup.position.copy(monolithGroup.position);
        ringGroup.scale.setScalar(0.9);
        nodesGroup.position.set(5, 0, -2); // Out of view
        nodesGroup.visible = false;
        routesGroup.visible = false;
      }
      // STAGE 02 (0.15 - 0.35): Carrier Mesh & 22 Circles
      // Monolith slides to the left, 22-circle constellation rotates into center view
      else if (sp >= 0.15 && sp < 0.35) {
        const factor = (sp - 0.15) / 0.2;
        monolithGroup.position.set(0.8 - factor * 2.6, 0.2, 0);
        monolithGroup.scale.setScalar(0.85);
        ringGroup.position.copy(monolithGroup.position);
        ringGroup.scale.setScalar(0.8);

        nodesGroup.visible = true;
        routesGroup.visible = true;
        nodesGroup.position.set(1.5 * factor, 0, 0);
        routesGroup.position.copy(nodesGroup.position);
        nodesGroup.rotation.y = elapsedTime * 0.1 + factor * Math.PI;
        routesGroup.rotation.y = nodesGroup.rotation.y;
      }
      // STAGE 03 (0.35 - 0.55): Multi-Channel CPaaS Array
      // Monolith centers, orbital rings expand outward like atomic particle tracks
      else if (sp >= 0.35 && sp < 0.55) {
        const factor = (sp - 0.35) / 0.2;
        monolithGroup.position.set(-1.8 + factor * 1.8, 0.4, 0);
        monolithGroup.scale.setScalar(0.9 + factor * 0.2);
        ringGroup.position.copy(monolithGroup.position);
        ringGroup.scale.setScalar(0.8 + factor * 0.7);

        nodesGroup.position.set(1.5 + factor * 5, 0, -5);
        routesGroup.position.copy(nodesGroup.position);
      }
      // STAGE 04 (0.55 - 0.75): Structured Delivery Model (Centerpiece)
      // Monolith shifts upwards, camera glides along vertical timeline axis
      else if (sp >= 0.55 && sp < 0.75) {
        const factor = (sp - 0.55) / 0.2;
        monolithGroup.position.set(0, 0.4 - factor * 0.8, -1 * factor);
        monolithGroup.scale.setScalar(1.0 - factor * 0.2);
        monolithGroup.rotation.x = factor * Math.PI * 0.5;
        ringGroup.position.copy(monolithGroup.position);
        ringGroup.scale.setScalar(1.2 - factor * 0.4);

        nodesGroup.visible = false;
        routesGroup.visible = false;
      }
      // STAGE 05 (0.75 - 0.90): Architecture, Why Nexora & Developer Terminal
      // High-tech matrix angle, tilted ribbon
      else if (sp >= 0.75 && sp < 0.90) {
        const factor = (sp - 0.75) / 0.15;
        monolithGroup.position.set(-1.4 + factor * 0.6, -0.4 + factor * 0.4, -0.5);
        monolithGroup.scale.setScalar(0.85);
        monolithGroup.rotation.z = factor * Math.PI * 0.25;
        ringGroup.position.copy(monolithGroup.position);
      }
      // STAGE 06 (0.90 - 1.00): Gateway HQ & Conversion Portal
      // Monolith returns to center with high-intensity convergence
      else {
        const factor = (sp - 0.9) / 0.1;
        monolithGroup.position.set(-0.8 + factor * 0.8, 0, 0.5 * factor);
        monolithGroup.scale.setScalar(0.85 + factor * 0.35);
        ringGroup.position.copy(monolithGroup.position);
        ringGroup.scale.setScalar(1.0 + factor * 0.5);
      }

      // Parallax camera tilt with mouse
      camera.position.x = mouse.x * 0.6;
      camera.position.y = mouse.y * 0.4;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup on unmount ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);

      knotGeometry.dispose();
      knotMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      nodeGeo.dispose();
      nodeMatCyan.dispose();
      nodeMatViolet.dispose();
      nodeMatGold.dispose();
      packetGeo.dispose();
      packetMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    />
  );
}
