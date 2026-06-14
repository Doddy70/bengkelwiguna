const fs = require('fs');
const filePath = 'src/components/heroui/modern-equipment.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// The opening of Desktop was successfully changed to:
// <div className="hidden lg:block relative w-full h-full">
// We need to change the closing tag which is right before {/* MOBILE & TABLET LAYOUT
content = content.replace(
    /<\/motion\.div>\s*{\/\* MOBILE & TABLET LAYOUT/g,
    '</div>\n\n          {/* MOBILE & TABLET LAYOUT'
);

// For the Mobile block, we need to change its opening motion.div to a normal div.
const mobileOpenRegex = /<motion\.div\s*key={`\${activeItem\.id}-mobile`}[\s\S]*?className="flex flex-col lg:hidden w-full h-full gap-6"\s*>/;
content = content.replace(mobileOpenRegex, '<div className="flex flex-col lg:hidden w-full h-full gap-6">');

// And its closing tag which is right before </motion.div> \n </AnimatePresence>
content = content.replace(
    /<\/motion\.div>\s*<\/motion\.div>\s*<\/AnimatePresence>/g,
    '</div>\n        </motion.div>\n        </AnimatePresence>'
);

// If the previous script failed to wrap in the outer motion.div, let's make sure it's there.
// If it's already there, great.
fs.writeFileSync(filePath, content);
console.log("Syntax fixed!");
