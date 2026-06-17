const fs = require('fs');
let code = fs.readFileSync('src/components/heroui/modern-equipment.tsx', 'utf8');

// 1. Add new states
const stateInsertion = `
  const [showHotspots, setShowHotspots] = useState(true);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [metric1Scramble, setMetric1Scramble] = useState<number | string | null>(null);
  const [metric2Scramble, setMetric2Scramble] = useState<number | string | null>(null);

  // Initialize chat when item changes
  React.useEffect(() => {
    setChatMessages([
      { sender: 'bot', text: \`Halo! Ada yang bisa saya bantu terkait \${equipmentData[activeItemIndex].name}?\` }
    ]);
  }, [activeItemIndex]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    setChatMessages(prev => [...prev, { sender: 'user', text }]);
    setChatInput("");
    setIsTyping(true);
    
    // Simulate AI thinking and response
    setTimeout(() => {
      setIsTyping(false);
      setChatMessages(prev => [...prev, { sender: 'bot', text: "Saya adalah Asisten AI simulasi. Untuk informasi teknis lebih lanjut mengenai " + activeItem.name + ", silakan tekan tombol Booking Now di sebelah kanan." }]);
    }, 1500);
  };

  const handleScramble = (setter: any, originalValue: any) => {
    let count = 0;
    const interval = setInterval(() => {
      setter(Math.floor(Math.random() * 99) + 1);
      count++;
      if (count > 8) {
        clearInterval(interval);
        setter(originalValue);
      }
    }, 50);
  };
`;

code = code.replace(
  '  const activeItem = equipmentData[activeItemIndex];',
  '  const activeItem = equipmentData[activeItemIndex];\n' + stateInsertion
);

// 2. Hide hotspots if !showHotspots
code = code.replace(
  '{activeItem.hotspots?.map((hotspot: any, index: number) => (',
  '{showHotspots && activeItem.hotspots?.map((hotspot: any, index: number) => ('
);

// 3. Update Left Buttons
code = code.replace(
  '<button className="w-14 h-14 rounded-[1.25rem] bg-white shadow-sm border border-white/60 flex items-center justify-center text-[#2d3142] hover:bg-gray-50 transition-all">',
  '<button onClick={() => setShowHotspots(!showHotspots)} className={`w-14 h-14 rounded-[1.25rem] shadow-sm border border-white/60 flex items-center justify-center transition-all ${showHotspots ? "bg-white text-[#2d3142] hover:bg-gray-50" : "bg-[#2d3142] text-white"}`}>'
);

// 4. Update Chat UI
const chatUIRegex = /\{\/\* Chat Area \*\/\}([\s\S]*?)\{\/\* Input Field \*\/\}/;
const newChatUI = `{/* Chat Area */}
                <div className="flex flex-col gap-3 mt-2 max-h-[140px] overflow-y-auto pr-1 custom-scrollbar">
                  {chatMessages.map((msg, i) => (
                    msg.sender === 'bot' ? (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-full bg-[#224297] flex items-center justify-center text-white shrink-0 mt-1 shadow-md">
                          <FeatherIcons.Zap size={12} fill="white" />
                        </div>
                        <div className="bg-white rounded-[1.2rem] rounded-tl-sm p-3 shadow-sm border border-white/60 max-w-[85%]">
                          <p className="text-[12px] text-[#2d3142] leading-relaxed">
                            <span dangerouslySetInnerHTML={{ __html: msg.text.replace(activeItem.name, \`<strong>\${activeItem.name}</strong>\`) }} />
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div key={i} className="flex items-start justify-end gap-3">
                        <div className="bg-[#2d3142] rounded-[1.2rem] rounded-tr-sm px-3 py-2 shadow-md max-w-[80%]">
                          <p className="text-[12px] text-white">
                            {msg.text}
                          </p>
                        </div>
                      </div>
                    )
                  ))}
                  {isTyping && (
                     <div className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-full bg-[#224297] flex items-center justify-center text-white shrink-0 mt-1 shadow-md">
                          <FeatherIcons.Zap size={12} fill="white" />
                        </div>
                        <div className="bg-white rounded-[1.2rem] rounded-tl-sm p-3 shadow-sm border border-white/60">
                           <div className="flex gap-1">
                             <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                             <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                             <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                           </div>
                        </div>
                      </div>
                  )}
                  
                  {/* Suggested Question if only 1 message */}
                  {chatMessages.length === 1 && activeItem.suggestedQuestions && (
                    <div className="flex justify-end mt-1">
                      <button 
                        onClick={() => handleSendMessage(activeItem.suggestedQuestions[0] || "Apa keunggulannya?")}
                        className="bg-blue-50 hover:bg-blue-100 text-[#224297] text-[11px] font-semibold px-3 py-1.5 rounded-full transition-colors border border-blue-100"
                      >
                        {activeItem.suggestedQuestions[0] || "Apa keunggulannya?"}
                      </button>
                    </div>
                  )}
                </div>

                {/* Input Field */}`;
code = code.replace(chatUIRegex, newChatUI);

// Update Chat Input
const chatInputRegex = /<input[\s\S]*?readOnly\s*\/>/;
const newChatInput = `<input 
                    type="text" 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(chatInput)}
                    placeholder={\`Tanya seputar \${activeItem.name}...\`} 
                    className="flex-1 bg-transparent px-4 py-2 text-[13px] text-[#2d3142] outline-none placeholder-[#8b95a5]"
                  />`;
code = code.replace(chatInputRegex, newChatInput);

const chatSendBtnRegex = /<button className="w-9 h-9 rounded-full bg-\[\#2d3142\] flex items-center justify-center text-white hover:bg-\[\#224297\] transition-colors shadow-md shrink-0">/;
const newChatSendBtn = `<button onClick={() => handleSendMessage(chatInput)} className="w-9 h-9 rounded-full bg-[#2d3142] flex items-center justify-center text-white hover:bg-[#224297] transition-colors shadow-md shrink-0 cursor-pointer pointer-events-auto">`;
code = code.replace(chatSendBtnRegex, newChatSendBtn);

// 5. Update Spec Chevrons
// Replace Left Chevron 1
code = code.replace(
  /<FeatherIcons\.ChevronLeft size=\{18\} className="text-\[\#394263\] cursor-pointer" \/>/,
  '<FeatherIcons.ChevronLeft size={18} className="text-[#394263] cursor-pointer hover:text-[#224297]" onClick={() => handleScramble(setMetric1Scramble, activeItem.specs?.metric1?.value || 99)} />'
);
// Replace Right Chevron 1
code = code.replace(
  /<FeatherIcons\.ChevronRight size=\{18\} className="text-\[\#394263\] cursor-pointer" \/>/,
  '<FeatherIcons.ChevronRight size={18} className="text-[#394263] cursor-pointer hover:text-[#224297]" onClick={() => handleScramble(setMetric1Scramble, activeItem.specs?.metric1?.value || 99)} />'
);
// Replace Value 1
code = code.replace(
  '<p className="text-[22px] font-bold text-[#2d3142] leading-none">{activeItem.specs?.metric1?.value || 99}</p>',
  '<p className="text-[22px] font-bold text-[#2d3142] leading-none w-[40px]">{metric1Scramble !== null ? metric1Scramble : (activeItem.specs?.metric1?.value || 99)}</p>'
);

// Replace Left Chevron 2
code = code.replace(
  /<FeatherIcons\.ChevronLeft size=\{18\} className="text-\[\#394263\] cursor-pointer" \/>/,
  '<FeatherIcons.ChevronLeft size={18} className="text-[#394263] cursor-pointer hover:text-[#224297]" onClick={() => handleScramble(setMetric2Scramble, activeItem.specs?.metric2?.value || "Basic")} />'
);
// Replace Right Chevron 2
code = code.replace(
  /<FeatherIcons\.ChevronRight size=\{18\} className="text-\[\#394263\] cursor-pointer" \/>/,
  '<FeatherIcons.ChevronRight size={18} className="text-[#394263] cursor-pointer hover:text-[#224297]" onClick={() => handleScramble(setMetric2Scramble, activeItem.specs?.metric2?.value || "Basic")} />'
);
// Replace Value 2
code = code.replace(
  '<p className="text-[15px] font-bold text-[#2d3142] leading-none">{activeItem.specs?.metric2?.value || "Basic"}</p>',
  '<p className="text-[15px] font-bold text-[#2d3142] leading-none w-[40px]">{metric2Scramble !== null ? metric2Scramble : (activeItem.specs?.metric2?.value || "Basic")}</p>'
);

// 6. Update Bottom Widgets Links
code = code.replace(
  /<div className="bg-white\/40 backdrop-blur-2xl rounded-\[2rem\] p-6 shadow-\[0_8px_32px_rgba\(0,0,0,0\.03\)\] border border-white\/60 flex items-center justify-between">/g,
  '<div className="bg-white/40 backdrop-blur-2xl rounded-[2rem] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.03)] border border-white/60 flex items-center justify-between cursor-pointer hover:bg-white/60 transition-colors group">'
);
// The arrow up right button class
code = code.replace(
  /<button className="w-10 h-10 rounded-\[1rem\] bg-white shadow-sm flex items-center justify-center text-\[\#8b95a5\] hover:text-\[\#2d3142\] transition-colors">/g,
  '<button className="w-10 h-10 rounded-[1rem] bg-white shadow-sm flex items-center justify-center text-[#8b95a5] group-hover:text-[#224297] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">'
);

fs.writeFileSync('src/components/heroui/modern-equipment.tsx', code);
console.log('Successfully updated modern-equipment.tsx');
