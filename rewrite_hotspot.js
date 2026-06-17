const fs = require('fs');

let code = fs.readFileSync('src/components/heroui/modern-equipment.tsx', 'utf8');

const hudHotspotRegex = /const HudHotspot = \(\{.*?\}\) => \{[\s\S]*?^  \);$\n\};/m;

const newHudHotspot = `const HudHotspot = ({ top, left, title, subtitle, labelOffsetX, labelOffsetY, delay = 0, imageUrl, onClick, nodeIcon = "Target", active = false }: any) => {
  const IconComponent = (FeatherIcons as any)[nodeIcon] || FeatherIcons.Target;
  
  return (
    <div className="absolute z-20 flex items-center justify-center" style={{ top, left }}>
      
      {/* Connecting Bezier Curve (SVG) */}
      <motion.svg 
        className="absolute z-0 pointer-events-none overflow-visible"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.3, ease: smoothBezier }}
        style={{ width: 1, height: 1, top: '50%', left: '50%' }}
      >
        <motion.path
          d={\`M 0 0 C \${labelOffsetX * 0.4} 0, \${labelOffsetX * 0.6} \${labelOffsetY}, \${labelOffsetX} \${labelOffsetY}\`}
          fill="transparent"
          stroke="#224297"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
        />
        {/* Animated dot moving along the path */}
        <motion.circle
          r="2.5"
          fill="#224297"
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
        <div className={\`w-9 h-9 rounded-full bg-white border-[2.5px] shadow-[0_4px_12px_rgba(34,66,151,0.12)] flex items-center justify-center transition-colors \${active ? "border-[#ffd900]" : "border-[#224297]"}\`}>
           <IconComponent size={15} strokeWidth={2.5} className={active ? "text-[#ffd900]" : "text-[#224297]"} />
        </div>
        {/* Subtle Pulse ring */}
        <div className={\`absolute inset-[-6px] rounded-full border opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all \${active ? "border-[#ffd900]" : "border-[#224297]"}\`}></div>
      </motion.div>

      {/* Label Box (Medical Style) */}
      <motion.div 
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.8 }}
        onClick={onClick}
        className={\`absolute bg-white/95 backdrop-blur-3xl border shadow-[0_8px_32px_rgba(34,66,151,0.06)] rounded-2xl p-3.5 w-[190px] pointer-events-auto cursor-pointer hover:bg-white transition-all flex flex-col justify-center \${active ? "border-[#ffd900]/40" : "border-[#224297]/10"}\`}
        style={{ 
          top: labelOffsetY, 
          left: labelOffsetX,
          transform: \`translate(\${labelOffsetX > 0 ? '10px' : 'calc(-100% - 10px)'}, -50%)\`
        }}
      >
        <div className="flex items-center gap-2 mb-1.5">
           <div className={\`w-2 h-2 rounded-full shadow-sm \${active ? "bg-[#ffd900]" : "bg-[#224297]"}\`}></div>
           <h5 className="text-[12px] font-bold text-[#2d3142] leading-none tracking-tight">{title}</h5>
        </div>
        <p className="text-[10.5px] text-[#6b7280] pl-4 leading-relaxed">{subtitle}</p>
      </motion.div>
    </div>
  );
};`;

code = code.replace(hudHotspotRegex, newHudHotspot);

// Update invocation in loop
const invocationRegex = /<HudHotspot[\s\S]*?\/>/g;
// We need to carefully replace the invocation block inside map. Let's do it cleanly:
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

fs.writeFileSync('src/components/heroui/modern-equipment.tsx', code);
console.log("Hotspot Component and Invocation Updated!");
