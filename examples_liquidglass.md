<!-- SVG Filter (include once in your document) -->
<svg width="0" height="0" style="position: absolute;">
  <defs>
    <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence 
        type="fractalNoise" 
        baseFrequency="0.028 0.028"
        numOctaves="2" 
        seed="92" 
        result="noise" 
      />
      <feGaussianBlur 
        in="noise" 
        stdDeviation="2" 
        result="blurred" 
      />
      <feDisplacementMap 
        in="SourceGraphic" 
        in2="blurred" 
        scale="130"
        xChannelSelector="R" 
        yChannelSelector="G" 
      />
    </filter>
  </defs>
</svg>

<!-- Liquid Glass Card -->
<div class="liquid-glass-card">
  <div class="card-content">
    <div class="card-header">
      <div class="user-info">
        <div class="avatar">
          <svg class="avatar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="user-details">
          <p class="user-name">Jane Doe</p>
          <p class="user-role">UX Designer</p>
        </div>
      </div>
      <svg class="notification-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
    </div>
    <div class="card-body">
      <h3 class="card-title">Styled Component</h3>
      <p class="card-description">This is a sample of how your content might look inside.</p>
      <button class="glass-button">Get Started</button>
    </div>
    <p class="card-tip">Tip: Try adjusting the sliders and colors to see real-time changes!</p>
  </div>
</div>

<style>
/* Liquid Glass Card */
.liquid-glass-card {
  position: relative;
  width: 400px;
  height: 300px;
  border-radius: 28px;
  isolation: isolate;
  box-shadow: 0px 0px 21px -8px rgba(255, 255, 255, 0.3);
  cursor: pointer;
}


/* Tint and inner shadow layer */
.liquid-glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: 28px;
  box-shadow: inset 0 0 9px -7px rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0);
  pointer-events: none;
}

/* Backdrop blur and distortion layer */
.liquid-glass-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: 28px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  filter: url(#glass-distortion);
  -webkit-filter: url(#glass-distortion);
  isolation: isolate;
  pointer-events: none;
}

/* Content styling */
.card-content {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  color: white;
  text-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-icon {
  width: 20px;
  height: 20px;
  color: #3b82f6;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 600;
  margin: 0;
}

.user-role {
  font-size: 12px;
  opacity: 0.7;
  margin: 0;
}

.notification-icon {
  width: 20px;
  height: 20px;
  opacity: 0.5;
}

.card-body {
  text-align: center;
  margin-top: 8px;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 4px 0;
}

.card-description {
  font-size: 14px;
  opacity: 0.7;
  margin: 0 0 16px 0;
}

.glass-button {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.glass-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.4);
}

.card-tip {
  font-size: 12px;
  text-align: center;
  color: #e0e6ed;
  margin: 16px 0 0 0;
}
</style>