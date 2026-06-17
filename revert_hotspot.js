const fs = require('fs');

let code = fs.readFileSync('src/components/heroui/modern-equipment.tsx', 'utf8');

const hudHotspotRegex = /const HudHotspot = \(\{.*?\}\) => \{[\s\S]*?^  \);$\n\};/m;

const oldHudHotspot = `const HudHotspot = ({ top, left, title, subtitle, lineAngle, lineLength, labelOffsetX, labelOffsetY, delay = 0, imageUrl, onClick }: any) => {
  return (
    <div className="absolute z-20" style={{ top, left }}>
      {/* Glowing Dot */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay }}
        className="relative group cursor-pointer"
        onClick={onClick}
      >
        <div className="absolute inset-0 bg-[#ffd900] rounded-full blur-[8px] opacity-60 animate-pulse"></div>
        <div className="relative w-4 h-4 bg-white border-2 border-[#ffd900] rounded-full shadow-[0_0_15px_rgba(255,217,0,0.8)] z-10"></div>
        <div className="absolute inset-[-10px] rounded-full border border-[#ffd900]/30 animate-ping"></div>
      </motion.div>

      {/* Connecting Line */}
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: lineLength, opacity: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.3, ease: smoothBezier }}
        className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-[#ffd900] to-transparent origin-left z-0"
        style={{ transform: \`translateY(-50%) rotate(\${lineAngle}deg)\` }}
      />

      {/* Label Box */}
      <motion.div 
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.8 }}
        onClick={onClick}
        className="absolute bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-2xl px-4 py-3 w-[180px] pointer-events-auto cursor-pointer hover:bg-white/90 transition-all flex flex-col justify-center min-h-[75px]"
        style={{ top: labelOffsetY, left: labelOffsetX }}
      >
        <div className="flex items-center gap-2 mb-1.5">
           <div className="w-2 h-2 rounded-full bg-[#2d3142] shadow-[0_0_5px_rgba(45,49,66,0.5)]"></div>
           <h5 className="text-[13px] font-bold text-[#2d3142] leading-none">{title}</h5>
        </div>
        <p className="text-[11px] text-[#8b95a5] pl-4 leading-snug">{subtitle}</p>
      </motion.div>
    </div>
  );
};`;

code = code.replace(hudHotspotRegex, oldHudHotspot);

const mappingRegex = /\{showHotspots && activeItem\.hotspots\?\.map\(\(hotspot: any, index: number\) => \([\s\S]*?\)\)\}/;
const oldMapping = `{showHotspots && activeItem.hotspots?.map((hotspot: any, index: number) => (
                     <HudHotspot 
                       key={\`\${activeItem.id}-hotspot-\${index}\`}
                       top={hotspot.top} 
                       left={hotspot.left} 
                       title={hotspot.title} 
                       subtitle={hotspot.subtitle}
                       lineAngle={hotspot.lineAngle} 
                       lineLength={hotspot.lineLength}
                       labelOffsetX={hotspot.labelOffsetX} 
                       labelOffsetY={hotspot.labelOffsetY}
                       delay={0.4 + (index * 0.2)}
                       imageUrl={hotspot.imageUrl}
                       onClick={() => setActiveHotspot(hotspot)}
                     />
                   ))}`;

code = code.replace(mappingRegex, oldMapping);

fs.writeFileSync('src/components/heroui/modern-equipment.tsx', code);
console.log("Hotspot reverted to Glowing Yellow Dot successfully.");
