const fs = require('fs');
let code = fs.readFileSync('src/components/heroui/modern-equipment.tsx', 'utf8');

// Replace HudHotspot
const hudHotspotRegex = /const HudHotspot = \(\{.*?\}\) => \{[\s\S]*?^  \);$\n\};/m;
const newHudHotspot = `const HudHotspot = ({ top, left, title, subtitle, labelOffsetX, labelOffsetY, delay = 0, imageUrl, onClick, nodeIcon = "Target", active = false }: any) => {
  const IconComponent = (FeatherIcons as any)[nodeIcon] || FeatherIcons.Target;
  
  return (
    <div className="absolute z-20 flex items-center justify-center" style={{ top, left, transform: 'translate(-50%, -50%)' }}>
      
      {/* Golden Glowing SVG Curve */}
      <motion.svg 
        className="absolute z-0 pointer-events-none overflow-visible"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.3 }}
        style={{ width: 1, height: 1, top: '50%', left: '50%' }}
      >
        <defs>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <motion.path
          d={\`M 0 0 C \${labelOffsetX * 0.4} 0, \${labelOffsetX * 0.6} \${labelOffsetY}, \${labelOffsetX} \${labelOffsetY}\`}
          fill="transparent"
          stroke="#ffd900"
          strokeWidth="2"
          filter="url(#goldGlow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
        />
        {/* Animated dot moving along the path */}
        <motion.circle
          r="3"
          fill="#ffffff"
          filter="url(#goldGlow)"
          initial={{ offsetDistance: "0%" } as any}
          animate={{ offsetDistance: "100%" } as any}
          transition={{ duration: 2.5, delay: delay + 1, repeat: Infinity, ease: "linear" }}
          style={{ offsetPath: \`path('M 0 0 C \${labelOffsetX * 0.4} 0, \${labelOffsetX * 0.6} \${labelOffsetY}, \${labelOffsetX} \${labelOffsetY}')\` }}
        />
      </motion.svg>

      {/* Clinical Node */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.5, delay }}
        className="relative group cursor-pointer z-10"
        onClick={onClick}
      >
        <div className={\`w-9 h-9 rounded-full bg-white border-[2.5px] shadow-[0_0_15px_rgba(255,217,0,0.6)] flex items-center justify-center transition-colors \${active ? "border-[#ffd900]" : "border-[#224297]"}\`}>
           <IconComponent size={15} strokeWidth={2.5} className={active ? "text-[#ffd900]" : "text-[#224297]"} />
        </div>
        {/* Glowing Pulse ring */}
        <div className={\`absolute inset-[-6px] rounded-full border opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all \${active ? "border-[#ffd900]" : "border-[#ffd900]"}\`}></div>
      </motion.div>

      {/* Label Box (Medical Style) */}
      <motion.div 
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.8 }}
        onClick={onClick}
        className={\`absolute bg-white/95 backdrop-blur-3xl border shadow-[0_8px_32px_rgba(255,217,0,0.15)] rounded-2xl p-3.5 w-[190px] pointer-events-auto cursor-pointer hover:bg-white transition-all flex flex-col justify-center \${active ? "border-[#ffd900]" : "border-[#ffd900]/30"}\`}
        style={{ 
          top: labelOffsetY, 
          left: labelOffsetX,
          transform: \`translate(\${labelOffsetX > 0 ? '10px' : 'calc(-100% - 10px)'}, -50%)\`
        }}
      >
        <div className="flex items-center gap-2 mb-1.5">
           <div className={\`w-2 h-2 rounded-full shadow-sm \${active ? "bg-[#ffd900] animate-pulse" : "bg-[#224297]"}\`}></div>
           <h5 className="text-[12px] font-bold text-[#2d3142] leading-none tracking-tight">{title}</h5>
        </div>
        <p className="text-[10.5px] text-[#6b7280] pl-4 leading-relaxed">{subtitle}</p>
      </motion.div>
    </div>
  );
};`;
code = code.replace(hudHotspotRegex, newHudHotspot);

// Replace mapping invocation
const mappingRegex = /\{showHotspots && activeItem\.hotspots\?\.map\(\(hotspot: any, index: number\) => \([\s\S]*?\)\)\}/;
const newMapping = `{showHotspots && activeItem.hotspots?.map((hotspot: any, index: number) => (
                     <HudHotspot 
                       key={\`\${activeItem.id}-hotspot-\${index}\`}
                       top={hotspot.top} 
                       left={hotspot.left} 
                       title={hotspot.title} 
                       subtitle={hotspot.subtitle}
                       labelOffsetX={hotspot.labelOffsetX} 
                       labelOffsetY={hotspot.labelOffsetY}
                       delay={0.4 + (index * 0.2)}
                       imageUrl={hotspot.imageUrl}
                       nodeIcon={hotspot.nodeIcon}
                       active={activeHotspot === hotspot}
                       onClick={() => setActiveHotspot(hotspot)}
                     />
                   ))}`;
code = code.replace(mappingRegex, newMapping);

// Now update the Right Side Widget logic
// 1. Description Text:
const descRegex = /<p className="text-\[13px\] text-\[\#8b95a5\] leading-relaxed mb-6">[\s\S]*?<\/p>/;
const newDesc = `<p className="text-[13px] text-[#8b95a5] leading-relaxed mb-6">
              {activeHotspot ? activeHotspot.widgetDesc : activeItem.description}
            </p>`;
code = code.replace(descRegex, newDesc);

// 2. Metric 1 Block
// We must find the metric block specifically to replace it without messing up scrambling logic.
// We have `metric1Scramble !== null ? metric1Scramble : (activeItem.specs?.metric1?.value || 99)`
const metric1Regex = /<p className="text-\[22px\] font-bold text-\[\#2d3142\] leading-none w-\[40px\]">\{metric1Scramble !== null \? metric1Scramble : \(activeItem\.specs\?\.metric1\?\.value \|\| 99\)\}<\/p>/;
const newMetric1 = `<p className="text-[22px] font-bold text-[#2d3142] leading-none w-[40px] whitespace-nowrap overflow-visible">
                          {metric1Scramble !== null ? metric1Scramble : (activeHotspot ? activeHotspot.widgetMetric1?.value : activeItem.specs?.metric1?.value)}
                        </p>`;
code = code.replace(metric1Regex, newMetric1);

const metric1LabelRegex = /<h4 className="text-\[12px\] font-bold text-\[\#2d3142\] leading-none">\{activeItem\.specs\?\.metric1\?\.label \|\| "Waktu"\}<\/h4>/;
const newMetric1Label = `<h4 className="text-[12px] font-bold text-[#2d3142] leading-none whitespace-nowrap overflow-visible">
                            {activeHotspot ? activeHotspot.widgetMetric1?.label : activeItem.specs?.metric1?.label}
                          </h4>`;
code = code.replace(metric1LabelRegex, newMetric1Label);

const metric1SubRegex = /<p className="text-\[10px\] text-\[\#8b95a5\] mt-0\.5">\{activeItem\.specs\?\.metric1\?\.sublabel \|\| "Estimasi selesai"\}<\/p>/;
const newMetric1Sub = `<p className="text-[10px] text-[#8b95a5] mt-0.5 whitespace-nowrap overflow-visible">
                            {activeHotspot ? "Analisis Medis" : activeItem.specs?.metric1?.sublabel}
                          </p>`;
code = code.replace(metric1SubRegex, newMetric1Sub);

// 3. Metric 2 Block
const metric2Regex = /<p className="text-\[15px\] font-bold text-\[\#2d3142\] leading-none w-\[40px\]">\{metric2Scramble !== null \? metric2Scramble : \(activeItem\.specs\?\.metric2\?\.value \|\| "Basic"\)\}<\/p>/;
const newMetric2 = `<p className="text-[15px] font-bold text-[#2d3142] leading-none w-[40px] whitespace-nowrap overflow-visible">
                        {metric2Scramble !== null ? metric2Scramble : (activeHotspot ? activeHotspot.widgetMetric2?.value : activeItem.specs?.metric2?.value)}
                      </p>`;
code = code.replace(metric2Regex, newMetric2);

const metric2LabelRegex = /<h4 className="text-\[12px\] font-bold text-\[\#2d3142\] leading-none">\{activeItem\.specs\?\.metric2\?\.label \|\| "Check"\}<\/h4>/;
const newMetric2Label = `<h4 className="text-[12px] font-bold text-[#2d3142] leading-none whitespace-nowrap overflow-visible">
                            {activeHotspot ? activeHotspot.widgetMetric2?.label : activeItem.specs?.metric2?.label}
                          </h4>`;
code = code.replace(metric2LabelRegex, newMetric2Label);

const metric2SubRegex = /<p className="text-\[10px\] text-\[\#8b95a5\] mt-0\.5">\{activeItem\.specs\?\.metric2\?\.sublabel \|\| "Titik inspeksi"\}<\/p>/;
const newMetric2Sub = `<p className="text-[10px] text-[#8b95a5] mt-0.5 whitespace-nowrap overflow-visible">
                            {activeHotspot ? "Parameter" : activeItem.specs?.metric2?.sublabel}
                          </p>`;
code = code.replace(metric2SubRegex, newMetric2Sub);

// Deselect hotspot when changing tabs
const setActiveItemIndexRegex = /onClick=\{\(\) => setActiveItemIndex\(index\)\}/g;
const newSetActiveItemIndex = `onClick={() => { setActiveItemIndex(index); setActiveHotspot(null); }}`;
code = code.replace(setActiveItemIndexRegex, newSetActiveItemIndex);

fs.writeFileSync('src/components/heroui/modern-equipment.tsx', code);
console.log("TSX Refactored successfully");
