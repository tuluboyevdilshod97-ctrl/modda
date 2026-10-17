import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  RotateCw,
  RefreshCcw,
  Check,
  AlertTriangle,
  X,
  Bell,
  Settings,
  Sparkles,
  Calendar,
} from 'lucide-react';
import { QuizResultHistory } from '../types';

interface TodayStatsPieProps {
  history?: QuizResultHistory[];
}

interface DonutSlice {
  id: 'green' | 'red' | 'amber';
  title: string;
  badgeLabel: string;
  countText: string;
  pct: number;
  count: number;
  color: string;
  topColor: string;
  sideColor: string;
  startAngle: number;
  endAngle: number;
  midAngle: number;
  badgePosition: 'top-left' | 'top-right' | 'right';
}

export const TodayStatsPie: React.FC<TodayStatsPieProps> = ({ history = [] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredSliceId, setHoveredSliceId] = useState<string | null>(null);
  const hoveredRef = useRef<string | null>(null);
  hoveredRef.current = hoveredSliceId;

  const [canvasDimensions, setCanvasDimensions] = useState({ width: 880, height: 490 });
  const [isMobile, setIsMobile] = useState(false);
  const [projectedPoints, setProjectedPoints] = useState<Record<string, { x: number; y: number }>>({});
  const [isInteracting, setIsInteracting] = useState(false);

  const resetCameraRef = useRef<() => void>(() => {});

  // Metrics: 80% Green (80 ta), 15% Red (15 ta), 5% Amber (5 ta)
  // Total = 100 questions, Score = 152.4 BALL
  const pctGreen = 80;
  const pctRed = 15;
  const pctAmber = 5;

  const countGreen = 80;
  const countRed = 15;
  const countAmber = 5;
  const totalScore = '152.4 BALL';

  // Geometry configuration: 360-degree donut ring
  // Green starts from top-left (0.82 * PI) and sweeps 80% (1.6 * PI)
  const baseAngle = 0.82 * Math.PI;
  const greenSweep = (pctGreen / 100) * Math.PI * 2; // 1.6 * PI
  const redSweep = (pctRed / 100) * Math.PI * 2;     // 0.3 * PI
  const amberSweep = (pctAmber / 100) * Math.PI * 2; // 0.1 * PI

  const greenEnd = baseAngle - greenSweep;
  const redEnd = greenEnd - redSweep;
  const amberEnd = redEnd - amberSweep;

  const slicesData: DonutSlice[] = [
    {
      id: 'green',
      title: "TO'G'RI JAVOB",
      badgeLabel: '80%',
      countText: `${countGreen} ta / ${pctGreen}%`,
      pct: pctGreen,
      count: countGreen,
      color: '#10B981', // Vibrant Emerald Green
      topColor: '#34D399',
      sideColor: '#059669',
      startAngle: baseAngle,
      endAngle: greenEnd,
      midAngle: (baseAngle + greenEnd) / 2,
      badgePosition: 'top-left',
    },
    {
      id: 'red',
      title: "NOTO'G'RI JAVOB",
      badgeLabel: '15%',
      countText: `${countRed} ta / ${pctRed}%`,
      pct: pctRed,
      count: countRed,
      color: '#EF4444', // Crimson Red
      topColor: '#F87171',
      sideColor: '#DC2626',
      startAngle: greenEnd,
      endAngle: redEnd,
      midAngle: (greenEnd + redEnd) / 2,
      badgePosition: 'right',
    },
    {
      id: 'amber',
      title: "O'TKAZIB YUBORILGAN",
      badgeLabel: '5%',
      countText: `${countAmber} ta / ${pctAmber}%`,
      pct: pctAmber,
      count: countAmber,
      color: '#F59E0B', // Golden Yellow / Amber
      topColor: '#FBBF24',
      sideColor: '#D97706',
      startAngle: redEnd,
      endAngle: amberEnd,
      midAngle: (redEnd + amberEnd) / 2,
      badgePosition: 'top-right',
    },
  ];

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    let curWidth = container.clientWidth;
    const checkMobile = curWidth < 640;
    setIsMobile(checkMobile);

    let curHeight = checkMobile
      ? Math.max(300, Math.min(380, Math.round(curWidth * 0.85)))
      : Math.max(420, Math.min(540, Math.round(curWidth * 0.54)));

    setCanvasDimensions({ width: curWidth, height: curHeight });

    // Scene & Perspective Camera at 45° isometric angle
    const scene = new THREE.Scene();
    
    // Adaptive camera FOV & distance for small mobile screens
    const fov = checkMobile ? 44 : 35;
    const camera = new THREE.PerspectiveCamera(fov, curWidth / curHeight, 0.1, 100);
    const cameraDistY = checkMobile ? 13.5 : 12;
    const cameraDistZ = checkMobile ? 16.5 : 14.5;
    camera.position.set(0, cameraDistY, cameraDistZ);
    camera.lookAt(0, -0.4, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(curWidth, curHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Photorealistic Studio Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.92);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.45);
    keyLight.position.set(12, 24, 14);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.bias = -0.0004;
    keyLight.shadow.camera.near = 1;
    keyLight.shadow.camera.far = 50;
    keyLight.shadow.camera.left = -9;
    keyLight.shadow.camera.right = 9;
    keyLight.shadow.camera.top = 9;
    keyLight.shadow.camera.bottom = -9;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe2e8f0, 0.7);
    fillLight.position.set(-14, 10, -10);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffedd5, 1.15, 35);
    rimLight.position.set(0, 8, 12);
    scene.add(rimLight);

    // Floor Shadow Plane
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 512;
    shadowCanvas.height = 512;
    const sctx = shadowCanvas.getContext('2d')!;
    const grad = sctx.createRadialGradient(256, 256, 20, 256, 256, 240);
    grad.addColorStop(0, 'rgba(15, 23, 42, 0.40)');
    grad.addColorStop(0.35, 'rgba(30, 41, 59, 0.22)');
    grad.addColorStop(0.7, 'rgba(51, 65, 85, 0.05)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    sctx.fillStyle = grad;
    sctx.fillRect(0, 0, 512, 512);

    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(16.5, 13.0);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.86,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, -0.68, 0);
    scene.add(shadowMesh);

    // Donut chart root group
    const donutGroup = new THREE.Group();
    scene.add(donutGroup);

    const outerRadius = 4.85;
    const innerRadius = 2.45;
    const depth = 1.25;

    const sliceMeshes: {
      id: string;
      mesh: THREE.Mesh;
      basePos: THREE.Vector3;
      explodeDir: THREE.Vector3;
      anchorWorldOffset: THREE.Vector3;
    }[] = [];

    const makeTopLabelTexture = (text: string) => {
      const tCanvas = document.createElement('canvas');
      tCanvas.width = 512;
      tCanvas.height = 512;
      const ctx = tCanvas.getContext('2d')!;
      ctx.clearRect(0, 0, 512, 512);
      ctx.font = '900 180px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.lineWidth = 18;
      ctx.strokeText(text, 256, 256);
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(text, 256, 256);
      const tex = new THREE.CanvasTexture(tCanvas);
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.needsUpdate = true;
      return tex;
    };

    slicesData.forEach((slice) => {
      const shape = new THREE.Shape();
      const outerXStart = Math.cos(slice.startAngle) * outerRadius;
      const outerYStart = Math.sin(slice.startAngle) * outerRadius;
      shape.moveTo(outerXStart, outerYStart);

      shape.absarc(0, 0, outerRadius, slice.startAngle, slice.endAngle, true);

      const innerXEnd = Math.cos(slice.endAngle) * innerRadius;
      const innerYEnd = Math.sin(slice.endAngle) * innerRadius;
      shape.lineTo(innerXEnd, innerYEnd);

      shape.absarc(0, 0, innerRadius, slice.endAngle, slice.startAngle, false);
      shape.closePath();

      const extrudeSettings: THREE.ExtrudeGeometryOptions = {
        depth,
        bevelEnabled: true,
        bevelSegments: 7,
        steps: 1,
        bevelSize: 0.16,
        bevelThickness: 0.16,
        curveSegments: 48,
      };

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geometry.rotateX(-Math.PI / 2);

      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(slice.color),
        roughness: 0.15,
        metalness: 0.04,
        clearcoat: 0.95,
        clearcoatRoughness: 0.08,
        reflectivity: 0.85,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData = { id: slice.id };

      const explodeDir = new THREE.Vector3(
        Math.cos(slice.midAngle),
        0,
        -Math.sin(slice.midAngle)
      ).normalize();

      mesh.position.set(0, 0, 0);
      donutGroup.add(mesh);

      if (slice.id === 'green') {
        const textTex = makeTopLabelTexture('80%');
        const textPlaneGeo = new THREE.PlaneGeometry(2.2, 2.2);
        const textPlaneMat = new THREE.MeshBasicMaterial({
          map: textTex,
          transparent: true,
          opacity: 0.95,
          depthWrite: false,
        });
        const textMesh = new THREE.Mesh(textPlaneGeo, textPlaneMat);
        textMesh.rotation.x = -Math.PI / 2;

        const labelAngle = 0.02 * Math.PI;
        const textDist = (outerRadius + innerRadius) * 0.50;
        textMesh.position.set(
          Math.cos(labelAngle) * textDist,
          depth + 0.10,
          -Math.sin(labelAngle) * textDist
        );
        mesh.add(textMesh);
      }

      const anchorDist = (outerRadius + innerRadius) * 0.52;
      const anchorWorldOffset = new THREE.Vector3(
        Math.cos(slice.midAngle) * anchorDist,
        depth + 0.10,
        -Math.sin(slice.midAngle) * anchorDist
      );

      sliceMeshes.push({
        id: slice.id,
        mesh,
        basePos: mesh.position.clone(),
        explodeDir,
        anchorWorldOffset,
      });
    });

    // Raycasting
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(donutGroup.children, true);

      if (intersects.length > 0) {
        let current: THREE.Object3D | null = intersects[0].object;
        while (current && current !== donutGroup && !current.userData.id) {
          current = current.parent;
        }
        if (current && current.userData.id) {
          setHoveredSliceId(current.userData.id);
          canvas.style.cursor = 'pointer';
          return;
        }
      }
      setHoveredSliceId(null);
      canvas.style.cursor = 'grab';
    };

    const handlePointerLeave = () => {
      setHoveredSliceId(null);
      canvas.style.cursor = 'grab';
    };

    // Rotation Drag & Touch Controls
    let isDragging = false;
    let previousPosition = { x: 0, y: 0 };
    let targetRotationY = 0;
    let targetRotationX = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      canvas.style.cursor = 'grabbing';
      previousPosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousPosition.x;
      const deltaY = e.clientY - previousPosition.y;

      targetRotationY += deltaX * 0.007;
      targetRotationX += deltaY * 0.004;
      targetRotationX = Math.max(-0.35, Math.min(0.35, targetRotationX));

      previousPosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
      canvas.style.cursor = 'grab';
    };

    // Mobile touch events
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        previousPosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousPosition.x;
      const deltaY = e.touches[0].clientY - previousPosition.y;

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.005;
      targetRotationX = Math.max(-0.35, Math.min(0.35, targetRotationX));

      previousPosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    resetCameraRef.current = () => {
      targetRotationY = 0;
      targetRotationX = 0;
      setIsInteracting(false);
    };

    canvas.addEventListener('mousemove', handlePointerMove);
    canvas.addEventListener('mouseleave', handlePointerLeave);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchend', onTouchEnd);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let animationFrameId: number;
    const tempVec = new THREE.Vector3();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      donutGroup.rotation.y += (targetRotationY - donutGroup.rotation.y) * 0.1;
      donutGroup.rotation.x += (targetRotationX - donutGroup.rotation.x) * 0.1;

      const activeId = hoveredRef.current;
      const newPoints: Record<string, { x: number; y: number }> = {};

      sliceMeshes.forEach((item) => {
        const isHovered = activeId === item.id;
        const targetPos = item.basePos.clone();

        if (isHovered) {
          targetPos.add(item.explodeDir.clone().multiplyScalar(0.30));
          targetPos.y += 0.22;
        }

        item.mesh.position.lerp(targetPos, 0.16);

        tempVec.copy(item.anchorWorldOffset);
        tempVec.applyMatrix4(item.mesh.matrixWorld);
        tempVec.project(camera);

        const px = ((tempVec.x + 1) / 2) * curWidth;
        const py = ((-tempVec.y + 1) / 2) * curHeight;

        newPoints[item.id] = { x: px, y: py };
      });

      setProjectedPoints(newPoints);
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      curWidth = containerRef.current.clientWidth;
      const isMob = curWidth < 640;
      setIsMobile(isMob);

      curHeight = isMob
        ? Math.max(300, Math.min(380, Math.round(curWidth * 0.85)))
        : Math.max(420, Math.min(540, Math.round(curWidth * 0.54)));

      setCanvasDimensions({ width: curWidth, height: curHeight });

      camera.fov = isMob ? 44 : 35;
      camera.position.set(0, isMob ? 13.5 : 12, isMob ? 16.5 : 14.5);
      camera.aspect = curWidth / curHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(curWidth, curHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handlePointerMove);
      canvas.removeEventListener('mouseleave', handlePointerLeave);
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      renderer.dispose();
    };
  }, []);

  const isValidPt = (pt?: { x: number; y: number }): pt is { x: number; y: number } =>
    !!pt && typeof pt.x === 'number' && typeof pt.y === 'number' && Number.isFinite(pt.x) && !Number.isNaN(pt.x) && Number.isFinite(pt.y) && !Number.isNaN(pt.y);

  const greenPt = isValidPt(projectedPoints['green']) ? projectedPoints['green'] : null;
  const redPt = isValidPt(projectedPoints['red']) ? projectedPoints['red'] : null;
  const amberPt = isValidPt(projectedPoints['amber']) ? projectedPoints['amber'] : null;

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white border border-[#DDD7CD] rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xs select-none overflow-hidden text-[#1E1A16]"
    >
      {/* Top Header of the Academic Dashboard */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-5 border-b border-[#EAE5DD]">
        <div className="min-w-0">
          <div className="flex items-center flex-wrap gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FAF5ED] text-[#8C6B38] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border border-[#E6DCC8]">
              Dashboard
            </span>
            <span className="flex items-center text-[11px] sm:text-xs text-[#736B60]">
              <Calendar className="w-3.5 h-3.5 mr-1 text-[#8C6B38]" />
              Tahliliy hisobot
            </span>
          </div>
          <h2 className="text-lg sm:text-2xl font-bold text-[#1E1A16] tracking-tight mt-1 truncate">
            Test Natijalari Tahlili
          </h2>
        </div>

        {/* Overall Result placed in header instead of controls */}
        <div className="flex flex-col items-start sm:items-end shrink-0 pt-2 sm:pt-0">
          <span className="text-3xl sm:text-4xl font-bold text-[#8C6B38] tracking-tight leading-none">
            80%
          </span>
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#736B60] uppercase tracking-wider text-left sm:text-right mt-1.5">
            UMUMIY O'ZLASHTIRISH
          </span>
        </div>
      </div>

      {/* 3D Volumetric Donut Stage */}
      <div className="relative w-full overflow-hidden flex justify-center items-center select-none py-2 my-1 sm:my-2 min-h-[290px] sm:min-h-[440px]">
        <canvas
          ref={canvasRef}
          className="block w-full cursor-grab active:cursor-grabbing touch-none"
        />

        {/* SVG Semi-Transparent Pointer Lines (Desktop & Tablet) */}
        <svg className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none">
          {/* Top-Left Pointer: Green Segment */}
          {greenPt && (
            <g className="transition-all duration-200">
              <path
                d={`M ${greenPt.x.toFixed(1)} ${greenPt.y.toFixed(1)} Q ${(greenPt.x - 40).toFixed(1)} 75, 230 65`}
                fill="none"
                stroke="#10B981"
                strokeWidth={hoveredSliceId === 'green' ? 2.5 : 1.8}
                strokeDasharray="4 3"
                strokeOpacity="0.8"
              />
              <circle
                cx={greenPt.x}
                cy={greenPt.y}
                r={hoveredSliceId === 'green' ? 6 : 4.5}
                fill="#10B981"
                stroke="#FAF8F5"
                strokeWidth={2}
              />
            </g>
          )}

          {/* Top-Right Pointer: Amber Segment */}
          {amberPt && (
            <g className="transition-all duration-200">
              <path
                d={`M ${amberPt.x.toFixed(1)} ${amberPt.y.toFixed(1)} Q ${(amberPt.x + 35).toFixed(1)} 75, ${(canvasDimensions.width - 245).toFixed(1)} 65`}
                fill="none"
                stroke="#F59E0B"
                strokeWidth={hoveredSliceId === 'amber' ? 2.5 : 1.8}
                strokeDasharray="4 3"
                strokeOpacity="0.8"
              />
              <circle
                cx={amberPt.x}
                cy={amberPt.y}
                r={hoveredSliceId === 'amber' ? 6 : 4.5}
                fill="#F59E0B"
                stroke="#FAF8F5"
                strokeWidth={2}
              />
            </g>
          )}

          {/* Right Pointer: Red Segment */}
          {redPt && (
            <g className="transition-all duration-200">
              <path
                d={`M ${redPt.x.toFixed(1)} ${redPt.y.toFixed(1)} Q ${(redPt.x + 45).toFixed(1)} ${(canvasDimensions.height * 0.58).toFixed(1)}, ${(canvasDimensions.width - 245).toFixed(1)} ${(canvasDimensions.height * 0.58).toFixed(1)}`}
                fill="none"
                stroke="#EF4444"
                strokeWidth={hoveredSliceId === 'red' ? 2.5 : 1.8}
                strokeDasharray="4 3"
                strokeOpacity="0.8"
              />
              <circle
                cx={redPt.x}
                cy={redPt.y}
                r={hoveredSliceId === 'red' ? 6 : 4.5}
                fill="#EF4444"
                stroke="#FAF8F5"
                strokeWidth={2}
              />
            </g>
          )}
        </svg>

        {/* Floating Translucent Glass Badges for Tablets and Desktops */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none">
          {/* 1. Top-Left Badge */}
          <div
            onMouseEnter={() => setHoveredSliceId('green')}
            onMouseLeave={() => setHoveredSliceId(null)}
            className={`absolute top-4 sm:top-6 left-2 sm:left-6 pointer-events-auto cursor-pointer p-3 sm:p-4 rounded-xl border transition-all duration-200 backdrop-blur-md max-w-[210px] shadow-sm ${
              hoveredSliceId === 'green'
                ? 'bg-[#FAF5ED] border-emerald-500 ring-1 ring-emerald-500 scale-105'
                : 'bg-white/95 border-[#DDD7CD] hover:border-emerald-500'
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                TO'G'RI JAVOB
              </span>
            </div>
            <div className="text-base sm:text-lg font-bold text-[#1E1A16] mt-1 pl-7">
              {countGreen} ta / {pctGreen}%
            </div>
          </div>

          {/* 2. Top-Right Badge */}
          <div
            onMouseEnter={() => setHoveredSliceId('amber')}
            onMouseLeave={() => setHoveredSliceId(null)}
            className={`absolute top-4 sm:top-6 right-2 sm:right-6 pointer-events-auto cursor-pointer p-3 sm:p-4 rounded-xl border transition-all duration-200 backdrop-blur-md max-w-[225px] shadow-sm ${
              hoveredSliceId === 'amber'
                ? 'bg-[#FAF5ED] border-amber-500 ring-1 ring-amber-500 scale-105'
                : 'bg-white/95 border-[#DDD7CD] hover:border-amber-500'
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">
                <AlertTriangle className="w-3 h-3 stroke-[3]" />
              </span>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                O'TKAZIB YUBORILGAN
              </span>
            </div>
            <div className="text-base sm:text-lg font-bold text-[#1E1A16] mt-1 pl-7">
              {countAmber} ta / {pctAmber}%
            </div>
          </div>

          {/* 3. Right Badge */}
          <div
            onMouseEnter={() => setHoveredSliceId('red')}
            onMouseLeave={() => setHoveredSliceId(null)}
            className={`absolute top-[52%] sm:top-[54%] right-2 sm:right-6 pointer-events-auto cursor-pointer p-3 sm:p-4 rounded-xl border transition-all duration-200 backdrop-blur-md max-w-[210px] shadow-sm ${
              hoveredSliceId === 'red'
                ? 'bg-[#FAF5ED] border-rose-500 ring-1 ring-rose-500 scale-105'
                : 'bg-white/95 border-[#DDD7CD] hover:border-rose-500'
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold">
                <X className="w-3 h-3 stroke-[3]" />
              </span>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-wide">
                NOTO'G'RI JAVOB
              </span>
            </div>
            <div className="text-base sm:text-lg font-bold text-[#1E1A16] mt-1 pl-7">
              {countRed} ta / {pctRed}%
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-Friendly Adaptive Badges Grid */}
      <div className="sm:hidden grid grid-cols-1 gap-2 my-2">
        <div
          onClick={() => setHoveredSliceId(hoveredSliceId === 'green' ? null : 'green')}
          className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
            hoveredSliceId === 'green'
              ? 'bg-[#FAF5ED] border-emerald-500 ring-1 ring-emerald-400'
              : 'bg-[#FAF8F5] border-[#DDD7CD]'
          }`}
        >
          <div className="flex items-center space-x-2">
            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
              <Check className="w-3 h-3 stroke-[3]" />
            </span>
            <span className="text-xs font-bold text-emerald-800 uppercase">TO'G'RI JAVOB</span>
          </div>
          <span className="text-xs font-bold text-[#1E1A16]">{countGreen} ta / {pctGreen}%</span>
        </div>

        <div
          onClick={() => setHoveredSliceId(hoveredSliceId === 'amber' ? null : 'amber')}
          className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
            hoveredSliceId === 'amber'
              ? 'bg-[#FAF5ED] border-amber-500 ring-1 ring-amber-400'
              : 'bg-[#FAF8F5] border-[#DDD7CD]'
          }`}
        >
          <div className="flex items-center space-x-2">
            <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center">
              <AlertTriangle className="w-3 h-3 stroke-[3]" />
            </span>
            <span className="text-xs font-bold text-amber-800 uppercase">O'TKAZIB YUBORILGAN</span>
          </div>
          <span className="text-xs font-bold text-[#1E1A16]">{countAmber} ta / {pctAmber}%</span>
        </div>

        <div
          onClick={() => setHoveredSliceId(hoveredSliceId === 'red' ? null : 'red')}
          className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
            hoveredSliceId === 'red'
              ? 'bg-[#FAF5ED] border-rose-500 ring-1 ring-rose-400'
              : 'bg-[#FAF8F5] border-[#DDD7CD]'
          }`}
        >
          <div className="flex items-center space-x-2">
            <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center">
              <X className="w-3 h-3 stroke-[3]" />
            </span>
            <span className="text-xs font-bold text-rose-800 uppercase">NOTO'G'RI JAVOB</span>
          </div>
          <span className="text-xs font-bold text-[#1E1A16]">{countRed} ta / {pctRed}%</span>
        </div>
      </div>

      {/* Centered Directly Underneath the 3D Donut Chart: 152.4 BALL / TO'PLANAGAN BALL */}
      <div className="flex flex-col items-center justify-center py-2.5 sm:py-3 border-t border-[#EAE5DD]">
        <div className="text-xl sm:text-3xl font-bold text-[#8C6B38] tracking-tight flex items-baseline space-x-1.5">
          <span>{totalScore}</span>
        </div>
        <div className="text-[10px] sm:text-xs font-semibold text-[#736B60] tracking-wider uppercase mt-0.5">
          TO'PLANAGAN BALL
        </div>
      </div>

      {/* Minimalist Interactive Footer Details */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 pt-3 border-t border-[#EAE5DD] text-[11px] sm:text-xs text-[#736B60] text-center sm:text-left">
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-[#8C6B38] animate-pulse shrink-0" />
          <span>Volumetric 3D Studio Modeli</span>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4">
          <span className="inline-flex items-center space-x-1 text-[#595248]">
            <RotateCw className="w-3.5 h-3.5 text-[#8C6B38]" />
            <span>360° erkin burish</span>
          </span>
          <span className="inline-flex items-center space-x-1 text-[#595248]">
            <Sparkles className="w-3.5 h-3.5 text-[#8C6B38]" />
            <span>45° izometriya</span>
          </span>
        </div>
      </div>
    </div>
  );
};
