"use client";

import React from "react";

export default function FontAwesomeLink() {
  return (
    <link 
      rel="stylesheet" 
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
      crossOrigin="anonymous" 
      referrerPolicy="no-referrer"
      media="print"
      onLoad={(e) => {
        const target = e.currentTarget;
        if (target) target.media = 'all';
      }}
    />
  );
}
