const fs = require('fs');

let code = fs.readFileSync('src/components/heroui/modern-equipment.tsx', 'utf8');

const rightWidgetRegex = /\{\/\* Right Side Floating Widget \*\/\}([\s\S]*?)<\/motion\.div>/;

const newRightWidget = `{/* Right Side Medical Report Card */}
            <motion.div 
              className="absolute right-8 top-1/2 -translate-y-1/2 w-[340px] bg-white/95 backdrop-blur-3xl p-5 rounded-[1.5rem] shadow-[0_12px_40px_rgba(34,66,151,0.08)] border border-white/60 pointer-events-auto z-30 flex flex-col gap-4 max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-[#2d3142] text-[18px] mb-1">{activeHotspot ? activeHotspot.title : activeItem.title}</h3>
                  <p className="text-[10px] text-[#8b95a5] flex items-center gap-1">
                     <FeatherIcons.Clock size={10} /> Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </div>
                <button onClick={() => setActiveHotspot(null)} className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                   <FeatherIcons.X size={14} />
                </button>
              </div>
              
              {/* Clinical Report Block */}
              <div className="bg-[#224297]/5 rounded-xl p-4 border border-[#224297]/10 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-16 h-16 bg-[#224297]/10 rounded-full blur-xl -mr-8 -mt-8"></div>
                 
                 <div className="flex items-start gap-2 mb-2">
                   <FeatherIcons.FileText size={14} className="text-[#224297] mt-0.5 shrink-0" />
                   <div>
                     <h4 className="text-[11px] font-bold text-[#2d3142] uppercase tracking-wide">Analisa Sistem</h4>
                     <p className="text-[13px] font-semibold text-[#224297]">{(activeHotspot ? activeHotspot.title : "Diagnosa Awal")}</p>
                   </div>
                 </div>
                 
                 <p className="text-[12px] text-[#6b7280] leading-relaxed mt-2 text-justify">
                   {activeHotspot ? activeHotspot.widgetDesc : activeItem.description}
                 </p>
              </div>

              {/* Thumbnail Gallery (X-Ray Style) */}
              <div className="flex gap-2">
                 {[1,2,3,4].map((i) => (
                    <div key={i} className="flex-1 aspect-square bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer border border-gray-200">
                       <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                          <FeatherIcons.Camera size={14} className="text-gray-400" />
                       </div>
                       <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                         <path d={\`M\${10*i},0 Q50,50 \${90/i},100\`} stroke="white" strokeWidth="2" fill="none" />
                       </svg>
                    </div>
                 ))}
              </div>

              {/* Mechanic / Doctor Profile */}
              <div className="flex items-center justify-between border-t border-b border-gray-100 py-3">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 overflow-hidden flex items-center justify-center relative">
                       <FeatherIcons.User size={20} className="text-blue-500" />
                       <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                       <h4 className="text-[13px] font-bold text-[#2d3142]">Mekanik Kepala</h4>
                       <p className="text-[10px] text-[#8b95a5]">Wiguna Engine Specialist</p>
                    </div>
                 </div>
                 <button className="text-[10px] font-bold text-[#224297] bg-[#224297]/10 px-3 py-1.5 rounded-lg hover:bg-[#224297]/20 transition-colors flex items-center gap-1">
                    <FeatherIcons.Eye size={12} /> View Report
                 </button>
              </div>

              {/* Metrics Area */}
              <div className="grid grid-cols-2 gap-3">
                 {/* Metric 1 */}
                 <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                   <div className="flex items-center justify-between mb-1">
                     <h4 className="text-[10px] font-bold text-gray-500">{activeHotspot ? activeHotspot.widgetMetric1?.label : activeItem.specs?.metric1?.label}</h4>
                     <FeatherIcons.Activity size={10} className="text-gray-400" />
                   </div>
                   <div className="flex items-end gap-1">
                     <p className="text-[18px] font-bold text-[#224297] leading-none whitespace-nowrap overflow-visible">
                        {metric1Scramble !== null ? metric1Scramble : (activeHotspot ? activeHotspot.widgetMetric1?.value : activeItem.specs?.metric1?.value)}
                     </p>
                   </div>
                   <div className="h-1 w-full bg-gray-200 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-[#224297] w-[80%] rounded-full"></div>
                   </div>
                 </div>

                 {/* Metric 2 */}
                 <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                   <div className="flex items-center justify-between mb-1">
                     <h4 className="text-[10px] font-bold text-gray-500">{activeHotspot ? activeHotspot.widgetMetric2?.label : activeItem.specs?.metric2?.label}</h4>
                     <FeatherIcons.Thermometer size={10} className="text-gray-400" />
                   </div>
                   <div className="flex items-end gap-1">
                     <p className="text-[18px] font-bold text-[#224297] leading-none whitespace-nowrap overflow-visible">
                        {metric2Scramble !== null ? metric2Scramble : (activeHotspot ? activeHotspot.widgetMetric2?.value : activeItem.specs?.metric2?.value)}
                     </p>
                   </div>
                   <div className="h-1 w-full bg-gray-200 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-[#ffd900] w-[60%] rounded-full"></div>
                   </div>
                 </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-[#224297] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1a3375] hover:shadow-lg hover:shadow-blue-900/20 transition-all mt-1">
                 <FeatherIcons.Calendar size={16} /> Booking Sekarang
              </button>
              
            </motion.div>`;

code = code.replace(rightWidgetRegex, newRightWidget);

fs.writeFileSync('src/components/heroui/modern-equipment.tsx', code);
console.log('Right panel successfully refactored to Medical Report Card style.');
