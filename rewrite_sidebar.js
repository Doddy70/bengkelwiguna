const fs = require('fs');

let code = fs.readFileSync('src/components/heroui/modern-equipment.tsx', 'utf8');

// 1. Shift Car Image
const carWrapperRegex = /<div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-12 pr-12">/;
const newCarWrapper = `<div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-12 pl-[18%]">`;
code = code.replace(carWrapperRegex, newCarWrapper);

// 2. Replace Floating Left Controls with Dashboard Sidebar
const leftControlsRegex = /\{\/\* Floating Left Controls \*\/\}([\s\S]*?)<\/div>/;

const newLeftSidebar = `{/* Floating Dashboard Left Sidebar */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30 pointer-events-auto">
              
              {/* Card 1: Product Identity & QR */}
              <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.6}} className="bg-white/95 backdrop-blur-3xl rounded-[1.5rem] p-5 shadow-[0_8px_32px_rgba(34,66,151,0.08)] border border-[#224297]/10 w-[240px]">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-11 h-11 rounded-full bg-[#224297]/10 flex items-center justify-center shrink-0">
                      <FeatherIcons.Cpu className="text-[#224297]" size={18} />
                   </div>
                   <div>
                      <h4 className="font-bold text-[13px] text-[#2d3142] leading-tight">Wiguna <span className="text-[#224297]">Scanner</span></h4>
                      <p className="text-[10px] text-[#6b7280]">Tech Division</p>
                   </div>
                </div>
                
                <div className="flex gap-2 mb-4">
                   <button className="flex-1 bg-[#224297] text-white text-[11px] font-semibold py-2.5 rounded-[0.8rem] flex items-center justify-center gap-2 hover:bg-[#1a3375] transition-colors shadow-md">
                      <FeatherIcons.MessageCircle size={13} /> Tanya Admin
                   </button>
                   <button className="w-9 h-9 rounded-[0.8rem] bg-gray-50 border border-gray-200 flex items-center justify-center text-[#2d3142] hover:bg-gray-100 transition-colors shrink-0 shadow-sm">
                      <FeatherIcons.Share2 size={13} />
                   </button>
                </div>

                <div className="border border-gray-100 rounded-xl p-3 flex flex-col items-center justify-center gap-2 bg-gray-50/50 relative">
                   <FeatherIcons.Maximize size={12} className="text-gray-300 absolute top-3 right-3" />
                   {/* Dummy SVG QR Code */}
                   <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="opacity-80 mt-1">
                      <rect width="100" height="100" rx="10" fill="white"/>
                      <rect x="10" y="10" width="25" height="25" rx="4" stroke="#2d3142" strokeWidth="6"/>
                      <rect x="65" y="10" width="25" height="25" rx="4" stroke="#2d3142" strokeWidth="6"/>
                      <rect x="10" y="65" width="25" height="25" rx="4" stroke="#2d3142" strokeWidth="6"/>
                      <path d="M45 10 h10 v10 h-10 z M45 30 h10 v10 h-10 z M25 45 h10 v10 h-10 z M65 45 h25 v10 h-25 z M45 65 h10 v25 h-10 z M65 65 h10 v10 h-10 z M80 80 h10 v10 h-10 z" fill="#2d3142"/>
                   </svg>
                   <div className="text-center mt-1">
                      <p className="text-[9px] font-bold text-[#2d3142]">Scan Booking</p>
                      <p className="text-[8px] text-gray-500">ID: WIGUNA-X7</p>
                   </div>
                </div>
              </motion.div>

              {/* Card 2: Customer Stats */}
              <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.6, delay:0.1}} className="bg-white/95 backdrop-blur-3xl rounded-[1.5rem] p-5 shadow-[0_8px_32px_rgba(34,66,151,0.08)] border border-[#224297]/10 w-[240px] relative overflow-hidden">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <FeatherIcons.Users size={11} className="text-[#224297]" />
                      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Total Pelanggan</p>
                    </div>
                    <h3 className="text-[22px] font-bold text-[#2d3142] leading-none">1,284<span className="text-[12px] font-normal text-gray-400 ml-1">Unit</span></h3>
                  </div>
                  <div className="bg-green-100/80 text-green-700 text-[8px] font-bold px-2 py-1 rounded-md flex items-center gap-0.5 border border-green-200">
                    <FeatherIcons.TrendingUp size={9} /> 12%
                  </div>
                </div>
                
                {/* Sparkline Chart */}
                <div className="h-[35px] mt-3 relative">
                  <svg width="100%" height="100%" viewBox="0 0 200 40" preserveAspectRatio="none" className="drop-shadow-sm">
                     <motion.path 
                       d="M0,20 C20,20 30,5 40,20 C50,35 60,10 70,20 C80,30 90,5 100,20 C110,35 120,15 130,20 C140,25 150,5 160,20 C170,35 180,20 200,20"
                       fill="transparent"
                       stroke="#ffd900"
                       strokeWidth="2.5"
                       strokeLinecap="round"
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                     />
                  </svg>
                </div>
              </motion.div>

              {/* Card 3: Car Health Stats */}
              <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.6, delay:0.2}} className="bg-white/95 backdrop-blur-3xl rounded-[1.5rem] p-5 shadow-[0_8px_32px_rgba(34,66,151,0.08)] border border-[#224297]/10 w-[240px]">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-1.5">
                    <FeatherIcons.Activity size={11} className="text-[#224297]" />
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Health Index</p>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                </div>
                
                <div className="flex items-end gap-1.5 mb-3">
                  <h3 className="text-[22px] font-bold text-[#2d3142] leading-none">98<span className="text-[14px] text-gray-400">%</span></h3>
                  <p className="text-[11px] font-semibold text-[#224297] mb-0.5">Optimal</p>
                </div>
                
                {/* Sine Wave Animated Chart */}
                <div className="h-[25px] relative w-full overflow-hidden rounded-md bg-[#224297]/5">
                   <motion.div 
                      className="absolute top-0 left-0 w-[200%] h-full flex"
                      animate={{ x: "-50%" }}
                      transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                   >
                      <svg width="100%" height="100%" viewBox="0 0 400 30" preserveAspectRatio="none">
                         <path d="M0,15 Q25,0 50,15 T100,15 T150,15 T200,15 T250,15 T300,15 T350,15 T400,15" fill="none" stroke="#224297" strokeWidth="1.5" strokeOpacity="0.3"/>
                         <path d="M0,15 Q25,30 50,15 T100,15 T150,15 T200,15 T250,15 T300,15 T350,15 T400,15" fill="none" stroke="#ffd900" strokeWidth="1.5"/>
                      </svg>
                   </motion.div>
                </div>
              </motion.div>

            </div>`;

code = code.replace(leftControlsRegex, newLeftSidebar);

fs.writeFileSync('src/components/heroui/modern-equipment.tsx', code);
console.log('Sidebar integrated successfully.');
