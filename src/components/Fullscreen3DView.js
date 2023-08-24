// components/Fullscreen3DView.js
import React, { useRef, useEffect } from "react";
import { init3DView } from "./utils/3dUtils"; // Import the helper function from correct path

const Fullscreen3DView = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    init3DView(containerRef.current); // Use the helper function to initialize the 3D view
  }, []);

  return <div className="fullscreen-container" ref={containerRef}></div>;
};

export default Fullscreen3DView;
