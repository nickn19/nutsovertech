import React from "react";

export const Loader3D = () => (
  <div className="flex items-center justify-center min-h-screen bg-transparent">
    <div className="loader-cube3d">
      <div className="cube-face cube-face-front" />
      <div className="cube-face cube-face-back" />
      <div className="cube-face cube-face-right" />
      <div className="cube-face cube-face-left" />
      <div className="cube-face cube-face-top" />
      <div className="cube-face cube-face-bottom" />
    </div>
    <style>{`
      .loader-cube3d {
        width: 64px;
        height: 64px;
        position: relative;
        transform-style: preserve-3d;
        animation: cube-spin 1.2s infinite linear;
      }
      .cube-face {
        position: absolute;
        width: 64px;
        height: 64px;
        background: linear-gradient(135deg, #be4948 60%, #fde2e2 100%);
        opacity: 0.95;
        border-radius: 12px;
        box-shadow: 0 4px 24px 0 #be494833;
      }
      .cube-face-front  { transform: rotateY(0deg) translateZ(32px); }
      .cube-face-back   { transform: rotateY(180deg) translateZ(32px); }
      .cube-face-right  { transform: rotateY(90deg) translateZ(32px); }
      .cube-face-left   { transform: rotateY(-90deg) translateZ(32px); }
      .cube-face-top    { transform: rotateX(90deg) translateZ(32px); }
      .cube-face-bottom { transform: rotateX(-90deg) translateZ(32px); }
      @keyframes cube-spin {
        0% { transform: rotateX(0deg) rotateY(0deg); }
        100% { transform: rotateX(360deg) rotateY(360deg); }
      }
    `}</style>
  </div>
);

export default Loader3D; 