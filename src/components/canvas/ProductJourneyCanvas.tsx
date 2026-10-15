import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ProductJourneyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene & Camera Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // --- Atmospheric Lighting ---
    const ambientLight = new THREE.AmbientLight(0x060c20, 3.0);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f5ff, 8, 30);
    cyanLight.position.set(5, 5, 5);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0x8b5cf6, 7, 30);
    violetLight.position.set(-5, -4, 4);
    scene.add(violetLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 6, 25);
    emeraldLight.position.set(0, 6, 2);
    scene.add(emeraldLight);

    // ==========================================
    // 1. PRODUCT 3D MODEL: TELECOM TRANSMISSION TOWER (Hero & National Mesh)
    // ==========================================
    const towerGroup = new THREE.Group();
    scene.add(towerGroup);

    // Mast Main Legs (Pylons)
    const legGeo = new THREE.CylinderGeometry(0.04, 0.08, 4.2, 8);
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.8,
      roughness: 0.2,
      wireframe: true
    });
    const leg1 = new THREE.Mesh(legGeo, metalMat);
    leg1.position.set(-0.6, 0, 0);
    leg1.rotation.z = -0.06;
    const leg2 = new THREE.Mesh(legGeo, metalMat);
    leg2.position.set(0.6, 0, 0);
    leg2.rotation.z = 0.06;
    const leg3 = new THREE.Mesh(legGeo, metalMat);
    leg3.position.set(0, 0, -0.6);
    leg3.rotation.x = 0.06;
    towerGroup.add(leg1, leg2, leg3);

    // Antenna Panels at Mast Top
    const panelGeo = new THREE.BoxGeometry(0.25, 0.9, 0.12);
    const panelMat = new THREE.MeshStandardMaterial({
      color: 0x00f5ff,
      emissive: 0x007799,
      emissiveIntensity: 0.6,
      metalness: 0.7,
      roughness: 0.2
    });
    const panel1 = new THREE.Mesh(panelGeo, panelMat);
    panel1.position.set(0, 1.8, 0.4);
    const panel2 = new THREE.Mesh(panelGeo, panelMat);
    panel2.position.set(-0.35, 1.8, -0.2);
    panel2.rotation.y = (Math.PI * 2) / 3;
    const panel3 = new THREE.Mesh(panelGeo, panelMat);
    panel3.position.set(0.35, 1.8, -0.2);
    panel3.rotation.y = -(Math.PI * 2) / 3;
    towerGroup.add(panel1, panel2, panel3);

    // Glowing Signal Waves radiating from tower
    const waveRings: THREE.Mesh[] = [];
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide
    });
    for (let r = 0; r < 4; r++) {
      const wRing = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.35, 32), ringMat.clone());
      wRing.position.set(0, 2.2, 0);
      wRing.rotation.x = Math.PI / 2;
      towerGroup.add(wRing);
      waveRings.push(wRing);
    }

    // ==========================================
    // 2. PRODUCT 3D MODEL: SMARTPHONE (WhatsApp API & RCS Messaging)
    // ==========================================
    const phoneGroup = new THREE.Group();
    scene.add(phoneGroup);

    // Phone Body
    const phoneBodyGeo = new THREE.BoxGeometry(2.0, 3.8, 0.18);
    const phoneBodyMat = new THREE.MeshPhysicalMaterial({
      color: 0x0b1329,
      metalness: 0.85,
      roughness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    const phoneBody = new THREE.Mesh(phoneBodyGeo, phoneBodyMat);
    phoneGroup.add(phoneBody);

    // Glowing Screen with WhatsApp/RCS Emerald/Cyan Edge
    const screenGeo = new THREE.PlaneGeometry(1.85, 3.65);
    const screenMat = new THREE.MeshBasicMaterial({
      color: 0x041f1e,
      side: THREE.DoubleSide
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0, 0.095);
    phoneGroup.add(screenMesh);

    // 3 Floating 3D Message Bubble Strips on Screen
    const bubbleMat1 = new THREE.MeshBasicMaterial({ color: 0x00a884 }); // WhatsApp Verified Green
    const bubbleMat2 = new THREE.MeshBasicMaterial({ color: 0x1f2937 }); // Incoming Message
    const bubbleMat3 = new THREE.MeshBasicMaterial({ color: 0x00f5ff }); // RCS Action Chip

    const bubble1 = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.35, 0.05), bubbleMat1);
    bubble1.position.set(0.1, 0.9, 0.13);
    const bubble2 = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.45, 0.05), bubbleMat2);
    bubble2.position.set(-0.1, 0.2, 0.13);
    const bubble3 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.28, 0.05), bubbleMat3);
    bubble3.position.set(0, -0.6, 0.13);
    phoneGroup.add(bubble1, bubble2, bubble3);

    // Phone Edge Neon Frame
    const phoneFrame = new THREE.LineSegments(
      new THREE.EdgesGeometry(phoneBodyGeo),
      new THREE.LineBasicMaterial({ color: 0x00f5ff, transparent: true, opacity: 0.6 })
    );
    phoneGroup.add(phoneFrame);

    // ==========================================
    // 3. PRODUCT 3D MODEL: GOLDEN TELECOM SIM & OTP VAULT (Bulk SMS & DLT)
    // ==========================================
    const simGroup = new THREE.Group();
    scene.add(simGroup);

    // SIM Card Plate
    const simPlateGeo = new THREE.BoxGeometry(2.4, 3.2, 0.12);
    const simPlateMat = new THREE.MeshPhysicalMaterial({
      color: 0x060c1d,
      roughness: 0.25,
      metalness: 0.6,
      clearcoat: 1.0
    });
    const simPlate = new THREE.Mesh(simPlateGeo, simPlateMat);
    simGroup.add(simPlate);

    // Golden Microchip Contact Geometry
    const chipGeo = new THREE.BoxGeometry(1.2, 1.4, 0.14);
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x92400e,
      emissiveIntensity: 0.4
    });
    const goldChip = new THREE.Mesh(chipGeo, goldMat);
    goldChip.position.set(0, 0.2, 0.02);
    simGroup.add(goldChip);

    // 6 Floating Cryptographic OTP Tokens (representing 6-digit OTP delivery)
    const tokenGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const tokenMat = new THREE.MeshBasicMaterial({ color: 0x00f5ff });
    const otpTokens: THREE.Mesh[] = [];
    for (let o = 0; o < 6; o++) {
      const token = new THREE.Mesh(tokenGeo, tokenMat);
      simGroup.add(token);
      otpTokens.push(token);
    }

    // ==========================================
    // 4. PRODUCT 3D MODEL: VOICE WAVEFORM ACOUSTIC MATRIX (Voice & IVR)
    // ==========================================
    const voiceGroup = new THREE.Group();
    scene.add(voiceGroup);

    // 24 Equalizer Frequency Bars arranged in an acoustic cylinder
    const barCount = 28;
    const voiceBars: THREE.Mesh[] = [];
    const barMat = new THREE.MeshBasicMaterial({ color: 0xec4899 });
    for (let b = 0; b < barCount; b++) {
      const angle = (b / barCount) * Math.PI * 2;
      const radius = 1.8;
      const bMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.2, 8), barMat.clone());
      bMesh.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
      voiceGroup.add(bMesh);
      voiceBars.push(bMesh);
    }

    // Central Acoustic Core
    const acousticCore = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.8, 2),
      new THREE.MeshStandardMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        emissive: 0x4c1d95,
        emissiveIntensity: 0.6
      })
    );
    voiceGroup.add(acousticCore);

    // ==========================================
    // 5. PRODUCT 3D MODEL: HIGH-SPEED CARRIER SMPP SERVER RACK (SMPP & Backbone)
    // ==========================================
    const serverGroup = new THREE.Group();
    scene.add(serverGroup);

    // Rack Frame
    const rackGeo = new THREE.BoxGeometry(2.4, 3.4, 1.2);
    const rackMat = new THREE.MeshStandardMaterial({
      color: 0x060b18,
      metalness: 0.9,
      roughness: 0.15
    });
    const rackMesh = new THREE.Mesh(rackGeo, rackMat);
    serverGroup.add(rackMesh);

    // Rack LED activity bays
    for (let u = 0; u < 5; u++) {
      const bayGeo = new THREE.BoxGeometry(2.1, 0.45, 0.1);
      const bayMat = new THREE.MeshStandardMaterial({
        color: 0x0b1730,
        emissive: 0x00f5ff,
        emissiveIntensity: 0.2 + u * 0.1
      });
      const bay = new THREE.Mesh(bayGeo, bayMat);
      bay.position.set(0, 1.2 - u * 0.6, 0.6);
      serverGroup.add(bay);
    }

    // Glowing Fiber Optic Cable Streamers
    const cableGeo = new THREE.TorusGeometry(2.6, 0.03, 16, 100);
    const cableMat1 = new THREE.MeshBasicMaterial({ color: 0x00f5ff, wireframe: true });
    const cableMat2 = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true });
    const cable1 = new THREE.Mesh(cableGeo, cableMat1);
    const cable2 = new THREE.Mesh(cableGeo, cableMat2);
    cable1.rotation.x = Math.PI / 3;
    cable2.rotation.y = Math.PI / 4;
    serverGroup.add(cable1, cable2);

    // ==========================================
    // 6. GLOBAL CARRIER PARTICLES (1,000 Telecom Data Packets)
    // ==========================================
    const particleCount = 1000;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const colArray = new Float32Array(particleCount * 3);

    const cyanC = new THREE.Color(0x00f5ff);
    const blueC = new THREE.Color(0x3b82f6);
    const violetC = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 22;
      posArray[i + 1] = (Math.random() - 0.5) * 22;
      posArray[i + 2] = (Math.random() - 0.5) * 16 - 2;

      const pick = Math.random() < 0.4 ? cyanC : Math.random() < 0.7 ? blueC : violetC;
      colArray[i] = pick.r;
      colArray[i + 1] = pick.g;
      colArray[i + 2] = pick.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colArray, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // Initially hide other models
    phoneGroup.position.set(10, 0, 0);
    simGroup.position.set(10, 0, 0);
    voiceGroup.position.set(10, 0, 0);
    serverGroup.position.set(10, 0, 0);

    // Mouse Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Scroll Tracking
    let targetScroll = 0;
    let currentScroll = 0;

    const onScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      targetScroll = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // --- Render Loop ---
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      currentScroll += (targetScroll - currentScroll) * 0.07;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const sp = currentScroll;

      // 1. Tower Animations
      towerGroup.rotation.y = time * 0.3;
      waveRings.forEach((ring, idx) => {
        const ringScale = ((time * 0.8 + idx * 0.4) % 2) + 0.3;
        ring.scale.set(ringScale, ringScale, ringScale);
        (ring.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.7 - ringScale * 0.3);
      });

      // 2. Phone Animations
      phoneGroup.rotation.y = Math.sin(time * 0.6) * 0.25;
      phoneGroup.rotation.x = Math.cos(time * 0.4) * 0.15;
      bubble1.position.y = 0.9 + Math.sin(time * 2) * 0.04;
      bubble2.position.y = 0.2 + Math.cos(time * 2.2) * 0.04;
      bubble3.position.y = -0.6 + Math.sin(time * 2.4) * 0.04;

      // 3. SIM & OTP Tokens Animations
      simGroup.rotation.y = time * 0.4;
      simGroup.rotation.x = Math.sin(time * 0.3) * 0.2;
      otpTokens.forEach((token, idx) => {
        const tokenAngle = (idx / 6) * Math.PI * 2 + time * 1.5;
        const dist = 1.6 + Math.sin(time * 3 + idx) * 0.2;
        token.position.set(Math.cos(tokenAngle) * dist, Math.sin(tokenAngle) * dist * 0.5, Math.sin(tokenAngle) * 0.6);
      });

      // 4. Voice Waveform Bars Animation
      voiceGroup.rotation.y = time * 0.2;
      voiceBars.forEach((bar, idx) => {
        const barH = 0.4 + Math.sin(time * 6 + idx * 0.5) * 0.5 + Math.cos(time * 4 + idx * 0.3) * 0.3;
        bar.scale.set(1, Math.max(0.2, barH), 1);
      });
      acousticCore.rotation.y = -time * 0.5;

      // 5. Server Rack Animation
      serverGroup.rotation.y = time * 0.25;
      cable1.rotation.z = time * 0.2;
      cable2.rotation.z = -time * 0.2;

      // Background particles drift
      particleField.rotation.y = time * 0.02;

      // ================================================================
      // SCROLL-DRIVEN PRODUCT STATE MACHINE (Smooth Seamless Transitions)
      // ================================================================
      // Helper function to smoothstep
      const smoothLerp = (a: number, b: number, t: number) => a + (b - a) * Math.max(0, Math.min(1, t));

      // STAGE 01 (0.00 - 0.14): Hero / Sovereign CPaaS -> Telecom Tower is Centerpiece
      if (sp < 0.14) {
        towerGroup.visible = true;
        phoneGroup.visible = false;
        simGroup.visible = false;
        voiceGroup.visible = false;
        serverGroup.visible = false;

        towerGroup.position.set(1.4, -0.4, 0);
        towerGroup.scale.setScalar(1.0);
      }
      // STAGE 02 (0.14 - 0.28): 22-Circle Carrier Highway -> Tower shifts left, signal rings expand
      else if (sp >= 0.14 && sp < 0.28) {
        const t = (sp - 0.14) / 0.14;
        towerGroup.visible = true;
        phoneGroup.visible = false;
        simGroup.visible = false;
        voiceGroup.visible = false;
        serverGroup.visible = false;

        towerGroup.position.set(smoothLerp(1.4, -1.8, t), -0.2, 0);
        towerGroup.scale.setScalar(smoothLerp(1.0, 0.85, t));
      }
      // STAGE 03 (0.28 - 0.42): WhatsApp API & RCS Messaging -> 3D Smartphone enters view
      else if (sp >= 0.28 && sp < 0.42) {
        const t = (sp - 0.28) / 0.14;
        towerGroup.visible = false;
        phoneGroup.visible = true;
        simGroup.visible = false;
        voiceGroup.visible = false;
        serverGroup.visible = false;

        phoneGroup.position.set(smoothLerp(4.0, 1.4, t), 0, 0);
        phoneGroup.scale.setScalar(1.05);
      }
      // STAGE 04 (0.42 - 0.56): Bulk SMS, DLT OTP & Verification -> Golden SIM & OTP Vault enters
      else if (sp >= 0.42 && sp < 0.56) {
        const t = (sp - 0.42) / 0.14;
        towerGroup.visible = false;
        phoneGroup.visible = false;
        simGroup.visible = true;
        voiceGroup.visible = false;
        serverGroup.visible = false;

        simGroup.position.set(smoothLerp(-4.0, -1.5, t), 0.2, 0);
        simGroup.scale.setScalar(0.95);
      }
      // STAGE 05 (0.56 - 0.70): Voice Solutions, OBD & Cloud IVR -> 3D Acoustic Waveform
      else if (sp >= 0.56 && sp < 0.70) {
        const t = (sp - 0.56) / 0.14;
        towerGroup.visible = false;
        phoneGroup.visible = false;
        simGroup.visible = false;
        voiceGroup.visible = true;
        serverGroup.visible = false;

        voiceGroup.position.set(smoothLerp(4.0, 1.3, t), -0.2, 0);
        voiceGroup.scale.setScalar(1.0);
      }
      // STAGE 06 (0.70 - 0.84): SMPP 3.4 Gateway & Structured Delivery -> Server Rack & Fiber
      else if (sp >= 0.70 && sp < 0.84) {
        const t = (sp - 0.70) / 0.14;
        towerGroup.visible = false;
        phoneGroup.visible = false;
        simGroup.visible = false;
        voiceGroup.visible = false;
        serverGroup.visible = true;

        serverGroup.position.set(smoothLerp(-4.0, -1.6, t), -0.1, 0);
        serverGroup.scale.setScalar(0.9);
      }
      // STAGE 07 & 08 (0.84 - 1.00): NOC Console & Gateway Hub -> Converged Telecom Mesh
      else {
        const t = (sp - 0.84) / 0.16;
        towerGroup.visible = true;
        phoneGroup.visible = false;
        simGroup.visible = false;
        voiceGroup.visible = false;
        serverGroup.visible = false;

        towerGroup.position.set(smoothLerp(-1.6, 1.2, t), -0.3, 0);
        towerGroup.scale.setScalar(smoothLerp(0.8, 1.1, t));
      }

      // Parallax mouse tilt
      camera.position.x = mouse.x * 0.5;
      camera.position.y = mouse.y * 0.35;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);

      legGeo.dispose();
      metalMat.dispose();
      panelGeo.dispose();
      panelMat.dispose();
      phoneBodyGeo.dispose();
      phoneBodyMat.dispose();
      screenGeo.dispose();
      screenMat.dispose();
      bubbleMat1.dispose();
      bubbleMat2.dispose();
      bubbleMat3.dispose();
      simPlateGeo.dispose();
      simPlateMat.dispose();
      chipGeo.dispose();
      goldMat.dispose();
      tokenGeo.dispose();
      tokenMat.dispose();
      barMat.dispose();
      rackGeo.dispose();
      rackMat.dispose();
      cableGeo.dispose();
      cableMat1.dispose();
      cableMat2.dispose();
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
